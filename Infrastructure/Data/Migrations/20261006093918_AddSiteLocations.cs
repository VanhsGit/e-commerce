using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddSiteLocations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Chỉ đồng bộ snapshot cho khối "hệ thống cơ sở" mới thêm vào SiteSettingsDefaults.
            // Không ghi đè dòng dữ liệu đang có: nội dung admin đã chỉnh phải được giữ,
            // bản ghi cũ thiếu trường locations được SiteSettingsDefaults.BackfillLocations bù khi đọc.
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}
