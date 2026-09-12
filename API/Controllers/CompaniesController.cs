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
    public class CompaniesController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly StoreContext _context;

        public CompaniesController(IUnitOfWork unitOfWork, IMapper mapper, StoreContext context)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<CompanyDto>>> GetCompanies([FromQuery] bool includeInactive = false)
        {
            if (includeInactive && User.Identity?.IsAuthenticated != true) return Unauthorized();
            var companies = await _unitOfWork.Repository<Company>().ListAllAsync();
            if (!includeInactive) companies = companies.Where(x => x.IsUsed).ToList();
            return Ok(_mapper.Map<IReadOnlyList<Company>, IReadOnlyList<CompanyDto>>(companies));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CompanyDto>> GetCompany(string id)
        {
            var company = await _unitOfWork.Repository<Company>().GetByIdAsync(id);
            if (company == null || !company.IsUsed) return NotFound(new ApiResponse(404));
            return Ok(_mapper.Map<Company, CompanyDto>(company));
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<CompanyDto>> CreateCompany([FromBody] CreateCompanyDto dto)
        {
            var company = _mapper.Map<CreateCompanyDto, Company>(dto);
            _unitOfWork.Repository<Company>().Add(company);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem creating company"));
            return CreatedAtAction(nameof(GetCompany), new { id = company.Id }, _mapper.Map<Company, CompanyDto>(company));
        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CompanyDto>> UpdateCompany(string id, [FromBody] CreateCompanyDto dto)
        {
            var company = await _unitOfWork.Repository<Company>().GetByIdAsync(id);
            if (company == null) return NotFound(new ApiResponse(404));
            company.UpdatedAt = DateTime.UtcNow;
            _mapper.Map(dto, company);
            _unitOfWork.Repository<Company>().Update(company);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem updating company"));
            return Ok(_mapper.Map<Company, CompanyDto>(company));
        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteCompany(string id)
        {
            var company = await _unitOfWork.Repository<Company>().GetByIdAsync(id);
            if (company == null) return NotFound(new ApiResponse(404));
            var hasActiveProducts = await _context.ElectricBikeProducts.AnyAsync(x => x.CompanyId == id && x.IsUsed)
                || await _context.AgriculturalMachineProducts.AnyAsync(x => x.CompanyId == id && x.IsUsed);
            if (hasActiveProducts) return Conflict(new ApiResponse(409, "Deactivate the company's active products first."));
            company.IsUsed = false;
            company.UpdatedAt = DateTime.UtcNow;
            _unitOfWork.Repository<Company>().Update(company);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting company"));
            return Ok();
        }
    }
}
