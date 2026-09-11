using System.Collections.Generic;

namespace Infrastructure.Services
{
    public class MediaStorageOptions
    {
        public const string SectionName = "MediaStorage";

        public string RootPath { get; set; } = "Content/entity-images";
        public string RequestPath { get; set; } = "/content/entity-images";
        public long MaxFileSize { get; set; } = 10 * 1024 * 1024;
        public HashSet<string> AllowedContentTypes { get; set; } = new(System.StringComparer.OrdinalIgnoreCase)
        {
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif"
        };
    }
}
