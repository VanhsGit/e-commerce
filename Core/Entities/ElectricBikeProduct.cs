using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public enum ElectricBikeCategory
    {
        ElectricBikeModel = 1,
        ElectricBikePart = 2
    }

    public class ElectricBikeProduct : BaseEntity
    {
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public ElectricBikeCategory Category { get; set; }
        public string Description { get; set; }

        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; }

        public string? Voltage { get; set; }
        public string? Power { get; set; }
        public string? BatteryCapacity { get; set; }
        public string? Compatibility { get; set; }

        public int CompanyId { get; set; }
        public Company Company { get; set; }

        public int BrandId { get; set; }
        public Brand BrandEntity { get; set; }

        public Dictionary<string, string> Metadata { get; set; } = new Dictionary<string, string>();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
