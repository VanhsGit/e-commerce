using System.Text.Encodings.Web;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.WebUtilities;

namespace API.Middleware;

public sealed class ProductPreviewMiddleware
{
    private const string StartMarker = "<!-- SEO_METADATA_START -->";
    private const string EndMarker = "<!-- SEO_METADATA_END -->";

    private readonly RequestDelegate _next;
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly IWebHostEnvironment _environment;

    public ProductPreviewMiddleware(
        RequestDelegate next,
        IServiceScopeFactory scopeFactory,
        IWebHostEnvironment environment)
    {
        _next = next;
        _scopeFactory = scopeFactory;
        _environment = environment;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (!HttpMethods.IsGet(context.Request.Method) ||
            !TryGetProductRoute(context.Request.Path, out var kind, out var id))
        {
            await _next(context);
            return;
        }

        var product = await GetProductPreviewAsync(kind, id);
        var indexPath = Path.Combine(_environment.WebRootPath ?? Path.Combine(_environment.ContentRootPath, "wwwroot"), "index.html");
        if (product is null || !File.Exists(indexPath))
        {
            await _next(context);
            return;
        }

        var html = await File.ReadAllTextAsync(indexPath);
        var start = html.IndexOf(StartMarker, StringComparison.Ordinal);
        var end = html.IndexOf(EndMarker, start + StartMarker.Length, StringComparison.Ordinal);
        if (start < 0 || end < 0)
        {
            await _next(context);
            return;
        }

        var request = context.Request;
        var pageUrl = UriHelper.BuildAbsolute(request.Scheme, request.Host, request.PathBase, request.Path);
        var imageUrl = ResolveImageUrl(product.ImageUrl, request);
        var metadata = BuildMetadata(product, pageUrl, imageUrl);
        html = html[..start] + metadata + html[(end + EndMarker.Length)..];

        context.Response.ContentType = "text/html; charset=utf-8";
        context.Response.Headers.CacheControl = "no-cache, no-store, must-revalidate";
        await context.Response.WriteAsync(html);
    }

    private async Task<ProductPreview?> GetProductPreviewAsync(string kind, string id)
    {
        using var scope = _scopeFactory.CreateScope();
        var unitOfWork = scope.ServiceProvider.GetRequiredService<IUnitOfWork>();

        return kind switch
        {
            "bike" => await GetBikePreviewAsync(unitOfWork, id),
            "machine" => await GetMachinePreviewAsync(unitOfWork, id),
            "appliance" => await GetAppliancePreviewAsync(unitOfWork, id),
            _ => null
        };
    }

    private static async Task<ProductPreview?> GetBikePreviewAsync(IUnitOfWork unitOfWork, string id)
    {
        var product = await unitOfWork.Repository<ElectricBikeProduct>()
            .GetEntityWithSpec(new ElectricBikeProductsWithSpec(id, includeInactive: false));
        return product is null ? null : ToPreview(product.Name, product.Brand, product.Description, FirstProductImage(product.Colors));
    }

    private static async Task<ProductPreview?> GetMachinePreviewAsync(IUnitOfWork unitOfWork, string id)
    {
        var product = await unitOfWork.Repository<AgriculturalMachineProduct>()
            .GetEntityWithSpec(new AgriculturalMachineProductsWithSpec(id, includeInactive: false));
        return product is null ? null : ToPreview(product.Name, product.Brand, product.Description, FirstProductImage(product.Colors));
    }

    private static async Task<ProductPreview?> GetAppliancePreviewAsync(IUnitOfWork unitOfWork, string id)
    {
        var product = await unitOfWork.Repository<ElectricalApplianceProduct>()
            .GetEntityWithSpec(new ElectricalApplianceProductsWithSpec(id, includeInactive: false));
        return product is null ? null : ToPreview(product.Name, product.Brand, product.Description, FirstProductImage(product.Colors));
    }

    private static ProductPreview ToPreview(string name, string brand, string description, string? imageUrl)
    {
        var cleanDescription = string.Join(' ', (description ?? string.Empty).Split((char[]?)null, StringSplitOptions.RemoveEmptyEntries));
        if (cleanDescription.Length > 300)
        {
            cleanDescription = cleanDescription[..297].TrimEnd() + "...";
        }

        return new ProductPreview(
            string.IsNullOrWhiteSpace(brand) ? $"{name} | EcoTech" : $"{name} - {brand} | EcoTech",
            string.IsNullOrWhiteSpace(cleanDescription) ? $"{name} - Sản phẩm chính hãng tại EcoTech." : cleanDescription,
            imageUrl);
    }

    private static string? FirstProductImage(IEnumerable<ProductColorOption>? colors)
    {
        if (colors is null) return null;

        foreach (var color in colors)
        {
            if (color.ImageUrls is { Count: > 0 })
            {
                var image = color.ImageUrls.FirstOrDefault(url => !string.IsNullOrWhiteSpace(url));
                if (!string.IsNullOrWhiteSpace(image)) return image;
            }
            else if (!string.IsNullOrWhiteSpace(color.ImageUrl))
            {
                return color.ImageUrl;
            }
        }

        return null;
    }

    private static string BuildMetadata(ProductPreview product, string pageUrl, string? imageUrl)
    {
        var encoder = HtmlEncoder.Default;
        var title = encoder.Encode(product.Title);
        var description = encoder.Encode(product.Description);
        var url = encoder.Encode(pageUrl);
        var imageTags = imageUrl is null
            ? string.Empty
            : $"""
              <meta property="og:image" content="{encoder.Encode(imageUrl)}" />
              <meta name="twitter:image" content="{encoder.Encode(imageUrl)}" />
              """;

        return $"""
            <title>{title}</title>
            <meta name="description" content="{description}" />
            <meta property="og:type" content="product" />
            <meta property="og:site_name" content="EcoTech" />
            <meta property="og:title" content="{title}" />
            <meta property="og:description" content="{description}" />
            <meta property="og:url" content="{url}" />
            {imageTags}
            <meta name="twitter:card" content="{(imageUrl is null ? "summary" : "summary_large_image")}" />
            <meta name="twitter:title" content="{title}" />
            <meta name="twitter:description" content="{description}" />
            <link id="canonical-url" rel="canonical" href="{url}" />
            """;
    }

    private static string? ResolveImageUrl(string? imageUrl, HttpRequest request)
    {
        if (string.IsNullOrWhiteSpace(imageUrl)) return null;
        if (Uri.TryCreate(imageUrl, UriKind.Absolute, out var absolute))
        {
            return absolute.Scheme is "http" or "https" ? absolute.AbsoluteUri : null;
        }

        var origin = UriHelper.BuildAbsolute(request.Scheme, request.Host, request.PathBase, "/");
        return Uri.TryCreate(new Uri(origin), imageUrl, out var resolved)
            ? resolved.AbsoluteUri
            : null;
    }

    private static bool TryGetProductRoute(PathString path, out string kind, out string id)
    {
        var segments = path.Value?.Split('/', StringSplitOptions.RemoveEmptyEntries) ?? [];
        if (segments.Length == 3 && segments[0].Equals("product-detail", StringComparison.OrdinalIgnoreCase))
        {
            kind = segments[1].ToLowerInvariant();
            id = segments[2];
            return kind is "bike" or "machine" or "appliance";
        }

        kind = string.Empty;
        id = string.Empty;
        return false;
    }

    private sealed record ProductPreview(string Title, string Description, string? ImageUrl);
}
