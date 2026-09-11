# Admin Entity Management Design

## Scope

This phase replaces the single oversized admin dashboard with a routed admin workspace for Company, Brand, ElectricBikeProduct, AgriculturalMachineProduct, Product, ProductBrand, ProductType, Order, DeliveryMethod, AppUser, and EntityImage. Every authenticated, active user may access it; roles are intentionally out of scope.

## Backend Boundaries

Each resource has an explicit controller contract and typed DTOs. Reflection-based generic CRUD is not exposed over HTTP. Shared application services handle repeated list, create, update, activation, and validation behavior, while resource-specific services enforce relationships and business rules.

Write endpoints require authentication. Catalog read endpoints remain public where they are public today and return only active records. Admin list endpoints require authentication and can return both active and inactive records.

All create DTOs accept `IsUsed` but default it to `true`. Update DTOs include `IsUsed`. Delete endpoints perform soft deletion. A dedicated activation endpoint is not required because update supports reactivation.

## Resource Rules

- Company and Brand support metadata and entity images. Deactivation is rejected when it would leave active products referencing an inactive record unless those dependents are deactivated first.
- ElectricBikeProduct and AgriculturalMachineProduct preserve their category-specific fields, support metadata/images, and validate Company and Brand references.
- Product validates ProductBrand, ProductType, and Company references and uses EntityImage as the canonical new media model while retaining `PictureUrl` for backward compatibility during this phase.
- ProductBrand and ProductType provide simple name management and media support.
- DeliveryMethod provides full create, read, update, and soft delete. Inactive methods are excluded from checkout.
- Order provides authenticated admin list/detail/create/update/soft-delete. The admin create form builds items, address, delivery method, subtotal, status, and optional payment intent. Updates protect immutable identity fields and replace child items transactionally only when the request explicitly supplies them.
- AppUser administration lists users and supports create/update/soft-delete. Creation requires email and optional display name, never a password. Email uniqueness and normalization continue to use ASP.NET Identity. An active user cannot deactivate their own currently authenticated account.
- EntityImage management uses the media API from the media phase.

## Angular Structure

`/admin` becomes a lazy routed area with `AdminLayoutComponent`. The layout has a responsive sidebar/nav, page title/breadcrumb region, and child router outlet. Routes exist for dashboard summary and one management page per resource.

Shared admin primitives provide:

- Searchable/paginated table shell with loading and empty states.
- Consistent create/edit drawer or modal shell.
- `MetadataEditorComponent` for unique non-empty string keys and string values.
- `EntityImageManagerComponent` for upload, preview, image type, ordering, activation, and deletion.
- Status control for `IsUsed` and confirmation for soft delete.

Resource pages remain strongly typed and own their field definitions and relationship lookups. Order and user pages are bespoke rather than forced into a generic form. The current monolithic `AdminDashboardComponent` is reduced to summary cards and links.

## UX and Validation

Forms display server validation messages and keep entered values after failure. Destructive actions require confirmation. Inactive rows are visually distinct and can be filtered. Relationships use select controls populated from active reference data, while edit views can still display a currently selected inactive reference.

Upload controls show progress and errors and refresh the entity gallery after success. The image manager is available after an entity exists; a newly created entity is saved before uploads are enabled.

## Testing

Backend tests cover authentication requirements, CRUD contracts, soft delete/reactivation, inactive filtering, relationship validation, order updates, and passwordless user creation. Angular tests cover metadata key/value conversion, admin route/nav configuration, form payload mapping, inactive-state actions, and upload state. Full .NET and Angular builds are required.

