using System;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var context = services.GetRequiredService<StoreContext>();
                    await context.Database.MigrateAsync();

                    var identityContext = services.GetRequiredService<AppIdentityDbContext>();
                    await identityContext.Database.MigrateAsync();

                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    await SeedDefaultUserAsync(userManager, loggerFactory);
                }
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "An error occured during migration or seed");
                }
            }

            host.Run();
        }

        private static async Task SeedDefaultUserAsync(UserManager<AppUser> userManager, ILoggerFactory loggerFactory)
        {
            var logger = loggerFactory.CreateLogger("UserSeed");
            const string email = "vanhspc@gmail.com";

            var existing = await userManager.FindByEmailAsync(email);
            if (existing != null)
            {
                logger.LogInformation("User {Email} already exists — skip seed", email);
                return;
            }

            var user = new AppUser
            {
                DisplayName = "Vanh Admin",
                UserName = email,
                Email = email,
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                IsUsed = true,
                SecurityStamp = Guid.NewGuid().ToString("D")
            };

            var result = await userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                logger.LogInformation("Seeded default user {Email} (OTP-only login, no password)", email);
            }
            else
            {
                var errors = string.Join("; ", result.Errors.Select(e => e.Description));
                logger.LogError("Failed to seed user {Email}: {Errors}", email, errors);
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
