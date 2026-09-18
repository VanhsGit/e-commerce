using System;

namespace API.Helpers
{
    public static class ImageUrlNormalizer
    {
        public static string? Normalize(string? value, string? legacyBaseUrl)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;

            var normalized = value.Trim();
            if (Uri.TryCreate(normalized, UriKind.Absolute, out _))
            {
                return normalized;
            }

            if (normalized.StartsWith("/", StringComparison.Ordinal) &&
                Uri.TryCreate(legacyBaseUrl, UriKind.Absolute, out var apiBase))
            {
                return new UriBuilder(apiBase.Scheme, apiBase.Host, apiBase.Port, normalized).Uri.ToString().TrimEnd('/');
            }

            return $"{legacyBaseUrl?.TrimEnd('/')}/{normalized.TrimStart('/')}";
        }
    }
}
