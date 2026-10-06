using System.Text.Json;
using API.Controllers;
using API.Dtos;
using API.Helpers;
using Core.Entities;
using Core.PageContent;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace API.Tests;

public sealed class SiteSettingsTests
{
    [Fact]
    public void Defaults_PassValidator()
    {
        Assert.Empty(SiteSettingsValidator.Validate(SiteSettingsDefaults.Document()));
    }

    [Fact]
    public void Validator_RejectsBadEmailPhoneAndMissingStrings()
    {
        var document = SiteSettingsDefaults.Document();
        document.Contact.Email = "sai";
        document.Contact.Phone = "abc";
        document.Brand.Name = " ";

        var errors = SiteSettingsValidator.Validate(document);

        Assert.Contains("contact.email is invalid", errors);
        Assert.Contains("contact.phone is invalid", errors);
        Assert.Contains("brand.name is required", errors);
    }

    [Fact]
    public void Validator_ChecksEachLocation_AndAllowsBlankMapUrl()
    {
        var document = SiteSettingsDefaults.Document();
        document.Locations.Items[0].Address = " ";
        document.Locations.Items[1].MapUrl = "maps.google.com";
        document.Locations.Heading = string.Empty;

        var errors = SiteSettingsValidator.Validate(document);

        Assert.Contains("locations.items[0].address is required", errors);
        Assert.Contains("locations.items[1].mapUrl is invalid", errors);
        Assert.Contains("locations.heading is required", errors);

        var ok = SiteSettingsDefaults.Document();
        ok.Locations.Items.Clear();
        Assert.Empty(SiteSettingsValidator.Validate(ok));
    }

    [Fact]
    public async Task Get_BackfillsLocationsForRowsSavedBeforeTheField()
    {
        await using var context = new StoreContext(new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N")).Options);
        var legacy = SiteSettingsDefaults.Document();
        legacy.Contact.PhoneDisplay = "0900 111 222";
        var json = JsonSerializer.Serialize(legacy, SiteSettingsDefaults.JsonOptions);
        var withoutLocations = JsonSerializer.Serialize(
            JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(json)!
                .Where(pair => pair.Key != "locations")
                .ToDictionary(pair => pair.Key, pair => pair.Value),
            SiteSettingsDefaults.JsonOptions);
        context.SiteSettings.Add(new SiteSettings { Id = SiteSettings.SingletonId, ContentJson = withoutLocations, UpdatedAt = DateTime.UtcNow, IsUsed = true });
        await context.SaveChangesAsync();

        var get = await new SiteSettingsController(context).Get(CancellationToken.None);
        var response = Assert.IsType<SiteSettingsResponse>(Assert.IsType<OkObjectResult>(get.Result).Value);

        // Nội dung admin đã chỉnh được giữ, khối cơ sở được bù từ mặc định.
        Assert.Equal("0900 111 222", response.Content.Contact.PhoneDisplay);
        Assert.Equal(2, response.Content.Locations.Items.Count);
        Assert.Contains("Toàn Thắng", response.Content.Locations.Items[0].Address);
    }

    [Fact]
    public async Task Get_FallsBackToDefaultsOnInvalidJson_AndPutStoresContent()
    {
        await using var context = new StoreContext(new DbContextOptionsBuilder<StoreContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString("N")).Options);
        context.SiteSettings.Add(new SiteSettings { Id = SiteSettings.SingletonId, ContentJson = "{oops", UpdatedAt = DateTime.UtcNow, IsUsed = true });
        await context.SaveChangesAsync();
        var controller = new SiteSettingsController(context);

        var get = await controller.Get(CancellationToken.None);
        var response = Assert.IsType<SiteSettingsResponse>(Assert.IsType<OkObjectResult>(get.Result).Value);
        Assert.Equal("EcoTech", response.Content.Brand.Name);

        var update = SiteSettingsDefaults.Document();
        update.Contact.PhoneDisplay = "0900 000 000";
        await controller.Put(update, CancellationToken.None);
        var stored = JsonSerializer.Deserialize<SiteSettingsDocument>((await context.SiteSettings.SingleAsync()).ContentJson, SiteSettingsDefaults.JsonOptions);
        Assert.Equal("0900 000 000", stored!.Contact.PhoneDisplay);

        update.Contact.Email = "sai";
        Assert.IsType<BadRequestObjectResult>((await controller.Put(update, CancellationToken.None)).Result);
    }

    [Fact]
    public void Put_RequiresContentEditors()
    {
        var attribute = typeof(SiteSettingsController).GetMethod(nameof(SiteSettingsController.Put))!
            .GetCustomAttributes(typeof(AuthorizeAttribute), false).Cast<AuthorizeAttribute>().Single();
        Assert.Equal(AppRoles.ContentEditors, attribute.Roles);
    }

    [Fact]
    public void SeedScript_ContainsJsonIdenticalToDefaults()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir is not null && !File.Exists(Path.Combine(dir.FullName, "EcoTech.sln"))) dir = dir.Parent;
        if (dir is null) return;

        var script = File.ReadAllText(Path.Combine(dir.FullName, "scripts", "2026-09-30-seed-product-categories.sql"));
        Assert.Contains("$json$" + SiteSettingsDefaults.Json + "$json$", script);
    }
}
