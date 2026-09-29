-- seed-demo-users.sql
--
-- >>> CHỈ DÙNG CHO MÔI TRƯỜNG DEV/TEST — KHÔNG CHẠY TRÊN PRODUCTION. <<<
-- >>> DEV/TEST ENVIRONMENTS ONLY — DO NOT RUN AGAINST PRODUCTION.  <<<
--
-- Reason: three of the four accounts below get Staff/Manager roles, which grant write
-- access to the back-office catalog endpoints (and the fourth is inactive). They share
-- the same public password (Demo@123456, documented in this repo and in
-- API/appsettings.Development.json), so inserting them into a production database would
-- create a de-facto backdoor into those endpoints.
--
-- This script inserts the four AspNetRoles rows itself (idempotently, same as
-- scripts/update-user-password-login.sql) so it does not depend on that script having
-- run first — either order is safe.
--
-- No schema change is required by this script. The "AspNetUsers" table already has
-- PasswordHash, SecurityStamp, ConcurrencyStamp, LockoutEnd, LockoutEnabled and
-- AccessFailedCount columns from the original ASP.NET Identity migration
-- (Infrastructure/Identity/Migrations/20260912052930_InitialGuidIdentity.cs). This script
-- only seeds data, for dev/test databases that are set up without running the API (whose
-- Program.cs / API/Data/UserSeed.cs performs the same seeding automatically on startup,
-- gated behind Seed:SeedDemoUsers in appsettings — which must stay false/absent in any
-- production configuration).
--
-- What this script does: inserts four demo accounts if they don't already exist (matched
-- by NormalizedEmail). Password for all four: Demo@123456
--   - nhanvien.kho@vanhaste.vn       (Nguyen Van Kho,     0901000001, active)
--   - nhanvien.banhang@vanhaste.vn   (Tran Thi Ban Hang,  0901000002, active)
--   - ketoan@vanhaste.vn             (Le Minh Ke Toan,    0901000003, active)
--   - nghiviec@vanhaste.vn           (Pham Van Nghi Viec, 0901000004, INACTIVE / IsUsed = false)
-- (The Vietnamese display names stored in the INSERT statements below use full diacritics;
-- the AspNetUsers."DisplayName" column is text and the database stores/returns them as
-- UTF-8, so this is safe. The plain-ASCII spelling above is only for this comment header.)
--
-- The PasswordHash values below are real ASP.NET Identity v3 hashes (PBKDF2-HMAC-SHA256,
-- 100,000 iterations, as produced by Microsoft.AspNetCore.Identity.PasswordHasher<TUser>).
-- Each of the four accounts has its own hash (independently salted) even though they
-- share the same plaintext password — they were generated and individually verified with
-- PasswordHasher<object>.HashPassword / VerifyHashedPassword against "Demo@123456"; they
-- are not hand-crafted strings and no two hashes below are the same.
--
-- This script is idempotent: it can be run multiple times safely.

START TRANSACTION;

-- Ensure the four application roles exist. Idempotent: matched by NormalizedName, which
-- has the same unique index ("RoleNameIndex") EF Core creates via AddRoles<IdentityRole>().
INSERT INTO "AspNetRoles" ("Id", "Name", "NormalizedName", "ConcurrencyStamp")
SELECT gen_random_uuid()::text, r.name, UPPER(r.name), gen_random_uuid()::text
FROM (VALUES ('Admin'), ('Manager'), ('Staff'), ('User')) AS r(name)
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetRoles" WHERE "NormalizedName" = UPPER(r.name)
);

INSERT INTO "AspNetUsers" (
    "Id", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed",
    "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed",
    "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount",
    "DisplayName", "AvatarUrl", "IsUsed"
)
SELECT
    gen_random_uuid()::text, 'nhanvien.kho@vanhaste.vn', UPPER('nhanvien.kho@vanhaste.vn'),
    'nhanvien.kho@vanhaste.vn', UPPER('nhanvien.kho@vanhaste.vn'), true,
    'AQAAAAIAAYagAAAAEOSlpPKLt3rP8aTPRzi9iQu8Q6+49VYrFpnVjpD9Tr2QOG149GntN5EpYzcw8q+3Hg==',
    gen_random_uuid()::text, gen_random_uuid()::text, '0901000001', false,
    false, NULL, true, 0,
    'Nguyễn Văn Kho', NULL, true
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetUsers" WHERE "NormalizedEmail" = UPPER('nhanvien.kho@vanhaste.vn')
);

INSERT INTO "AspNetUsers" (
    "Id", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed",
    "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed",
    "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount",
    "DisplayName", "AvatarUrl", "IsUsed"
)
SELECT
    gen_random_uuid()::text, 'nhanvien.banhang@vanhaste.vn', UPPER('nhanvien.banhang@vanhaste.vn'),
    'nhanvien.banhang@vanhaste.vn', UPPER('nhanvien.banhang@vanhaste.vn'), true,
    'AQAAAAIAAYagAAAAEOyFEazhGln64NoJbR8aoRFKf7MZV+OQkpIdB+a+G/X8P5hg4x7gRetx7zmltc45LQ==',
    gen_random_uuid()::text, gen_random_uuid()::text, '0901000002', false,
    false, NULL, true, 0,
    'Trần Thị Bán Hàng', NULL, true
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetUsers" WHERE "NormalizedEmail" = UPPER('nhanvien.banhang@vanhaste.vn')
);

INSERT INTO "AspNetUsers" (
    "Id", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed",
    "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed",
    "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount",
    "DisplayName", "AvatarUrl", "IsUsed"
)
SELECT
    gen_random_uuid()::text, 'ketoan@vanhaste.vn', UPPER('ketoan@vanhaste.vn'),
    'ketoan@vanhaste.vn', UPPER('ketoan@vanhaste.vn'), true,
    'AQAAAAIAAYagAAAAEA0vC8r6JBB6OI/vVqRp43E5eFzpxQXkvqvlPAbPxTQJt8RzFYh4JdCbD9zwhm+/+Q==',
    gen_random_uuid()::text, gen_random_uuid()::text, '0901000003', false,
    false, NULL, true, 0,
    'Lê Minh Kế Toán', NULL, true
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetUsers" WHERE "NormalizedEmail" = UPPER('ketoan@vanhaste.vn')
);

INSERT INTO "AspNetUsers" (
    "Id", "UserName", "NormalizedUserName", "Email", "NormalizedEmail", "EmailConfirmed",
    "PasswordHash", "SecurityStamp", "ConcurrencyStamp", "PhoneNumber", "PhoneNumberConfirmed",
    "TwoFactorEnabled", "LockoutEnd", "LockoutEnabled", "AccessFailedCount",
    "DisplayName", "AvatarUrl", "IsUsed"
)
SELECT
    gen_random_uuid()::text, 'nghiviec@vanhaste.vn', UPPER('nghiviec@vanhaste.vn'),
    'nghiviec@vanhaste.vn', UPPER('nghiviec@vanhaste.vn'), true,
    'AQAAAAIAAYagAAAAEJp7fgMFjHz9JW1h0T60eUEUUbwa5DnNbyMY4226IurLVMle6zhY09+rXyM0YwkreA==',
    gen_random_uuid()::text, gen_random_uuid()::text, '0901000004', false,
    false, NULL, true, 0,
    'Phạm Văn Nghỉ Việc', NULL, false
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetUsers" WHERE "NormalizedEmail" = UPPER('nghiviec@vanhaste.vn')
);

-- Assign roles to the four demo accounts: Staff for warehouse/sales/departed, Manager for
-- accounting. Idempotent: matched by (UserId, RoleId), the table's primary key.
INSERT INTO "AspNetUserRoles" ("UserId", "RoleId")
SELECT u."Id", r."Id"
FROM (VALUES
    ('nhanvien.kho@vanhaste.vn', 'Staff'),
    ('nhanvien.banhang@vanhaste.vn', 'Staff'),
    ('ketoan@vanhaste.vn', 'Manager'),
    ('nghiviec@vanhaste.vn', 'Staff')
) AS assignment(email, role)
JOIN "AspNetUsers" u ON u."NormalizedEmail" = UPPER(assignment.email)
JOIN "AspNetRoles" r ON r."NormalizedName" = UPPER(assignment.role)
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetUserRoles" ur WHERE ur."UserId" = u."Id" AND ur."RoleId" = r."Id"
);

COMMIT;
