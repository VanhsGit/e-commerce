namespace API.Helpers;

public sealed class QrRedirectOptions
{
    public const string SectionName = "QrRedirect";

    // URL tuyệt đối khi frontend ở domain khác; đường dẫn /... khi cùng domain.
    public string ProductUrlTemplate { get; set; } = "/product-detail/{kind}/{id}";

    public string ProductUrl(string kind, string id) => ProductUrlTemplate
        .Replace("{kind}", Uri.EscapeDataString(kind), StringComparison.Ordinal)
        .Replace("{id}", Uri.EscapeDataString(id), StringComparison.Ordinal);

    public bool IsValid()
    {
        if (string.IsNullOrWhiteSpace(ProductUrlTemplate)
            || ProductUrlTemplate.Any(char.IsControl)
            || ProductUrlTemplate.Contains('\\')) return false;

        var url = ProductUrl("bike", "product-id");
        if (url.StartsWith('/') && !url.StartsWith("//", StringComparison.Ordinal)) return true;
        return Uri.TryCreate(url, UriKind.Absolute, out var uri)
            && (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps)
            && !string.IsNullOrEmpty(uri.Host)
            && string.IsNullOrEmpty(uri.UserInfo);
    }
}
