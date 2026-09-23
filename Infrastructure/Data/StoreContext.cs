using System;
using System.Linq;
using System.Text.Json;
using Core.Entities;
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
        public DbSet<ElectricalApplianceProduct> ElectricalApplianceProducts { get; set; }
        public DbSet<EntityImage> EntityImages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
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

            modelBuilder.Entity<ElectricalApplianceProduct>()
                .Property(p => p.Type)
                .HasConversion<string>();

            ConfigureMetadata(modelBuilder.Entity<Brand>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<Company>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<ElectricBikeProduct>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<AgriculturalMachineProduct>().Property(e => e.Metadata));
            ConfigureMetadata(modelBuilder.Entity<ElectricalApplianceProduct>().Property(e => e.Metadata));

            SeedElectricalApplianceCatalog(modelBuilder);

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var isUsed = entityType.FindProperty(nameof(BaseEntity.IsUsed));
                isUsed?.SetDefaultValue(true);
            }

            modelBuilder.Entity<EntityImage>(builder =>
            {
                builder.Property(x => x.RelativePath).IsRequired().HasMaxLength(512);
                builder.Property(x => x.OriginalFileName).IsRequired().HasMaxLength(255);
                builder.Property(x => x.MimeType).IsRequired().HasMaxLength(100);
                builder.HasIndex(x => x.RelativePath).IsUnique();
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

        private static void SeedElectricalApplianceCatalog(ModelBuilder modelBuilder)
        {
            const string companyId = "company-seed-electrical-001";
            const string brandId = "brand-seed-electrical-001";
            var seededAt = new DateTime(2026, 9, 23, 0, 0, 0, DateTimeKind.Utc);

            modelBuilder.Entity<Company>().HasData(new Company
            {
                Id = companyId,
                Name = "Điện Cơ Dân Dụng Việt",
                Description = "Đơn vị phân phối thiết bị điện cơ và điện dân dụng.",
                LogoUrl = "/assets/images/img-ph.jpg",
                Address = "Việt Nam",
                PhoneNumber = "0900000000",
                Email = "dienco@example.com",
                Website = string.Empty,
                Metadata = new Dictionary<string, string>(),
                CreatedAt = seededAt,
                UpdatedAt = seededAt,
                IsUsed = true
            });

            modelBuilder.Entity<Brand>().HasData(new Brand
            {
                Id = brandId,
                Name = "Điện Cơ Việt",
                Description = "Thương hiệu mẫu cho danh mục đồ điện gia dụng.",
                LogoUrl = "/assets/images/img-ph.jpg",
                Metadata = new Dictionary<string, string>(),
                CreatedAt = seededAt,
                UpdatedAt = seededAt,
                IsUsed = true
            });

            modelBuilder.Entity<ElectricalApplianceProduct>().HasData(
                SeededAppliance("ea000001-0000-0000-0000-000000000301", "Máy rửa xe", "RX-1800", ElectricalApplianceType.PressureWasher, 2_490_000m, 12, "1800W", "220V", "8 lít/phút", companyId, brandId, seededAt),
                SeededAppliance("ea000002-0000-0000-0000-000000000302", "Dụng cụ cầm tay", "DCT-21V", ElectricalApplianceType.HandTool, 1_290_000m, 25, "650W", "21V", null, companyId, brandId, seededAt),
                SeededAppliance("ea000003-0000-0000-0000-000000000303", "Máy xây dựng", "MXD-2200", ElectricalApplianceType.ConstructionMachine, 5_890_000m, 7, "2200W", "220V", null, companyId, brandId, seededAt),
                SeededAppliance("ea000004-0000-0000-0000-000000000304", "Mô Tơ", "MT-3HP", ElectricalApplianceType.Motor, 3_450_000m, 10, "3HP", "220V", null, companyId, brandId, seededAt),
                SeededAppliance("ea000005-0000-0000-0000-000000000305", "Máy Bơm", "MB-125", ElectricalApplianceType.WaterPump, 2_190_000m, 15, "125W", "220V", "30 lít/phút", companyId, brandId, seededAt),
                SeededAppliance("ea000006-0000-0000-0000-000000000306", "Ắc quy các loại", "AQ-12V", ElectricalApplianceType.Battery, 1_850_000m, 20, null, "12V", "45Ah", companyId, brandId, seededAt));
        }

        private static ElectricalApplianceProduct SeededAppliance(
            string id,
            string name,
            string model,
            ElectricalApplianceType type,
            decimal price,
            int stockQuantity,
            string? power,
            string? voltage,
            string? capacity,
            string companyId,
            string brandId,
            DateTime seededAt)
        {
            return new ElectricalApplianceProduct
            {
                Id = id,
                Name = name,
                Brand = "Điện Cơ Việt",
                Model = model,
                Type = type,
                Description = $"Sản phẩm mẫu thuộc nhóm {name}.",
                Price = price,
                StockQuantity = stockQuantity,
                PictureUrl = "/assets/images/img-ph.jpg",
                Power = power,
                Voltage = voltage,
                Capacity = capacity,
                Compatibility = null,
                CompanyId = companyId,
                BrandId = brandId,
                Metadata = new Dictionary<string, string> { ["warrantyMonths"] = "12" },
                CreatedAt = seededAt,
                UpdatedAt = seededAt,
                IsUsed = true
            };
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
