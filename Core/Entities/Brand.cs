using System.Collections.Generic;

namespace Core.Entities
{
    public class Brand : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string LogoUrl { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public Dictionary<string, object> Metadata { get; set; } = new Dictionary<string, object>();

        public ICollection<ElectricBikeProduct> ElectricBikeProducts { get; set; }
        public ICollection<AgriculturalMachineProduct> AgriculturalMachineProducts { get; set; }
    }
}

