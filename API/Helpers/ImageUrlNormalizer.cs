using System;
using Core.Media;

namespace API.Helpers
{
    public static class ImageUrlNormalizer
    {
        public static string? Normalize(string? value, string? legacyBaseUrl)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;

            var normalized = value.Trim();
            if (Uri.TryCreate(normalized, UriKind.Absolute, out var absolute))
            {
                return IsManagedImagePath(absolute.AbsolutePath)
                    ? EntityImageUrl.ToPublicPath(absolute.AbsolutePath)
                    : normalized;
            }

            if (IsManagedImagePath(normalized))
            {
                return EntityImageUrl.ToPublicPath(normalized);
            }

            if (normalized.StartsWith("/", StringComparison.Ordinal) &&
                Uri.TryCreate(legacyBaseUrl, UriKind.Absolute, out var apiBase))
            {
                return new UriBuilder(apiBase.Scheme, apiBase.Host, apiBase.Port, normalized).Uri.ToString().TrimEnd('/');
            }

            return $"{legacyBaseUrl?.TrimEnd('/')}/{normalized.TrimStart('/')}";
        }

        private static bool IsManagedImagePath(string path)
        {
            return path.Equals(EntityImageUrl.PublicRequestPath, StringComparison.OrdinalIgnoreCase) ||
                path.StartsWith(EntityImageUrl.PublicRequestPath + "/", StringComparison.OrdinalIgnoreCase) ||
                path.Equals(EntityImageUrl.LegacyRequestPath, StringComparison.OrdinalIgnoreCase) ||
                path.StartsWith(EntityImageUrl.LegacyRequestPath + "/", StringComparison.OrdinalIgnoreCase);
        }
    }
}
