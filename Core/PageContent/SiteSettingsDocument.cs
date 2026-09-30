namespace Core.PageContent;

public sealed class SiteSettingsDocument
{
    public int Version { get; set; } = 1;
    public SiteBrandContent Brand { get; set; } = new();
    public SiteContactContent Contact { get; set; } = new();
    public SiteFooterContent Footer { get; set; } = new();
}

public sealed class SiteBrandContent
{
    public string Name { get; set; } = string.Empty;
    public string Tagline { get; set; } = string.Empty;
}

public sealed class SiteContactContent
{
    public string Phone { get; set; } = string.Empty;
    public string PhoneLabel { get; set; } = string.Empty;
    public string PhoneDisplay { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string WorkingHours { get; set; } = string.Empty;
    public string ZaloUrl { get; set; } = string.Empty;
    public string FacebookUrl { get; set; } = string.Empty;
}

public sealed class SiteFooterContent
{
    public string Description { get; set; } = string.Empty;
    public string NavHeading { get; set; } = string.Empty;
    public string ContactHeading { get; set; } = string.Empty;
    public string Copyright { get; set; } = string.Empty;
}
