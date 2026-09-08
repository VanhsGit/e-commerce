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
    public class CompaniesController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CompaniesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [Cached(600)]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<CompanyDto>>> GetCompanies()
        {
            var companies = await _unitOfWork.Repository<Company>().ListAllAsync();
            return Ok(_mapper.Map<IReadOnlyList<Company>, IReadOnlyList<CompanyDto>>(companies));
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CompanyDto>> GetCompany(int id)
        {
            var company = await _unitOfWork.Repository<Company>().GetByIdAsync(id);
            if (company == null) return NotFound(new ApiResponse(404));
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
        public async Task<ActionResult<CompanyDto>> UpdateCompany(int id, [FromBody] CreateCompanyDto dto)
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
        public async Task<ActionResult> DeleteCompany(int id)
        {
            var company = await _unitOfWork.Repository<Company>().GetByIdAsync(id);
            if (company == null) return NotFound(new ApiResponse(404));
            _unitOfWork.Repository<Company>().Delete(company);
            var result = await _unitOfWork.Complete();
            if (result <= 0) return BadRequest(new ApiResponse(400, "Problem deleting company"));
            return Ok();
        }
    }
}
