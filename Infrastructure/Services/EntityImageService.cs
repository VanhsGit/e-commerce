using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
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

            var publicUrl = _storage.GetPublicUrl(image.RelativePath);
            var isUsed = await _storeContext.Companies.AnyAsync(x => x.LogoUrl == publicUrl, cancellationToken)
                || await _storeContext.Brands.AnyAsync(x => x.LogoUrl == publicUrl, cancellationToken)
                || await _storeContext.ElectricBikeProducts.AnyAsync(x => x.PictureUrl == publicUrl, cancellationToken)
                || await _storeContext.AgriculturalMachineProducts.AnyAsync(x => x.PictureUrl == publicUrl, cancellationToken)
                || await _storeContext.ElectricalApplianceProducts.AnyAsync(x => x.PictureUrl == publicUrl, cancellationToken)
                || await _identityContext.Users.AnyAsync(x => x.AvatarUrl == publicUrl, cancellationToken);

            if (isUsed) return DeleteEntityImageResult.InUse;

            await _storage.DeleteAsync(image.RelativePath, cancellationToken);
            _storeContext.EntityImages.Remove(image);
            await _storeContext.SaveChangesAsync(cancellationToken);
            return DeleteEntityImageResult.Deleted;
        }
    }
}
