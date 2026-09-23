using Core.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Xunit;

namespace API.Tests;

public sealed class ElectricalApplianceSeedTests
{
    [Fact]
    public void Model_ContainsSixNamedProductsWithSixDistinctTypes()
    {
        var options = new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        using var context = new StoreContext(options);
        var entityType = context.GetService<IDesignTimeModel>().Model
            .FindEntityType(typeof(ElectricalApplianceProduct));

        Assert.NotNull(entityType);
        var rows = entityType!.GetSeedData().ToList();
        var expectedNames = new[]
        {
            "Máy rửa xe",
            "Dụng cụ cầm tay",
            "Máy xây dựng",
            "Mô Tơ",
            "Máy Bơm",
            "Ắc quy các loại"
        };

        Assert.Equal(6, rows.Count);
        Assert.Equal(expectedNames.Order(), rows.Select(row => (string)row[nameof(ElectricalApplianceProduct.Name)]!).Order());
        Assert.Equal(6, rows.Select(row => row[nameof(ElectricalApplianceProduct.Type)]).Distinct().Count());
    }
}
