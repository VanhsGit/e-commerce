using System.Text.Json;
using System.Text.Json.Nodes;
using API.Controllers;
using API.Dtos;
using API.Helpers;
using Core.Entities;
using Core.HomeContent;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class HomeContentExpansionTests
{
    [Fact]
    public async Task PutAndGet_PreserveEditableSectionsAndMoreThanThreeSolutionImages()
    {
        await using var context = CreateContext();
        var content = Deserialize(ExpandedJson());
        var put = await new HomeContentController(context).Put(content, CancellationToken.None);
        Assert.IsType<OkObjectResult>(put.Result);

        var get = await new HomeContentController(context).Get(CancellationToken.None);
        var response = Assert.IsType<HomePageContentResponse>(Assert.IsType<OkObjectResult>(get.Result).Value);
        var saved = JsonSerializer.SerializeToNode(response.Content, HomePageContentDefaults.JsonOptions)!;
        Assert.Equal("Company edited", saved["company"]!["title"]!.GetValue<string>());
        Assert.Equal("Recruitment edited", saved["recruitment"]!["heading"]!.GetValue<string>());
        Assert.Equal(4, saved["solutions"]!["images"]!.AsArray().Count);
        Assert.Equal(7, saved["recruitment"]!["positions"]![0]!["count"]!.GetValue<int>());
        Assert.Equal("/images/desktop.webp", saved["hero"]!["desktopImageSrc"]!.GetValue<string>());
        var persisted = JsonNode.Parse((await context.HomePageContents.SingleAsync()).ContentJson)!;
        Assert.Equal("Company edited", persisted["company"]!["title"]!.GetValue<string>());
        Assert.Equal(4, persisted["solutions"]!["images"]!.AsArray().Count);
    }

    [Theory]
    [InlineData("Saved warranty introduction", "Saved warranty introduction")]
    [InlineData(" ", "Kiểm tra thời hạn và thông tin hỗ trợ cho sản phẩm đã mua.")]
    public async Task Get_LegacyJsonSuppliesNewDefaultsAndPreservesSavedTitleAndCards(string introduction, string expectedIntroduction)
    {
        await using var context = CreateContext();
        var legacy = JsonNode.Parse(HomePageContentDefaults.Json)!.AsObject();
        foreach (var name in new[] { "navigation", "company", "solutions", "recruitment" }) legacy.Remove(name);
        var hero = legacy["hero"]!.AsObject();
        foreach (var name in new[] { "desktopImageSrc", "mobileImageSrc", "contactLabel", "warrantyLabel" }) hero.Remove(name);
        hero["title"] = "Saved legacy title";
        hero["cards"]![0]!["imageSrc"] = "/images/saved-card.webp";
        legacy["warranty"]!["introduction"] = introduction;
        context.HomePageContents.Add(new HomePageContent
        {
            Id = HomePageContent.SingletonId, ContentJson = legacy.ToJsonString(), UpdatedAt = DateTime.UtcNow, IsUsed = true
        });
        await context.SaveChangesAsync();

        var get = await new HomeContentController(context).Get(CancellationToken.None);
        var response = Assert.IsType<HomePageContentResponse>(Assert.IsType<OkObjectResult>(get.Result).Value);
        var json = JsonSerializer.SerializeToNode(response.Content, HomePageContentDefaults.JsonOptions)!;
        Assert.Equal("Saved legacy title", response.Content.Hero.Title);
        Assert.Equal(expectedIntroduction, response.Content.Warranty.Introduction);
        Assert.Equal("/images/saved-card.webp", response.Content.Hero.Cards[0].ImageSrc);
        Assert.Equal("/images/saved-card.webp", response.Content.Solutions.Images[0].ImageSrc);
        Assert.Equal(response.Content.Hero.Cards[0].ImageAlt, response.Content.Solutions.Images[0].ImageAlt);
        Assert.Equal("bike", response.Content.Solutions.Images[0].Kind);
        Assert.Equal("", json["hero"]!["desktopImageSrc"]!.GetValue<string>());
        Assert.Equal("Kết nối với chúng tôi", json["hero"]!["contactLabel"]!.GetValue<string>());
        Assert.Equal("Bạn đang quan tâm điều gì?", json["navigation"]!["heading"]!.GetValue<string>());
        Assert.Equal(3, json["company"]!["highlights"]!.AsArray().Count);
        Assert.NotEmpty(json["recruitment"]!["positions"]!.AsArray());
        Assert.Empty(HomePageContentValidator.Validate(response.Content));
    }

    [Theory]
    [InlineData("navigation")]
    [InlineData("company")]
    [InlineData("solutions")]
    [InlineData("recruitment")]
    public void Validate_RejectsExplicitNullSection(string section)
    {
        var json = ExpandedJson();
        json[section] = null;
        Assert.Contains(HomePageContentValidator.Validate(Deserialize(json)), error => error.StartsWith(section));
    }

    [Theory]
    [InlineData("company", "imageSrc", "javascript:alert(1)")]
    [InlineData("hero", "desktopImageSrc", "ftp://example.com/image.webp")]
    [InlineData("hero", "mobileImageSrc", "data:image/png;base64,abc")]
    [InlineData("navigation", "heading", " ")]
    [InlineData("hero", "contactLabel", "")]
    [InlineData("recruitment", "applyHeading", "")]
    public void Validate_RejectsInvalidNewFields(string section, string field, string value)
    {
        var json = ExpandedJson();
        json[section]![field] = value;
        Assert.Contains(HomePageContentValidator.Validate(Deserialize(json)), error => error.Contains($"{section}.{field}"));
    }

    [Theory]
    [InlineData("company", "highlights")]
    [InlineData("solutions", "images")]
    [InlineData("recruitment", "positions")]
    [InlineData("recruitment", "benefits")]
    [InlineData("recruitment", "sites")]
    [InlineData("recruitment", "hotlines")]
    public void Validate_RejectsNullAndEmptyListItemsWithoutThrowing(string section, string field)
    {
        var json = ExpandedJson();
        json[section]![field]![0] = null;
        Assert.Contains(HomePageContentValidator.Validate(Deserialize(json)), error => error.Contains($"{section}.{field}[0]"));
        json[section]![field] = new JsonArray();
        Assert.Contains(HomePageContentValidator.Validate(Deserialize(json)), error => error.Contains($"{section}.{field}"));
    }

    [Fact]
    public void Validate_RejectsSolutionKindAndImageAndRecruitmentCountAndHotline()
    {
        var json = ExpandedJson();
        json["solutions"]!["images"]![0]!["kind"] = "unknown";
        json["solutions"]!["images"]![0]!["imageSrc"] = "javascript:alert(1)";
        json["recruitment"]!["positions"]![0]!["count"] = 0;
        json["recruitment"]!["hotlines"]![0]!["tel"] = "call me";
        var errors = HomePageContentValidator.Validate(Deserialize(json));
        Assert.Contains(errors, error => error.Contains("solutions.images[0].kind"));
        Assert.Contains(errors, error => error.Contains("solutions.images[0].imageSrc"));
        Assert.Contains(errors, error => error.Contains("recruitment.positions[0].count"));
        Assert.Contains(errors, error => error.Contains("recruitment.hotlines[0].tel"));
    }

    [Theory]
    [InlineData("/images/desktop.webp")]
    [InlineData("/images/mobile.webp")]
    [InlineData("/images/company.webp")]
    [InlineData("/images/solution4.webp")]
    public void Contains_ProtectsImagesUsedByNewSections(string url)
    {
        Assert.True(HomeContentImageReferences.Contains(ExpandedJson().ToJsonString(), url));
    }

    private static JsonObject ExpandedJson()
    {
        var json = JsonNode.Parse(HomePageContentDefaults.Json)!.AsObject();
        json["warranty"]!["introduction"] = "Warranty introduction";
        json["hero"]!["desktopImageSrc"] = "/images/desktop.webp";
        json["hero"]!["mobileImageSrc"] = "/images/mobile.webp";
        json["hero"]!["contactLabel"] = "Contact us";
        json["hero"]!["warrantyLabel"] = "Warranty";
        json["navigation"] = JsonNode.Parse("""{"heading":"Navigation","homeLabel":"Home","recruitmentLabel":"Careers"}""");
        json["company"] = JsonNode.Parse("""{"eyebrow":"Company","title":"Company edited","description":"Description","detail":"Detail","imageSrc":"/images/company.webp","imageAlt":"Company image","highlights":[{"title":"One","description":"First"},{"title":"Two","description":"Second"},{"title":"Three","description":"Third"}]}""");
        json["solutions"] = JsonNode.Parse("""{"heading":"Solutions","previousLabel":"Previous","nextLabel":"Next","images":[{"imageSrc":"/images/solution1.webp","imageAlt":"One","kind":"bike"},{"imageSrc":"/images/solution2.webp","imageAlt":"Two","kind":"machine"},{"imageSrc":"/images/solution3.webp","imageAlt":"Three","kind":"appliance"},{"imageSrc":"/images/solution4.webp","imageAlt":"Four","kind":"bike"}]}""");
        json["recruitment"] = JsonNode.Parse("""{"badge":"Careers","heading":"Recruitment edited","intro":"Intro","positionsHeading":"Positions","benefitsHeading":"Benefits","sitesHeading":"Sites","applyHeading":"Apply","applyText":"Call us","closing":"Join us","positions":[{"count":7,"title":"Assembler","note":""}],"benefits":["Training"],"sites":[{"label":"Main","address":"Address"}],"hotlines":[{"display":"0971 456 992","tel":"0971456992"}]}""");
        return json;
    }

    private static HomePageContentDocument Deserialize(JsonNode json) =>
        json.Deserialize<HomePageContentDocument>(HomePageContentDefaults.JsonOptions)!;

    private static StoreContext CreateContext() => new(new DbContextOptionsBuilder<StoreContext>()
        .UseInMemoryDatabase(Guid.NewGuid().ToString("N")).Options);
}
