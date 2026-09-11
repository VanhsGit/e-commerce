using System;

namespace Core.Entities
{
    public enum EntityType
    {
        Company = 1,
        Brand = 2,
        ElectricBikeProduct = 3,
        AgriculturalMachineProduct = 4,
        Product = 5,
        ProductBrand = 6,
        ProductType = 7,
        Order = 8,
        DeliveryMethod = 9,
        User = 10
    }

    public class EntityImage : BaseEntity
    {
        public EntityType EntityType { get; set; }
        public string EntityId { get; set; } = string.Empty;
        public string ImageType { get; set; } = "gallery";
        public string RelativePath { get; set; } = string.Empty;
        public string OriginalFileName { get; set; } = string.Empty;
        public string MimeType { get; set; } = string.Empty;
        public long FileSize { get; set; }
        public int SortOrder { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
