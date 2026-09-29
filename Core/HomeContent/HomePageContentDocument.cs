namespace Core.HomeContent;

public sealed class HomePageContentDocument
{
    public int Version { get; set; }
    public HomeHeroContent Hero { get; set; } = new();
    public List<HomeIndustryContent> Industries { get; set; } = [];
    public HomeCommitmentsContent Commitments { get; set; } = new();
    public HomeWarrantyContent Warranty { get; set; } = new();
    public HomeCtaContent Cta { get; set; } = new();
}

public sealed class HomeHeroContent
{
    public string Badge { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string HighlightedTitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<HomeHeroCard> Cards { get; set; } = [];
    public List<HomeMetric> Metrics { get; set; } = [];
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
