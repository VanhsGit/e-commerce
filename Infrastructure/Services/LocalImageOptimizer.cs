using System.Buffers.Binary;
using SkiaSharp;

namespace Infrastructure.Services;

internal sealed record OptimizedImage(byte[] Content, string Extension, string MimeType, byte[] Thumbnail);

internal static class LocalImageOptimizer
{
    public static OptimizedImage Optimize(byte[] bytes, string mimeType, MediaStorageOptions options)
    {
        using var data = SKData.CreateCopy(bytes);
        using var codec = SKCodec.Create(data) ?? throw new InvalidDataException("Không đọc được ảnh. File có thể bị hỏng.");
        var actualMime = codec.EncodedFormat switch
        {
            SKEncodedImageFormat.Jpeg => "image/jpeg",
            SKEncodedImageFormat.Png => "image/png",
            SKEncodedImageFormat.Webp => "image/webp",
            SKEncodedImageFormat.Gif => "image/gif",
            _ => string.Empty,
        };
        if (!string.Equals(actualMime, mimeType, StringComparison.OrdinalIgnoreCase))
            throw new InvalidDataException("Nội dung file không khớp định dạng ảnh.");

        var pixels = (long)codec.Info.Width * codec.Info.Height;
        if (pixels <= 0 || pixels > options.MaxPixelCount)
            throw new InvalidDataException($"Ảnh vượt giới hạn {options.MaxPixelCount:N0} pixel.");
        var frames = Math.Max(Math.Max(1, codec.FrameCount), PngFrameCount(bytes, actualMime));
        if (frames > options.MaxAnimationFrames || pixels > options.MaxAnimationPixelCount / frames)
            throw new InvalidDataException("Ảnh động có quá nhiều khung hình hoặc kích thước quá lớn.");

        using var colorSpace = SKColorSpace.CreateSrgb();
        using var decoded = new SKBitmap(new SKImageInfo(codec.Info.Width, codec.Info.Height,
            SKColorType.Rgba8888, SKAlphaType.Premul, colorSpace));
        if (codec.GetPixels(decoded.Info, decoded.GetPixels()) != SKCodecResult.Success)
            throw new InvalidDataException("Không đọc được đầy đủ ảnh. File có thể bị hỏng.");
        using var source = SKImage.FromBitmap(decoded);
        var thumbnail = Encode(source, codec.EncodedOrigin, options.ThumbnailMaxDimension, options.WebpQuality);
        // Giữ toàn bộ chuyển động của GIF, APNG và WebP động. Thumbnail dùng khung đầu.
        if (frames > 1)
        {
            var extension = actualMime switch { "image/gif" => ".gif", "image/png" => ".png", _ => ".webp" };
            return new OptimizedImage(bytes, extension, actualMime, thumbnail);
        }
        return new OptimizedImage(Encode(source, codec.EncodedOrigin, options.MaxDimension, options.WebpQuality),
            ".webp", "image/webp", thumbnail);
    }

    private static byte[] Encode(SKImage source, SKEncodedOrigin origin, int maxDimension, int quality)
    {
        var swap = origin is SKEncodedOrigin.LeftTop or SKEncodedOrigin.RightTop or SKEncodedOrigin.RightBottom or SKEncodedOrigin.LeftBottom;
        var width = swap ? source.Height : source.Width;
        var height = swap ? source.Width : source.Height;
        var scale = Math.Min(1d, (double)maxDimension / Math.Max(width, height));
        var outputWidth = Math.Max(1, (int)Math.Round(width * scale));
        var outputHeight = Math.Max(1, (int)Math.Round(height * scale));
        using var output = new SKBitmap(outputWidth, outputHeight, SKColorType.Rgba8888, SKAlphaType.Premul);
        using (var canvas = new SKCanvas(output))
        {
            canvas.Clear(SKColors.Transparent);
            var matrix = Orientation(origin, source.Width, source.Height);
            var sx = (float)outputWidth / width;
            var sy = (float)outputHeight / height;
            matrix.ScaleX *= sx; matrix.SkewX *= sx; matrix.TransX *= sx;
            matrix.SkewY *= sy; matrix.ScaleY *= sy; matrix.TransY *= sy;
            canvas.SetMatrix(matrix);
            canvas.DrawImage(source, 0, 0, new SKSamplingOptions(SKCubicResampler.Mitchell));
        }
        using var image = SKImage.FromBitmap(output);
        using var encoded = image.Encode(SKEncodedImageFormat.Webp, quality)
            ?? throw new InvalidDataException("Không tạo được ảnh WebP.");
        return encoded.ToArray();
    }

    private static SKMatrix Orientation(SKEncodedOrigin origin, int width, int height) => origin switch
    {
        SKEncodedOrigin.TopRight => Matrix(-1, 0, width, 0, 1, 0),
        SKEncodedOrigin.BottomRight => Matrix(-1, 0, width, 0, -1, height),
        SKEncodedOrigin.BottomLeft => Matrix(1, 0, 0, 0, -1, height),
        SKEncodedOrigin.LeftTop => Matrix(0, 1, 0, 1, 0, 0),
        SKEncodedOrigin.RightTop => Matrix(0, -1, height, 1, 0, 0),
        SKEncodedOrigin.RightBottom => Matrix(0, -1, height, -1, 0, width),
        SKEncodedOrigin.LeftBottom => Matrix(0, 1, 0, -1, 0, width),
        _ => SKMatrix.Identity,
    };

    private static SKMatrix Matrix(float sx, float kx, float tx, float ky, float sy, float ty) => new()
    {
        ScaleX = sx, SkewX = kx, TransX = tx, SkewY = ky, ScaleY = sy, TransY = ty, Persp2 = 1,
    };

    private static int PngFrameCount(byte[] bytes, string mime)
    {
        if (mime != "image/png") return 1;
        for (var offset = 8; offset <= bytes.Length - 12;)
        {
            var length = BinaryPrimitives.ReadUInt32BigEndian(bytes.AsSpan(offset, 4));
            if (length > bytes.Length - offset - 12) break;
            if (bytes.AsSpan(offset + 4, 4).SequenceEqual("acTL"u8) && length == 8)
                return (int)Math.Min(int.MaxValue, BinaryPrimitives.ReadUInt32BigEndian(bytes.AsSpan(offset + 8, 4)));
            offset += (int)length + 12;
        }
        return 1;
    }
}
