using System;
using System.Linq;
using System.Reflection;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<ElectricBikeProduct> ElectricBikeProducts { get; set; }
        public DbSet<AgriculturalMachineProduct> AgriculturalMachineProducts { get; set; }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(decimal));
                    var dateTimeProperties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(DateTimeOffset));

                    foreach (var property in properties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion<double>();
                    }

                    foreach (var property in dateTimeProperties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
            }

            modelBuilder.Entity<ElectricBikeProduct>()
                .Property(p => p.Category)
                .HasConversion<string>();

            modelBuilder.Entity<AgriculturalMachineProduct>()
                .Property(p => p.Category)
                .HasConversion<string>();

            modelBuilder.Entity<Company>()
                .Property(e => e.Metadata)
                .HasColumnType("jsonb")
                .HasConversion(
                    v => System.Text.Json.JsonSerializer.Serialize(v, (System.Text.Json.JsonSerializerOptions)null!),
                    v => string.IsNullOrEmpty(v)
                        ? new System.Collections.Generic.Dictionary<string, object>()
                        : System.Text.Json.JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, object>>(v, (System.Text.Json.JsonSerializerOptions)null!)
                           ?? new System.Collections.Generic.Dictionary<string, object>());

            modelBuilder.Entity<Brand>()
                .Property(e => e.Metadata)
                .HasColumnType("jsonb")
                .HasConversion(
                    v => System.Text.Json.JsonSerializer.Serialize(v, (System.Text.Json.JsonSerializerOptions)null!),
                    v => string.IsNullOrEmpty(v)
                        ? new System.Collections.Generic.Dictionary<string, object>()
                        : System.Text.Json.JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, object>>(v, (System.Text.Json.JsonSerializerOptions)null!)
                           ?? new System.Collections.Generic.Dictionary<string, object>());

            modelBuilder.Entity<ElectricBikeProduct>()
                .Property(e => e.Metadata)
                .HasColumnType("jsonb")
                .HasConversion(
                    v => System.Text.Json.JsonSerializer.Serialize(v, (System.Text.Json.JsonSerializerOptions)null!),
                    v => string.IsNullOrEmpty(v)
                        ? new System.Collections.Generic.Dictionary<string, object>()
                        : System.Text.Json.JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, object>>(v, (System.Text.Json.JsonSerializerOptions)null!)
                           ?? new System.Collections.Generic.Dictionary<string, object>());

            modelBuilder.Entity<AgriculturalMachineProduct>()
                .Property(e => e.Metadata)
                .HasColumnType("jsonb")
                .HasConversion(
                    v => System.Text.Json.JsonSerializer.Serialize(v, (System.Text.Json.JsonSerializerOptions)null!),
                    v => string.IsNullOrEmpty(v)
                        ? new System.Collections.Generic.Dictionary<string, object>()
                        : System.Text.Json.JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, object>>(v, (System.Text.Json.JsonSerializerOptions)null!)
                           ?? new System.Collections.Generic.Dictionary<string, object>());
        }
    }
}