using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Controllers;
using API.Dtos;
using API.Errors;
using API.Helpers;
using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace API.Tests;

/// <summary>
/// Exercises AdminUsersController against a real UserManager&lt;AppUser&gt; backed by an
/// EF Core in-memory AppIdentityDbContext, using the same password/lockout policy and
/// Vietnamese error describer configured in API.Extensions.IdentityServiceExtension. This
/// gives higher-fidelity coverage than mocking UserManager directly, since password
/// validation, hashing and lockout are exercised for real.
/// </summary>
public sealed class AdminUsersControllerTests : IDisposable
{
    private readonly ServiceProvider _provider;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public AdminUsersControllerTests()
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
        _roleManager = _provider.GetRequiredService<RoleManager<IdentityRole>>();

        foreach (var role in AppRoles.All)
        {
            _roleManager.CreateAsync(new IdentityRole(role)).GetAwaiter().GetResult();
        }
    }

    public void Dispose() => _provider.Dispose();

    private static AdminUsersController NewController(UserManager<AppUser> userManager, string? currentUserEmail = null)
    {
        var controller = new AdminUsersController(userManager);
        var identity = new ClaimsIdentity();
        if (currentUserEmail != null)
        {
            identity.AddClaim(new Claim(ClaimTypes.Email, currentUserEmail));
        }
        controller.ControllerContext = new ControllerContext
        {
            HttpContext = new DefaultHttpContext { User = new ClaimsPrincipal(identity) }
        };
        return controller;
    }

    [Fact]
    public async Task Create_WithValidPassword_ReturnsCreatedWithUsableAccount()
    {
        var controller = NewController(_userManager);
        var dto = new CreateUserDto { Email = "new.user@example.com", DisplayName = "New User", Password = "abc123" };

        var result = await controller.Create(dto);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        var body = Assert.IsType<AdminUserDto>(created.Value);
        Assert.Equal("new.user@example.com", body.Email);

        var user = await _userManager.FindByEmailAsync("new.user@example.com");
        Assert.NotNull(user);
        Assert.True(await _userManager.CheckPasswordAsync(user!, "abc123"));
        Assert.True(user!.EmailConfirmed);
    }

    [Fact]
    public async Task Create_WithoutPassword_ReturnsValidationErrorResponse()
    {
        var controller = NewController(_userManager);
        var dto = new CreateUserDto { Email = "no.password@example.com", DisplayName = "No Password", Password = null };

        var result = await controller.Create(dto);

        var badRequest = Assert.IsType<BadRequestObjectResult>(result.Result);
        var body = Assert.IsType<ApiValidationErrorResponse>(badRequest.Value);
        Assert.Equal(400, body.StatusCode);
        Assert.Equal("Dữ liệu không hợp lệ", body.Message);
        Assert.NotEmpty(body.Errors);
    }

    [Fact]
    public async Task Create_WithWeakPassword_ReturnsVietnameseValidationErrors()
    {
        var controller = NewController(_userManager);
        // "abcdef" has no digit, so the password policy should reject it.
        var dto = new CreateUserDto { Email = "weak.password@example.com", DisplayName = "Weak", Password = "abcdef" };

        var result = await controller.Create(dto);

        var badRequest = Assert.IsType<BadRequestObjectResult>(result.Result);
        var body = Assert.IsType<ApiValidationErrorResponse>(badRequest.Value);
        Assert.Contains(body.Errors, e => e.Contains("chữ số"));
    }

    [Fact]
    public async Task Create_DuplicateEmail_ReturnsConflict()
    {
        var controller = NewController(_userManager);
        var dto = new CreateUserDto { Email = "dup@example.com", DisplayName = "First", Password = "abc123" };
        await controller.Create(dto);

        var second = await NewController(_userManager).Create(
            new CreateUserDto { Email = "dup@example.com", DisplayName = "Second", Password = "abc123" });

        var conflict = Assert.IsType<ConflictObjectResult>(second.Result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
    }

    [Fact]
    public async Task Get_UnknownId_ReturnsNotFoundWithApiResponse()
    {
        var controller = NewController(_userManager);

        var result = await controller.Get("does-not-exist");

        var notFound = Assert.IsType<NotFoundObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(notFound.Value);
        Assert.Equal(404, body.StatusCode);
        Assert.Equal("Không tìm thấy người dùng", body.Message);
    }

    [Fact]
    public async Task UpdateStatus_DeactivatingCurrentSession_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "self@example.com", DisplayName = "Self", Password = "abc123" });
        var user = await _userManager.FindByEmailAsync("self@example.com");

        var controller = NewController(_userManager, currentUserEmail: "self@example.com");
        var result = await controller.UpdateStatus(user!.Id, new UpdateUserStatusDto { IsUsed = false });

        var conflict = Assert.IsType<ConflictObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
    }

    [Fact]
    public async Task UpdateStatus_DeactivatingOtherUser_Succeeds()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "other@example.com", DisplayName = "Other", Password = "abc123" });
        var user = await _userManager.FindByEmailAsync("other@example.com");

        var controller = NewController(_userManager, currentUserEmail: "admin@example.com");
        var result = await controller.UpdateStatus(user!.Id, new UpdateUserStatusDto { IsUsed = false });

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        var body = Assert.IsType<AdminUserDto>(ok.Value);
        Assert.False(body.IsUsed);
    }

    [Fact]
    public async Task ResetPassword_ValidPassword_ReplacesPasswordAndReturnsNoContent()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "resetme@example.com", DisplayName = "Reset Me", Password = "abc123" });
        var user = await _userManager.FindByEmailAsync("resetme@example.com");

        var controller = NewController(_userManager);
        var result = await controller.ResetPassword(user!.Id, new ResetPasswordDto { NewPassword = "newpass1" });

        Assert.IsType<NoContentResult>(result);
        var reloaded = await _userManager.FindByEmailAsync("resetme@example.com");
        Assert.True(await _userManager.CheckPasswordAsync(reloaded!, "newpass1"));
        Assert.False(await _userManager.CheckPasswordAsync(reloaded!, "abc123"));
    }

    [Fact]
    public async Task ResetPassword_InvalidPassword_ReturnsValidationErrorAndKeepsOldPassword()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "keepold@example.com", DisplayName = "Keep Old", Password = "abc123" });
        var user = await _userManager.FindByEmailAsync("keepold@example.com");

        var controller = NewController(_userManager);
        // No digit -> fails the password policy.
        var result = await controller.ResetPassword(user!.Id, new ResetPasswordDto { NewPassword = "nodigits" });

        var badRequest = Assert.IsType<BadRequestObjectResult>(result);
        var body = Assert.IsType<ApiValidationErrorResponse>(badRequest.Value);
        Assert.Equal("Dữ liệu không hợp lệ", body.Message);

        var reloaded = await _userManager.FindByEmailAsync("keepold@example.com");
        Assert.True(await _userManager.CheckPasswordAsync(reloaded!, "abc123"));
    }

    [Fact]
    public async Task ResetPassword_UnknownId_ReturnsNotFound()
    {
        var controller = NewController(_userManager);

        var result = await controller.ResetPassword("missing-id", new ResetPasswordDto { NewPassword = "abc123" });

        var notFound = Assert.IsType<NotFoundObjectResult>(result);
        var body = Assert.IsType<ApiResponse>(notFound.Value);
        Assert.Equal(404, body.StatusCode);
    }

    [Fact]
    public async Task Delete_CurrentSession_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "delself@example.com", DisplayName = "Del Self", Password = "abc123" });
        var user = await _userManager.FindByEmailAsync("delself@example.com");

        var controller = NewController(_userManager, currentUserEmail: "delself@example.com");
        var result = await controller.Delete(user!.Id);

        var conflict = Assert.IsType<ConflictObjectResult>(result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
    }

    private static UpdateAdminUserDto UpdateDtoFor(AppUser user, bool? isUsed = null, List<string>? roles = null) => new()
    {
        Email = user.Email!,
        DisplayName = user.DisplayName,
        PhoneNumber = user.PhoneNumber,
        AvatarUrl = user.AvatarUrl,
        IsUsed = isUsed ?? user.IsUsed,
        Roles = roles
    };

    [Fact]
    public async Task Create_WithRoles_AssignsRolesToTheNewUser()
    {
        var controller = NewController(_userManager);
        var dto = new CreateUserDto
        {
            Email = "roled@example.com",
            DisplayName = "Roled",
            Password = "abc123",
            Roles = new List<string> { AppRoles.Staff, AppRoles.Manager }
        };

        var result = await controller.Create(dto);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        var body = Assert.IsType<AdminUserDto>(created.Value);
        Assert.Equal(new[] { AppRoles.Manager, AppRoles.Staff }, body.Roles.OrderBy(r => r));
    }

    [Fact]
    public async Task Create_WithUnknownRole_ReturnsValidationErrorResponse()
    {
        var controller = NewController(_userManager);
        var dto = new CreateUserDto
        {
            Email = "badrole@example.com",
            DisplayName = "Bad Role",
            Password = "abc123",
            Roles = new List<string> { "SuperUser" }
        };

        var result = await controller.Create(dto);

        var badRequest = Assert.IsType<BadRequestObjectResult>(result.Result);
        var body = Assert.IsType<ApiValidationErrorResponse>(badRequest.Value);
        Assert.Equal("Dữ liệu không hợp lệ", body.Message);
        Assert.Contains(body.Errors, e => e.Contains("SuperUser"));

        Assert.Null(await _userManager.FindByEmailAsync("badrole@example.com"));
    }

    [Fact]
    public async Task Update_WithUnknownRole_ReturnsValidationErrorResponse()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "u1@example.com", DisplayName = "U1", Password = "abc123" });
        var user = (await _userManager.FindByEmailAsync("u1@example.com"))!;

        var controller = NewController(_userManager);
        var result = await controller.Update(user.Id, UpdateDtoFor(user, roles: new List<string> { "NotARole" }));

        var badRequest = Assert.IsType<BadRequestObjectResult>(result.Result);
        var body = Assert.IsType<ApiValidationErrorResponse>(badRequest.Value);
        Assert.Contains(body.Errors, e => e.Contains("NotARole"));
    }

    [Fact]
    public async Task Update_WithRolesNonNull_ReplacesRolesWithExactlyTheGivenSet()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto
        {
            Email = "swap@example.com",
            DisplayName = "Swap",
            Password = "abc123",
            Roles = new List<string> { AppRoles.Staff }
        });
        var user = (await _userManager.FindByEmailAsync("swap@example.com"))!;
        Assert.Equal(new[] { AppRoles.Staff }, await _userManager.GetRolesAsync(user));

        var controller = NewController(_userManager);
        var result = await controller.Update(user.Id, UpdateDtoFor(user, roles: new List<string> { AppRoles.Manager }));

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        var body = Assert.IsType<AdminUserDto>(ok.Value);
        Assert.Equal(new[] { AppRoles.Manager }, body.Roles);
    }

    [Fact]
    public async Task Update_WithRolesNull_LeavesExistingRolesUnchanged()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto
        {
            Email = "keep@example.com",
            DisplayName = "Keep",
            Password = "abc123",
            Roles = new List<string> { AppRoles.Staff }
        });
        var user = (await _userManager.FindByEmailAsync("keep@example.com"))!;

        var controller = NewController(_userManager);
        var result = await controller.Update(user.Id, UpdateDtoFor(user, roles: null));

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        var body = Assert.IsType<AdminUserDto>(ok.Value);
        Assert.Equal(new[] { AppRoles.Staff }, body.Roles);
    }

    [Fact]
    public async Task Update_SelfRemovingOwnAdminRole_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "self.admin@example.com", DisplayName = "Self Admin", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        await createController.Create(new CreateUserDto { Email = "other.admin@example.com", DisplayName = "Other Admin", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        var user = (await _userManager.FindByEmailAsync("self.admin@example.com"))!;

        var controller = NewController(_userManager, currentUserEmail: "self.admin@example.com");
        var result = await controller.Update(user.Id, UpdateDtoFor(user, roles: new List<string>()));

        var conflict = Assert.IsType<ConflictObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
        Assert.Equal("Bạn không thể gỡ quyền Admin của chính mình.", body.Message);

        Assert.Contains(AppRoles.Admin, await _userManager.GetRolesAsync(user));
    }

    [Fact]
    public async Task Update_RemovingAdminRoleFromLastActiveAdmin_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "solo.admin@example.com", DisplayName = "Solo Admin", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        var user = (await _userManager.FindByEmailAsync("solo.admin@example.com"))!;

        var controller = NewController(_userManager, currentUserEmail: "someone.else@example.com");
        var result = await controller.Update(user.Id, UpdateDtoFor(user, roles: new List<string>()));

        var conflict = Assert.IsType<ConflictObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
        Assert.Equal("Phải còn ít nhất một Admin đang hoạt động.", body.Message);
    }

    [Fact]
    public async Task UpdateStatus_DeactivatingLastActiveAdmin_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "lastactive.admin@example.com", DisplayName = "Last Active", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        var user = (await _userManager.FindByEmailAsync("lastactive.admin@example.com"))!;

        var controller = NewController(_userManager, currentUserEmail: "someone.else2@example.com");
        var result = await controller.UpdateStatus(user.Id, new UpdateUserStatusDto { IsUsed = false });

        var conflict = Assert.IsType<ConflictObjectResult>(result.Result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
        Assert.Equal("Phải còn ít nhất một Admin đang hoạt động.", body.Message);
    }

    [Fact]
    public async Task Delete_LastActiveAdmin_ReturnsConflict()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "lastactive.delete@example.com", DisplayName = "Last Active Delete", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        var user = (await _userManager.FindByEmailAsync("lastactive.delete@example.com"))!;

        var controller = NewController(_userManager, currentUserEmail: "someone.else3@example.com");
        var result = await controller.Delete(user.Id);

        var conflict = Assert.IsType<ConflictObjectResult>(result);
        var body = Assert.IsType<ApiResponse>(conflict.Value);
        Assert.Equal(409, body.StatusCode);
        Assert.Equal("Phải còn ít nhất một Admin đang hoạt động.", body.Message);
    }

    [Fact]
    public async Task Delete_NotTheLastActiveAdmin_Succeeds()
    {
        var createController = NewController(_userManager);
        await createController.Create(new CreateUserDto { Email = "admin.a@example.com", DisplayName = "Admin A", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        await createController.Create(new CreateUserDto { Email = "admin.b@example.com", DisplayName = "Admin B", Password = "abc123", Roles = new List<string> { AppRoles.Admin } });
        var user = (await _userManager.FindByEmailAsync("admin.a@example.com"))!;

        var controller = NewController(_userManager, currentUserEmail: "someone.else4@example.com");
        var result = await controller.Delete(user.Id);

        Assert.IsType<NoContentResult>(result);
    }
}
