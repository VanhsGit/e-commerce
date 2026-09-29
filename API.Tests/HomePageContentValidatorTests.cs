using System.Text.Json;
using API.Helpers;
using Core.HomeContent;
using Xunit;

namespace API.Tests;

public sealed class HomePageContentValidatorTests
{
    [Fact]
    public void Validate_AcceptsDefaultDocument()
    {
        Assert.Empty(HomePageContentValidator.Validate(CloneDefault()));
    }

    [Fact]
    public void Validate_RejectsUnsupportedVersionAndMissingHeading()
    {
        var document = CloneDefault();
        document.Version = 2;
        document.Hero.Title = "  ";

        var errors = HomePageContentValidator.Validate(document);

        Assert.Contains(errors, x => x.Contains("version", StringComparison.OrdinalIgnoreCase));
        Assert.Contains(errors, x => x.Contains("hero.title", StringComparison.OrdinalIgnoreCase));
    }

    [Theory]
    [InlineData("javascript:alert(1)")]
    [InlineData("ftp://example.com/image.webp")]
    public void Validate_RejectsUnsafeImageUrls(string value)
    {
        var document = CloneDefault();
        document.Hero.Cards[0].ImageSrc = value;

        Assert.Contains(HomePageContentValidator.Validate(document), x => x.Contains("image", StringComparison.OrdinalIgnoreCase));
    }

    [Fact]
    public void Validate_RejectsInvalidPhoneAndEmail()
    {
        var document = CloneDefault();
        document.Cta.Phone = "call-me";
        document.Cta.Email = "not-an-email";

        var errors = HomePageContentValidator.Validate(document);

        Assert.Contains(errors, x => x.Contains("phone", StringComparison.OrdinalIgnoreCase));
        Assert.Contains(errors, x => x.Contains("email", StringComparison.OrdinalIgnoreCase));
    }

    [Fact]
    public void Validate_RejectsChangedFixedSizes()
    {
        var document = CloneDefault();
        document.Hero.Cards.RemoveAt(0);
        document.Hero.Metrics.Add(new HomeMetric());
        document.Commitments.Items.RemoveAt(0);
        document.Industries[0].Categories.RemoveAt(0);

        var errors = HomePageContentValidator.Validate(document);

        Assert.True(errors.Count >= 4);
    }

    [Fact]
    public void Validate_RejectsDuplicateMissingOrReorderedIndustryKinds()
    {
        var duplicate = CloneDefault();
        duplicate.Industries[1].Kind = "bike";
        var reordered = CloneDefault();
        (reordered.Industries[0], reordered.Industries[1]) = (reordered.Industries[1], reordered.Industries[0]);

        Assert.Contains(HomePageContentValidator.Validate(duplicate), x => x.Contains("industries", StringComparison.OrdinalIgnoreCase));
        Assert.Contains(HomePageContentValidator.Validate(reordered), x => x.Contains("industries", StringComparison.OrdinalIgnoreCase));
    }

    private static HomePageContentDocument CloneDefault() =>
        JsonSerializer.Deserialize<HomePageContentDocument>(HomePageContentDefaults.Json, HomePageContentDefaults.JsonOptions)!;
}
