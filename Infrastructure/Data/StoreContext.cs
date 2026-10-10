using System;
using System.Linq;
using System.Text.Json;
using Core.Entities;
using Core.HomeContent;
using Core.PageContent;
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
        public DbSet<HomePageContent> HomePageContents { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<CategoryPageContent> CategoryPageContents { get; set; }
        public DbSet<SiteSettings> SiteSettings { get; set; }

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

            ConfigureColors(modelBuilder.Entity<ElectricBikeProduct>().Property(e => e.Colors));
            ConfigureColors(modelBuilder.Entity<AgriculturalMachineProduct>().Property(e => e.Colors));
            ConfigureColors(modelBuilder.Entity<ElectricalApplianceProduct>().Property(e => e.Colors));

            modelBuilder.Entity<ElectricBikeProduct>()
                .HasOne(p => p.CategoryEntity).WithMany().HasForeignKey(p => p.CategoryId).OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<AgriculturalMachineProduct>()
                .HasOne(p => p.CategoryEntity).WithMany().HasForeignKey(p => p.CategoryId).OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<ElectricalApplianceProduct>()
                .HasOne(p => p.CategoryEntity).WithMany().HasForeignKey(p => p.CategoryId).OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<ProductCategory>(builder =>
            {
                builder.Property(x => x.Kind).HasConversion<string>();
                builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
                builder.Property(x => x.Slug).IsRequired().HasMaxLength(200);
                // Chỉ danh mục đang dùng mới chiếm slug; slug của danh mục đã xóa mềm được dùng lại.
                builder.HasIndex(x => new { x.Kind, x.Slug })
                    .IsUnique()
                    .HasFilter(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "\"IsUsed\" = 1" : "\"IsUsed\"");
                builder.HasOne(x => x.Parent)
                    .WithMany(x => x.Children)
                    .HasForeignKey(x => x.ParentId)
                    .OnDelete(DeleteBehavior.Restrict);
                ConfigureMetadata(builder.Property(x => x.Metadata));
            });

            SeedProductCategories(modelBuilder);
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

            modelBuilder.Entity<HomePageContent>(builder =>
            {
                builder.Property(x => x.ContentJson)
                    .IsRequired()
                    .HasColumnType(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "TEXT" : "jsonb");
                builder.HasData(new HomePageContent
                {
                    Id = HomePageContent.SingletonId,
                    ContentJson = HomePageContentDefaults.Json,
                    UpdatedAt = new DateTime(2026, 9, 29, 0, 0, 0, DateTimeKind.Utc),
                    IsUsed = true
                });
            });

            modelBuilder.Entity<CategoryPageContent>(builder =>
            {
                builder.Property(x => x.ContentJson)
                    .IsRequired()
                    .HasColumnType(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "TEXT" : "jsonb");
                builder.HasData(
                    SeededCategoryPageContent(CategoryPageContent.BikeId, CategoryPageContentDefaults.Bike),
                    SeededCategoryPageContent(CategoryPageContent.MachineId, CategoryPageContentDefaults.Machine),
                    SeededCategoryPageContent(CategoryPageContent.ApplianceId, CategoryPageContentDefaults.Appliance));
            });

            modelBuilder.Entity<Core.Entities.SiteSettings>(builder =>
            {
                builder.Property(x => x.ContentJson)
                    .IsRequired()
                    .HasColumnType(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "TEXT" : "jsonb");
                builder.HasData(new Core.Entities.SiteSettings
                {
                    Id = Core.Entities.SiteSettings.SingletonId,
                    ContentJson = SiteSettingsDefaults.Json,
                    UpdatedAt = new DateTime(2026, 9, 30, 0, 0, 0, DateTimeKind.Utc),
                    IsUsed = true
                });
            });
        }

        private void ConfigureColors(
            Microsoft.EntityFrameworkCore.Metadata.Builders.PropertyBuilder<List<ProductColorOption>> property)
        {
            var comparer = new ValueComparer<List<ProductColorOption>>(
                (left, right) => ColorsEqual(left, right),
                value => ColorsHashCode(value),
                value => value == null
                    ? new List<ProductColorOption>()
                    : value.Select(color => new ProductColorOption
                    {
                        Name = color.Name,
                        HexCode = color.HexCode,
                        ImageUrl = color.ImageUrl,
                        ImageUrls = (color.ImageUrls ?? new List<string>()).ToList()
                    }).ToList());

            property
                .HasColumnType(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "TEXT" : "jsonb")
                .HasDefaultValueSql(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite" ? "'[]'" : "'[]'::jsonb")
                .HasConversion(
                    value => JsonSerializer.Serialize(value, (JsonSerializerOptions)null!),
                    value => string.IsNullOrWhiteSpace(value)
                        ? new List<ProductColorOption>()
                        : JsonSerializer.Deserialize<List<ProductColorOption>>(value, (JsonSerializerOptions)null!)
                            ?? new List<ProductColorOption>())
                .Metadata.SetValueComparer(comparer);
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

        private static CategoryPageContent SeededCategoryPageContent(string id, string kind) => new()
        {
            Id = id,
            ContentJson = CategoryPageContentDefaults.JsonFor(kind),
            UpdatedAt = new DateTime(2026, 9, 30, 0, 0, 0, DateTimeKind.Utc),
            IsUsed = true
        };

        private static void SeedProductCategories(ModelBuilder modelBuilder)
        {
            var seededAt = new DateTime(2026, 9, 30, 0, 0, 0, DateTimeKind.Utc);
            var categories = new List<ProductCategory>();

            void Add(string id, ProductKind kind, string name, string slug, string? parentId, int sortOrder)
            {
                categories.Add(new ProductCategory
                {
                    Id = id,
                    Kind = kind,
                    Name = name,
                    Slug = slug,
                    ParentId = parentId,
                    Description = string.Empty,
                    ImageUrl = string.Empty,
                    SortOrder = sortOrder,
                    Metadata = new Dictionary<string, string>(),
                    CreatedAt = seededAt,
                    UpdatedAt = seededAt,
                    IsUsed = true
                });
            }

            foreach (var (slug, name, sort) in new[] { ("133-12a", "133-12A", 10), ("133-20a", "133-20A", 20) })
            {
                var parentId = $"cat-bike-{slug}";
                Add(parentId, ProductKind.Bike, name, slug, null, sort);
                Add($"{parentId}-ban-re", ProductKind.Bike, "Bản rẻ", $"{slug}-ban-re", parentId, 10);
                Add($"{parentId}-ban-thuong", ProductKind.Bike, "Bản thường", $"{slug}-ban-thuong", parentId, 20);
                Add($"{parentId}-ban-full", ProductKind.Bike, "Bản full", $"{slug}-ban-full", parentId, 30);
            }

            var bikeRoots = new[]
            {
                ("xe-xs", "Xe XS"), ("xe-bull", "Xe Bull"), ("xe-q1", "Xe Q1"),
                ("xe-cv-1-yen", "Xe CV 1 yên"), ("xe-cv-2-yen", "Xe CV 2 yên")
            };
            for (var i = 0; i < bikeRoots.Length; i++)
                Add($"cat-bike-{bikeRoots[i].Item1}", ProductKind.Bike, bikeRoots[i].Item2, bikeRoots[i].Item1, null, 30 + i * 10);

            var machines = new[]
            {
                ("may-cua", "Máy cưa"), ("may-cat-co", "Máy cắt cỏ"), ("may-sat-gao", "Máy sát gạo"),
                ("binh-phun-dien", "Bình phun điện"), ("may-soi-dat", "Máy sới đất"), ("may-phun", "Máy phun"),
                ("dong-co-no", "Động cơ nổ"), ("dong-co-xang", "Động cơ xăng"), ("dong-co-dau", "Động cơ dầu"),
                ("day-phun", "Dây phun"), ("dau-phun", "Đầu phun (đầu xịt)"), ("may-bom-xang", "Máy bơm xăng"),
                ("may-tuot-lua", "Máy tuốt lúa"), ("may-thai-chuoi", "Máy thái chuối")
            };
            for (var i = 0; i < machines.Length; i++)
                Add($"cat-machine-{machines[i].Item1}", ProductKind.Machine, machines[i].Item2, machines[i].Item1, null, (i + 1) * 10);

            var appliances = new[]
            {
                ("may-rua-xe", "Máy rửa xe"), ("dung-cu-cam-tay", "Dụng cụ cầm tay"), ("may-xay-dung", "Máy xây dựng"),
                ("mo-to", "Mô Tơ"), ("may-bom", "Máy Bơm"), ("ac-quy-cac-loai", "Ắc quy các loại")
            };
            for (var i = 0; i < appliances.Length; i++)
                Add($"cat-appliance-{appliances[i].Item1}", ProductKind.Appliance, appliances[i].Item2, appliances[i].Item1, null, (i + 1) * 10);

            modelBuilder.Entity<ProductCategory>().HasData(categories);
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

        private static bool ColorsEqual(List<ProductColorOption>? left, List<ProductColorOption>? right)
        {
            if (ReferenceEquals(left, right)) return true;
            if (left == null || right == null || left.Count != right.Count) return false;
            for (var i = 0; i < left.Count; i++)
            {
                if (left[i].Name != right[i].Name || left[i].HexCode != right[i].HexCode || left[i].ImageUrl != right[i].ImageUrl
                    || !(left[i].ImageUrls ?? []).SequenceEqual(right[i].ImageUrls ?? []))
                    return false;
            }
            return true;
        }

        private static int ColorsHashCode(List<ProductColorOption>? value)
        {
            if (value == null) return 0;
            var hash = new HashCode();
            foreach (var color in value)
            {
                hash.Add(color.Name, StringComparer.Ordinal);
                hash.Add(color.HexCode, StringComparer.Ordinal);
                hash.Add(color.ImageUrl, StringComparer.Ordinal);
                foreach (var imageUrl in color.ImageUrls ?? [])
                    hash.Add(imageUrl, StringComparer.Ordinal);
            }
            return hash.ToHashCode();
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
