using Core.Entities;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class ElectricalApplianceSpecificationTests
{
    [Fact]
    public async Task Specification_FiltersByTypeSearchAndActiveStatus_AndIncludesRelations()
    {
        await using var db = CreateStoreContext();
        var company = Company();
        var brand = Brand();
        db.AddRange(company, brand);
        db.ElectricalApplianceProducts.AddRange(
            Product("pump-active", "Máy bơm ly tâm", ElectricalApplianceType.WaterPump, true, company, brand),
            Product("pump-inactive", "Máy bơm ngừng bán", ElectricalApplianceType.WaterPump, false, company, brand),
            Product("drill-active", "Máy khoan pin", ElectricalApplianceType.HandTool, true, company, brand));
        await db.SaveChangesAsync();

        var spec = new ElectricalApplianceProductsWithSpec(
            companyId: null,
            brandId: null,
            type: ElectricalApplianceType.WaterPump,
            search: "ly tâm",
            isUsed: true);
        var rows = await new GenericRepository<ElectricalApplianceProduct>(db).ListAsync(spec);

        var row = Assert.Single(rows);
        Assert.Equal("Máy bơm ly tâm", row.Name);
        Assert.Equal("Công ty điện máy", row.Company.Name);
        Assert.Equal("Điện Cơ Việt", row.BrandEntity.Name);
    }

    [Fact]
    public async Task IdSpecification_HidesInactiveProductUnlessExplicitlyIncluded()
    {
        await using var db = CreateStoreContext();
        var company = Company();
        var brand = Brand();
        db.AddRange(company, brand);
        db.ElectricalApplianceProducts.Add(
            Product("inactive-id", "Ắc quy ngừng bán", ElectricalApplianceType.Battery, false, company, brand));
        await db.SaveChangesAsync();
        var repository = new GenericRepository<ElectricalApplianceProduct>(db);

        var publicResult = await repository.GetEntityWithSpec(
            new ElectricalApplianceProductsWithSpec("inactive-id", includeInactive: false));
        var adminResult = await repository.GetEntityWithSpec(
            new ElectricalApplianceProductsWithSpec("inactive-id", includeInactive: true));

        Assert.Null(publicResult);
        Assert.NotNull(adminResult);
    }

    private static StoreContext CreateStoreContext()
    {
        var options = new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        return new StoreContext(options);
    }

    private static Company Company() => new()
    {
        Id = "company-spec",
        Name = "Công ty điện máy",
        Description = "Nhà phân phối",
        LogoUrl = string.Empty,
        Address = string.Empty,
        PhoneNumber = string.Empty,
        Email = string.Empty,
        Website = string.Empty
    };

    private static Brand Brand() => new()
    {
        Id = "brand-spec",
        Name = "Điện Cơ Việt",
        Description = "Thương hiệu mẫu",
        LogoUrl = string.Empty
    };

    private static ElectricalApplianceProduct Product(
        string id,
        string name,
        ElectricalApplianceType type,
        bool isUsed,
        Company company,
        Brand brand) => new()
    {
        Id = id,
        Name = name,
        Brand = brand.Name,
        Model = id,
        Type = type,
        Description = name,
        Price = 1_000_000,
        StockQuantity = 5,
        PictureUrl = "/assets/images/img-ph.jpg",
        CompanyId = company.Id,
        Company = company,
        BrandId = brand.Id,
        BrandEntity = brand,
        IsUsed = isUsed
    };
}
