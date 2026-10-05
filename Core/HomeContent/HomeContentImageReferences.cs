using System.Text.Json;
using Core.Media;

namespace Core.HomeContent;

public static class HomeContentImageReferences
{
    public static bool Contains(string? contentJson, string? publicUrl)
    {
        if (string.IsNullOrWhiteSpace(contentJson) || string.IsNullOrWhiteSpace(publicUrl)) return false;
        var expected = NormalizePath(publicUrl);
        if (string.IsNullOrEmpty(expected)) return false;

        try
        {
            var document = JsonSerializer.Deserialize<HomePageContentDocument>(contentJson, HomePageContentDefaults.JsonOptions);
            if (document is null) return false;
            return EnumerateImages(document).Any(value =>
                string.Equals(NormalizePath(value), expected, StringComparison.OrdinalIgnoreCase));
        }
        catch (JsonException)
        {
            // Fail closed only for the requested image when legacy/malformed JSON still contains its path.
            return contentJson.Contains(publicUrl, StringComparison.OrdinalIgnoreCase)
                || contentJson.Contains(expected, StringComparison.OrdinalIgnoreCase);
        }
    }

    private static IEnumerable<string> EnumerateImages(HomePageContentDocument document)
    {
        if (document.Hero is not null)
        {
            yield return document.Hero.DesktopImageSrc;
            yield return document.Hero.MobileImageSrc;
        }
        if (document.Company is not null) yield return document.Company.ImageSrc;
        foreach (var image in document.Solutions?.Images ?? [])
            if (image is not null) yield return image.ImageSrc;
        foreach (var card in document.Hero?.Cards ?? [])
            if (card is not null) yield return card.ImageSrc;
        foreach (var industry in document.Industries ?? [])
        {
            if (industry is null) continue;
            if (industry.Gallery?.Main is not null) yield return industry.Gallery.Main.Src;
            foreach (var image in industry.Gallery?.Secondary ?? [])
                if (image is not null) yield return image.Src;
        }
    }

    private static string NormalizePath(string value)
    {
        return Uri.UnescapeDataString(EntityImageUrl.NormalizeComparablePath(value));
    }
}
