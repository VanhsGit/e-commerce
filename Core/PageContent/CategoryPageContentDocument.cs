namespace Core.PageContent;

public sealed class CategoryPageContentDocument
{
    public int Version { get; set; } = 1;
    public string Kind { get; set; } = string.Empty;
    public CategoryHeroContent Hero { get; set; } = new();
    public CategoryIntroContent Intro { get; set; } = new();
    public List<CategoryHighlightItem> Highlights { get; set; } = [];
    public CategoryShowcaseContent Showcase { get; set; } = new();
    public CategoryCatalogContent Catalog { get; set; } = new();
    public CategoryBrandsContent Brands { get; set; } = new();
    public CategoryFaqContent Faq { get; set; } = new();
    public CategoryCtaContent Cta { get; set; } = new();
}

public sealed class CategoryHeroContent
{
    public string Badge { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string HighlightedTitle { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageSrc { get; set; } = string.Empty;
    public string ImageAlt { get; set; } = string.Empty;
    public string PrimaryCtaLabel { get; set; } = string.Empty;
    public string SecondaryCtaLabel { get; set; } = string.Empty;
    public List<CategoryMetric> Metrics { get; set; } = [];
}

public sealed class CategoryMetric
{
    public string Value { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
}

public sealed class CategoryIntroContent
{
    public string Eyebrow { get; set; } = string.Empty;
    public string Heading { get; set; } = string.Empty;
    public string Body { get; set; } = string.Empty;
    public List<string> Bullets { get; set; } = [];
}

public sealed class CategoryHighlightItem
{
    public string Icon { get; set; } = string.Empty;
    public string Accent { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public sealed class CategoryShowcaseContent
{
    public string Heading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<CategoryImage> Images { get; set; } = [];
}

public sealed class CategoryImage
{
    public string Src { get; set; } = string.Empty;
    public string Caption { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
}

public sealed class CategoryCatalogContent
{
    public string Heading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AllCategoriesLabel { get; set; } = string.Empty;
    public string AllBrandsLabel { get; set; } = string.Empty;
    public string SearchPlaceholder { get; set; } = string.Empty;
    public string SortLabel { get; set; } = string.Empty;
    public string EmptyTitle { get; set; } = string.Empty;
    public string EmptyDescription { get; set; } = string.Empty;
    public string ResultSuffixLabel { get; set; } = string.Empty;
    public string DetailButtonLabel { get; set; } = string.Empty;
    public string ClearFiltersLabel { get; set; } = string.Empty;
    public string PriceFromLabel { get; set; } = string.Empty;
    public string PriceToLabel { get; set; } = string.Empty;
    public string SortDefaultLabel { get; set; } = string.Empty;
    public string SortPriceAscLabel { get; set; } = string.Empty;
    public string SortPriceDescLabel { get; set; } = string.Empty;
    public string SortNameAscLabel { get; set; } = string.Empty;
    public string SortNewestLabel { get; set; } = string.Empty;
}

public sealed class CategoryBrandsContent
{
    public string Heading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public sealed class CategoryFaqContent
{
    public string Eyebrow { get; set; } = string.Empty;
    public string Heading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<CategoryFaqItem> Items { get; set; } = [];
}

public sealed class CategoryFaqItem
{
    public string Question { get; set; } = string.Empty;
    public string Answer { get; set; } = string.Empty;
}

public sealed class CategoryCtaContent
{
    public string Heading { get; set; } = string.Empty;
    public string HighlightedHeading { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string PhoneButtonLabel { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string EmailButtonLabel { get; set; } = string.Empty;
    public string Note { get; set; } = string.Empty;
}
