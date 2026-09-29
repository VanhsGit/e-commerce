using System.Text.Json;
using API.Dtos;
using API.Errors;
using API.Helpers;
using Core.Entities;
using Core.HomeContent;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public sealed class HomeContentController : BaseApiController
{
    private readonly StoreContext _context;

    public HomeContentController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<HomePageContentResponse>> Get(CancellationToken cancellationToken)
    {
        var entity = await _context.HomePageContents
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == HomePageContent.SingletonId, cancellationToken);

        if (entity is null)
            return Ok(new HomePageContentResponse(HomePageContentDefaults.Document, DateTime.MinValue));

        try
        {
            var content = JsonSerializer.Deserialize<HomePageContentDocument>(entity.ContentJson, HomePageContentDefaults.JsonOptions);
            if (content is not null && HomePageContentValidator.Validate(content).Count == 0)
                return Ok(new HomePageContentResponse(content, entity.UpdatedAt));
        }
        catch (JsonException)
        {
            // A public read must remain available even if an operator edited the row outside the API.
        }

        return Ok(new HomePageContentResponse(HomePageContentDefaults.Document, entity.UpdatedAt));
    }

    [HttpPut]
    [Authorize(Roles = AppRoles.ContentEditors)]
    public async Task<ActionResult<HomePageContentResponse>> Put(
        [FromBody] HomePageContentDocument content,
        CancellationToken cancellationToken)
    {
        var errors = HomePageContentValidator.Validate(content);
        if (errors.Count > 0)
            return BadRequest(new ApiValidationErrorResponse { Errors = errors });

        var entity = await _context.HomePageContents
            .SingleOrDefaultAsync(x => x.Id == HomePageContent.SingletonId, cancellationToken);
        var updatedAt = DateTime.UtcNow;
        var json = JsonSerializer.Serialize(content, HomePageContentDefaults.JsonOptions);

        if (entity is null)
        {
            entity = new HomePageContent
            {
                Id = HomePageContent.SingletonId,
                IsUsed = true,
                ContentJson = json,
                UpdatedAt = updatedAt
            };
            _context.HomePageContents.Add(entity);
        }
        else
        {
            entity.ContentJson = json;
            entity.UpdatedAt = updatedAt;
            entity.IsUsed = true;
        }

        await _context.SaveChangesAsync(cancellationToken);
        return Ok(new HomePageContentResponse(content, updatedAt));
    }
}
