using System.Text.Json;
using Core.Media;

namespace Core.PageContent;

public static class CategoryPageContentImageReferences
{
    public static bool Contains(string? contentJson, string? publicUrl)
    {
        if (string.IsNullOrWhiteSpace(contentJson) || string.IsNullOrWhiteSpace(publicUrl)) return false;
        var expected = EntityImageUrl.NormalizeComparablePath(publicUrl);
        if (string.IsNullOrEmpty(expected)) return false;

        try
        {
            var document = JsonSerializer.Deserialize<CategoryPageContentDocument>(contentJson, CategoryPageContentDefaults.JsonOptions);
            if (document is null) return false;
            return EnumerateImages(document).Any(value =>
                string.Equals(EntityImageUrl.NormalizeComparablePath(value), expected, StringComparison.OrdinalIgnoreCase));
        }
        catch (JsonException)
        {
            // Fail closed: JSON hỏng mà vẫn chứa đường dẫn ảnh thì coi như đang dùng.
            return contentJson.Contains(publicUrl, StringComparison.OrdinalIgnoreCase)
                || contentJson.Contains(expected, StringComparison.OrdinalIgnoreCase);
        }
    }

    private static IEnumerable<string> EnumerateImages(CategoryPageContentDocument document)
    {
        if (document.Hero is not null) yield return document.Hero.ImageSrc;
        foreach (var image in document.Showcase?.Images ?? [])
            if (image is not null) yield return image.Src;
    }
}
