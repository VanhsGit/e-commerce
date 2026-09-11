using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using Core.Entities.OrderAggregate;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class DeliveryMethodsController : BaseApiController
    {
        private readonly StoreContext _context;
        public DeliveryMethodsController(StoreContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<DeliveryMethodAdminDto>>> List([FromQuery] bool includeInactive = false, CancellationToken cancellationToken = default)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var query = _context.DeliveryMethods.AsNoTracking().AsQueryable();
            if (!includeInactive) query = query.Where(x => x.IsUsed);
            return Ok(await query.OrderBy(x => x.Price).Select(x => new DeliveryMethodAdminDto
            {
                Id = x.Id, ShortName = x.ShortName, DeliveryTime = x.DeliveryTime,
                Description = x.Description, Price = x.Price, IsUsed = x.IsUsed
            }).ToListAsync(cancellationToken));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<DeliveryMethodAdminDto>> Get(int id, CancellationToken cancellationToken)
        {
            var entity = await _context.DeliveryMethods.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id && x.IsUsed, cancellationToken);
            return entity == null ? NotFound() : Ok(ToDto(entity));
        }

        [Authorize, HttpPost]
        public async Task<ActionResult<DeliveryMethodAdminDto>> Create(SaveDeliveryMethodDto dto, CancellationToken cancellationToken)
        {
            var entity = new DeliveryMethod(); Apply(dto, entity);
            _context.DeliveryMethods.Add(entity); await _context.SaveChangesAsync(cancellationToken);
            return CreatedAtAction(nameof(Get), new { id = entity.Id }, ToDto(entity));
        }

        [Authorize, HttpPut("{id:int}")]
        public async Task<ActionResult<DeliveryMethodAdminDto>> Update(int id, SaveDeliveryMethodDto dto, CancellationToken cancellationToken)
        {
            var entity = await _context.DeliveryMethods.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            Apply(dto, entity); await _context.SaveChangesAsync(cancellationToken); return Ok(ToDto(entity));
        }

        [Authorize, HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            var entity = await _context.DeliveryMethods.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            entity.IsUsed = false; await _context.SaveChangesAsync(cancellationToken); return NoContent();
        }

        private static void Apply(SaveDeliveryMethodDto dto, DeliveryMethod entity)
        {
            entity.ShortName = dto.ShortName.Trim(); entity.DeliveryTime = dto.DeliveryTime.Trim();
            entity.Description = dto.Description; entity.Price = dto.Price; entity.IsUsed = dto.IsUsed;
        }

        private static DeliveryMethodAdminDto ToDto(DeliveryMethod x) => new()
        {
            Id = x.Id, ShortName = x.ShortName, DeliveryTime = x.DeliveryTime,
            Description = x.Description, Price = x.Price, IsUsed = x.IsUsed
        };
    }
}
