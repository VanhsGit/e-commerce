using API.Helpers;
using Xunit;

namespace API.Tests;

public sealed class ImageUrlNormalizerTests
{
    [Theory]
    [InlineData("/content/entity-images/library/a.png", "/api/content/entity-images/library/a.png")]
    [InlineData("/api/content/entity-images/library/a.png", "/api/content/entity-images/library/a.png")]
    [InlineData("https://ecotechpro.vn:5001/api/content/entity-images/library/a/thumbnail.webp", "/api/content/entity-images/library/a/thumbnail.webp")]
    [InlineData("https://ecotechpro.vn/content/entity-images/library/a.png", "/api/content/entity-images/library/a.png")]
    [InlineData("https://cdn.example/a.png", "https://cdn.example/a.png")]
    [InlineData("images/products/a.png", "https://localhost:5001/Content/images/products/a.png")]
    public void Normalize_PreservesManagedImagePathsAndAbsoluteUrls_AndSupportsLegacyPaths(
        string value,
        string expected)
    {
        var result = ImageUrlNormalizer.Normalize(value, "https://localhost:5001/Content/");

        Assert.Equal(expected, result);
    }
}
