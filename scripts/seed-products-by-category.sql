-- Demo catalog seed: 2 products for every currently seeded product category.
-- Run after applying the existing StoreContext migrations.
-- Safe to run repeatedly: rows are upserted by their stable Id.

BEGIN;
SET client_encoding = 'UTF8';

-- This script uses plain SQL only. Category foreign keys validate that the category seed migrations ran.

INSERT INTO "Companies"
    ("Id", "Name", "Description", "LogoUrl", "Address", "PhoneNumber", "Email", "Website", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES
    ('company-seed-bike-001', 'Xe Điện Việt', 'Nhà phân phối xe điện và linh kiện chính hãng.', '/assets/images/img-ph.jpg', 'Việt Nam', '0900000001', 'xedien@example.com', '', '{}'::jsonb, TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE),
    ('company-seed-machine-001', 'Nông Cơ Việt', 'Nhà phân phối máy nông nghiệp và phụ tùng.', '/assets/images/img-ph.jpg', 'Việt Nam', '0900000002', 'nongco@example.com', '', '{}'::jsonb, TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE),
    ('company-seed-electrical-001', 'Điện Cơ Dân Dụng Việt', 'Đơn vị phân phối thiết bị điện cơ và điện dân dụng.', '/assets/images/img-ph.jpg', 'Việt Nam', '0900000000', 'dienco@example.com', '', '{}'::jsonb, TIMESTAMPTZ '2026-09-23 00:00:00+00', TIMESTAMPTZ '2026-09-23 00:00:00+00', TRUE)
ON CONFLICT ("Id") DO UPDATE SET
    "Name" = EXCLUDED."Name", "Description" = EXCLUDED."Description", "LogoUrl" = EXCLUDED."LogoUrl",
    "Address" = EXCLUDED."Address", "PhoneNumber" = EXCLUDED."PhoneNumber", "Email" = EXCLUDED."Email",
    "Website" = EXCLUDED."Website", "Metadata" = EXCLUDED."Metadata", "UpdatedAt" = EXCLUDED."UpdatedAt", "IsUsed" = TRUE;

INSERT INTO "Brands" ("Id", "Name", "Description", "LogoUrl", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES
    ('brand-seed-bike-001', 'EcoRide', 'Thương hiệu xe điện mẫu.', '/assets/images/img-ph.jpg', '{}'::jsonb, TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE),
    ('brand-seed-machine-001', 'Nông Cơ Việt', 'Thương hiệu máy nông nghiệp mẫu.', '/assets/images/img-ph.jpg', '{}'::jsonb, TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE),
    ('brand-seed-electrical-001', 'Điện Cơ Việt', 'Thương hiệu mẫu cho danh mục đồ điện gia dụng.', '/assets/images/img-ph.jpg', '{}'::jsonb, TIMESTAMPTZ '2026-09-23 00:00:00+00', TIMESTAMPTZ '2026-09-23 00:00:00+00', TRUE)
ON CONFLICT ("Id") DO UPDATE SET
    "Name" = EXCLUDED."Name", "Description" = EXCLUDED."Description", "LogoUrl" = EXCLUDED."LogoUrl",
    "Metadata" = EXCLUDED."Metadata", "UpdatedAt" = EXCLUDED."UpdatedAt", "IsUsed" = TRUE;

WITH categories("CategoryId", "CategoryName", "Model", "Code", "BasePrice", "Image1", "Image2") AS (
    VALUES
    ('cat-bike-133-12a', '133-12A', '133-12A', '133-12a', 9900000::numeric, 'anh xe dien/12AH BẢN RẺ/Đen tem đỏ/1.jpg', 'anh xe dien/12AH BẢN THƯỜNG/ĐEN/37.jpg'),
    ('cat-bike-133-12a-ban-re', '133-12A bản rẻ', '133-12A', '133-12a-ban-re', 8900000::numeric, 'anh xe dien/12AH BẢN RẺ/Đen tem đỏ/2.jpg', 'anh xe dien/12AH BẢN RẺ/xanh/9.jpg'),
    ('cat-bike-133-12a-ban-thuong', '133-12A bản thường', '133-12A', '133-12a-ban-thuong', 9900000::numeric, 'anh xe dien/12AH BẢN THƯỜNG/ĐEN/38.jpg', 'anh xe dien/12AH BẢN THƯỜNG/ĐEN/39.jpg'),
    ('cat-bike-133-12a-ban-full', '133-12A bản full', '133-12A', '133-12a-ban-full', 11900000::numeric, 'anh xe dien/12AH BẢN FUL/Màu Đỏ/1.jpg', 'anh xe dien/12AH BẢN FUL/Màu Đỏ/2.jpg'),
    ('cat-bike-133-20a', '133-20A', '133-20A', '133-20a', 11900000::numeric, 'anh xe dien/20AH Bản rẻ/Màu Xám/1.jpg', 'anh xe dien/20AH Bản thường/Tem Xanh/5.jpg'),
    ('cat-bike-133-20a-ban-re', '133-20A bản rẻ', '133-20A', '133-20a-ban-re', 10900000::numeric, 'anh xe dien/20AH Bản rẻ/Màu Xám/2.jpg', 'anh xe dien/20AH Bản rẻ/Màu Xám/3.jpg'),
    ('cat-bike-133-20a-ban-thuong', '133-20A bản thường', '133-20A', '133-20a-ban-thuong', 11900000::numeric, 'anh xe dien/20AH Bản thường/Tem Xanh/6.jpg', 'anh xe dien/20AH Bản thường/Tem Xanh/7.jpg'),
    ('cat-bike-133-20a-ban-full', '133-20A bản full', '133-20A', '133-20a-ban-full', 13900000::numeric, 'anh xe dien/20AH Bản full/màu xám/1.jpg', 'anh xe dien/20AH Bản full/tem đen đỏ/1.jpg'),
    ('cat-bike-xe-xs', 'Xe XS', 'XS', 'xe-xs', 9990000::numeric, 'anh xe dien/XE ĐIỆN XS/Màu Xanh/17.jpg', 'anh xe dien/XE ĐIỆN XS/Màu Xanh/18.jpg'),
    ('cat-bike-xe-bull', 'Xe Bull', 'BULL', 'xe-bull', 12990000::numeric, 'anh xe dien/XBULL/Màu Xanh/1.jpg', 'anh xe dien/XBULL/Đen Bóng/1.jpg'),
    ('cat-bike-xe-q1', 'Xe Q1', 'Q1', 'xe-q1', 11990000::numeric, 'anh xe dien/Q1 5 binh/Màu đỏ/50.jpg', 'anh xe dien/Q1 5 binh/Màu đỏ/51.jpg'),
    ('cat-bike-xe-cv-1-yen', 'Xe CV 1 yên', 'CV1', 'xe-cv-1-yen', 10990000::numeric, 'anh xe dien/M1 5 bình/Màu Trắng/50.jpg', 'anh xe dien/M1 5 bình/Màu Đen/50.jpg'),
    ('cat-bike-xe-cv-2-yen', 'Xe CV 2 yên', 'CV2', 'xe-cv-2-yen', 11990000::numeric, 'anh xe dien/2 Yên/Đen Bóng/1.jpg', 'anh xe dien/2 Yên/ảnh thân xe gộp/1.jpg')
), products AS (
    SELECT
        'bike-seed-' || category."Code" || '-' || lpad(variant.n::text, 2, '0') AS "Id",
        'Xe điện ' || category."CategoryName" || ' mẫu ' || variant.n AS "Name",
        'EcoRide' AS "Brand", 'brand-seed-bike-001' AS "BrandId",
        category."Model" || '-' || lpad(variant.n::text, 2, '0') AS "Model",
        'ElectricBikeModel' AS "Category", 'Xe điện ' || category."CategoryName" || ', dữ liệu mẫu theo danh mục.' AS "Description",
        category."BasePrice" + (variant.n - 1) * 700000 AS "Price", 8 + variant.n * 2 AS "StockQuantity",
        '/api/content/entity-images/library/2026/11/' || CASE variant.n WHEN 1 THEN category."Image1" ELSE category."Image2" END AS "PictureUrl",
        '48V' AS "Voltage", '500W' AS "Power", CASE WHEN category."Model" LIKE '%20A%' THEN '20Ah' ELSE '12Ah' END AS "BatteryCapacity",
        'company-seed-bike-001' AS "CompanyId", category."CategoryId",
        '{"warrantyMonths":"12"}'::jsonb AS "Metadata", '[]'::jsonb AS "Colors"
    FROM categories category CROSS JOIN (VALUES (1), (2)) AS variant(n)
)
INSERT INTO "ElectricBikeProducts"
    ("Id", "Name", "Brand", "BrandId", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "Voltage", "Power", "BatteryCapacity", "CompanyId", "CategoryId", "Metadata", "Colors", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT "Id", "Name", "Brand", "BrandId", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "Voltage", "Power", "BatteryCapacity", "CompanyId", "CategoryId", "Metadata", "Colors", TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE
FROM products
ON CONFLICT ("Id") DO UPDATE SET
    "Name" = EXCLUDED."Name", "Brand" = EXCLUDED."Brand", "BrandId" = EXCLUDED."BrandId", "Model" = EXCLUDED."Model",
    "Category" = EXCLUDED."Category", "Description" = EXCLUDED."Description", "Price" = EXCLUDED."Price",
    "StockQuantity" = EXCLUDED."StockQuantity", "PictureUrl" = EXCLUDED."PictureUrl", "Voltage" = EXCLUDED."Voltage",
    "Power" = EXCLUDED."Power", "BatteryCapacity" = EXCLUDED."BatteryCapacity", "CompanyId" = EXCLUDED."CompanyId",
    "CategoryId" = EXCLUDED."CategoryId", "Metadata" = EXCLUDED."Metadata", "Colors" = EXCLUDED."Colors", "IsUsed" = TRUE;

WITH categories("CategoryId", "Slug", "CategoryName", "Category", "BasePrice") AS (
    VALUES
    ('cat-machine-may-cua', 'may-cua', 'Máy cưa', 'MachineModel', 2490000::numeric),
    ('cat-machine-may-cat-co', 'may-cat-co', 'Máy cắt cỏ', 'MachineModel', 2490000::numeric),
    ('cat-machine-may-sat-gao', 'may-sat-gao', 'Máy sát gạo', 'MachineModel', 2490000::numeric),
    ('cat-machine-binh-phun-dien', 'binh-phun-dien', 'Bình phun điện', 'MachineModel', 2490000::numeric),
    ('cat-machine-may-soi-dat', 'may-soi-dat', 'Máy xới đất', 'MachineModel', 2490000::numeric),
    ('cat-machine-may-phun', 'may-phun', 'Máy phun', 'MachineModel', 2490000::numeric),
    ('cat-machine-dong-co-no', 'dong-co-no', 'Động cơ nổ', 'MachineModel', 2490000::numeric),
    ('cat-machine-dong-co-xang', 'dong-co-xang', 'Động cơ xăng', 'MachineModel', 2490000::numeric),
    ('cat-machine-dong-co-dau', 'dong-co-dau', 'Động cơ dầu', 'MachineModel', 8900000::numeric),
    ('cat-machine-day-phun', 'day-phun', 'Dây phun', 'MachinePart', 180000::numeric),
    ('cat-machine-dau-phun', 'dau-phun', 'Đầu phun', 'MachinePart', 250000::numeric),
    ('cat-machine-may-bom-xang', 'may-bom-xang', 'Máy bơm xăng', 'MachineModel', 3490000::numeric),
    ('cat-machine-may-tuot-lua', 'may-tuot-lua', 'Máy tuốt lúa', 'MachineModel', 2490000::numeric),
    ('cat-machine-may-thai-chuoi', 'may-thai-chuoi', 'Máy thái chuối', 'MachineModel', 2490000::numeric)
), products AS (
    SELECT
        'machine-seed-' || category."Slug" || '-' || lpad(variant.n::text, 2, '0') AS "Id",
        category."CategoryName" || ' mẫu ' || variant.n AS "Name", 'Nông Cơ Việt' AS "Brand", 'brand-seed-machine-001' AS "BrandId",
        'NC-' || upper(category."Slug") || '-' || lpad(variant.n::text, 2, '0') AS "Model", category."Category",
        category."CategoryName" || ' dùng cho sản xuất và canh tác nông nghiệp.' AS "Description",
        category."BasePrice" + (variant.n - 1) * 1200000 AS "Price", 5 + variant.n * 3 AS "StockQuantity",
        '/api/content/entity-images/library/2026/11/seed-products/agricultural-machinery.webp' AS "PictureUrl",
        CASE WHEN category."Category" = 'MachinePart' THEN NULL ELSE '4 thì' END AS "EngineType",
        CASE WHEN category."Category" = 'MachinePart' THEN NULL ELSE variant.n::text || ' HP' END AS "Power",
        CASE WHEN category."Category" = 'MachinePart' THEN NULL ELSE 'Xăng' END AS "FuelType",
        CASE WHEN category."Slug" = 'may-bom-xang' THEN (variant.n * 20)::text || ' m³/giờ' END AS "Capacity",
        CASE WHEN category."Category" = 'MachinePart' THEN 'Máy nông nghiệp phổ thông' END AS "Compatibility",
        'company-seed-machine-001' AS "CompanyId", category."CategoryId",
        '{"warrantyMonths":"12"}'::jsonb AS "Metadata", '[]'::jsonb AS "Colors"
    FROM categories category CROSS JOIN (VALUES (1), (2)) AS variant(n)
)
INSERT INTO "AgriculturalMachineProducts"
    ("Id", "Name", "Brand", "BrandId", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "EngineType", "Power", "FuelType", "Capacity", "Compatibility", "CompanyId", "CategoryId", "Metadata", "Colors", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT "Id", "Name", "Brand", "BrandId", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "EngineType", "Power", "FuelType", "Capacity", "Compatibility", "CompanyId", "CategoryId", "Metadata", "Colors", TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE
FROM products
ON CONFLICT ("Id") DO UPDATE SET
    "Name" = EXCLUDED."Name", "Brand" = EXCLUDED."Brand", "BrandId" = EXCLUDED."BrandId", "Model" = EXCLUDED."Model",
    "Category" = EXCLUDED."Category", "Description" = EXCLUDED."Description", "Price" = EXCLUDED."Price",
    "StockQuantity" = EXCLUDED."StockQuantity", "PictureUrl" = EXCLUDED."PictureUrl", "EngineType" = EXCLUDED."EngineType",
    "Power" = EXCLUDED."Power", "FuelType" = EXCLUDED."FuelType", "Capacity" = EXCLUDED."Capacity",
    "Compatibility" = EXCLUDED."Compatibility", "CompanyId" = EXCLUDED."CompanyId", "CategoryId" = EXCLUDED."CategoryId",
    "Metadata" = EXCLUDED."Metadata", "Colors" = EXCLUDED."Colors", "IsUsed" = TRUE;

WITH products("Id", "Name", "Model", "Type", "Price", "StockQuantity", "Power", "Voltage", "Capacity") AS (
    VALUES
    ('ea000001-0000-0000-0000-000000000301', 'Máy rửa xe áp lực', 'RX-1800', 'PressureWasher', 2490000::numeric, 12, '1800W', '220V', '8 lít/phút'),
    ('ea000007-0000-0000-0000-000000000307', 'Máy rửa xe gia đình', 'RX-2200', 'PressureWasher', 3190000::numeric, 8, '2200W', '220V', '10 lít/phút'),
    ('ea000002-0000-0000-0000-000000000302', 'Máy khoan pin', 'DCT-21V', 'HandTool', 1290000::numeric, 25, '650W', '21V', NULL),
    ('ea000008-0000-0000-0000-000000000308', 'Máy mài góc', 'MG-850', 'HandTool', 890000::numeric, 18, '850W', '220V', NULL),
    ('ea000003-0000-0000-0000-000000000303', 'Máy trộn bê tông', 'MXD-2200', 'ConstructionMachine', 5890000::numeric, 7, '2200W', '220V', '350 lít'),
    ('ea000009-0000-0000-0000-000000000309', 'Máy đầm dùi bê tông', 'DD-1500', 'ConstructionMachine', 2790000::numeric, 9, '1500W', '220V', NULL),
    ('ea000004-0000-0000-0000-000000000304', 'Mô tơ điện 3HP', 'MT-3HP', 'Motor', 3450000::numeric, 10, '3HP', '220V', NULL),
    ('ea000010-0000-0000-0000-000000000310', 'Mô tơ điện 2HP', 'MT-2HP', 'Motor', 2850000::numeric, 14, '2HP', '220V', NULL),
    ('ea000005-0000-0000-0000-000000000305', 'Máy bơm nước 125W', 'MB-125', 'WaterPump', 2190000::numeric, 15, '125W', '220V', '30 lít/phút'),
    ('ea000011-0000-0000-0000-000000000311', 'Máy bơm tăng áp', 'MB-350', 'WaterPump', 2690000::numeric, 11, '350W', '220V', '45 lít/phút'),
    ('ea000006-0000-0000-0000-000000000306', 'Ắc quy 12V 45Ah', 'AQ-12V', 'Battery', 1850000::numeric, 20, NULL, '12V', '45Ah'),
    ('ea000012-0000-0000-0000-000000000312', 'Ắc quy 12V 60Ah', 'AQ-60', 'Battery', 2350000::numeric, 16, NULL, '12V', '60Ah')
)
INSERT INTO "ElectricalApplianceProducts"
    ("Id", "Name", "Brand", "BrandId", "Model", "Type", "Description", "Price", "StockQuantity", "PictureUrl", "Power", "Voltage", "Capacity", "CompanyId", "CategoryId", "Metadata", "Colors", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT
    product."Id", product."Name", 'Điện Cơ Việt', 'brand-seed-electrical-001', product."Model", product."Type",
    'Sản phẩm mẫu thuộc nhóm ' || product."Name" || '.', product."Price", product."StockQuantity",
    '/api/content/entity-images/library/2026/11/seed-products/home-appliances.webp', product."Power", product."Voltage", product."Capacity",
    'company-seed-electrical-001', CASE product."Type"
        WHEN 'PressureWasher' THEN 'cat-appliance-may-rua-xe'
        WHEN 'HandTool' THEN 'cat-appliance-dung-cu-cam-tay'
        WHEN 'ConstructionMachine' THEN 'cat-appliance-may-xay-dung'
        WHEN 'Motor' THEN 'cat-appliance-mo-to'
        WHEN 'WaterPump' THEN 'cat-appliance-may-bom'
        WHEN 'Battery' THEN 'cat-appliance-ac-quy-cac-loai'
    END,
    '{"warrantyMonths":"12"}'::jsonb, '[]'::jsonb,
    TIMESTAMPTZ '2026-10-06 00:00:00+00', TIMESTAMPTZ '2026-10-06 00:00:00+00', TRUE
FROM products product
ON CONFLICT ("Id") DO UPDATE SET
    "Name" = EXCLUDED."Name", "Brand" = EXCLUDED."Brand", "BrandId" = EXCLUDED."BrandId", "Model" = EXCLUDED."Model",
    "Type" = EXCLUDED."Type", "Description" = EXCLUDED."Description", "Price" = EXCLUDED."Price",
    "StockQuantity" = EXCLUDED."StockQuantity", "PictureUrl" = EXCLUDED."PictureUrl", "Power" = EXCLUDED."Power",
    "Voltage" = EXCLUDED."Voltage", "Capacity" = EXCLUDED."Capacity", "CompanyId" = EXCLUDED."CompanyId",
    "CategoryId" = EXCLUDED."CategoryId", "Metadata" = EXCLUDED."Metadata", "Colors" = EXCLUDED."Colors", "IsUsed" = TRUE;

COMMIT;

-- Verify: expected counts are 26 bikes, 28 agricultural machines, and 12 electrical appliances.
SELECT 'bike' AS kind, count(*) AS products FROM "ElectricBikeProducts" WHERE "Id" LIKE 'bike-seed-%'
UNION ALL SELECT 'machine', count(*) FROM "AgriculturalMachineProducts" WHERE "Id" LIKE 'machine-seed-%'
UNION ALL SELECT 'appliance', count(*) FROM "ElectricalApplianceProducts" WHERE "Id" LIKE 'ea0000%';
