using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public record StoredImageFile(string RelativePath, string MimeType, long FileSize);

    public interface IEntityImageStorage
    {
        Task<StoredImageFile> SaveAsync(
            Stream content,
            string originalFileName,
            string contentType,
            CancellationToken cancellationToken = default);

        Task DeleteAsync(string relativePath, CancellationToken cancellationToken = default);
        string GetPublicUrl(string relativePath);
    }
}
