using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AdminUserDto
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public string? AvatarUrl { get; set; }
        public bool IsUsed { get; set; }
        public IReadOnlyList<string> Roles { get; set; } = new List<string>();
    }

    public class UpdateAdminUserDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public string? AvatarUrl { get; set; }
        public bool IsUsed { get; set; } = true;

        [MinLength(6)]
        public string? Password { get; set; }

        /// <summary>When non-null, replaces the user's roles with exactly this set. Null leaves roles unchanged.</summary>
        public List<string>? Roles { get; set; }
    }

    public class ResetPasswordDto
    {
        [Required, MinLength(6)]
        public string NewPassword { get; set; } = string.Empty;
    }

    public class UpdateUserStatusDto
    {
        public bool IsUsed { get; set; }
    }
}
