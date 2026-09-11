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
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductAdminDto>>> List(
            [FromQuery] bool includeInactive = false,
            CancellationToken cancellationToken = default)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var query = _context.Products.AsNoTracking()
                .Include(x => x.ProductType)
                .Include(x => x.ProductBrand)
                .Include(x => x.Company)
                .AsQueryable();
            if (!includeInactive) query = query.Where(x => x.IsUsed);
            return Ok((await query.OrderBy(x => x.Name).ToListAsync(cancellationToken)).Select(ToDto));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductAdminDto>> Get(int id, CancellationToken cancellationToken)
        {
            var entity = await Query().FirstOrDefaultAsync(x => x.Id == id && x.IsUsed, cancellationToken);
            return entity == null ? NotFound() : Ok(ToDto(entity));
        }

        [Authorize, HttpPost]
        public async Task<ActionResult<ProductAdminDto>> Create(SaveProductDto dto, CancellationToken cancellationToken)
        {
            var validation = await ValidateReferences(dto, cancellationToken);
            if (validation != null) return BadRequest(validation);
            var entity = new Product();
            Apply(dto, entity);
            _context.Products.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);
            var created = await Query().SingleAsync(x => x.Id == entity.Id, cancellationToken);
            return CreatedAtAction(nameof(Get), new { id = entity.Id }, ToDto(created));
        }

        [Authorize, HttpPut("{id:int}")]
        public async Task<ActionResult<ProductAdminDto>> Update(int id, SaveProductDto dto, CancellationToken cancellationToken)
        {
            var entity = await _context.Products.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            var validation = await ValidateReferences(dto, cancellationToken);
            if (validation != null) return BadRequest(validation);
            Apply(dto, entity);
            await _context.SaveChangesAsync(cancellationToken);
            var updated = await Query().SingleAsync(x => x.Id == id, cancellationToken);
            return Ok(ToDto(updated));
        }

        [Authorize, HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            var entity = await _context.Products.FindAsync(new object[] { id }, cancellationToken);
            if (entity == null) return NotFound();
            entity.IsUsed = false;
            await _context.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        private IQueryable<Product> Query() => _context.Products.AsNoTracking()
            .Include(x => x.ProductType).Include(x => x.ProductBrand).Include(x => x.Company);

        private async Task<string?> ValidateReferences(SaveProductDto dto, CancellationToken cancellationToken)
        {
            if (!await _context.ProductTypes.AnyAsync(x => x.Id == dto.ProductTypeId && x.IsUsed, cancellationToken)) return "Product type is invalid or inactive.";
            if (!await _context.ProductBrands.AnyAsync(x => x.Id == dto.ProductBrandId && x.IsUsed, cancellationToken)) return "Product brand is invalid or inactive.";
            if (!await _context.Companies.AnyAsync(x => x.Id == dto.CompanyId && x.IsUsed, cancellationToken)) return "Company is invalid or inactive.";
            return null;
        }

        private static void Apply(SaveProductDto dto, Product entity)
        {
            entity.Name = dto.Name.Trim();
            entity.Description = dto.Description;
            entity.Price = dto.Price;
            entity.PictureUrl = dto.PictureUrl ?? string.Empty;
            entity.ProductTypeId = dto.ProductTypeId;
            entity.ProductBrandId = dto.ProductBrandId;
            entity.CompanyId = dto.CompanyId;
            entity.IsUsed = dto.IsUsed;
        }

        private static ProductAdminDto ToDto(Product x) => new()
        {
            Id = x.Id, Name = x.Name, Description = x.Description, Price = x.Price,
            PictureUrl = x.PictureUrl, ProductTypeId = x.ProductTypeId,
            ProductTypeName = x.ProductType?.Name ?? string.Empty,
            ProductBrandId = x.ProductBrandId, ProductBrandName = x.ProductBrand?.Name ?? string.Empty,
            CompanyId = x.CompanyId, CompanyName = x.Company?.Name ?? string.Empty, IsUsed = x.IsUsed
        };
    }
}
