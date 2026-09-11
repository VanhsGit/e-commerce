using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
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
            _rootPath = Path.GetFullPath(Path.IsPathRooted(_options.RootPath)
                ? _options.RootPath
                : Path.Combine(environment.ContentRootPath, _options.RootPath));
        }

        public async Task<StoredImageFile> SaveAsync(
            Stream content,
            string originalFileName,
            string contentType,
            EntityType entityType,
            CancellationToken cancellationToken = default)
        {
            var extension = Path.GetExtension(Path.GetFileName(originalFileName)).ToLowerInvariant();
            if (!MimeTypes.TryGetValue(extension, out var expectedMimeType) ||
                !_options.AllowedContentTypes.Contains(contentType) ||
                !string.Equals(expectedMimeType, contentType, StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidDataException("Unsupported image type or mismatched file extension.");
            }

            var buffered = await BufferAndValidateAsync(content, contentType, cancellationToken);
            if (buffered.Length == 0 || buffered.Length > _options.MaxFileSize)
            {
                await buffered.DisposeAsync();
                throw new InvalidDataException($"Image size must be between 1 byte and {_options.MaxFileSize} bytes.");
            }

            var entityDirectory = entityType.ToString().ToLowerInvariant();
            var relativePath = Path.Combine(entityDirectory, $"{Guid.NewGuid():N}{extension}");
            var fullPath = EnsureUnderRoot(relativePath);
            Directory.CreateDirectory(Path.GetDirectoryName(fullPath)!);

            try
            {
                await using var output = new FileStream(
                    fullPath,
                    FileMode.CreateNew,
                    FileAccess.Write,
                    FileShare.None,
                    81920,
                    useAsync: true);
                buffered.Position = 0;
                await buffered.CopyToAsync(output, cancellationToken);
                return new StoredImageFile(relativePath.Replace('\\', '/'), contentType, buffered.Length);
            }
            finally
            {
                await buffered.DisposeAsync();
            }
        }

        public Task DeleteAsync(string relativePath, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            var fullPath = EnsureUnderRoot(relativePath);
            if (File.Exists(fullPath)) File.Delete(fullPath);
            return Task.CompletedTask;
        }

        public string GetPublicUrl(string relativePath)
        {
            var safeRelativePath = EnsureUnderRoot(relativePath)
                .Substring(_rootPath.Length)
                .TrimStart(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                .Replace('\\', '/');
            return $"{_options.RequestPath.TrimEnd('/')}/{safeRelativePath}";
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

        private static async Task<MemoryStream> BufferAndValidateAsync(
            Stream content,
            string contentType,
            CancellationToken cancellationToken)
        {
            var buffer = new MemoryStream();
            await content.CopyToAsync(buffer, cancellationToken);
            var bytes = buffer.ToArray();
            var isValid = contentType.ToLowerInvariant() switch
            {
                "image/jpeg" => bytes.Length >= 3 && bytes[0] == 0xFF && bytes[1] == 0xD8 && bytes[2] == 0xFF,
                "image/png" => bytes.Length >= 8 && bytes.Take(8).SequenceEqual(new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A }),
                "image/gif" => bytes.Length >= 6 && (System.Text.Encoding.ASCII.GetString(bytes, 0, 6) == "GIF87a" || System.Text.Encoding.ASCII.GetString(bytes, 0, 6) == "GIF89a"),
                "image/webp" => bytes.Length >= 12 && System.Text.Encoding.ASCII.GetString(bytes, 0, 4) == "RIFF" && System.Text.Encoding.ASCII.GetString(bytes, 8, 4) == "WEBP",
                _ => false
            };

            if (!isValid)
            {
                await buffer.DisposeAsync();
                throw new InvalidDataException("The uploaded content is not a valid image.");
            }

            buffer.Position = 0;
            return buffer;
        }
    }
}
