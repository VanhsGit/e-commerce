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
        Assert.Equal("Mua xe điện hay máy nông nghiệp, bạn luôn được đảm bảo", document.Commitments.Title);
        Assert.Equal("Tra cứu thông tin bảo hành", document.Warranty.Heading);
        Assert.Equal("19001234", document.Cta.Phone);
    }
}
