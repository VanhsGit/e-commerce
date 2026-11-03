using API.Controllers;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class ProductCategorySlugReuseTests
{
    [Fact]
    public async Task Delete_RemovesCategoryFromDatabase_AndAllowsSlugReuse()
    {
        await using var connection = new SqliteConnection("DataSource=:memory:");
        await connection.OpenAsync();
        var options = new DbContextOptionsBuilder<StoreContext>().UseSqlite(connection).Options;
        await using var context = new StoreContext(options);
        await context.Database.EnsureCreatedAsync();
        var controller = CreateController(context);

        var first = await controller.Create(NewDto("xe-moi"));
        Assert.IsType<CreatedAtActionResult>(first.Result);
        var firstId = (await context.ProductCategories.SingleAsync(x => x.Slug == "xe-moi")).Id;

        // Còn đang dùng: trùng slug bị từ chối.
        var duplicate = await controller.Create(NewDto("xe-moi"));
        Assert.IsType<BadRequestObjectResult>(duplicate.Result);

        // Xóa khỏi database thì slug được dùng lại.
        Assert.IsType<OkResult>(await controller.Delete(firstId));
        Assert.False(await context.ProductCategories.AnyAsync(x => x.Id == firstId));

        var reused = await controller.Create(NewDto("xe-moi"));
        Assert.IsType<CreatedAtActionResult>(reused.Result);

        var rows = await context.ProductCategories.Where(x => x.Slug == "xe-moi").ToListAsync();
        Assert.Single(rows);
        Assert.True(rows[0].IsUsed);
    }

    [Fact]
    public async Task Delete_RefusesCategoryWithInactiveChild()
    {
        await using var context = CreateInMemoryContext();
        context.ProductCategories.Add(Row("parent", true));
        context.ProductCategories.Add(new ProductCategory
        {
            Id = "child",
            Kind = ProductKind.Bike,
            Name = "Danh mục con",
            Slug = "danh-muc-con",
            ParentId = "parent",
            IsUsed = false
        });
        await context.SaveChangesAsync();

        var result = await CreateController(context).Delete("parent");

        Assert.IsType<BadRequestObjectResult>(result);
        Assert.True(await context.ProductCategories.AnyAsync(x => x.Id == "parent"));
        Assert.True(await context.ProductCategories.AnyAsync(x => x.Id == "child"));
    }

    [Fact]
    public async Task PartialUniqueIndex_AllowsInactiveDuplicate_ButBlocksTwoActiveRows()
    {
        await using var connection = new SqliteConnection("DataSource=:memory:");
        await connection.OpenAsync();
        var options = new DbContextOptionsBuilder<StoreContext>().UseSqlite(connection).Options;
        await using var context = new StoreContext(options);
        await context.Database.EnsureCreatedAsync();

        context.ProductCategories.Add(Row("a", false));
        context.ProductCategories.Add(Row("b", true));
        await context.SaveChangesAsync();

        context.ProductCategories.Add(Row("c", true));
        await Assert.ThrowsAsync<DbUpdateException>(() => context.SaveChangesAsync());
    }

    private static ProductCategory Row(string id, bool isUsed) => new()
    {
        Id = id,
        Kind = ProductKind.Bike,
        Name = "Trùng",
        Slug = "slug-trung",
        IsUsed = isUsed
    };

    private static CreateProductCategoryDto NewDto(string slug) => new()
    {
        Kind = ProductKind.Bike,
        Name = "Xe mới",
        Slug = slug
    };

    private static StoreContext CreateInMemoryContext() =>
        new(new DbContextOptionsBuilder<StoreContext>().UseInMemoryDatabase(Guid.NewGuid().ToString("N")).Options);

    private static ProductCategoriesController CreateController(StoreContext context)
    {
        var mapper = new Mapper(new MapperConfiguration(cfg => cfg.AddProfile<MappingProfiles>()),
            type => Activator.CreateInstance(type)!);
        return new ProductCategoriesController(new UnitOfWork(context), mapper, context);
    }
}
