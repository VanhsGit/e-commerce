using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace API.Tests;

public sealed class ElectricalApplianceMappingTests
{
    [Fact]
    public void UpdateDto_MapsEditableFieldsWithoutReplacingIdentity()
    {
        var mapper = CreateMapper();
        var entity = Product();
        var originalId = entity.Id;
        var dto = new UpdateElectricalApplianceProductDto
        {
            Id = "payload-id-that-must-not-replace-entity-id",
            Name = "Máy bơm tăng áp",
            Brand = "Panasonic",
            Model = "A-130JAK",
            Type = ElectricalApplianceType.WaterPump,
            Description = "Bơm nước gia đình",
            Price = 2_490_000,
            StockQuantity = 8,
            PictureUrl = "/assets/images/img-ph.jpg",
            Power = "125W",
            Voltage = "220V",
            Capacity = "30 lít/phút",
            Compatibility = null,
            CompanyId = "company-seed-electrical-001",
            BrandId = "brand-seed-electrical-001",
            Metadata = new() { ["warrantyMonths"] = "12" },
            IsUsed = true
        };

        mapper.Map(dto, entity);

        Assert.Equal(originalId, entity.Id);
        Assert.Equal("Máy bơm tăng áp", entity.Name);
        Assert.Equal(ElectricalApplianceType.WaterPump, entity.Type);
        Assert.Equal("company-seed-electrical-001", entity.CompanyId);
        Assert.Equal("brand-seed-electrical-001", entity.BrandId);
        Assert.True(entity.IsUsed);
    }

    [Theory]
    [InlineData(ElectricalApplianceType.PressureWasher, "Máy rửa xe")]
    [InlineData(ElectricalApplianceType.Battery, "Ắc quy các loại")]
    public void Entity_MapsVietnameseTypeName(ElectricalApplianceType type, string expected)
    {
        var dto = CreateMapper().Map<ElectricalApplianceProductDto>(Product(type));

        Assert.Equal(expected, dto.TypeName);
        Assert.Equal("https://localhost:5001/assets/images/img-ph.jpg", dto.PictureUrl);
    }

    private static IMapper CreateMapper()
    {
        var configuration = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfiles>());
        var appConfiguration = new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?>
            {
                ["ApiUrl"] = "https://localhost:5001/Content/"
            })
            .Build();
        return new Mapper(configuration, type =>
            type == typeof(ElectricalApplianceProductUrlResolver)
                ? new ElectricalApplianceProductUrlResolver(appConfiguration)
                : Activator.CreateInstance(type)!);
    }

    private static ElectricalApplianceProduct Product(
        ElectricalApplianceType type = ElectricalApplianceType.Motor)
    {
        return new ElectricalApplianceProduct
        {
            Id = "ea-test-1",
            Name = "Mô Tơ",
            Brand = "Điện Cơ Việt",
            Model = "MT-01",
            Type = type,
            Description = "Sản phẩm mẫu",
            Price = 1_500_000,
            StockQuantity = 10,
            PictureUrl = "/assets/images/img-ph.jpg",
            CompanyId = "company-1",
            Company = new Company { Id = "company-1", Name = "Công ty mẫu" },
            BrandId = "brand-1",
            BrandEntity = new Brand { Id = "brand-1", Name = "Thương hiệu mẫu" },
            IsUsed = true
        };
    }
}
