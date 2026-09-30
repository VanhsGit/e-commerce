using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.PageContent;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace API.Tests;

public sealed class ProductTaxonomyTests
{
    [Theory]
    [InlineData("bike")]
    [InlineData("machine")]
    [InlineData("appliance")]
    public void DefaultCategoryPageContent_PassesValidator(string kind)
    {
        var document = CategoryPageContentDefaults.For(kind);
        Assert.Empty(CategoryPageContentValidator.Validate(document));
        Assert.Equal(kind, document.Kind);
    }

    [Fact]
    public void SelfAndDescendantIds_IncludesChildrenAndGrandchildren()
    {
        var categories = new List<ProductCategory>
        {
            new() { Id = "root" },
            new() { Id = "child", ParentId = "root" },
            new() { Id = "grandchild", ParentId = "child" },
            new() { Id = "other" }
        };

        var ids = ProductCategoryTree.SelfAndDescendantIds(categories, "root");

        Assert.Equal(new[] { "child", "grandchild", "root" }, ids.OrderBy(x => x));
    }

    [Fact]
    public void CategoryDto_KindIsLowercaseAndProductPathIsBuilt()
    {
        var mapper = CreateMapper();
        var parent = new ProductCategory { Id = "p", Kind = ProductKind.Bike, Name = "133-12A" };
        var category = new ProductCategory { Id = "c", Kind = ProductKind.Bike, Name = "Bản full", ParentId = "p", Parent = parent };

        var dto = mapper.Map<ProductCategoryDto>(category);
        Assert.Equal("bike", dto.Kind);
        Assert.Equal("133-12A", dto.ParentName);

        var product = new ElectricBikeProduct
        {
            Name = "Xe",
            Company = new Company { Name = "c" },
            BrandEntity = new Brand { Name = "b" },
            CategoryId = "c",
            CategoryEntity = category,
            Colors = [new ProductColorOption { Name = "Đỏ", HexCode = "#b91c1c" }]
        };
        var productDto = mapper.Map<ElectricBikeProductDto>(product);
        Assert.Equal("133-12A / Bản full", productDto.CategoryPath);
        Assert.Equal("Bản full", productDto.CategoryName);
        Assert.Single(productDto.Colors);
    }

    private static IMapper CreateMapper()
    {
        var configuration = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfiles>());
        var appConfiguration = new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?> { ["ApiUrl"] = "https://localhost:5001/Content/" })
            .Build();
        return new Mapper(configuration, type =>
            type == typeof(ElectricBikeProductUrlResolver)
                ? new ElectricBikeProductUrlResolver(appConfiguration)
                : Activator.CreateInstance(type)!);
    }
}
