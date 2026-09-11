using System;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.Dtos
{
    public class EntityImageDto
    {
        public int Id { get; set; }
        public EntityType EntityType { get; set; }
        public string EntityId { get; set; } = string.Empty;
        public string ImageType { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public string OriginalFileName { get; set; } = string.Empty;
        public string MimeType { get; set; } = string.Empty;
        public long FileSize { get; set; }
        public int SortOrder { get; set; }
        public bool IsUsed { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class UpdateEntityImageDto
    {
        [Required, MaxLength(64)]
        public string ImageType { get; set; } = "gallery";
        public int SortOrder { get; set; }
        public bool IsUsed { get; set; } = true;
    }
}
