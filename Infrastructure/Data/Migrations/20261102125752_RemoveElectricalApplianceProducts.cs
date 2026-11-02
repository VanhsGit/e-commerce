using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class RemoveElectricalApplianceProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("""
                DELETE FROM "Brands" AS brand
                WHERE EXISTS (
                    SELECT 1 FROM "ElectricalApplianceProducts" AS product
                    WHERE product."BrandId" = brand."Id"
                )
                  AND NOT EXISTS (
                    SELECT 1 FROM "ElectricBikeProducts" WHERE "BrandId" = brand."Id"
                  )
                  AND NOT EXISTS (
                    SELECT 1 FROM "AgriculturalMachineProducts" WHERE "BrandId" = brand."Id"
                  );

                DELETE FROM "Companies" AS company
                WHERE EXISTS (
                    SELECT 1 FROM "ElectricalApplianceProducts" AS product
                    WHERE product."CompanyId" = company."Id"
                )
                  AND NOT EXISTS (
                    SELECT 1 FROM "ElectricBikeProducts" WHERE "CompanyId" = company."Id"
                  )
                  AND NOT EXISTS (
                    SELECT 1 FROM "AgriculturalMachineProducts" WHERE "CompanyId" = company."Id"
                  );
                """);

            migrationBuilder.DropTable(
                name: "ElectricalApplianceProducts");

            migrationBuilder.Sql("""
                WITH RECURSIVE appliance_categories("Id") AS (
                    SELECT "Id" FROM "ProductCategories" WHERE "Kind" = 'Appliance'
                    UNION
                    SELECT child."Id"
                    FROM "ProductCategories" AS child
                    INNER JOIN appliance_categories AS parent ON child."ParentId" = parent."Id"
                    WHERE child."Kind" = 'Appliance'
                )
                DELETE FROM "ProductCategories"
                WHERE "Id" IN (SELECT "Id" FROM appliance_categories);

                UPDATE "HomePageContents"
                SET "ContentJson" = jsonb_set(
                    jsonb_set(
                        jsonb_set(
                            "ContentJson",
                            '{hero,cards}',
                            COALESCE((
                                SELECT jsonb_agg(item ORDER BY ordinal)
                                FROM jsonb_array_elements(COALESCE("ContentJson" #> '{hero,cards}', '[]'::jsonb))
                                    WITH ORDINALITY AS entries(item, ordinal)
                                WHERE item->>'kind' IS DISTINCT FROM 'appliance'
                            ), '[]'::jsonb)
                        ),
                        '{industries}',
                        COALESCE((
                            SELECT jsonb_agg(item ORDER BY ordinal)
                            FROM jsonb_array_elements(COALESCE("ContentJson"->'industries', '[]'::jsonb))
                                WITH ORDINALITY AS entries(item, ordinal)
                            WHERE item->>'kind' IS DISTINCT FROM 'appliance'
                        ), '[]'::jsonb)
                    ),
                    '{solutions,images}',
                    COALESCE((
                        SELECT jsonb_agg(item ORDER BY ordinal)
                        FROM jsonb_array_elements(COALESCE("ContentJson" #> '{solutions,images}', '[]'::jsonb))
                            WITH ORDINALITY AS entries(item, ordinal)
                        WHERE item->>'kind' IS DISTINCT FROM 'appliance'
                    ), '[]'::jsonb)
                );

                DELETE FROM "Brands"
                WHERE "Id" = 'brand-seed-electrical-001'
                  AND NOT EXISTS (SELECT 1 FROM "ElectricBikeProducts" WHERE "BrandId" = 'brand-seed-electrical-001')
                  AND NOT EXISTS (SELECT 1 FROM "AgriculturalMachineProducts" WHERE "BrandId" = 'brand-seed-electrical-001');

                DELETE FROM "Companies"
                WHERE "Id" = 'company-seed-electrical-001'
                  AND NOT EXISTS (SELECT 1 FROM "ElectricBikeProducts" WHERE "CompanyId" = 'company-seed-electrical-001')
                  AND NOT EXISTS (SELECT 1 FROM "AgriculturalMachineProducts" WHERE "CompanyId" = 'company-seed-electrical-001');
                """);

            migrationBuilder.Sql("""
                UPDATE "HomePageContents"
                SET "ContentJson" = jsonb_set(
                    jsonb_set(
                        jsonb_set(
                            "ContentJson",
                            '{hero,title}',
                            CASE
                                WHEN "ContentJson" #>> '{hero,title}' = 'Ba ngành hàng,' THEN to_jsonb('Hai ngành hàng,'::text)
                                ELSE COALESCE("ContentJson" #> '{hero,title}', 'null'::jsonb)
                            END,
                            true
                        ),
                        '{hero,description}',
                        CASE
                            WHEN "ContentJson" #>> '{hero,description}' IS NULL THEN COALESCE("ContentJson" #> '{hero,description}', 'null'::jsonb)
                            ELSE to_jsonb(replace(
                                "ContentJson" #>> '{hero,description}',
                                ' và điện gia dụng cho ngôi nhà tiện nghi',
                                ''
                            ))
                        END,
                        true
                    ),
                    '{company,description}',
                    CASE
                        WHEN "ContentJson" #>> '{company,description}' IS NULL THEN COALESCE("ContentJson" #> '{company,description}', 'null'::jsonb)
                        ELSE to_jsonb(replace(
                            "ContentJson" #>> '{company,description}',
                            'máy nông nghiệp và điện gia dụng',
                            'máy nông nghiệp'
                        ))
                    END,
                    true
                );

                UPDATE "HomePageContents"
                SET "ContentJson" = jsonb_set(
                    "ContentJson",
                    '{company,highlights}',
                    COALESCE((
                        SELECT jsonb_agg(item ORDER BY ordinal)
                        FROM jsonb_array_elements(COALESCE("ContentJson" #> '{company,highlights}', '[]'::jsonb))
                            WITH ORDINALITY AS entries(item, ordinal)
                        WHERE item->>'description' IS NULL OR item->>'description' NOT ILIKE '%điện gia dụng%'
                    ), '[]'::jsonb),
                    true
                )
                WHERE "ContentJson" #> '{company,highlights}' IS NOT NULL;
                """);

            migrationBuilder.DeleteData(
                table: "CategoryPageContents",
                keyColumn: "Id",
                keyValue: "appliance");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ElectricalApplianceProducts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    BrandId = table.Column<string>(type: "text", nullable: false),
                    CategoryId = table.Column<string>(type: "text", nullable: true),
                    CompanyId = table.Column<string>(type: "text", nullable: false),
                    Brand = table.Column<string>(type: "text", nullable: false),
                    Capacity = table.Column<string>(type: "text", nullable: true),
                    Colors = table.Column<string>(type: "jsonb", nullable: false, defaultValueSql: "'[]'::jsonb"),
                    Compatibility = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true),
                    Metadata = table.Column<string>(type: "jsonb", nullable: false, defaultValueSql: "'{}'::jsonb"),
                    Model = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    PictureUrl = table.Column<string>(type: "text", nullable: false),
                    Power = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    StockQuantity = table.Column<int>(type: "integer", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Voltage = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ElectricalApplianceProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ElectricalApplianceProducts_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ElectricalApplianceProducts_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ElectricalApplianceProducts_ProductCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "ProductCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.Sql("""
                INSERT INTO "Brands" ("Id", "CreatedAt", "Description", "IsUsed", "LogoUrl", "Metadata", "Name", "UpdatedAt")
                VALUES (
                    'brand-seed-electrical-001',
                    TIMESTAMPTZ '2026-09-23 00:00:00+00',
                    'Thương hiệu mẫu cho danh mục đồ điện gia dụng.',
                    TRUE,
                    '/assets/images/img-ph.jpg',
                    '{}'::jsonb,
                    'Điện Cơ Việt',
                    TIMESTAMPTZ '2026-09-23 00:00:00+00'
                )
                ON CONFLICT ("Id") DO NOTHING;
                """);

            migrationBuilder.InsertData(
                table: "CategoryPageContents",
                columns: new[] { "Id", "ContentJson", "IsUsed", "UpdatedAt" },
                values: new object[] { "appliance", "{\"version\":1,\"kind\":\"appliance\",\"hero\":{\"badge\":\"\\u0110\\u1ED3 \\u0111i\\u1EC7n ch\\u00EDnh h\\u00E3ng\",\"title\":\"\\u0110i\\u1EC7n c\\u01A1 d\\u00E2n d\\u1EE5ng\",\"highlightedTitle\":\"cho ng\\u00F4i nh\\u00E0 v\\u00E0 c\\u00F4ng tr\\u00ECnh\",\"description\":\"M\\u00E1y r\\u1EEDa xe, d\\u1EE5ng c\\u1EE5 c\\u1EA7m tay, m\\u00E1y x\\u00E2y d\\u1EF1ng, m\\u00F4 t\\u01A1, m\\u00E1y b\\u01A1m v\\u00E0 \\u1EAFc quy c\\u00E1c lo\\u1EA1i. Thi\\u1EBFt b\\u1ECB thi\\u1EBFt y\\u1EBFu cho gia \\u0111\\u00ECnh, x\\u01B0\\u1EDFng nh\\u1ECF v\\u00E0 c\\u00F4ng tr\\u00ECnh, \\u0111\\u01B0\\u1EE3c b\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng v\\u00E0 \\u0111\\u1ED5i m\\u1EDBi nhanh n\\u1EBFu l\\u1ED7i.\",\"imageSrc\":\"assets/images/home/home-appliances.webp\",\"imageAlt\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n c\\u01A1 d\\u00E2n d\\u1EE5ng trong ng\\u00F4i nh\\u00E0 hi\\u1EC7n \\u0111\\u1EA1i\",\"primaryCtaLabel\":\"Xem danh s\\u00E1ch s\\u1EA3n ph\\u1EA9m\",\"secondaryCtaLabel\":\"Nh\\u1EADn t\\u01B0 v\\u1EA5n\",\"metrics\":[{\"value\":\"6\",\"label\":\"Nh\\u00F3m s\\u1EA3n ph\\u1EA9m\"},{\"value\":\"100%\",\"label\":\"H\\u00E0ng ch\\u00EDnh h\\u00E3ng\"},{\"value\":\"7 ng\\u00E0y\",\"label\":\"\\u0110\\u1ED5i m\\u1EDBi n\\u1EBFu l\\u1ED7i\"}]},\"intro\":{\"eyebrow\":\"V\\u1EC1 \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"heading\":\"Thi\\u1EBFt b\\u1ECB \\u0111\\u00FAng c\\u00F4ng su\\u1EA5t, d\\u00F9ng b\\u1EC1n l\\u00E2u\",\"body\":\"M\\u1ED7i s\\u1EA3n ph\\u1EA9m \\u0111\\u1EC1u \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n theo c\\u00F4ng su\\u1EA5t, \\u0111i\\u1EC7n \\u00E1p v\\u00E0 m\\u00F4i tr\\u01B0\\u1EDDng s\\u1EED d\\u1EE5ng th\\u1EF1c t\\u1EBF. B\\u1EA1n mua \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB c\\u1EA7n d\\u00F9ng, v\\u1EADn h\\u00E0nh an to\\u00E0n, ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n v\\u00E0 d\\u1EC5 b\\u1EA3o tr\\u00EC l\\u00E2u d\\u00E0i.\",\"bullets\":[\"M\\u00E1y r\\u1EEDa xe \\u00E1p l\\u1EF1c cho gia \\u0111\\u00ECnh, ti\\u1EC7m r\\u1EEDa xe v\\u00E0 v\\u1EC7 sinh c\\u00F4ng tr\\u00ECnh\",\"D\\u1EE5ng c\\u1EE5 c\\u1EA7m tay v\\u00E0 m\\u00E1y x\\u00E2y d\\u1EF1ng cho th\\u1EE3 chuy\\u00EAn nghi\\u1EC7p v\\u00E0 t\\u1EF1 l\\u00E0m\",\"M\\u00F4 t\\u01A1 v\\u00E0 m\\u00E1y b\\u01A1m \\u0111a d\\u1EA1ng c\\u00F4ng su\\u1EA5t cho t\\u01B0\\u1EDBi ti\\u00EAu, c\\u1EA5p n\\u01B0\\u1EDBc, x\\u01B0\\u1EDFng\",\"\\u1EAEc quy c\\u00E1c lo\\u1EA1i cho xe, \\u0111\\u00E8n, inverter v\\u00E0 h\\u1EC7 th\\u1ED1ng l\\u01B0u \\u0111i\\u1EC7n\"]},\"highlights\":[{\"icon\":\"bolt\",\"accent\":\"bg-sky-500\",\"title\":\"Ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n n\\u0103ng\",\"description\":\"Thi\\u1EBFt b\\u1ECB \\u0111\\u01B0\\u1EE3c ch\\u1ECDn theo hi\\u1EC7u su\\u1EA5t v\\u00E0 nhu c\\u1EA7u s\\u1EED d\\u1EE5ng th\\u1EF1c t\\u1EBF, gi\\u1EA3m chi ph\\u00ED \\u0111i\\u1EC7n h\\u1EB1ng th\\u00E1ng.\"},{\"icon\":\"verified_user\",\"accent\":\"bg-emerald-500\",\"title\":\"Ch\\u00EDnh h\\u00E3ng, b\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng\",\"description\":\"Ngu\\u1ED3n g\\u1ED1c minh b\\u1EA1ch, tem b\\u1EA3o h\\u00E0nh \\u0111\\u1EA7y \\u0111\\u1EE7 v\\u00E0 ch\\u00EDnh s\\u00E1ch h\\u1EADu m\\u00E3i nhanh g\\u1ECDn.\"},{\"icon\":\"local_shipping\",\"accent\":\"bg-violet-500\",\"title\":\"Giao h\\u00E0ng nhanh\",\"description\":\"T\\u01B0 v\\u1EA5n v\\u1ECB tr\\u00ED l\\u1EAFp \\u0111\\u1EB7t, v\\u1EADn chuy\\u1EC3n an to\\u00E0n v\\u00E0 h\\u1ED7 tr\\u1EE3 l\\u1EAFp \\u0111\\u1EB7t khi c\\u1EA7n.\"},{\"icon\":\"handyman\",\"accent\":\"bg-amber-500\",\"title\":\"D\\u1EC5 b\\u1EA3o tr\\u00EC, s\\u1EB5n linh ki\\u1EC7n\",\"description\":\"Linh ki\\u1EC7n thay th\\u1EBF lu\\u00F4n s\\u1EB5n kho, k\\u1EF9 thu\\u1EADt vi\\u00EAn h\\u1ED7 tr\\u1EE3 trong su\\u1ED1t qu\\u00E1 tr\\u00ECnh s\\u1EED d\\u1EE5ng.\"}],\"showcase\":{\"heading\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n cho m\\u1ECDi kh\\u00F4ng gian\",\"description\":\"T\\u1EEB gara gia \\u0111\\u00ECnh \\u0111\\u1EBFn c\\u00F4ng tr\\u00ECnh nh\\u1ECF, b\\u1ED9 thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n c\\u01A1 c\\u1EE7a ch\\u00FAng t\\u00F4i gi\\u00FAp c\\u00F4ng vi\\u1EC7c nhanh g\\u1ECDn v\\u00E0 an to\\u00E0n h\\u01A1n.\",\"images\":[{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n d\\u00E2n d\\u1EE5ng trong ng\\u00F4i nh\\u00E0\",\"label\":\"Gia \\u0111\\u00ECnh\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"D\\u1EE5ng c\\u1EE5 v\\u00E0 m\\u00E1y m\\u00F3c cho c\\u00F4ng tr\\u00ECnh\",\"label\":\"C\\u00F4ng tr\\u00ECnh\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"M\\u00F4 t\\u01A1 v\\u00E0 m\\u00E1y b\\u01A1m v\\u1EADn h\\u00E0nh \\u1ED5n \\u0111\\u1ECBnh\",\"label\":\"V\\u1EADn h\\u00E0nh\"}]},\"catalog\":{\"heading\":\"Danh s\\u00E1ch \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"description\":\"L\\u1ECDc theo nh\\u00F3m s\\u1EA3n ph\\u1EA9m, th\\u01B0\\u01A1ng hi\\u1EC7u ho\\u1EB7c m\\u1EE9c gi\\u00E1 \\u0111\\u1EC3 ch\\u1ECDn \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB b\\u1EA1n c\\u1EA7n.\",\"allCategoriesLabel\":\"T\\u1EA5t c\\u1EA3 danh m\\u1EE5c\",\"allBrandsLabel\":\"T\\u1EA5t c\\u1EA3 th\\u01B0\\u01A1ng hi\\u1EC7u\",\"searchPlaceholder\":\"T\\u00ECm theo t\\u00EAn, m\\u00E3, th\\u01B0\\u01A1ng hi\\u1EC7u...\",\"sortLabel\":\"S\\u1EAFp x\\u1EBFp\",\"emptyTitle\":\"Ch\\u01B0a c\\u00F3 s\\u1EA3n ph\\u1EA9m ph\\u00F9 h\\u1EE3p\",\"emptyDescription\":\"H\\u00E3y th\\u1EED b\\u1ECF b\\u1EDBt b\\u1ED9 l\\u1ECDc ho\\u1EB7c ch\\u1ECDn nh\\u00F3m s\\u1EA3n ph\\u1EA9m kh\\u00E1c. B\\u1EA1n c\\u0169ng c\\u00F3 th\\u1EC3 g\\u1ECDi hotline \\u0111\\u1EC3 \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n tr\\u1EF1c ti\\u1EBFp.\",\"resultSuffixLabel\":\"s\\u1EA3n ph\\u1EA9m ph\\u00F9 h\\u1EE3p\",\"detailButtonLabel\":\"Xem chi ti\\u1EBFt\",\"clearFiltersLabel\":\"X\\u00F3a b\\u1ED9 l\\u1ECDc\",\"priceFromLabel\":\"Gi\\u00E1 t\\u1EEB\",\"priceToLabel\":\"Gi\\u00E1 \\u0111\\u1EBFn\",\"sortDefaultLabel\":\"M\\u1EB7c \\u0111\\u1ECBnh\",\"sortPriceAscLabel\":\"Gi\\u00E1 th\\u1EA5p \\u0111\\u1EBFn cao\",\"sortPriceDescLabel\":\"Gi\\u00E1 cao \\u0111\\u1EBFn th\\u1EA5p\",\"sortNameAscLabel\":\"T\\u00EAn A \\u2192 Z\",\"sortNewestLabel\":\"M\\u1EDBi nh\\u1EA5t\"},\"brands\":{\"heading\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u \\u0111\\u1ED3 \\u0111i\\u1EC7n ph\\u00E2n ph\\u1ED1i\",\"description\":\"Th\\u01B0\\u01A1ng hi\\u1EC7u \\u0111\\u01B0\\u1EE3c ch\\u1ECDn l\\u1ECDc theo \\u0111\\u1ED9 an to\\u00E0n, \\u0111\\u1ED9 b\\u1EC1n v\\u00E0 kh\\u1EA3 n\\u0103ng cung \\u1EE9ng linh ki\\u1EC7n thay th\\u1EBF.\"},\"faq\":{\"eyebrow\":\"C\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p\",\"heading\":\"C\\u00E2u h\\u1ECFi v\\u1EC1 \\u0111\\u1ED3 \\u0111i\\u1EC7n\",\"description\":\"Nh\\u1EEFng c\\u00E2u h\\u1ECFi th\\u01B0\\u1EDDng g\\u1EB7p khi ch\\u1ECDn c\\u00F4ng su\\u1EA5t, m\\u00F4 t\\u01A1, \\u1EAFc quy v\\u00E0 ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh \\u0111\\u1ED3 \\u0111i\\u1EC7n.\",\"items\":[{\"question\":\"M\\u00E1y r\\u1EEDa xe c\\u00F4ng su\\u1EA5t bao nhi\\u00EAu l\\u00E0 \\u0111\\u1EE7 d\\u00F9ng?\",\"answer\":\"V\\u1EDBi gia \\u0111\\u00ECnh, m\\u00E1y t\\u1EEB 1500 \\u0111\\u1EBFn 2000W l\\u00E0 ph\\u00F9 h\\u1EE3p \\u0111\\u1EC3 r\\u1EEDa xe m\\u00E1y v\\u00E0 \\u00F4 t\\u00F4. Ti\\u1EC7m r\\u1EEDa xe ho\\u1EB7c v\\u1EC7 sinh c\\u00F4ng tr\\u00ECnh n\\u00EAn ch\\u1ECDn m\\u00E1y c\\u00F4ng su\\u1EA5t l\\u1EDBn h\\u01A1n, ch\\u1EA1y li\\u00EAn t\\u1EE5c v\\u00E0 c\\u00F3 m\\u00F4 t\\u01A1 ch\\u1ED1ng qu\\u00E1 nhi\\u1EC7t.\"},{\"question\":\"Ch\\u1ECDn m\\u00F4 t\\u01A1 nh\\u01B0 th\\u1EBF n\\u00E0o cho \\u0111\\u00FAng?\",\"answer\":\"B\\u1EA1n c\\u1EA7n x\\u00E1c \\u0111\\u1ECBnh c\\u00F4ng su\\u1EA5t t\\u1EA3i, \\u0111i\\u1EC7n \\u00E1p ngu\\u1ED3n (m\\u1ED9t pha hay ba pha) v\\u00E0 t\\u1ED1c \\u0111\\u1ED9 v\\u00F2ng quay c\\u1EA7n thi\\u1EBFt. H\\u00E3y g\\u1EEDi th\\u00F4ng s\\u1ED1 thi\\u1EBFt b\\u1ECB c\\u1EA7n k\\u00E9o, ch\\u00FAng t\\u00F4i s\\u1EBD t\\u01B0 v\\u1EA5n m\\u00F4 t\\u01A1 ph\\u00F9 h\\u1EE3p.\"},{\"question\":\"Ch\\u1ECDn \\u1EAFc quy theo ti\\u00EAu ch\\u00ED n\\u00E0o?\",\"answer\":\"Ch\\u1ECDn theo \\u0111i\\u1EC7n \\u00E1p (v\\u00ED d\\u1EE5 12V), dung l\\u01B0\\u1EE3ng Ah v\\u00E0 m\\u1EE5c \\u0111\\u00EDch s\\u1EED d\\u1EE5ng: kh\\u1EDFi \\u0111\\u1ED9ng, l\\u01B0u \\u0111i\\u1EC7n hay ch\\u1EA1y thi\\u1EBFt b\\u1ECB li\\u00EAn t\\u1EE5c. Dung l\\u01B0\\u1EE3ng l\\u1EDBn h\\u01A1n s\\u1EBD c\\u1EA5p \\u0111i\\u1EC7n l\\u00E2u h\\u01A1n nh\\u01B0ng c\\u1EA7n b\\u1ED9 s\\u1EA1c t\\u01B0\\u01A1ng th\\u00EDch.\"},{\"question\":\"Ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh nh\\u01B0 th\\u1EBF n\\u00E0o?\",\"answer\":\"M\\u1ECDi s\\u1EA3n ph\\u1EA9m \\u0111\\u01B0\\u1EE3c b\\u1EA3o h\\u00E0nh ch\\u00EDnh h\\u00E3ng theo th\\u1EDDi h\\u1EA1n ghi tr\\u00EAn tem v\\u00E0 h\\u00F3a \\u0111\\u01A1n. S\\u1EA3n ph\\u1EA9m l\\u1ED7i do nh\\u00E0 s\\u1EA3n xu\\u1EA5t \\u0111\\u01B0\\u1EE3c \\u0111\\u1ED5i m\\u1EDBi trong 7 ng\\u00E0y, sau \\u0111\\u00F3 h\\u1ED7 tr\\u1EE3 s\\u1EEDa ch\\u1EEFa theo ch\\u00EDnh s\\u00E1ch b\\u1EA3o h\\u00E0nh.\"}]},\"cta\":{\"heading\":\"C\\u1EA7n ch\\u1ECDn \\u0111\\u00FAng thi\\u1EBFt b\\u1ECB?\",\"highlightedHeading\":\"T\\u01B0 v\\u1EA5n c\\u00F4ng su\\u1EA5t mi\\u1EC5n ph\\u00ED\",\"description\":\"M\\u00F4 t\\u1EA3 nhu c\\u1EA7u s\\u1EED d\\u1EE5ng, \\u0111\\u1ED9i ng\\u0169 s\\u1EBD g\\u1EE3i \\u00FD thi\\u1EBFt b\\u1ECB \\u0111\\u00FAng c\\u00F4ng su\\u1EA5t, b\\u00E1o gi\\u00E1 r\\u00F5 r\\u00E0ng v\\u00E0 h\\u1ED7 tr\\u1EE3 giao h\\u00E0ng nhanh ch\\u00F3ng.\",\"phone\":\"19001234\",\"phoneButtonLabel\":\"Hotline mi\\u1EC5n ph\\u00ED\",\"email\":\"hello@ecotech.vn\",\"emailButtonLabel\":\"G\\u1EEDi email cho ch\\u00FAng t\\u00F4i\",\"note\":\"H\\u00E0ng ch\\u00EDnh h\\u00E3ng, \\u0111\\u1ED5i m\\u1EDBi trong 7 ng\\u00E0y n\\u1EBFu l\\u1ED7i do nh\\u00E0 s\\u1EA3n xu\\u1EA5t.\"}}", true, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) });

            migrationBuilder.Sql("""
                INSERT INTO "Companies" (
                    "Id", "Address", "CreatedAt", "Description", "Email", "IsUsed",
                    "LogoUrl", "Metadata", "Name", "PhoneNumber", "UpdatedAt", "Website"
                )
                VALUES (
                    'company-seed-electrical-001',
                    'Việt Nam',
                    TIMESTAMPTZ '2026-09-23 00:00:00+00',
                    'Đơn vị phân phối thiết bị điện cơ và điện dân dụng.',
                    'dienco@example.com',
                    TRUE,
                    '/assets/images/img-ph.jpg',
                    '{}'::jsonb,
                    'Điện Cơ Dân Dụng Việt',
                    '0900000000',
                    TIMESTAMPTZ '2026-09-23 00:00:00+00',
                    ''
                )
                ON CONFLICT ("Id") DO NOTHING;
                """);

            migrationBuilder.UpdateData(
                table: "HomePageContents",
                keyColumn: "Id",
                keyValue: "home",
                column: "ContentJson",
                value: "{\"version\":1,\"navigation\":{\"heading\":\"B\\u1EA1n \\u0111ang quan t\\u00E2m \\u0111i\\u1EC1u g\\u00EC?\",\"homeLabel\":\"Trang ch\\u1EE7\",\"recruitmentLabel\":\"Tuy\\u1EC3n d\\u1EE5ng\"},\"company\":{\"eyebrow\":\"V\\u1EC1 EcoTech\",\"title\":\"\\u0110\\u1ED3ng h\\u00E0nh c\\u00F9ng cu\\u1ED9c s\\u1ED1ng v\\u00E0 s\\u1EA3n xu\\u1EA5t\",\"description\":\"EcoTech k\\u1EBFt n\\u1ED1i c\\u00E1c gi\\u1EA3i ph\\u00E1p xe \\u0111i\\u1EC7n, m\\u00E1y n\\u00F4ng nghi\\u1EC7p v\\u00E0 \\u0111i\\u1EC7n gia d\\u1EE5ng trong m\\u1ED9t \\u0111i\\u1EC3m \\u0111\\u1EBFn.\",\"detail\":\"T\\u1EEB l\\u1EF1a ch\\u1ECDn thi\\u1EBFt b\\u1ECB \\u0111\\u1EBFn s\\u1EED d\\u1EE5ng v\\u00E0 b\\u1EA3o d\\u01B0\\u1EE1ng, ch\\u00FAng t\\u00F4i h\\u01B0\\u1EDBng \\u0111\\u1EBFn tr\\u1EA3i nghi\\u1EC7m thu\\u1EADn ti\\u1EC7n, r\\u00F5 r\\u00E0ng v\\u00E0 ph\\u00F9 h\\u1EE3p v\\u1EDBi nhu c\\u1EA7u c\\u1EE7a t\\u1EEBng kh\\u00E1ch h\\u00E0ng.\",\"imageSrc\":\"assets/images/home/agricultural-machinery.webp\",\"imageAlt\":\"Thi\\u1EBFt b\\u1ECB n\\u00F4ng nghi\\u1EC7p trong ho\\u1EA1t \\u0111\\u1ED9ng s\\u1EA3n xu\\u1EA5t\",\"highlights\":[{\"title\":\"Di chuy\\u1EC3n\",\"description\":\"Xe \\u0111i\\u1EC7n ph\\u1EE5c v\\u1EE5 h\\u1ECDc t\\u1EADp, c\\u00F4ng vi\\u1EC7c v\\u00E0 nh\\u1EEFng h\\u00E0nh tr\\u00ECnh m\\u1ED7i ng\\u00E0y.\"},{\"title\":\"S\\u1EA3n xu\\u1EA5t\",\"description\":\"Thi\\u1EBFt b\\u1ECB h\\u1ED7 tr\\u1EE3 canh t\\u00E1c v\\u00E0 c\\u00F4ng vi\\u1EC7c n\\u00F4ng nghi\\u1EC7p.\"},{\"title\":\"Gia \\u0111\\u00ECnh\",\"description\":\"\\u0110i\\u1EC7n gia d\\u1EE5ng cho kh\\u00F4ng gian s\\u1ED1ng ti\\u1EC7n nghi.\"}]},\"solutions\":{\"heading\":\"Gi\\u1EA3i ph\\u00E1p c\\u1EE7a ch\\u00FAng t\\u00F4i\",\"previousLabel\":\"Cu\\u1ED9n \\u1EA3nh v\\u1EC1 tr\\u01B0\\u1EDBc\",\"nextLabel\":\"Cu\\u1ED9n \\u1EA3nh ti\\u1EBFp theo\",\"images\":[{\"imageSrc\":\"assets/images/home/electric-mobility.webp\",\"imageAlt\":\"Xe \\u0111i\\u1EC7n hi\\u1EC7n \\u0111\\u1EA1i\",\"kind\":\"bike\"},{\"imageSrc\":\"assets/images/home/agricultural-machinery.webp\",\"imageAlt\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p tr\\u00EAn \\u0111\\u1ED3ng ru\\u1ED9ng\",\"kind\":\"machine\"},{\"imageSrc\":\"assets/images/home/home-appliances.webp\",\"imageAlt\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n gia d\\u1EE5ng trong ng\\u00F4i nh\\u00E0 hi\\u1EC7n \\u0111\\u1EA1i\",\"kind\":\"appliance\"}]},\"recruitment\":{\"badge\":\"Tuy\\u1EC3n d\\u1EE5ng\",\"heading\":\"TUY\\u1EC2N D\\u1EE4NG \\u0110I L\\u00C0M NGAY\",\"intro\":\"\\u0110\\u1EC3 m\\u1EDF r\\u1ED9ng quy m\\u00F4 ho\\u1EA1t \\u0111\\u1ED9ng, c\\u00F4ng ty ch\\u00FAng t\\u00F4i c\\u1EA7n tuy\\u1EC3n g\\u1EA5p nhi\\u1EC1u v\\u1ECB tr\\u00ED l\\u00E0m vi\\u1EC7c.\",\"positionsHeading\":\"V\\u1ECB tr\\u00ED c\\u1EA7n tuy\\u1EC3n\",\"benefitsHeading\":\"Quy\\u1EC1n l\\u1EE3i\",\"sitesHeading\":\"\\u0110\\u1ECBa \\u0111i\\u1EC3m l\\u00E0m vi\\u1EC7c\",\"applyHeading\":\"C\\u00E1ch th\\u1EE9c \\u1EE9ng tuy\\u1EC3n\",\"applyText\":\"Li\\u00EAn h\\u1EC7 tr\\u1EF1c ti\\u1EBFp qua Hotline \\u0111\\u1EC3 nh\\u1EADn l\\u1ECBch ph\\u1ECFng v\\u1EA5n \\u0111i l\\u00E0m ngay.\",\"closing\":\"H\\u00E3y g\\u1ECDi ngay h\\u00F4m nay \\u0111\\u1EC3 tr\\u1EDF th\\u00E0nh m\\u1ED9t ph\\u1EA7n c\\u1EE7a gia \\u0111\\u00ECnh ECOTECH!\",\"positions\":[{\"count\":15,\"title\":\"Nh\\u00E2n vi\\u00EAn L\\u1EAFp r\\u00E1p\",\"note\":\"Nam/N\\u1EEF\"},{\"count\":1,\"title\":\"K\\u1EBF to\\u00E1n N\\u1ED9i b\\u1ED9\",\"note\":\"\"},{\"count\":1,\"title\":\"K\\u1EBF to\\u00E1n Thu\\u1EBF\",\"note\":\"\"},{\"count\":1,\"title\":\"K\\u1EBF to\\u00E1n T\\u1ED5ng h\\u1EE3p\",\"note\":\"\"},{\"count\":2,\"title\":\"Qu\\u1EA3n l\\u00FD Kho\",\"note\":\"\"},{\"count\":2,\"title\":\"L\\u00E1i xe\",\"note\":\"Y\\u00EAu c\\u1EA7u b\\u1EB1ng C\"},{\"count\":5,\"title\":\"Nh\\u00E2n vi\\u00EAn Sale\",\"note\":\"\"},{\"count\":2,\"title\":\"Nh\\u00E2n vi\\u00EAn Ch\\u0103m s\\u00F3c kh\\u00E1ch h\\u00E0ng\",\"note\":\"\"}],\"benefits\":[\"Ch\\u1EBF \\u0111\\u1ED9 l\\u01B0\\u01A1ng \\u0026 th\\u1ECFa thu\\u1EADn thu nh\\u1EADp h\\u1EA5p d\\u1EABn (\\u0111\\u1EA7y \\u0111\\u1EE7 tr\\u1EE3 c\\u1EA5p, ph\\u1EE5 c\\u1EA5p m\\u1EDF r\\u1ED9ng)\",\"H\\u1ED7 tr\\u1EE3 ch\\u1ED7 \\u1EDF, \\u0103n ngh\\u1EC9 \\u0111\\u1EA7y \\u0111\\u1EE7\",\"H\\u1ED7 tr\\u1EE3 d\\u1EA1y ngh\\u1EC1 chuy\\u00EAn nghi\\u1EC7p\",\"C\\u00F3 \\u0111\\u00F3ng B\\u1EA3o hi\\u1EC3m x\\u00E3 h\\u1ED9i theo quy \\u0111\\u1ECBnh\"],\"sites\":[{\"label\":\"C\\u01A1 s\\u1EDF 1\",\"address\":\"X\\u00F3m T\\u00E2n Th\\u00E0nh, X\\u00E3 To\\u00E0n Th\\u1EAFng, T\\u1EC9nh Ph\\u00FA Th\\u1ECD (T\\u1EC9nh H\\u00F2a B\\u00ECnh C\\u0169)\"},{\"label\":\"C\\u01A1 s\\u1EDF 2\",\"address\":\"Ph\\u01B0\\u1EDDng Ph\\u01B0\\u01A1ng L\\u00E2m, T\\u1EC9nh Ph\\u00FA Th\\u1ECD (T\\u1EC9nh H\\u00F2a B\\u00ECnh C\\u0169)\"}],\"hotlines\":[{\"display\":\"0971 456 992\",\"tel\":\"0971456992\"},{\"display\":\"0919 932 247\",\"tel\":\"0919932247\"}]},\"hero\":{\"desktopImageSrc\":\"assets/images/home/electric-mobility.webp\",\"mobileImageSrc\":\"assets/images/home/agricultural-machinery.webp\",\"contactLabel\":\"K\\u1EBFt n\\u1ED1i v\\u1EDBi ch\\u00FAng t\\u00F4i\",\"warrantyLabel\":\"Tra c\\u1EE9u b\\u1EA3o h\\u00E0nh\",\"badge\":\"15 n\\u0103m ph\\u00E2n ph\\u1ED1i ch\\u00EDnh h\\u00E3ng\",\"title\":\"Ba ng\\u00E0nh h\\u00E0ng,\",\"highlightedTitle\":\"tr\\u1ECDn m\\u1ED9t ni\\u1EC1m tin\",\"description\":\"Xe \\u0111i\\u1EC7n cho nh\\u1ECBp s\\u1ED1ng xanh, m\\u00E1y n\\u00F4ng nghi\\u1EC7p cho m\\u00F9a v\\u1EE5 hi\\u1EC7u qu\\u1EA3 v\\u00E0 \\u0111i\\u1EC7n gia d\\u1EE5ng cho ng\\u00F4i nh\\u00E0 ti\\u1EC7n nghi \\u2014 t\\u1EA5t c\\u1EA3 \\u0111\\u1EC1u \\u0111\\u01B0\\u1EE3c ch\\u1ECDn l\\u1ECDc, b\\u1EA3o h\\u00E0nh v\\u00E0 h\\u1ED7 tr\\u1EE3 t\\u1EADn n\\u01A1i.\",\"cards\":[{\"kind\":\"bike\",\"anchor\":\"bikes\",\"imageSrc\":\"assets/images/home/electric-mobility.webp\",\"imageAlt\":\"Xe \\u0111i\\u1EC7n hi\\u1EC7n \\u0111\\u1EA1i\",\"eyebrow\":\"Di chuy\\u1EC3n xanh\",\"title\":\"Xe \\u0111i\\u1EC7n\",\"description\":\"\\u00CAm \\u00E1i, ti\\u1EBFt ki\\u1EC7m v\\u00E0 s\\u1EB5n s\\u00E0ng cho m\\u1ECDi h\\u00E0nh tr\\u00ECnh.\",\"icon\":\"electric_moped\"},{\"kind\":\"machine\",\"anchor\":\"agriculture\",\"imageSrc\":\"assets/images/home/agricultural-machinery.webp\",\"imageAlt\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p tr\\u00EAn \\u0111\\u1ED3ng ru\\u1ED9ng\",\"eyebrow\":\"N\\u0103ng su\\u1EA5t m\\u00F9a v\\u1EE5\",\"title\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"description\":\"B\\u1EC1n b\\u1EC9, m\\u1EA1nh m\\u1EBD v\\u00E0 ph\\u00F9 h\\u1EE3p \\u0111i\\u1EC1u ki\\u1EC7n canh t\\u00E1c Vi\\u1EC7t Nam.\",\"icon\":\"agriculture\"},{\"kind\":\"appliance\",\"anchor\":\"appliances\",\"imageSrc\":\"assets/images/home/home-appliances.webp\",\"imageAlt\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n gia d\\u1EE5ng trong ng\\u00F4i nh\\u00E0 hi\\u1EC7n \\u0111\\u1EA1i\",\"eyebrow\":\"Ti\\u1EC7n nghi m\\u1ED7i ng\\u00E0y\",\"title\":\"\\u0110i\\u1EC7n gia d\\u1EE5ng\",\"description\":\"Thi\\u1EBFt b\\u1ECB thi\\u1EBFt y\\u1EBFu, ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n v\\u00E0 d\\u1EC5 d\\u00E0ng b\\u1EA3o tr\\u00EC.\",\"icon\":\"home\"}],\"metrics\":[{\"value\":\"50.000\\u002B\",\"label\":\"S\\u1EA3n ph\\u1EA9m \\u0111\\u00E3 b\\u00E0n giao\"},{\"value\":\"63/63\",\"label\":\"T\\u1EC9nh th\\u00E0nh ph\\u1EE5c v\\u1EE5\"},{\"value\":\"24/7\",\"label\":\"H\\u1ED7 tr\\u1EE3 k\\u1EF9 thu\\u1EADt\"}]},\"industries\":[{\"kind\":\"bike\",\"theme\":\"sky\",\"anchor\":\"bikes\",\"galleryLayout\":\"kinetic\",\"gallery\":{\"main\":{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Xe m\\u00E1y \\u0111i\\u1EC7n v\\u00E0 xe \\u0111\\u1EA1p \\u0111i\\u1EC7n trong kh\\u00F4ng gian \\u0111\\u00F4 th\\u1ECB hi\\u1EC7n \\u0111\\u1EA1i\",\"label\":\"Di chuy\\u1EC3n xanh\",\"objectPosition\":null},\"secondary\":[{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Thi\\u1EBFt k\\u1EBF xe \\u0111i\\u1EC7n hi\\u1EC7n \\u0111\\u1EA1i\",\"label\":\"Thi\\u1EBFt k\\u1EBF\",\"objectPosition\":\"28% center\"},{\"src\":\"assets/images/home/electric-mobility.webp\",\"caption\":\"Xe \\u0111i\\u1EC7n \\u0111\\u1ED3ng h\\u00E0nh trong \\u0111\\u00F4 th\\u1ECB\",\"label\":\"Tr\\u1EA3i nghi\\u1EC7m\",\"objectPosition\":\"82% center\"}]},\"eyebrow\":\"Ng\\u00E0nh h\\u00E0ng 01\",\"title\":\"Xe \\u0111i\\u1EC7n\",\"slogan\":\"Di chuy\\u1EC3n xanh, ch\\u1EE7 \\u0111\\u1ED9ng m\\u1ED7i ng\\u00E0y\",\"description\":\"T\\u1EEB xe m\\u00E1y \\u0111i\\u1EC7n, xe \\u0111\\u1EA1p \\u0111i\\u1EC7n \\u0111\\u1EBFn xe t\\u1EA3i \\u0111i\\u1EC7n d\\u00E0nh cho \\u0111i h\\u1ECDc, \\u0111i l\\u00E0m v\\u00E0 kinh doanh. S\\u1EA3n ph\\u1EA9m ch\\u00EDnh h\\u00E3ng, v\\u1EADn h\\u00E0nh ti\\u1EBFt ki\\u1EC7m v\\u00E0 c\\u00F3 h\\u1EC7 th\\u1ED1ng b\\u1EA3o h\\u00E0nh tr\\u00EAn to\\u00E0n qu\\u1ED1c.\",\"detail\":\"\\u0110\\u1ED9i ng\\u0169 t\\u01B0 v\\u1EA5n s\\u1EBD d\\u1EF1a tr\\u00EAn qu\\u00E3ng \\u0111\\u01B0\\u1EDDng di chuy\\u1EC3n, t\\u1EA3i tr\\u1ECDng v\\u00E0 th\\u00F3i quen s\\u1EA1c \\u0111\\u1EC3 gi\\u00FAp b\\u1EA1n ch\\u1ECDn \\u0111\\u00FAng d\\u00F2ng xe, dung l\\u01B0\\u1EE3ng pin v\\u00E0 ph\\u01B0\\u01A1ng \\u00E1n t\\u00E0i ch\\u00EDnh ph\\u00F9 h\\u1EE3p nh\\u1EA5t.\",\"categories\":[\"Xe m\\u00E1y \\u0111i\\u1EC7n\",\"Xe \\u0111\\u1EA1p \\u0111i\\u1EC7n\",\"Xe t\\u1EA3i \\u0111i\\u1EC7n\",\"Pin \\u0026 ph\\u1EE5 t\\u00F9ng\"],\"highlights\":[{\"icon\":\"battery_charging_full\",\"title\":\"80\\u2013120 km m\\u1ED7i l\\u1EA7n s\\u1EA1c\",\"note\":\"Chi ph\\u00ED v\\u1EADn h\\u00E0nh ch\\u1EC9 kho\\u1EA3ng 3.000\\u0111 cho 100 km.\"},{\"icon\":\"verified_user\",\"title\":\"B\\u1EA3o h\\u00E0nh \\u0111\\u1EBFn 5 n\\u0103m\",\"note\":\"H\\u1ED7 tr\\u1EE3 pin, ph\\u1EE5 t\\u00F9ng v\\u00E0 k\\u1EF9 thu\\u1EADt t\\u1EA1i h\\u01A1n 100 \\u0111\\u1EA1i l\\u00FD.\"},{\"icon\":\"credit_card\",\"title\":\"Tr\\u1EA3 g\\u00F3p 0% l\\u00E3i su\\u1EA5t\",\"note\":\"Nh\\u1EADn xe nhanh v\\u1EDBi m\\u1EE9c tr\\u1EA3 tr\\u01B0\\u1EDBc linh ho\\u1EA1t.\"},{\"icon\":\"eco\",\"title\":\"V\\u1EADn h\\u00E0nh xanh v\\u00E0 \\u00EAm \\u00E1i\",\"note\":\"Kh\\u00F4ng kh\\u00ED th\\u1EA3i tr\\u1EF1c ti\\u1EBFp, \\u00EDt ti\\u1EBFng \\u1ED3n v\\u00E0 d\\u1EC5 b\\u1EA3o d\\u01B0\\u1EE1ng.\"}],\"service\":{\"icon\":\"headset_mic\",\"title\":\"T\\u01B0 v\\u1EA5n xe theo nhu c\\u1EA7u th\\u1EF1c t\\u1EBF\",\"note\":\"So s\\u00E1nh t\\u1EA7m ho\\u1EA1t \\u0111\\u1ED9ng, chi ph\\u00ED s\\u1EA1c v\\u00E0 ch\\u00EDnh s\\u00E1ch pin tr\\u01B0\\u1EDBc khi quy\\u1EBFt \\u0111\\u1ECBnh.\"},\"priceFrom\":\"T\\u1EEB 9.900.000\\u0111\",\"ctaLabel\":\"Kh\\u00E1m ph\\u00E1 xe \\u0111i\\u1EC7n\"},{\"kind\":\"machine\",\"theme\":\"amber\",\"anchor\":\"agriculture\",\"galleryLayout\":\"field\",\"gallery\":{\"main\":{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p hi\\u1EC7n \\u0111\\u1EA1i tr\\u00EAn c\\u00E1nh \\u0111\\u1ED3ng l\\u00FAa\",\"label\":\"C\\u01A1 gi\\u1EDBi h\\u00F3a m\\u00F9a v\\u1EE5\",\"objectPosition\":null},\"secondary\":[{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p v\\u1EADn h\\u00E0nh tr\\u00EAn \\u0111\\u1ED3ng ru\\u1ED9ng\",\"label\":\"V\\u1EADn h\\u00E0nh\",\"objectPosition\":\"18% center\"},{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"Chi ti\\u1EBFt thi\\u1EBFt b\\u1ECB n\\u00F4ng nghi\\u1EC7p\",\"label\":\"Thi\\u1EBFt b\\u1ECB\",\"objectPosition\":\"50% center\"},{\"src\":\"assets/images/home/agricultural-machinery.webp\",\"caption\":\"N\\u0103ng su\\u1EA5t canh t\\u00E1c hi\\u1EC7n \\u0111\\u1EA1i\",\"label\":\"N\\u0103ng su\\u1EA5t\",\"objectPosition\":\"84% center\"}]},\"eyebrow\":\"Ng\\u00E0nh h\\u00E0ng 02\",\"title\":\"M\\u00E1y n\\u00F4ng nghi\\u1EC7p\",\"slogan\":\"C\\u01A1 gi\\u1EDBi h\\u00F3a \\u0111\\u1EC3 m\\u00F9a v\\u1EE5 nh\\u1EB9 h\\u01A1n\",\"description\":\"M\\u00E1y c\\u00E0y, m\\u00E1y g\\u1EB7t, m\\u00E1y b\\u01A1m v\\u00E0 thi\\u1EBFt b\\u1ECB canh t\\u00E1c \\u0111\\u01B0\\u1EE3c ch\\u1ECDn theo \\u0111i\\u1EC1u ki\\u1EC7n \\u0111\\u1ED3ng ru\\u1ED9ng Vi\\u1EC7t Nam. Gi\\u1EA3i ph\\u00E1p b\\u1EC1n b\\u1EC9 gi\\u00FAp ti\\u1EBFt ki\\u1EC7m nh\\u00E2n c\\u00F4ng, th\\u1EDDi gian v\\u00E0 gi\\u1EA3m hao h\\u1EE5t sau thu ho\\u1EA1ch.\",\"detail\":\"M\\u1ED7i thi\\u1EBFt b\\u1ECB \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n theo di\\u1EC7n t\\u00EDch canh t\\u00E1c, lo\\u1EA1i \\u0111\\u1EA5t, c\\u00E2y tr\\u1ED3ng v\\u00E0 t\\u1EA7n su\\u1EA5t v\\u1EADn h\\u00E0nh. Kh\\u00E1ch h\\u00E0ng \\u0111\\u01B0\\u1EE3c h\\u01B0\\u1EDBng d\\u1EABn s\\u1EED d\\u1EE5ng, l\\u1ECBch b\\u1EA3o d\\u01B0\\u1EE1ng v\\u00E0 ph\\u01B0\\u01A1ng \\u00E1n ph\\u1EE5 t\\u00F9ng l\\u00E2u d\\u00E0i.\",\"categories\":[\"M\\u00E1y c\\u00E0y \\u0026 m\\u00E1y x\\u1EDBi\",\"M\\u00E1y g\\u1EB7t\",\"M\\u00E1y b\\u01A1m n\\u01B0\\u1EDBc\",\"Thi\\u1EBFt b\\u1ECB canh t\\u00E1c\"],\"highlights\":[{\"icon\":\"schedule\",\"title\":\"N\\u0103ng su\\u1EA5t v\\u01B0\\u1EE3t tr\\u1ED9i\",\"note\":\"M\\u1ED9t m\\u00E1y thay th\\u1EBF nhi\\u1EC1u nh\\u00E2n c\\u00F4ng trong m\\u00F9a cao \\u0111i\\u1EC3m.\"},{\"icon\":\"workspace_premium\",\"title\":\"Ngu\\u1ED3n g\\u1ED1c r\\u00F5 r\\u00E0ng\",\"note\":\"Thi\\u1EBFt b\\u1ECB ch\\u00EDnh ng\\u1EA1ch, \\u0111\\u1EA7y \\u0111\\u1EE7 CO/CQ v\\u00E0 h\\u00F3a \\u0111\\u01A1n VAT.\"},{\"icon\":\"handyman\",\"title\":\"K\\u1EF9 thu\\u1EADt t\\u1EADn ru\\u1ED9ng\",\"note\":\"H\\u1ED7 tr\\u1EE3 s\\u1EF1 c\\u1ED1 nhanh v\\u00E0 lu\\u00F4n s\\u1EB5n kho ph\\u1EE5 t\\u00F9ng thay th\\u1EBF.\"},{\"icon\":\"handshake\",\"title\":\"T\\u00E0i ch\\u00EDnh theo m\\u00F9a v\\u1EE5\",\"note\":\"Ph\\u01B0\\u01A1ng \\u00E1n thanh to\\u00E1n ph\\u00F9 h\\u1EE3p h\\u1ED9 canh t\\u00E1c v\\u00E0 h\\u1EE3p t\\u00E1c x\\u00E3.\"}],\"service\":{\"icon\":\"phone_in_talk\",\"title\":\"Kh\\u1EA3o s\\u00E1t v\\u00E0 t\\u01B0 v\\u1EA5n tr\\u01B0\\u1EDBc khi giao m\\u00E1y\",\"note\":\"K\\u1EF9 thu\\u1EADt vi\\u00EAn h\\u1ED7 tr\\u1EE3 ch\\u1ECDn c\\u00F4ng su\\u1EA5t, ph\\u1EE5 ki\\u1EC7n v\\u00E0 quy tr\\u00ECnh v\\u1EADn h\\u00E0nh ph\\u00F9 h\\u1EE3p.\"},\"priceFrom\":\"T\\u1EEB 18.500.000\\u0111\",\"ctaLabel\":\"Kh\\u00E1m ph\\u00E1 m\\u00E1y n\\u00F4ng nghi\\u1EC7p\"},{\"kind\":\"appliance\",\"theme\":\"sage\",\"anchor\":\"appliances\",\"galleryLayout\":\"constellation\",\"gallery\":{\"main\":{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"C\\u00E1c thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n gia d\\u1EE5ng thi\\u1EBFt y\\u1EBFu trong ng\\u00F4i nh\\u00E0 hi\\u1EC7n \\u0111\\u1EA1i\",\"label\":\"Kh\\u00F4ng gian ti\\u1EC7n nghi\",\"objectPosition\":null},\"secondary\":[{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB nh\\u00E0 b\\u1EBFp hi\\u1EC7n \\u0111\\u1EA1i\",\"label\":\"Nh\\u00E0 b\\u1EBFp\",\"objectPosition\":\"8% center\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n l\\u1EA1nh gia \\u0111\\u00ECnh\",\"label\":\"\\u0110i\\u1EC7n l\\u1EA1nh\",\"objectPosition\":\"38% center\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB ch\\u0103m s\\u00F3c qu\\u1EA7n \\u00E1o\",\"label\":\"Gi\\u1EB7t s\\u1EA5y\",\"objectPosition\":\"65% center\"},{\"src\":\"assets/images/home/home-appliances.webp\",\"caption\":\"Thi\\u1EBFt b\\u1ECB l\\u00E0m m\\u00E1t cho ng\\u00F4i nh\\u00E0\",\"label\":\"L\\u00E0m m\\u00E1t\",\"objectPosition\":\"92% center\"}]},\"eyebrow\":\"Ng\\u00E0nh h\\u00E0ng 03\",\"title\":\"\\u0110i\\u1EC7n gia d\\u1EE5ng\",\"slogan\":\"Ti\\u1EC7n nghi b\\u1EC1n l\\u00E2u cho m\\u1ECDi m\\u00E1i nh\\u00E0\",\"description\":\"T\\u1EE7 l\\u1EA1nh, m\\u00E1y gi\\u1EB7t, qu\\u1EA1t \\u0111i\\u1EC7n, n\\u1ED3i c\\u01A1m v\\u00E0 thi\\u1EBFt b\\u1ECB \\u0111i\\u1EC7n n\\u01B0\\u1EDBc thi\\u1EBFt y\\u1EBFu cho gia \\u0111\\u00ECnh. Ch\\u00FAng t\\u00F4i \\u01B0u ti\\u00EAn s\\u1EA3n ph\\u1EA9m d\\u1EC5 s\\u1EED d\\u1EE5ng, ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n v\\u00E0 thu\\u1EADn ti\\u1EC7n b\\u1EA3o tr\\u00EC l\\u00E2u d\\u00E0i.\",\"detail\":\"Danh m\\u1EE5c \\u0111\\u00E1p \\u1EE9ng nhu c\\u1EA7u t\\u1EEB c\\u0103n h\\u1ED9, nh\\u00E0 ph\\u1ED1 \\u0111\\u1EBFn c\\u1EEDa h\\u00E0ng v\\u00E0 c\\u00F4ng tr\\u00ECnh nh\\u1ECF. M\\u1ED7i s\\u1EA3n ph\\u1EA9m \\u0111\\u1EC1u \\u0111\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n theo c\\u00F4ng su\\u1EA5t, di\\u1EC7n t\\u00EDch s\\u1EED d\\u1EE5ng v\\u00E0 m\\u1EE9c ti\\u00EAu th\\u1EE5 \\u0111i\\u1EC7n d\\u1EF1 ki\\u1EBFn.\",\"categories\":[\"Thi\\u1EBFt b\\u1ECB nh\\u00E0 b\\u1EBFp\",\"\\u0110i\\u1EC7n l\\u1EA1nh\",\"Qu\\u1EA1t \\u0026 l\\u00E0m m\\u00E1t\",\"M\\u00E1y b\\u01A1m \\u0026 m\\u00F4 t\\u01A1\"],\"highlights\":[{\"icon\":\"bolt\",\"title\":\"Ti\\u1EBFt ki\\u1EC7m \\u0111i\\u1EC7n n\\u0103ng\",\"note\":\"Thi\\u1EBFt b\\u1ECB \\u0111\\u01B0\\u1EE3c ch\\u1ECDn theo hi\\u1EC7u su\\u1EA5t v\\u00E0 nhu c\\u1EA7u s\\u1EED d\\u1EE5ng th\\u1EF1c t\\u1EBF.\"},{\"icon\":\"verified_user\",\"title\":\"Ch\\u00EDnh h\\u00E3ng, b\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng\",\"note\":\"Ngu\\u1ED3n g\\u1ED1c minh b\\u1EA1ch v\\u00E0 ch\\u00EDnh s\\u00E1ch h\\u1EADu m\\u00E3i \\u0111\\u1EA7y \\u0111\\u1EE7.\"},{\"icon\":\"local_shipping\",\"title\":\"Giao l\\u1EAFp t\\u1EADn nh\\u00E0\",\"note\":\"T\\u01B0 v\\u1EA5n v\\u1ECB tr\\u00ED, v\\u1EADn chuy\\u1EC3n v\\u00E0 l\\u1EAFp \\u0111\\u1EB7t an to\\u00E0n.\"},{\"icon\":\"handyman\",\"title\":\"D\\u1EC5 b\\u1EA3o tr\\u00EC, s\\u1EB5n linh ki\\u1EC7n\",\"note\":\"H\\u1ED7 tr\\u1EE3 k\\u1EF9 thu\\u1EADt v\\u00E0 thay th\\u1EBF linh ki\\u1EC7n trong su\\u1ED1t qu\\u00E1 tr\\u00ECnh s\\u1EED d\\u1EE5ng.\"}],\"service\":{\"icon\":\"verified\",\"title\":\"Mua \\u0111\\u00FAng c\\u00F4ng su\\u1EA5t, d\\u00F9ng b\\u1EC1n l\\u00E2u\",\"note\":\"\\u0110\\u01B0\\u1EE3c t\\u01B0 v\\u1EA5n \\u0111i\\u1EC7n n\\u0103ng, v\\u1ECB tr\\u00ED l\\u1EAFp \\u0111\\u1EB7t v\\u00E0 c\\u00E1ch s\\u1EED d\\u1EE5ng an to\\u00E0n tr\\u01B0\\u1EDBc khi nh\\u1EADn h\\u00E0ng.\"},\"priceFrom\":\"Gi\\u00E1 t\\u1ED1t m\\u1ED7i ng\\u00E0y\",\"ctaLabel\":\"Kh\\u00E1m ph\\u00E1 \\u0111i\\u1EC7n gia d\\u1EE5ng\"}],\"commitments\":{\"title\":\"Ba ng\\u00E0nh h\\u00E0ng, m\\u1ED9t chu\\u1EA9n an t\\u00E2m trong t\\u1EEBng l\\u1EF1a ch\\u1ECDn\",\"description\":\"B\\u1ED1n cam k\\u1EBFt xuy\\u00EAn su\\u1ED1t xe \\u0111i\\u1EC7n, m\\u00E1y n\\u00F4ng nghi\\u1EC7p v\\u00E0 \\u0111i\\u1EC7n gia d\\u1EE5ng \\u2014 t\\u1EEB ngu\\u1ED3n g\\u1ED1c s\\u1EA3n ph\\u1EA9m \\u0111\\u1EBFn d\\u1ECBch v\\u1EE5 sau b\\u00E1n h\\u00E0ng.\",\"items\":[{\"icon\":\"workspace_premium\",\"accent\":\"bg-emerald-500\",\"title\":\"Ch\\u00EDnh h\\u00E3ng 100%\",\"description\":\"Nh\\u1EADp kh\\u1EA9u tr\\u1EF1c ti\\u1EBFp, \\u0111\\u1EA7y \\u0111\\u1EE7 h\\u00F3a \\u0111\\u01A1n VAT, tem ch\\u1ED1ng gi\\u1EA3 v\\u00E0 gi\\u1EA5y t\\u1EDD CO \\u2013 CQ.\"},{\"icon\":\"verified_user\",\"accent\":\"bg-sky-500\",\"title\":\"B\\u1EA3o h\\u00E0nh r\\u00F5 r\\u00E0ng\",\"description\":\"Xe \\u0111i\\u1EC7n 3 n\\u0103m, m\\u00E1y n\\u00F4ng nghi\\u1EC7p 12 \\u2013 24 th\\u00E1ng. Tra c\\u1EE9u b\\u1EA3o h\\u00E0nh online b\\u1EB1ng s\\u1ED1 serial.\"},{\"icon\":\"build\",\"accent\":\"bg-amber-500\",\"title\":\"K\\u1EF9 thu\\u1EADt t\\u1EDBi t\\u1EADn n\\u01A1i\",\"description\":\"\\u0110\\u1ED9i k\\u1EF9 thu\\u1EADt c\\u00F3 m\\u1EB7t trong 24 gi\\u1EDD, s\\u1EEDa ch\\u1EEFa t\\u1EA1i nh\\u00E0 v\\u00E0 t\\u1EA1i ru\\u1ED9ng tr\\u00EAn to\\u00E0n qu\\u1ED1c.\"},{\"icon\":\"credit_card\",\"accent\":\"bg-violet-500\",\"title\":\"Tr\\u1EA3 g\\u00F3p 0% l\\u00E3i su\\u1EA5t\",\"description\":\"Duy\\u1EC7t h\\u1ED3 s\\u01A1 trong ng\\u00E0y, tr\\u1EA3 tr\\u01B0\\u1EDBc t\\u1EEB 20%, h\\u1ED7 tr\\u1EE3 tr\\u1EA3 theo m\\u00F9a v\\u1EE5 cho h\\u1EE3p t\\u00E1c x\\u00E3.\"}]},\"warranty\":{\"badge\":\"D\\u1ECBch v\\u1EE5 h\\u1EADu m\\u00E3i\",\"heading\":\"Tra c\\u1EE9u th\\u00F4ng tin b\\u1EA3o h\\u00E0nh\",\"introduction\":\"Ki\\u1EC3m tra th\\u1EDDi h\\u1EA1n v\\u00E0 th\\u00F4ng tin h\\u1ED7 tr\\u1EE3 cho s\\u1EA3n ph\\u1EA9m \\u0111\\u00E3 mua.\",\"warrantyPanelHeading\":\"Tra c\\u1EE9u b\\u1EA3o h\\u00E0nh\",\"warrantyPanelHelp\":\"Ki\\u1EC3m tra b\\u1EA3o h\\u00E0nh b\\u1EB1ng Serial ho\\u1EB7c S\\u0110T\",\"serialLabel\":\"Serial s\\u1ED1 s\\u1EA3n ph\\u1EA9m\",\"serialHint\":\"(in tr\\u00EAn tem m\\u00E1y)\",\"phoneLabel\":\"Ho\\u1EB7c S\\u1ED1 \\u0111i\\u1EC7n tho\\u1EA1i kh\\u00E1ch h\\u00E0ng\",\"searchButtonLabel\":\"Tra c\\u1EE9u b\\u1EA3o h\\u00E0nh\",\"productPanelHeading\":\"Tra c\\u1EE9u s\\u1EA3n ph\\u1EA9m nhanh\",\"productPanelHelp\":\"Ch\\u1ECDn lo\\u1EA1i v\\u00E0 nh\\u1EADp m\\u00E3 s\\u1EA3n ph\\u1EA9m \\u0111\\u1EC3 xem chi ti\\u1EBFt\",\"productTypeLabel\":\"Lo\\u1EA1i s\\u1EA3n ph\\u1EA9m\",\"productCodeLabel\":\"M\\u00E3 / ID s\\u1EA3n ph\\u1EA9m\",\"productButtonLabel\":\"Xem chi ti\\u1EBFt\",\"catalogueButtonLabel\":\"Danh m\\u1EE5c\",\"tipLabel\":\"M\\u1EABu th\\u1EED:\",\"browseBikesLabel\":\"Xem xe \\u0111i\\u1EC7n\",\"browseMachinesLabel\":\"Xem m\\u00E1y n\\u00F4ng nghi\\u1EC7p\"},\"cta\":{\"heading\":\"C\\u1EA7n t\\u01B0 v\\u1EA5n l\\u1EF1a ch\\u1ECDn?\",\"highlightedHeading\":\"\\u0110\\u1ED9i ng\\u0169 chuy\\u00EAn gia c\\u1EE7a ch\\u00FAng t\\u00F4i lu\\u00F4n s\\u1EB5n s\\u00E0ng\",\"description\":\"D\\u00F9 b\\u1EA1n \\u0111ang ch\\u1ECDn xe \\u0111i\\u1EC7n cho gia \\u0111\\u00ECnh, m\\u00E1y n\\u00F4ng nghi\\u1EC7p cho m\\u00F9a v\\u1EE5 hay \\u0111i\\u1EC7n gia d\\u1EE5ng cho t\\u1ED5 \\u1EA5m, \\u0111\\u1ED9i ng\\u0169 c\\u1EE7a ch\\u00FAng t\\u00F4i lu\\u00F4n s\\u1EB5n s\\u00E0ng t\\u01B0 v\\u1EA5n gi\\u1EA3i ph\\u00E1p ph\\u00F9 h\\u1EE3p, b\\u00E1o gi\\u00E1 r\\u00F5 r\\u00E0ng v\\u00E0 h\\u1ED7 tr\\u1EE3 t\\u1EADn t\\u00E2m.\",\"phone\":\"19001234\",\"phoneButtonLabel\":\"Hotline mi\\u1EC5n ph\\u00ED\",\"email\":\"hello@example.vn\",\"emailButtonLabel\":\"G\\u1EEDi email cho ch\\u00FAng t\\u00F4i\",\"workingHoursLabel\":\"Gi\\u1EDD l\\u00E0m vi\\u1EC7c\",\"workingHoursValue\":\"Th\\u1EE9 2 \\u2013 Ch\\u1EE7 Nh\\u1EADt \\u00B7 7h \\u2013 21h\",\"addressLabel\":\"V\\u0103n ph\\u00F2ng ch\\u00EDnh\",\"addressValue\":\"123 \\u0110\\u01B0\\u1EDDng D\\u1ECBch V\\u1ECDng H\\u1EADu, C\\u1EA7u Gi\\u1EA5y, H\\u00E0 N\\u1ED9i\",\"supportLabel\":\"H\\u1ED7 tr\\u1EE3 24/7\",\"supportValue\":\"Zalo / Facebook Messenger: @greenmobility\"}}");

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
                    { "cat-appliance-mo-to", new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc), "", "", true, "Appliance", "{}", "Mô Tơ", null, "mo-to", 40, new DateTime(2026, 9, 30, 0, 0, 0, 0, DateTimeKind.Utc) }
                });

            migrationBuilder.InsertData(
                table: "ElectricalApplianceProducts",
                columns: new[] { "Id", "Brand", "BrandId", "Capacity", "CategoryId", "Colors", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage" },
                values: new object[,]
                {
                    { "ea000001-0000-0000-0000-000000000301", "Điện Cơ Việt", "brand-seed-electrical-001", "8 lít/phút", null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy rửa xe.", true, "{\"warrantyMonths\":\"12\"}", "RX-1800", "Máy rửa xe", "/assets/images/img-ph.jpg", "1800W", 2490000m, 12, "PressureWasher", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000002-0000-0000-0000-000000000302", "Điện Cơ Việt", "brand-seed-electrical-001", null, null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Dụng cụ cầm tay.", true, "{\"warrantyMonths\":\"12\"}", "DCT-21V", "Dụng cụ cầm tay", "/assets/images/img-ph.jpg", "650W", 1290000m, 25, "HandTool", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "21V" },
                    { "ea000003-0000-0000-0000-000000000303", "Điện Cơ Việt", "brand-seed-electrical-001", null, null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy xây dựng.", true, "{\"warrantyMonths\":\"12\"}", "MXD-2200", "Máy xây dựng", "/assets/images/img-ph.jpg", "2200W", 5890000m, 7, "ConstructionMachine", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000004-0000-0000-0000-000000000304", "Điện Cơ Việt", "brand-seed-electrical-001", null, null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Mô Tơ.", true, "{\"warrantyMonths\":\"12\"}", "MT-3HP", "Mô Tơ", "/assets/images/img-ph.jpg", "3HP", 3450000m, 10, "Motor", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000005-0000-0000-0000-000000000305", "Điện Cơ Việt", "brand-seed-electrical-001", "30 lít/phút", null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy Bơm.", true, "{\"warrantyMonths\":\"12\"}", "MB-125", "Máy Bơm", "/assets/images/img-ph.jpg", "125W", 2190000m, 15, "WaterPump", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000006-0000-0000-0000-000000000306", "Điện Cơ Việt", "brand-seed-electrical-001", "45Ah", null, "[]", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Ắc quy các loại.", true, "{\"warrantyMonths\":\"12\"}", "AQ-12V", "Ắc quy các loại", "/assets/images/img-ph.jpg", null, 1850000m, 20, "Battery", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "12V" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_BrandId",
                table: "ElectricalApplianceProducts",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_CategoryId",
                table: "ElectricalApplianceProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_CompanyId",
                table: "ElectricalApplianceProducts",
                column: "CompanyId");
        }
    }
}
