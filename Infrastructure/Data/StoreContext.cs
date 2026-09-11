using System;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
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
        public DbSet<EntityImage> EntityImages { get; set; }

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

            ConfigureMetadata(modelBuilder.Entity<Brand>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<Company>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<ElectricBikeProduct>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<AgriculturalMachineProduct>().Property(e => e.Metadata));

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var isUsed = entityType.FindProperty(nameof(BaseEntity.IsUsed));
                isUsed?.SetDefaultValue(true);
            }

            modelBuilder.Entity<EntityImage>(builder =>
            {
                builder.Property(x => x.EntityType).HasConversion<string>().HasMaxLength(64);
                builder.Property(x => x.EntityId).IsRequired().HasMaxLength(128);
                builder.Property(x => x.ImageType).IsRequired().HasMaxLength(64);
                builder.Property(x => x.RelativePath).IsRequired().HasMaxLength(512);
                builder.Property(x => x.OriginalFileName).IsRequired().HasMaxLength(255);
                builder.Property(x => x.MimeType).IsRequired().HasMaxLength(100);
                builder.HasIndex(x => x.RelativePath).IsUnique();
                builder.HasIndex(x => new
                {
                    x.EntityType,
                    x.EntityId,
                    x.ImageType,
                    x.IsUsed,
                    x.SortOrder
                });
            });
        }

        private void ConfigureMetadata(
            Microsoft.EntityFrameworkCore.Metadata.Builders.PropertyBuilder<System.Collections.Generic.Dictionary<string, string>> property)
        {
            var comparer = new ValueComparer<System.Collections.Generic.Dictionary<string, string>>(
                (left, right) => DictionariesEqual(left, right),
                value => DictionaryHashCode(value),
                value => value == null
                    ? new System.Collections.Generic.Dictionary<string, string>()
                    : value.ToDictionary(pair => pair.Key, pair => pair.Value));

            property
                .HasColumnType(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "TEXT" : "jsonb")
                .HasDefaultValueSql(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "'{}'" : "'{}'::jsonb")
                .HasConversion(
                    value => JsonSerializer.Serialize(value, (JsonSerializerOptions)null!),
                    value => string.IsNullOrWhiteSpace(value)
                        ? new System.Collections.Generic.Dictionary<string, string>()
                        : JsonSerializer.Deserialize<System.Collections.Generic.Dictionary<string, string>>(value, (JsonSerializerOptions)null!)
                            ?? new System.Collections.Generic.Dictionary<string, string>())
                .Metadata.SetValueComparer(comparer);
        }

        private static bool DictionariesEqual(
            System.Collections.Generic.Dictionary<string, string>? left,
            System.Collections.Generic.Dictionary<string, string>? right)
        {
            if (ReferenceEquals(left, right)) return true;
            if (left == null || right == null || left.Count != right.Count) return false;
            return left.All(pair => right.TryGetValue(pair.Key, out var value) && value == pair.Value);
        }

        private static int DictionaryHashCode(System.Collections.Generic.Dictionary<string, string>? value)
        {
            if (value == null) return 0;
            var hash = new HashCode();
            foreach (var pair in value.OrderBy(pair => pair.Key, StringComparer.Ordinal))
            {
                hash.Add(pair.Key, StringComparer.Ordinal);
                hash.Add(pair.Value, StringComparer.Ordinal);
            }
            return hash.ToHashCode();
        }
    }
}
