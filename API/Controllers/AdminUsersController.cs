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
        public async Task<ActionResult<IReadOnlyList<AdminUserDto>>> List(
            [FromQuery] string? search = null,
            [FromQuery] bool? isUsed = null,
            [FromQuery] string? role = null,
            CancellationToken cancellationToken = default)
        {
            var query = _users.Users.AsNoTracking();
            if (isUsed.HasValue) query = query.Where(x => x.IsUsed == isUsed.Value);
            if (!string.IsNullOrWhiteSpace(search))
            {
                var s = search.Trim().ToLower();
                query = query.Where(x =>
                    (x.Email != null && x.Email.ToLower().Contains(s)) ||
                    (x.DisplayName != null && x.DisplayName.ToLower().Contains(s)) ||
                    (x.PhoneNumber != null && x.PhoneNumber.ToLower().Contains(s)));
            }
            query = query.OrderBy(x => x.Email);
            var users = await query.ToListAsync(cancellationToken);

            var roleTasks = users.Select(async u => new
            {
                User = u,
                Roles = (IReadOnlyList<string>)await _users.GetRolesAsync(u)
            });
            var withRoles = await Task.WhenAll(roleTasks);

            if (!string.IsNullOrWhiteSpace(role))
            {
                withRoles = withRoles.Where(x => x.Roles.Contains(role, System.StringComparer.OrdinalIgnoreCase)).ToArray();
            }

            return Ok(withRoles.Select(x => new AdminUserDto
            {
                Id = x.User.Id,
                Email = x.User.Email ?? string.Empty,
                DisplayName = x.User.DisplayName,
                PhoneNumber = x.User.PhoneNumber,
                AvatarUrl = x.User.AvatarUrl,
                IsUsed = x.User.IsUsed,
                Roles = x.Roles
            }).ToList());
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
                PhoneNumber = dto.PhoneNumber?.Trim(),
                AvatarUrl = dto.AvatarUrl?.Trim(),
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
            user.PhoneNumber = dto.PhoneNumber?.Trim();
            user.AvatarUrl = dto.AvatarUrl?.Trim();
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
            PhoneNumber = user.PhoneNumber,
            AvatarUrl = user.AvatarUrl,
            IsUsed = user.IsUsed
        };
    }
}
