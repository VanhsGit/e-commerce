using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;
using Core.HomeContent;
using Core.PageContent;
using Core.Interfaces;
using Core.Media;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class EntityImageService : IEntityImageService
    {
        private readonly StoreContext _storeContext;
        private readonly AppIdentityDbContext _identityContext;
        private readonly IEntityImageStorage _storage;

        public EntityImageService(
            StoreContext storeContext,
            AppIdentityDbContext identityContext,
            IEntityImageStorage storage)
        {
            _storeContext = storeContext;
            _identityContext = identityContext;
            _storage = storage;
        }

        public async Task<IReadOnlyList<EntityImage>> ListAsync(
            string? search,
            bool includeInactive,
            CancellationToken cancellationToken = default)
        {
            var query = _storeContext.EntityImages.AsNoTracking();
            if (!includeInactive) query = query.Where(x => x.IsUsed);

            if (!string.IsNullOrWhiteSpace(search))
            {
                var value = search.Trim().ToLower();
                query = query.Where(x =>
                    x.OriginalFileName.ToLower().Contains(value) ||
                    x.MimeType.ToLower().Contains(value));
            }

            return await query
                .OrderByDescending(x => x.CreatedAt)
                .ThenBy(x => x.OriginalFileName)
                .ToListAsync(cancellationToken);
        }

        public async Task<EntityImage> UploadAsync(
            EntityImageUpload upload,
            CancellationToken cancellationToken = default)
        {
            var stored = await _storage.SaveAsync(
                upload.Content,
                upload.OriginalFileName,
                upload.ContentType,
                cancellationToken);

            var image = new EntityImage
            {
                RelativePath = stored.RelativePath,
                OriginalFileName = System.IO.Path.GetFileName(upload.OriginalFileName),
                MimeType = stored.MimeType,
                FileSize = stored.FileSize
            };

            try
            {
                _storeContext.EntityImages.Add(image);
                if (await _storeContext.SaveChangesAsync(cancellationToken) <= 0)
                    throw new InvalidOperationException("Could not save image metadata.");
                return image;
            }
            catch
            {
                await _storage.DeleteAsync(stored.RelativePath, CancellationToken.None);
                throw;
            }
        }

        public async Task<DeleteEntityImageResult> DeleteAsync(
            string id,
            CancellationToken cancellationToken = default)
        {
            var image = await _storeContext.EntityImages.FindAsync(new object[] { id }, cancellationToken);
            if (image == null) return DeleteEntityImageResult.NotFound;

            if (await IsReferencedAsync(image, cancellationToken)) return DeleteEntityImageResult.InUse;

            await _storage.DeleteAsync(image.RelativePath, cancellationToken);
            _storeContext.EntityImages.Remove(image);
            await _storeContext.SaveChangesAsync(cancellationToken);
            return DeleteEntityImageResult.Deleted;
        }

        public async Task<bool> IsReferencedAsync(EntityImage image, CancellationToken cancellationToken = default)
        {

            var publicUrl = _storage.GetPublicUrl(image.RelativePath);
            var homeContentDocuments = await _storeContext.HomePageContents
                .AsNoTracking()
                .Select(x => x.ContentJson)
                .ToListAsync(cancellationToken);
            var categoryPageDocuments = await _storeContext.CategoryPageContents
                .AsNoTracking()
                .Select(x => x.ContentJson)
                .ToListAsync(cancellationToken);
            var products = new List<BaseEntity>();
            products.AddRange(await _storeContext.ElectricBikeProducts.AsNoTracking().ToListAsync(cancellationToken));
            products.AddRange(await _storeContext.AgriculturalMachineProducts.AsNoTracking().ToListAsync(cancellationToken));
            products.AddRange(await _storeContext.ElectricalApplianceProducts.AsNoTracking().ToListAsync(cancellationToken));
            return products.Any(p => ProductImageReferences.GetUrls(p).Any(url => ProductImageReferences.Matches(url, publicUrl)))
                || (await _storeContext.Companies.AsNoTracking().Select(x => x.LogoUrl).ToListAsync(cancellationToken)).Any(url => ProductImageReferences.Matches(url, publicUrl))
                || (await _storeContext.Brands.AsNoTracking().Select(x => x.LogoUrl).ToListAsync(cancellationToken)).Any(url => ProductImageReferences.Matches(url, publicUrl))
                || (await _storeContext.ProductCategories.AsNoTracking().Select(x => x.ImageUrl).ToListAsync(cancellationToken)).Any(url => ProductImageReferences.Matches(url, publicUrl))
                || homeContentDocuments.Any(json => HomeContentImageReferences.Contains(json, publicUrl))
                || categoryPageDocuments.Any(json => CategoryPageContentImageReferences.Contains(json, publicUrl))
                || (await _identityContext.Users.AsNoTracking().Select(x => x.AvatarUrl).ToListAsync(cancellationToken)).Any(url => ProductImageReferences.Matches(url, publicUrl));

        }
    }
}
