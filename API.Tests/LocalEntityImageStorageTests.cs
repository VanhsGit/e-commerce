using Infrastructure.Services;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Xunit;

namespace API.Tests;

public sealed class LocalEntityImageStorageTests : IDisposable
{
    private static readonly byte[] ValidPngBytes =
    {
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
        0x00, 0x00, 0x00, 0x0D
    };

    private readonly string _root;
    private readonly LocalEntityImageStorage _storage;

    public LocalEntityImageStorageTests()
    {
        _root = Path.Combine(Path.GetTempPath(), "ecommerce-media-tests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_root);
        var options = Options.Create(new MediaStorageOptions
        {
            RootPath = _root,
            RequestPath = "/content/entity-images",
            MaxFileSize = 1024
        });
        _storage = new LocalEntityImageStorage(options, new TestHostEnvironment(_root));
    }

    [Fact]
    public async Task SaveAsync_WritesValidatedImageBelowConfiguredRoot()
    {
        await using var content = new MemoryStream(ValidPngBytes);

        var stored = await _storage.SaveAsync(content, "avatar.png", "image/png");

        Assert.StartsWith("library/", stored.RelativePath);
        Assert.True(File.Exists(Path.Combine(_root, stored.RelativePath)));
        Assert.Equal(
            "/content/entity-images/" + stored.RelativePath.Replace('\\', '/'),
            _storage.GetPublicUrl(stored.RelativePath));
    }

    [Fact]
    public async Task SaveAsync_RejectsExtensionAndSignatureMismatch()
    {
        await using var content = new MemoryStream(ValidPngBytes);

        await Assert.ThrowsAsync<InvalidDataException>(() =>
            _storage.SaveAsync(content, "avatar.jpg", "image/jpeg"));
    }

    public void Dispose()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, recursive: true);
    }

    private sealed class TestHostEnvironment : IHostEnvironment
    {
        public TestHostEnvironment(string root)
        {
            ContentRootPath = root;
            ContentRootFileProvider = new PhysicalFileProvider(root);
        }

        public string EnvironmentName { get; set; } = Environments.Development;
        public string ApplicationName { get; set; } = "API.Tests";
        public string ContentRootPath { get; set; }
        public IFileProvider ContentRootFileProvider { get; set; }
    }
}
