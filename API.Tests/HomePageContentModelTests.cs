using System.Text.Json;
using Core.Entities;
using Core.HomeContent;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Xunit;

namespace API.Tests;

public sealed class HomePageContentModelTests
{
    [Fact]
    public void Defaults_DescribeAllThreeIndustries()
    {
        var document = HomePageContentDefaults.Document;
        var trustCopy = $"{document.Commitments.Title} {document.Commitments.Description}";

        Assert.Contains("Xe điện", trustCopy, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("Máy nông nghiệp", trustCopy, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("Điện gia dụng", trustCopy, StringComparison.OrdinalIgnoreCase);
        Assert.DoesNotContain("hai ngành hàng", trustCopy, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("xe điện", document.Cta.Description, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("máy nông nghiệp", document.Cta.Description, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("điện gia dụng", document.Cta.Description, StringComparison.OrdinalIgnoreCase);
    }

    [Fact]
    public void Model_ContainsSeededVersionOneHomeDocument()
    {
        var options = new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        using var context = new StoreContext(options);
        var entityType = context.GetService<IDesignTimeModel>().Model
            .FindEntityType(typeof(HomePageContent));

        Assert.NotNull(entityType);
        var row = Assert.Single(entityType!.GetSeedData());
        Assert.Equal(HomePageContent.SingletonId, row[nameof(HomePageContent.Id)]);

        var document = JsonSerializer.Deserialize<HomePageContentDocument>(
            (string)row[nameof(HomePageContent.ContentJson)]!,
            HomePageContentDefaults.JsonOptions);

        Assert.NotNull(document);
        Assert.Equal(1, document!.Version);
        Assert.Equal(new[] { "bike", "machine", "appliance" }, document.Industries.Select(x => x.Kind));
        Assert.Equal(3, document.Hero.Cards.Count);
        Assert.Equal(3, document.Hero.Metrics.Count);
        Assert.Equal(4, document.Commitments.Items.Count);
        Assert.Equal("Ba ngành hàng,", document.Hero.Title);
        Assert.Equal("assets/images/home/electric-mobility.webp", document.Hero.Cards[0].ImageSrc);
        Assert.Equal("Tra cứu thông tin bảo hành", document.Warranty.Heading);
        Assert.Equal("19001234", document.Cta.Phone);
    }
}
