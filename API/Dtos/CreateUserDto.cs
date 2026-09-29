using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class CreateUserDto
    {
        public string DisplayName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public string? AvatarUrl { get; set; }
        public bool IsUsed { get; set; } = true;

        [MinLength(6)]
        public string? Password { get; set; }

        /// <summary>Roles to assign on creation. Null or empty means no roles.</summary>
        public List<string>? Roles { get; set; }
    }
}
