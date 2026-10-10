using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public record StoredImageFile(string RelativePath, string MimeType, long FileSize);
    public record StagedImageDeletion(string RelativePath, string? StagedPath,
        string? ThumbnailRelativePath = null, string? ThumbnailStagedPath = null);

    public interface IEntityImageStorage
    {
        Task<StoredImageFile> SaveAsync(
            Stream content,
            string originalFileName,
            string contentType,
            CancellationToken cancellationToken = default);

        Task DeleteAsync(string relativePath, CancellationToken cancellationToken = default);
        Task<StagedImageDeletion> StageDeleteAsync(string relativePath, CancellationToken cancellationToken = default);
        Task RestoreDeleteAsync(StagedImageDeletion deletion, CancellationToken cancellationToken = default);
        Task CompleteDeleteAsync(StagedImageDeletion deletion, CancellationToken cancellationToken = default);
        string GetPublicUrl(string relativePath);
    }
}
