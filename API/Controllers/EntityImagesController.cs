using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using API.Helpers;

namespace API.Controllers
{
    [Authorize]
    public class EntityImagesController : BaseApiController
    {
        private readonly IEntityImageService _images;
        private readonly IEntityImageStorage _storage;
        private readonly MediaStorageOptions _options;
        private readonly IConfiguration _configuration;

        public EntityImagesController(
            IEntityImageService images,
            IEntityImageStorage storage,
            IOptions<MediaStorageOptions> options,
            IConfiguration configuration)
        {
            _images = images;
            _storage = storage;
            _options = options.Value;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<EntityImageDto>>> List(
            [FromQuery] string? search = null,
            [FromQuery] bool includeInactive = true,
            CancellationToken cancellationToken = default)
        {
            var images = await _images.ListAsync(search, includeInactive, cancellationToken);
            return Ok(images.Select(ToDto).ToList());
        }

        [HttpPost]
        [RequestSizeLimit(10 * 1024 * 1024)]
        public async Task<ActionResult<EntityImageDto>> Upload(
            [FromForm] IFormFile file,
            CancellationToken cancellationToken = default)
        {
            if (file == null || file.Length == 0) return BadRequest("An image file is required.");
            if (file.Length > _options.MaxFileSize)
                return BadRequest($"Maximum image size is {_options.MaxFileSize} bytes.");

            try
            {
                await using var stream = file.OpenReadStream();
                var image = await _images.UploadAsync(
                    new EntityImageUpload(file.FileName, file.ContentType, file.Length, stream),
                    cancellationToken);
                return CreatedAtAction(nameof(List), ToDto(image));
            }
            catch (InvalidDataException exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id, CancellationToken cancellationToken)
        {
            var result = await _images.DeleteAsync(id, cancellationToken);
            return result switch
            {
                DeleteEntityImageResult.Deleted => NoContent(),
                DeleteEntityImageResult.InUse => Conflict("Ảnh đang được sử dụng. Hãy bỏ ảnh khỏi entity trước khi xóa."),
                _ => NotFound()
            };
        }

        private EntityImageDto ToDto(EntityImage image)
        {
            return new EntityImageDto
            {
                Id = image.Id,
                Url = ImageUrlNormalizer.Normalize(
                    _storage.GetPublicUrl(image.RelativePath),
                    _configuration["ApiUrl"]) ?? _storage.GetPublicUrl(image.RelativePath),
                OriginalFileName = image.OriginalFileName,
                MimeType = image.MimeType,
                FileSize = image.FileSize,
                IsUsed = image.IsUsed,
                CreatedAt = image.CreatedAt
            };
        }
    }
}
