using API.Dtos;
using API.Helpers;
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
        private readonly IProductDeletionService _deletion;

        public ElectricalApplianceProductsController(IUnitOfWork unitOfWork, IMapper mapper, IProductDeletionService deletion)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _deletion = deletion;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ElectricalApplianceProductDto>>> GetElectricalApplianceProducts(
            [FromQuery] string? companyId = null,
            [FromQuery] string? brandId = null,
            [FromQuery] ElectricalApplianceType? type = null,
            [FromQuery] string? search = null,
            [FromQuery] bool? isUsed = null,
            [FromQuery] string? categoryId = null)
        {
            var categoryIds = await ProductCategoryTree.ResolveFilterIdsAsync(_unitOfWork, ProductKind.Appliance, categoryId);
            var spec = new ElectricalApplianceProductsWithSpec(companyId, brandId, type, search, isUsed, categoryIds);
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
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<ElectricalApplianceProductDto>> Create(
            [FromBody] CreateElectricalApplianceProductDto dto)
        {
            dto.CategoryId = string.IsNullOrWhiteSpace(dto.CategoryId) ? null : dto.CategoryId.Trim();
            var categoryError = await ProductCategoryTree.ValidateProductCategoryAsync(_unitOfWork, ProductKind.Appliance, dto.CategoryId);
            if (categoryError != null) return BadRequest(new ApiResponse(400, categoryError));

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
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricalApplianceProductDto>> Update(
            string id,
            [FromBody] UpdateElectricalApplianceProductDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var product = await _unitOfWork.Repository<ElectricalApplianceProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));

            dto.CategoryId = string.IsNullOrWhiteSpace(dto.CategoryId) ? null : dto.CategoryId.Trim();
            var categoryError = await ProductCategoryTree.ValidateProductCategoryAsync(_unitOfWork, ProductKind.Appliance, dto.CategoryId);
            if (categoryError != null) return BadRequest(new ApiResponse(400, categoryError));

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
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(string id)
        {
            if (!await _deletion.DeleteAsync<ElectricalApplianceProduct>(id)) return NotFound(new ApiResponse(404));
            return Ok();
        }
    }
}
