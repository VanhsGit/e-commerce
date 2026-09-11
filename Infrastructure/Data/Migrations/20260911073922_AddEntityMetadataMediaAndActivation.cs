using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddEntityMetadataMediaAndActivation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            foreach (var table in new[] { "Brands", "Companies", "ElectricBikeProducts", "AgriculturalMachineProducts" })
            {
                migrationBuilder.Sql($@"
                    UPDATE ""{table}""
                    SET ""Metadata"" = COALESCE(
                        (
                            SELECT jsonb_object_agg(
                                entry.key,
                                to_jsonb(
                                    CASE
                                        WHEN jsonb_typeof(entry.value) = 'string' THEN entry.value #>> '{{}}'
                                        ELSE entry.value::text
                                    END
                                )
                            )
                            FROM jsonb_each(
                                CASE
                                    WHEN jsonb_typeof(""Metadata"") = 'object' THEN ""Metadata""
                                    ELSE '{{}}'::jsonb
                                END
                            ) AS entry
                        ),
                        '{{}}'::jsonb
                    );");
            }

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "ProductTypes",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "Products",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "ProductBrands",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "Orders",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "ShipToAddress_IsUsed",
                table: "Orders",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "OrderItems",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "ItemOrdered_IsUsed",
                table: "OrderItems",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "ElectricBikeProducts",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'{}'::jsonb",
                oldClrType: typeof(string),
                oldType: "jsonb");

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "ElectricBikeProducts",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "DeliveryMethods",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "Companies",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'{}'::jsonb",
                oldClrType: typeof(string),
                oldType: "jsonb");

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "Companies",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "Brands",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'{}'::jsonb",
                oldClrType: typeof(string),
                oldType: "jsonb");

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "Brands",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "AgriculturalMachineProducts",
                type: "jsonb",
                nullable: false,
                defaultValueSql: "'{}'::jsonb",
                oldClrType: typeof(string),
                oldType: "jsonb");

            migrationBuilder.AddColumn<bool>(
                name: "IsUsed",
                table: "AgriculturalMachineProducts",
                type: "boolean",
                nullable: false,
                defaultValue: true);

            migrationBuilder.CreateTable(
                name: "EntityImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EntityType = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    EntityId = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ImageType = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    RelativePath = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: false),
                    OriginalFileName = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    MimeType = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    FileSize = table.Column<long>(type: "bigint", nullable: false),
                    SortOrder = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsUsed = table.Column<bool>(type: "boolean", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntityImages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EntityImages_EntityType_EntityId_ImageType_IsUsed_SortOrder",
                table: "EntityImages",
                columns: new[] { "EntityType", "EntityId", "ImageType", "IsUsed", "SortOrder" });

            migrationBuilder.CreateIndex(
                name: "IX_EntityImages_RelativePath",
                table: "EntityImages",
                column: "RelativePath",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EntityImages");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "ProductTypes");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "ProductBrands");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "ShipToAddress_IsUsed",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "ItemOrdered_IsUsed",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "ElectricBikeProducts");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "DeliveryMethods");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "Brands");

            migrationBuilder.DropColumn(
                name: "IsUsed",
                table: "AgriculturalMachineProducts");

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "ElectricBikeProducts",
                type: "jsonb",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldDefaultValueSql: "'{}'::jsonb");

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "Companies",
                type: "jsonb",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldDefaultValueSql: "'{}'::jsonb");

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "Brands",
                type: "jsonb",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldDefaultValueSql: "'{}'::jsonb");

            migrationBuilder.AlterColumn<string>(
                name: "Metadata",
                table: "AgriculturalMachineProducts",
                type: "jsonb",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldDefaultValueSql: "'{}'::jsonb");
        }
    }
}
