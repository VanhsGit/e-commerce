-- update-user-password-login.sql
--
-- Purpose: seed data for the password-login feature (POST api/account/login).
-- PRODUCTION-SAFE: this script only touches the existing admin account.
--
-- No schema change is required by this script. The "AspNetUsers" table already has
-- PasswordHash, SecurityStamp, ConcurrencyStamp, LockoutEnd, LockoutEnabled and
-- AccessFailedCount columns from the original ASP.NET Identity migration
-- (Infrastructure/Identity/Migrations/20260912052930_InitialGuidIdentity.cs). This script
-- only seeds/updates rows, for databases that are deployed without running the API
-- (whose Program.cs / API/Data/UserSeed.cs performs the same seeding automatically on
-- startup via UserManager, which is the preferred path when available).
--
-- What this script does:
--   Sets a password on the existing admin account vanhspc@gmail.com — but ONLY if that
--   account exists AND currently has no password (PasswordHash IS NULL), so it never
--   overwrites a password an admin has already set. Password: Vanhaste@2026
--
--   >>> Đổi mật khẩu admin ngay sau khi đăng nhập lần đầu. <<<
--   (Change the admin password immediately after the first login.)
--
-- Demo/test accounts are intentionally NOT part of this script — see
-- scripts/seed-demo-users.sql, which must never be run against production.
--
-- ROLE-BASED AUTHORIZATION (added alongside role-gated admin endpoints): the admin
-- controllers (AdminUsersController, HomeContentController.Put, the product/brand/
-- company write endpoints, EntityImagesController) now require the caller's JWT to carry
-- an Admin/Manager/Staff role claim — a merely-logged-in user with no role is rejected
-- with 403. This script also seeds the four AspNetRoles rows (Admin, Manager, Staff,
-- User) and puts vanhspc@gmail.com into Admin, so that account keeps working after
-- deploy. Any OTHER existing user (including ones created before roles existed) will
-- have NO role after this migration and will lose access to every admin screen until an
-- Admin explicitly assigns them a role from Admin → Người dùng in the app. Do this for
-- any staff accounts that need continued admin access before/right after the deploy that
-- ships role-based authorization.
--
-- The PasswordHash value below is a real ASP.NET Identity v3 hash (PBKDF2-HMAC-SHA256,
-- 100,000 iterations, as produced by Microsoft.AspNetCore.Identity.PasswordHasher<TUser>).
-- It was generated and verified with PasswordHasher<object>.HashPassword /
-- VerifyHashedPassword against the plaintext password listed above — it is not a
-- hand-crafted string.
--
-- This script is idempotent: it can be run multiple times safely.

START TRANSACTION;

-- Give the admin account a password login, but only if it exists and has none yet.
UPDATE "AspNetUsers"
SET
    "PasswordHash" = 'AQAAAAIAAYagAAAAEP0f+n4wVORBDa/yF7X3xIGbdn7oyo2fi0QkE+Z4m7xJEkRjzM5hUEL5xU+elrXJrA==',
    "SecurityStamp" = gen_random_uuid()::text,
    "ConcurrencyStamp" = gen_random_uuid()::text,
    "LockoutEnabled" = true
WHERE "NormalizedEmail" = UPPER('vanhspc@gmail.com')
  AND "PasswordHash" IS NULL;

-- Ensure the four application roles exist. Idempotent: matched by NormalizedName, which
-- has the same unique index ("RoleNameIndex") EF Core creates via AddRoles<IdentityRole>().
INSERT INTO "AspNetRoles" ("Id", "Name", "NormalizedName", "ConcurrencyStamp")
SELECT gen_random_uuid()::text, r.name, UPPER(r.name), gen_random_uuid()::text
FROM (VALUES ('Admin'), ('Manager'), ('Staff'), ('User')) AS r(name)
WHERE NOT EXISTS (
    SELECT 1 FROM "AspNetRoles" WHERE "NormalizedName" = UPPER(r.name)
);

-- Put the admin account into the Admin role, so it keeps working once admin endpoints
-- require it. Idempotent: matched by (UserId, RoleId), the table's primary key.
INSERT INTO "AspNetUserRoles" ("UserId", "RoleId")
SELECT u."Id", r."Id"
FROM "AspNetUsers" u
JOIN "AspNetRoles" r ON r."NormalizedName" = UPPER('Admin')
WHERE u."NormalizedEmail" = UPPER('vanhspc@gmail.com')
  AND NOT EXISTS (
      SELECT 1 FROM "AspNetUserRoles" ur WHERE ur."UserId" = u."Id" AND ur."RoleId" = r."Id"
  );

COMMIT;
