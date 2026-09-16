START TRANSACTION;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153423_AddUserAvatarUrl') THEN
    ALTER TABLE "AspNetUsers" ADD "AvatarUrl" text;
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153423_AddUserAvatarUrl') THEN
    INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
    VALUES ('20260916153423_AddUserAvatarUrl', '10.0.11');
    END IF;
END $EF$;
COMMIT;

