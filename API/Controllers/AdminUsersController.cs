using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize(Roles = AppRoles.Admin)]
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
            if (user == null) return NotFound(new ApiResponse(404, "Không tìm thấy người dùng"));
            return Ok(await ToDtoAsync(user));
        }

        [HttpPost]
        public async Task<ActionResult<AdminUserDto>> Create(CreateUserDto dto)
        {
            var modelError = ValidateModel();
            if (modelError != null) return modelError;

            var rolesError = ValidateRoles(dto.Roles);
            if (rolesError != null) return rolesError;

            if (string.IsNullOrWhiteSpace(dto.Password))
            {
                return BadRequest(new ApiValidationErrorResponse
                {
                    Errors = new[] { "Mật khẩu là bắt buộc." },
                    Message = "Dữ liệu không hợp lệ"
                });
            }

            if (await _users.FindByEmailAsync(dto.Email) != null)
                return Conflict(new ApiResponse(409, "Email đã được sử dụng."));

            var user = new AppUser
            {
                Email = dto.Email.Trim(),
                UserName = dto.Email.Trim(),
                DisplayName = dto.DisplayName?.Trim() ?? string.Empty,
                PhoneNumber = dto.PhoneNumber?.Trim(),
                AvatarUrl = dto.AvatarUrl?.Trim(),
                IsUsed = dto.IsUsed,
                EmailConfirmed = true,
                SecurityStamp = Guid.NewGuid().ToString("D")
            };
            var result = await _users.CreateAsync(user, dto.Password);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiValidationErrorResponse
                {
                    Errors = result.Errors.Select(x => x.Description),
                    Message = "Dữ liệu không hợp lệ"
                });
            }

            if (dto.Roles != null && dto.Roles.Count > 0)
            {
                var addRolesResult = await _users.AddToRolesAsync(user, dto.Roles.Distinct());
                if (!addRolesResult.Succeeded)
                {
                    return BadRequest(new ApiValidationErrorResponse
                    {
                        Errors = addRolesResult.Errors.Select(x => x.Description),
                        Message = "Dữ liệu không hợp lệ"
                    });
                }
            }

            return CreatedAtAction(nameof(Get), new { id = user.Id }, await ToDtoAsync(user));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<AdminUserDto>> Update(string id, UpdateAdminUserDto dto)
        {
            var modelError = ValidateModel();
            if (modelError != null) return modelError;

            var rolesError = ValidateRoles(dto.Roles);
            if (rolesError != null) return rolesError;

            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound(new ApiResponse(404, "Không tìm thấy người dùng"));

            var duplicate = await _users.FindByEmailAsync(dto.Email);
            if (duplicate != null && duplicate.Id != id)
                return Conflict(new ApiResponse(409, "Email đã được sử dụng."));

            var currentEmail = User.FindFirstValue(ClaimTypes.Email);
            var isSelf = string.Equals(currentEmail, user.Email, StringComparison.OrdinalIgnoreCase);

            if (!dto.IsUsed && isSelf)
                return Conflict(new ApiResponse(409, "Bạn không thể vô hiệu hóa tài khoản đang đăng nhập."));

            var currentRoles = await _users.GetRolesAsync(user);
            var isRemovingAdmin = dto.Roles != null
                && currentRoles.Contains(AppRoles.Admin)
                && !dto.Roles.Contains(AppRoles.Admin, StringComparer.OrdinalIgnoreCase);
            var isDeactivating = !dto.IsUsed && user.IsUsed;

            if (isRemovingAdmin && isSelf)
                return Conflict(new ApiResponse(409, "Bạn không thể gỡ quyền Admin của chính mình."));

            if ((isRemovingAdmin || isDeactivating) && currentRoles.Contains(AppRoles.Admin))
            {
                var lastActiveAdminError = await LastActiveAdminConflictAsync(user);
                if (lastActiveAdminError != null) return lastActiveAdminError;
            }

            user.Email = dto.Email.Trim();
            user.UserName = dto.Email.Trim();
            user.DisplayName = dto.DisplayName?.Trim() ?? string.Empty;
            user.PhoneNumber = dto.PhoneNumber?.Trim();
            user.AvatarUrl = dto.AvatarUrl?.Trim();
            user.IsUsed = dto.IsUsed;

            if (!string.IsNullOrWhiteSpace(dto.Password))
            {
                var passwordResult = await ReplacePasswordAsync(user, dto.Password);
                if (!passwordResult.Succeeded)
                {
                    return BadRequest(new ApiValidationErrorResponse
                    {
                        Errors = passwordResult.Errors.Select(x => x.Description),
                        Message = "Dữ liệu không hợp lệ"
                    });
                }
            }
            else
            {
                var result = await _users.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    return BadRequest(new ApiValidationErrorResponse
                    {
                        Errors = result.Errors.Select(x => x.Description),
                        Message = "Dữ liệu không hợp lệ"
                    });
                }
            }

            if (dto.Roles != null)
            {
                var rolesResult = await ApplyRolesAsync(user, dto.Roles, currentRoles);
                if (rolesResult != null) return rolesResult;
            }

            return Ok(await ToDtoAsync(user));
        }

        [HttpPost("{id}/reset-password")]
        public async Task<IActionResult> ResetPassword(string id, ResetPasswordDto dto)
        {
            var modelError = ValidateModel();
            if (modelError != null) return modelError;

            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound(new ApiResponse(404, "Không tìm thấy người dùng"));

            var result = await ReplacePasswordAsync(user, dto.NewPassword);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiValidationErrorResponse
                {
                    Errors = result.Errors.Select(x => x.Description),
                    Message = "Dữ liệu không hợp lệ"
                });
            }
            return NoContent();
        }

        [HttpPut("{id}/status")]
        public async Task<ActionResult<AdminUserDto>> UpdateStatus(string id, UpdateUserStatusDto dto)
        {
            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound(new ApiResponse(404, "Không tìm thấy người dùng"));

            var currentEmail = User.FindFirstValue(ClaimTypes.Email);
            if (!dto.IsUsed && string.Equals(currentEmail, user.Email, StringComparison.OrdinalIgnoreCase))
                return Conflict(new ApiResponse(409, "Bạn không thể vô hiệu hóa tài khoản đang đăng nhập."));

            if (!dto.IsUsed && user.IsUsed)
            {
                var lastActiveAdminError = await LastActiveAdminConflictAsync(user);
                if (lastActiveAdminError != null) return lastActiveAdminError;
            }

            user.IsUsed = dto.IsUsed;
            var result = await _users.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiValidationErrorResponse
                {
                    Errors = result.Errors.Select(x => x.Description),
                    Message = "Dữ liệu không hợp lệ"
                });
            }
            return Ok(await ToDtoAsync(user));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _users.FindByIdAsync(id);
            if (user == null) return NotFound(new ApiResponse(404, "Không tìm thấy người dùng"));

            var currentEmail = User.FindFirstValue(ClaimTypes.Email);
            if (string.Equals(currentEmail, user.Email, StringComparison.OrdinalIgnoreCase))
                return Conflict(new ApiResponse(409, "Bạn không thể vô hiệu hóa tài khoản đang đăng nhập."));

            if (user.IsUsed)
            {
                var lastActiveAdminError = await LastActiveAdminConflictAsync(user);
                if (lastActiveAdminError != null) return lastActiveAdminError;
            }

            user.IsUsed = false;
            var result = await _users.UpdateAsync(user);
            if (!result.Succeeded)
            {
                return BadRequest(new ApiValidationErrorResponse
                {
                    Errors = result.Errors.Select(x => x.Description),
                    Message = "Dữ liệu không hợp lệ"
                });
            }
            return NoContent();
        }

        /// <summary>
        /// Replaces a user's password outside of the normal change-password flow (which requires
        /// knowing the current password). Validates the new password against all registered
        /// password validators first so an invalid new password never removes a working one.
        /// Works whether or not the user currently has a password set.
        /// </summary>
        private async Task<IdentityResult> ReplacePasswordAsync(AppUser user, string newPassword)
        {
            foreach (var validator in _users.PasswordValidators)
            {
                var validationResult = await validator.ValidateAsync(_users, user, newPassword);
                if (!validationResult.Succeeded) return validationResult;
            }

            user.PasswordHash = _users.PasswordHasher.HashPassword(user, newPassword);
            await _users.UpdateSecurityStampAsync(user);
            await _users.SetLockoutEndDateAsync(user, null);
            await _users.ResetAccessFailedCountAsync(user);

            return await _users.UpdateAsync(user);
        }

        private static ActionResult? ValidateRoles(List<string>? roles)
        {
            if (roles == null || roles.Count == 0) return null;
            var invalid = roles.Where(r => !AppRoles.IsKnown(r)).Distinct().ToArray();
            if (invalid.Length == 0) return null;

            return new BadRequestObjectResult(new ApiValidationErrorResponse
            {
                Errors = invalid.Select(r => $"Vai trò không hợp lệ: {r}"),
                Message = "Dữ liệu không hợp lệ"
            });
        }

        /// <summary>
        /// Returns a 409 Conflict when <paramref name="user"/> is currently the only active
        /// (IsUsed) member of the Admin role, since removing that role or deactivating the
        /// account would leave the system with no active Admin.
        /// </summary>
        private async Task<ActionResult?> LastActiveAdminConflictAsync(AppUser user)
        {
            var admins = await _users.GetUsersInRoleAsync(AppRoles.Admin);
            var activeAdminCount = admins.Count(a => a.IsUsed);
            var userIsActiveAdmin = user.IsUsed && admins.Any(a => a.Id == user.Id);

            if (userIsActiveAdmin && activeAdminCount <= 1)
                return new ConflictObjectResult(new ApiResponse(409, "Phải còn ít nhất một Admin đang hoạt động."));

            return null;
        }

        /// <summary>
        /// Replaces <paramref name="user"/>'s roles with exactly <paramref name="roles"/>,
        /// diffing against <paramref name="currentRoles"/> so only the delta is written.
        /// </summary>
        private async Task<ActionResult?> ApplyRolesAsync(AppUser user, List<string> roles, IList<string> currentRoles)
        {
            var target = roles.Distinct(StringComparer.OrdinalIgnoreCase).ToList();
            var toRemove = currentRoles.Where(r => !target.Contains(r, StringComparer.OrdinalIgnoreCase)).ToArray();
            var toAdd = target.Where(r => !currentRoles.Contains(r, StringComparer.OrdinalIgnoreCase)).ToArray();

            if (toRemove.Length > 0)
            {
                var removeResult = await _users.RemoveFromRolesAsync(user, toRemove);
                if (!removeResult.Succeeded)
                {
                    return new BadRequestObjectResult(new ApiValidationErrorResponse
                    {
                        Errors = removeResult.Errors.Select(x => x.Description),
                        Message = "Dữ liệu không hợp lệ"
                    });
                }
            }

            if (toAdd.Length > 0)
            {
                var addResult = await _users.AddToRolesAsync(user, toAdd);
                if (!addResult.Succeeded)
                {
                    return new BadRequestObjectResult(new ApiValidationErrorResponse
                    {
                        Errors = addResult.Errors.Select(x => x.Description),
                        Message = "Dữ liệu không hợp lệ"
                    });
                }
            }

            return null;
        }

        private ActionResult? ValidateModel()
        {
            if (ModelState.IsValid) return null;
            var errors = ModelState.Values
                .SelectMany(v => v.Errors.Select(e => e.ErrorMessage))
                .Where(e => !string.IsNullOrWhiteSpace(e))
                .ToArray();
            return BadRequest(new ApiValidationErrorResponse
            {
                Errors = errors,
                Message = "Dữ liệu không hợp lệ"
            });
        }

        private async Task<AdminUserDto> ToDtoAsync(AppUser user)
        {
            var roles = await _users.GetRolesAsync(user);
            return new AdminUserDto
            {
                Id = user.Id,
                Email = user.Email ?? string.Empty,
                DisplayName = user.DisplayName,
                PhoneNumber = user.PhoneNumber,
                AvatarUrl = user.AvatarUrl,
                IsUsed = user.IsUsed,
                Roles = (IReadOnlyList<string>)roles
            };
        }
    }
}
