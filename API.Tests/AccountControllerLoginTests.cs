using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Controllers;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using Xunit;

namespace API.Tests;

/// <summary>
/// Exercises the password-login endpoint (POST api/account/login) against a real
/// UserManager&lt;AppUser&gt; backed by an EF Core in-memory AppIdentityDbContext, so lockout
/// bookkeeping (AccessFailedCount / LockoutEnd) is exercised for real rather than mocked.
/// </summary>
public sealed class AccountControllerLoginTests : IDisposable
{
    private readonly ServiceProvider _provider;
    private readonly UserManager<AppUser> _userManager;

    public AccountControllerLoginTests()
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

                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);
                options.Lockout.AllowedForNewUsers = true;
            })
            .AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<AppIdentityDbContext>()
            .AddErrorDescriber<VietnameseIdentityErrorDescriber>();

        _provider = services.BuildServiceProvider();
        _userManager = _provider.GetRequiredService<UserManager<AppUser>>();
    }

    public void Dispose() => _provider.Dispose();

    private AccountController NewController()
    {
        var tokenService = new Mock<ITokenService>();
        tokenService.Setup(t => t.CreateToken(It.IsAny<AppUser>(), It.IsAny<IEnumerable<string>>())).Returns("fake-jwt-token");
        var otpService = new Mock<IOtpService>();
        var env = new Mock<IWebHostEnvironment>();
        var mapper = new Mock<IMapper>();

        return new AccountController(_userManager, tokenService.Object, mapper.Object, otpService.Object, env.Object);
    }

    private async Task<AppUser> CreateActiveUserAsync(string email, string password)
    {
        var user = new AppUser { Email = email, UserName = email, DisplayName = "Test User", IsUsed = true, EmailConfirmed = true };
        var result = await _userManager.CreateAsync(user, password);
        Assert.True(result.Succeeded, string.Join("; ", result.Errors));
        return user;
    }

    [Fact]
    public async Task Login_ValidCredentials_ReturnsUserDtoWithToken()
    {
        await CreateActiveUserAsync("valid@example.com", "abc123");
        var controller = NewController();

        var result = await controller.Login(new LoginDto { Email = "valid@example.com", Password = "abc123" });

        var dto = Assert.IsType<UserDto>(Assert.IsAssignableFrom<ActionResult<UserDto>>(result).Value);
        Assert.Equal("valid@example.com", dto.Email);
        Assert.Equal("fake-jwt-token", dto.Token);
    }

    [Fact]
    public async Task Login_WrongPassword_ReturnsGenericUnauthorized()
    {
        await CreateActiveUserAsync("wrongpass@example.com", "abc123");
        var controller = NewController();

        var result = await controller.Login(new LoginDto { Email = "wrongpass@example.com", Password = "wrong1" });

        var unauthorized = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(unauthorized.Value);
        Assert.Equal(401, body.StatusCode);
        Assert.Equal("Email hoặc mật khẩu không đúng.", body.Message);
    }

    [Fact]
    public async Task Login_UnknownEmail_ReturnsGenericUnauthorized()
    {
        var controller = NewController();

        var result = await controller.Login(new LoginDto { Email = "nobody@example.com", Password = "abc123" });

        var unauthorized = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(unauthorized.Value);
        Assert.Equal("Email hoặc mật khẩu không đúng.", body.Message);
    }

    [Fact]
    public async Task Login_InactiveUser_ReturnsGenericUnauthorized()
    {
        await CreateActiveUserAsync("inactive@example.com", "abc123");
        var user = await _userManager.FindByEmailAsync("inactive@example.com");
        user!.IsUsed = false;
        await _userManager.UpdateAsync(user);
        var controller = NewController();

        var result = await controller.Login(new LoginDto { Email = "inactive@example.com", Password = "abc123" });

        var unauthorized = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(unauthorized.Value);
        Assert.Equal("Email hoặc mật khẩu không đúng.", body.Message);
    }

    [Fact]
    public async Task Login_UserWithNoPassword_ReturnsGenericUnauthorized()
    {
        var user = new AppUser { Email = "nopassword@example.com", UserName = "nopassword@example.com", DisplayName = "No Password", IsUsed = true };
        var result1 = await _userManager.CreateAsync(user);
        Assert.True(result1.Succeeded, string.Join("; ", result1.Errors));
        var controller = NewController();

        var result = await controller.Login(new LoginDto { Email = "nopassword@example.com", Password = "whatever1" });

        var unauthorized = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(unauthorized.Value);
        Assert.Equal("Email hoặc mật khẩu không đúng.", body.Message);
    }

    [Fact]
    public async Task Login_FiveWrongAttempts_LocksOutAccount()
    {
        await CreateActiveUserAsync("lockout@example.com", "abc123");
        var controller = NewController();

        ActionResult<UserDto>? last = null;
        for (var i = 0; i < 5; i++)
        {
            last = await controller.Login(new LoginDto { Email = "lockout@example.com", Password = "wrong1" });
        }

        var unauthorized = Assert.IsType<UnauthorizedObjectResult>(last!.Result);
        var body = Assert.IsType<ApiResponse>(unauthorized.Value);
        Assert.Equal(401, body.StatusCode);
        Assert.Equal("Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau 15 phút.", body.Message);

        // Even the correct password should now be rejected with the lockout message.
        var afterLockout = await NewController().Login(new LoginDto { Email = "lockout@example.com", Password = "abc123" });
        var afterUnauthorized = Assert.IsType<UnauthorizedObjectResult>(afterLockout.Result);
        var afterBody = Assert.IsType<ApiResponse>(afterUnauthorized.Value);
        Assert.Equal("Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau 15 phút.", afterBody.Message);
    }
}
