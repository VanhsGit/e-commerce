using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ElectricalApplianceProductsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ElectricalApplianceProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ElectricalApplianceProductDto>>> GetElectricalApplianceProducts(
            [FromQuery] string? companyId = null,
            [FromQuery] string? brandId = null,
            [FromQuery] ElectricalApplianceType? type = null,
            [FromQuery] string? search = null,
            [FromQuery] bool? isUsed = null)
        {
            var spec = new ElectricalApplianceProductsWithSpec(companyId, brandId, type, search, isUsed);
            var products = await _unitOfWork.Repository<ElectricalApplianceProduct>().ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<ElectricalApplianceProductDto>>(products));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricalApplianceProductDto>> GetElectricalApplianceProduct(string id)
        {
            var product = await _unitOfWork.Repository<ElectricalApplianceProduct>()
                .GetEntityWithSpec(new ElectricalApplianceProductsWithSpec(id, includeInactive: false));
            if (product == null) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<ElectricalApplianceProductDto>(product));
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<ElectricalApplianceProductDto>> Create(
            [FromBody] CreateElectricalApplianceProductDto dto)
        {
            var product = _mapper.Map<ElectricalApplianceProduct>(dto);
            _unitOfWork.Repository<ElectricalApplianceProduct>().Add(product);
            if (await _unitOfWork.Complete() <= 0)
                return BadRequest(new ApiResponse(400, "Problem creating product"));

            var created = await _unitOfWork.Repository<ElectricalApplianceProduct>()
                .GetEntityWithSpec(new ElectricalApplianceProductsWithSpec(product.Id, true));
            return CreatedAtAction(
                nameof(GetElectricalApplianceProduct),
                new { id = product.Id },
                _mapper.Map<ElectricalApplianceProductDto>(created));
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricalApplianceProductDto>> Update(
            string id,
            [FromBody] UpdateElectricalApplianceProductDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var product = await _unitOfWork.Repository<ElectricalApplianceProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));

            _mapper.Map(dto, product);
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<ElectricalApplianceProduct>().Update(product);
            if (await _unitOfWork.Complete() <= 0)
                return BadRequest(new ApiResponse(400, "Problem updating product"));

            var updated = await _unitOfWork.Repository<ElectricalApplianceProduct>()
                .GetEntityWithSpec(new ElectricalApplianceProductsWithSpec(id, true));
            return Ok(_mapper.Map<ElectricalApplianceProductDto>(updated));
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(string id)
        {
            var product = await _unitOfWork.Repository<ElectricalApplianceProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            product.IsUsed = false;
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<ElectricalApplianceProduct>().Update(product);
            if (await _unitOfWork.Complete() <= 0)
                return BadRequest(new ApiResponse(400, "Problem deleting product"));
            return Ok();
        }
    }
}
