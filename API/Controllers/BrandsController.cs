using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BrandsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BrandsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [Cached(600)]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<BrandDto>>> GetBrands()
        {
            var brands = await _unitOfWork.Repository<Brand>().ListAllAsync();
            return Ok(_mapper.Map<IReadOnlyList<Brand>, IReadOnlyList<BrandDto>>(brands));
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BrandDto>> GetBrand(int id)
        {
            var brand = await _unitOfWork.Repository<Brand>().GetByIdAsync(id);
            if (brand == null) return NotFound(new ApiResponse(404));
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
            _unitOfWork.Repository<Brand>().Delete(brand);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting brand"));
            return Ok();
        }
    }
}
