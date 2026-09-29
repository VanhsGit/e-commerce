using API.Controllers;
using API.Dtos;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace API.Tests;

public sealed class EntityImagesControllerTests
{
    [Fact]
    public async Task Upload_ReturnsStorageRelativeUrlWithoutConfiguredDevelopmentHost()
    {
        var image = new EntityImage
        {
            Id = "image-1",
            RelativePath = "library/2026/09/photo.jpg",
            OriginalFileName = "photo.jpg",
            MimeType = "image/jpeg",
            FileSize = 4
        };
        var images = new Mock<IEntityImageService>();
        images
            .Setup(x => x.UploadAsync(It.IsAny<EntityImageUpload>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(image);
        var storage = new Mock<IEntityImageStorage>();
        storage
            .Setup(x => x.GetPublicUrl(image.RelativePath))
            .Returns("/content/entity-images/library/2026/09/photo.jpg");
        var controller = new EntityImagesController(
            images.Object,
            storage.Object,
            Options.Create(new MediaStorageOptions()));
        await using var stream = new MemoryStream(new byte[] { 0xFF, 0xD8, 0xFF, 0xD9 });
        var file = new FormFile(stream, 0, stream.Length, "file", "photo.jpg")
        {
            Headers = new HeaderDictionary(),
            ContentType = "image/jpeg"
        };

        var result = await controller.Upload(file);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        var body = Assert.IsType<EntityImageDto>(created.Value);
        Assert.Equal("/content/entity-images/library/2026/09/photo.jpg", body.Url);
    }
}
