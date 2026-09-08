using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ElectricBikeProductsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ElectricBikeProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [Cached(300)]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ElectricBikeProductDto>>> GetElectricBikeProducts(
            [FromQuery] int? companyId = null,
            [FromQuery] int? brandId = null)
        {
            var spec = new ElectricBikeProductsWithSpec(companyId, brandId);
            var products = await _unitOfWork.Repository<ElectricBikeProduct>().ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<ElectricBikeProduct>, IReadOnlyList<ElectricBikeProductDto>>(products));
        }

        [Cached(300)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricBikeProductDto>> GetElectricBikeProduct(int id)
        {
            var spec = new ElectricBikeProductsWithSpec(id);
            var product = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            if (product == null) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(product));
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<ElectricBikeProductDto>> Create([FromBody] CreateElectricBikeProductDto dto)
        {
            var product = _mapper.Map<CreateElectricBikeProductDto, ElectricBikeProduct>(dto);
            _unitOfWork.Repository<ElectricBikeProduct>().Add(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem creating product"));
            var spec = new ElectricBikeProductsWithSpec(product.Id);
            var created = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            return CreatedAtAction(nameof(GetElectricBikeProduct), new { id = product.Id },
                _mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(created));
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricBikeProductDto>> Update(int id, [FromBody] UpdateElectricBikeProductDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var product = await _unitOfWork.Repository<ElectricBikeProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            _mapper.Map(dto, product);
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<ElectricBikeProduct>().Update(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem updating product"));
            var spec = new ElectricBikeProductsWithSpec(id);
            var updated = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            return Ok(_mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(updated));
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await _unitOfWork.Repository<ElectricBikeProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            _unitOfWork.Repository<ElectricBikeProduct>().Delete(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting product"));
            return Ok();
        }
    }
}
