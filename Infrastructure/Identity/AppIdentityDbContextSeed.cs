using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (userManager.Users.Any())
            {
                return;
            }

            var seedUsers = new List<AppUser>
            {
                new AppUser
                {
                    DisplayName = "Admin",
                    Email = "admin@gmail.com",
                    UserName = "admin",
                    Address = new Address
                    {
                        FirstName = "Admin",
                        LastName = "User",
                        Street = "20 Main Street",
                        City = "Los Angeles",
                        State = "CA",
                        Zipcode = "90001"
                    }
                }
            };

            foreach (var user in seedUsers)
            {
                var password = user.Email == "admin@test.com" ? "Admin@123" : "Pa$$w0rd";
                var result = await userManager.CreateAsync(user, password);

                if (!result.Succeeded)
                {
                    throw new System.Exception($"Failed to seed user {user.Email}: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                }
            }
        }
    }
}