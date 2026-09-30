using System.Text.Json;

namespace Core.PageContent;

public static class CategoryPageContentDefaults
{
    public const string Bike = "bike";
    public const string Machine = "machine";
    public const string Appliance = "appliance";

    public static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    public static IReadOnlyList<string> Kinds => [Bike, Machine, Appliance];

    public static CategoryPageContentDocument For(string kind) => kind switch
    {
        Bike => BikeDocument(),
        Machine => MachineDocument(),
        Appliance => ApplianceDocument(),
        _ => throw new ArgumentOutOfRangeException(nameof(kind), kind, "Unsupported category page kind.")
    };

    public static string JsonFor(string kind) => JsonSerializer.Serialize(For(kind), JsonOptions);

    private static CategoryPageContentDocument BikeDocument() => new()
    {
        Version = 1,
        Kind = Bike,
        Hero = new CategoryHeroContent
        {
            Badge = "Xe điện chính hãng",
            Title = "Xe điện cho",
            HighlightedTitle = "mỗi hành trình trong phố",
            Description = "Dải xe 133-12A và 133-20A với nhiều phiên bản rẻ, thường, full cùng các dòng xe XS, Bull, Q1, CV một yên và hai yên. Pin bền, vận hành êm, bảo hành dài và có kỹ thuật viên hỗ trợ tại nhà.",
            ImageSrc = "assets/images/home/electric-mobility.webp",
            ImageAlt = "Xe điện hiện đại di chuyển trong phố",
            PrimaryCtaLabel = "Xem danh sách xe",
            SecondaryCtaLabel = "Nhận tư vấn",
            Metrics =
            [
                new() { Value = "3 năm", Label = "Bảo hành pin" },
                new() { Value = "0đ", Label = "Phí kiểm tra định kỳ" },
                new() { Value = "63/63", Label = "Tỉnh thành phục vụ" }
            ]
        },
        Intro = new CategoryIntroContent
        {
            Eyebrow = "Về dòng xe điện",
            Heading = "Chọn đúng dòng xe, đi bền mỗi ngày",
            Body = "Mỗi dải xe có ba phiên bản rẻ, thường và full để bạn cân đối giữa ngân sách và trang bị. Đội ngũ tư vấn dựa trên quãng đường đi làm, tải trọng và thói quen sạc để gợi ý mẫu xe, dung lượng pin và phương án tài chính phù hợp nhất.",
            Bullets =
            [
                "Dải 133-12A và 133-20A với ba phiên bản: bản rẻ, bản thường, bản full",
                "Các dòng xe XS, Bull, Q1 cho nhu cầu đi học, đi làm và di chuyển trong phố",
                "Dòng CV một yên và hai yên gọn nhẹ, dễ điều khiển, phù hợp đi chợ, đưa đón",
                "Linh kiện, pin và phụ tùng thay thế luôn sẵn kho tại các đại lý"
            ]
        },
        Highlights =
        [
            Highlight("battery_charging_full", "bg-emerald-500", "Pin bền, đi xa hơn", "Pin dung lượng lớn, đi được quãng đường dài sau mỗi lần sạc, chi phí vận hành chỉ bằng một phần nhỏ so với xe xăng."),
            Highlight("verified_user", "bg-sky-500", "Bảo hành 3 năm", "Bảo hành pin 3 năm, động cơ và bộ điều khiển theo chính sách hãng, tra cứu nhanh bằng số serial."),
            Highlight("credit_card", "bg-violet-500", "Trả góp 0%", "Duyệt hồ sơ trong ngày, trả trước linh hoạt, không phát sinh lãi suất trong kỳ hạn ưu đãi."),
            Highlight("build", "bg-amber-500", "Kỹ thuật tại nhà", "Kỹ thuật viên đến tận nhà kiểm tra, thay thế linh kiện và hướng dẫn sử dụng an toàn.")
        ],
        Showcase = new CategoryShowcaseContent
        {
            Heading = "Xe điện trong nhịp sống mỗi ngày",
            Description = "Từ giờ tan học đến những chuyến đi làm sớm, xe điện giúp bạn di chuyển nhẹ nhàng, tiết kiệm và thân thiện với môi trường.",
            Images =
            [
                Image("assets/images/home/electric-mobility.webp", "Xe điện đồng hành cùng bạn trong phố", "Di chuyển xanh"),
                Image("assets/images/home/electric-mobility.webp", "Thiết kế hiện đại, dễ điều khiển", "Thiết kế"),
                Image("assets/images/home/electric-mobility.webp", "Trải nghiệm vận hành êm ái", "Trải nghiệm")
            ]
        },
        Catalog = Catalog(
            "Danh sách xe điện",
            "Chọn theo dải xe và phiên bản, lọc theo thương hiệu hoặc mức giá để tìm chiếc xe phù hợp.",
            "Chưa có xe phù hợp",
            "Hãy thử bỏ bớt bộ lọc hoặc chọn dải xe khác. Bạn cũng có thể gọi hotline để được tư vấn trực tiếp.",
            "xe"),
        Brands = new CategoryBrandsContent
        {
            Heading = "Thương hiệu xe điện phân phối",
            Description = "Chúng tôi chỉ làm việc với các thương hiệu có nguồn gốc rõ ràng, đầy đủ chứng từ và chính sách bảo hành minh bạch."
        },
        Faq = new CategoryFaqContent
        {
            Eyebrow = "Câu hỏi thường gặp",
            Heading = "Câu hỏi về xe điện",
            Description = "Những điều khách hàng hay hỏi trước khi chọn xe điện: quãng đường, thời gian sạc, đăng ký và sự khác biệt giữa các phiên bản.",
            Items =
            [
                Faq("Xe đi được bao xa sau mỗi lần sạc?", "Tùy dòng xe và dung lượng pin, xe đi được khoảng 60 đến 120 km mỗi lần sạc đầy trong điều kiện đường phố bình thường. Quãng đường thực tế còn phụ thuộc tải trọng, địa hình và tốc độ."),
                Faq("Sạc đầy pin mất bao lâu?", "Thông thường cần 6 đến 8 giờ để sạc đầy bằng bộ sạc theo xe. Bạn có thể sạc qua đêm tại nhà bằng ổ điện dân dụng thông thường."),
                Faq("Xe điện có cần đăng ký biển số không?", "Có. Tùy loại xe và công suất động cơ, xe có thể thuộc diện phải đăng ký biển số và có bằng lái. Đội ngũ tư vấn sẽ hướng dẫn thủ tục cụ thể theo từng dòng xe khi bạn mua."),
                Faq("Bản rẻ, bản thường và bản full khác nhau thế nào?", "Bản rẻ tập trung vào giá tốt với trang bị cơ bản. Bản thường bổ sung tiện ích và pin tốt hơn. Bản full có đầy đủ trang bị cao cấp như phanh, đèn, màn hình và dung lượng pin lớn nhất của dải xe.")
            ]
        },
        Cta = Cta(
            "Chưa biết chọn xe nào?",
            "Gọi ngay để được tư vấn miễn phí",
            "Cho chúng tôi biết quãng đường đi làm và ngân sách, đội ngũ sẽ gợi ý dòng xe phù hợp, báo giá rõ ràng và hỗ trợ thủ tục trả góp.",
            "Xe điện bảo hành tận nơi, kiểm tra định kỳ miễn phí trên toàn quốc.")
    };

    private static CategoryPageContentDocument MachineDocument() => new()
    {
        Version = 1,
        Kind = Machine,
        Hero = new CategoryHeroContent
        {
            Badge = "Máy nông nghiệp chính hãng",
            Title = "Máy nông nghiệp",
            HighlightedTitle = "bền bỉ qua từng mùa vụ",
            Description = "Máy cưa, máy cắt cỏ, động cơ nổ chạy xăng và dầu, máy bơm, máy phun và đầy đủ phụ kiện. Thiết bị được chọn theo điều kiện canh tác Việt Nam, có phụ tùng sẵn kho và kỹ thuật hỗ trợ tận ruộng.",
            ImageSrc = "assets/images/home/agricultural-machinery.webp",
            ImageAlt = "Máy nông nghiệp hoạt động trên đồng ruộng",
            PrimaryCtaLabel = "Xem danh sách máy",
            SecondaryCtaLabel = "Nhận tư vấn",
            Metrics =
            [
                new() { Value = "14", Label = "Nhóm thiết bị" },
                new() { Value = "24h", Label = "Có mặt kỹ thuật" },
                new() { Value = "12–24 tháng", Label = "Bảo hành" }
            ]
        },
        Intro = new CategoryIntroContent
        {
            Eyebrow = "Về máy nông nghiệp",
            Heading = "Cơ giới hóa để mùa vụ nhẹ hơn",
            Body = "Từ làm đất, phun thuốc, bơm nước đến thu hoạch và chế biến sau thu hoạch, mỗi nhóm thiết bị đều được tư vấn theo diện tích canh tác, loại cây trồng và tần suất vận hành để bạn đầu tư đúng chỗ, tiết kiệm nhân công và nhiên liệu.",
            Bullets =
            [
                "Máy cưa, máy cắt cỏ, máy sới đất cho việc làm vườn và dọn đồng",
                "Động cơ nổ, động cơ xăng, động cơ dầu đa dạng công suất",
                "Máy bơm xăng, bình phun điện, máy phun, dây phun và đầu phun",
                "Máy tuốt lúa, máy sát gạo, máy thái chuối cho khâu sau thu hoạch"
            ]
        },
        Highlights =
        [
            Highlight("schedule", "bg-amber-500", "Năng suất vượt trội", "Một máy thay thế nhiều nhân công trong mùa cao điểm, giúp kịp thời vụ và giảm hao hụt sau thu hoạch."),
            Highlight("workspace_premium", "bg-emerald-500", "Nguồn gốc rõ ràng", "Thiết bị chính ngạch, đầy đủ hóa đơn VAT và giấy tờ CO, CQ, tem chống giả nguyên vẹn."),
            Highlight("handyman", "bg-sky-500", "Kỹ thuật tận ruộng", "Hỗ trợ sự cố nhanh, hướng dẫn vận hành và luôn sẵn phụ tùng hao mòn để thay thế."),
            Highlight("handshake", "bg-violet-500", "Tài chính theo mùa vụ", "Phương án thanh toán linh hoạt phù hợp hộ canh tác và hợp tác xã.")
        ],
        Showcase = new CategoryShowcaseContent
        {
            Heading = "Máy móc đồng hành cùng nhà nông",
            Description = "Thiết bị vận hành ổn định trong điều kiện nắng, bụi và bùn đất, giữ hiệu suất suốt nhiều mùa vụ liên tiếp.",
            Images =
            [
                Image("assets/images/home/agricultural-machinery.webp", "Máy nông nghiệp trên cánh đồng lúa", "Cơ giới hóa"),
                Image("assets/images/home/agricultural-machinery.webp", "Động cơ và thiết bị canh tác bền bỉ", "Thiết bị"),
                Image("assets/images/home/agricultural-machinery.webp", "Tăng năng suất canh tác", "Năng suất")
            ]
        },
        Catalog = Catalog(
            "Danh sách máy nông nghiệp",
            "Lọc theo nhóm thiết bị, thương hiệu hoặc mức giá để chọn đúng máy cho nhu cầu canh tác.",
            "Chưa có máy phù hợp",
            "Hãy thử bỏ bớt bộ lọc hoặc chọn nhóm thiết bị khác. Kỹ thuật viên luôn sẵn sàng tư vấn qua hotline.",
            "máy"),
        Brands = new CategoryBrandsContent
        {
            Heading = "Thương hiệu máy nông nghiệp phân phối",
            Description = "Các thương hiệu được chọn lọc theo độ bền, khả năng cung ứng phụ tùng và chính sách bảo hành tại Việt Nam."
        },
        Faq = new CategoryFaqContent
        {
            Eyebrow = "Câu hỏi thường gặp",
            Heading = "Câu hỏi về máy nông nghiệp",
            Description = "Những câu hỏi thường gặp khi chọn công suất, bảo dưỡng và phụ tùng cho máy nông nghiệp.",
            Items =
            [
                Faq("Làm sao chọn công suất máy phù hợp?", "Công suất phụ thuộc diện tích, loại đất và cây trồng. Bạn chỉ cần cho chúng tôi biết nhu cầu sử dụng, kỹ thuật viên sẽ tư vấn công suất và loại động cơ vừa đủ để không lãng phí nhiên liệu."),
                Faq("Phụ tùng hao mòn có sẵn để thay thế không?", "Các phụ tùng thường hao mòn như bugi, lọc gió, dây curoa, xích cưa, lưỡi cắt và đầu phun luôn có sẵn kho để thay thế nhanh, hạn chế gián đoạn mùa vụ."),
                Faq("Bao lâu nên bảo dưỡng máy một lần?", "Nên vệ sinh sau mỗi lần sử dụng, thay nhớt và kiểm tra tổng thể sau khoảng 50 đến 100 giờ vận hành hoặc trước mỗi vụ mới. Chúng tôi có lịch nhắc và dịch vụ bảo dưỡng tận nơi."),
                Faq("Các máy được phân phối của thương hiệu nào?", "Chúng tôi phân phối máy của nhiều thương hiệu chính hãng. Danh sách thương hiệu cụ thể hiển thị ngay trên trang, bạn có thể lọc sản phẩm theo từng thương hiệu.")
            ]
        },
        Cta = Cta(
            "Cần chọn máy cho mùa vụ tới?",
            "Kỹ thuật viên luôn sẵn sàng tư vấn",
            "Cho chúng tôi biết diện tích canh tác và loại cây trồng, đội ngũ sẽ đề xuất thiết bị phù hợp, báo giá chi tiết và hỗ trợ giao máy tận nơi.",
            "Bảo hành 12 đến 24 tháng, kỹ thuật có mặt trong 24 giờ.")
    };

    private static CategoryPageContentDocument ApplianceDocument() => new()
    {
        Version = 1,
        Kind = Appliance,
        Hero = new CategoryHeroContent
        {
            Badge = "Đồ điện chính hãng",
            Title = "Điện cơ dân dụng",
            HighlightedTitle = "cho ngôi nhà và công trình",
            Description = "Máy rửa xe, dụng cụ cầm tay, máy xây dựng, mô tơ, máy bơm và ắc quy các loại. Thiết bị thiết yếu cho gia đình, xưởng nhỏ và công trình, được bảo hành rõ ràng và đổi mới nhanh nếu lỗi.",
            ImageSrc = "assets/images/home/home-appliances.webp",
            ImageAlt = "Thiết bị điện cơ dân dụng trong ngôi nhà hiện đại",
            PrimaryCtaLabel = "Xem danh sách sản phẩm",
            SecondaryCtaLabel = "Nhận tư vấn",
            Metrics =
            [
                new() { Value = "6", Label = "Nhóm sản phẩm" },
                new() { Value = "100%", Label = "Hàng chính hãng" },
                new() { Value = "7 ngày", Label = "Đổi mới nếu lỗi" }
            ]
        },
        Intro = new CategoryIntroContent
        {
            Eyebrow = "Về đồ điện",
            Heading = "Thiết bị đúng công suất, dùng bền lâu",
            Body = "Mỗi sản phẩm đều được tư vấn theo công suất, điện áp và môi trường sử dụng thực tế. Bạn mua đúng thiết bị cần dùng, vận hành an toàn, tiết kiệm điện và dễ bảo trì lâu dài.",
            Bullets =
            [
                "Máy rửa xe áp lực cho gia đình, tiệm rửa xe và vệ sinh công trình",
                "Dụng cụ cầm tay và máy xây dựng cho thợ chuyên nghiệp và tự làm",
                "Mô tơ và máy bơm đa dạng công suất cho tưới tiêu, cấp nước, xưởng",
                "Ắc quy các loại cho xe, đèn, inverter và hệ thống lưu điện"
            ]
        },
        Highlights =
        [
            Highlight("bolt", "bg-sky-500", "Tiết kiệm điện năng", "Thiết bị được chọn theo hiệu suất và nhu cầu sử dụng thực tế, giảm chi phí điện hằng tháng."),
            Highlight("verified_user", "bg-emerald-500", "Chính hãng, bảo hành rõ ràng", "Nguồn gốc minh bạch, tem bảo hành đầy đủ và chính sách hậu mãi nhanh gọn."),
            Highlight("local_shipping", "bg-violet-500", "Giao hàng nhanh", "Tư vấn vị trí lắp đặt, vận chuyển an toàn và hỗ trợ lắp đặt khi cần."),
            Highlight("handyman", "bg-amber-500", "Dễ bảo trì, sẵn linh kiện", "Linh kiện thay thế luôn sẵn kho, kỹ thuật viên hỗ trợ trong suốt quá trình sử dụng.")
        ],
        Showcase = new CategoryShowcaseContent
        {
            Heading = "Thiết bị điện cho mọi không gian",
            Description = "Từ gara gia đình đến công trình nhỏ, bộ thiết bị điện cơ của chúng tôi giúp công việc nhanh gọn và an toàn hơn.",
            Images =
            [
                Image("assets/images/home/home-appliances.webp", "Thiết bị điện dân dụng trong ngôi nhà", "Gia đình"),
                Image("assets/images/home/home-appliances.webp", "Dụng cụ và máy móc cho công trình", "Công trình"),
                Image("assets/images/home/home-appliances.webp", "Mô tơ và máy bơm vận hành ổn định", "Vận hành")
            ]
        },
        Catalog = Catalog(
            "Danh sách đồ điện",
            "Lọc theo nhóm sản phẩm, thương hiệu hoặc mức giá để chọn đúng thiết bị bạn cần.",
            "Chưa có sản phẩm phù hợp",
            "Hãy thử bỏ bớt bộ lọc hoặc chọn nhóm sản phẩm khác. Bạn cũng có thể gọi hotline để được tư vấn trực tiếp.",
            "sản phẩm"),
        Brands = new CategoryBrandsContent
        {
            Heading = "Thương hiệu đồ điện phân phối",
            Description = "Thương hiệu được chọn lọc theo độ an toàn, độ bền và khả năng cung ứng linh kiện thay thế."
        },
        Faq = new CategoryFaqContent
        {
            Eyebrow = "Câu hỏi thường gặp",
            Heading = "Câu hỏi về đồ điện",
            Description = "Những câu hỏi thường gặp khi chọn công suất, mô tơ, ắc quy và chính sách bảo hành đồ điện.",
            Items =
            [
                Faq("Máy rửa xe công suất bao nhiêu là đủ dùng?", "Với gia đình, máy từ 1500 đến 2000W là phù hợp để rửa xe máy và ô tô. Tiệm rửa xe hoặc vệ sinh công trình nên chọn máy công suất lớn hơn, chạy liên tục và có mô tơ chống quá nhiệt."),
                Faq("Chọn mô tơ như thế nào cho đúng?", "Bạn cần xác định công suất tải, điện áp nguồn (một pha hay ba pha) và tốc độ vòng quay cần thiết. Hãy gửi thông số thiết bị cần kéo, chúng tôi sẽ tư vấn mô tơ phù hợp."),
                Faq("Chọn ắc quy theo tiêu chí nào?", "Chọn theo điện áp (ví dụ 12V), dung lượng Ah và mục đích sử dụng: khởi động, lưu điện hay chạy thiết bị liên tục. Dung lượng lớn hơn sẽ cấp điện lâu hơn nhưng cần bộ sạc tương thích."),
                Faq("Chính sách bảo hành như thế nào?", "Mọi sản phẩm được bảo hành chính hãng theo thời hạn ghi trên tem và hóa đơn. Sản phẩm lỗi do nhà sản xuất được đổi mới trong 7 ngày, sau đó hỗ trợ sửa chữa theo chính sách bảo hành.")
            ]
        },
        Cta = Cta(
            "Cần chọn đúng thiết bị?",
            "Tư vấn công suất miễn phí",
            "Mô tả nhu cầu sử dụng, đội ngũ sẽ gợi ý thiết bị đúng công suất, báo giá rõ ràng và hỗ trợ giao hàng nhanh chóng.",
            "Hàng chính hãng, đổi mới trong 7 ngày nếu lỗi do nhà sản xuất.")
    };

    private static CategoryHighlightItem Highlight(string icon, string accent, string title, string description) => new()
    {
        Icon = icon,
        Accent = accent,
        Title = title,
        Description = description
    };

    private static CategoryImage Image(string src, string caption, string label) => new()
    {
        Src = src,
        Caption = caption,
        Label = label
    };

    private static CategoryFaqItem Faq(string question, string answer) => new()
    {
        Question = question,
        Answer = answer
    };

    private static CategoryCatalogContent Catalog(
        string heading,
        string description,
        string emptyTitle,
        string emptyDescription,
        string resultNoun) => new()
    {
        Heading = heading,
        Description = description,
        AllCategoriesLabel = "Tất cả danh mục",
        AllBrandsLabel = "Tất cả thương hiệu",
        SearchPlaceholder = "Tìm theo tên, mã, thương hiệu...",
        SortLabel = "Sắp xếp",
        EmptyTitle = emptyTitle,
        EmptyDescription = emptyDescription,
        ResultSuffixLabel = $"{resultNoun} phù hợp",
        DetailButtonLabel = "Xem chi tiết",
        ClearFiltersLabel = "Xóa bộ lọc",
        PriceFromLabel = "Giá từ",
        PriceToLabel = "Giá đến",
        SortDefaultLabel = "Mặc định",
        SortPriceAscLabel = "Giá thấp đến cao",
        SortPriceDescLabel = "Giá cao đến thấp",
        SortNameAscLabel = "Tên A → Z",
        SortNewestLabel = "Mới nhất"
    };

    private static CategoryCtaContent Cta(string heading, string highlighted, string description, string note) => new()
    {
        Heading = heading,
        HighlightedHeading = highlighted,
        Description = description,
        Phone = "19001234",
        PhoneButtonLabel = "Hotline miễn phí",
        Email = "hello@ecotech.vn",
        EmailButtonLabel = "Gửi email cho chúng tôi",
        Note = note
    };
}
