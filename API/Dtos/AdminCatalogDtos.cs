using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class ProductAdminDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string PictureUrl { get; set; } = string.Empty;
        public int ProductTypeId { get; set; }
        public string ProductTypeName { get; set; } = string.Empty;
        public int ProductBrandId { get; set; }
        public string ProductBrandName { get; set; } = string.Empty;
        public int CompanyId { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public bool IsUsed { get; set; }
    }

    public class SaveProductDto
    {
        [Required, MaxLength(100)] public string Name { get; set; } = string.Empty;
        [Required] public string Description { get; set; } = string.Empty;
        [Range(0, double.MaxValue)] public decimal Price { get; set; }
        public string PictureUrl { get; set; } = string.Empty;
        [Range(1, int.MaxValue)] public int ProductTypeId { get; set; }
        [Range(1, int.MaxValue)] public int ProductBrandId { get; set; }
        [Range(1, int.MaxValue)] public int CompanyId { get; set; }
        public bool IsUsed { get; set; } = true;
    }

    public class LookupEntityDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsUsed { get; set; }
    }

    public class SaveLookupEntityDto
    {
        [Required, MaxLength(100)] public string Name { get; set; } = string.Empty;
        public bool IsUsed { get; set; } = true;
    }

    public class DeliveryMethodAdminDto
    {
        public int Id { get; set; }
        public string ShortName { get; set; } = string.Empty;
        public string DeliveryTime { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public bool IsUsed { get; set; }
    }

    public class SaveDeliveryMethodDto
    {
        [Required, MaxLength(100)] public string ShortName { get; set; } = string.Empty;
        [Required, MaxLength(100)] public string DeliveryTime { get; set; } = string.Empty;
        [Required] public string Description { get; set; } = string.Empty;
        [Range(0, double.MaxValue)] public decimal Price { get; set; }
        public bool IsUsed { get; set; } = true;
    }
}
