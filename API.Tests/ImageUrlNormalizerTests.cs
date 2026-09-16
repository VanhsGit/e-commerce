using API.Helpers;
using Xunit;

namespace API.Tests;

public sealed class ImageUrlNormalizerTests
{
    [Theory]
    [InlineData("/content/entity-images/library/a.png", "/content/entity-images/library/a.png")]
    [InlineData("https://cdn.example/a.png", "https://cdn.example/a.png")]
    [InlineData("images/products/a.png", "https://localhost:5001/Content/images/products/a.png")]
    public void Normalize_PreservesPublicAndAbsoluteUrls_AndSupportsLegacyPaths(
        string value,
        string expected)
    {
        var result = ImageUrlNormalizer.Normalize(value, "https://localhost:5001/Content/");

        Assert.Equal(expected, result);
    }
}
