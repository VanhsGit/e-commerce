using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class StandaloneMediaCatalog : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_EntityImages_EntityType_EntityId_ImageType_IsUsed_SortOrder",
                table: "EntityImages");

            migrationBuilder.DropColumn(
                name: "EntityId",
                table: "EntityImages");

            migrationBuilder.DropColumn(
                name: "EntityType",
                table: "EntityImages");

            migrationBuilder.DropColumn(
                name: "ImageType",
                table: "EntityImages");

            migrationBuilder.DropColumn(
                name: "SortOrder",
                table: "EntityImages");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EntityId",
                table: "EntityImages",
                type: "character varying(128)",
                maxLength: 128,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EntityType",
                table: "EntityImages",
                type: "character varying(64)",
                maxLength: 64,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageType",
                table: "EntityImages",
                type: "character varying(64)",
                maxLength: 64,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SortOrder",
                table: "EntityImages",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_EntityImages_EntityType_EntityId_ImageType_IsUsed_SortOrder",
                table: "EntityImages",
                columns: new[] { "EntityType", "EntityId", "ImageType", "IsUsed", "SortOrder" });
        }
    }
}
