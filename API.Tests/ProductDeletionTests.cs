using API.Controllers;
using API.Extensions;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace API.Tests;

public sealed class ProductDeletionTests : IDisposable
{
    private readonly string root = Path.Combine(Path.GetTempPath(), "product-deletion-tests", Guid.NewGuid().ToString("N"));

    [Theory]
    [InlineData("bike")]
    [InlineData("machine")]
    [InlineData("appliance")]
    public async Task Delete_RemovesProductAndItsCoverColorAndSeedGalleryFiles(string kind)
    {
        using var services = CreateServices();
        var store = services.GetRequiredService<StoreContext>();
        var cover = AddImage(store, "cover.jpg");
        var color = AddImage(store, "màu đỏ.jpg");
        var gallery = AddImage(store, "gallery.jpg");
        var unrelated = AddImage(store, "unrelated.jpg");
        var colors = new List<ProductColorOption> { new() { Name = "Red", ImageUrl = color } };
        var metadata = new Dictionary<string, string> { ["seedImageUrls"] = System.Text.Json.JsonSerializer.Serialize(new[] { gallery }) };
        BaseEntity product = kind switch
        {
            "bike" => new ElectricBikeProduct { Name = "Bike", Brand = "Brand", Model = "M1", Description = "Bike", CompanyId = "company", BrandId = "brand", Id = "product", PictureUrl = cover, Colors = colors, Metadata = metadata },
            "machine" => new AgriculturalMachineProduct { Name = "Machine", Brand = "Brand", Model = "M1", Description = "Machine", CompanyId = "company", BrandId = "brand", Id = "product", PictureUrl = cover, Colors = colors, Metadata = metadata },
            _ => new ElectricalApplianceProduct { Id = "product", PictureUrl = cover, Colors = colors, Metadata = metadata }
        };
        store.Add(product);
        await store.SaveChangesAsync();

        Assert.IsType<OkResult>(await Delete(services, kind, product.Id));

        Assert.Empty(await store.ElectricBikeProducts.ToListAsync());
        Assert.Empty(await store.AgriculturalMachineProducts.ToListAsync());
        Assert.Empty(await store.ElectricalApplianceProducts.ToListAsync());
        Assert.Equal("unrelated.jpg", (await store.EntityImages.SingleAsync()).OriginalFileName);
        Assert.Equal(new[] { "unrelated.jpg" }, Directory.GetFiles(Path.Combine(root, "library")).Select(Path.GetFileName));
    }

    [Fact]
    public async Task Delete_PreservesImageReferencedByAnotherProductsColor_IncludingEncodedUrls()
    {
        using var services = CreateServices();
        var store = services.GetRequiredService<StoreContext>();
        var image = AddImage(store, "màu đỏ.jpg");
        store.Add(new ElectricBikeProduct { Name = "Bike", Brand = "Brand", Model = "M1", Description = "Bike", CompanyId = "company", BrandId = "brand", Id = "product", PictureUrl = image });
        store.Add(new ElectricalApplianceProduct
        {
            Id = "other", Colors = [new() { Name = "Red", ImageUrl = "https://example.vn/api/content/entity-images/library/m%C3%A0u%20%C4%91%E1%BB%8F.jpg" }]
        });
        await store.SaveChangesAsync();

        Assert.IsType<OkResult>(await Delete(services, "bike", "product"));

        Assert.Null(await store.ElectricBikeProducts.FindAsync("product"));
        Assert.Single(await store.EntityImages.ToListAsync());
        Assert.True(File.Exists(Path.Combine(root, "library", "màu đỏ.jpg")));
    }

    [Theory]
    [InlineData("bike")]
    [InlineData("machine")]
    [InlineData("appliance")]
    public async Task Delete_MissingProductReturnsNotFound(string kind)
    {
        using var services = CreateServices();
        Assert.IsType<NotFoundObjectResult>(await Delete(services, kind, "missing"));
    }

    [Theory]
    [InlineData("home")]
    [InlineData("category")]
    public async Task Delete_PreservesEncodedSharedPageImage(string page)
    {
        using var services = CreateServices();
        var store = services.GetRequiredService<StoreContext>();
        var image = AddImage(store, "màu đỏ.jpg");
        store.Add(new ElectricalApplianceProduct { Id = "product", PictureUrl = image });
        var encoded = "https://example.vn/api/content/entity-images/library/m%C3%A0u%20%C4%91%E1%BB%8F.jpg";
        if (page == "home")
        {
            var document = Core.HomeContent.HomePageContentDefaults.Document;
            document.Hero.DesktopImageSrc = encoded;
            store.HomePageContents.Add(new HomePageContent { ContentJson = System.Text.Json.JsonSerializer.Serialize(document, Core.HomeContent.HomePageContentDefaults.JsonOptions) });
        }
        else
        {
            var document = Core.PageContent.CategoryPageContentDefaults.For("bike");
            document.Hero.ImageSrc = encoded;
            store.CategoryPageContents.Add(new CategoryPageContent { Id = "bike", ContentJson = System.Text.Json.JsonSerializer.Serialize(document, Core.PageContent.CategoryPageContentDefaults.JsonOptions) });
        }
        await store.SaveChangesAsync();

        Assert.IsType<OkResult>(await Delete(services, "appliance", "product"));

        Assert.Null(await store.ElectricalApplianceProducts.FindAsync("product"));
        Assert.Single(await store.EntityImages.ToListAsync());
        Assert.True(File.Exists(Path.Combine(root, "library", "màu đỏ.jpg")));
    }

    private static Task<ActionResult> Delete(IServiceProvider services, string kind, string id) => kind switch
    {
        "bike" => ActivatorUtilities.CreateInstance<ElectricBikeProductsController>(services).Delete(id),
        "machine" => ActivatorUtilities.CreateInstance<AgriculturalMachineProductsController>(services).Delete(id),
        _ => ActivatorUtilities.CreateInstance<ElectricalApplianceProductsController>(services).Delete(id)
    };

    [Fact]
    public async Task Delete_FileFailureRestoresProductAndAllPreviouslyRemovedFiles()
    {
        using var connection = new SqliteConnection("DataSource=:memory:");
        await connection.OpenAsync();
        using var services = CreateServices(connection);
        var store = services.GetRequiredService<StoreContext>();
        await store.Database.EnsureCreatedAsync();
        var cover = AddImage(store, "a-cover.jpg");
        var color = AddImage(store, "z-color.jpg");
        store.Add(new Company { Id = "company", Name = "Company", Description = "", LogoUrl = "", Address = "", PhoneNumber = "", Email = "", Website = "" });
        store.Add(new Brand { Id = "brand", Name = "Brand", Description = "", LogoUrl = "" });
        store.Add(new ElectricalApplianceProduct { Id = "product", CompanyId = "company", BrandId = "brand", PictureUrl = cover, Colors = [new() { Name = "Red", ImageUrl = color }] });
        await store.SaveChangesAsync();
        // The second file is exclusively locked; a real filesystem move/delete must fail.
        using (var locked = new FileStream(Path.Combine(root, "library", "z-color.jpg"), FileMode.Open, FileAccess.Read, FileShare.None))
            await Assert.ThrowsAnyAsync<IOException>(() => Delete(services, "appliance", "product"));

        store.ChangeTracker.Clear();
        Assert.NotNull(await store.ElectricalApplianceProducts.FindAsync("product"));
        Assert.Equal(2, await store.EntityImages.CountAsync());
        Assert.True(File.Exists(Path.Combine(root, "library", "a-cover.jpg")));
        Assert.True(File.Exists(Path.Combine(root, "library", "z-color.jpg")));

        Assert.IsType<OkResult>(await Delete(services, "appliance", "product"));
        Assert.Null(await store.ElectricalApplianceProducts.FindAsync("product"));
        Assert.Empty(await store.EntityImages.ToListAsync());
        Assert.Empty(Directory.GetFiles(Path.Combine(root, "library")));
    }

    private string AddImage(StoreContext store, string file)
    {
        Directory.CreateDirectory(Path.Combine(root, "library"));
        File.WriteAllBytes(Path.Combine(root, "library", file), [255, 216, 255, 217]);
        store.EntityImages.Add(new EntityImage { Id = file, OriginalFileName = file, RelativePath = "library/" + file, MimeType = "image/jpeg" });
        return "/api/content/entity-images/library/" + file;
    }

    private ServiceProvider CreateServices(SqliteConnection? connection = null)
    {
        Directory.CreateDirectory(root);
        var services = new ServiceCollection();
        services.AddLogging();
        services.AddApplicationServices();
        var options = new DbContextOptionsBuilder<StoreContext>();
        if (connection == null) options.UseInMemoryDatabase(Guid.NewGuid().ToString());
        else options.UseSqlite(connection);
        services.AddSingleton(new StoreContext(options.Options));
        services.AddSingleton(new AppIdentityDbContext(new DbContextOptionsBuilder<AppIdentityDbContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options));
        services.AddSingleton<IMapper>(new Mock<IMapper>().Object);
        services.AddSingleton<IEntityImageStorage>(new LocalEntityImageStorage(Options.Create(new MediaStorageOptions { RootPath = root }), new TestEnvironment(root)));
        return services.BuildServiceProvider();
    }

    public void Dispose()
    {
        if (Directory.Exists(root)) Directory.Delete(root, true);
    }

    private sealed class TestEnvironment(string path) : IHostEnvironment
    {
        public string EnvironmentName { get; set; } = Environments.Development;
        public string ApplicationName { get; set; } = "API.Tests";
        public string ContentRootPath { get; set; } = path;
        public IFileProvider ContentRootFileProvider { get; set; } = new NullFileProvider();
    }
}
