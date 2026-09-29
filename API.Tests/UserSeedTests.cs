using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Helpers;
using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Xunit;

namespace API.Tests;

/// <summary>
/// Exercises UserSeed.SeedAsync against a real UserManager/RoleManager backed by an EF
/// Core in-memory AppIdentityDbContext, the same pattern used by
/// AccountControllerLoginTests/AdminUsersControllerTests.
/// </summary>
public sealed class UserSeedTests : IDisposable
{
    private readonly ServiceProvider _provider;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public UserSeedTests()
    {
        var services = new ServiceCollection();
        services.AddDbContext<AppIdentityDbContext>(o => o.UseInMemoryDatabase(Guid.NewGuid().ToString()));
        services.AddLogging();
        services.AddIdentityCore<AppUser>(options =>
            {
                options.Password.RequiredLength = 6;
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
            })
            .AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<AppIdentityDbContext>();

        _provider = services.BuildServiceProvider();
        _userManager = _provider.GetRequiredService<UserManager<AppUser>>();
        _roleManager = _provider.GetRequiredService<RoleManager<IdentityRole>>();
    }

    public void Dispose() => _provider.Dispose();

    private static IConfiguration BuildConfig(bool seedDemoUsers) =>
        new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?>
            {
                ["Seed:AdminPassword"] = "Vanhaste@2026",
                ["Seed:DemoPassword"] = "Demo@123456",
                ["Seed:SeedDemoUsers"] = seedDemoUsers ? "true" : "false"
            })
            .Build();

    [Fact]
    public async Task SeedAsync_CreatesAllFourRoles()
    {
        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(false), NullLoggerFactory());

        foreach (var role in AppRoles.All)
        {
            Assert.True(await _roleManager.RoleExistsAsync(role));
        }
    }

    [Fact]
    public async Task SeedAsync_PutsTheAdminAccountInTheAdminRole()
    {
        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(false), NullLoggerFactory());

        var admin = await _userManager.FindByEmailAsync("vanhspc@gmail.com");
        Assert.NotNull(admin);
        Assert.True(await _userManager.IsInRoleAsync(admin!, AppRoles.Admin));
    }

    [Fact]
    public async Task SeedAsync_ExistingAdminWithoutAdminRole_GetsAdminRoleAssigned()
    {
        // Simulate an admin account that existed before roles did: create it directly,
        // bypassing UserSeed, with no roles.
        var preExisting = new AppUser
        {
            Email = "vanhspc@gmail.com",
            UserName = "vanhspc@gmail.com",
            DisplayName = "Pre-existing Admin",
            IsUsed = true,
            EmailConfirmed = true
        };
        await _userManager.CreateAsync(preExisting, "SomeOtherPassword1");

        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(false), NullLoggerFactory());

        var admin = await _userManager.FindByEmailAsync("vanhspc@gmail.com");
        Assert.True(await _userManager.IsInRoleAsync(admin!, AppRoles.Admin));
    }

    [Fact]
    public async Task SeedAsync_WhenSeedDemoUsersEnabled_AssignsExpectedRolesToDemoUsers()
    {
        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(true), NullLoggerFactory());

        var kho = await _userManager.FindByEmailAsync("nhanvien.kho@vanhaste.vn");
        var banhang = await _userManager.FindByEmailAsync("nhanvien.banhang@vanhaste.vn");
        var ketoan = await _userManager.FindByEmailAsync("ketoan@vanhaste.vn");
        var nghiviec = await _userManager.FindByEmailAsync("nghiviec@vanhaste.vn");

        Assert.NotNull(kho);
        Assert.NotNull(banhang);
        Assert.NotNull(ketoan);
        Assert.NotNull(nghiviec);

        Assert.Contains(AppRoles.Staff, await _userManager.GetRolesAsync(kho!));
        Assert.Contains(AppRoles.Staff, await _userManager.GetRolesAsync(banhang!));
        Assert.Contains(AppRoles.Manager, await _userManager.GetRolesAsync(ketoan!));
        Assert.Contains(AppRoles.Staff, await _userManager.GetRolesAsync(nghiviec!));
    }

    [Fact]
    public async Task SeedAsync_ExistingDemoUserWithNoRoles_GetsRoleAssignedOnRerun()
    {
        // First run creates the demo users with roles.
        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(true), NullLoggerFactory());
        var ketoan = await _userManager.FindByEmailAsync("ketoan@vanhaste.vn");
        Assert.Contains(AppRoles.Manager, await _userManager.GetRolesAsync(ketoan!));

        // Simulate an older dev DB where the demo user exists but has no role yet.
        await _userManager.RemoveFromRoleAsync(ketoan!, AppRoles.Manager);
        Assert.Empty(await _userManager.GetRolesAsync(ketoan!));

        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(true), NullLoggerFactory());

        Assert.Contains(AppRoles.Manager, await _userManager.GetRolesAsync(ketoan!));
    }

    [Fact]
    public async Task SeedAsync_WhenSeedDemoUsersDisabled_DoesNotCreateDemoUsers()
    {
        await UserSeed.SeedAsync(_userManager, _roleManager, BuildConfig(false), NullLoggerFactory());

        Assert.Null(await _userManager.FindByEmailAsync("nhanvien.kho@vanhaste.vn"));
    }

    private static ILoggerFactory NullLoggerFactory() => Microsoft.Extensions.Logging.Abstractions.NullLoggerFactory.Instance;
}
