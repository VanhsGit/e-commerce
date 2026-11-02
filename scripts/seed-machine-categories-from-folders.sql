-- Replace Machine product categories with the folders from FILE NÔNG NGHIỆP XONG.
-- Destructive to Machine categories only. Existing products are kept.
-- Product category links are restored by matching the old and new category slugs.
-- Categories without a matching old slug are left unassigned; review before running.
-- Generated category count: 90 (22 roots).

BEGIN;
SET client_encoding = 'UTF8';

DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM "ProductCategories" machine_category
        JOIN "ProductCategories" other_category ON other_category."ParentId" = machine_category."Id"
        WHERE machine_category."Kind" = 'Machine' AND other_category."Kind" <> 'Machine'
    ) THEN
        RAISE EXCEPTION 'Cannot replace Machine categories: non-Machine child categories reference them';
    END IF;
    IF EXISTS (
        SELECT 1 FROM "ElectricBikeProducts" p JOIN "ProductCategories" c ON c."Id" = p."CategoryId" WHERE c."Kind" = 'Machine'
    ) OR EXISTS (
        SELECT 1 FROM "ElectricalApplianceProducts" p JOIN "ProductCategories" c ON c."Id" = p."CategoryId" WHERE c."Kind" = 'Machine'
    ) THEN
        RAISE EXCEPTION 'Cannot replace Machine categories: Bike or Appliance products reference them';
    END IF;
END $$;

CREATE TEMP TABLE "MachineProductCategoryBackup" ON COMMIT DROP AS
SELECT product."Id" AS "ProductId", category."Slug" AS "CategorySlug"
FROM "AgriculturalMachineProducts" product
JOIN "ProductCategories" category ON category."Id" = product."CategoryId"
WHERE category."Kind" = 'Machine';

-- Break self-references first; ParentId uses ON DELETE RESTRICT.
UPDATE "ProductCategories" SET "ParentId" = NULL WHERE "Kind" = 'Machine';
DELETE FROM "ProductCategories" WHERE "Kind" = 'Machine';

INSERT INTO "ProductCategories"
    ("Id", "Kind", "Name", "Slug", "ParentId", "Description", "ImageUrl", "SortOrder", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES
    ('cat-machine-binh-phun', 'Machine', 'Bình Phun', 'binh-phun', NULL, '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-binh-phun-binh-phun-dien-18l', 'Machine', 'Bình Phun Điện 18l', 'binh-phun-binh-phun-dien-18l', 'cat-machine-binh-phun', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-binh-phun-binh-phun-dien-20l', 'Machine', 'Bình Phun Điện 20l', 'binh-phun-binh-phun-dien-20l', 'cat-machine-binh-phun', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-binh-phun-binh-phun-dien-co-dao-thuoc', 'Machine', 'Bình Phun Điện Có Đảo Thuốc', 'binh-phun-binh-phun-dien-co-dao-thuoc', 'cat-machine-binh-phun', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-binh-phun-binh-phun-mo-to-doi', 'Machine', 'Bình Phun Mô Tơ Đôi', 'binh-phun-binh-phun-mo-to-doi', 'cat-machine-binh-phun', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-binh-phun-binh-phun-mo-to-don', 'Machine', 'Bình Phun Mô Tơ Đơn', 'binh-phun-binh-phun-mo-to-don', 'cat-machine-binh-phun', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit', 'Machine', 'Đầu Phun, Đầu Xịt', 'dau-phun-dau-xit', NULL, '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-10hp', 'Machine', 'Đầu Phun, Đầu Xịt 10hp', 'dau-phun-dau-xit-dau-phun-dau-xit-10hp', 'cat-machine-dau-phun-dau-xit', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-1hp', 'Machine', 'Đầu Phun, Đầu Xịt 1hp', 'dau-phun-dau-xit-dau-phun-dau-xit-1hp', 'cat-machine-dau-phun-dau-xit', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-1hp-ti-su', 'Machine', 'Đầu Phun, Đầu Xịt 1hp Ti Sứ', 'dau-phun-dau-xit-dau-phun-dau-xit-1hp-ti-su', 'cat-machine-dau-phun-dau-xit', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-2hp', 'Machine', 'Đầu Phun, Đầu Xịt 2hp', 'dau-phun-dau-xit-dau-phun-dau-xit-2hp', 'cat-machine-dau-phun-dau-xit', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-2hp-ti-su', 'Machine', 'Đầu Phun, Đầu Xịt 2hp Ti Sứ', 'dau-phun-dau-xit-dau-phun-dau-xit-2hp-ti-su', 'cat-machine-dau-phun-dau-xit', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-5hp', 'Machine', 'Đầu Phun, Đầu Xịt 5hp', 'dau-phun-dau-xit-dau-phun-dau-xit-5hp', 'cat-machine-dau-phun-dau-xit', '', '', 60, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-5hp-ti-su', 'Machine', 'Đầu Phun, Đầu Xịt 5hp Ti Sứ', 'dau-phun-dau-xit-dau-phun-dau-xit-5hp-ti-su', 'cat-machine-dau-phun-dau-xit', '', '', 70, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dau-phun-dau-xit-dau-phun-dau-xit-7hp', 'Machine', 'Đầu Phun, Đầu Xịt 7hp', 'dau-phun-dau-xit-dau-phun-dau-xit-7hp', 'cat-machine-dau-phun-dau-xit', '', '', 80, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-dau', 'Machine', 'Động Cơ Dầu', 'dong-co-dau', NULL, '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-dau-dong-co-dau-170', 'Machine', 'Động Cơ Dầu 170', 'dong-co-dau-dong-co-dau-170', 'cat-machine-dong-co-dau', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-dau-dong-co-dau-173', 'Machine', 'Động Cơ Dầu 173', 'dong-co-dau-dong-co-dau-173', 'cat-machine-dong-co-dau', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-dau-dong-co-dau-178', 'Machine', 'Động Cơ Dầu 178', 'dong-co-dau-dong-co-dau-178', 'cat-machine-dong-co-dau', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang', 'Machine', 'Động Cơ Xăng', 'dong-co-xang', NULL, '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang-dong-co-xang-152-gx100-1-9hp', 'Machine', 'Động Cơ Xăng 152 GX100 1,9hp', 'dong-co-xang-dong-co-xang-152-gx100-1-9hp', 'cat-machine-dong-co-xang', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang-dong-co-xang-154-gx120-2-5hp', 'Machine', 'Động Cơ Xăng 154 GX120 2,5hp', 'dong-co-xang-dong-co-xang-154-gx120-2-5hp', 'cat-machine-dong-co-xang', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang-dong-co-xang-170-gx200', 'Machine', 'Động Cơ Xăng 170 GX200', 'dong-co-xang-dong-co-xang-170-gx200', 'cat-machine-dong-co-xang', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang-dong-co-xang-170-gx200-6-5hp', 'Machine', 'Động Cơ Xăng 170 GX200 6,5hp', 'dong-co-xang-dong-co-xang-170-gx200-6-5hp', 'cat-machine-dong-co-xang', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-dong-co-xang-dong-co-xang-170-gx230-7-5hp', 'Machine', 'Động Cơ Xăng 170 GX230 7,5hp', 'dong-co-xang-dong-co-xang-170-gx230-7-5hp', 'cat-machine-dong-co-xang', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mat-xat-gao-mini', 'Machine', 'Mát Xát Gạo mini', 'mat-xat-gao-mini', NULL, '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mat-xat-gao-mini-may-xat-gao-mini', 'Machine', 'Máy Xát Gạo mini', 'mat-xat-gao-mini-may-xat-gao-mini', 'cat-machine-mat-xat-gao-mini', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bao-go', 'Machine', 'Máy Bào Gỗ', 'may-bao-go', NULL, '', '', 60, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bao-go-may-bao-go-luoi-82', 'Machine', 'Máy Bào Gỗ Lưỡi 82', 'may-bao-go-may-bao-go-luoi-82', 'cat-machine-may-bao-go', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bao-go-may-bao-go-luoi-92-mini', 'Machine', 'Máy Bào Gỗ Lưỡi 92 mini', 'may-bao-go-may-bao-go-luoi-92-mini', 'cat-machine-may-bao-go', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bat-vit', 'Machine', 'Máy Bắt Vít', 'may-bat-vit', NULL, '', '', 70, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bat-vit-may-bat-vit', 'Machine', 'Máy Bắt Vít', 'may-bat-vit-may-bat-vit', 'cat-machine-may-bat-vit', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc', 'Machine', 'Máy Bơm Nước', 'may-bom-nuoc', NULL, '', '', 80, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-1-1kw', 'Machine', 'Bơm Tõm, Bơm Chìm 1,1kw', 'may-bom-nuoc-bom-tom-bom-chim-1-1kw', 'cat-machine-may-bom-nuoc', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-1-5kw', 'Machine', 'Bơm Tõm, Bơm Chìm 1,5kw', 'may-bom-nuoc-bom-tom-bom-chim-1-5kw', 'cat-machine-may-bom-nuoc', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-2-2kw', 'Machine', 'Bơm Tõm, Bơm Chìm 2,2kw', 'may-bom-nuoc-bom-tom-bom-chim-2-2kw', 'cat-machine-may-bom-nuoc', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-370w', 'Machine', 'Bơm Tõm, Bơm Chìm 370w', 'may-bom-nuoc-bom-tom-bom-chim-370w', 'cat-machine-may-bom-nuoc', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-550w', 'Machine', 'Bơm Tõm, Bơm Chìm 550W', 'may-bom-nuoc-bom-tom-bom-chim-550w', 'cat-machine-may-bom-nuoc', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-bom-tom-bom-chim-750w', 'Machine', 'Bơm Tõm, Bơm Chìm 750w', 'may-bom-nuoc-bom-tom-bom-chim-750w', 'cat-machine-may-bom-nuoc', '', '', 60, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-may-bom-nuoc-chay-xang', 'Machine', 'Máy Bơm Nước Chạy Xăng', 'may-bom-nuoc-may-bom-nuoc-chay-xang', 'cat-machine-may-bom-nuoc', '', '', 70, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-bom-nuoc-may-bom-nuoc-gx100', 'Machine', 'Máy Bơm Nước GX100', 'may-bom-nuoc-may-bom-nuoc-gx100', 'cat-machine-may-bom-nuoc', '', '', 80, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-gach', 'Machine', 'Máy Cắt Gạch', 'may-cat-gach', NULL, '', '', 90, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-gach-may-cat-gach', 'Machine', 'Máy Cắt Gạch', 'may-cat-gach-may-cat-gach', 'cat-machine-may-cat-gach', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-go', 'Machine', 'Máy Cắt Gỗ', 'may-cat-go', NULL, '', '', 100, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-go-may-cat-go', 'Machine', 'Máy Cắt Gỗ', 'may-cat-go-may-cat-go', 'cat-machine-may-cat-go', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-nhom', 'Machine', 'Máy Cắt Nhôm', 'may-cat-nhom', NULL, '', '', 110, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cat-nhom-may-cat-nhom', 'Machine', 'Máy Cắt Nhôm', 'may-cat-nhom-may-cat-nhom', 'cat-machine-may-cat-nhom', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua', 'Machine', 'Máy Cưa', 'may-cua', NULL, '', '', 120, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua-may-cua-365', 'Machine', 'Máy Cưa 365', 'may-cua-may-cua-365', 'cat-machine-may-cua', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua-may-cua-5200', 'Machine', 'Máy Cưa 5200', 'may-cua-may-cua-5200', 'cat-machine-may-cua', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua-may-cua-5800', 'Machine', 'Máy Cưa 5800', 'may-cua-may-cua-5800', 'cat-machine-may-cua', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua-may-cua-cam-tay', 'Machine', 'Máy Cưa Cầm Tay', 'may-cua-may-cua-cam-tay', 'cat-machine-may-cua', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-cua-may-cua-tay-cut', 'Machine', 'Máy Cưa Tay Cụt', 'may-cua-may-cua-tay-cut', 'cat-machine-may-cua', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-khoan', 'Machine', 'Máy Khoan', 'may-khoan', NULL, '', '', 130, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-khoan-may-khoan-be-tong', 'Machine', 'Máy Khoan Bê Tông', 'may-khoan-may-khoan-be-tong', 'cat-machine-may-khoan', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-mai', 'Machine', 'Máy Mài', 'may-mai', NULL, '', '', 140, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-mai-may-mai', 'Machine', 'Máy Mài', 'may-mai-may-mai', 'cat-machine-may-mai', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co', 'Machine', 'Máy Phát Cỏ', 'may-phat-co', NULL, '', '', 150, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co-may-phat-co-260', 'Machine', 'Máy Phát Cỏ 260', 'may-phat-co-may-phat-co-260', 'cat-machine-may-phat-co', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co-may-phat-co-543-1', 'Machine', 'Máy Phát Cỏ 543 - 1', 'may-phat-co-may-phat-co-543-1', 'cat-machine-may-phat-co', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co-may-phat-co-543-2', 'Machine', 'máy Phát Cỏ 543 - 2', 'may-phat-co-may-phat-co-543-2', 'cat-machine-may-phat-co', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co-may-phat-co-543-3', 'Machine', 'Máy Phát Cỏ 543 - 3', 'may-phat-co-may-phat-co-543-3', 'cat-machine-may-phat-co', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-phat-co-may-phat-co-543-4', 'Machine', 'máy Phát Cỏ 543 - 4', 'may-phat-co-may-phat-co-543-4', 'cat-machine-may-phat-co', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-rua-xe', 'Machine', 'Máy Rửa Xe', 'may-rua-xe', NULL, '', '', 160, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-rua-xe-may-rua-xe-2-2kw', 'Machine', 'Máy Rửa Xe 2,2kw', 'may-rua-xe-may-rua-xe-2-2kw', 'cat-machine-may-rua-xe', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-rua-xe-may-rua-xe-2-8kw', 'Machine', 'Máy Rửa Xe 2,8kw', 'may-rua-xe-may-rua-xe-2-8kw', 'cat-machine-may-rua-xe', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-rua-xe-may-rua-xe-mini-150w', 'Machine', 'Máy Rửa Xe mini 150w', 'may-rua-xe-may-rua-xe-mini-150w', 'cat-machine-may-rua-xe', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-soi-go', 'Machine', 'Máy Soi Gỗ', 'may-soi-go', NULL, '', '', 170, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-soi-go-may-soi-go', 'Machine', 'Máy Soi Gỗ', 'may-soi-go-may-soi-go', 'cat-machine-may-soi-go', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-thai-chuoi', 'Machine', 'Máy Thái Chuối', 'may-thai-chuoi', NULL, '', '', 180, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-thai-chuoi-may-thai-chuoi', 'Machine', 'Máy Thái Chuối', 'may-thai-chuoi-may-thai-chuoi', 'cat-machine-may-thai-chuoi', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-tuot-lua', 'Machine', 'Máy Tuốt Lúa', 'may-tuot-lua', NULL, '', '', 190, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-tuot-lua-may-tuot-lua', 'Machine', 'Máy Tuốt Lúa', 'may-tuot-lua-may-tuot-lua', 'cat-machine-may-tuot-lua', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xay-dung', 'Machine', 'Máy Xây Dựng', 'may-xay-dung', NULL, '', '', 200, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xay-dung-may-can-muc', 'Machine', 'Máy Cân Mực', 'may-xay-dung-may-can-muc', 'cat-machine-may-xay-dung', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xay-dung-may-xoa-vua', 'Machine', 'Máy Xoa Vữa', 'may-xay-dung-may-xoa-vua', 'cat-machine-may-xay-dung', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat', 'Machine', 'Máy Xới Đất', 'may-xoi-dat', NULL, '', '', 210, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-170-day-culoa', 'Machine', 'Máy Xới Đất 170 Dây Culoa', 'may-xoi-dat-may-xoi-dat-170-day-culoa', 'cat-machine-may-xoi-dat', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-170-xang-xoi-dau', 'Machine', 'Máy Xới Đất 170 Xăng Xới Đầu', 'may-xoi-dat-may-xoi-dat-170-xang-xoi-dau', 'cat-machine-may-xoi-dat', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-173-co-chuyen-huong', 'Machine', 'Máy Xới Đất 173 Có Chuyển Hướng', 'may-xoi-dat-may-xoi-dat-173-co-chuyen-huong', 'cat-machine-may-xoi-dat', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-173-khong-chuyen-huong', 'Machine', 'Máy Xới Đất 173 Không Chuyển Hướng', 'may-xoi-dat-may-xoi-dat-173-khong-chuyen-huong', 'cat-machine-may-xoi-dat', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-178-co-chuyen-huong', 'Machine', 'Máy Xới Đất 178 Có Chuyển Hướng', 'may-xoi-dat-may-xoi-dat-178-co-chuyen-huong', 'cat-machine-may-xoi-dat', '', '', 50, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-178-khong-chuyen-huong', 'Machine', 'Máy Xới Đất 178 Không Chuyển Hướng', 'may-xoi-dat-may-xoi-dat-178-khong-chuyen-huong', 'cat-machine-may-xoi-dat', '', '', 60, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-may-xoi-dat-may-xoi-dat-mini-140f', 'Machine', 'Máy Xới Đất mini 140F', 'may-xoi-dat-may-xoi-dat-mini-140f', 'cat-machine-may-xoi-dat', '', '', 70, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to', 'Machine', 'Mô Tơ', 'mo-to', NULL, '', '', 220, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to-mo-to-day-dong-1-1kw-toc-nhanh-2900-vong', 'Machine', 'Mô Tơ Dây Đồng 1,1kw Tốc Nhanh 2900 Vòng', 'mo-to-mo-to-day-dong-1-1kw-toc-nhanh-2900-vong', 'cat-machine-mo-to', '', '', 10, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to-mo-to-day-dong-3kw-toc-nhanh-2900-vong', 'Machine', 'Mô Tơ Dây Đồng 3kw Tốc Nhanh 2900 Vòng', 'mo-to-mo-to-day-dong-3kw-toc-nhanh-2900-vong', 'cat-machine-mo-to', '', '', 20, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to-mo-to-day-dong-950w-toc-nhanh-2900-vong', 'Machine', 'Mô Tơ Dây Đồng 950w Tốc Nhanh 2900 Vòng', 'mo-to-mo-to-day-dong-950w-toc-nhanh-2900-vong', 'cat-machine-mo-to', '', '', 30, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to-mo-to-day-nhom-370w-toc-nhanh-2900-vong', 'Machine', 'Mô Tơ Dây Nhôm 370w Tốc Nhanh 2900 Vòng', 'mo-to-mo-to-day-nhom-370w-toc-nhanh-2900-vong', 'cat-machine-mo-to', '', '', 40, '{}'::jsonb, now(), now(), TRUE),
    ('cat-machine-mo-to-mo-to-day-nhom-750w-toc-nhanh-2900-vong', 'Machine', 'Mô Tơ Dây Nhôm 750w Tốc Nhanh 2900 Vòng', 'mo-to-mo-to-day-nhom-750w-toc-nhanh-2900-vong', 'cat-machine-mo-to', '', '', 50, '{}'::jsonb, now(), now(), TRUE);

-- Restore product links for category slugs that still exist in the new folder tree.
UPDATE "AgriculturalMachineProducts" product
SET "CategoryId" = category."Id"
FROM "MachineProductCategoryBackup" backup
JOIN "ProductCategories" category ON category."Kind" = 'Machine' AND category."Slug" = backup."CategorySlug"
WHERE product."Id" = backup."ProductId";

DO $$
DECLARE actual_count integer;
BEGIN
    SELECT count(*) INTO actual_count FROM "ProductCategories" WHERE "Kind" = 'Machine';
    IF actual_count <> 90 THEN
        RAISE EXCEPTION 'Expected 90 Machine categories, found %', actual_count;
    END IF;
END $$;

COMMIT;

SELECT count(*) AS "TotalCategories",
       count(*) FILTER (WHERE "ParentId" IS NULL) AS "RootCategories"
FROM "ProductCategories"
WHERE "Kind" = 'Machine';

SELECT count(*) FILTER (WHERE product."CategoryId" IS NOT NULL) AS "ProductsWithCategory",
       count(*) FILTER (WHERE product."CategoryId" IS NULL) AS "ProductsWithoutCategory"
FROM "AgriculturalMachineProducts" product;
