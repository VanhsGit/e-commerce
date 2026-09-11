using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    [Route("api/admin/users")]
    public class AdminUsersController : ControllerBase
    {
        private readonly UserManager<AppUser> _users;
        public AdminUsersController(UserManager<AppUser> users) => _users = users;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AdminUserDto>>> List(CancellationToken cancellationToken)
        {
            return Ok(await _users.Users.AsNoTracking().OrderBy(x => x.Email).Select(x => new AdminUserDto
            {
                Id = x.Id,
                Email = x.Email ?? string.Empty,
                DisplayName = x.DisplayName,
                IsUsed = x.IsUsed
            }).ToListAsync(cancellationToken));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AdminUserDto>> Get(string id)
        {
            var user = await _users.FindByIdAsync(id);
            return user == null ? NotFound() : Ok(ToDto(user));
        }

        [HttpPost]
        public async Task<ActionResult<AdminUserDto>> Create(CreateUserDto dto)
        {
            if (await _users.FindByEmailAsync(dto.Email) != null) return Conflict("Email address is already in use.");
            var user = new AppUser
            {
                Email = dto.Email.Trim(),
                UserName = dto.Email.Trim(),
                DisplayName = dto.DisplayName?.Trim() ?? string.Empty,
                IsUsed = dto.IsUsed
            };
            var result = await _users.CreateAsync(user);
            if (!result.Succeeded) return BadRequest(result.Errors.Select(x => x.Description));
            return CreatedAtAction(nameof(Get), new { id = user.Id }, ToDto(user));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<AdminUserDto>> Update(string id, UpdateAdminUserDto dto)
        {
            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound();
            var duplicate = await _users.FindByEmailAsync(dto.Email);
            if (duplicate != null && duplicate.Id != id) return Conflict("Email address is already in use.");

            var currentEmail = User.FindFirstValue(ClaimTypes.Email);
            if (!dto.IsUsed && string.Equals(currentEmail, user.Email, System.StringComparison.OrdinalIgnoreCase))
                return Conflict("You cannot deactivate the account used by the current session.");

            user.Email = dto.Email.Trim();
            user.UserName = dto.Email.Trim();
            user.DisplayName = dto.DisplayName?.Trim() ?? string.Empty;
            user.IsUsed = dto.IsUsed;
            var result = await _users.UpdateAsync(user);
            if (!result.Succeeded) return BadRequest(result.Errors.Select(x => x.Description));
            return Ok(ToDto(user));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound();
            var currentEmail = User.FindFirstValue(ClaimTypes.Email);
            if (string.Equals(currentEmail, user.Email, System.StringComparison.OrdinalIgnoreCase))
                return Conflict("You cannot deactivate the account used by the current session.");
            user.IsUsed = false;
            var result = await _users.UpdateAsync(user);
            return result.Succeeded ? NoContent() : BadRequest(result.Errors.Select(x => x.Description));
        }

        private static AdminUserDto ToDto(AppUser user) => new()
        {
            Id = user.Id,
            Email = user.Email ?? string.Empty,
            DisplayName = user.DisplayName,
            IsUsed = user.IsUsed
        };
    }
}
