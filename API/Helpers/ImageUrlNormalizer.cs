using System;

namespace API.Helpers
{
    public static class ImageUrlNormalizer
    {
        public static string? Normalize(string? value, string? legacyBaseUrl)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;

            var normalized = value.Trim();
            if (normalized.StartsWith("/", StringComparison.Ordinal) ||
                Uri.TryCreate(normalized, UriKind.Absolute, out _))
            {
                return normalized;
            }

            return $"{legacyBaseUrl?.TrimEnd('/')}/{normalized.TrimStart('/')}";
        }
    }
}
