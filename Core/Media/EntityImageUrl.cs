using System;
using System.Text.RegularExpressions;

namespace Core.Media;

public static class EntityImageUrl
{
    public const string PublicRequestPath = "/api/content/entity-images";
    public const string LegacyRequestPath = "/content/entity-images";
    private static readonly Regex ManagedVariant = new(@"((?:^|/)library/\d{4}/\d{2}/[a-f0-9]{32}/)(?:image\.(?:webp|gif|png|jpe?g)|thumbnail\.webp)(?=[?#]|$)", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);

    public static string ThumbnailUrl(string value) => ManagedVariant.Replace(value, "${1}thumbnail.webp");

    public static string NormalizeReferencePath(string? value) =>
        ManagedVariant.Replace(Uri.UnescapeDataString(NormalizeComparablePath(value)), "${1}image");

    public static string ToPublicPath(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return string.Empty;

        var comparablePath = NormalizeComparablePath(value);
        if (comparablePath.Equals(LegacyRequestPath, StringComparison.OrdinalIgnoreCase) ||
            comparablePath.StartsWith(LegacyRequestPath + "/", StringComparison.OrdinalIgnoreCase))
        {
            return "/api" + comparablePath;
        }

        return value.Trim();
    }

    public static string NormalizeComparablePath(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return string.Empty;

        var trimmed = value.Trim();
        var path = Uri.TryCreate(trimmed, UriKind.Absolute, out var absolute)
            ? absolute.AbsolutePath
            : trimmed;
        var queryIndex = path.IndexOfAny(['?', '#']);
        if (queryIndex >= 0) path = path[..queryIndex];
        if (!path.StartsWith('/')) path = "/" + path;

        if (path.Equals(PublicRequestPath, StringComparison.OrdinalIgnoreCase) ||
            path.StartsWith(PublicRequestPath + "/", StringComparison.OrdinalIgnoreCase))
        {
            path = path["/api".Length..];
        }

        return path.TrimEnd('/');
    }
}
