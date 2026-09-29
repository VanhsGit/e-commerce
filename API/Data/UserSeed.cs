using System;
using System.Linq;
using System.Threading.Tasks;
using API.Helpers;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace API.Data
{
    /// <summary>
    /// Seeds the built-in admin account, the four application roles, and (optionally) a
    /// handful of demo accounts so the password-login feature can be exercised on a fresh
    /// database without running the scripts/update-user-password-login.sql script by hand.
    /// Runs on every startup, in every environment (demo users are gated separately).
    /// </summary>
    public static class UserSeed
    {
        private const string AdminEmail = "vanhspc@gmail.com";

        public static async Task SeedAsync(
            UserManager<AppUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration config,
            ILoggerFactory loggerFactory)
        {
            var logger = loggerFactory.CreateLogger("UserSeed");

            await SeedRolesAsync(roleManager, logger);
            await SeedAdminAsync(userManager, config, logger);
            await SeedDemoUsersAsync(userManager, config, logger);
        }

        private static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager, ILogger logger)
        {
            foreach (var role in AppRoles.All)
            {
                if (await roleManager.RoleExistsAsync(role)) continue;

                var result = await roleManager.CreateAsync(new IdentityRole(role));
                if (result.Succeeded)
                {
                    logger.LogInformation("Seeded role {Role}", role);
                }
                else
                {
                    logger.LogError(
                        "Failed to seed role {Role}: {Errors}",
                        role,
                        string.Join("; ", result.Errors.Select(e => e.Description)));
                }
            }
        }

        private static async Task SeedAdminAsync(UserManager<AppUser> userManager, IConfiguration config, ILogger logger)
        {
            var adminPassword = config["Seed:AdminPassword"];
            var existing = await userManager.FindByEmailAsync(AdminEmail);

            if (existing == null)
            {
                var user = new AppUser
                {
                    DisplayName = "Vanh Admin",
                    UserName = AdminEmail,
                    Email = AdminEmail,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true,
                    IsUsed = true,
                    SecurityStamp = Guid.NewGuid().ToString("D")
                };

                var result = string.IsNullOrWhiteSpace(adminPassword)
                    ? await userManager.CreateAsync(user)
                    : await userManager.CreateAsync(user, adminPassword);

                if (result.Succeeded)
                {
                    logger.LogInformation(
                        "Seeded admin user {Email} ({LoginMode})",
                        AdminEmail,
                        string.IsNullOrWhiteSpace(adminPassword) ? "OTP-only login, no password" : "password login enabled");
                    await EnsureAdminRoleAsync(userManager, user, logger);
                }
                else
                {
                    logger.LogError(
                        "Failed to seed admin user {Email}: {Errors}",
                        AdminEmail,
                        string.Join("; ", result.Errors.Select(e => e.Description)));
                }
                return;
            }

            logger.LogInformation("Admin user {Email} already exists — skip creation", AdminEmail);

            if (string.IsNullOrEmpty(existing.PasswordHash) && !string.IsNullOrWhiteSpace(adminPassword))
            {
                var addResult = await userManager.AddPasswordAsync(existing, adminPassword);
                if (addResult.Succeeded)
                {
                    logger.LogInformation("Set password login for existing admin user {Email}", AdminEmail);
                }
                else
                {
                    logger.LogError(
                        "Failed to set password for admin user {Email}: {Errors}",
                        AdminEmail,
                        string.Join("; ", addResult.Errors.Select(e => e.Description)));
                }
            }

            await EnsureAdminRoleAsync(userManager, existing, logger);
        }

        /// <summary>Makes sure <paramref name="user"/> is in the Admin role, without touching any other roles they may hold.</summary>
        private static async Task EnsureAdminRoleAsync(UserManager<AppUser> userManager, AppUser user, ILogger logger)
        {
            if (await userManager.IsInRoleAsync(user, AppRoles.Admin)) return;

            var result = await userManager.AddToRoleAsync(user, AppRoles.Admin);
            if (result.Succeeded)
            {
                logger.LogInformation("Assigned role {Role} to {Email}", AppRoles.Admin, user.Email);
            }
            else
            {
                logger.LogError(
                    "Failed to assign role {Role} to {Email}: {Errors}",
                    AppRoles.Admin,
                    user.Email,
                    string.Join("; ", result.Errors.Select(e => e.Description)));
            }
        }

        private static async Task SeedDemoUsersAsync(UserManager<AppUser> userManager, IConfiguration config, ILogger logger)
        {
            if (!config.GetValue<bool>("Seed:SeedDemoUsers"))
            {
                logger.LogInformation("Seed:SeedDemoUsers is disabled — skip demo user seeding");
                return;
            }

            var demoPassword = config["Seed:DemoPassword"];
            if (string.IsNullOrWhiteSpace(demoPassword))
            {
                logger.LogWarning("Seed:DemoPassword is not configured — skip demo user seeding");
                return;
            }

            var demoUsers = new[]
            {
                new DemoUser("nhanvien.kho@vanhaste.vn", "Nguyễn Văn Kho", "0901000001", true, AppRoles.Staff),
                new DemoUser("nhanvien.banhang@vanhaste.vn", "Trần Thị Bán Hàng", "0901000002", true, AppRoles.Staff),
                new DemoUser("ketoan@vanhaste.vn", "Lê Minh Kế Toán", "0901000003", true, AppRoles.Manager),
                new DemoUser("nghiviec@vanhaste.vn", "Phạm Văn Nghỉ Việc", "0901000004", false, AppRoles.Staff),
            };

            foreach (var demo in demoUsers)
            {
                var existing = await userManager.FindByEmailAsync(demo.Email);
                if (existing != null)
                {
                    logger.LogInformation("Demo user {Email} already exists — skip", demo.Email);
                    await EnsureDemoRoleAsync(userManager, existing, demo.Role, logger);
                    continue;
                }

                var user = new AppUser
                {
                    DisplayName = demo.DisplayName,
                    UserName = demo.Email,
                    Email = demo.Email,
                    PhoneNumber = demo.Phone,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true,
                    IsUsed = demo.IsUsed,
                    SecurityStamp = Guid.NewGuid().ToString("D")
                };

                var result = await userManager.CreateAsync(user, demoPassword);
                if (result.Succeeded)
                {
                    logger.LogInformation(
                        "Seeded demo user {Email} ({DisplayName}, IsUsed={IsUsed})",
                        demo.Email, demo.DisplayName, demo.IsUsed);
                    await EnsureDemoRoleAsync(userManager, user, demo.Role, logger);
                }
                else
                {
                    logger.LogError(
                        "Failed to seed demo user {Email}: {Errors}",
                        demo.Email,
                        string.Join("; ", result.Errors.Select(e => e.Description)));
                }
            }
        }

        /// <summary>
        /// Makes sure <paramref name="user"/> has <paramref name="role"/>. Also covers a demo
        /// user that already existed in the database (e.g. an earlier dev DB seeded before
        /// roles existed) but currently has no roles at all.
        /// </summary>
        private static async Task EnsureDemoRoleAsync(UserManager<AppUser> userManager, AppUser user, string role, ILogger logger)
        {
            var currentRoles = await userManager.GetRolesAsync(user);
            if (currentRoles.Count > 0) return;

            var result = await userManager.AddToRoleAsync(user, role);
            if (result.Succeeded)
            {
                logger.LogInformation("Assigned role {Role} to demo user {Email}", role, user.Email);
            }
            else
            {
                logger.LogError(
                    "Failed to assign role {Role} to demo user {Email}: {Errors}",
                    role,
                    user.Email,
                    string.Join("; ", result.Errors.Select(e => e.Description)));
            }
        }

        private sealed record DemoUser(string Email, string DisplayName, string Phone, bool IsUsed, string Role);
    }
}
