using System.Net.Mail;
using System.Text.RegularExpressions;
using Core.PageContent;

namespace API.Helpers;

public static partial class SiteSettingsValidator
{
    public static IReadOnlyList<string> Validate(SiteSettingsDocument? document)
    {
        var errors = new List<string>();
        if (document is null)
        {
            errors.Add("content is required");
            return errors;
        }

        if (document.Version != 1) errors.Add("version must be 1");

        if (document.Brand is null) errors.Add("brand is required");
        else
        {
            Required(document.Brand.Name, "brand.name", errors);
            Required(document.Brand.Tagline, "brand.tagline", errors);
        }

        if (document.Contact is null) errors.Add("contact is required");
        else
        {
            var contact = document.Contact;
            Required(contact.PhoneLabel, "contact.phoneLabel", errors);
            Required(contact.PhoneDisplay, "contact.phoneDisplay", errors);
            Required(contact.Address, "contact.address", errors);
            Required(contact.WorkingHours, "contact.workingHours", errors);
            if (!IsEmail(contact.Email)) errors.Add("contact.email is invalid");
            if (string.IsNullOrWhiteSpace(contact.Phone) || !PhoneRegex().IsMatch(contact.Phone.Trim()))
                errors.Add("contact.phone is invalid");
            OptionalUrl(contact.ZaloUrl, "contact.zaloUrl", errors);
            OptionalUrl(contact.FacebookUrl, "contact.facebookUrl", errors);
        }

        if (document.Footer is null) errors.Add("footer is required");
        else
        {
            Required(document.Footer.Description, "footer.description", errors);
            Required(document.Footer.NavHeading, "footer.navHeading", errors);
            Required(document.Footer.ContactHeading, "footer.contactHeading", errors);
            Required(document.Footer.Copyright, "footer.copyright", errors);
        }

        return errors;
    }

    private static void Required(string? value, string path, List<string> errors)
    {
        if (string.IsNullOrWhiteSpace(value)) errors.Add($"{path} is required");
    }

    private static void OptionalUrl(string? value, string path, List<string> errors)
    {
        if (string.IsNullOrWhiteSpace(value)) return;
        if (!Uri.TryCreate(value.Trim(), UriKind.Absolute, out var uri) || (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
            errors.Add($"{path} is invalid");
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
