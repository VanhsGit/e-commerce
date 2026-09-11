using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class ElectricBikeProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string BrandName { get; set; }
        public string Model { get; set; }
        public ElectricBikeCategory Category { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public string PictureUrl { get; set; }
        public string? Voltage { get; set; }
        public string? Power { get; set; }
        public string? BatteryCapacity { get; set; }
        public string? Compatibility { get; set; }
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public int BrandId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; }
    }

    public class CreateElectricBikeProductDto
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
        public int BrandId { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }

    public class UpdateElectricBikeProductDto
    {
        public int Id { get; set; }
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
        public int BrandId { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }
}
