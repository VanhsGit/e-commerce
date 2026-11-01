-- PostgreSQL seed generated from file thông số xe(Sheet1).csv.
-- Destructive: replaces every row in ElectricBikeProducts; back up the database first.
-- CSV has no prices: Price and StockQuantity are set to 0; update prices before selling.
-- Product image files are not included in the CSV; PictureUrl is empty.
-- Run after migrations and after the Bike categories in the validation block exist.

BEGIN;
SET client_encoding = 'UTF8';

DO $$
DECLARE missing_categories integer;
BEGIN
    SELECT count(*) INTO missing_categories
    FROM (VALUES
        ('cat-bike-133-12a'),
        ('cat-bike-133-12a-ban-full'),
        ('cat-bike-133-12a-ban-re'),
        ('cat-bike-133-20a'),
        ('cat-bike-133-20a-ban-full'),
        ('cat-bike-133-20a-ban-re'),
        ('cat-bike-xe-bull'),
        ('cat-bike-xe-cv-2-yen'),
        ('cat-bike-xe-q1'),
        ('cat-bike-xe-xs'),
        ('seed-bike-cat-099f320ca1e06986d73d85b5d5933f2d')
    ) AS required("Id")
    LEFT JOIN "ProductCategories" category ON category."Id" = required."Id"
    WHERE category."Id" IS NULL OR category."Kind" <> 'Bike';
    IF missing_categories > 0 THEN
        RAISE EXCEPTION 'Expected Bike categories are missing or have the wrong kind (% missing)', missing_categories;
    END IF;
END $$;

INSERT INTO "Companies" ("Id", "Name", "Description", "LogoUrl", "Address", "PhoneNumber", "Email", "Website", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES ('company-ecotech-bike-catalog', 'CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ PHÁT TRIỂN ECOTECH', 'Nhà cung cấp xe điện; thông tin theo file CSV.', '', 'Xóm Tân Phú, Xã Mường Bi, Tỉnh Phú Thọ, Việt Nam', '0971 456 992 - 0969 393 655', '', '', '{"Zalo":"0971 456 992 - 0969 393 655"}'::jsonb, now(), now(), TRUE)
ON CONFLICT ("Id") DO UPDATE SET "Name" = EXCLUDED."Name", "Description" = EXCLUDED."Description", "Address" = EXCLUDED."Address", "PhoneNumber" = EXCLUDED."PhoneNumber", "Metadata" = EXCLUDED."Metadata", "UpdatedAt" = now(), "IsUsed" = TRUE;

INSERT INTO "Brands" ("Id", "Name", "Description", "LogoUrl", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES ('brand-ecotech-bike-catalog', 'Ecotech', 'Thương hiệu khai báo cho các xe trong file CSV.', '', '{}'::jsonb, now(), now(), TRUE)
ON CONFLICT ("Id") DO UPDATE SET "Name" = EXCLUDED."Name", "Description" = EXCLUDED."Description", "UpdatedAt" = now(), "IsUsed" = TRUE;

-- Requested replacement of all current electric-bike products.
DELETE FROM "ElectricBikeProducts";

INSERT INTO "ElectricBikeProducts"
    ("Id", "Name", "Brand", "BrandId", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "Voltage", "Power", "BatteryCapacity", "CompanyId", "CategoryId", "Metadata", "Colors", "CreatedAt", "UpdatedAt", "IsUsed")
VALUES
    ('bike-ecotech-001', 'XE ĐIỆN M133-12A-BẢN RẺ', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-12A', 'ElectricBikeModel', 'Đèn:Tròn liền đồng hồ
Vành:Sắt
Vai càng trc:Sắt
Giảm sóc sau:Thường 133M
Bộ điều khiển:IC đúc
Động cơ:350w(10 lỗ,từ 1.8,khắc 240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình bé
Tay sách sau:Plus
khóa điện,dây phanh:Tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:chống nước
Bộ nhựa:abs nguyên sinh
Tốc độ 35km-45km', 0, 0, '', NULL, '350W', '4 bình bé', 'company-ecotech-bike-catalog', 'cat-bike-133-12a-ban-re', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Tròn liền đồng hồ\nVành:Sắt\nVai càng trc:Sắt\nGiảm sóc sau:Thường 133M\nBộ điều khiển:IC đúc\nĐộng cơ:350w(10 lỗ,từ 1.8,khắc 240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình bé\nTay sách sau:Plus\nkhóa điện,dây phanh:Tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:chống nước\nBộ nhựa:abs nguyên sinh\nTốc độ 35km-45km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-002', 'XE ĐIỆN M133-12A- BẢN ĐỘ ĐÈN ĐUÔI', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-12A', 'ElectricBikeModel', 'Đèn:Mặt quỷ+đồng hồ chữ nhật
Vành:Sắt
Vai càng trc:Sắt
Giảm sóc sau:Thường 133M
Bộ điều khiển:IC đúc
Động cơ:350w(10 lỗ,từ 1.8,khắc 240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình bé
Tay sách sau:nhôm
khóa điện,dây phanh:Tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:chống nước
Bộ nhựa:abs nguyên sinh
Tốc độ 35km-45km', 0, 0, '', NULL, '350W', '4 bình bé', 'company-ecotech-bike-catalog', 'cat-bike-133-12a', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Mặt quỷ+đồng hồ chữ nhật\nVành:Sắt\nVai càng trc:Sắt\nGiảm sóc sau:Thường 133M\nBộ điều khiển:IC đúc\nĐộng cơ:350w(10 lỗ,từ 1.8,khắc 240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình bé\nTay sách sau:nhôm\nkhóa điện,dây phanh:Tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:chống nước\nBộ nhựa:abs nguyên sinh\nTốc độ 35km-45km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-003', 'XE ĐIỆN M133-12A- BẢN FULL', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-12A', 'ElectricBikeModel', 'Đèn:Mặt quỷ pha cốt+đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:Khiển dây
Động cơ:500w(8 lỗ,từ 2,4,khắc 240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình bé
Tay sách sau:nhôm
khóa điện,dây phanh:tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ( tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 35km-45km', 0, 0, '', NULL, '500W', '4 bình bé', 'company-ecotech-bike-catalog', 'cat-bike-133-12a-ban-full', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Mặt quỷ pha cốt+đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:Khiển dây\nĐộng cơ:500w(8 lỗ,từ 2,4,khắc 240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình bé\nTay sách sau:nhôm\nkhóa điện,dây phanh:tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ( tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 35km-45km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-004', 'XE M133- 20A BẢN RẺ', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-20A', 'ElectricBikeModel', 'Đèn: Tròn liền đồng hồ
Vành:Sắt
Vai càng trc:Sắt
Giảm sóc sau:Thường 133M
Bộ điều khiển:ic đúc
Động cơ:350W( 10 lỗ ,từ 1.8, khắc 240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình lớn
Tay sách sau:plus
khóa điện,dây phanh:Tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:chống nước
Bộ nhựa:abs nguyên sinh
Tốc độ 40km-50km', 0, 0, '', NULL, '350W', '4 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-133-20a-ban-re', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn: Tròn liền đồng hồ\nVành:Sắt\nVai càng trc:Sắt\nGiảm sóc sau:Thường 133M\nBộ điều khiển:ic đúc\nĐộng cơ:350W( 10 lỗ ,từ 1.8, khắc 240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình lớn\nTay sách sau:plus\nkhóa điện,dây phanh:Tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:chống nước\nBộ nhựa:abs nguyên sinh\nTốc độ 40km-50km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-005', 'XE ĐIỆN M133-20A-BẢN ĐỘ ĐÈN ĐUÔI', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-20A', 'ElectricBikeModel', 'Đèn:Mặt quỷ+đồng hồ chữ nhật
Vành:Sắt
Vai càng trc:Sắt
Giảm sóc sau:Thường 133M
Bộ điều khiển:IC đúc
Động cơ:500W(8 lỗ ,từ 2.3, khắc  240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình lớn
Tay sách sau:nhôm
khóa điện,dây phanh:Tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:chống nước
Bộ nhựa:abs nguyên sinh
Tốc độ 40km-50km', 0, 0, '', NULL, '500W', '4 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-133-20a', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Mặt quỷ+đồng hồ chữ nhật\nVành:Sắt\nVai càng trc:Sắt\nGiảm sóc sau:Thường 133M\nBộ điều khiển:IC đúc\nĐộng cơ:500W(8 lỗ ,từ 2.3, khắc  240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình lớn\nTay sách sau:nhôm\nkhóa điện,dây phanh:Tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:chống nước\nBộ nhựa:abs nguyên sinh\nTốc độ 40km-50km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-006', 'XE ĐIỆN M133-20A-BẢN FULL', 'Ecotech', 'brand-ecotech-bike-catalog', 'M133-20A', 'ElectricBikeModel', 'Đèn:Mặt quỷ có pha cốt+đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:IC đúc
Động cơ:500W((8 lỗ ,từ 2.3,khắc  240W)
Chắn bùn sau:2 mảnh
Ác quy:4 bình lớn
Tay sách sau:nhôm
khóa điện,dây phanh:Tốt
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 40km-50km', 0, 0, '', NULL, '500W', '4 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-133-20a-ban-full', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Mặt quỷ có pha cốt+đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:IC đúc\nĐộng cơ:500W((8 lỗ ,từ 2.3,khắc  240W)\nChắn bùn sau:2 mảnh\nÁc quy:4 bình lớn\nTay sách sau:nhôm\nkhóa điện,dây phanh:Tốt\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 40km-50km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-007', 'XE VC Bản 2 Yên', 'Ecotech', 'brand-ecotech-bike-catalog', 'VC 2 Yên', 'ElectricBikeModel', 'Đèn:Led + Đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:IC đúc
Động cơ:1000W( 8 lỗ , từ 2.4, khắc 240)
Ác quy:5 bình lớn
Trợ lực từ bàn đạp
khóa điện,dây phanh:tốt(có thể thay thế)
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 45-55km', 0, 0, '', NULL, '1000W', '5 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-xe-cv-2-yen', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Led + Đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:IC đúc\nĐộng cơ:1000W( 8 lỗ , từ 2.4, khắc 240)\nÁc quy:5 bình lớn\nTrợ lực từ bàn đạp\nkhóa điện,dây phanh:tốt(có thể thay thế)\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 45-55km","ColorsFromCsv":"TRẮNG HỒNG- XÁM MỜ - ĐEN BÓNG - VÀNG KEM - HỒNG-","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Trắng hồng","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen bóng","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Vàng kem","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-008', 'XE ĐIỆN VC - M1', 'Ecotech', 'brand-ecotech-bike-catalog', 'VC M1', 'ElectricBikeModel', 'Đèn:Led + Đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:IC đúc
Động cơ:1000W( 8 lỗ , từ 2.4, khắc 240)
Ác quy:5 bình lớn
Trợ lực từ bàn đạp
khóa điện,dây phanh:tốt(có thể thay thế)
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 45-55km', 0, 0, '', NULL, '1000W', '5 bình lớn', 'company-ecotech-bike-catalog', 'seed-bike-cat-099f320ca1e06986d73d85b5d5933f2d', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Led + Đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:IC đúc\nĐộng cơ:1000W( 8 lỗ , từ 2.4, khắc 240)\nÁc quy:5 bình lớn\nTrợ lực từ bàn đạp\nkhóa điện,dây phanh:tốt(có thể thay thế)\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 45-55km","ColorsFromCsv":"TRẮNG HỒNG- XÁM MỜ - ĐEN BÓNG - VÀNG KEM - HỒNG-","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Trắng hồng","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen bóng","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Vàng kem","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-009', 'XE XS', 'Ecotech', 'brand-ecotech-bike-catalog', 'XS', 'ElectricBikeModel', 'Đèn:Led trái tim+ đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:IC đúc
Động cơ:800W (8 lỗ , từ 2.4, khắc 240)
Ác quy:4 bình lớn
Tay sách sau:nhôm
khóa điện,dây phanh:tốt(có thể thay thế)
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 45-50km', 0, 0, '', NULL, '800W', '4 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-xe-xs', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Led trái tim+ đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:IC đúc\nĐộng cơ:800W (8 lỗ , từ 2.4, khắc 240)\nÁc quy:4 bình lớn\nTay sách sau:nhôm\nkhóa điện,dây phanh:tốt(có thể thay thế)\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 45-50km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-010', 'XE 20A XBULL', 'Ecotech', 'brand-ecotech-bike-catalog', 'XBULL', 'ElectricBikeModel', 'Đèn:Led trái tim+ đồng hồ thẻ từ
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiển:IC đúc
Động cơ:800W (8 lỗ , từ 2.4, khắc 240)
Ác quy:4 bình lớn
Tay sách sau:nhôm
khóa điện,dây phanh:tốt(có thể thay thế)
xi nhan:tốt(có thể thay thế)
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 45-50km', 0, 0, '', NULL, '800W', '4 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-xe-bull', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:Led trái tim+ đồng hồ thẻ từ\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiển:IC đúc\nĐộng cơ:800W (8 lỗ , từ 2.4, khắc 240)\nÁc quy:4 bình lớn\nTay sách sau:nhôm\nkhóa điện,dây phanh:tốt(có thể thay thế)\nxi nhan:tốt(có thể thay thế)\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 45-50km","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám mờ | hồng phấn |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám mờ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Hồng phấn","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE),
    ('bike-ecotech-011', 'XE 20A -Q1', 'Ecotech', 'brand-ecotech-bike-catalog', 'Q1', 'ElectricBikeModel', 'Đèn:5 tròn nháy 7 màu
Vành:nhôm
Vai càng trc:nhôm
Giảm sóc sau:có bình hơi hai tầng
Bộ điều khiểnIC đúc
Động cơ:1000W( 8 lỗ, từ 2.4, khắc 240W)
Ác quy:5 bình lớn
Tay sách sau:nhôm
khóa điện,dây phanh:tốt(có thể thay thế)
xi nhan:chữ z
Tay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)
Bộ nhựa:abs nguyên sinh
Tốc độ 40km-50m', 0, 0, '', NULL, '1000W', '5 bình lớn', 'company-ecotech-bike-catalog', 'cat-bike-xe-q1', '{"Warranty":"Động cơ :1 năm (do lỗi của nhà sx)\nkhung:2 năm (do lỗi của nhà sx)\nSạc:1 năm còn nguyên tem,\nBộ điều tốc(IC):1 năm còn nguyên tem không tháo dỡ sửa chữa\nĐồng hồ,còi,báođộng,đèn:3 tháng còn nguyên tem không tháo dỡ sửa chữa\nTay ga:6 tháng(không vỡ nứt,không tháo dỡ,sửa chữa)\nTay phanh,dây điện:3 tháng(còn nguyên tem không tháo dỡ sửa chữa)\nBộ khóa điện:1 năm(lỗi do nhà sx)","Specifications":"Đèn:5 tròn nháy 7 màu\nVành:nhôm\nVai càng trc:nhôm\nGiảm sóc sau:có bình hơi hai tầng\nBộ điều khiểnIC đúc\nĐộng cơ:1000W( 8 lỗ, từ 2.4, khắc 240W)\nÁc quy:5 bình lớn\nTay sách sau:nhôm\nkhóa điện,dây phanh:tốt(có thể thay thế)\nxi nhan:chữ z\nTay ga,tay phanh:5 chế độ  (tiến -lùi, 3 tốc độ, nút P, cứu hộ)\nBộ nhựa:abs nguyên sinh\nTốc độ 40km-50m","ColorsFromCsv":"Đen tem đỏ | đen tem bạc | đỏ đun | xanh cổ vịt | xám bóng | |","PriceFromCsv":"","VatPriceFromCsv":"","PriceNote":"Giá trong CSV để trống; Price đang đặt tạm bằng 0."}'::jsonb, '[{"ImageUrls":[],"Name":"Đen tem đỏ","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đen tem bạc","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Đỏ đun","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xanh cổ vịt","HexCode":"","ImageUrl":""},{"ImageUrls":[],"Name":"Xám bóng","HexCode":"","ImageUrl":""}]'::jsonb, now(), now(), TRUE);

COMMIT;

-- Verify inserted rows by assigned category.
SELECT "CategoryId", count(*) AS "ProductCount"
FROM "ElectricBikeProducts"
GROUP BY "CategoryId"
ORDER BY "CategoryId";
