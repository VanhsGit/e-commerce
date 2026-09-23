using System;
using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class ElectricalApplianceProductDto
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Brand { get; set; } = string.Empty;
        public string BrandName { get; set; } = string.Empty;
        public string Model { get; set; } = string.Empty;
        public ElectricalApplianceType Type { get; set; }
        public string TypeName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; } = string.Empty;
        public string? Power { get; set; }
        public string? Voltage { get; set; }
        public string? Capacity { get; set; }
        public string? Compatibility { get; set; }
        public string CompanyId { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string BrandId { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; }
    }

    public class CreateElectricalApplianceProductDto
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
        public string BrandId { get; set; } = string.Empty;
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }

    public class UpdateElectricalApplianceProductDto : CreateElectricalApplianceProductDto
    {
        public string Id { get; set; } = string.Empty;
    }
}
