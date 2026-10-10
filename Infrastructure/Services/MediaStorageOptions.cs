using System.Collections.Generic;
using Core.Media;

namespace Infrastructure.Services
{
    public class MediaStorageOptions
    {
        public const string SectionName = "MediaStorage";

        public string RootPath { get; set; } = "Content/entity-images";
        public string RequestPath { get; set; } = EntityImageUrl.PublicRequestPath;
        public long MaxFileSize { get; set; } = 10 * 1024 * 1024;
        public int MaxDimension { get; set; } = 1600;
        public int ThumbnailMaxDimension { get; set; } = 400;
        public int WebpQuality { get; set; } = 82;
        public long MaxPixelCount { get; set; } = 40_000_000;
        public int MaxAnimationFrames { get; set; } = 300;
        public long MaxAnimationPixelCount { get; set; } = 200_000_000;
        public HashSet<string> AllowedContentTypes { get; set; } = new(System.StringComparer.OrdinalIgnoreCase)
        {
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif"
        };
    }
}
