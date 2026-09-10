using System.Collections.Generic;
using System.Text.Json.Nodes;

namespace Core.Entities
{
    public class Company : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<ElectricBikeProduct> ElectricBikeProducts { get; set; }
        public ICollection<AgriculturalMachineProduct> AgriculturalMachineProducts { get; set; }
    }
}

