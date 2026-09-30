-- Mục đích: cập nhật schema cho taxonomy sản phẩm (danh mục 3 cấp, màu sản phẩm) và nội dung trang ngành hàng.
--   * Tạo bảng "ProductCategories", "CategoryPageContents" và "SiteSettings" (thông tin chung header/footer).
--   * Thêm cột "CategoryId", "Colors" vào ElectricBikeProducts, AgriculturalMachineProducts, ElectricalApplianceProducts.
--   * Ghi nhận migration 20260930150111_AddProductTaxonomyAndCategoryPages vào "__EFMigrationsHistory".
-- Script IDEMPOTENT: chạy lại nhiều lần vẫn an toàn. Không xoá, không sửa dữ liệu hiện có.
-- Cách chạy:
--   psql -h localhost -U postgres -d Ecommerse -f scripts/2026-09-30-add-product-taxonomy.sql
-- Sau đó chạy tiếp scripts/2026-09-30-seed-product-categories.sql để nạp danh mục và nội dung mặc định.

BEGIN;

CREATE TABLE IF NOT EXISTS "ProductCategories" (
    "Id" text NOT NULL,
    "Kind" text NOT NULL,
    "Name" character varying(200) NOT NULL,
    "Slug" character varying(200) NOT NULL,
    "ParentId" text,
    "Description" text NOT NULL,
    "ImageUrl" text NOT NULL,
    "SortOrder" integer NOT NULL,
    "Metadata" jsonb NOT NULL DEFAULT ('{}'::jsonb),
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    "IsUsed" boolean NOT NULL DEFAULT TRUE,
    CONSTRAINT "PK_ProductCategories" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_ProductCategories_ProductCategories_ParentId" FOREIGN KEY ("ParentId") REFERENCES "ProductCategories" ("Id") ON DELETE RESTRICT
);

-- Chỉ mục duy nhất một phần: slug của danh mục đã xoá mềm (IsUsed = false) được dùng lại.
-- Bản script trước tạo chỉ mục KHÔNG có điều kiện WHERE. Nếu DB đã chạy bản đó thì
-- CREATE ... IF NOT EXISTS sẽ bỏ qua và giữ chỉ mục cũ, nên phải xoá chỉ mục cũ trước.
DO $$
DECLARE
    has_filter boolean;
BEGIN
    SELECT indpred IS NOT NULL INTO has_filter
    FROM pg_index
    WHERE indexrelid = '"IX_ProductCategories_Kind_Slug"'::regclass;

    IF has_filter IS FALSE THEN
        DROP INDEX "IX_ProductCategories_Kind_Slug";
    END IF;
EXCEPTION
    WHEN undefined_table THEN NULL;  -- chưa có chỉ mục: không cần làm gì
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "IX_ProductCategories_Kind_Slug" ON "ProductCategories" ("Kind","Slug") WHERE "IsUsed";
CREATE INDEX IF NOT EXISTS "IX_ProductCategories_ParentId" ON "ProductCategories" ("ParentId");

CREATE TABLE IF NOT EXISTS "CategoryPageContents" (
    "Id" text NOT NULL,
    "ContentJson" jsonb NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    "IsUsed" boolean NOT NULL DEFAULT TRUE,
    CONSTRAINT "PK_CategoryPageContents" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS "SiteSettings" (
    "Id" text NOT NULL,
    "ContentJson" jsonb NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    "IsUsed" boolean NOT NULL DEFAULT TRUE,
    CONSTRAINT "PK_SiteSettings" PRIMARY KEY ("Id")
);

ALTER TABLE "ElectricBikeProducts" ADD COLUMN IF NOT EXISTS "CategoryId" text;
ALTER TABLE "ElectricBikeProducts" ADD COLUMN IF NOT EXISTS "Colors" jsonb NOT NULL DEFAULT '[]'::jsonb;
CREATE INDEX IF NOT EXISTS "IX_ElectricBikeProducts_CategoryId" ON "ElectricBikeProducts" ("CategoryId");

DO $$
BEGIN
    ALTER TABLE "ElectricBikeProducts"
        ADD CONSTRAINT "FK_ElectricBikeProducts_ProductCategories_CategoryId" FOREIGN KEY ("CategoryId") REFERENCES "ProductCategories" ("Id") ON DELETE SET NULL;
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE "AgriculturalMachineProducts" ADD COLUMN IF NOT EXISTS "CategoryId" text;
ALTER TABLE "AgriculturalMachineProducts" ADD COLUMN IF NOT EXISTS "Colors" jsonb NOT NULL DEFAULT '[]'::jsonb;
CREATE INDEX IF NOT EXISTS "IX_AgriculturalMachineProducts_CategoryId" ON "AgriculturalMachineProducts" ("CategoryId");

DO $$
BEGIN
    ALTER TABLE "AgriculturalMachineProducts"
        ADD CONSTRAINT "FK_AgriculturalMachineProducts_ProductCategories_CategoryId" FOREIGN KEY ("CategoryId") REFERENCES "ProductCategories" ("Id") ON DELETE SET NULL;
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE "ElectricalApplianceProducts" ADD COLUMN IF NOT EXISTS "CategoryId" text;
ALTER TABLE "ElectricalApplianceProducts" ADD COLUMN IF NOT EXISTS "Colors" jsonb NOT NULL DEFAULT '[]'::jsonb;
CREATE INDEX IF NOT EXISTS "IX_ElectricalApplianceProducts_CategoryId" ON "ElectricalApplianceProducts" ("CategoryId");

DO $$
BEGIN
    ALTER TABLE "ElectricalApplianceProducts"
        ADD CONSTRAINT "FK_ElectricalApplianceProducts_ProductCategories_CategoryId" FOREIGN KEY ("CategoryId") REFERENCES "ProductCategories" ("Id") ON DELETE SET NULL;
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20260930150111_AddProductTaxonomyAndCategoryPages', '10.0.11')
ON CONFLICT ("MigrationId") DO NOTHING;

COMMIT;
