START TRANSACTION;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    DROP INDEX "IX_EntityImages_EntityType_EntityId_ImageType_IsUsed_SortOrder";
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    ALTER TABLE "EntityImages" DROP COLUMN "EntityId";
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    ALTER TABLE "EntityImages" DROP COLUMN "EntityType";
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    ALTER TABLE "EntityImages" DROP COLUMN "ImageType";
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    ALTER TABLE "EntityImages" DROP COLUMN "SortOrder";
    END IF;
END $EF$;

DO $EF$
BEGIN
    IF NOT EXISTS(SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260916153410_StandaloneMediaCatalog') THEN
    INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
    VALUES ('20260916153410_StandaloneMediaCatalog', '10.0.11');
    END IF;
END $EF$;
COMMIT;

