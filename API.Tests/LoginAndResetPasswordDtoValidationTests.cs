using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Dtos;
using Xunit;

namespace API.Tests;

public sealed class LoginAndResetPasswordDtoValidationTests
{
    private static bool TryValidate(object dto, out List<ValidationResult> results)
    {
        results = new List<ValidationResult>();
        var context = new ValidationContext(dto);
        return Validator.TryValidateObject(dto, context, results, validateAllProperties: true);
    }

    [Fact]
    public void LoginDto_ValidEmailAndPassword_PassesValidation()
    {
        var dto = new LoginDto { Email = "user@example.com", Password = "secret" };

        Assert.True(TryValidate(dto, out _));
    }

    [Fact]
    public void LoginDto_MissingEmail_FailsValidation()
    {
        var dto = new LoginDto { Email = string.Empty, Password = "secret" };

        Assert.False(TryValidate(dto, out var results));
        Assert.Contains(results, r => r.MemberNames.Contains(nameof(LoginDto.Email)));
    }

    [Fact]
    public void LoginDto_InvalidEmailFormat_FailsValidation()
    {
        var dto = new LoginDto { Email = "not-an-email", Password = "secret" };

        Assert.False(TryValidate(dto, out var results));
        Assert.Contains(results, r => r.MemberNames.Contains(nameof(LoginDto.Email)));
    }

    [Fact]
    public void LoginDto_MissingPassword_FailsValidation()
    {
        var dto = new LoginDto { Email = "user@example.com", Password = string.Empty };

        Assert.False(TryValidate(dto, out var results));
        Assert.Contains(results, r => r.MemberNames.Contains(nameof(LoginDto.Password)));
    }

    [Fact]
    public void ResetPasswordDto_TooShortPassword_FailsValidation()
    {
        var dto = new ResetPasswordDto { NewPassword = "abc" };

        Assert.False(TryValidate(dto, out var results));
        Assert.Contains(results, r => r.MemberNames.Contains(nameof(ResetPasswordDto.NewPassword)));
    }

    [Fact]
    public void ResetPasswordDto_MissingPassword_FailsValidation()
    {
        var dto = new ResetPasswordDto { NewPassword = string.Empty };

        Assert.False(TryValidate(dto, out var results));
    }

    [Fact]
    public void ResetPasswordDto_ValidPassword_PassesValidation()
    {
        var dto = new ResetPasswordDto { NewPassword = "abcdef" };

        Assert.True(TryValidate(dto, out _));
    }

    [Fact]
    public void CreateUserDto_PasswordShorterThanSix_FailsValidation()
    {
        var dto = new CreateUserDto { Email = "user@example.com", Password = "12345" };

        Assert.False(TryValidate(dto, out var results));
        Assert.Contains(results, r => r.MemberNames.Contains(nameof(CreateUserDto.Password)));
    }

    [Fact]
    public void CreateUserDto_NullPassword_PassesModelValidation_ButIsRejectedByController()
    {
        // [MinLength] does not fire a "required" error for null — the controller enforces
        // that a password must be supplied for admin-created users.
        var dto = new CreateUserDto { Email = "user@example.com", Password = null };

        Assert.True(TryValidate(dto, out _));
    }
}
