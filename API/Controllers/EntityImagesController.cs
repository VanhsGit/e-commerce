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
using Microsoft.Extensions.Options;

namespace API.Controllers
{
    [Authorize]
    public class EntityImagesController : BaseApiController
    {
        private readonly IEntityImageService _images;
        private readonly IEntityImageStorage _storage;
        private readonly MediaStorageOptions _options;

        public EntityImagesController(
            IEntityImageService images,
            IEntityImageStorage storage,
            IOptions<MediaStorageOptions> options)
        {
            _images = images;
            _storage = storage;
            _options = options.Value;
        }

        [HttpGet("{entityType}/{entityId}")]
        public async Task<ActionResult<IReadOnlyList<EntityImageDto>>> List(
            EntityType entityType,
            string entityId,
            [FromQuery] bool includeInactive = true,
            CancellationToken cancellationToken = default)
        {
            if (!await _images.ParentExistsAsync(entityType, entityId, cancellationToken)) return NotFound();
            var images = await _images.ListAsync(entityType, entityId, includeInactive, cancellationToken);
            return Ok(images.Select(ToDto).ToList());
        }

        [HttpPost("{entityType}/{entityId}")]
        [RequestSizeLimit(10 * 1024 * 1024)]
        public async Task<ActionResult<EntityImageDto>> Upload(
            EntityType entityType,
            string entityId,
            [FromForm] IFormFile file,
            [FromForm] string imageType = "gallery",
            [FromForm] int sortOrder = 0,
            CancellationToken cancellationToken = default)
        {
            if (file == null || file.Length == 0) return BadRequest("An image file is required.");
            if (file.Length > _options.MaxFileSize) return BadRequest($"Maximum image size is {_options.MaxFileSize} bytes.");

            try
            {
                await using var stream = file.OpenReadStream();
                var image = await _images.UploadAsync(
                    new EntityImageUpload(
                        entityType,
                        entityId,
                        imageType,
                        sortOrder,
                        file.FileName,
                        file.ContentType,
                        file.Length,
                        stream),
                    cancellationToken);
                if (image == null) return NotFound("The target entity does not exist.");
                return CreatedAtAction(nameof(List), new { entityType, entityId }, ToDto(image));
            }
            catch (InvalidDataException exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EntityImageDto>> Update(
            string id,
            UpdateEntityImageDto request,
            CancellationToken cancellationToken)
        {
            var image = await _images.UpdateAsync(id, request.ImageType, request.SortOrder, request.IsUsed, cancellationToken);
            return image == null ? NotFound() : Ok(ToDto(image));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id, CancellationToken cancellationToken)
        {
            return await _images.DeleteAsync(id, cancellationToken) ? NoContent() : NotFound();
        }

        private EntityImageDto ToDto(EntityImage image)
        {
            return new EntityImageDto
            {
                Id = image.Id,
                EntityType = image.EntityType,
                EntityId = image.EntityId,
                ImageType = image.ImageType,
                Url = _storage.GetPublicUrl(image.RelativePath),
                OriginalFileName = image.OriginalFileName,
                MimeType = image.MimeType,
                FileSize = image.FileSize,
                SortOrder = image.SortOrder,
                IsUsed = image.IsUsed,
                CreatedAt = image.CreatedAt
            };
        }
    }
}
