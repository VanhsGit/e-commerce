START TRANSACTION;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    CREATE TABLE "ElectricalApplianceProducts" (
        "Id" text NOT NULL,
        "Name" text NOT NULL,
        "Brand" text NOT NULL,
        "Model" text NOT NULL,
        "Type" text NOT NULL,
        "Description" text NOT NULL,
        "Price" numeric NOT NULL,
        "StockQuantity" integer NOT NULL,
        "PictureUrl" text NOT NULL,
        "Power" text,
        "Voltage" text,
        "Capacity" text,
        "Compatibility" text,
        "CompanyId" text NOT NULL,
        "BrandId" text NOT NULL,
        "Metadata" jsonb NOT NULL DEFAULT ('{}'::jsonb),
        "CreatedAt" timestamp with time zone NOT NULL,
        "UpdatedAt" timestamp with time zone NOT NULL,
        "IsUsed" boolean NOT NULL DEFAULT TRUE,
        CONSTRAINT "PK_ElectricalApplianceProducts" PRIMARY KEY ("Id"),
        CONSTRAINT "FK_ElectricalApplianceProducts_Brands_BrandId" FOREIGN KEY ("BrandId") REFERENCES "Brands" ("Id") ON DELETE CASCADE,
        CONSTRAINT "FK_ElectricalApplianceProducts_Companies_CompanyId" FOREIGN KEY ("CompanyId") REFERENCES "Companies" ("Id") ON DELETE CASCADE
    );
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    INSERT INTO "Brands" ("Id", "CreatedAt", "Description", "IsUsed", "LogoUrl", "Metadata", "Name", "UpdatedAt")
    VALUES ('brand-seed-electrical-001', TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Thương hiệu mẫu cho danh mục đồ điện gia dụng.', TRUE, '/assets/images/img-ph.jpg', '{}', 'Điện Cơ Việt', TIMESTAMPTZ '2026-09-23T00:00:00Z');
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    INSERT INTO "Companies" ("Id", "Address", "CreatedAt", "Description", "Email", "IsUsed", "LogoUrl", "Metadata", "Name", "PhoneNumber", "UpdatedAt", "Website")
    VALUES ('company-seed-electrical-001', 'Việt Nam', TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Đơn vị phân phối thiết bị điện cơ và điện dân dụng.', 'dienco@example.com', TRUE, '/assets/images/img-ph.jpg', '{}', 'Điện Cơ Dân Dụng Việt', '0900000000', TIMESTAMPTZ '2026-09-23T00:00:00Z', '');
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000001-0000-0000-0000-000000000301', 'Điện Cơ Việt', 'brand-seed-electrical-001', '8 lít/phút', 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Máy rửa xe.', TRUE, '{"warrantyMonths":"12"}', 'RX-1800', 'Máy rửa xe', '/assets/images/img-ph.jpg', '1800W', 2490000.0, 12, 'PressureWasher', TIMESTAMPTZ '2026-09-23T00:00:00Z', '220V');
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000002-0000-0000-0000-000000000302', 'Điện Cơ Việt', 'brand-seed-electrical-001', NULL, 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Dụng cụ cầm tay.', TRUE, '{"warrantyMonths":"12"}', 'DCT-21V', 'Dụng cụ cầm tay', '/assets/images/img-ph.jpg', '650W', 1290000.0, 25, 'HandTool', TIMESTAMPTZ '2026-09-23T00:00:00Z', '21V');
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000003-0000-0000-0000-000000000303', 'Điện Cơ Việt', 'brand-seed-electrical-001', NULL, 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Máy xây dựng.', TRUE, '{"warrantyMonths":"12"}', 'MXD-2200', 'Máy xây dựng', '/assets/images/img-ph.jpg', '2200W', 5890000.0, 7, 'ConstructionMachine', TIMESTAMPTZ '2026-09-23T00:00:00Z', '220V');
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000004-0000-0000-0000-000000000304', 'Điện Cơ Việt', 'brand-seed-electrical-001', NULL, 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Mô Tơ.', TRUE, '{"warrantyMonths":"12"}', 'MT-3HP', 'Mô Tơ', '/assets/images/img-ph.jpg', '3HP', 3450000.0, 10, 'Motor', TIMESTAMPTZ '2026-09-23T00:00:00Z', '220V');
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000005-0000-0000-0000-000000000305', 'Điện Cơ Việt', 'brand-seed-electrical-001', '30 lít/phút', 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Máy Bơm.', TRUE, '{"warrantyMonths":"12"}', 'MB-125', 'Máy Bơm', '/assets/images/img-ph.jpg', '125W', 2190000.0, 15, 'WaterPump', TIMESTAMPTZ '2026-09-23T00:00:00Z', '220V');
    INSERT INTO "ElectricalApplianceProducts" ("Id", "Brand", "BrandId", "Capacity", "CompanyId", "Compatibility", "CreatedAt", "Description", "IsUsed", "Metadata", "Model", "Name", "PictureUrl", "Power", "Price", "StockQuantity", "Type", "UpdatedAt", "Voltage")
    VALUES ('ea000006-0000-0000-0000-000000000306', 'Điện Cơ Việt', 'brand-seed-electrical-001', '45Ah', 'company-seed-electrical-001', NULL, TIMESTAMPTZ '2026-09-23T00:00:00Z', 'Sản phẩm mẫu thuộc nhóm Ắc quy các loại.', TRUE, '{"warrantyMonths":"12"}', 'AQ-12V', 'Ắc quy các loại', '/assets/images/img-ph.jpg', NULL, 1850000.0, 20, 'Battery', TIMESTAMPTZ '2026-09-23T00:00:00Z', '12V');
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    CREATE INDEX "IX_ElectricalApplianceProducts_BrandId" ON "ElectricalApplianceProducts" ("BrandId");
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    CREATE INDEX "IX_ElectricalApplianceProducts_CompanyId" ON "ElectricalApplianceProducts" ("CompanyId");
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260923003158_AddElectricalApplianceProducts') THEN
    INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
    VALUES ('20260923003158_AddElectricalApplianceProducts', '10.0.11');
    END IF;
END $EF$;
COMMIT;

