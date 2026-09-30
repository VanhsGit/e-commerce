using System.Text.Json;

namespace Core.PageContent;

public static class SiteSettingsDefaults
{
    public static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    public static SiteSettingsDocument Document() => new()
    {
        Version = 1,
        Brand = new SiteBrandContent
        {
            Name = "EcoTech",
            Tagline = "Xe điện · Nông nghiệp · Điện cơ"
        },
        Contact = new SiteContactContent
        {
            Phone = "19001234",
            PhoneLabel = "Hotline",
            PhoneDisplay = "1900 1234",
            Email = "hello@ecotech.vn",
            Address = "123 Đường Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
            WorkingHours = "Thứ 2 – Chủ Nhật · 7h – 21h",
            ZaloUrl = string.Empty,
            FacebookUrl = string.Empty
        },
        Footer = new SiteFooterContent
        {
            Description = "Xe điện, máy nông nghiệp và điện cơ dân dụng chính hãng, kèm bảo hành và kỹ thuật tận nơi.",
            NavHeading = "Điều hướng",
            ContactHeading = "Liên hệ",
            Copyright = "© 2026 EcoTech. Bảo lưu mọi quyền."
        }
    };

    public static string Json => JsonSerializer.Serialize(Document(), JsonOptions);
}
