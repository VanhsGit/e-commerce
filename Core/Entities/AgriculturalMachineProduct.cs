using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public enum AgriculturalMachineCategory
    {
        MachineModel = 1,
        MachinePart = 2
    }

    public class AgriculturalMachineProduct : BaseEntity
    {
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public AgriculturalMachineCategory Category { get; set; }
        public string Description { get; set; }

        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; }

        public string? EngineType { get; set; }
        public string? Power { get; set; }
        public string? FuelType { get; set; }
        public string? Capacity { get; set; }
        public string? Compatibility { get; set; }

        public int CompanyId { get; set; }
        public Company Company { get; set; }

        public int BrandId { get; set; }
        public Brand BrandEntity { get; set; }

        public Dictionary<string, object> Metadata { get; set; } = new Dictionary<string, object>();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
