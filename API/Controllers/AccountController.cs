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
using Microsoft.Extensions.Hosting;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IOtpService _otpService;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _environment;

        public AccountController(
            UserManager<AppUser> userManager,
            ITokenService tokenService,
            IMapper mapper,
            IOtpService otpService,
            IWebHostEnvironment environment)
        {
            _mapper = mapper;
            _tokenService = tokenService;
            _userManager = userManager;
            _otpService = otpService;
            _environment = environment;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {

            var user = await _userManager.FindByEmailFromClaimsPrincipal(HttpContext.User);

            if (user == null || !user.IsUsed) return Unauthorized(new ApiResponse(401));
            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user, roles),
                DisplayName = user.DisplayName,
                Roles = roles.ToList()
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
            var code = await _otpService.RequestAsync(request.Email, HttpContext.Connection.RemoteIpAddress?.ToString(), cancellationToken);
            return Accepted(new OtpAcceptedDto
            {
                Code = _environment.IsDevelopment() ? code : null
            });
        }

        [HttpPost("verify-otp")]
        public async Task<ActionResult<UserDto>> VerifyOtp(VerifyOtpDto request, CancellationToken cancellationToken)
        {
            var user = await _otpService.VerifyAsync(request.Email, request.Code, cancellationToken);
            if (user == null) return Unauthorized(new ApiResponse(401, "Invalid or expired verification code."));
            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user, roles),
                DisplayName = user.DisplayName,
                Roles = roles.ToList()
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null || !user.IsUsed || string.IsNullOrEmpty(user.PasswordHash))
                return Unauthorized(new ApiResponse(401, "Email hoặc mật khẩu không đúng."));

            if (await _userManager.IsLockedOutAsync(user))
                return Unauthorized(new ApiResponse(401, "Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau 15 phút."));

            var passwordValid = await _userManager.CheckPasswordAsync(user, loginDto.Password);
            if (!passwordValid)
            {
                await _userManager.AccessFailedAsync(user);
                if (await _userManager.IsLockedOutAsync(user))
                    return Unauthorized(new ApiResponse(401, "Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau 15 phút."));

                return Unauthorized(new ApiResponse(401, "Email hoặc mật khẩu không đúng."));
            }

            await _userManager.ResetAccessFailedCountAsync(user);

            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user, roles),
                DisplayName = user.DisplayName,
                Roles = roles.ToList()
            };
        }
    }
}
