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

public sealed class CategoryPageContentController : BaseApiController
{
    private readonly StoreContext _context;

    public CategoryPageContentController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet("{kind}")]
    public async Task<ActionResult<CategoryPageContentResponse>> Get(string kind, CancellationToken cancellationToken)
    {
        var normalizedKind = NormalizeKind(kind);
        if (normalizedKind is null) return NotFound(new ApiResponse(404));

        var entity = await _context.CategoryPageContents
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == normalizedKind, cancellationToken);

        if (entity is null)
            return Ok(new CategoryPageContentResponse(CategoryPageContentDefaults.For(normalizedKind), DateTime.MinValue));

        try
        {
            var content = JsonSerializer.Deserialize<CategoryPageContentDocument>(entity.ContentJson, CategoryPageContentDefaults.JsonOptions);
            if (content is not null)
            {
                content.Kind = normalizedKind;
                if (CategoryPageContentValidator.Validate(content).Count == 0)
                    return Ok(new CategoryPageContentResponse(content, entity.UpdatedAt));
            }
        }
        catch (JsonException)
        {
            // Đọc công khai phải luôn trả 200 kể cả khi dòng dữ liệu bị sửa tay ngoài API.
        }

        return Ok(new CategoryPageContentResponse(CategoryPageContentDefaults.For(normalizedKind), entity.UpdatedAt));
    }

    [HttpPut("{kind}")]
    [Authorize(Roles = AppRoles.ContentEditors)]
    public async Task<ActionResult<CategoryPageContentResponse>> Put(
        string kind,
        [FromBody] CategoryPageContentDocument content,
        CancellationToken cancellationToken)
    {
        var normalizedKind = NormalizeKind(kind);
        if (normalizedKind is null) return NotFound(new ApiResponse(404));

        if (content is not null) content.Kind = normalizedKind;
        var errors = CategoryPageContentValidator.Validate(content);
        if (errors.Count > 0)
            return BadRequest(new ApiValidationErrorResponse { Errors = errors });

        var entity = await _context.CategoryPageContents
            .SingleOrDefaultAsync(x => x.Id == normalizedKind, cancellationToken);
        var updatedAt = DateTime.UtcNow;
        var json = JsonSerializer.Serialize(content, CategoryPageContentDefaults.JsonOptions);

        if (entity is null)
        {
            entity = new CategoryPageContent
            {
                Id = normalizedKind,
                IsUsed = true,
                ContentJson = json,
                UpdatedAt = updatedAt
            };
            _context.CategoryPageContents.Add(entity);
        }
        else
        {
            entity.ContentJson = json;
            entity.UpdatedAt = updatedAt;
            entity.IsUsed = true;
        }

        await _context.SaveChangesAsync(cancellationToken);
        return Ok(new CategoryPageContentResponse(content!, updatedAt));
    }

    private static string? NormalizeKind(string? kind)
    {
        var value = kind?.Trim().ToLowerInvariant();
        return value is not null && CategoryPageContentDefaults.Kinds.Contains(value) ? value : null;
    }
}
