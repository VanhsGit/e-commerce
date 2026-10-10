using System.Text.Json;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class ProductColorImagesTests
{
    [Theory]
    [InlineData("bike")]
    [InlineData("machine")]
    [InlineData("appliance")]
    public async Task Save_PersistsAllImagesAndDetectsChangesInsideAColor(string kind)
    {
        using var connection = new SqliteConnection("DataSource=:memory:");
        await connection.OpenAsync();
        await using var store = new StoreContext(new DbContextOptionsBuilder<StoreContext>().UseSqlite(connection).Options);
        await store.Database.EnsureCreatedAsync();
        store.Add(new Company { Id = "company", Name = "Company", Description = "", LogoUrl = "", Address = "", PhoneNumber = "", Email = "", Website = "" });
        store.Add(new Brand { Id = "brand", Name = "Brand", Description = "", LogoUrl = "" });
        var colors = new List<ProductColorOption> { new() { Name = "Đỏ đun", ImageUrl = "/front.jpg", ImageUrls = ["/front.jpg", "/back.jpg"] } };
        BaseEntity product = kind switch
        {
            "bike" => new ElectricBikeProduct { Id = "product", Name = "Bike", Brand = "Brand", Model = "M1", Description = "", PictureUrl = "", CompanyId = "company", BrandId = "brand", Colors = colors },
            "machine" => new AgriculturalMachineProduct { Id = "product", Name = "Machine", Brand = "Brand", Model = "M1", Description = "", PictureUrl = "", CompanyId = "company", BrandId = "brand", Colors = colors },
            _ => new ElectricalApplianceProduct { Id = "product", CompanyId = "company", BrandId = "brand", Colors = colors },
        };
        store.Add(product);
        await store.SaveChangesAsync();
        store.ChangeTracker.Clear();

        var loaded = await Load(store, kind, product.Id);
        var loadedColors = Colors(loaded);
        Assert.Equal(new[] { "/front.jpg", "/back.jpg" }, loadedColors[0].ImageUrls);
        loadedColors[0].ImageUrls.Add("/side.jpg");
        Assert.Equal(1, await store.SaveChangesAsync());
        store.ChangeTracker.Clear();
        loaded = await Load(store, kind, product.Id);
        Assert.Equal(new[] { "/front.jpg", "/back.jpg", "/side.jpg" }, Colors(loaded)[0].ImageUrls);
        Colors(loaded)[0].ImageUrls.Reverse();
        Assert.Equal(1, await store.SaveChangesAsync());
        store.ChangeTracker.Clear();
        loaded = await Load(store, kind, product.Id);
        Assert.Equal(new[] { "/side.jpg", "/back.jpg", "/front.jpg" }, Colors(loaded)[0].ImageUrls);
        Assert.Equal("Đỏ đun", Colors(loaded)[0].Name);
    }

    [Fact]
    public void LegacyJson_StillRetainsTheColorNameAndSingleImage()
    {
        var colors = JsonSerializer.Deserialize<List<ProductColorOption>>("[{\"Name\":\"Đỏ\",\"ImageUrl\":\"/old.jpg\",\"HexCode\":\"#f00\"}]")!;
        Assert.Equal("Đỏ", colors[0].Name);
        Assert.Equal("/old.jpg", colors[0].ImageUrl);
        Assert.Empty(colors[0].ImageUrls);
    }

    private static List<ProductColorOption> Colors(BaseEntity product) => product switch
    {
        ElectricBikeProduct bike => bike.Colors,
        AgriculturalMachineProduct machine => machine.Colors,
        ElectricalApplianceProduct appliance => appliance.Colors,
        _ => throw new InvalidOperationException(),
    };
    private static async Task<BaseEntity> Load(StoreContext store, string kind, string id) => kind switch
    {
        "bike" => (await store.ElectricBikeProducts.FindAsync(id))!,
        "machine" => (await store.AgriculturalMachineProducts.FindAsync(id))!,
        _ => (await store.ElectricalApplianceProducts.FindAsync(id))!,
    };
}
