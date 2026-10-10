using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Media;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

namespace Infrastructure.Services
{
    public class LocalEntityImageStorage : IEntityImageStorage
    {
        private static readonly IReadOnlyDictionary<string, string> MimeTypes =
            new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                [".jpg"] = "image/jpeg",
                [".jpeg"] = "image/jpeg",
                [".png"] = "image/png",
                [".webp"] = "image/webp",
                [".gif"] = "image/gif"
            };

        private readonly string _rootPath;
        private readonly MediaStorageOptions _options;

        public LocalEntityImageStorage(IOptions<MediaStorageOptions> options, IHostEnvironment environment)
        {
            _options = options.Value;
            if (_options.MaxDimension <= 0 || _options.ThumbnailMaxDimension <= 0 ||
                _options.ThumbnailMaxDimension > _options.MaxDimension || _options.WebpQuality is < 1 or > 100 ||
                _options.MaxPixelCount <= 0 || _options.MaxAnimationFrames <= 0 || _options.MaxAnimationPixelCount <= 0)
                throw new InvalidOperationException("Invalid media optimization settings.");
            _rootPath = Path.GetFullPath(Path.IsPathRooted(_options.RootPath)
                ? _options.RootPath
                : Path.Combine(environment.ContentRootPath, _options.RootPath));
        }

        public async Task<StoredImageFile> SaveAsync(
            Stream content,
            string originalFileName,
            string contentType,
            CancellationToken cancellationToken = default)
        {
            var extension = Path.GetExtension(Path.GetFileName(originalFileName)).ToLowerInvariant();
            if (!MimeTypes.TryGetValue(extension, out var expectedMimeType) ||
                !_options.AllowedContentTypes.Contains(contentType) ||
                !string.Equals(expectedMimeType, contentType, StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidDataException("Unsupported image type or mismatched file extension.");
            }

            using var buffered = await BufferAsync(content, cancellationToken);
            var optimized = LocalImageOptimizer.Optimize(buffered.ToArray(), contentType, _options);
            if (optimized.Content.LongLength > _options.MaxFileSize)
                throw new InvalidDataException("The optimized image exceeds the upload size limit.");

            var now = DateTime.UtcNow;
            var relativePath = Path.Combine(
                "library",
                now.ToString("yyyy"),
                now.ToString("MM"),
                $"{Guid.NewGuid():N}", $"image{optimized.Extension}").Replace('\\', '/');
            var fullPath = EnsureUnderRoot(relativePath);
            var thumbnailPath = EnsureUnderRoot(EntityImageUrl.ThumbnailUrl(relativePath));
            Directory.CreateDirectory(Path.GetDirectoryName(fullPath)!);
            var written = new List<string>();
            try
            {
                await WriteAsync(fullPath, optimized.Content);
                await WriteAsync(thumbnailPath, optimized.Thumbnail);
                return new StoredImageFile(relativePath, optimized.MimeType, optimized.Content.LongLength);
            }
            catch
            {
                foreach (var path in written) File.Delete(path);
                throw;
            }

            async Task WriteAsync(string path, byte[] bytes)
            {
                await using var output = new FileStream(path, FileMode.CreateNew, FileAccess.Write, FileShare.None, 81920, true);
                written.Add(path);
                await output.WriteAsync(bytes, cancellationToken);
            }
        }

        public async Task DeleteAsync(string relativePath, CancellationToken cancellationToken = default)
        {
            var staged = await StageDeleteAsync(relativePath, cancellationToken);
            await CompleteDeleteAsync(staged, CancellationToken.None);
        }

        public string GetPublicUrl(string relativePath)
        {
            var safeRelativePath = EnsureUnderRoot(relativePath)
                .Substring(_rootPath.Length)
                .TrimStart(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                .Replace('\\', '/');
            return $"{_options.RequestPath.TrimEnd('/')}/{safeRelativePath}";
        }

        public Task<StagedImageDeletion> StageDeleteAsync(string relativePath, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            var source = EnsureUnderRoot(relativePath);
            var thumbnailRelative = EntityImageUrl.ThumbnailUrl(relativePath.Replace('\\', '/'));
            var thumbnailSource = EnsureUnderRoot(thumbnailRelative);
            var stagedPath = File.Exists(source) ? $".pending-deletions/{Guid.NewGuid():N}.pending" : null;
            var thumbnailStaged = thumbnailSource != source && File.Exists(thumbnailSource)
                ? $".pending-deletions/{Guid.NewGuid():N}.pending" : null;
            var moved = new List<(string Source, string Destination)>();
            try
            {
                Move(source, stagedPath);
                Move(thumbnailSource, thumbnailStaged);
            }
            catch
            {
                foreach (var pair in moved.AsEnumerable().Reverse()) File.Move(pair.Destination, pair.Source);
                throw;
            }
            return Task.FromResult(new StagedImageDeletion(relativePath, stagedPath, thumbnailRelative, thumbnailStaged));

            void Move(string from, string? staged)
            {
                if (staged == null) return;
                var destination = EnsureUnderRoot(staged);
                Directory.CreateDirectory(Path.GetDirectoryName(destination)!);
                File.Move(from, destination);
                moved.Add((from, destination));
            }
        }

        public Task RestoreDeleteAsync(StagedImageDeletion deletion, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            Restore(deletion.StagedPath, deletion.RelativePath);
            if (deletion.ThumbnailRelativePath != null) Restore(deletion.ThumbnailStagedPath, deletion.ThumbnailRelativePath);
            return Task.CompletedTask;

            void Restore(string? staged, string original)
            {
                if (staged == null) return;
                var source = EnsureUnderRoot(staged);
                var destination = EnsureUnderRoot(original);
                if (!File.Exists(source)) return;
                Directory.CreateDirectory(Path.GetDirectoryName(destination)!);
                File.Move(source, destination);
            }
        }

        public Task CompleteDeleteAsync(StagedImageDeletion deletion, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (deletion.StagedPath != null) File.Delete(EnsureUnderRoot(deletion.StagedPath));
            if (deletion.ThumbnailStagedPath != null) File.Delete(EnsureUnderRoot(deletion.ThumbnailStagedPath));
            return Task.CompletedTask;
        }

        private string EnsureUnderRoot(string relativePath)
        {
            if (string.IsNullOrWhiteSpace(relativePath) || Path.IsPathRooted(relativePath))
                throw new InvalidOperationException("Media path must be relative.");

            var fullPath = Path.GetFullPath(Path.Combine(_rootPath, relativePath));
            var rootWithSeparator = _rootPath.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                + Path.DirectorySeparatorChar;
            if (!fullPath.StartsWith(rootWithSeparator, StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("Media path is outside the configured storage root.");

            return fullPath;
        }

        private async Task<MemoryStream> BufferAsync(
            Stream content,
            CancellationToken cancellationToken)
        {
            var buffer = new MemoryStream();
            try
            {
                var chunk = new byte[81920];
                int read;
                while ((read = await content.ReadAsync(chunk, cancellationToken)) > 0)
                {
                    if (buffer.Length + read > _options.MaxFileSize)
                        throw new InvalidDataException($"Image exceeds {_options.MaxFileSize} bytes.");
                    await buffer.WriteAsync(chunk.AsMemory(0, read), cancellationToken);
                }
                if (buffer.Length == 0) throw new InvalidDataException("The uploaded image is empty.");
                buffer.Position = 0;
                return buffer;
            }
            catch
            {
                buffer.Dispose();
                throw;
            }
        }
    }
}
