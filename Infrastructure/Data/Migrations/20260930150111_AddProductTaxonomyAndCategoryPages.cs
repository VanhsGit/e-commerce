using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddProductTaxonomyAndCategoryPages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CategoryId",
                table: "ElectricBikeProducts",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Colors",
                table: "ElectricBikeProducts",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'[]'::jsonb");

            migrationBuilder.AddColumn<string>(
                name: "CategoryId",
                table: "ElectricalApplianceProducts",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Colors",
                table: "ElectricalApplianceProducts",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'[]'::jsonb");

            migrationBuilder.AddColumn<string>(
                name: "CategoryId",
                table: "AgriculturalMachineProducts",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Colors",
                table: "AgriculturalMachineProducts",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'[]'::jsonb");

            migrationBuilder.CreateTable(
                name: "CategoryPageContents",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    ContentJson = table.Column<string>(type: "jsonb", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryPageContents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Kind = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Slug = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    ParentId = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false),
                    SortOrder = table.Column<int>(type: "integer", nullable: false),
                    Metadata = table.Column<string>(type: "jsonb", nullable: false, defaultValueSql: "'{}'::jsonb"),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductCategories_ProductCategories_ParentId",
                        column: x => x.ParentId,
                        principalTable: "ProductCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SiteSettings",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    ContentJson = table.Column<string>(type: "jsonb", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SiteSettings", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "CategoryPageContents",
                columns: new[] { "Id", "ContentJson", "IsUsed", "UpdatedAt" },
                values: new object[,]
                {
                    { "appliance", "{\"version\":1,\"kind\":\"appliance\",\"hero\":{\"badge\":\"\\u0110\\u1ED3 \\u0111i\\u1EC7n ch\\u00EDnh h\\u00E3ng\",\"title\":\"\\u0110i\\u1EC7n c\\u01A1 d\\u00E2n d\\u1EE5ng\",\"highlightedTitle\":\"cho ng\\u00F4i nh\\u00E0 v\\u00E0 c\\u00F4ng tr\\u00ECnh\",\"description\":\"M\\u00E1y r\\u1EEDa xe, d\\u1EE5ng c\\u1EE5 c\\u1EA7m tay, m\\u00E1y x\\u00E2y d\\u1EF1ng, m\\u00F4 t\\u01A1, m\\u00E1y b\\u01A1m v\\u00E0 \\u1EAFc quy c\\u00E1c lo\\u1EA1i. Thi\\u1EBFt b\\u1ECB thi\\u1EBFt y\\u1EBFu cho gia \\u0111\\u00ECnh, x\\u01B0\\u1EDFng nh\\u1ECF v\\u00E0 c\\u00F4ng tr\\u00ECnh, \\u0111\\u01B0\\u1EE3c b\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng v\\u00E0 \\u0111\\u1ED5i m\\u1EDBi nhanh n\\u1EBFu l\\u1ED7i.\",\"imageSrc\":\"assets/images/home/home-appliances.webp\",\"imageAlt\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n c\\u01A1 d\\u00E2n d\\u1EE5ng trong ng\\u00F4i nh\\u00E0 hi\\u1EC7n \\u0111\\u1EA1i\",\"primaryCtaLabel\":\"Xem danh s\\u00E1ch s\\u1EA3n ph\\u1EA9m\",\"secondaryCtaLabel\":\"Nh\\u1EADn t\\u01B0 v\\u1EA5n\",\"metrics\":[{\"value\":\"6\",\"label\":\"Nh\\u00F3m s\\u1EA3n ph\\u1EA9m\"},{\"value\":\"100%\",\"label\":\"H\\u00E0ng ch\\u00EDnh h\\u00E3ng\"},{\"value\":\"7 ng\\u00E0y\",\"label\":\"\\u0110\\u1ED5i m\\u1EDBi n\\u1EBFu l\\u1ED7i\"}]},\"intro\":{\"eyebrow\":\"V\\u1EC1 \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"heading\":\"Thi\\u1EBFt b\\u1ECB \\u0111\\u00FAng c\\u00F4ng su\\u1EA5t, d\\u00F9ng b\\u1EC1n l\\u00E2u\",\"body\":\"M\\u1ED7i s\\u1EA3n ph\\u1EA9m \\u0111\\u1EC1u \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n theo c\\u00F4ng su\\u1EA5t, \\u0111i\\u1EC7n \\u00E1p v\\u00E0 m\\u00F4i tr\\u01B0\\u1EDDng s\\u1EED d\\u1EE5ng th\\u1EF1c t\\u1EBF. B\\u1EA1n mua \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB c\\u1EA7n d\\u00F9ng, v\\u1EADn h\\u00E0nh an to\\u00E0n, ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n v\\u00E0 d\\u1EC5 b\\u1EA3o tr\\u00EC l\\u00E2u d\\u00E0i.\",\"bullets\":[\"M\\u00E1y r\\u1EEDa xe \\u00E1p l\\u1EF1c cho gia \\u0111\\u00ECnh, ti\\u1EC7m r\\u1EEDa xe v\\u00E0 v\\u1EC7 sinh c\\u00F4ng tr\\u00ECnh\",\"D\\u1EE5ng c\\u1EE5 c\\u1EA7m tay v\\u00E0 m\\u00E1y x\\u00E2y d\\u1EF1ng cho th\\u1EE3 chuy\\u00EAn nghi\\u1EC7p v\\u00E0 t\\u1EF1 l\\u00E0m\",\"M\\u00F4 t\\u01A1 v\\u00E0 m\\u00E1y b\\u01A1m \\u0111a d\\u1EA1ng c\\u00F4ng su\\u1EA5t cho t\\u01B0\\u1EDBi ti\\u00EAu, c\\u1EA5p n\\u01B0\\u1EDBc, x\\u01B0\\u1EDFng\",\"\\u1EAEc quy c\\u00E1c lo\\u1EA1i cho xe, \\u0111\\u00E8n, inverter v\\u00E0 h\\u1EC7 th\\u1ED1ng l\\u01B0u \\u0111i\\u1EC7n\"]},\"highlights\":[{\"icon\":\"bolt\",\"accent\":\"bg-sky-500\",\"title\":\"Ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n n\\u0103ng\",\"description\":\"Thi\\u1EBFt b\\u1ECB \\u0111\\u01B0\\u1EE3c ch\\u1ECDn theo hi\\u1EC7u su\\u1EA5t v\\u00E0 nhu c\\u1EA7u s\\u1EED d\\u1EE5ng th\\u1EF1c t\\u1EBF, gi\\u1EA3m chi ph\\u00ED \\u0111i\\u1EC7n h\\u1EB1ng th\\u00E1ng.\"},{\"icon\":\"verified_user\",\"accent\":\"bg-emerald-500\",\"title\":\"Ch\\u00EDnh h\\u00E3ng, b\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng\",\"description\":\"Ngu\\u1ED3n g\\u1ED1c minh b\\u1EA1ch, tem b\\u1EA3o h\\u00E0nh \\u0111\\u1EA7y \\u0111\\u1EE7 v\\u00E0 ch\\u00EDnh s\\u00E1ch h\\u1EADu m\\u00E3i nhanh g\\u1ECDn.\"},{\"icon\":\"local_shipping\",\"accent\":\"bg-violet-500\",\"title\":\"Giao h\\u00E0ng nhanh\",\"description\":\"T\\u01B0 v\\u1EA5n v\\u1ECB tr\\u00ED l\\u1EAFp \\u0111\\u1EB7t, v\\u1EADn chuy\\u1EC3n an to\\u00E0n v\\u00E0 h\\u1ED7 tr\\u1EE3 l\\u1EAFp \\u0111\\u1EB7t khi c\\u1EA7n.\"},{\"icon\":\"handyman\",\"accent\":\"bg-amber-500\",\"title\":\"D\\u1EC5 b\\u1EA3o tr\\u00EC, s\\u1EB5n linh ki\\u1EC7n\",\"description\":\"Linh ki\\u1EC7n thay th\\u1EBF lu\\u00F4n s\\u1EB5n kho, k\\u1EF9 thu\\u1EADt vi\\u00EAn h\\u1ED7 tr\\u1EE3 trong su\\u1ED1t qu\\u00E1 tr\\u00ECnh s\\u1EED d\\u1EE5ng.\"}],\"showcase\":{\"heading\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n cho m\\u1ECDi kh\\u00F4ng gian\",\"description\":\"T\\u1EEB gara gia \\u0111\\u00ECnh \\u0111\\u1EBFn c\\u00F4ng tr\\u00ECnh nh\\u1ECF, b\\u1ED9 thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n c\\u01A1 c\\u1EE7a ch\\u00FAng t\\u00F4i gi\\u00FAp c\\u00F4ng vi\\u1EC7c nhanh g\\u1ECDn v\\u00E0 an to\\u00E0n h\\u01A1n.\",\"images\":[{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n d\\u00E2n d\\u1EE5ng trong ng\\u00F4i nh\\u00E0\",\"label\":\"Gia \\u0111\\u00ECnh\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"D\\u1EE5ng c\\u1EE5 v\\u00E0 m\\u00E1y m\\u00F3c cho c\\u00F4ng tr\\u00ECnh\",\"label\":\"C\\u00F4ng tr\\u00ECnh\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"M\\u00F4 t\\u01A1 v\\u00E0 m\\u00E1y b\\u01A1m v\\u1EADn h\\u00E0nh \\u1ED5n \\u0111\\u1ECBnh\",\"label\":\"V\\u1EADn h\\u00E0nh\"}]},\"catalog\":{\"heading\":\"Danh s\\u00E1ch \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"description\":\"L\\u1ECDc theo nh\\u00F3m s\\u1EA3n ph\\u1EA9m, th\\u01B0\\u01A1ng hi\\u1EC7u ho\\u1EB7c m\\u1EE9c gi\\u00E1 \\u0111\\u1EC3 ch\\u1ECDn \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB b\\u1EA1n c\\u1EA7n.\",\"allCategoriesLabel\":\"T\\u1EA5t c\\u1EA3 danh m\\u1EE5c\",\"allBrandsLabel\":\"T\\u1EA5t c\\u1EA3 th\\u01B0\\u01A1ng hi\\u1EC7u\",\"searchPlaceholder\":\"T\\u00ECm theo t\\u00EAn, m\\u00E3, th\\u01B0\\u01A1ng hi\\u1EC7u...\",\"sortLabel\":\"S\\u1EAFp x\\u1EBFp\",\"emptyTitle\":\"Ch\\u01B0a c\\u00F3 s\\u1EA3n ph\\u1EA9m ph\\u00F9 h\\u1EE3p\",\"emptyDescription\":\"H\\u00E3y th\\u1EED b\\u1ECF b\\u1EDBt b\\u1ED9 l\\u1ECDc ho\\u1EB7c ch\\u1ECDn nh\\u00F3m s\\u1EA3n ph\\u1EA9m kh\\u00E1c. B\\u1EA1n c\\u0169ng c\\u00F3 th\\u1EC3 g\\u1ECDi hotline \\u0111\\u1EC3 \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n tr\\u1EF1c ti\\u1EBFp.\",\"resultSuffixLabel\":\"s\\u1EA3n ph\\u1EA9m ph\\u00F9 h\\u1EE3p\",\"detailButtonLabel\":\"Xem chi ti\\u1EBFt\",\"clearFiltersLabel\":\"X\\u00F3a b\\u1ED9 l\\u1ECDc\",\"priceFromLabel\":\"Gi\\u00E1 t\\u1EEB\",\"priceToLabel\":\"Gi\\u00E1 \\u0111\\u1EBFn\",\"sortDefaultLabel\":\"M\\u1EB7c \\u0111\\u1ECBnh\",\"sortPriceAscLabel\":\"Gi\\u00E1 th\\u1EA5p \\u0111\\u1EBFn cao\",\"sortPriceDescLabel\":\"Gi\\u00E1 cao \\u0111\\u1EBFn th\\u1EA5p\",\"sortNameAscLabel\":\"T\\u00EAn A \\u2192 Z\",\"sortNewestLabel\":\"M\\u1EDBi nh\\u1EA5t\"},\"brands\":{\"heading\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u \\u0111\\u1ED3 \\u0111i\\u1EC7n ph\\u00E2n ph\\u1ED1i\",\"description\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u \\u0111\\u01B0\\u1EE3c ch\\u1ECDn l\\u1ECDc theo \\u0111\\u1ED9 an to\\u00E0n, \\u0111\\u1ED9 b\\u1EC1n v\\u00E0 kh\\u1EA3 n\\u0103ng cung \\u1EE9ng linh ki\\u1EC7n thay th\\u1EBF.\"},\"faq\":{\"eyebrow\":\"C\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p\",\"heading\":\"C\\u00E2u h\\u1ECFi v\\u1EC1 \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"description\":\"Nh\\u1EEFng c\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p khi ch\\u1ECDn c\\u00F4ng su\\u1EA5t, m\\u00F4 t\\u01A1, \\u1EAFc quy v\\u00E0 ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh \\u0111\\u1ED3 \\u0111i\\u1EC7n.\",\"items\":[{\"question\":\"M\\u00E1y r\\u1EEDa xe c\\u00F4ng su\\u1EA5t bao nhi\\u00EAu l\\u00E0 \\u0111\\u1EE7 d\\u00F9ng?\",\"answer\":\"V\\u1EDBi gia \\u0111\\u00ECnh, m\\u00E1y t\\u1EEB 1500 \\u0111\\u1EBFn 2000W l\\u00E0 ph\\u00F9 h\\u1EE3p \\u0111\\u1EC3 r\\u1EEDa xe m\\u00E1y v\\u00E0 \\u00F4 t\\u00F4. Ti\\u1EC7m r\\u1EEDa xe ho\\u1EB7c v\\u1EC7 sinh c\\u00F4ng tr\\u00ECnh n\\u00EAn ch\\u1ECDn m\\u00E1y c\\u00F4ng su\\u1EA5t l\\u1EDBn h\\u01A1n, ch\\u1EA1y li\\u00EAn t\\u1EE5c v\\u00E0 c\\u00F3 m\\u00F4 t\\u01A1 ch\\u1ED1ng qu\\u00E1 nhi\\u1EC7t.\"},{\"question\":\"Ch\\u1ECDn m\\u00F4 t\\u01A1 nh\\u01B0 th\\u1EBF n\\u00E0o cho \\u0111\\u00FAng?\",\"answer\":\"B\\u1EA1n c\\u1EA7n x\\u00E1c \\u0111\\u1ECBnh c\\u00F4ng su\\u1EA5t t\\u1EA3i, \\u0111i\\u1EC7n \\u00E1p ngu\\u1ED3n (m\\u1ED9t pha hay ba pha) v\\u00E0 t\\u1ED1c \\u0111\\u1ED9 v\\u00F2ng quay c\\u1EA7n thi\\u1EBFt. H\\u00E3y g\\u1EEDi th\\u00F4ng s\\u1ED1 thi\\u1EBFt b\\u1ECB c\\u1EA7n k\\u00E9o, ch\\u00FAng t\\u00F4i s\\u1EBD t\\u01B0 v\\u1EA5n m\\u00F4 t\\u01A1 ph\\u00F9 h\\u1EE3p.\"},{\"question\":\"Ch\\u1ECDn \\u1EAFc quy theo ti\\u00EAu ch\\u00ED n\\u00E0o?\",\"answer\":\"Ch\\u1ECDn theo \\u0111i\\u1EC7n \\u00E1p (v\\u00ED d\\u1EE5 12V), dung l\\u01B0\\u1EE3ng Ah v\\u00E0 m\\u1EE5c \\u0111\\u00EDch s\\u1EED d\\u1EE5ng: kh\\u1EDFi \\u0111\\u1ED9ng, l\\u01B0u \\u0111i\\u1EC7n hay ch\\u1EA1y thi\\u1EBFt b\\u1ECB li\\u00EAn t\\u1EE5c. Dung l\\u01B0\\u1EE3ng l\\u1EDBn h\\u01A1n s\\u1EBD c\\u1EA5p \\u0111i\\u1EC7n l\\u00E2u h\\u01A1n nh\\u01B0ng c\\u1EA7n b\\u1ED9 s\\u1EA1c t\\u01B0\\u01A1ng th\\u00EDch.\"},{\"question\":\"Ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh nh\\u01B0 th\\u1EBF n\\u00E0o?\",\"answer\":\"M\\u1ECDi s\\u1EA3n ph\\u1EA9m \\u0111\\u01B0\\u1EE3c b\\u1EA3o h\\u00E0nh ch\\u00EDnh h\\u00E3ng theo th\\u1EDDi h\\u1EA1n ghi tr\\u00EAn tem v\\u00E0 h\\u00F3a \\u0111\\u01A1n. S\\u1EA3n ph\\u1EA9m l\\u1ED7i do nh\\u00E0 s\\u1EA3n xu\\u1EA5t \\u0111\\u01B0\\u1EE3c \\u0111\\u1ED5i m\\u1EDBi trong 7 ng\\u00E0y, sau \\u0111\\u00F3 h\\u1ED7 tr\\u1EE3 s\\u1EEDa ch\\u1EEFa theo ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh.\"}]},\"cta\":{\"heading\":\"C\\u1EA7n ch\\u1ECDn \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB?\",\"highlightedHeading\":\"T\\u01B0 v\\u1EA5n c\\u00F4ng su\\u1EA5t mi\\u1EC5n ph\\u00ED\",\"description\":\"M\\u00F4 t\\u1EA3 nhu c\\u1EA7u s\\u1EED d\\u1EE5ng, \\u0111\\u1ED9i ng\\u0169 s\\u1EBD g\\u1EE3i \\u00FD thi\\u1EBFt b\\u1ECB \\u0111\\u00FAng c\\u00F4ng su\\u1EA5t, b\\u00E1o gi\\u00E1 r\\u00F5 r\\u00E0ng v\\u00E0 h\\u1ED7 tr\\u1EE3 giao h\\u00E0ng nhanh ch\\u00F3ng.\",\"phone\":\"19001234\",\"phoneButtonLabel\":\"Hotline mi\\u1EC5n ph\\u00ED\",\"email\":\"hello@ecotech.vn\",\"emailButtonLabel\":\"G\\u1EEDi email cho ch\\u00FAng t\\u00F4i\",\"note\":\"H\\u00E0ng ch\\u00EDnh h\\u00E3ng, \\u0111\\u1ED5i m\\u1EDBi trong 7 ng\\u00E0y n\\u1EBFu l\\u1ED7i do nh\\u00E0 s\\u1EA3n xu\\u1EA5t.\"}}", true, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "bike", "{\"version\":1,\"kind\":\"bike\",\"hero\":{\"badge\":\"Xe \\u0111i\\u1EC7n ch\\u00EDnh h\\u00E3ng\",\"title\":\"Xe \\u0111i\\u1EC7n cho\",\"highlightedTitle\":\"m\\u1ED7i h\\u00E0nh tr\\u00ECnh trong ph\\u1ED1\",\"description\":\"D\\u1EA3i xe 133-12A v\\u00E0 133-20A v\\u1EDBi nhi\\u1EC1u phi\\u00EAn b\\u1EA3n r\\u1EBB, th\\u01B0\\u1EDDng, full c\\u00F9ng c\\u00E1c d\\u00F2ng xe XS, Bull, Q1, CV m\\u1ED9t y\\u00EAn v\\u00E0 hai y\\u00EAn. Pin b\\u1EC1n, v\\u1EADn h\\u00E0nh \\u00EAm, b\\u1EA3o h\\u00E0nh d\\u00E0i v\\u00E0 c\\u00F3 k\\u1EF9 thu\\u1EADt vi\\u00EAn h\\u1ED7 tr\\u1EE3 t\\u1EA1i nh\\u00E0.\",\"imageSrc\":\"assets/images/home/electric-mobility.webp\",\"imageAlt\":\"Xe \\u0111i\\u1EC7n hi\\u1EC7n \\u0111\\u1EA1i di chuy\\u1EC3n trong ph\\u1ED1\",\"primaryCtaLabel\":\"Xem danh s\\u00E1ch xe\",\"secondaryCtaLabel\":\"Nh\\u1EADn t\\u01B0 v\\u1EA5n\",\"metrics\":[{\"value\":\"3 n\\u0103m\",\"label\":\"B\\u1EA3o h\\u00E0nh pin\"},{\"value\":\"0\\u0111\",\"label\":\"Ph\\u00ED ki\\u1EC3m tra \\u0111\\u1ECBnh k\\u1EF3\"},{\"value\":\"63/63\",\"label\":\"T\\u1EC9nh th\\u00E0nh ph\\u1EE5c v\\u1EE5\"}]},\"intro\":{\"eyebrow\":\"V\\u1EC1 d\\u00F2ng xe \\u0111i\\u1EC7n\",\"heading\":\"Ch\\u1ECDn \\u0111\\u00FAng d\\u00F2ng xe, \\u0111i b\\u1EC1n m\\u1ED7i ng\\u00E0y\",\"body\":\"M\\u1ED7i d\\u1EA3i xe c\\u00F3 ba phi\\u00EAn b\\u1EA3n r\\u1EBB, th\\u01B0\\u1EDDng v\\u00E0 full \\u0111\\u1EC3 b\\u1EA1n c\\u00E2n \\u0111\\u1ED1i gi\\u1EEFa ng\\u00E2n s\\u00E1ch v\\u00E0 trang b\\u1ECB. \\u0110\\u1ED9i ng\\u0169 t\\u01B0 v\\u1EA5n d\\u1EF1a tr\\u00EAn qu\\u00E3ng \\u0111\\u01B0\\u1EDDng \\u0111i l\\u00E0m, t\\u1EA3i tr\\u1ECDng v\\u00E0 th\\u00F3i quen s\\u1EA1c \\u0111\\u1EC3 g\\u1EE3i \\u00FD m\\u1EABu xe, dung l\\u01B0\\u1EE3ng pin v\\u00E0 ph\\u01B0\\u01A1ng \\u00E1n t\\u00E0i ch\\u00EDnh ph\\u00F9 h\\u1EE3p nh\\u1EA5t.\",\"bullets\":[\"D\\u1EA3i 133-12A v\\u00E0 133-20A v\\u1EDBi ba phi\\u00EAn b\\u1EA3n: b\\u1EA3n r\\u1EBB, b\\u1EA3n th\\u01B0\\u1EDDng, b\\u1EA3n full\",\"C\\u00E1c d\\u00F2ng xe XS, Bull, Q1 cho nhu c\\u1EA7u \\u0111i h\\u1ECDc, \\u0111i l\\u00E0m v\\u00E0 di chuy\\u1EC3n trong ph\\u1ED1\",\"D\\u00F2ng CV m\\u1ED9t y\\u00EAn v\\u00E0 hai y\\u00EAn g\\u1ECDn nh\\u1EB9, d\\u1EC5 \\u0111i\\u1EC1u khi\\u1EC3n, ph\\u00F9 h\\u1EE3p \\u0111i ch\\u1EE3, \\u0111\\u01B0a \\u0111\\u00F3n\",\"Linh ki\\u1EC7n, pin v\\u00E0 ph\\u1EE5 t\\u00F9ng thay th\\u1EBF lu\\u00F4n s\\u1EB5n kho t\\u1EA1i c\\u00E1c \\u0111\\u1EA1i l\\u00FD\"]},\"highlights\":[{\"icon\":\"battery_charging_full\",\"accent\":\"bg-emerald-500\",\"title\":\"Pin b\\u1EC1n, \\u0111i xa h\\u01A1n\",\"description\":\"Pin dung l\\u01B0\\u1EE3ng l\\u1EDBn, \\u0111i \\u0111\\u01B0\\u1EE3c qu\\u00E3ng \\u0111\\u01B0\\u1EDDng d\\u00E0i sau m\\u1ED7i l\\u1EA7n s\\u1EA1c, chi ph\\u00ED v\\u1EADn h\\u00E0nh ch\\u1EC9 b\\u1EB1ng m\\u1ED9t ph\\u1EA7n nh\\u1ECF so v\\u1EDBi xe x\\u0103ng.\"},{\"icon\":\"verified_user\",\"accent\":\"bg-sky-500\",\"title\":\"B\\u1EA3o h\\u00E0nh 3 n\\u0103m\",\"description\":\"B\\u1EA3o h\\u00E0nh pin 3 n\\u0103m, \\u0111\\u1ED9ng c\\u01A1 v\\u00E0 b\\u1ED9 \\u0111i\\u1EC1u khi\\u1EC3n theo ch\\u00EDnh s\\u00E1ch h\\u00E3ng, tra c\\u1EE9u nhanh b\\u1EB1ng s\\u1ED1 serial.\"},{\"icon\":\"credit_card\",\"accent\":\"bg-violet-500\",\"title\":\"Tr\\u1EA3 g\\u00F3p 0%\",\"description\":\"Duy\\u1EC7t h\\u1ED3 s\\u01A1 trong ng\\u00E0y, tr\\u1EA3 tr\\u01B0\\u1EDBc linh ho\\u1EA1t, kh\\u00F4ng ph\\u00E1t sinh l\\u00E3i su\\u1EA5t trong k\\u1EF3 h\\u1EA1n \\u01B0u \\u0111\\u00E3i.\"},{\"icon\":\"build\",\"accent\":\"bg-amber-500\",\"title\":\"K\\u1EF9 thu\\u1EADt t\\u1EA1i nh\\u00E0\",\"description\":\"K\\u1EF9 thu\\u1EADt vi\\u00EAn \\u0111\\u1EBFn t\\u1EADn nh\\u00E0 ki\\u1EC3m tra, thay th\\u1EBF linh ki\\u1EC7n v\\u00E0 h\\u01B0\\u1EDBng d\\u1EABn s\\u1EED d\\u1EE5ng an to\\u00E0n.\"}],\"showcase\":{\"heading\":\"Xe \\u0111i\\u1EC7n trong nh\\u1ECBp s\\u1ED1ng m\\u1ED7i ng\\u00E0y\",\"description\":\"T\\u1EEB gi\\u1EDD tan h\\u1ECDc \\u0111\\u1EBFn nh\\u1EEFng chuy\\u1EBFn \\u0111i l\\u00E0m s\\u1EDBm, xe \\u0111i\\u1EC7n gi\\u00FAp b\\u1EA1n di chuy\\u1EC3n nh\\u1EB9 nh\\u00E0ng, ti\\u1EBFt ki\\u1EC7m v\\u00E0 th\\u00E2n thi\\u1EC7n v\\u1EDBi m\\u00F4i tr\\u01B0\\u1EDDng.\",\"images\":[{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Xe \\u0111i\\u1EC7n \\u0111\\u1ED3ng h\\u00E0nh c\\u00F9ng b\\u1EA1n trong ph\\u1ED1\",\"label\":\"Di chuy\\u1EC3n xanh\"},{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Thi\\u1EBFt k\\u1EBF hi\\u1EC7n \\u0111\\u1EA1i, d\\u1EC5 \\u0111i\\u1EC1u khi\\u1EC3n\",\"label\":\"Thi\\u1EBFt k\\u1EBF\"},{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Tr\\u1EA3i nghi\\u1EC7m v\\u1EADn h\\u00E0nh \\u00EAm \\u00E1i\",\"label\":\"Tr\\u1EA3i nghi\\u1EC7m\"}]},\"catalog\":{\"heading\":\"Danh s\\u00E1ch xe \\u0111i\\u1EC7n\",\"description\":\"Ch\\u1ECDn theo d\\u1EA3i xe v\\u00E0 phi\\u00EAn b\\u1EA3n, l\\u1ECDc theo th\\u01B0\\u01A1ng hi\\u1EC7u ho\\u1EB7c m\\u1EE9c gi\\u00E1 \\u0111\\u1EC3 t\\u00ECm chi\\u1EBFc xe ph\\u00F9 h\\u1EE3p.\",\"allCategoriesLabel\":\"T\\u1EA5t c\\u1EA3 danh m\\u1EE5c\",\"allBrandsLabel\":\"T\\u1EA5t c\\u1EA3 th\\u01B0\\u01A1ng hi\\u1EC7u\",\"searchPlaceholder\":\"T\\u00ECm theo t\\u00EAn, m\\u00E3, th\\u01B0\\u01A1ng hi\\u1EC7u...\",\"sortLabel\":\"S\\u1EAFp x\\u1EBFp\",\"emptyTitle\":\"Ch\\u01B0a c\\u00F3 xe ph\\u00F9 h\\u1EE3p\",\"emptyDescription\":\"H\\u00E3y th\\u1EED b\\u1ECF b\\u1EDBt b\\u1ED9 l\\u1ECDc ho\\u1EB7c ch\\u1ECDn d\\u1EA3i xe kh\\u00E1c. B\\u1EA1n c\\u0169ng c\\u00F3 th\\u1EC3 g\\u1ECDi hotline \\u0111\\u1EC3 \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n tr\\u1EF1c ti\\u1EBFp.\",\"resultSuffixLabel\":\"xe ph\\u00F9 h\\u1EE3p\",\"detailButtonLabel\":\"Xem chi ti\\u1EBFt\",\"clearFiltersLabel\":\"X\\u00F3a b\\u1ED9 l\\u1ECDc\",\"priceFromLabel\":\"Gi\\u00E1 t\\u1EEB\",\"priceToLabel\":\"Gi\\u00E1 \\u0111\\u1EBFn\",\"sortDefaultLabel\":\"M\\u1EB7c \\u0111\\u1ECBnh\",\"sortPriceAscLabel\":\"Gi\\u00E1 th\\u1EA5p \\u0111\\u1EBFn cao\",\"sortPriceDescLabel\":\"Gi\\u00E1 cao \\u0111\\u1EBFn th\\u1EA5p\",\"sortNameAscLabel\":\"T\\u00EAn A \\u2192 Z\",\"sortNewestLabel\":\"M\\u1EDBi nh\\u1EA5t\"},\"brands\":{\"heading\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u xe \\u0111i\\u1EC7n ph\\u00E2n ph\\u1ED1i\",\"description\":\"Ch\\u00FAng t\\u00F4i ch\\u1EC9 l\\u00E0m vi\\u1EC7c v\\u1EDBi c\\u00E1c th\\u01B0\\u01A1ng hi\\u1EC7u c\\u00F3 ngu\\u1ED3n g\\u1ED1c r\\u00F5 r\\u00E0ng, \\u0111\\u1EA7y \\u0111\\u1EE7 ch\\u1EE9ng t\\u1EEB v\\u00E0 ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh minh b\\u1EA1ch.\"},\"faq\":{\"eyebrow\":\"C\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p\",\"heading\":\"C\\u00E2u h\\u1ECFi v\\u1EC1 xe \\u0111i\\u1EC7n\",\"description\":\"Nh\\u1EEFng \\u0111i\\u1EC1u kh\\u00E1ch h\\u00E0ng hay h\\u1ECFi tr\\u01B0\\u1EDBc khi ch\\u1ECDn xe \\u0111i\\u1EC7n: qu\\u00E3ng \\u0111\\u01B0\\u1EDDng, th\\u1EDDi gian s\\u1EA1c, \\u0111\\u0103ng k\\u00FD v\\u00E0 s\\u1EF1 kh\\u00E1c bi\\u1EC7t gi\\u1EEFa c\\u00E1c phi\\u00EAn b\\u1EA3n.\",\"items\":[{\"question\":\"Xe \\u0111i \\u0111\\u01B0\\u1EE3c bao xa sau m\\u1ED7i l\\u1EA7n s\\u1EA1c?\",\"answer\":\"T\\u00F9y d\\u00F2ng xe v\\u00E0 dung l\\u01B0\\u1EE3ng pin, xe \\u0111i \\u0111\\u01B0\\u1EE3c kho\\u1EA3ng 60 \\u0111\\u1EBFn 120 km m\\u1ED7i l\\u1EA7n s\\u1EA1c \\u0111\\u1EA7y trong \\u0111i\\u1EC1u ki\\u1EC7n \\u0111\\u01B0\\u1EDDng ph\\u1ED1 b\\u00ECnh th\\u01B0\\u1EDDng. Qu\\u00E3ng \\u0111\\u01B0\\u1EDDng th\\u1EF1c t\\u1EBF c\\u00F2n ph\\u1EE5 thu\\u1ED9c t\\u1EA3i tr\\u1ECDng, \\u0111\\u1ECBa h\\u00ECnh v\\u00E0 t\\u1ED1c \\u0111\\u1ED9.\"},{\"question\":\"S\\u1EA1c \\u0111\\u1EA7y pin m\\u1EA5t bao l\\u00E2u?\",\"answer\":\"Th\\u00F4ng th\\u01B0\\u1EDDng c\\u1EA7n 6 \\u0111\\u1EBFn 8 gi\\u1EDD \\u0111\\u1EC3 s\\u1EA1c \\u0111\\u1EA7y b\\u1EB1ng b\\u1ED9 s\\u1EA1c theo xe. B\\u1EA1n c\\u00F3 th\\u1EC3 s\\u1EA1c qua \\u0111\\u00EAm t\\u1EA1i nh\\u00E0 b\\u1EB1ng \\u1ED5 \\u0111i\\u1EC7n d\\u00E2n d\\u1EE5ng th\\u00F4ng th\\u01B0\\u1EDDng.\"},{\"question\":\"Xe \\u0111i\\u1EC7n c\\u00F3 c\\u1EA7n \\u0111\\u0103ng k\\u00FD bi\\u1EC3n s\\u1ED1 kh\\u00F4ng?\",\"answer\":\"C\\u00F3. T\\u00F9y lo\\u1EA1i xe v\\u00E0 c\\u00F4ng su\\u1EA5t \\u0111\\u1ED9ng c\\u01A1, xe c\\u00F3 th\\u1EC3 thu\\u1ED9c di\\u1EC7n ph\\u1EA3i \\u0111\\u0103ng k\\u00FD bi\\u1EC3n s\\u1ED1 v\\u00E0 c\\u00F3 b\\u1EB1ng l\\u00E1i. \\u0110\\u1ED9i ng\\u0169 t\\u01B0 v\\u1EA5n s\\u1EBD h\\u01B0\\u1EDBng d\\u1EABn th\\u1EE7 t\\u1EE5c c\\u1EE5 th\\u1EC3 theo t\\u1EEBng d\\u00F2ng xe khi b\\u1EA1n mua.\"},{\"question\":\"B\\u1EA3n r\\u1EBB, b\\u1EA3n th\\u01B0\\u1EDDng v\\u00E0 b\\u1EA3n full kh\\u00E1c nhau th\\u1EBF n\\u00E0o?\",\"answer\":\"B\\u1EA3n r\\u1EBB t\\u1EADp trung v\\u00E0o gi\\u00E1 t\\u1ED1t v\\u1EDBi trang b\\u1ECB c\\u01A1 b\\u1EA3n. B\\u1EA3n th\\u01B0\\u1EDDng b\\u1ED5 sung ti\\u1EC7n \\u00EDch v\\u00E0 pin t\\u1ED1t h\\u01A1n. B\\u1EA3n full c\\u00F3 \\u0111\\u1EA7y \\u0111\\u1EE7 trang b\\u1ECB cao c\\u1EA5p nh\\u01B0 phanh, \\u0111\\u00E8n, m\\u00E0n h\\u00ECnh v\\u00E0 dung l\\u01B0\\u1EE3ng pin l\\u1EDBn nh\\u1EA5t c\\u1EE7a d\\u1EA3i xe.\"}]},\"cta\":{\"heading\":\"Ch\\u01B0a bi\\u1EBFt ch\\u1ECDn xe n\\u00E0o?\",\"highlightedHeading\":\"G\\u1ECDi ngay \\u0111\\u1EC3 \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n mi\\u1EC5n ph\\u00ED\",\"description\":\"Cho ch\\u00FAng t\\u00F4i bi\\u1EBFt qu\\u00E3ng \\u0111\\u01B0\\u1EDDng \\u0111i l\\u00E0m v\\u00E0 ng\\u00E2n s\\u00E1ch, \\u0111\\u1ED9i ng\\u0169 s\\u1EBD g\\u1EE3i \\u00FD d\\u00F2ng xe ph\\u00F9 h\\u1EE3p, b\\u00E1o gi\\u00E1 r\\u00F5 r\\u00E0ng v\\u00E0 h\\u1ED7 tr\\u1EE3 th\\u1EE7 t\\u1EE5c tr\\u1EA3 g\\u00F3p.\",\"phone\":\"19001234\",\"phoneButtonLabel\":\"Hotline mi\\u1EC5n ph\\u00ED\",\"email\":\"hello@ecotech.vn\",\"emailButtonLabel\":\"G\\u1EEDi email cho ch\\u00FAng t\\u00F4i\",\"note\":\"Xe \\u0111i\\u1EC7n b\\u1EA3o h\\u00E0nh t\\u1EADn n\\u01A1i, ki\\u1EC3m tra \\u0111\\u1ECBnh k\\u1EF3 mi\\u1EC5n ph\\u00ED tr\\u00EAn to\\u00E0n qu\\u1ED1c.\"}}", true, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "machine", "{\"version\":1,\"kind\":\"machine\",\"hero\":{\"badge\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p ch\\u00EDnh h\\u00E3ng\",\"title\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"highlightedTitle\":\"b\\u1EC1n b\\u1EC9 qua t\\u1EEBng m\\u00F9a v\\u1EE5\",\"description\":\"M\\u00E1y c\\u01B0a, m\\u00E1y c\\u1EAFt c\\u1ECF, \\u0111\\u1ED9ng c\\u01A1 n\\u1ED5 ch\\u1EA1y x\\u0103ng v\\u00E0 d\\u1EA7u, m\\u00E1y b\\u01A1m, m\\u00E1y phun v\\u00E0 \\u0111\\u1EA7y \\u0111\\u1EE7 ph\\u1EE5 ki\\u1EC7n. Thi\\u1EBFt b\\u1ECB \\u0111\\u01B0\\u1EE3c ch\\u1ECDn theo \\u0111i\\u1EC1u ki\\u1EC7n canh t\\u00E1c Vi\\u1EC7t Nam, c\\u00F3 ph\\u1EE5 t\\u00F9ng s\\u1EB5n kho v\\u00E0 k\\u1EF9 thu\\u1EADt h\\u1ED7 tr\\u1EE3 t\\u1EADn ru\\u1ED9ng.\",\"imageSrc\":\"assets/images/home/agricultural-machinery.webp\",\"imageAlt\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p ho\\u1EA1t \\u0111\\u1ED9ng tr\\u00EAn \\u0111\\u1ED3ng ru\\u1ED9ng\",\"primaryCtaLabel\":\"Xem danh s\\u00E1ch m\\u00E1y\",\"secondaryCtaLabel\":\"Nh\\u1EADn t\\u01B0 v\\u1EA5n\",\"metrics\":[{\"value\":\"14\",\"label\":\"Nh\\u00F3m thi\\u1EBFt b\\u1ECB\"},{\"value\":\"24h\",\"label\":\"C\\u00F3 m\\u1EB7t k\\u1EF9 thu\\u1EADt\"},{\"value\":\"12\\u201324 th\\u00E1ng\",\"label\":\"B\\u1EA3o h\\u00E0nh\"}]},\"intro\":{\"eyebrow\":\"V\\u1EC1 m\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"heading\":\"C\\u01A1 gi\\u1EDBi h\\u00F3a \\u0111\\u1EC3 m\\u00F9a v\\u1EE5 nh\\u1EB9 h\\u01A1n\",\"body\":\"T\\u1EEB l\\u00E0m \\u0111\\u1EA5t, phun thu\\u1ED1c, b\\u01A1m n\\u01B0\\u1EDBc \\u0111\\u1EBFn thu ho\\u1EA1ch v\\u00E0 ch\\u1EBF bi\\u1EBFn sau thu ho\\u1EA1ch, m\\u1ED7i nh\\u00F3m thi\\u1EBFt b\\u1ECB \\u0111\\u1EC1u \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n theo di\\u1EC7n t\\u00EDch canh t\\u00E1c, lo\\u1EA1i c\\u00E2y tr\\u1ED3ng v\\u00E0 t\\u1EA7n su\\u1EA5t v\\u1EADn h\\u00E0nh \\u0111\\u1EC3 b\\u1EA1n \\u0111\\u1EA7u t\\u01B0 \\u0111\\u00FAng ch\\u1ED7, ti\\u1EBFt ki\\u1EC7m nh\\u00E2n c\\u00F4ng v\\u00E0 nhi\\u00EAn li\\u1EC7u.\",\"bullets\":[\"M\\u00E1y c\\u01B0a, m\\u00E1y c\\u1EAFt c\\u1ECF, m\\u00E1y s\\u1EDBi \\u0111\\u1EA5t cho vi\\u1EC7c l\\u00E0m v\\u01B0\\u1EDDn v\\u00E0 d\\u1ECDn \\u0111\\u1ED3ng\",\"\\u0110\\u1ED9ng c\\u01A1 n\\u1ED5, \\u0111\\u1ED9ng c\\u01A1 x\\u0103ng, \\u0111\\u1ED9ng c\\u01A1 d\\u1EA7u \\u0111a d\\u1EA1ng c\\u00F4ng su\\u1EA5t\",\"M\\u00E1y b\\u01A1m x\\u0103ng, b\\u00ECnh phun \\u0111i\\u1EC7n, m\\u00E1y phun, d\\u00E2y phun v\\u00E0 \\u0111\\u1EA7u phun\",\"M\\u00E1y tu\\u1ED1t l\\u00FAa, m\\u00E1y s\\u00E1t g\\u1EA1o, m\\u00E1y th\\u00E1i chu\\u1ED1i cho kh\\u00E2u sau thu ho\\u1EA1ch\"]},\"highlights\":[{\"icon\":\"schedule\",\"accent\":\"bg-amber-500\",\"title\":\"N\\u0103ng su\\u1EA5t v\\u01B0\\u1EE3t tr\\u1ED9i\",\"description\":\"M\\u1ED9t m\\u00E1y thay th\\u1EBF nhi\\u1EC1u nh\\u00E2n c\\u00F4ng trong m\\u00F9a cao \\u0111i\\u1EC3m, gi\\u00FAp k\\u1ECBp th\\u1EDDi v\\u1EE5 v\\u00E0 gi\\u1EA3m hao h\\u1EE5t sau thu ho\\u1EA1ch.\"},{\"icon\":\"workspace_premium\",\"accent\":\"bg-emerald-500\",\"title\":\"Ngu\\u1ED3n g\\u1ED1c r\\u00F5 r\\u00E0ng\",\"description\":\"Thi\\u1EBFt b\\u1ECB ch\\u00EDnh ng\\u1EA1ch, \\u0111\\u1EA7y \\u0111\\u1EE7 h\\u00F3a \\u0111\\u01A1n VAT v\\u00E0 gi\\u1EA5y t\\u1EDD CO, CQ, tem ch\\u1ED1ng gi\\u1EA3 nguy\\u00EAn v\\u1EB9n.\"},{\"icon\":\"handyman\",\"accent\":\"bg-sky-500\",\"title\":\"K\\u1EF9 thu\\u1EADt t\\u1EADn ru\\u1ED9ng\",\"description\":\"H\\u1ED7 tr\\u1EE3 s\\u1EF1 c\\u1ED1 nhanh, h\\u01B0\\u1EDBng d\\u1EABn v\\u1EADn h\\u00E0nh v\\u00E0 lu\\u00F4n s\\u1EB5n ph\\u1EE5 t\\u00F9ng hao m\\u00F2n \\u0111\\u1EC3 thay th\\u1EBF.\"},{\"icon\":\"handshake\",\"accent\":\"bg-violet-500\",\"title\":\"T\\u00E0i ch\\u00EDnh theo m\\u00F9a v\\u1EE5\",\"description\":\"Ph\\u01B0\\u01A1ng \\u00E1n thanh to\\u00E1n linh ho\\u1EA1t ph\\u00F9 h\\u1EE3p h\\u1ED9 canh t\\u00E1c v\\u00E0 h\\u1EE3p t\\u00E1c x\\u00E3.\"}],\"showcase\":{\"heading\":\"M\\u00E1y m\\u00F3c \\u0111\\u1ED3ng h\\u00E0nh c\\u00F9ng nh\\u00E0 n\\u00F4ng\",\"description\":\"Thi\\u1EBFt b\\u1ECB v\\u1EADn h\\u00E0nh \\u1ED5n \\u0111\\u1ECBnh trong \\u0111i\\u1EC1u ki\\u1EC7n n\\u1EAFng, b\\u1EE5i v\\u00E0 b\\u00F9n \\u0111\\u1EA5t, gi\\u1EEF hi\\u1EC7u su\\u1EA5t su\\u1ED1t nhi\\u1EC1u m\\u00F9a v\\u1EE5 li\\u00EAn ti\\u1EBFp.\",\"images\":[{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p tr\\u00EAn c\\u00E1nh \\u0111\\u1ED3ng l\\u00FAa\",\"label\":\"C\\u01A1 gi\\u1EDBi h\\u00F3a\"},{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"\\u0110\\u1ED9ng c\\u01A1 v\\u00E0 thi\\u1EBFt b\\u1ECB canh t\\u00E1c b\\u1EC1n b\\u1EC9\",\"label\":\"Thi\\u1EBFt b\\u1ECB\"},{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"T\\u0103ng n\\u0103ng su\\u1EA5t canh t\\u00E1c\",\"label\":\"N\\u0103ng su\\u1EA5t\"}]},\"catalog\":{\"heading\":\"Danh s\\u00E1ch m\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"description\":\"L\\u1ECDc theo nh\\u00F3m thi\\u1EBFt b\\u1ECB, th\\u01B0\\u01A1ng hi\\u1EC7u ho\\u1EB7c m\\u1EE9c gi\\u00E1 \\u0111\\u1EC3 ch\\u1ECDn \\u0111\\u00FAng m\\u00E1y cho nhu c\\u1EA7u canh t\\u00E1c.\",\"allCategoriesLabel\":\"T\\u1EA5t c\\u1EA3 danh m\\u1EE5c\",\"allBrandsLabel\":\"T\\u1EA5t c\\u1EA3 th\\u01B0\\u01A1ng hi\\u1EC7u\",\"searchPlaceholder\":\"T\\u00ECm theo t\\u00EAn, m\\u00E3, th\\u01B0\\u01A1ng hi\\u1EC7u...\",\"sortLabel\":\"S\\u1EAFp x\\u1EBFp\",\"emptyTitle\":\"Ch\\u01B0a c\\u00F3 m\\u00E1y ph\\u00F9 h\\u1EE3p\",\"emptyDescription\":\"H\\u00E3y th\\u1EED b\\u1ECF b\\u1EDBt b\\u1ED9 l\\u1ECDc ho\\u1EB7c ch\\u1ECDn nh\\u00F3m thi\\u1EBFt b\\u1ECB kh\\u00E1c. K\\u1EF9 thu\\u1EADt vi\\u00EAn lu\\u00F4n s\\u1EB5n s\\u00E0ng t\\u01B0 v\\u1EA5n qua hotline.\",\"resultSuffixLabel\":\"m\\u00E1y ph\\u00F9 h\\u1EE3p\",\"detailButtonLabel\":\"Xem chi ti\\u1EBFt\",\"clearFiltersLabel\":\"X\\u00F3a b\\u1ED9 l\\u1ECDc\",\"priceFromLabel\":\"Gi\\u00E1 t\\u1EEB\",\"priceToLabel\":\"Gi\\u00E1 \\u0111\\u1EBFn\",\"sortDefaultLabel\":\"M\\u1EB7c \\u0111\\u1ECBnh\",\"sortPriceAscLabel\":\"Gi\\u00E1 th\\u1EA5p \\u0111\\u1EBFn cao\",\"sortPriceDescLabel\":\"Gi\\u00E1 cao \\u0111\\u1EBFn th\\u1EA5p\",\"sortNameAscLabel\":\"T\\u00EAn A \\u2192 Z\",\"sortNewestLabel\":\"M\\u1EDBi nh\\u1EA5t\"},\"brands\":{\"heading\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u m\\u00E1y n\\u00F4ng nghi\\u1EC7p ph\\u00E2n ph\\u1ED1i\",\"description\":\"C\\u00E1c th\\u01B0\\u01A1ng hi\\u1EC7u \\u0111\\u01B0\\u1EE3c ch\\u1ECDn l\\u1ECDc theo \\u0111\\u1ED9 b\\u1EC1n, kh\\u1EA3 n\\u0103ng cung \\u1EE9ng ph\\u1EE5 t\\u00F9ng v\\u00E0 ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh t\\u1EA1i Vi\\u1EC7t Nam.\"},\"faq\":{\"eyebrow\":\"C\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p\",\"heading\":\"C\\u00E2u h\\u1ECFi v\\u1EC1 m\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"description\":\"Nh\\u1EEFng c\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p khi ch\\u1ECDn c\\u00F4ng su\\u1EA5t, b\\u1EA3o d\\u01B0\\u1EE1ng v\\u00E0 ph\\u1EE5 t\\u00F9ng cho m\\u00E1y n\\u00F4ng nghi\\u1EC7p.\",\"items\":[{\"question\":\"L\\u00E0m sao ch\\u1ECDn c\\u00F4ng su\\u1EA5t m\\u00E1y ph\\u00F9 h\\u1EE3p?\",\"answer\":\"C\\u00F4ng su\\u1EA5t ph\\u1EE5 thu\\u1ED9c di\\u1EC7n t\\u00EDch, lo\\u1EA1i \\u0111\\u1EA5t v\\u00E0 c\\u00E2y tr\\u1ED3ng. B\\u1EA1n ch\\u1EC9 c\\u1EA7n cho ch\\u00FAng t\\u00F4i bi\\u1EBFt nhu c\\u1EA7u s\\u1EED d\\u1EE5ng, k\\u1EF9 thu\\u1EADt vi\\u00EAn s\\u1EBD t\\u01B0 v\\u1EA5n c\\u00F4ng su\\u1EA5t v\\u00E0 lo\\u1EA1i \\u0111\\u1ED9ng c\\u01A1 v\\u1EEBa \\u0111\\u1EE7 \\u0111\\u1EC3 kh\\u00F4ng l\\u00E3ng ph\\u00ED nhi\\u00EAn li\\u1EC7u.\"},{\"question\":\"Ph\\u1EE5 t\\u00F9ng hao m\\u00F2n c\\u00F3 s\\u1EB5n \\u0111\\u1EC3 thay th\\u1EBF kh\\u00F4ng?\",\"answer\":\"C\\u00E1c ph\\u1EE5 t\\u00F9ng th\\u01B0\\u1EDDng hao m\\u00F2n nh\\u01B0 bugi, l\\u1ECDc gi\\u00F3, d\\u00E2y curoa, x\\u00EDch c\\u01B0a, l\\u01B0\\u1EE1i c\\u1EAFt v\\u00E0 \\u0111\\u1EA7u phun lu\\u00F4n c\\u00F3 s\\u1EB5n kho \\u0111\\u1EC3 thay th\\u1EBF nhanh, h\\u1EA1n ch\\u1EBF gi\\u00E1n \\u0111o\\u1EA1n m\\u00F9a v\\u1EE5.\"},{\"question\":\"Bao l\\u00E2u n\\u00EAn b\\u1EA3o d\\u01B0\\u1EE1ng m\\u00E1y m\\u1ED9t l\\u1EA7n?\",\"answer\":\"N\\u00EAn v\\u1EC7 sinh sau m\\u1ED7i l\\u1EA7n s\\u1EED d\\u1EE5ng, thay nh\\u1EDBt v\\u00E0 ki\\u1EC3m tra t\\u1ED5ng th\\u1EC3 sau kho\\u1EA3ng 50 \\u0111\\u1EBFn 100 gi\\u1EDD v\\u1EADn h\\u00E0nh ho\\u1EB7c tr\\u01B0\\u1EDBc m\\u1ED7i v\\u1EE5 m\\u1EDBi. Ch\\u00FAng t\\u00F4i c\\u00F3 l\\u1ECBch nh\\u1EAFc v\\u00E0 d\\u1ECBch v\\u1EE5 b\\u1EA3o d\\u01B0\\u1EE1ng t\\u1EADn n\\u01A1i.\"},{\"question\":\"C\\u00E1c m\\u00E1y \\u0111\\u01B0\\u1EE3c ph\\u00E2n ph\\u1ED1i c\\u1EE7a th\\u01B0\\u01A1ng hi\\u1EC7u n\\u00E0o?\",\"answer\":\"Ch\\u00FAng t\\u00F4i ph\\u00E2n ph\\u1ED1i m\\u00E1y c\\u1EE7a nhi\\u1EC1u th\\u01B0\\u01A1ng hi\\u1EC7u ch\\u00EDnh h\\u00E3ng. Danh s\\u00E1ch th\\u01B0\\u01A1ng hi\\u1EC7u c\\u1EE5 th\\u1EC3 hi\\u1EC3n th\\u1ECB ngay tr\\u00EAn trang, b\\u1EA1n c\\u00F3 th\\u1EC3 l\\u1ECDc s\\u1EA3n ph\\u1EA9m theo t\\u1EEBng th\\u01B0\\u01A1ng hi\\u1EC7u.\"}]},\"cta\":{\"heading\":\"C\\u1EA7n ch\\u1ECDn m\\u00E1y cho m\\u00F9a v\\u1EE5 t\\u1EDBi?\",\"highlightedHeading\":\"K\\u1EF9 thu\\u1EADt vi\\u00EAn lu\\u00F4n s\\u1EB5n s\\u00E0ng t\\u01B0 v\\u1EA5n\",\"description\":\"Cho ch\\u00FAng t\\u00F4i bi\\u1EBFt di\\u1EC7n t\\u00EDch canh t\\u00E1c v\\u00E0 lo\\u1EA1i c\\u00E2y tr\\u1ED3ng, \\u0111\\u1ED9i ng\\u0169 s\\u1EBD \\u0111\\u1EC1 xu\\u1EA5t thi\\u1EBFt b\\u1ECB ph\\u00F9 h\\u1EE3p, b\\u00E1o gi\\u00E1 chi ti\\u1EBFt v\\u00E0 h\\u1ED7 tr\\u1EE3 giao m\\u00E1y t\\u1EADn n\\u01A1i.\",\"phone\":\"19001234\",\"phoneButtonLabel\":\"Hotline mi\\u1EC5n ph\\u00ED\",\"email\":\"hello@ecotech.vn\",\"emailButtonLabel\":\"G\\u1EEDi email cho ch\\u00FAng t\\u00F4i\",\"note\":\"B\\u1EA3o h\\u00E0nh 12 \\u0111\\u1EBFn 24 th\\u00E1ng, k\\u1EF9 thu\\u1EADt c\\u00F3 m\\u1EB7t trong 24 gi\\u1EDD.\"}}", true, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) }
                });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000001-0000-0000-0000-000000000301",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000002-0000-0000-0000-000000000302",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000003-0000-0000-0000-000000000303",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000004-0000-0000-0000-000000000304",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000005-0000-0000-0000-000000000305",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.UpdateData(
                table: "ElectricalApplianceProducts",
                keyColumn: "Id",
                keyValue: "ea000006-0000-0000-0000-000000000306",
                columns: new[] { "CategoryId", "Colors" },
                values: new object[] { null, "[]" });

            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "Id", "CreatedAt", "Description", "ImageUrl", "IsUsed", "Kind", "Metadata", "Name", "ParentId", "Slug", "SortOrder", "UpdatedAt" },
                values: new object[,]
                {
                    { "cat-appliance-ac-quy-cac-loai", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Ắc quy các loại", null, "ac-quy-cac-loai", 60, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-appliance-dung-cu-cam-tay", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Dụng cụ cầm tay", null, "dung-cu-cam-tay", 20, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-appliance-may-bom", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Máy Bơm", null, "may-bom", 50, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-appliance-may-rua-xe", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Máy rửa xe", null, "may-rua-xe", 10, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-appliance-may-xay-dung", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Máy xây dựng", null, "may-xay-dung", 30, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-appliance-mo-to", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Mô Tơ", null, "mo-to", 40, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-12a", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "133-12A", null, "133-12a", 10, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-20a", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "133-20A", null, "133-20a", 20, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-xe-bull", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Xe Bull", null, "xe-bull", 40, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-xe-cv-1-yen", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Xe CV 1 yên", null, "xe-cv-1-yen", 60, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-xe-cv-2-yen", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Xe CV 2 yên", null, "xe-cv-2-yen", 70, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-xe-q1", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Xe Q1", null, "xe-q1", 50, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-xe-xs", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Xe XS", null, "xe-xs", 30, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-binh-phun-dien", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Bình phun điện", null, "binh-phun-dien", 40, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-dau-phun", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Đầu phun (đầu xịt)", null, "dau-phun", 110, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-day-phun", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Dây phun", null, "day-phun", 100, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-dong-co-dau", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Động cơ dầu", null, "dong-co-dau", 90, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-dong-co-no", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Động cơ nổ", null, "dong-co-no", 70, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-dong-co-xang", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Động cơ xăng", null, "dong-co-xang", 80, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-bom-xang", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy bơm xăng", null, "may-bom-xang", 120, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-cat-co", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy cắt cỏ", null, "may-cat-co", 20, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-cua", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy cưa", null, "may-cua", 10, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-phun", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy phun", null, "may-phun", 60, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-sat-gao", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy sát gạo", null, "may-sat-gao", 30, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-soi-dat", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy sới đất", null, "may-soi-dat", 50, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-thai-chuoi", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy thái chuối", null, "may-thai-chuoi", 140, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-machine-may-tuot-lua", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Machine", "{}", "Máy tuốt lúa", null, "may-tuot-lua", 130, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) }
                });

            migrationBuilder.InsertData(
                table: "SiteSettings",
                columns: new[] { "Id", "ContentJson", "IsUsed", "UpdatedAt" },
                values: new object[] { "site", "{\"version\":1,\"brand\":{\"name\":\"EcoTech\",\"tagline\":\"Xe \\u0111i\\u1EC7n \\u00B7 N\\u00F4ng nghi\\u1EC7p \\u00B7 \\u0110i\\u1EC7n c\\u01A1\"},\"contact\":{\"phone\":\"19001234\",\"phoneLabel\":\"Hotline\",\"phoneDisplay\":\"1900 1234\",\"email\":\"hello@ecotech.vn\",\"address\":\"123 \\u0110\\u01B0\\u1EDDng D\\u1ECBch V\\u1ECDng H\\u1EADu, C\\u1EA7u Gi\\u1EA5y, H\\u00E0 N\\u1ED9i\",\"workingHours\":\"Th\\u1EE9 2 \\u2013 Ch\\u1EE7 Nh\\u1EADt \\u00B7 7h \\u2013 21h\",\"zaloUrl\":\"\",\"facebookUrl\":\"\"},\"footer\":{\"description\":\"Xe \\u0111i\\u1EC7n, m\\u00E1y n\\u00F4ng nghi\\u1EC7p v\\u00E0 \\u0111i\\u1EC7n c\\u01A1 d\\u00E2n d\\u1EE5ng ch\\u00EDnh h\\u00E3ng, k\\u00E8m b\\u1EA3o h\\u00E0nh v\\u00E0 k\\u1EF9 thu\\u1EADt t\\u1EADn n\\u01A1i.\",\"navHeading\":\"\\u0110i\\u1EC1u h\\u01B0\\u1EDBng\",\"contactHeading\":\"Li\\u00EAn h\\u1EC7\",\"copyright\":\"\\u00A9 2026 EcoTech. B\\u1EA3o l\\u01B0u m\\u1ECDi quy\\u1EC1n.\"}}", true, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) });

            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "Id", "CreatedAt", "Description", "ImageUrl", "IsUsed", "Kind", "Metadata", "Name", "ParentId", "Slug", "SortOrder", "UpdatedAt" },
                values: new object[,]
                {
                    { "cat-bike-133-12a-ban-full", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản full", "cat-bike-133-12a", "133-12a-ban-full", 30, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-12a-ban-re", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản rẻ", "cat-bike-133-12a", "133-12a-ban-re", 10, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-12a-ban-thuong", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản thường", "cat-bike-133-12a", "133-12a-ban-thuong", 20, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-20a-ban-full", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản full", "cat-bike-133-20a", "133-20a-ban-full", 30, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-20a-ban-re", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản rẻ", "cat-bike-133-20a", "133-20a-ban-re", 10, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) },
                    { "cat-bike-133-20a-ban-thuong", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Bike", "{}", "Bản thường", "cat-bike-133-20a", "133-20a-ban-thuong", 20, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ElectricBikeProducts_CategoryId",
                table: "ElectricBikeProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_CategoryId",
                table: "ElectricalApplianceProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_AgriculturalMachineProducts_CategoryId",
                table: "AgriculturalMachineProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategories_Kind_Slug",
                table: "ProductCategories",
                columns: new[] { "Kind", "Slug" },
                unique: true,
                filter: "\"IsUsed\"");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategories_ParentId",
                table: "ProductCategories",
                column: "ParentId");

            migrationBuilder.AddForeignKey(
                name: "FK_AgriculturalMachineProducts_ProductCategories_CategoryId",
                table: "AgriculturalMachineProducts",
                column: "CategoryId",
                principalTable: "ProductCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ElectricalApplianceProducts_ProductCategories_CategoryId",
                table: "ElectricalApplianceProducts",
                column: "CategoryId",
                principalTable: "ProductCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ElectricBikeProducts_ProductCategories_CategoryId",
                table: "ElectricBikeProducts",
                column: "CategoryId",
                principalTable: "ProductCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AgriculturalMachineProducts_ProductCategories_CategoryId",
                table: "AgriculturalMachineProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_ElectricalApplianceProducts_ProductCategories_CategoryId",
                table: "ElectricalApplianceProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_ElectricBikeProducts_ProductCategories_CategoryId",
                table: "ElectricBikeProducts");

            migrationBuilder.DropTable(
                name: "CategoryPageContents");

            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.DropTable(
                name: "SiteSettings");

            migrationBuilder.DropIndex(
                name: "IX_ElectricBikeProducts_CategoryId",
                table: "ElectricBikeProducts");

            migrationBuilder.DropIndex(
                name: "IX_ElectricalApplianceProducts_CategoryId",
                table: "ElectricalApplianceProducts");

            migrationBuilder.DropIndex(
                name: "IX_AgriculturalMachineProducts_CategoryId",
                table: "AgriculturalMachineProducts");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "ElectricBikeProducts");

            migrationBuilder.DropColumn(
                name: "Colors",
                table: "ElectricBikeProducts");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "ElectricalApplianceProducts");

            migrationBuilder.DropColumn(
                name: "Colors",
                table: "ElectricalApplianceProducts");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "AgriculturalMachineProducts");

            migrationBuilder.DropColumn(
                name: "Colors",
                table: "AgriculturalMachineProducts");
        }
    }
}
