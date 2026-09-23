using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public enum ElectricalApplianceType
    {
        PressureWasher = 1,
        HandTool = 2,
        ConstructionMachine = 3,
        Motor = 4,
        WaterPump = 5,
        Battery = 6
    }

    public class ElectricalApplianceProduct : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Brand { get; set; } = string.Empty;
        public string Model { get; set; } = string.Empty;
        public ElectricalApplianceType Type { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; } = string.Empty;
        public string? Power { get; set; }
        public string? Voltage { get; set; }
        public string? Capacity { get; set; }
        public string? Compatibility { get; set; }
        public string CompanyId { get; set; } = string.Empty;
        public Company Company { get; set; } = null!;
        public string BrandId { get; set; } = string.Empty;
        public Brand BrandEntity { get; set; } = null!;
        public Dictionary<string, string> Metadata { get; set; } = new();
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
