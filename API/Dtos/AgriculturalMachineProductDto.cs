using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class AgriculturalMachineProductDto
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; }
        public string Brand { get; set; }
        public string BrandName { get; set; }
        public string Model { get; set; }
        public AgriculturalMachineCategory Category { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; }
        public string? EngineType { get; set; }
        public string? Power { get; set; }
        public string? FuelType { get; set; }
        public string? Capacity { get; set; }
        public string? Compatibility { get; set; }
        public string CompanyId { get; set; } = string.Empty;
        public string CompanyName { get; set; }
        public string BrandId { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; }
    }

    public class CreateAgriculturalMachineProductDto
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
        public string CompanyId { get; set; } = string.Empty;
        public string BrandId { get; set; } = string.Empty;
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }

    public class UpdateAgriculturalMachineProductDto
    {
        public string Id { get; set; } = string.Empty;
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
        public string CompanyId { get; set; } = string.Empty;
        public string BrandId { get; set; } = string.Empty;
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }
}
