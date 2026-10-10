using System.Reflection;
using API.Controllers;
using API.Helpers;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace API.Tests;

public sealed class QrControllerTests
{
    [Theory]
    [InlineData("bike")]
    [InlineData("machine")]
    [InlineData("appliance")]
    public async Task Product_ActiveProductRedirectsToItsPublicDetailPage(string kind)
    {
        await using var store = CreateStore();
        var product = AddProduct(store, kind);
        await store.SaveChangesAsync();

        var redirect = Assert.IsType<RedirectResult>(await CreateController(store).Product(kind, product.Id));

        Assert.Equal($"/product-detail/{kind}/{product.Id}", redirect.Url);
        Assert.False(redirect.Permanent);
        Assert.False(redirect.PreserveMethod);
    }

    [Theory]
    [InlineData("bike", false)]
    [InlineData("machine", false)]
    [InlineData("appliance", false)]
    [InlineData("bike", true)]
    [InlineData("machine", true)]
    [InlineData("appliance", true)]
    public async Task Product_MissingOrInactiveReturns404(string kind, bool inactive)
    {
        await using var store = CreateStore();
        if (inactive)
        {
            AddProduct(store, kind).IsUsed = false;
            await store.SaveChangesAsync();
        }

        Assert.IsType<NotFoundObjectResult>(await CreateController(store).Product(kind, "sp-123"));
    }

    [Fact]
    public async Task Product_UnknownKindReturns404()
    {
        await using var store = CreateStore();
        Assert.IsType<NotFoundObjectResult>(await CreateController(store).Product("unknown", "sp-123"));
    }

    [Fact]
    public async Task Product_UsesConfiguredDestinationAndIgnoresQueryRedirects()
    {
        await using var store = CreateStore();
        var product = AddProduct(store, "machine");
        product.Id = "sp:123";
        await store.SaveChangesAsync();
        var options = new QrRedirectOptions { ProductUrlTemplate = "https://products.example.vn/catalog/{kind}/{id}?from=qr" };
        var controller = CreateController(store, options);
        controller.HttpContext.Request.QueryString = new QueryString("?url=https://other.example&returnUrl=https://other.example");

        var redirect = Assert.IsType<RedirectResult>(await controller.Product("MACHINE", product.Id));

        Assert.Equal("https://products.example.vn/catalog/machine/sp%3A123?from=qr", redirect.Url);
    }

    [Theory]
    [InlineData("/product-detail/{kind}/{id}", true)]
    [InlineData("https://shop.example.vn/p/{id}", true)]
    [InlineData("http://192.168.1.10:4200/product-detail/{kind}/{id}", true)]
    [InlineData("https://shop.example.vn/fixed-page", true)]
    [InlineData("", false)]
    [InlineData("//other.example/p/{id}", false)]
    [InlineData("/\\other.example/p/{id}", false)]
    [InlineData("javascript:alert(1)", false)]
    [InlineData("https://user:pass@shop.example.vn/p/{id}", false)]
    [InlineData("https://shop.example.vn/\r\nLocation: other", false)]
    public void Options_ValidateRedirectTemplate(string template, bool valid)
    {
        Assert.Equal(valid, new QrRedirectOptions { ProductUrlTemplate = template }.IsValid());
    }

    [Fact]
    public void Endpoint_IsAnonymousAndNotCached()
    {
        Assert.NotNull(typeof(QrController).GetCustomAttribute<AllowAnonymousAttribute>());
        var method = typeof(QrController).GetMethod(nameof(QrController.Product))!;
        var cache = method.GetCustomAttribute<ResponseCacheAttribute>()!;
        Assert.True(cache.NoStore);
        Assert.Equal(ResponseCacheLocation.None, cache.Location);
        Assert.Equal("products/{kind}/{id}", method.GetCustomAttribute<HttpGetAttribute>()!.Template);
    }

    private static QrController CreateController(StoreContext store, QrRedirectOptions? options = null)
    {
        var snapshot = new Mock<IOptionsSnapshot<QrRedirectOptions>>();
        snapshot.Setup(x => x.Value).Returns(options ?? new QrRedirectOptions());
        return new QrController(new UnitOfWork(store), snapshot.Object)
        {
            ControllerContext = new ControllerContext { HttpContext = new DefaultHttpContext() },
        };
    }

    private static StoreContext CreateStore() => new(new DbContextOptionsBuilder<StoreContext>()
        .UseInMemoryDatabase(Guid.NewGuid().ToString()).Options);

    private static BaseEntity AddProduct(StoreContext store, string kind)
    {
        BaseEntity product = kind switch
        {
            "bike" => new ElectricBikeProduct { Name = "Bike", Brand = "Brand", Model = "M1", Description = "Bike", CompanyId = "company", BrandId = "brand", PictureUrl = "" },
            "machine" => new AgriculturalMachineProduct { Name = "Machine", Brand = "Brand", Model = "M1", Description = "Machine", CompanyId = "company", BrandId = "brand", PictureUrl = "" },
            _ => new ElectricalApplianceProduct(),
        };
        product.Id = "sp-123";
        store.Add(product);
        return product;
    }
}
