using System.Reflection;
using System.Text.Json;
using API.Controllers;
using API.Dtos;
using Core.Entities;
using Core.HomeContent;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class HomeContentControllerTests
{
    [Fact]
    public async Task Get_ReturnsStoredContent()
    {
        await using var context = CreateContext();
        var stored = CloneDefault();
        stored.Hero.Title = "Nội dung đã lưu";
        context.HomePageContents.Add(Entity(stored));
        await context.SaveChangesAsync();

        var result = await new HomeContentController(context).Get(CancellationToken.None);
        var response = Assert.IsType<HomePageContentResponse>(Assert.IsType<OkObjectResult>(result.Result).Value);

        Assert.Equal("Nội dung đã lưu", response.Content.Hero.Title);
    }

    [Fact]
    public async Task Get_ReturnsDefaultsWhenSingletonIsMissing()
    {
        await using var context = CreateContext();

        var result = await new HomeContentController(context).Get(CancellationToken.None);
        var response = Assert.IsType<HomePageContentResponse>(Assert.IsType<OkObjectResult>(result.Result).Value);

        Assert.Equal(1, response.Content.Version);
        Assert.Equal(HomePageContentDefaults.Document.Hero.Title, response.Content.Hero.Title);
    }

    [Fact]
    public async Task Put_ReplacesContentAndUpdatesTimestamp()
    {
        await using var context = CreateContext();
        var before = DateTime.UtcNow.AddMinutes(-1);
        context.HomePageContents.Add(Entity(CloneDefault(), before));
        await context.SaveChangesAsync();
        var update = CloneDefault();
        update.Hero.Title = "Tiêu đề mới";

        var result = await new HomeContentController(context).Put(update, CancellationToken.None);
        var response = Assert.IsType<HomePageContentResponse>(Assert.IsType<OkObjectResult>(result.Result).Value);
        var saved = await context.HomePageContents.SingleAsync();

        Assert.Equal("Tiêu đề mới", response.Content.Hero.Title);
        Assert.True(response.UpdatedAt > before);
        var persisted = JsonSerializer.Deserialize<HomePageContentDocument>(saved.ContentJson, HomePageContentDefaults.JsonOptions);
        Assert.Equal("Tiêu đề mới", persisted!.Hero.Title);
    }

    [Fact]
    public async Task Put_InvalidContentReturnsBadRequestWithoutReplacingStoredJson()
    {
        await using var context = CreateContext();
        var entity = Entity(CloneDefault());
        context.HomePageContents.Add(entity);
        await context.SaveChangesAsync();
        var original = entity.ContentJson;
        var invalid = CloneDefault();
        invalid.Hero.Cards.Clear();

        var result = await new HomeContentController(context).Put(invalid, CancellationToken.None);

        Assert.IsType<BadRequestObjectResult>(result.Result);
        Assert.Equal(original, (await context.HomePageContents.SingleAsync()).ContentJson);
    }

    [Fact]
    public void Put_RequiresContentEditorRoleWhileGetIsPublic()
    {
        var put = typeof(HomeContentController).GetMethod(nameof(HomeContentController.Put))!;
        var get = typeof(HomeContentController).GetMethod(nameof(HomeContentController.Get))!;

        Assert.Equal(API.Helpers.AppRoles.ContentEditors, put.GetCustomAttribute<AuthorizeAttribute>()?.Roles);
        Assert.Null(get.GetCustomAttribute<AuthorizeAttribute>());
    }

    private static StoreContext CreateContext()
    {
        var options = new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N"))
            .Options;
        return new StoreContext(options);
    }

    private static HomePageContent Entity(HomePageContentDocument document, DateTime? updatedAt = null) => new()
    {
        Id = HomePageContent.SingletonId,
        ContentJson = JsonSerializer.Serialize(document, HomePageContentDefaults.JsonOptions),
        UpdatedAt = updatedAt ?? DateTime.UtcNow,
        IsUsed = true
    };

    private static HomePageContentDocument CloneDefault() =>
        JsonSerializer.Deserialize<HomePageContentDocument>(HomePageContentDefaults.Json, HomePageContentDefaults.JsonOptions)!;
}
