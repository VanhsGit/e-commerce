using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class AdminUserDto
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public bool IsUsed { get; set; }
    }

    public class UpdateAdminUserDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        public string DisplayName { get; set; } = string.Empty;
        public bool IsUsed { get; set; } = true;
    }
}
