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
    public class AgriculturalMachineProductsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AgriculturalMachineProductsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AgriculturalMachineProductDto>>> GetAgriculturalMachineProducts(
            [FromQuery] int? companyId = null,
            [FromQuery] int? brandId = null,
            [FromQuery] bool includeInactive = false)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var spec = new AgriculturalMachineProductsWithSpec(companyId, brandId, includeInactive);
            var products = await _unitOfWork.Repository<AgriculturalMachineProduct>().ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<AgriculturalMachineProduct>, IReadOnlyList<AgriculturalMachineProductDto>>(products));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<AgriculturalMachineProductDto>> GetAgriculturalMachineProduct(int id)
        {
            var spec = new AgriculturalMachineProductsWithSpec(id, false);
            var product = await _unitOfWork.Repository<AgriculturalMachineProduct>().GetEntityWithSpec(spec);
            if (product == null) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<AgriculturalMachineProduct, AgriculturalMachineProductDto>(product));
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<AgriculturalMachineProductDto>> Create([FromBody] CreateAgriculturalMachineProductDto dto)
        {
            var product = _mapper.Map<CreateAgriculturalMachineProductDto, AgriculturalMachineProduct>(dto);
            _unitOfWork.Repository<AgriculturalMachineProduct>().Add(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem creating product"));
            var spec = new AgriculturalMachineProductsWithSpec(product.Id, true);
            var created = await _unitOfWork.Repository<AgriculturalMachineProduct>().GetEntityWithSpec(spec);
            return CreatedAtAction(nameof(GetAgriculturalMachineProduct), new { id = product.Id },
                _mapper.Map<AgriculturalMachineProduct, AgriculturalMachineProductDto>(created));
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<AgriculturalMachineProductDto>> Update(int id, [FromBody] UpdateAgriculturalMachineProductDto dto)
        {
            if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
            var product = await _unitOfWork.Repository<AgriculturalMachineProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            _mapper.Map(dto, product);
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<AgriculturalMachineProduct>().Update(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem updating product"));
            var spec = new AgriculturalMachineProductsWithSpec(id, true);
            var updated = await _unitOfWork.Repository<AgriculturalMachineProduct>().GetEntityWithSpec(spec);
            return Ok(_mapper.Map<AgriculturalMachineProduct, AgriculturalMachineProductDto>(updated));
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Delete(int id)
        {
            var product = await _unitOfWork.Repository<AgriculturalMachineProduct>().GetByIdAsync(id);
            if (product == null) return NotFound(new ApiResponse(404));
            product.IsUsed = false;
            product.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<AgriculturalMachineProduct>().Update(product);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting product"));
            return Ok();
        }
    }
}
