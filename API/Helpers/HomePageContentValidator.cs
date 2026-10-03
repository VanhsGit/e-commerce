using System.Net.Mail;
using System.Text.RegularExpressions;
using Core.HomeContent;

namespace API.Helpers;

public static partial class HomePageContentValidator
{
    private static readonly string[] IndustryKinds = ["bike", "machine", "appliance"];
    private static readonly int[] SecondaryImageCounts = [2, 3, 4];

    public static IReadOnlyList<string> Validate(HomePageContentDocument? document)
    {
        var errors = new List<string>();
        if (document is null)
        {
            errors.Add("content is required");
            return errors;
        }

        if (document.Version != 1) errors.Add("version must be 1");
        ValidateNavigation(document.Navigation, errors);
        ValidateCompany(document.Company, errors);
        ValidateSolutions(document.Solutions, errors);
        ValidateRecruitment(document.Recruitment, errors);
        ValidateHero(document.Hero, errors);
        ValidateIndustries(document.Industries, errors);
        ValidateCommitments(document.Commitments, errors);
        ValidateWarranty(document.Warranty, errors);
        ValidateCta(document.Cta, errors);
        return errors;
    }

    private static void ValidateHero(HomeHeroContent? hero, List<string> errors)
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
        Required(hero.ContactLabel, "hero.contactLabel", errors);
        Required(hero.WarrantyLabel, "hero.warrantyLabel", errors);
        if (hero.DesktopImageSrc is null || hero.DesktopImageSrc.Length > 0)
            ImageUrl(hero.DesktopImageSrc, "hero.desktopImageSrc", errors);
        if (hero.MobileImageSrc is null || hero.MobileImageSrc.Length > 0)
            ImageUrl(hero.MobileImageSrc, "hero.mobileImageSrc", errors);
        FixedCount(hero.Cards, 3, "hero.cards", errors);
        FixedCount(hero.Metrics, 3, "hero.metrics", errors);

        if (hero.Cards is not { Count: 3 }) return;
        var defaults = HomePageContentDefaults.Document.Hero.Cards;
        for (var index = 0; index < hero.Cards.Count; index++)
        {
            var card = hero.Cards[index];
            if (card is null)
            {
                errors.Add($"hero.cards[{index}] is required");
                continue;
            }
            var expected = defaults[index];
            if (card.Kind != expected.Kind || card.Anchor != expected.Anchor || card.Icon != expected.Icon)
                errors.Add($"hero.cards[{index}] system fields are invalid");
            Required(card.ImageAlt, $"hero.cards[{index}].imageAlt", errors);
            Required(card.Eyebrow, $"hero.cards[{index}].eyebrow", errors);
            Required(card.Title, $"hero.cards[{index}].title", errors);
            Required(card.Description, $"hero.cards[{index}].description", errors);
            ImageUrl(card.ImageSrc, $"hero.cards[{index}].imageSrc", errors);
        }

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

    private static void ValidateNavigation(HomeNavigationContent? navigation, List<string> errors)
    {
        if (navigation is null)
        {
            errors.Add("navigation is required");
            return;
        }
        Required(navigation.Heading, "navigation.heading", errors);
        Required(navigation.HomeLabel, "navigation.homeLabel", errors);
        Required(navigation.RecruitmentLabel, "navigation.recruitmentLabel", errors);
    }

    private static void ValidateCompany(HomeCompanyContent? company, List<string> errors)
    {
        if (company is null)
        {
            errors.Add("company is required");
            return;
        }
        Required(company.Eyebrow, "company.eyebrow", errors);
        Required(company.Title, "company.title", errors);
        Required(company.Description, "company.description", errors);
        Required(company.Detail, "company.detail", errors);
        ImageUrl(company.ImageSrc, "company.imageSrc", errors);
        Required(company.ImageAlt, "company.imageAlt", errors);
        FixedCount(company.Highlights, 3, "company.highlights", errors);
        if (company.Highlights is null) return;
        for (var index = 0; index < company.Highlights.Count; index++)
        {
            var highlight = company.Highlights[index];
            var path = $"company.highlights[{index}]";
            if (highlight is null) errors.Add($"{path} is required");
            else
            {
                Required(highlight.Title, $"{path}.title", errors);
                Required(highlight.Description, $"{path}.description", errors);
            }
        }
    }

    private static void ValidateSolutions(HomeSolutionsContent? solutions, List<string> errors)
    {
        if (solutions is null)
        {
            errors.Add("solutions is required");
            return;
        }
        Required(solutions.Heading, "solutions.heading", errors);
        Required(solutions.PreviousLabel, "solutions.previousLabel", errors);
        Required(solutions.NextLabel, "solutions.nextLabel", errors);
        NonEmpty(solutions.Images, "solutions.images", errors);
        if (solutions.Images is null) return;
        for (var index = 0; index < solutions.Images.Count; index++)
        {
            var image = solutions.Images[index];
            var path = $"solutions.images[{index}]";
            if (image is null) errors.Add($"{path} is required");
            else
            {
                ImageUrl(image.ImageSrc, $"{path}.imageSrc", errors);
                Required(image.ImageAlt, $"{path}.imageAlt", errors);
                if (!IndustryKinds.Contains(image.Kind)) errors.Add($"{path}.kind is invalid");
            }
        }
    }

    private static void ValidateRecruitment(HomeRecruitmentContent? recruitment, List<string> errors)
    {
        if (recruitment is null)
        {
            errors.Add("recruitment is required");
            return;
        }
        var values = new Dictionary<string, string?>
        {
            ["badge"] = recruitment.Badge, ["heading"] = recruitment.Heading, ["intro"] = recruitment.Intro,
            ["positionsHeading"] = recruitment.PositionsHeading, ["benefitsHeading"] = recruitment.BenefitsHeading,
            ["sitesHeading"] = recruitment.SitesHeading, ["applyHeading"] = recruitment.ApplyHeading,
            ["applyText"] = recruitment.ApplyText, ["closing"] = recruitment.Closing
        };
        foreach (var value in values) Required(value.Value, $"recruitment.{value.Key}", errors);
        NonEmpty(recruitment.Positions, "recruitment.positions", errors);
        NonEmpty(recruitment.Benefits, "recruitment.benefits", errors);
        NonEmpty(recruitment.Sites, "recruitment.sites", errors);
        NonEmpty(recruitment.Hotlines, "recruitment.hotlines", errors);

        if (recruitment.Positions is not null)
        {
            for (var index = 0; index < recruitment.Positions.Count; index++)
            {
                var position = recruitment.Positions[index];
                var path = $"recruitment.positions[{index}]";
                if (position is null) errors.Add($"{path} is required");
                else
                {
                    if (position.Count <= 0) errors.Add($"{path}.count must be positive");
                    Required(position.Title, $"{path}.title", errors);
                    if (position.Note is null) errors.Add($"{path}.note must be a string");
                }
            }
        }
        if (recruitment.Benefits is not null)
            for (var index = 0; index < recruitment.Benefits.Count; index++)
                Required(recruitment.Benefits[index], $"recruitment.benefits[{index}]", errors);
        if (recruitment.Sites is not null)
        {
            for (var index = 0; index < recruitment.Sites.Count; index++)
            {
                var site = recruitment.Sites[index];
                var path = $"recruitment.sites[{index}]";
                if (site is null) errors.Add($"{path} is required");
                else
                {
                    Required(site.Label, $"{path}.label", errors);
                    Required(site.Address, $"{path}.address", errors);
                }
            }
        }
        if (recruitment.Hotlines is not null)
        {
            for (var index = 0; index < recruitment.Hotlines.Count; index++)
            {
                var hotline = recruitment.Hotlines[index];
                var path = $"recruitment.hotlines[{index}]";
                if (hotline is null) errors.Add($"{path} is required");
                else
                {
                    Required(hotline.Display, $"{path}.display", errors);
                    if (string.IsNullOrWhiteSpace(hotline.Tel) || !PhoneRegex().IsMatch(hotline.Tel.Trim()))
                        errors.Add($"{path}.tel is invalid");
                }
            }
        }
    }

    private static void ValidateIndustries(List<HomeIndustryContent>? industries, List<string> errors)
    {
        FixedCount(industries, 3, "industries", errors);
        if (industries is not { Count: 3 }) return;

        var defaults = HomePageContentDefaults.Document.Industries;
        if (!industries.Select(x => x?.Kind).SequenceEqual(IndustryKinds))
            errors.Add("industries must be ordered bike, machine, appliance");

        for (var index = 0; index < industries.Count; index++)
        {
            var industry = industries[index];
            var path = $"industries[{index}]";
            if (industry is null)
            {
                errors.Add($"{path} is required");
                continue;
            }
            var expected = defaults[index];
            if (industry.Kind != expected.Kind || industry.Theme != expected.Theme ||
                industry.Anchor != expected.Anchor || industry.GalleryLayout != expected.GalleryLayout)
                errors.Add($"{path} system fields are invalid");

            Required(industry.Eyebrow, $"{path}.eyebrow", errors);
            Required(industry.Title, $"{path}.title", errors);
            Required(industry.Slogan, $"{path}.slogan", errors);
            Required(industry.Description, $"{path}.description", errors);
            Required(industry.Detail, $"{path}.detail", errors);
            Required(industry.PriceFrom, $"{path}.priceFrom", errors);
            Required(industry.CtaLabel, $"{path}.ctaLabel", errors);
            FixedCount(industry.Categories, 4, $"{path}.categories", errors);
            FixedCount(industry.Highlights, 4, $"{path}.highlights", errors);

            if (industry.Categories is { Count: 4 })
                for (var item = 0; item < 4; item++) Required(industry.Categories[item], $"{path}.categories[{item}]", errors);

            if (industry.Highlights is { Count: 4 })
            {
                for (var item = 0; item < 4; item++)
                {
                    var highlight = industry.Highlights[item];
                    if (highlight is null)
                    {
                        errors.Add($"{path}.highlights[{item}] is required");
                        continue;
                    }
                    if (highlight.Icon != expected.Highlights[item].Icon)
                        errors.Add($"{path}.highlights[{item}].icon is invalid");
                    Required(highlight.Title, $"{path}.highlights[{item}].title", errors);
                    Required(highlight.Note, $"{path}.highlights[{item}].note", errors);
                }
            }

            if (industry.Service is null) errors.Add($"{path}.service is required");
            else
            {
                if (industry.Service.Icon != expected.Service.Icon) errors.Add($"{path}.service.icon is invalid");
                Required(industry.Service.Title, $"{path}.service.title", errors);
                Required(industry.Service.Note, $"{path}.service.note", errors);
            }

            ValidateGallery(industry.Gallery, expected.Gallery, SecondaryImageCounts[index], path, errors);
        }
    }

    private static void ValidateGallery(HomeGallery? gallery, HomeGallery expected, int secondaryCount, string path, List<string> errors)
    {
        if (gallery is null)
        {
            errors.Add($"{path}.gallery is required");
            return;
        }

        ValidateImage(gallery.Main, expected.Main, $"{path}.gallery.main", errors);
        FixedCount(gallery.Secondary, secondaryCount, $"{path}.gallery.secondary", errors);
        if (gallery.Secondary?.Count != secondaryCount) return;
        for (var index = 0; index < secondaryCount; index++)
            ValidateImage(gallery.Secondary[index], expected.Secondary[index], $"{path}.gallery.secondary[{index}]", errors);
    }

    private static void ValidateImage(HomeImage? image, HomeImage expected, string path, List<string> errors)
    {
        if (image is null)
        {
            errors.Add($"{path} is required");
            return;
        }
        ImageUrl(image.Src, $"{path}.src", errors);
        Required(image.Caption, $"{path}.caption", errors);
        Required(image.Label, $"{path}.label", errors);
        if (image.ObjectPosition != expected.ObjectPosition) errors.Add($"{path}.objectPosition is invalid");
    }

    private static void ValidateCommitments(HomeCommitmentsContent? commitments, List<string> errors)
    {
        if (commitments is null)
        {
            errors.Add("commitments is required");
            return;
        }
        Required(commitments.Title, "commitments.title", errors);
        Required(commitments.Description, "commitments.description", errors);
        FixedCount(commitments.Items, 4, "commitments.items", errors);
        if (commitments.Items is not { Count: 4 }) return;
        var defaults = HomePageContentDefaults.Document.Commitments.Items;
        for (var index = 0; index < 4; index++)
        {
            var item = commitments.Items[index];
            if (item is null)
            {
                errors.Add($"commitments.items[{index}] is required");
                continue;
            }
            if (item.Icon != defaults[index].Icon || item.Accent != defaults[index].Accent)
                errors.Add($"commitments.items[{index}] system fields are invalid");
            Required(item.Title, $"commitments.items[{index}].title", errors);
            Required(item.Description, $"commitments.items[{index}].description", errors);
        }
    }

    private static void ValidateWarranty(HomeWarrantyContent? warranty, List<string> errors)
    {
        if (warranty is null)
        {
            errors.Add("warranty is required");
            return;
        }
        var values = new Dictionary<string, string?>
        {
            ["badge"] = warranty.Badge, ["heading"] = warranty.Heading, ["introduction"] = warranty.Introduction,
            ["warrantyPanelHeading"] = warranty.WarrantyPanelHeading, ["warrantyPanelHelp"] = warranty.WarrantyPanelHelp,
            ["serialLabel"] = warranty.SerialLabel, ["serialHint"] = warranty.SerialHint, ["phoneLabel"] = warranty.PhoneLabel,
            ["searchButtonLabel"] = warranty.SearchButtonLabel, ["productPanelHeading"] = warranty.ProductPanelHeading,
            ["productPanelHelp"] = warranty.ProductPanelHelp, ["productTypeLabel"] = warranty.ProductTypeLabel,
            ["productCodeLabel"] = warranty.ProductCodeLabel, ["productButtonLabel"] = warranty.ProductButtonLabel,
            ["catalogueButtonLabel"] = warranty.CatalogueButtonLabel, ["tipLabel"] = warranty.TipLabel,
            ["browseBikesLabel"] = warranty.BrowseBikesLabel, ["browseMachinesLabel"] = warranty.BrowseMachinesLabel
        };
        foreach (var value in values) Required(value.Value, $"warranty.{value.Key}", errors);
    }

    private static void ValidateCta(HomeCtaContent? cta, List<string> errors)
    {
        if (cta is null)
        {
            errors.Add("cta is required");
            return;
        }
        var values = new Dictionary<string, string?>
        {
            ["heading"] = cta.Heading, ["highlightedHeading"] = cta.HighlightedHeading, ["description"] = cta.Description,
            ["phoneButtonLabel"] = cta.PhoneButtonLabel, ["emailButtonLabel"] = cta.EmailButtonLabel,
            ["workingHoursLabel"] = cta.WorkingHoursLabel, ["workingHoursValue"] = cta.WorkingHoursValue,
            ["addressLabel"] = cta.AddressLabel, ["addressValue"] = cta.AddressValue,
            ["supportLabel"] = cta.SupportLabel, ["supportValue"] = cta.SupportValue
        };
        foreach (var value in values) Required(value.Value, $"cta.{value.Key}", errors);

        if (string.IsNullOrWhiteSpace(cta.Phone) || !PhoneRegex().IsMatch(cta.Phone.Trim())) errors.Add("cta.phone is invalid");
        if (!IsEmail(cta.Email)) errors.Add("cta.email is invalid");
    }

    private static void Required(string? value, string path, List<string> errors)
    {
        if (string.IsNullOrWhiteSpace(value)) errors.Add($"{path} is required");
    }

    private static void FixedCount<T>(ICollection<T>? values, int count, string path, List<string> errors)
    {
        if (values?.Count != count) errors.Add($"{path} must contain exactly {count} items");
    }

    private static void NonEmpty<T>(ICollection<T>? values, string path, List<string> errors)
    {
        if (values is null || values.Count == 0) errors.Add($"{path} must contain at least 1 item");
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
