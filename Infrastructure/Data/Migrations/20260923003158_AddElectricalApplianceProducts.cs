using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddElectricalApplianceProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ElectricalApplianceProducts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Brand = table.Column<string>(type: "text", nullable: false),
                    Model = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    StockQuantity = table.Column<int>(type: "integer", nullable: false),
                    PictureUrl = table.Column<string>(type: "text", nullable: false),
                    Power = table.Column<string>(type: "text", nullable: true),
                    Voltage = table.Column<string>(type: "text", nullable: true),
                    Capacity = table.Column<string>(type: "text", nullable: true),
                    Compatibility = table.Column<string>(type: "text", nullable: true),
                    CompanyId = table.Column<string>(type: "text", nullable: false),
                    BrandId = table.Column<string>(type: "text", nullable: false),
                    Metadata = table.Column<string>(type: "jsonb", nullable: false, defaultValueSql: "'{}'::jsonb"),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true)
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
                });

            migrationBuilder.InsertData(
                table: "Brands",
                columns: new[] { "Id", "CreatedAt", "Description", "IsUsed", "LogoUrl", "Metadata", "Name", "UpdatedAt" },
                values: new object[] { "brand-seed-electrical-001", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Thương hiệu mẫu cho danh mục đồ điện gia dụng.", true, "/assets/images/img-ph.jpg", "{}", "Điện Cơ Việt", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc) });

            migrationBuilder.InsertData(
                table: "Companies",
                columns: new[] { "Id", "Address", "CreatedAt", "Description", "Email", "IsUsed", "LogoUrl", "Metadata", "Name", "PhoneNumber", "UpdatedAt", "Website" },
                values: new object[] { "company-seed-electrical-001", "Việt Nam", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Đơn vị phân phối thiết bị điện cơ và điện dân dụng.", "dienco@example.com", true, "/assets/images/img-ph.jpg", "{}", "Điện Cơ Dân Dụng Việt", "0900000000", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "" });

            migrationBuilder.InsertData(
                table: "ElectricalApplianceProducts",
                columns: new[] { "Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage" },
                values: new object[,]
                {
                    { "ea000001-0000-0000-0000-000000000301", "Điện Cơ Việt", "brand-seed-electrical-001", "8 lít/phút", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy rửa xe.", true, "{\"warrantyMonths\":\"12\"}", "RX-1800", "Máy rửa xe", "/assets/images/img-ph.jpg", "1800W", 2490000m, 12, "PressureWasher", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000002-0000-0000-0000-000000000302", "Điện Cơ Việt", "brand-seed-electrical-001", null, "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Dụng cụ cầm tay.", true, "{\"warrantyMonths\":\"12\"}", "DCT-21V", "Dụng cụ cầm tay", "/assets/images/img-ph.jpg", "650W", 1290000m, 25, "HandTool", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "21V" },
                    { "ea000003-0000-0000-0000-000000000303", "Điện Cơ Việt", "brand-seed-electrical-001", null, "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy xây dựng.", true, "{\"warrantyMonths\":\"12\"}", "MXD-2200", "Máy xây dựng", "/assets/images/img-ph.jpg", "2200W", 5890000m, 7, "ConstructionMachine", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000004-0000-0000-0000-000000000304", "Điện Cơ Việt", "brand-seed-electrical-001", null, "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Mô Tơ.", true, "{\"warrantyMonths\":\"12\"}", "MT-3HP", "Mô Tơ", "/assets/images/img-ph.jpg", "3HP", 3450000m, 10, "Motor", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000005-0000-0000-0000-000000000305", "Điện Cơ Việt", "brand-seed-electrical-001", "30 lít/phút", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Máy Bơm.", true, "{\"warrantyMonths\":\"12\"}", "MB-125", "Máy Bơm", "/assets/images/img-ph.jpg", "125W", 2190000m, 15, "WaterPump", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "220V" },
                    { "ea000006-0000-0000-0000-000000000306", "Điện Cơ Việt", "brand-seed-electrical-001", "45Ah", "company-seed-electrical-001", null, new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "Sản phẩm mẫu thuộc nhóm Ắc quy các loại.", true, "{\"warrantyMonths\":\"12\"}", "AQ-12V", "Ắc quy các loại", "/assets/images/img-ph.jpg", null, 1850000m, 20, "Battery", new DateTime(2026, 9, 23, 0, 0, 0, 0, DateTimeKind.Utc), "12V" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_BrandId",
                table: "ElectricalApplianceProducts",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_ElectricalApplianceProducts_CompanyId",
                table: "ElectricalApplianceProducts",
                column: "CompanyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ElectricalApplianceProducts");

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: "brand-seed-electrical-001");

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: "company-seed-electrical-001");
        }
    }
}
