using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public record EntityImageUpload(
        string OriginalFileName,
        string ContentType,
        long FileSize,
        Stream Content);

    public enum DeleteEntityImageResult
    {
        Deleted,
        NotFound,
        InUse
    }

    public interface IEntityImageService
    {
        Task<IReadOnlyList<EntityImage>> ListAsync(
            string? search,
            bool includeInactive,
            CancellationToken cancellationToken = default);

        Task<EntityImage> UploadAsync(
            EntityImageUpload upload,
            CancellationToken cancellationToken = default);

        Task<DeleteEntityImageResult> DeleteAsync(
            string id,
            CancellationToken cancellationToken = default);
    }
}
