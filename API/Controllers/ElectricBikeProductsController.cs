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
        private readonly IProductDeletionService _deletion;

        public ElectricBikeProductsController(IUnitOfWork unitOfWork, IMapper mapper, IProductDeletionService deletion)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _deletion = deletion;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ElectricBikeProductDto>>> GetElectricBikeProducts(
            [FromQuery] string? companyId = null,
            [FromQuery] string? brandId = null,
            [FromQuery] ElectricBikeCategory? category = null,
            [FromQuery] string? search = null,
            [FromQuery] bool? isUsed = null,
            [FromQuery] string? categoryId = null)
        {
            var categoryIds = await ProductCategoryTree.ResolveFilterIdsAsync(_unitOfWork, ProductKind.Bike, categoryId);
            var spec = new ElectricBikeProductsWithSpec(companyId, brandId, category, search, isUsed, categoryIds);
            var products = await _unitOfWork.Repository<ElectricBikeProduct>().ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<ElectricBikeProduct>, IReadOnlyList<ElectricBikeProductDto>>(products));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricBikeProductDto>> GetElectricBikeProduct(string id)
        {
            var spec = new ElectricBikeProductsWithSpec(id, false);
            var product = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            if (product == null) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(product));
        }

        [HttpPost]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<ElectricBikeProductDto>> Create([FromBody] CreateElectricBikeProductDto dto)
        {
            dto.CategoryId = string.IsNullOrWhiteSpace(dto.CategoryId) ? null : dto.CategoryId.Trim();
            var categoryError = await ProductCategoryTree.ValidateProductCategoryAsync(_unitOfWork, ProductKind.Bike, dto.CategoryId);
            if (categoryError != null) return BadRequest(new ApiResponse(400, categoryError));

            var product = _mapper.Map<CreateElectricBikeProductDto, ElectricBikeProduct>(dto);
            _unitOfWork.Repository<ElectricBikeProduct>().Add(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem creating product"));
            var spec = new ElectricBikeProductsWithSpec(product.Id, true);
            var created = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            return CreatedAtAction(nameof(GetElectricBikeProduct), new { id = product.Id },
                _mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(created));
        }

        [HttpPut("{id}")]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricBikeProductDto>> Update(string id, [FromBody] UpdateElectricBikeProductDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var product = await _unitOfWork.Repository<ElectricBikeProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            dto.CategoryId = string.IsNullOrWhiteSpace(dto.CategoryId) ? null : dto.CategoryId.Trim();
            var categoryError = await ProductCategoryTree.ValidateProductCategoryAsync(_unitOfWork, ProductKind.Bike, dto.CategoryId);
            if (categoryError != null) return BadRequest(new ApiResponse(400, categoryError));

            _mapper.Map(dto, product);
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<ElectricBikeProduct>().Update(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem updating product"));
            var spec = new ElectricBikeProductsWithSpec(id, true);
            var updated = await _unitOfWork.Repository<ElectricBikeProduct>().GetEntityWithSpec(spec);
            return Ok(_mapper.Map<ElectricBikeProduct, ElectricBikeProductDto>(updated));
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = AppRoles.BackOffice)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(string id)
        {
            if (!await _deletion.DeleteAsync<ElectricBikeProduct>(id)) return NotFound(new ApiResponse(404));
            return Ok();
        }
    }
}
