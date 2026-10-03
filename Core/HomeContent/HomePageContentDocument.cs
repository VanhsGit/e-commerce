namespace Core.HomeContent;

public sealed class HomePageContentDocument
{
    public int Version { get; set; }
    public HomeNavigationContent Navigation { get; set; } = HomePageContentDefaults.CreateNavigation();
    public HomeCompanyContent Company { get; set; } = HomePageContentDefaults.CreateCompany();
    public HomeSolutionsContent Solutions { get; set; } = HomePageContentDefaults.CreateSolutions();
    public HomeRecruitmentContent Recruitment { get; set; } = HomePageContentDefaults.CreateRecruitment();
    public HomeHeroContent Hero { get; set; } = new();
    public List<HomeIndustryContent> Industries { get; set; } = [];
    public HomeCommitmentsContent Commitments { get; set; } = new();
    public HomeWarrantyContent Warranty { get; set; } = new();
    public HomeCtaContent Cta { get; set; } = new();
}

public sealed class HomeHeroContent
{
    // Empty legacy backgrounds resolve to the previously saved hero cards in the client.
    public string DesktopImageSrc { get; set; } = string.Empty;
    public string MobileImageSrc { get; set; } = string.Empty;
    public string ContactLabel { get; set; } = "Kết nối với chúng tôi";
    public string WarrantyLabel { get; set; } = "Tra cứu bảo hành";
    public string Badge { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string HighlightedTitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<HomeHeroCard> Cards { get; set; } = [];
    public List<HomeMetric> Metrics { get; set; } = [];
}

public sealed class HomeNavigationContent
{
    public string Heading { get; set; } = string.Empty;
    public string HomeLabel { get; set; } = string.Empty;
    public string RecruitmentLabel { get; set; } = string.Empty;
}

public sealed class HomeCompanyContent
{
    public string Eyebrow { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Detail { get; set; } = string.Empty;
    public string ImageSrc { get; set; } = string.Empty;
    public string ImageAlt { get; set; } = string.Empty;
    public List<HomeCompanyHighlight> Highlights { get; set; } = [];
}

public sealed class HomeCompanyHighlight
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public sealed class HomeSolutionsContent
{
    public string Heading { get; set; } = string.Empty;
    public string PreviousLabel { get; set; } = string.Empty;
    public string NextLabel { get; set; } = string.Empty;
    public List<HomeSolutionImage> Images { get; set; } = [];
}

public sealed class HomeSolutionImage
{
    public string ImageSrc { get; set; } = string.Empty;
    public string ImageAlt { get; set; } = string.Empty;
    public string Kind { get; set; } = string.Empty;
}

public sealed class HomeRecruitmentContent
{
    public string Badge { get; set; } = string.Empty;
    public string Heading { get; set; } = string.Empty;
    public string Intro { get; set; } = string.Empty;
    public string PositionsHeading { get; set; } = string.Empty;
    public string BenefitsHeading { get; set; } = string.Empty;
    public string SitesHeading { get; set; } = string.Empty;
    public string ApplyHeading { get; set; } = string.Empty;
    public string ApplyText { get; set; } = string.Empty;
    public string Closing { get; set; } = string.Empty;
    public List<HomeRecruitmentPosition> Positions { get; set; } = [];
    public List<string> Benefits { get; set; } = [];
    public List<HomeRecruitmentSite> Sites { get; set; } = [];
    public List<HomeRecruitmentHotline> Hotlines { get; set; } = [];
}

public sealed class HomeRecruitmentPosition
{
    public int Count { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Note { get; set; } = string.Empty;
}

public sealed class HomeRecruitmentSite
{
    public string Label { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
}

public sealed class HomeRecruitmentHotline
{
    public string Display { get; set; } = string.Empty;
    public string Tel { get; set; } = string.Empty;
}

public sealed class HomeHeroCard
{
    public string Kind { get; set; } = string.Empty;
    public string Anchor { get; set; } = string.Empty;
    public string ImageSrc { get; set; } = string.Empty;
    public string ImageAlt { get; set; } = string.Empty;
    public string Eyebrow { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
}

public sealed class HomeMetric
{
    public string Value { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
}

public sealed class HomeIndustryContent
{
    public string Kind { get; set; } = string.Empty;
    public string Theme { get; set; } = string.Empty;
    public string Anchor { get; set; } = string.Empty;
    public string GalleryLayout { get; set; } = string.Empty;
    public HomeGallery Gallery { get; set; } = new();
    public string Eyebrow { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Slogan { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Detail { get; set; } = string.Empty;
    public List<string> Categories { get; set; } = [];
    public List<HomeHighlight> Highlights { get; set; } = [];
    public HomeServiceContent Service { get; set; } = new();
    public string PriceFrom { get; set; } = string.Empty;
    public string CtaLabel { get; set; } = string.Empty;
}

public sealed class HomeGallery
{
    public HomeImage Main { get; set; } = new();
    public List<HomeImage> Secondary { get; set; } = [];
}

public sealed class HomeImage
{
    public string Src { get; set; } = string.Empty;
    public string Caption { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public string? ObjectPosition { get; set; }
}

public sealed class HomeHighlight
{
    public string Icon { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Note { get; set; } = string.Empty;
}

public sealed class HomeServiceContent
{
    public string Icon { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Note { get; set; } = string.Empty;
}

public sealed class HomeCommitmentsContent
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<HomeCommitmentItem> Items { get; set; } = [];
}

public sealed class HomeCommitmentItem
{
    public string Icon { get; set; } = string.Empty;
    public string Accent { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public sealed class HomeWarrantyContent
{
    public string Badge { get; set; } = string.Empty;
    public string Heading { get; set; } = string.Empty;
    public string Introduction { get; set; } = string.Empty;
    public string WarrantyPanelHeading { get; set; } = string.Empty;
    public string WarrantyPanelHelp { get; set; } = string.Empty;
    public string SerialLabel { get; set; } = string.Empty;
    public string SerialHint { get; set; } = string.Empty;
    public string PhoneLabel { get; set; } = string.Empty;
    public string SearchButtonLabel { get; set; } = string.Empty;
    public string ProductPanelHeading { get; set; } = string.Empty;
    public string ProductPanelHelp { get; set; } = string.Empty;
    public string ProductTypeLabel { get; set; } = string.Empty;
    public string ProductCodeLabel { get; set; } = string.Empty;
    public string ProductButtonLabel { get; set; } = string.Empty;
    public string CatalogueButtonLabel { get; set; } = string.Empty;
    public string TipLabel { get; set; } = string.Empty;
    public string BrowseBikesLabel { get; set; } = string.Empty;
    public string BrowseMachinesLabel { get; set; } = string.Empty;
}

public sealed class HomeCtaContent
{
    public string Heading { get; set; } = string.Empty;
    public string HighlightedHeading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string PhoneButtonLabel { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string EmailButtonLabel { get; set; } = string.Empty;
    public string WorkingHoursLabel { get; set; } = string.Empty;
    public string WorkingHoursValue { get; set; } = string.Empty;
    public string AddressLabel { get; set; } = string.Empty;
    public string AddressValue { get; set; } = string.Empty;
    public string SupportLabel { get; set; } = string.Empty;
    public string SupportValue { get; set; } = string.Empty;
}
