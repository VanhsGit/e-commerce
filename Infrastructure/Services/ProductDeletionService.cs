using Core.Entities;
using Core.Interfaces;
using Core.Media;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Services;

public sealed class ProductDeletionService(StoreContext context, IEntityImageService images, IEntityImageStorage storage, ILogger<ProductDeletionService> logger) : IProductDeletionService
{
    public async Task<bool> DeleteAsync<T>(string id, CancellationToken cancellationToken = default) where T : BaseEntity
    {
        var product = await context.Set<T>().FindAsync([id], cancellationToken);
        if (product == null) return false;

        var urls = ProductImageReferences.GetUrls(product).ToList();
        // Only delete managed files recorded for this product; never follow arbitrary URLs.
        var catalog = await context.EntityImages.AsNoTracking().ToListAsync(cancellationToken);
        var owned = catalog.Where(image => urls.Any(url => ProductImageReferences.Matches(url, storage.GetPublicUrl(image.RelativePath)))).ToList();

        await using var transaction = context.Database.IsRelational()
            ? await context.Database.BeginTransactionAsync(cancellationToken) : null;
        var staged = new List<StagedImageDeletion>();
        try
        {
            context.Remove(product);
            await context.SaveChangesAsync(cancellationToken);

            foreach (var image in owned)
            {
                if (await images.IsReferencedAsync(image, cancellationToken)) continue;
                staged.Add(await storage.StageDeleteAsync(image.RelativePath, cancellationToken));
                var tracked = await context.EntityImages.FindAsync([image.Id], cancellationToken);
                if (tracked != null) context.EntityImages.Remove(tracked);
            }
            await context.SaveChangesAsync(cancellationToken);
            if (transaction != null) await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            foreach (var deletion in staged.AsEnumerable().Reverse())
            {
                try { await storage.RestoreDeleteAsync(deletion, CancellationToken.None); }
                catch (Exception exception) { logger.LogError(exception, "Could not restore staged image {StagedPath} to {RelativePath}", deletion.StagedPath, deletion.RelativePath); }
            }
            throw;
        }

        foreach (var deletion in staged)
        {
            // Database deletion is committed. A failed purge must never restore a deleted product.
            try { await storage.CompleteDeleteAsync(deletion, CancellationToken.None); }
            catch (IOException exception) { logger.LogError(exception, "Could not purge staged image {StagedPath}", deletion.StagedPath); }
            catch (UnauthorizedAccessException exception) { logger.LogError(exception, "Could not purge staged image {StagedPath}", deletion.StagedPath); }
        }
        return true;
    }
}
