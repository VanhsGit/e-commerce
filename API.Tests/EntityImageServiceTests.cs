using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace API.Tests;

public sealed class EntityImageServiceTests
{
    [Fact]
    public async Task ListAsync_FiltersByOriginalFileName()
    {
        await using var store = CreateStoreContext();
        await using var identity = CreateIdentityContext();
        store.EntityImages.AddRange(
            new EntityImage { OriginalFileName = "company-logo.png", RelativePath = "library/logo.png", MimeType = "image/png" },
            new EntityImage { OriginalFileName = "product-photo.jpg", RelativePath = "library/product.jpg", MimeType = "image/jpeg" });
        await store.SaveChangesAsync();
        var service = new EntityImageService(store, identity, Mock.Of<IEntityImageStorage>());

        var result = await service.ListAsync("logo", includeInactive: true);

        Assert.Single(result);
        Assert.Equal("company-logo.png", result[0].OriginalFileName);
    }

    [Fact]
    public async Task DeleteAsync_ReturnsInUseWhenAnEntityReferencesThePublicUrl()
    {
        await using var store = CreateStoreContext();
        await using var identity = CreateIdentityContext();
        var image = new EntityImage
        {
            OriginalFileName = "logo.png",
            RelativePath = "library/logo.png",
            MimeType = "image/png"
        };
        store.EntityImages.Add(image);
        store.Companies.Add(new Company
        {
            Name = "Company",
            Description = string.Empty,
            LogoUrl = "/content/entity-images/library/logo.png",
            Address = string.Empty,
            PhoneNumber = string.Empty,
            Email = string.Empty,
            Website = string.Empty
        });
        await store.SaveChangesAsync();
        var storage = new Mock<IEntityImageStorage>();
        storage.Setup(x => x.GetPublicUrl(image.RelativePath))
            .Returns("/content/entity-images/library/logo.png");
        var service = new EntityImageService(store, identity, storage.Object);

        var result = await service.DeleteAsync(image.Id);

        Assert.Equal(DeleteEntityImageResult.InUse, result);
        Assert.NotNull(await store.EntityImages.FindAsync(image.Id));
        storage.Verify(x => x.DeleteAsync(It.IsAny<string>(), It.IsAny<CancellationToken>()), Times.Never);
    }

    private static StoreContext CreateStoreContext()
    {
        var options = new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        return new StoreContext(options);
    }

    private static AppIdentityDbContext CreateIdentityContext()
    {
        var options = new DbContextOptionsBuilder<AppIdentityDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        return new AppIdentityDbContext(options);
    }
}
