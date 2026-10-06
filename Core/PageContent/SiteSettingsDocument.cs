namespace Core.PageContent;

public sealed class SiteSettingsDocument
{
    public int Version { get; set; } = 1;
    public SiteBrandContent Brand { get; set; } = new();
    public SiteContactContent Contact { get; set; } = new();
    public SiteLocationsContent Locations { get; set; } = new();
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

/// <summary>Khối "hệ thống cơ sở": tiêu đề chung và danh sách địa chỉ kèm bản đồ.</summary>
public sealed class SiteLocationsContent
{
    public string Heading { get; set; } = string.Empty;
    public string DirectionsLabel { get; set; } = string.Empty;
    public List<SiteLocationItem> Items { get; set; } = new();
}

public sealed class SiteLocationItem
{
    public string Label { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;

    /// <summary>Tùy chọn: liên kết Google Maps riêng. Để trống thì tự dựng từ địa chỉ.</summary>
    public string MapUrl { get; set; } = string.Empty;
}

public sealed class SiteFooterContent
{
    public string Description { get; set; } = string.Empty;
    public string NavHeading { get; set; } = string.Empty;
    public string ContactHeading { get; set; } = string.Empty;
    public string Copyright { get; set; } = string.Empty;
}
