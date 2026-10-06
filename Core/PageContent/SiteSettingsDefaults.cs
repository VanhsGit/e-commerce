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
        Locations = new SiteLocationsContent
        {
            Heading = "Hệ thống cơ sở",
            DirectionsLabel = "Chỉ đường",
            Items =
            [
                new SiteLocationItem
                {
                    Label = "Cơ sở 1",
                    Address = "Xóm Tân Thành, Xã Toàn Thắng, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)",
                    MapUrl = string.Empty
                },
                new SiteLocationItem
                {
                    Label = "Cơ sở 2",
                    Address = "Phường Phương Lâm, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)",
                    MapUrl = string.Empty
                }
            ]
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

    /// <summary>
    /// Bù khối "hệ thống cơ sở" cho dữ liệu lưu trước khi có trường này,
    /// để bản ghi cũ không bị coi là không hợp lệ rồi mất toàn bộ nội dung đã chỉnh.
    /// </summary>
    public static void BackfillLocations(SiteSettingsDocument document)
    {
        if (document.Locations is null)
        {
            document.Locations = Document().Locations;
            return;
        }

        if (string.IsNullOrWhiteSpace(document.Locations.Heading) && document.Locations.Items.Count == 0)
            document.Locations = Document().Locations;
    }
}
