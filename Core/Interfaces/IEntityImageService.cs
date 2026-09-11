using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public record EntityImageUpload(
        EntityType EntityType,
        string EntityId,
        string ImageType,
        int SortOrder,
        string OriginalFileName,
        string ContentType,
        long FileSize,
        Stream Content);

    public interface IEntityImageService
    {
        Task<IReadOnlyList<EntityImage>> ListAsync(
            EntityType entityType,
            string entityId,
            bool includeInactive,
            CancellationToken cancellationToken = default);

        Task<EntityImage?> UploadAsync(
            EntityImageUpload upload,
            CancellationToken cancellationToken = default);

        Task<EntityImage?> UpdateAsync(
            int id,
            string imageType,
            int sortOrder,
            bool isUsed,
            CancellationToken cancellationToken = default);

        Task<bool> DeleteAsync(int id, CancellationToken cancellationToken = default);
        Task<bool> ParentExistsAsync(EntityType entityType, string entityId, CancellationToken cancellationToken = default);
    }
}
