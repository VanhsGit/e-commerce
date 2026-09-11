using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
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
            EntityType entityType,
            string entityId,
            bool includeInactive,
            CancellationToken cancellationToken = default)
        {
            var query = _storeContext.EntityImages.AsNoTracking()
                .Where(x => x.EntityType == entityType && x.EntityId == entityId);
            if (!includeInactive) query = query.Where(x => x.IsUsed);
            return await query.OrderBy(x => x.SortOrder).ThenBy(x => x.Id).ToListAsync(cancellationToken);
        }

        public async Task<EntityImage?> UploadAsync(
            EntityImageUpload upload,
            CancellationToken cancellationToken = default)
        {
            if (!await ParentExistsAsync(upload.EntityType, upload.EntityId, cancellationToken)) return null;
            if (string.IsNullOrWhiteSpace(upload.ImageType))
                throw new ArgumentException("Image type is required.", nameof(upload));

            var stored = await _storage.SaveAsync(
                upload.Content,
                upload.OriginalFileName,
                upload.ContentType,
                upload.EntityType,
                cancellationToken);

            var image = new EntityImage
            {
                EntityType = upload.EntityType,
                EntityId = upload.EntityId,
                ImageType = upload.ImageType.Trim(),
                RelativePath = stored.RelativePath,
                OriginalFileName = System.IO.Path.GetFileName(upload.OriginalFileName),
                MimeType = stored.MimeType,
                FileSize = stored.FileSize,
                SortOrder = upload.SortOrder
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

        public async Task<EntityImage?> UpdateAsync(
            int id,
            string imageType,
            int sortOrder,
            bool isUsed,
            CancellationToken cancellationToken = default)
        {
            var image = await _storeContext.EntityImages.FindAsync(new object[] { id }, cancellationToken);
            if (image == null) return null;
            if (string.IsNullOrWhiteSpace(imageType)) throw new ArgumentException("Image type is required.");
            image.ImageType = imageType.Trim();
            image.SortOrder = sortOrder;
            image.IsUsed = isUsed;
            await _storeContext.SaveChangesAsync(cancellationToken);
            return image;
        }

        public async Task<bool> DeleteAsync(int id, CancellationToken cancellationToken = default)
        {
            var image = await _storeContext.EntityImages.FindAsync(new object[] { id }, cancellationToken);
            if (image == null) return false;
            await _storage.DeleteAsync(image.RelativePath, cancellationToken);
            _storeContext.EntityImages.Remove(image);
            await _storeContext.SaveChangesAsync(cancellationToken);
            return true;
        }

        public async Task<bool> ParentExistsAsync(
            EntityType entityType,
            string entityId,
            CancellationToken cancellationToken = default)
        {
            if (entityType == EntityType.User)
                return await _identityContext.Users.AnyAsync(x => x.Id == entityId, cancellationToken);

            if (!int.TryParse(entityId, out var id)) return false;

            return entityType switch
            {
                EntityType.Company => await _storeContext.Companies.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.Brand => await _storeContext.Brands.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.ElectricBikeProduct => await _storeContext.ElectricBikeProducts.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.AgriculturalMachineProduct => await _storeContext.AgriculturalMachineProducts.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.Product => await _storeContext.Products.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.ProductBrand => await _storeContext.ProductBrands.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.ProductType => await _storeContext.ProductTypes.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.Order => await _storeContext.Orders.AnyAsync(x => x.Id == id, cancellationToken),
                EntityType.DeliveryMethod => await _storeContext.DeliveryMethods.AnyAsync(x => x.Id == id, cancellationToken),
                _ => false
            };
        }
    }
}
