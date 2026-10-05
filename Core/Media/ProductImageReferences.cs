using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Core.Entities;

namespace Core.Media;

public static class ProductImageReferences
{
    public const string SeedImagesMetadataKey = "seedImageUrls";

    public static IEnumerable<string> GetUrls(BaseEntity product) => product switch
    {
        ElectricBikeProduct p => GetUrls(p.PictureUrl, p.Colors, p.Metadata),
        AgriculturalMachineProduct p => GetUrls(p.PictureUrl, p.Colors, p.Metadata),
        ElectricalApplianceProduct p => GetUrls(p.PictureUrl, p.Colors, p.Metadata),
        _ => []
    };

    private static IEnumerable<string> GetUrls(string picture, List<ProductColorOption> colors, Dictionary<string, string> metadata)
    {
        var urls = new List<string> { picture };
        urls.AddRange(colors.Select(c => c.ImageUrl));
        if (metadata.TryGetValue(SeedImagesMetadataKey, out var json))
        {
            try { urls.AddRange(JsonSerializer.Deserialize<List<string>>(json) ?? []); }
            catch (JsonException) { /* A legacy/custom metadata value must not prevent deletion. */ }
        }
        return urls.Where(url => !string.IsNullOrWhiteSpace(url));
    }

    public static bool Matches(string? first, string? second) =>
        !string.IsNullOrWhiteSpace(first) && !string.IsNullOrWhiteSpace(second) &&
        (System.OperatingSystem.IsWindows() ? System.StringComparer.OrdinalIgnoreCase : System.StringComparer.Ordinal).Equals(
            System.Uri.UnescapeDataString(EntityImageUrl.NormalizeComparablePath(first)),
            System.Uri.UnescapeDataString(EntityImageUrl.NormalizeComparablePath(second)));
}
