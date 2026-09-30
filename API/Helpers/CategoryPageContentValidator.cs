using System.Net.Mail;
using System.Text.RegularExpressions;
using Core.PageContent;

namespace API.Helpers;

public static partial class CategoryPageContentValidator
{
    public static IReadOnlyList<string> Validate(CategoryPageContentDocument? document)
    {
        var errors = new List<string>();
        if (document is null)
        {
            errors.Add("content is required");
            return errors;
        }

        if (document.Version != 1) errors.Add("version must be 1");
        if (!CategoryPageContentDefaults.Kinds.Contains(document.Kind)) errors.Add("kind must be bike, machine or appliance");
        ValidateHero(document.Hero, errors);
        ValidateIntro(document.Intro, errors);
        ValidateHighlights(document.Highlights, errors);
        ValidateShowcase(document.Showcase, errors);
        ValidateCatalog(document.Catalog, errors);
        ValidateBrands(document.Brands, errors);
        ValidateFaq(document.Faq, errors);
        ValidateCta(document.Cta, errors);
        return errors;
    }

    private static void ValidateHero(CategoryHeroContent? hero, List<string> errors)
    {
        if (hero is null)
        {
            errors.Add("hero is required");
            return;
        }

        Required(hero.Badge, "hero.badge", errors);
        Required(hero.Title, "hero.title", errors);
        Required(hero.HighlightedTitle, "hero.highlightedTitle", errors);
        Required(hero.Description, "hero.description", errors);
        ImageUrl(hero.ImageSrc, "hero.imageSrc", errors);
        Required(hero.ImageAlt, "hero.imageAlt", errors);
        Required(hero.PrimaryCtaLabel, "hero.primaryCtaLabel", errors);
        Required(hero.SecondaryCtaLabel, "hero.secondaryCtaLabel", errors);
        FixedCount(hero.Metrics, 3, "hero.metrics", errors);

        if (hero.Metrics is not { Count: 3 }) return;
        for (var index = 0; index < hero.Metrics.Count; index++)
        {
            var metric = hero.Metrics[index];
            if (metric is null)
            {
                errors.Add($"hero.metrics[{index}] is required");
                continue;
            }
            Required(metric.Value, $"hero.metrics[{index}].value", errors);
            Required(metric.Label, $"hero.metrics[{index}].label", errors);
        }
    }

    private static void ValidateIntro(CategoryIntroContent? intro, List<string> errors)
    {
        if (intro is null)
        {
            errors.Add("intro is required");
            return;
        }

        Required(intro.Eyebrow, "intro.eyebrow", errors);
        Required(intro.Heading, "intro.heading", errors);
        Required(intro.Body, "intro.body", errors);
        FixedCount(intro.Bullets, 4, "intro.bullets", errors);
        if (intro.Bullets is not { Count: 4 }) return;
        for (var index = 0; index < intro.Bullets.Count; index++)
            Required(intro.Bullets[index], $"intro.bullets[{index}]", errors);
    }

    private static void ValidateHighlights(List<CategoryHighlightItem>? highlights, List<string> errors)
    {
        FixedCount(highlights, 4, "highlights", errors);
        if (highlights is not { Count: 4 }) return;
        for (var index = 0; index < highlights.Count; index++)
        {
            var item = highlights[index];
            var path = $"highlights[{index}]";
            if (item is null)
            {
                errors.Add($"{path} is required");
                continue;
            }
            Required(item.Icon, $"{path}.icon", errors);
            Required(item.Accent, $"{path}.accent", errors);
            Required(item.Title, $"{path}.title", errors);
            Required(item.Description, $"{path}.description", errors);
        }
    }

    private static void ValidateShowcase(CategoryShowcaseContent? showcase, List<string> errors)
    {
        if (showcase is null)
        {
            errors.Add("showcase is required");
            return;
        }

        Required(showcase.Heading, "showcase.heading", errors);
        Required(showcase.Description, "showcase.description", errors);
        FixedCount(showcase.Images, 3, "showcase.images", errors);
        if (showcase.Images is not { Count: 3 }) return;
        for (var index = 0; index < showcase.Images.Count; index++)
        {
            var image = showcase.Images[index];
            var path = $"showcase.images[{index}]";
            if (image is null)
            {
                errors.Add($"{path} is required");
                continue;
            }
            ImageUrl(image.Src, $"{path}.src", errors);
            Required(image.Caption, $"{path}.caption", errors);
            Required(image.Label, $"{path}.label", errors);
        }
    }

    private static void ValidateCatalog(CategoryCatalogContent? catalog, List<string> errors)
    {
        if (catalog is null)
        {
            errors.Add("catalog is required");
            return;
        }

        Required(catalog.Heading, "catalog.heading", errors);
        Required(catalog.Description, "catalog.description", errors);
        Required(catalog.AllCategoriesLabel, "catalog.allCategoriesLabel", errors);
        Required(catalog.AllBrandsLabel, "catalog.allBrandsLabel", errors);
        Required(catalog.SearchPlaceholder, "catalog.searchPlaceholder", errors);
        Required(catalog.SortLabel, "catalog.sortLabel", errors);
        Required(catalog.EmptyTitle, "catalog.emptyTitle", errors);
        Required(catalog.EmptyDescription, "catalog.emptyDescription", errors);
        Required(catalog.ResultSuffixLabel, "catalog.resultSuffixLabel", errors);
        Required(catalog.DetailButtonLabel, "catalog.detailButtonLabel", errors);
        Required(catalog.ClearFiltersLabel, "catalog.clearFiltersLabel", errors);
        Required(catalog.PriceFromLabel, "catalog.priceFromLabel", errors);
        Required(catalog.PriceToLabel, "catalog.priceToLabel", errors);
        Required(catalog.SortDefaultLabel, "catalog.sortDefaultLabel", errors);
        Required(catalog.SortPriceAscLabel, "catalog.sortPriceAscLabel", errors);
        Required(catalog.SortPriceDescLabel, "catalog.sortPriceDescLabel", errors);
        Required(catalog.SortNameAscLabel, "catalog.sortNameAscLabel", errors);
        Required(catalog.SortNewestLabel, "catalog.sortNewestLabel", errors);
    }

    private static void ValidateBrands(CategoryBrandsContent? brands, List<string> errors)
    {
        if (brands is null)
        {
            errors.Add("brands is required");
            return;
        }

        Required(brands.Heading, "brands.heading", errors);
        Required(brands.Description, "brands.description", errors);
    }

    private static void ValidateFaq(CategoryFaqContent? faq, List<string> errors)
    {
        if (faq is null)
        {
            errors.Add("faq is required");
            return;
        }

        Required(faq.Eyebrow, "faq.eyebrow", errors);
        Required(faq.Heading, "faq.heading", errors);
        Required(faq.Description, "faq.description", errors);
        FixedCount(faq.Items, 4, "faq.items", errors);
        if (faq.Items is not { Count: 4 }) return;
        for (var index = 0; index < faq.Items.Count; index++)
        {
            var item = faq.Items[index];
            if (item is null)
            {
                errors.Add($"faq.items[{index}] is required");
                continue;
            }
            Required(item.Question, $"faq.items[{index}].question", errors);
            Required(item.Answer, $"faq.items[{index}].answer", errors);
        }
    }

    private static void ValidateCta(CategoryCtaContent? cta, List<string> errors)
    {
        if (cta is null)
        {
            errors.Add("cta is required");
            return;
        }

        Required(cta.Heading, "cta.heading", errors);
        Required(cta.HighlightedHeading, "cta.highlightedHeading", errors);
        Required(cta.Description, "cta.description", errors);
        Required(cta.PhoneButtonLabel, "cta.phoneButtonLabel", errors);
        Required(cta.EmailButtonLabel, "cta.emailButtonLabel", errors);
        Required(cta.Note, "cta.note", errors);
        if (!IsEmail(cta.Email)) errors.Add("cta.email is invalid");
        if (string.IsNullOrWhiteSpace(cta.Phone) || !PhoneRegex().IsMatch(cta.Phone.Trim())) errors.Add("cta.phone is invalid");
    }

    private static void Required(string? value, string path, List<string> errors)
    {
        if (string.IsNullOrWhiteSpace(value)) errors.Add($"{path} is required");
    }

    private static void FixedCount<T>(ICollection<T>? values, int count, string path, List<string> errors)
    {
        if (values?.Count != count) errors.Add($"{path} must contain exactly {count} items");
    }

    private static void ImageUrl(string? value, string path, List<string> errors)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            errors.Add($"{path} image URL is required");
            return;
        }
        var trimmed = value.Trim();
        var local = trimmed.StartsWith("/", StringComparison.Ordinal) || trimmed.StartsWith("assets/", StringComparison.OrdinalIgnoreCase);
        var remote = Uri.TryCreate(trimmed, UriKind.Absolute, out var uri) && (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps);
        if (!local && !remote) errors.Add($"{path} image URL is invalid");
    }

    private static bool IsEmail(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return false;
        try { return new MailAddress(value.Trim()).Address == value.Trim(); }
        catch (FormatException) { return false; }
    }

    [GeneratedRegex(@"^\+?[0-9][0-9 .()\-]{5,19}$")]
    private static partial Regex PhoneRegex();
}
