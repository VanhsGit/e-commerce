# JSONB Metadata, Activation, and Entity Media Design

## Scope

This phase standardizes metadata, adds an activation flag to persisted models, and introduces reusable image storage for managed entities. It must be usable independently of the admin UI and passwordless authentication phases.

## Metadata

`Brand`, `Company`, `ElectricBikeProduct`, and `AgriculturalMachineProduct` expose `Metadata` as `Dictionary<string, string>`. Entity properties, API DTOs, Angular models, mapping, and form payloads use the same string-to-string contract.

PostgreSQL stores each metadata value in a `jsonb` column with an empty JSON object as the application default. EF Core uses one shared conversion/comparison configuration so in-place dictionary changes are detected. `Company.Metadata`, which currently exists in DTO and migration state but not in the entity, is restored.

The migration must preserve existing scalar JSON values by converting each value to its text representation. Null metadata becomes an empty object. JSON arrays and objects are serialized to compact JSON text because the new value type cannot retain nested shapes.

## IsUsed

Every persisted domain model has an `IsUsed` Boolean with a default value of `true`:

- All entities deriving from `BaseEntity` inherit the property.
- `AppUser`, `CustomerBasket`, `BasketItem`, owned address/value types, and owned order item value types declare the property where inheritance is unavailable.
- PostgreSQL columns have `DEFAULT TRUE`; Redis basket models initialize the property to `true`.

Admin delete actions are soft deletes that set `IsUsed` to `false`. Admin lists can include inactive records and reactivate them. Customer-facing catalog queries and authentication reject inactive records. Existing hard-delete operations are retained only for explicitly deleting an `EntityImage` file and for infrastructure cleanup that is not exposed as entity deletion.

## Entity Images

Add `EntityImage : BaseEntity` with these fields:

- `EntityType`: enum limited to Company, Brand, ElectricBikeProduct, AgriculturalMachineProduct, Product, ProductBrand, ProductType, Order, DeliveryMethod, and User.
- `EntityId`: string so both integer domain IDs and ASP.NET Identity string IDs are supported.
- `ImageType`: string supplied by the admin, such as `logo`, `thumbnail`, `gallery`, or `banner`.
- `RelativePath`, `OriginalFileName`, `MimeType`, `FileSize`, `SortOrder`, `CreatedAt`, and inherited `IsUsed`.

The relation is intentionally polymorphic and has no database foreign key. The media service validates that the referenced entity exists before storing a file. A unique index on relative path and an index on `(EntityType, EntityId, ImageType, IsUsed, SortOrder)` support serving and management.

## File Storage

`IEntityImageStorage` separates file persistence from controller logic. The initial `LocalEntityImageStorage` writes to a configurable absolute `MediaStorage:RootPath`. Development defaults to `API/Content/entity-images`; deployment supplies a persistent mounted directory on the virtual machine. Public URLs are built from `MediaStorage:RequestPath`, defaulting to `/content/entity-images`.

Uploads use `multipart/form-data`, generate collision-resistant server filenames, and never trust the client filename as a path. Allowed types are JPEG, PNG, WebP, and GIF. The default maximum size is 10 MiB and is configurable. The service validates extension and detected/declared media type, creates directories by entity type, and removes a newly written file if the database transaction fails.

Deleting an image removes its database record and physical file. Deactivating a parent entity leaves its images intact so reactivation is lossless. Public image queries return only active images belonging to an active parent.

## API

Authenticated endpoints provide:

- Upload an image for a managed entity.
- List images by entity type and entity ID, optionally filtered by image type and active status.
- Update image type, sort order, and `IsUsed`.
- Permanently delete an image.

The API returns validation errors for unsupported entity types, missing entities, empty files, oversized files, and unsupported content. Static files are served from the configured media directory.

## Error Handling and Consistency

All file/database operations are cancellation-aware. Paths are normalized and checked to stay beneath the media root. Database failure after writing triggers file cleanup. File deletion failure is reported and does not silently remove the database record. Concurrent uploads are safe because filenames are generated server-side.

## Testing

Backend tests cover metadata round trips and change tracking, migration-compatible conversion, `IsUsed` defaults, parent validation, upload validation, path confinement, file cleanup, media ordering, and physical deletion. API integration tests use a temporary media root and a test database provider appropriate to the behavior under test.

