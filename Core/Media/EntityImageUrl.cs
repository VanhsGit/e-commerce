using System;

namespace Core.Media;

public static class EntityImageUrl
{
    public const string PublicRequestPath = "/api/content/entity-images";
    public const string LegacyRequestPath = "/content/entity-images";

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
