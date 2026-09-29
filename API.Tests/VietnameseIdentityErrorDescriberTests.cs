using API.Helpers;
using Xunit;

namespace API.Tests;

public sealed class VietnameseIdentityErrorDescriberTests
{
    private readonly VietnameseIdentityErrorDescriber _describer = new();

    [Fact]
    public void PasswordTooShort_ReturnsVietnameseMessageWithLength()
    {
        var error = _describer.PasswordTooShort(6);

        Assert.Equal(nameof(_describer.PasswordTooShort), error.Code);
        Assert.Contains("6", error.Description);
        Assert.Contains("Mật khẩu", error.Description);
    }

    [Fact]
    public void PasswordRequiresDigit_ReturnsVietnameseMessage()
    {
        var error = _describer.PasswordRequiresDigit();

        Assert.Contains("chữ số", error.Description);
    }

    [Fact]
    public void PasswordRequiresLower_ReturnsVietnameseMessage()
    {
        var error = _describer.PasswordRequiresLower();

        Assert.Contains("chữ thường", error.Description);
    }

    [Fact]
    public void DuplicateEmail_IncludesTheOffendingEmail()
    {
        var error = _describer.DuplicateEmail("someone@example.com");

        Assert.Contains("someone@example.com", error.Description);
        Assert.Contains("đã được sử dụng", error.Description);
    }

    [Fact]
    public void DuplicateUserName_IncludesTheOffendingUserName()
    {
        var error = _describer.DuplicateUserName("someone@example.com");

        Assert.Contains("someone@example.com", error.Description);
    }

    [Fact]
    public void InvalidEmail_IncludesTheOffendingEmail()
    {
        var error = _describer.InvalidEmail("not-an-email");

        Assert.Contains("not-an-email", error.Description);
        Assert.Contains("không hợp lệ", error.Description);
    }

    [Fact]
    public void PasswordMismatch_ReturnsVietnameseMessage()
    {
        var error = _describer.PasswordMismatch();

        Assert.Equal("Mật khẩu không đúng.", error.Description);
    }
}
