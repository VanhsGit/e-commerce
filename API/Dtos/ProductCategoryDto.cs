using System.Collections.Generic;
using System.Text.Json.Serialization;
using Core.Entities;

namespace API.Dtos
{
    public class ProductCategoryDto
    {
        public string Id { get; set; } = string.Empty;
        // Luôn là chữ thường: "bike" | "machine" | "appliance".
        public string Kind { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string? ParentId { get; set; }
        public string? ParentName { get; set; }
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public int SortOrder { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public int ProductCount { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public bool IsUsed { get; set; }
        public List<ProductCategoryDto> Children { get; set; } = new();
    }

    public class CreateProductCategoryDto
    {
        // Nhận cả tên ("Bike") lẫn số enum.
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ProductKind Kind { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string? ParentId { get; set; }
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public int SortOrder { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public bool IsUsed { get; set; } = true;
    }

    public class UpdateProductCategoryDto : CreateProductCategoryDto
    {
        public string Id { get; set; } = string.Empty;
    }
}
