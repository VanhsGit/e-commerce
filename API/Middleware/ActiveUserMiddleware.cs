using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace API.Middleware
{
    public class ActiveUserMiddleware
    {
        private readonly RequestDelegate _next;
        public ActiveUserMiddleware(RequestDelegate next) => _next = next;

        public async Task InvokeAsync(HttpContext context, UserManager<AppUser> users)
        {
            if (context.User.Identity?.IsAuthenticated == true)
            {
                var email = context.User.FindFirstValue(ClaimTypes.Email)
                    ?? context.User.Claims.FirstOrDefault(x => x.Type == "email")?.Value;
                var user = string.IsNullOrWhiteSpace(email) ? null : await users.FindByEmailAsync(email);
                if (user == null || !user.IsUsed)
                {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    return;
                }
            }
            await _next(context);
        }
    }
}
