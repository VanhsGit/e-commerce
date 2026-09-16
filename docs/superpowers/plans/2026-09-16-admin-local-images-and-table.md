# Admin Local Images and Table Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Store uploaded admin images on the API host, expose them through a stable public path, reuse those paths in existing entity image fields, and simplify/filter the admin lists.

**Architecture:** `EntityImage` becomes a standalone media-catalog record. `LocalEntityImageStorage` writes validated files below the configured local root and returns a public relative URL; forms either upload a new catalog image or select an existing catalog URL and save it into `LogoUrl`, `PictureUrl`, or `AvatarUrl`. Existing list services remain responsible for building query parameters, while shared admin CSS standardizes bordered filters and readable scrollable tables.

**Tech Stack:** .NET 10, ASP.NET Core, Entity Framework Core 10/PostgreSQL, Angular 20 standalone components, RxJS, ng-zorro-antd, Tailwind CSS 3.

**Spec:** `docs/superpowers/specs/2026-09-16-admin-local-images-and-table-design.md`

## Global Constraints

- Store public relative URLs, never environment-specific host names.
- Default physical root: `Content/entity-images` below the API content root.
- Default public prefix: `/content/entity-images`.
- One representative image per entity, using the existing URL property.
- The same media image may be reused by multiple entities.
- Validate extension, MIME type, file signature, and maximum size before persistence.
- Keep paths under the configured storage root.
- Use server-side filters; do not replace them with client-side filtering.
- Keep tables neutral, wrapping, and horizontally scrollable.

---

### Task 1: Convert entity images into a standalone media catalog

**Files:**
- Modify: `Core/Entities/EntityImage.cs`
- Modify: `Core/Interfaces/IEntityImageStorage.cs`
- Modify: `Core/Interfaces/IEntityImageService.cs`
- Modify: `Infrastructure/Data/StoreContext.cs`
- Modify: `Infrastructure/Services/LocalEntityImageStorage.cs`
- Modify: `Infrastructure/Services/EntityImageService.cs`
- Modify: `API/Dtos/EntityImageDto.cs`
- Modify: `API/Controllers/EntityImagesController.cs`
- Create: `API.Tests/API.Tests.csproj`
- Create: `API.Tests/LocalEntityImageStorageTests.cs`
- Modify: `skinet.sln`

**Interfaces:**
- Produces: `Task<StoredImageFile> SaveAsync(Stream content, string originalFileName, string contentType, CancellationToken cancellationToken = default)`.
- Produces: `Task<IReadOnlyList<EntityImage>> ListAsync(string? search, bool includeInactive, CancellationToken cancellationToken = default)`.
- Produces: `Task<EntityImage> UploadAsync(EntityImageUpload upload, CancellationToken cancellationToken = default)`.
- Produces: `Task<DeleteEntityImageResult> DeleteAsync(string id, CancellationToken cancellationToken = default)`.
- Produces API: `GET /api/entityimages?search=&includeInactive=`, `POST /api/entityimages`, and `DELETE /api/entityimages/{id}`.

- [ ] **Step 1: Add the backend test project and failing storage tests**

Create an xUnit project targeting `net10.0` with references to `Infrastructure` and package versions `Microsoft.NET.Test.Sdk` 17.11.1, `xunit` 2.9.2, `xunit.runner.visualstudio` 2.8.2, `Microsoft.EntityFrameworkCore.InMemory` 10.0.11, and `Moq` 4.20.72. Add it to `skinet.sln`.

Test valid PNG storage, public URL generation, and rejection of mismatched content:

```csharp
[Fact]
public async Task SaveAsync_WritesValidatedImageBelowConfiguredRoot()
{
    await using var content = new MemoryStream(ValidPngBytes);
    var stored = await _storage.SaveAsync(content, "avatar.png", "image/png");

    Assert.StartsWith("library/", stored.RelativePath);
    Assert.True(File.Exists(Path.Combine(_root, stored.RelativePath)));
    Assert.Equal("/content/entity-images/" + stored.RelativePath.Replace('\\', '/'),
        _storage.GetPublicUrl(stored.RelativePath));
}

[Fact]
public async Task SaveAsync_RejectsExtensionAndSignatureMismatch()
{
    await using var content = new MemoryStream(ValidPngBytes);
    await Assert.ThrowsAsync<InvalidDataException>(() =>
        _storage.SaveAsync(content, "avatar.jpg", "image/jpeg"));
}
```

- [ ] **Step 2: Run the tests and confirm the interface mismatch fails**

Run: `dotnet test API.Tests/API.Tests.csproj --no-restore`

Expected: compilation fails because `SaveAsync` still requires `EntityType`.

- [ ] **Step 3: Simplify the media entity and interfaces**

Remove `EntityType`, `EntityId`, `ImageType`, and `SortOrder` from `EntityImage`, `EntityImageDto`, and upload/update contracts. Use these shapes:

```csharp
public class EntityImage : BaseEntity
{
    public string RelativePath { get; set; } = string.Empty;
    public string OriginalFileName { get; set; } = string.Empty;
    public string MimeType { get; set; } = string.Empty;
    public long FileSize { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public record EntityImageUpload(
    string OriginalFileName,
    string ContentType,
    long FileSize,
    Stream Content);

public enum DeleteEntityImageResult { Deleted, NotFound, InUse }
```

Configure only the remaining required properties and a unique `RelativePath` index in `StoreContext`.

- [ ] **Step 4: Make local storage write standalone library files**

Change `SaveAsync` to remove `EntityType` and build paths as `library/{yyyy}/{MM}/{guid}{extension}`. Retain signature validation, maximum-size validation, path traversal protection, rollback-safe `CreateNew`, and slash normalization.

- [ ] **Step 5: Implement catalog list, upload, and safe delete**

`ListAsync` filters by trimmed, lower-cased `OriginalFileName` or `MimeType` and sorts newest first. `UploadAsync` writes the file, inserts metadata, and removes the file when database persistence fails. `DeleteAsync` computes the public URL and checks `Company.LogoUrl`, `Brand.LogoUrl`, both product `PictureUrl` columns, and identity-user `AvatarUrl`; return `InUse` without deleting when any match exists.

Add `EntityImageServiceTests` using EF Core InMemory contexts and a mocked `IEntityImageStorage`. Cover search filtering, cleanup through `DeleteAsync(stored.RelativePath)` when `SaveChangesAsync` fails, `InUse` when an entity field matches the computed URL, and successful metadata/file deletion when unused.

- [ ] **Step 6: Replace entity-bound controller routes with catalog routes**

Return `409 Conflict` for `InUse`, `404` for `NotFound`, `204` for `Deleted`, and `400` for invalid images. Map `Url` with `_storage.GetPublicUrl(image.RelativePath)`.

- [ ] **Step 7: Run storage tests and build the backend**

Run: `dotnet test API.Tests/API.Tests.csproj`

Expected: all tests pass.

Run: `dotnet build skinet.sln --no-restore`

Expected: build succeeds with zero errors.

- [ ] **Step 8: Commit the media catalog backend**

```bash
git add Core/Entities/EntityImage.cs Core/Interfaces/IEntityImageStorage.cs Core/Interfaces/IEntityImageService.cs Infrastructure/Data/StoreContext.cs Infrastructure/Services/LocalEntityImageStorage.cs Infrastructure/Services/EntityImageService.cs API/Dtos/EntityImageDto.cs API/Controllers/EntityImagesController.cs API.Tests skinet.sln
git commit -m "feat: store admin images in local media catalog"
```

### Task 2: Persist user avatar URLs and migrate both databases

**Files:**
- Modify: `Core/Entities/Identity/AppUser.cs`
- Modify: `API/Dtos/AdminUserDto.cs`
- Modify: `API/Dtos/CreateUserDto.cs`
- Modify: `API/Controllers/AdminUsersController.cs`
- Create via EF CLI: the timestamped `StandaloneMediaCatalog` migration under `Infrastructure/Data/Migrations/`
- Modify: `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`
- Create via EF CLI: the timestamped `AddUserAvatarUrl` migration under `Infrastructure/Identity/Migrations/`
- Modify: `Infrastructure/Identity/Migrations/AppIdentityDbContextModelSnapshot.cs`

**Interfaces:**
- Consumes: public media URL returned by Task 1.
- Produces: nullable `AppUser.AvatarUrl`, `AdminUserDto.AvatarUrl`, `CreateUserDto.AvatarUrl`, and `UpdateAdminUserDto.AvatarUrl`.

- [ ] **Step 1: Add a failing controller mapping test**

Add a focused test in `API.Tests/AdminUserDtoTests.cs` that verifies `AvatarUrl` is present and round-trippable on create/update DTOs:

```csharp
[Fact]
public void AdminUserDtos_CarryAvatarUrl()
{
    var create = new CreateUserDto { AvatarUrl = "/content/entity-images/library/avatar.png" };
    var update = new UpdateAdminUserDto { AvatarUrl = create.AvatarUrl };
    Assert.Equal(create.AvatarUrl, update.AvatarUrl);
}
```

- [ ] **Step 2: Run the test and confirm it fails to compile**

Run: `dotnet test API.Tests/API.Tests.csproj --filter AdminUserDtos_CarryAvatarUrl`

Expected: compilation fails because `AvatarUrl` is absent.

- [ ] **Step 3: Add avatar persistence to the identity model and API**

Add `public string? AvatarUrl { get; set; }` to `AppUser` and all admin user DTOs. Assign it during create/update and return it from both `ToDto` and the list projection. Also return the existing `PhoneNumber` because the form already edits it.

- [ ] **Step 4: Generate schema migrations**

Run:

```bash
dotnet ef migrations add StandaloneMediaCatalog --project Infrastructure --startup-project API --context StoreContext --output-dir Data/Migrations
dotnet ef migrations add AddUserAvatarUrl --project Infrastructure --startup-project API --context AppIdentityDbContext --output-dir Identity/Migrations
```

Verify that the store migration drops only the four obsolete entity-binding columns/index and that the identity migration adds nullable `AvatarUrl`.

- [ ] **Step 5: Run tests and inspect migrations**

Run: `dotnet test API.Tests/API.Tests.csproj`

Expected: all tests pass.

Run: `dotnet ef migrations script --project Infrastructure --startup-project API --context StoreContext --idempotent`

Run: `dotnet ef migrations script --project Infrastructure --startup-project API --context AppIdentityDbContext --idempotent`

Expected: both scripts generate without model warnings.

- [ ] **Step 6: Commit identity and migrations**

```bash
git add Core/Entities/Identity/AppUser.cs API/Dtos/AdminUserDto.cs API/Dtos/CreateUserDto.cs API/Controllers/AdminUsersController.cs Infrastructure/Data/Migrations Infrastructure/Identity/Migrations
git commit -m "feat: persist admin avatar urls"
```

### Task 3: Normalize public image URL serving

**Files:**
- Modify: `API/Startup.cs`
- Modify: `API/Helpers/ElectricBikeProductUrlResolver.cs`
- Modify: `API/Helpers/AgriculturalMachineProductUrlResolver.cs`
- Modify: `client/proxy.conf.json`
- Modify: `API/appsettings.Development.json`
- Test: `API.Tests/ImageUrlResolverTests.cs`

**Interfaces:**
- Consumes: relative URL `/content/entity-images/...` from Task 1.
- Produces: URLs that work through ASP.NET Core in production and the Angular development proxy.

- [ ] **Step 1: Write failing URL normalization tests**

Cover these cases for both product resolvers:

```csharp
[Theory]
[InlineData("/content/entity-images/library/a.png", "/content/entity-images/library/a.png")]
[InlineData("https://cdn.example/a.png", "https://cdn.example/a.png")]
[InlineData("images/products/a.png", "https://localhost:5001/Content/images/products/a.png")]
public void Resolve_PreservesPublicAndAbsoluteUrls_AndSupportsLegacyPaths(
    string value, string expected)
```

- [ ] **Step 2: Run the tests and confirm relative media URLs fail**

Run: `dotnet test API.Tests/API.Tests.csproj --filter ImageUrlResolverTests`

Expected: `/content/...` is incorrectly prefixed by the current resolver.

- [ ] **Step 3: Normalize URL handling and static-file mapping**

Return absolute `http://`/`https://` URLs and root-relative `/...` URLs unchanged; prepend legacy `ApiUrl` only to old relative product paths. Keep one `UseStaticFiles` mapping from configured `RootPath` to configured `RequestPath` and remove the duplicate broad `/content` mapping.

- [ ] **Step 4: Proxy local media in Angular development**

Add a second proxy entry:

```json
"/content": {
  "target": "https://localhost:5001",
  "secure": false,
  "changeOrigin": true
}
```

- [ ] **Step 5: Run tests and backend build**

Run: `dotnet test API.Tests/API.Tests.csproj`

Run: `dotnet build skinet.sln --no-restore`

Expected: both succeed.

- [ ] **Step 6: Commit URL serving changes**

```bash
git add API/Startup.cs API/Helpers/ElectricBikeProductUrlResolver.cs API/Helpers/AgriculturalMachineProductUrlResolver.cs client/proxy.conf.json API/appsettings.Development.json API.Tests/ImageUrlResolverTests.cs
git commit -m "fix: serve local media urls consistently"
```

### Task 4: Build a reusable one-image picker and media library

**Files:**
- Modify: `client/src/app/shared/models/entity-image.ts`
- Modify: `client/src/app/services/entity-image.service.ts`
- Create: `client/src/app/admin/shared/representative-image-picker/representative-image-picker.component.ts`
- Create: `client/src/app/admin/shared/representative-image-picker/representative-image-picker.component.html`
- Create: `client/src/app/admin/shared/representative-image-picker/representative-image-picker.component.spec.ts`
- Rewrite: `client/src/app/admin/media/admin-media-page.component.ts`
- Rewrite: `client/src/app/admin/media/admin-media-page.component.html`
- Remove: `client/src/app/admin/shared/entity-image-manager/entity-image-manager.component.ts`
- Remove: `client/src/app/admin/shared/entity-image-manager/entity-image-manager.component.html`

**Interfaces:**
- Consumes API from Task 1.
- Produces component inputs `value: string`, `label: string`; output `valueChange: EventEmitter<string>`.
- Produces service methods `list(search?: string): Observable<EntityImage[]>`, `upload(file: File): Observable<EntityImage>`, and `remove(id: string): Observable<void>`.

- [ ] **Step 1: Write failing picker tests**

Test selection and upload URL emission:

```typescript
it('emits the selected media URL', () => {
  spyOn(component.valueChange, 'emit');
  component.select({ id: '1', url: '/content/entity-images/library/a.png' } as EntityImage);
  expect(component.valueChange.emit).toHaveBeenCalledWith('/content/entity-images/library/a.png');
});
```

Use `HttpClientTestingModule`/the Angular HTTP testing provider to assert `GET /api/entityimages?search=logo` and multipart `POST /api/entityimages`.

- [ ] **Step 2: Run the spec and confirm it fails**

Run: `npm test -- --include src/app/admin/shared/representative-image-picker/representative-image-picker.component.spec.ts`

Expected: component files do not exist.

- [ ] **Step 3: Update the media model and HTTP service**

Use this model:

```typescript
export interface EntityImage {
  id: string;
  url: string;
  originalFileName: string;
  mimeType: string;
  fileSize: number;
  isUsed: boolean;
  createdAt: string;
}
```

The service builds `search` only when non-empty and always posts the selected file as multipart field `file`.

- [ ] **Step 4: Implement the one-image picker**

Render one preview `<img>` with `h-32 w-full rounded border border-slate-300 object-cover`. Provide Upload, Chọn từ kho, and Xóa lựa chọn actions. The library modal loads catalog images, includes a bordered search input, and emits the chosen image URL without mutating the entity until the parent form saves.

- [ ] **Step 5: Rewrite the media page as a global catalog**

Remove entity-type and entity-ID selection. Show a bordered search/upload bar and a neutral responsive image grid with filename, MIME type, size, created date, Copy URL, and Delete. On `409`, show the API message that the image is in use.

- [ ] **Step 6: Run picker tests and Angular build**

Run: `npm test -- --include src/app/admin/shared/representative-image-picker/representative-image-picker.component.spec.ts`

Run: `npm run build`

Expected: tests and build succeed.

- [ ] **Step 7: Commit picker and media library**

```bash
git add client/src/app/shared/models/entity-image.ts client/src/app/services/entity-image.service.ts client/src/app/admin/shared/representative-image-picker client/src/app/admin/media client/src/app/admin/shared/entity-image-manager
git commit -m "feat: add reusable admin image picker"
```

### Task 5: Integrate the picker into every create/update form

**Files:**
- Modify: `client/src/app/admin/companies/company-admin-page.component.ts`
- Modify: `client/src/app/admin/companies/company-admin-page.component.html`
- Modify: `client/src/app/admin/brands/brand-admin-page.component.ts`
- Modify: `client/src/app/admin/brands/brand-admin-page.component.html`
- Modify: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.ts`
- Modify: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.html`
- Modify: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.ts`
- Modify: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.html`
- Modify: `client/src/app/admin/users/user-admin-page.component.ts`
- Modify: `client/src/app/admin/users/user-admin-page.component.html`

**Interfaces:**
- Consumes: `RepresentativeImagePickerComponent` from Task 4.
- Produces: saved `logoUrl`, `pictureUrl`, or `avatarUrl` in existing create/update request bodies.

- [ ] **Step 1: Replace URL-only inputs with the reusable picker**

For each form, import `RepresentativeImagePickerComponent` and bind it explicitly to the reactive control:

```html
<app-representative-image-picker
  label="Ảnh đại diện"
  [value]="form.controls.pictureUrl.value || ''"
  (valueChange)="form.controls.pictureUrl.setValue($event)">
</app-representative-image-picker>
```

Use `logoUrl` for company/brand and `avatarUrl` for user. Keep an optional read-only URL display inside the picker, not a second image card.

- [ ] **Step 2: Remove entity-bound image managers from edit-only sections**

Delete all `app-entity-image-manager` blocks and imports. The same picker must appear for both create and update modes.

- [ ] **Step 3: Replace all table/detail avatars with one image element**

Use one `<img>` when the URL is present:

```html
<img *ngIf="row.pictureUrl"
     [src]="row.pictureUrl"
     class="h-12 w-12 rounded border border-slate-300 object-cover"
     alt="" />
```

Use a simple same-size bordered placeholder when absent. Remove nested `nz-avatar`, rings, gradients, and multiple preview wrappers.

- [ ] **Step 4: Build the Angular application**

Run: `npm run build`

Expected: no template or type errors.

- [ ] **Step 5: Commit form integration**

```bash
git add client/src/app/admin/companies client/src/app/admin/brands client/src/app/admin/electric-bikes client/src/app/admin/agricultural-machines client/src/app/admin/users
git commit -m "feat: select local images in admin forms"
```

### Task 6: Standardize filters and simplify admin tables

**Files:**
- Modify: `client/src/styles.scss`
- Modify: `client/src/app/admin/layout/admin-layout.component.html`
- Modify: all list templates under `client/src/app/admin/{companies,brands,electric-bikes,agricultural-machines,users}`
- Modify: the matching list component TypeScript files only where Enter/reset handling is absent
- Create: `client/src/app/services/admin-filter-params.spec.ts`

**Interfaces:**
- Consumes: existing typed service params from `company.service.ts`, `brand.service.ts`, `electric-bike.service.ts`, and `agricultural-machine.service.ts`.
- Produces: consistent `.admin-filter`, `.admin-table`, `.admin-cell-wrap`, and `.admin-avatar` global classes scoped below `.admin-root`.

- [ ] **Step 1: Write failing HTTP parameter tests**

Use Angular HTTP testing utilities to assert that each service sends all supplied filters, including explicit `false`:

```typescript
service.getCompanies({ search: 'abc', isUsed: false }).subscribe();
const request = http.expectOne(r => r.url.endsWith('/companies'));
expect(request.request.params.get('search')).toBe('abc');
expect(request.request.params.get('isUsed')).toBe('false');
```

Repeat for brand and both product services with company, brand, category, search, and status.

- [ ] **Step 2: Run the filter tests**

Run: `npm test -- --include src/app/services/admin-filter-params.spec.ts`

Expected: existing passing cases establish the API contract; add/fix any missing reset or false-value case before template work.

- [ ] **Step 3: Add scoped neutral admin styles**

Add global styles below `.admin-root` so ng-zorro internals receive visible borders:

```scss
.admin-root .admin-filter .ant-input,
.admin-root .admin-filter .ant-select-selector {
  border: 1px solid #cbd5e1 !important;
  background: #fff !important;
  border-radius: 6px !important;
}

.admin-root .admin-table td,
.admin-root .admin-table th {
  white-space: normal;
  overflow-wrap: anywhere;
  vertical-align: top;
}
```

Keep focus border `#64748b`, neutral headers, and remove gradient/color-heavy table decorations.

- [ ] **Step 4: Apply filter and table classes to every admin list**

Wrap filter rows with `admin-filter`, add `(keyup.enter)="applyFilters()"` to search inputs, add a clear/reset action that resets drafts and reloads from the API, and apply `admin-table` plus an explicit `nzScroll.x` value to every table.

Replace truncation on content-bearing cells with wrapping/breaking. Retain truncation only for decorative dashboard summaries outside tables.

- [ ] **Step 5: Run frontend tests and build**

Run: `npm test -- --include src/app/services/admin-filter-params.spec.ts`

Run: `npm run build`

Expected: tests pass and build succeeds.

- [ ] **Step 6: Commit admin UI cleanup**

```bash
git add client/src/styles.scss client/src/app/admin client/src/app/services/admin-filter-params.spec.ts
git commit -m "style: simplify admin filters and tables"
```

### Task 7: Final regression verification

**Files:**
- Verify only; fix files from Tasks 1-6 if a check exposes a defect.

**Interfaces:**
- Consumes all previous tasks.
- Produces a verified end-to-end local-image and admin-list workflow.

- [ ] **Step 1: Run all backend tests and build**

Run: `dotnet test API.Tests/API.Tests.csproj`

Run: `dotnet build skinet.sln --no-restore`

Expected: zero failing tests and zero build errors.

- [ ] **Step 2: Run all frontend tests and build**

Run: `npm test -- --watch=false --browsers=ChromeHeadless`

Run: `npm run build`

Expected: zero failing tests and a successful Angular build.

- [ ] **Step 3: Verify schema state**

Run:

```bash
dotnet ef migrations has-pending-model-changes --project Infrastructure --startup-project API --context StoreContext
dotnet ef migrations has-pending-model-changes --project Infrastructure --startup-project API --context AppIdentityDbContext
```

Expected: both contexts report no pending model changes.

- [ ] **Step 4: Verify repository hygiene**

Run: `git diff --check`

Run: `git status --short`

Expected: no whitespace errors and only intentional implementation changes.

- [ ] **Step 5: Commit any verification-only corrections**

```bash
git add Core API Infrastructure API.Tests client skinet.sln
git commit -m "fix: complete admin media verification"
```
