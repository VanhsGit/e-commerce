using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductTypesController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductTypesController(StoreContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<LookupEntityDto>>> List([FromQuery] bool includeInactive = false, CancellationToken cancellationToken = default)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var query = _context.ProductTypes.AsNoTracking().AsQueryable();
            if (!includeInactive) query = query.Where(x => x.IsUsed);
            return Ok(await query.OrderBy(x => x.Name).Select(x => new LookupEntityDto { Id = x.Id, Name = x.Name, IsUsed = x.IsUsed }).ToListAsync(cancellationToken));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<LookupEntityDto>> Get(int id, CancellationToken cancellationToken)
        {
            var entity = await _context.ProductTypes.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id && x.IsUsed, cancellationToken);
            return entity == null ? NotFound() : Ok(new LookupEntityDto { Id = entity.Id, Name = entity.Name, IsUsed = entity.IsUsed });
        }

        [Authorize, HttpPost]
        public async Task<ActionResult<LookupEntityDto>> Create(SaveLookupEntityDto dto, CancellationToken cancellationToken)
        {
            var entity = new ProductType { Name = dto.Name.Trim(), IsUsed = dto.IsUsed };
            _context.ProductTypes.Add(entity); await _context.SaveChangesAsync(cancellationToken);
            return CreatedAtAction(nameof(Get), new { id = entity.Id }, new LookupEntityDto { Id = entity.Id, Name = entity.Name, IsUsed = entity.IsUsed });
        }

        [Authorize, HttpPut("{id:int}")]
        public async Task<ActionResult<LookupEntityDto>> Update(int id, SaveLookupEntityDto dto, CancellationToken cancellationToken)
        {
            var entity = await _context.ProductTypes.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            entity.Name = dto.Name.Trim(); entity.IsUsed = dto.IsUsed;
            await _context.SaveChangesAsync(cancellationToken);
            return Ok(new LookupEntityDto { Id = entity.Id, Name = entity.Name, IsUsed = entity.IsUsed });
        }

        [Authorize, HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            var entity = await _context.ProductTypes.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            if (await _context.Products.AnyAsync(x => x.ProductTypeId == id && x.IsUsed, cancellationToken))
                return Conflict("Deactivate active products using this product type first.");
            entity.IsUsed = false; await _context.SaveChangesAsync(cancellationToken); return NoContent();
        }
    }
}
