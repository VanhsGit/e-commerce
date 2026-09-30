using System.Text.Json;
using API.Dtos;
using API.Errors;
using API.Helpers;
using Core.Entities;
using Core.PageContent;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public sealed class SiteSettingsController : BaseApiController
{
    private readonly StoreContext _context;

    public SiteSettingsController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<SiteSettingsResponse>> Get(CancellationToken cancellationToken)
    {
        var entity = await _context.SiteSettings
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == SiteSettings.SingletonId, cancellationToken);

        if (entity is null)
            return Ok(new SiteSettingsResponse(SiteSettingsDefaults.Document(), DateTime.MinValue));

        try
        {
            var content = JsonSerializer.Deserialize<SiteSettingsDocument>(entity.ContentJson, SiteSettingsDefaults.JsonOptions);
            if (content is not null && SiteSettingsValidator.Validate(content).Count == 0)
                return Ok(new SiteSettingsResponse(content, entity.UpdatedAt));
        }
        catch (JsonException)
        {
            // Đọc công khai phải luôn trả 200 kể cả khi dòng dữ liệu bị sửa tay ngoài API.
        }

        return Ok(new SiteSettingsResponse(SiteSettingsDefaults.Document(), entity.UpdatedAt));
    }

    [HttpPut]
    [Authorize(Roles = AppRoles.ContentEditors)]
    public async Task<ActionResult<SiteSettingsResponse>> Put(
        [FromBody] SiteSettingsDocument content,
        CancellationToken cancellationToken)
    {
        var errors = SiteSettingsValidator.Validate(content);
        if (errors.Count > 0)
            return BadRequest(new ApiValidationErrorResponse { Errors = errors });

        var entity = await _context.SiteSettings
            .SingleOrDefaultAsync(x => x.Id == SiteSettings.SingletonId, cancellationToken);
        var updatedAt = DateTime.UtcNow;
        var json = JsonSerializer.Serialize(content, SiteSettingsDefaults.JsonOptions);

        if (entity is null)
        {
            entity = new SiteSettings
            {
                Id = SiteSettings.SingletonId,
                IsUsed = true,
                ContentJson = json,
                UpdatedAt = updatedAt
            };
            _context.SiteSettings.Add(entity);
        }
        else
        {
            entity.ContentJson = json;
            entity.UpdatedAt = updatedAt;
            entity.IsUsed = true;
        }

        await _context.SaveChangesAsync(cancellationToken);
        return Ok(new SiteSettingsResponse(content, updatedAt));
    }
}
