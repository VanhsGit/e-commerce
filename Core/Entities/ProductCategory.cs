using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public enum ProductKind
    {
        Bike = 1,
        Machine = 2,
        Appliance = 3
    }

    public class ProductCategory : BaseEntity
    {
        public ProductKind Kind { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string? ParentId { get; set; }
        public ProductCategory? Parent { get; set; }
        public ICollection<ProductCategory> Children { get; set; } = new List<ProductCategory>();
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public int SortOrder { get; set; }
        public Dictionary<string, string> Metadata { get; set; } = new();
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
