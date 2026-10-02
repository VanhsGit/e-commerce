using System.Text.Json;

namespace Core.HomeContent;

public static class HomePageContentDefaults
{
    public static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    public static HomePageContentDocument Document => CreateDocument();

    public static string Json => JsonSerializer.Serialize(Document, JsonOptions);

    private static HomePageContentDocument CreateDocument() => new()
    {
        Version = 1,
        Hero = new HomeHeroContent
        {
            Badge = "15 năm phân phối chính hãng",
            Title = "Ba ngành hàng,",
            HighlightedTitle = "trọn một niềm tin",
            Description = "Xe điện cho nhịp sống xanh, máy nông nghiệp cho mùa vụ hiệu quả và điện gia dụng cho ngôi nhà tiện nghi — tất cả đều được chọn lọc, bảo hành và hỗ trợ tận nơi.",
            Cards =
            [
                HeroCard("bike", "bikes", "assets/images/home/electric-mobility.webp", "Xe điện hiện đại", "Di chuyển xanh", "Xe điện", "Êm ái, tiết kiệm và sẵn sàng cho mọi hành trình.", "electric_moped"),
                HeroCard("machine", "agriculture", "assets/images/home/agricultural-machinery.webp", "Máy nông nghiệp trên đồng ruộng", "Năng suất mùa vụ", "Máy nông nghiệp", "Bền bỉ, mạnh mẽ và phù hợp điều kiện canh tác Việt Nam.", "agriculture"),
                HeroCard("appliance", "appliances", "assets/images/home/home-appliances.webp", "Thiết bị điện gia dụng trong ngôi nhà hiện đại", "Tiện nghi mỗi ngày", "Điện gia dụng", "Thiết bị thiết yếu, tiết kiệm điện và dễ dàng bảo trì.", "home")
            ],
            Metrics =
            [
                new() { Value = "50.000+", Label = "Sản phẩm đã bàn giao" },
                new() { Value = "63/63", Label = "Tỉnh thành phục vụ" },
                new() { Value = "24/7", Label = "Hỗ trợ kỹ thuật" }
            ]
        },
        Industries = [BikeIndustry(), MachineIndustry(), ApplianceIndustry()],
        Commitments = new HomeCommitmentsContent
        {
            Title = "Ba ngành hàng, một chuẩn an tâm trong từng lựa chọn",
            Description = "Bốn cam kết xuyên suốt xe điện, máy nông nghiệp và điện gia dụng — từ nguồn gốc sản phẩm đến dịch vụ sau bán hàng.",
            Items =
            [
                Commitment("workspace_premium", "bg-emerald-500", "Chính hãng 100%", "Nhập khẩu trực tiếp, đầy đủ hóa đơn VAT, tem chống giả và giấy tờ CO – CQ."),
                Commitment("verified_user", "bg-sky-500", "Bảo hành rõ ràng", "Xe điện 3 năm, máy nông nghiệp 12 – 24 tháng. Tra cứu bảo hành online bằng số serial."),
                Commitment("build", "bg-amber-500", "Kỹ thuật tới tận nơi", "Đội kỹ thuật có mặt trong 24 giờ, sửa chữa tại nhà và tại ruộng trên toàn quốc."),
                Commitment("credit_card", "bg-violet-500", "Trả góp 0% lãi suất", "Duyệt hồ sơ trong ngày, trả trước từ 20%, hỗ trợ trả theo mùa vụ cho hợp tác xã.")
            ]
        },
        Warranty = new HomeWarrantyContent
        {
            Badge = "Dịch vụ hậu mãi",
            Heading = "Tra cứu thông tin bảo hành",
            Introduction = " ",
            WarrantyPanelHeading = "Tra cứu bảo hành",
            WarrantyPanelHelp = "Kiểm tra bảo hành bằng Serial hoặc SĐT",
            SerialLabel = "Serial số sản phẩm",
            SerialHint = "(in trên tem máy)",
            PhoneLabel = "Hoặc Số điện thoại khách hàng",
            SearchButtonLabel = "Tra cứu bảo hành",
            ProductPanelHeading = "Tra cứu sản phẩm nhanh",
            ProductPanelHelp = "Chọn loại và nhập mã sản phẩm để xem chi tiết",
            ProductTypeLabel = "Loại sản phẩm",
            ProductCodeLabel = "Mã / ID sản phẩm",
            ProductButtonLabel = "Xem chi tiết",
            CatalogueButtonLabel = "Danh mục",
            TipLabel = "Mẫu thử:",
            BrowseBikesLabel = "Xem xe điện",
            BrowseMachinesLabel = "Xem máy nông nghiệp"
        },
        Cta = new HomeCtaContent
        {
            Heading = "Cần tư vấn lựa chọn?",
            HighlightedHeading = "Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng",
            Description = "Dù bạn đang chọn xe điện cho gia đình, máy nông nghiệp cho mùa vụ hay điện gia dụng cho tổ ấm, đội ngũ của chúng tôi luôn sẵn sàng tư vấn giải pháp phù hợp, báo giá rõ ràng và hỗ trợ tận tâm.",
            Phone = "19001234",
            PhoneButtonLabel = "Hotline miễn phí",
            Email = "hello@example.vn",
            EmailButtonLabel = "Gửi email cho chúng tôi",
            WorkingHoursLabel = "Giờ làm việc",
            WorkingHoursValue = "Thứ 2 – Chủ Nhật · 7h – 21h",
            AddressLabel = "Văn phòng chính",
            AddressValue = "123 Đường Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
            SupportLabel = "Hỗ trợ 24/7",
            SupportValue = "Zalo / Facebook Messenger: @greenmobility"
        }
    };

    private static HomeIndustryContent BikeIndustry() => new()
    {
        Kind = "bike",
        Theme = "sky",
        Anchor = "bikes",
        GalleryLayout = "kinetic",
        Gallery = new HomeGallery
        {
            Main = Image("assets/images/home/electric-mobility.webp", "Xe máy điện và xe đạp điện trong không gian đô thị hiện đại", "Di chuyển xanh"),
            Secondary =
            [
                Image("assets/images/home/electric-mobility.webp", "Thiết kế xe điện hiện đại", "Thiết kế", "28% center"),
                Image("assets/images/home/electric-mobility.webp", "Xe điện đồng hành trong đô thị", "Trải nghiệm", "82% center")
            ]
        },
        Eyebrow = "Ngành hàng 01",
        Title = "Xe điện",
        Slogan = "Di chuyển xanh, chủ động mỗi ngày",
        Description = "Từ xe máy điện, xe đạp điện đến xe tải điện dành cho đi học, đi làm và kinh doanh. Sản phẩm chính hãng, vận hành tiết kiệm và có hệ thống bảo hành trên toàn quốc.",
        Detail = "Đội ngũ tư vấn sẽ dựa trên quãng đường di chuyển, tải trọng và thói quen sạc để giúp bạn chọn đúng dòng xe, dung lượng pin và phương án tài chính phù hợp nhất.",
        Categories = ["Xe máy điện", "Xe đạp điện", "Xe tải điện", "Pin & phụ tùng"],
        Highlights =
        [
            Highlight("battery_charging_full", "80–120 km mỗi lần sạc", "Chi phí vận hành chỉ khoảng 3.000đ cho 100 km."),
            Highlight("verified_user", "Bảo hành đến 5 năm", "Hỗ trợ pin, phụ tùng và kỹ thuật tại hơn 100 đại lý."),
            Highlight("credit_card", "Trả góp 0% lãi suất", "Nhận xe nhanh với mức trả trước linh hoạt."),
            Highlight("eco", "Vận hành xanh và êm ái", "Không khí thải trực tiếp, ít tiếng ồn và dễ bảo dưỡng.")
        ],
        Service = Service("headset_mic", "Tư vấn xe theo nhu cầu thực tế", "So sánh tầm hoạt động, chi phí sạc và chính sách pin trước khi quyết định."),
        PriceFrom = "Từ 9.900.000đ",
        CtaLabel = "Khám phá xe điện"
    };

    private static HomeIndustryContent MachineIndustry() => new()
    {
        Kind = "machine",
        Theme = "amber",
        Anchor = "agriculture",
        GalleryLayout = "field",
        Gallery = new HomeGallery
        {
            Main = Image("assets/images/home/agricultural-machinery.webp", "Máy nông nghiệp hiện đại trên cánh đồng lúa", "Cơ giới hóa mùa vụ"),
            Secondary =
            [
                Image("assets/images/home/agricultural-machinery.webp", "Máy nông nghiệp vận hành trên đồng ruộng", "Vận hành", "18% center"),
                Image("assets/images/home/agricultural-machinery.webp", "Chi tiết thiết bị nông nghiệp", "Thiết bị", "50% center"),
                Image("assets/images/home/agricultural-machinery.webp", "Năng suất canh tác hiện đại", "Năng suất", "84% center")
            ]
        },
        Eyebrow = "Ngành hàng 02",
        Title = "Máy nông nghiệp",
        Slogan = "Cơ giới hóa để mùa vụ nhẹ hơn",
        Description = "Máy cày, máy gặt, máy bơm và thiết bị canh tác được chọn theo điều kiện đồng ruộng Việt Nam. Giải pháp bền bỉ giúp tiết kiệm nhân công, thời gian và giảm hao hụt sau thu hoạch.",
        Detail = "Mỗi thiết bị được tư vấn theo diện tích canh tác, loại đất, cây trồng và tần suất vận hành. Khách hàng được hướng dẫn sử dụng, lịch bảo dưỡng và phương án phụ tùng lâu dài.",
        Categories = ["Máy cày & máy xới", "Máy gặt", "Máy bơm nước", "Thiết bị canh tác"],
        Highlights =
        [
            Highlight("schedule", "Năng suất vượt trội", "Một máy thay thế nhiều nhân công trong mùa cao điểm."),
            Highlight("workspace_premium", "Nguồn gốc rõ ràng", "Thiết bị chính ngạch, đầy đủ CO/CQ và hóa đơn VAT."),
            Highlight("handyman", "Kỹ thuật tận ruộng", "Hỗ trợ sự cố nhanh và luôn sẵn kho phụ tùng thay thế."),
            Highlight("handshake", "Tài chính theo mùa vụ", "Phương án thanh toán phù hợp hộ canh tác và hợp tác xã.")
        ],
        Service = Service("phone_in_talk", "Khảo sát và tư vấn trước khi giao máy", "Kỹ thuật viên hỗ trợ chọn công suất, phụ kiện và quy trình vận hành phù hợp."),
        PriceFrom = "Từ 18.500.000đ",
        CtaLabel = "Khám phá máy nông nghiệp"
    };

    private static HomeIndustryContent ApplianceIndustry() => new()
    {
        Kind = "appliance",
        Theme = "sage",
        Anchor = "appliances",
        GalleryLayout = "constellation",
        Gallery = new HomeGallery
        {
            Main = Image("assets/images/home/home-appliances.webp", "Các thiết bị điện gia dụng thiết yếu trong ngôi nhà hiện đại", "Không gian tiện nghi"),
            Secondary =
            [
                Image("assets/images/home/home-appliances.webp", "Thiết bị nhà bếp hiện đại", "Nhà bếp", "8% center"),
                Image("assets/images/home/home-appliances.webp", "Thiết bị điện lạnh gia đình", "Điện lạnh", "38% center"),
                Image("assets/images/home/home-appliances.webp", "Thiết bị chăm sóc quần áo", "Giặt sấy", "65% center"),
                Image("assets/images/home/home-appliances.webp", "Thiết bị làm mát cho ngôi nhà", "Làm mát", "92% center")
            ]
        },
        Eyebrow = "Ngành hàng 03",
        Title = "Điện gia dụng",
        Slogan = "Tiện nghi bền lâu cho mọi mái nhà",
        Description = "Tủ lạnh, máy giặt, quạt điện, nồi cơm và thiết bị điện nước thiết yếu cho gia đình. Chúng tôi ưu tiên sản phẩm dễ sử dụng, tiết kiệm điện và thuận tiện bảo trì lâu dài.",
        Detail = "Danh mục đáp ứng nhu cầu từ căn hộ, nhà phố đến cửa hàng và công trình nhỏ. Mỗi sản phẩm đều được tư vấn theo công suất, diện tích sử dụng và mức tiêu thụ điện dự kiến.",
        Categories = ["Thiết bị nhà bếp", "Điện lạnh", "Quạt & làm mát", "Máy bơm & mô tơ"],
        Highlights =
        [
            Highlight("bolt", "Tiết kiệm điện năng", "Thiết bị được chọn theo hiệu suất và nhu cầu sử dụng thực tế."),
            Highlight("verified_user", "Chính hãng, bảo hành rõ ràng", "Nguồn gốc minh bạch và chính sách hậu mãi đầy đủ."),
            Highlight("local_shipping", "Giao lắp tận nhà", "Tư vấn vị trí, vận chuyển và lắp đặt an toàn."),
            Highlight("handyman", "Dễ bảo trì, sẵn linh kiện", "Hỗ trợ kỹ thuật và thay thế linh kiện trong suốt quá trình sử dụng.")
        ],
        Service = Service("verified", "Mua đúng công suất, dùng bền lâu", "Được tư vấn điện năng, vị trí lắp đặt và cách sử dụng an toàn trước khi nhận hàng."),
        PriceFrom = "Giá tốt mỗi ngày",
        CtaLabel = "Khám phá điện gia dụng"
    };

    private static HomeHeroCard HeroCard(string kind, string anchor, string imageSrc, string imageAlt, string eyebrow, string title, string description, string icon) =>
        new() { Kind = kind, Anchor = anchor, ImageSrc = imageSrc, ImageAlt = imageAlt, Eyebrow = eyebrow, Title = title, Description = description, Icon = icon };

    private static HomeImage Image(string src, string caption, string label, string? objectPosition = null) =>
        new() { Src = src, Caption = caption, Label = label, ObjectPosition = objectPosition };

    private static HomeHighlight Highlight(string icon, string title, string note) =>
        new() { Icon = icon, Title = title, Note = note };

    private static HomeServiceContent Service(string icon, string title, string note) =>
        new() { Icon = icon, Title = title, Note = note };

    private static HomeCommitmentItem Commitment(string icon, string accent, string title, string description) =>
        new() { Icon = icon, Accent = accent, Title = title, Description = description };
}
