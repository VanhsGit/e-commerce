using System.Collections.Generic;

namespace API.Dtos
{
    public class BrandDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; }
    }

    public class CreateBrandDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }
}
