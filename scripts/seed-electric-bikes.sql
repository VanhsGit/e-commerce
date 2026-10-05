-- The PowerShell wrapper supplies data to these temporary tables first.
-- Execute the complete generated file in ONE transaction with ON_ERROR_STOP.
SET LOCAL lock_timeout = '10s';

INSERT INTO public."Companies"
    ("Id", "Name", "Description", "LogoUrl", "Address", "PhoneNumber", "Email", "Website", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'company-seed-bike-pending', 'Công ty xe điện - Chưa cập nhật', '', '', '', '', '', '', '{}'::jsonb, now(), now(), TRUE
WHERE EXISTS (SELECT 1 FROM seed_bike_products WHERE company_id = 'company-seed-bike-pending')
  AND NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

INSERT INTO public."Brands"
    ("Id", "Name", "Description", "LogoUrl", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'brand-seed-bike-pending', 'Chưa cập nhật', '', '', '{}'::jsonb, now(), now(), TRUE
WHERE EXISTS (SELECT 1 FROM seed_bike_products WHERE brand_id = 'brand-seed-bike-pending')
  AND NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

-- Reuse active categories by slug, including categories with custom IDs.
INSERT INTO public."ProductCategories"
    ("Id", "Kind", "Name", "Slug", "ParentId", "Description", "ImageUrl", "SortOrder", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'seed-bike-cat-' || md5(c.slug), 'Bike', c.name, c.slug, NULL, '', '', 100, '{}'::jsonb, now(), now(), TRUE
FROM seed_bike_categories c
WHERE c.parent_slug = ''
  AND NOT (SELECT images_only FROM seed_bike_options)
  AND NOT EXISTS (SELECT 1 FROM public."ProductCategories" e WHERE e."Kind" = 'Bike' AND e."Slug" = c.slug AND e."IsUsed")
ON CONFLICT ("Id") DO UPDATE SET "IsUsed" = TRUE;

INSERT INTO public."ProductCategories"
    ("Id", "Kind", "Name", "Slug", "ParentId", "Description", "ImageUrl", "SortOrder", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT 'seed-bike-cat-' || md5(c.slug), 'Bike', c.name, c.slug, p."Id", '', '', 100, '{}'::jsonb, now(), now(), TRUE
FROM seed_bike_categories c
JOIN public."ProductCategories" p ON p."Kind" = 'Bike' AND p."Slug" = c.parent_slug AND p."IsUsed"
WHERE c.parent_slug <> ''
  AND NOT (SELECT images_only FROM seed_bike_options)
  AND NOT EXISTS (SELECT 1 FROM public."ProductCategories" e WHERE e."Kind" = 'Bike' AND e."Slug" = c.slug AND e."IsUsed")
ON CONFLICT ("Id") DO UPDATE SET "IsUsed" = TRUE;

DO $validation$
BEGIN
    IF (SELECT images_only FROM seed_bike_options) AND EXISTS (
        SELECT 1 FROM seed_bike_products s
        WHERE NOT EXISTS (SELECT 1 FROM public."ElectricBikeProducts" p WHERE p."Id" = s.id)
    ) THEN
        RAISE EXCEPTION 'An existing seed product is missing. Image-only mode does not recreate deleted products.';
    END IF;
    IF NOT (SELECT images_only FROM seed_bike_options) AND EXISTS (
        SELECT 1 FROM seed_bike_products s
        LEFT JOIN public."Brands" b ON b."Id" = s.brand_id AND b."IsUsed"
        LEFT JOIN public."Companies" c ON c."Id" = s.company_id AND c."IsUsed"
        LEFT JOIN public."ProductCategories" cat ON cat."Kind" = 'Bike' AND cat."Slug" = s.category_slug AND cat."IsUsed"
        WHERE b."Id" IS NULL OR c."Id" IS NULL OR cat."Id" IS NULL
    ) THEN
        RAISE EXCEPTION 'Missing or inactive brand, company, or category. No seed data will be committed.';
    END IF;
END
$validation$;

INSERT INTO public."EntityImages"
    ("Id", "RelativePath", "OriginalFileName", "MimeType", "FileSize", "CreatedAt", "IsUsed")
SELECT id, relative_path, original_name, mime_type, file_size, now(), TRUE
FROM seed_bike_images
ON CONFLICT ("RelativePath") DO NOTHING;

INSERT INTO public."ElectricBikeProducts"
    ("Id", "Name", "Brand", "Model", "Category", "Description", "Price", "StockQuantity", "PictureUrl", "BatteryCapacity",
     "CompanyId", "BrandId", "CategoryId", "Colors", "Metadata", "CreatedAt", "UpdatedAt", "IsUsed")
SELECT s.id, s.name, b."Name", s.model, 'ElectricBikeModel', '', s.price, s.stock_quantity, s.picture_url, NULLIF(s.battery_capacity, ''),
       s.company_id, s.brand_id, c."Id", s.colors, jsonb_build_object('seedImageUrls', s.image_urls::text), now(), now(), TRUE
FROM seed_bike_products s
JOIN public."Brands" b ON b."Id" = s.brand_id
JOIN public."ProductCategories" c ON c."Kind" = 'Bike' AND c."Slug" = s.category_slug AND c."IsUsed"
WHERE NOT (SELECT images_only FROM seed_bike_options)
ON CONFLICT ("Id") DO NOTHING;

-- Update only images, preserving all other product data and administrator-edited colors.
-- No joins to categories/brands here: those may have changed since the first seed.
UPDATE public."ElectricBikeProducts" p
SET "PictureUrl" = s.picture_url,
    "Colors" = (
        SELECT COALESCE(jsonb_agg(merged.color ORDER BY merged.sort_order), '[]'::jsonb)
        FROM (
            SELECT old.color || CASE WHEN new.color IS NULL THEN '{}'::jsonb
                ELSE jsonb_build_object(CASE WHEN old.color ? 'imageUrl' THEN 'imageUrl' ELSE 'ImageUrl' END, new.color->'ImageUrl') END AS color,
                old.position AS sort_order
            FROM jsonb_array_elements(p."Colors") WITH ORDINALITY old(color, position)
            LEFT JOIN jsonb_array_elements(s.colors) new(color)
                ON COALESCE(old.color->>'Name', old.color->>'name') = new.color->>'Name'
            UNION ALL
            SELECT new.color, 100000 + new.position
            FROM jsonb_array_elements(s.colors) WITH ORDINALITY new(color, position)
            WHERE NOT EXISTS (
                SELECT 1 FROM jsonb_array_elements(p."Colors") old(color)
                WHERE COALESCE(old.color->>'Name', old.color->>'name') = new.color->>'Name'
            )
        ) merged
    ),
    "Metadata" = p."Metadata" || jsonb_build_object('seedImageUrls', s.image_urls::text),
    "UpdatedAt" = now()
FROM seed_bike_products s
WHERE p."Id" = s.id;

SELECT p."Id", p."Name", p."Price", p."StockQuantity", jsonb_array_length(p."Colors") AS color_count
FROM public."ElectricBikeProducts" p JOIN seed_bike_products s ON s.id = p."Id"
ORDER BY p."Name";
