using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IOtpService _otpService;
        private readonly IMapper _mapper;
        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, IMapper mapper, IOtpService otpService)
        {
            _mapper = mapper;
            _tokenService = tokenService;
            _userManager = userManager;
            _otpService = otpService;

        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {

            var user = await _userManager.FindByEmailFromClaimsPrincipal(HttpContext.User);

            if (user == null || !user.IsUsed) return Unauthorized(new ApiResponse(401));
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetUserAddress()
        {
            var user = await _userManager.FindByEmailWithAddressAsync(HttpContext.User);

            return _mapper.Map<Address, AddressDto>(user.Address);
        }

        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDto>> UpdateUserAddress(AddressDto address)
        {
            var user = await _userManager.FindByEmailWithAddressAsync(HttpContext.User);

            user.Address = _mapper.Map<AddressDto, Address>(address);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded) return Ok(_mapper.Map<Address, AddressDto>(user.Address));

            return BadRequest("Problem updating the user");
        }

        [HttpPost("request-otp")]
        public async Task<ActionResult<OtpAcceptedDto>> RequestOtp(RequestOtpDto request, CancellationToken cancellationToken)
        {
            await _otpService.RequestAsync(request.Email, HttpContext.Connection.RemoteIpAddress?.ToString(), cancellationToken);
            return Accepted(new OtpAcceptedDto());
        }

        [HttpPost("verify-otp")]
        public async Task<ActionResult<UserDto>> VerifyOtp(VerifyOtpDto request, CancellationToken cancellationToken)
        {
            var user = await _otpService.VerifyAsync(request.Email, request.Code, cancellationToken);
            if (user == null) return Unauthorized(new ApiResponse(401, "Invalid or expired verification code."));
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
        }

        [Authorize]
        [HttpPost("admin/create-user")]
        public async Task<ActionResult<UserDto>> CreateUserForAdmin(CreateUserDto createUserDto)
        {
            if (await _userManager.FindByEmailAsync(createUserDto.Email) != null)
            {
                return new BadRequestObjectResult(new ApiValidationErrorResponse
                {
                    Errors = new[] { "Email address already is in use" }
                });
            }

            var user = new AppUser
            {
                DisplayName = createUserDto.DisplayName,
                Email = createUserDto.Email,
                UserName = createUserDto.Email,
                PhoneNumber = createUserDto.PhoneNumber,
                AvatarUrl = createUserDto.AvatarUrl,
                IsUsed = createUserDto.IsUsed
            };

            var result = await _userManager.CreateAsync(user);

            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(new ApiValidationErrorResponse
                {
                    Errors = result.Errors.Select(e => e.Description).ToArray()
                });
            }

            return Ok(new UserDto
            {
                DisplayName = user.DisplayName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            });
        }

    }
}
