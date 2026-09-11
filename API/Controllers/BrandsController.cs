using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BrandsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly StoreContext _context;

        public BrandsController(IUnitOfWork unitOfWork, IMapper mapper, StoreContext context)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<BrandDto>>> GetBrands([FromQuery] bool includeInactive = false)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var brands = await _unitOfWork.Repository<Brand>().ListAllAsync();
            if (!includeInactive) brands = brands.Where(x => x.IsUsed).ToList();
            return Ok(_mapper.Map<IReadOnlyList<Brand>, IReadOnlyList<BrandDto>>(brands));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BrandDto>> GetBrand(int id)
        {
            var brand = await _unitOfWork.Repository<Brand>().GetByIdAsync(id);
            if (brand == null || !brand.IsUsed) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<Brand, BrandDto>(brand));
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<BrandDto>> CreateBrand([FromBody] CreateBrandDto dto)
        {
            var brand = _mapper.Map<CreateBrandDto, Brand>(dto);
            _unitOfWork.Repository<Brand>().Add(brand);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem creating brand"));
            return CreatedAtAction(nameof(GetBrand), new { id = brand.Id }, _mapper.Map<Brand, BrandDto>(brand));
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BrandDto>> UpdateBrand(int id, [FromBody] CreateBrandDto dto)
        {
            var brand = await _unitOfWork.Repository<Brand>().GetByIdAsync(id);
            if (brand == null) return NotFound(new ApiResponse(404));
            brand.UpdatedAt = DateTime.UtcNow;
            _mapper.Map(dto, brand);
            _unitOfWork.Repository<Brand>().Update(brand);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem updating brand"));
            return Ok(_mapper.Map<Brand, BrandDto>(brand));
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteBrand(int id)
        {
            var brand = await _unitOfWork.Repository<Brand>().GetByIdAsync(id);
            if (brand == null) return NotFound(new ApiResponse(404));
            var hasActiveProducts = await _context.ElectricBikeProducts.AnyAsync(x => x.BrandId == id && x.IsUsed)
                || await _context.AgriculturalMachineProducts.AnyAsync(x => x.BrandId == id && x.IsUsed);
            if (hasActiveProducts) return Conflict(new ApiResponse(409, "Deactivate the brand's active products first."));
            brand.IsUsed = false;
            brand.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<Brand>().Update(brand);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting brand"));
            return Ok();
        }
    }
}
