using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Brands.Any())
                {
                    var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/seed-brands.json");
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    var brands = JsonSerializer.Deserialize<List<Brand>>(brandsData, jsonOptions);
                    foreach (var item in brands)
                    {
                        context.Brands.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.Companies.Any())
                {
                    var companiesData = File.ReadAllText("../Infrastructure/Data/SeedData/seed-companies.json");
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    var companies = JsonSerializer.Deserialize<List<Company>>(companiesData, jsonOptions);
                    foreach (var item in companies)
                    {
                        context.Companies.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.ElectricBikeProducts.Any())
                {
                    var bikesData = File.ReadAllText("../Infrastructure/Data/SeedData/seed-electric-bikes.json");
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    var bikes = JsonSerializer.Deserialize<List<ElectricBikeProduct>>(bikesData, jsonOptions);
                    foreach (var item in bikes)
                    {
                        context.ElectricBikeProducts.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.AgriculturalMachineProducts.Any())
                {
                    var machinesData = File.ReadAllText("../Infrastructure/Data/SeedData/seed-agricultural-machines.json");
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    var machines = JsonSerializer.Deserialize<List<AgriculturalMachineProduct>>(machinesData, jsonOptions);
                    foreach (var item in machines)
                    {
                        context.AgriculturalMachineProducts.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}