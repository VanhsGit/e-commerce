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
