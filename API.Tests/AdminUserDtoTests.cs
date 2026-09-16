using API.Dtos;
using Xunit;

namespace API.Tests;

public sealed class AdminUserDtoTests
{
    [Fact]
    public void AdminUserDtos_CarryAvatarUrlAndPhoneNumber()
    {
        var create = new CreateUserDto
        {
            AvatarUrl = "/content/entity-images/library/avatar.png",
            PhoneNumber = "0900000000"
        };
        var update = new UpdateAdminUserDto
        {
            AvatarUrl = create.AvatarUrl,
            PhoneNumber = create.PhoneNumber
        };

        Assert.Equal(create.AvatarUrl, update.AvatarUrl);
        Assert.Equal(create.PhoneNumber, update.PhoneNumber);
    }
}
