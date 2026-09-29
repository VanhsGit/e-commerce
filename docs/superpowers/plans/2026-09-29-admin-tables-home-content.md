# Admin Tables and Home Content Management Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep all Admin table cells on one line with internal horizontal scrolling and add an immediately published Admin editor for every current Home marketing section and image.

**Architecture:** Store one validated, versioned Home content document in a singleton catalogue entity and expose it through a public GET/Admin-only PUT controller. Angular owns an equivalent typed contract plus compiled defaults, loads API content independently from catalogue data, and supplies it to presentational Home sections; a routed Admin reactive form edits the fixed structure and reuses the existing Media picker.

**Tech Stack:** .NET 10, ASP.NET Core controllers, EF Core 10/Npgsql/SQLite-compatible model configuration, xUnit/Moq, Angular 20 standalone components, typed reactive forms, Angular Material, ng-zorro, Jasmine/Karma.

**Spec:** `docs/superpowers/specs/2026-09-29-admin-tables-home-content-design.md`

## Global Constraints

- Home section order and all collection sizes remain fixed; there are no add, delete, hide, drag, or reorder controls.
- Saving publishes immediately; there is no draft, schedule, approval, or revision history.
- `GET /api/homecontent` is public; `PUT /api/homecontent` requires the `Admin` role.
- Raw HTML is never accepted or rendered; Angular interpolation/property binding remains the rendering path.
- Home falls back to the compiled version-1 default document without blocking catalogue requests.
- Search, warranty lookup, pagination, filters, sticky columns, and existing CRUD behavior must not change.
- Run Angular tests with `npm.cmd test -- --browsers=ChromeHeadlessNoGpu` on Windows.

## Review Focus

- A long table value containing spaces or an unbroken URL stays on one line and scrolls inside the table card, never at document level; Task 1 pins this with computed-style and rendered-table assertions.
- A missing, duplicated, or reordered industry discriminator and any changed fixed collection size is rejected without replacing saved content; Task 3 pins these validation cases.
- Absolute and relative forms of the same Media URL both prevent deletion while referenced by Home content; Task 4 pins both URL forms.
- An unsupported content version or failed Home content request renders the compiled defaults while successful catalogue groups still render; Task 5 pins both failure modes.
- Restoring defaults never publishes until Save is pressed, and failed saves retain dirty form data; Task 6 pins both behaviors.

---

### Task 1: One-line Admin tables with internal horizontal scrolling

**Files:**
- Modify: `client/src/styles.scss`
- Modify: `client/src/app/admin/shared/admin-ui-primitives.spec.ts`
- Test: `client/src/app/admin/shared/admin-ui-primitives.spec.ts`

**Interfaces:**
- Consumes: existing `.admin-table` wrapper and every table's existing `[nzScroll]` configuration.
- Produces: shared `.admin-table` CSS contract: nowrap header/body descendants plus `overflow-x: auto` on the ng-zorro table content; `.admin-dialog` wrapping rules remain unaffected.

- [ ] **Step 1: Write the failing shared-style test**

Add assertions named `keeps admin table values on one line` and `scrolls wide tables inside their container`. Mount the ng-zorro class structure and assert body-cell `whiteSpace === 'nowrap'`, nested `.cell-link` `whiteSpace === 'nowrap'`, `.ant-table-content` `overflowX === 'auto'`, and a `.admin-dialog .break-safe` value still has `overflowWrap === 'anywhere'`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm.cmd test -- --browsers=ChromeHeadlessNoGpu --include=src/app/admin/shared/admin-ui-primitives.spec.ts`

Expected: FAIL on nowrap/overflow assertions.

- [ ] **Step 3: Implement the shared table CSS**

Set nowrap on Admin table `th`, `td`, and their scan-content descendants; set the table content wrapper to local horizontal auto overflow and max width 100%. Do not change `.admin-dialog-section` or `.break-safe` wrapping.

- [ ] **Step 4: Run the focused test and build**

Run the focused Karma command from Step 2, then `npm.cmd run build` from `client`.

Expected: all focused specs pass and build exits 0.

- [ ] **Step 5: Commit**

Commit message: `style: keep admin tables on one line`

### Task 2: Versioned Home content domain model and database persistence

**Files:**
- Create: `Core/Entities/HomePageContent.cs`
- Create: `Core/HomeContent/HomePageContentDocument.cs`
- Create: `Core/HomeContent/HomePageContentDefaults.cs`
- Modify: `Infrastructure/Data/StoreContext.cs`
- Create: EF-generated `AddHomePageContent` migration files under `Infrastructure/Data/Migrations`
- Modify: `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`
- Create: `API.Tests/HomePageContentModelTests.cs`

**Interfaces:**
- Produces: `HomePageContent : BaseEntity` with singleton `Id == "home"`, `string ContentJson`, and `DateTime UpdatedAt`; `HomePageContentDocument` with `Version`, `Hero`, fixed `Industries`, `Commitments`, `Warranty`, and `Cta`; `HomePageContentDefaults.Document` and serialized `HomePageContentDefaults.Json`.

- [ ] **Step 1: Write failing model/default tests**

In `HomePageContentModelTests`, assert the EF design-time model contains the entity, the `home` seed row, version `1`, exactly three ordered industry kinds (`bike`, `machine`, `appliance`), three hero cards/metrics, four commitments, and current visible copy/image URLs from the existing Home constants.

- [ ] **Step 2: Run backend tests and verify RED**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~HomePageContentModelTests`

Expected: compile failure because the entity/document do not exist.

- [ ] **Step 3: Add domain types and current defaults**

Define focused record/classes under `Core.HomeContent`; copy the current Home text and image metadata exactly into `HomePageContentDefaults.Document`. Expose `Json` using the repository's `System.Text.Json` naming policy used by the API.

- [ ] **Step 4: Configure persistence and generate migration**

Add `DbSet<HomePageContent> HomePageContents`, provider-aware `ContentJson` column type (`TEXT` for SQLite, `jsonb` otherwise), required content, stable seed timestamp, and the singleton seed. Run:

`dotnet ef migrations add AddHomePageContent --project Infrastructure/Infrastructure.csproj --startup-project API/API.csproj --output-dir Data/Migrations`

- [ ] **Step 5: Run focused and full backend tests**

Run the focused command from Step 2, then `dotnet test API.Tests/API.Tests.csproj`.

Expected: all pass.

- [ ] **Step 6: Commit**

Commit message: `feat: persist versioned home page content`

### Task 3: Public read and Admin-only immediate update API

**Files:**
- Create: `API/Dtos/HomePageContentResponse.cs`
- Create: `API/Helpers/HomePageContentValidator.cs`
- Create: `API/Controllers/HomeContentController.cs`
- Create: `API.Tests/HomeContentControllerTests.cs`
- Create: `API.Tests/HomePageContentValidatorTests.cs`

**Interfaces:**
- Consumes: `HomePageContent`, `HomePageContentDocument`, and `HomePageContentDefaults` from Task 2.
- Produces: `HomePageContentResponse(HomePageContentDocument Content, DateTime UpdatedAt)`; public `Get(CancellationToken)`; `[Authorize(Roles = "Admin")] Put(HomePageContentDocument, CancellationToken)`; `HomePageContentValidator.Validate(HomePageContentDocument) : IReadOnlyList<string>`.

- [ ] **Step 1: Write failing validation tests**

Assert the default document is valid; missing required headings, invalid phone/email, non-http/non-local image URLs, unsupported version, duplicate/reordered/missing industry kinds, and changed fixed list sizes each return errors.

- [ ] **Step 2: Run validator tests and verify RED**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~HomePageContentValidatorTests`

Expected: compile failure for the missing validator.

- [ ] **Step 3: Implement the validator**

Implement `Validate` as a pure function. It validates editable values and exact structural invariants without accepting raw HTML or silently repairing invalid arrays.

- [ ] **Step 4: Write failing controller tests**

Using EF InMemory, assert GET returns stored content and recovers with defaults when the singleton is absent; PUT replaces content and `UpdatedAt`; invalid PUT returns 400 and leaves prior JSON unchanged; reflection confirms PUT has `AuthorizeAttribute.Roles == "Admin"` while GET has no authorization attribute.

- [ ] **Step 5: Run controller tests and verify RED**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~HomeContentControllerTests`

Expected: compile failure for the missing controller/response.

- [ ] **Step 6: Implement controller and response**

Use `StoreContext` directly for the singleton. Deserialize with web JSON options, fall back only when the row is missing/corrupt on GET, validate before mutating on PUT, serialize and save once, and return the saved response.

- [ ] **Step 7: Run focused and full backend tests**

Run both focused filters, then `dotnet test API.Tests/API.Tests.csproj`.

Expected: all pass.

- [ ] **Step 8: Commit**

Commit message: `feat: expose home content management API`

### Task 4: Protect Home images from Media deletion

**Files:**
- Create: `Core/HomeContent/HomeContentImageReferences.cs`
- Modify: `Infrastructure/Services/EntityImageService.cs`
- Modify: `API.Tests/EntityImageServiceTests.cs`

**Interfaces:**
- Consumes: singleton `HomePageContent.ContentJson` and the storage public URL.
- Produces: `HomeContentImageReferences.Contains(string contentJson, string publicUrl) : bool`, comparing normalized URL paths so absolute and relative forms match.

- [ ] **Step 1: Write failing deletion tests**

Add cases where Home content references `/content/entity-images/library/hero.webp` and where it references the same path as an absolute API URL. Assert `DeleteAsync` returns `InUse`, retains metadata, and never deletes storage.

- [ ] **Step 2: Run focused tests and verify RED**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~EntityImageServiceTests`

Expected: the image is deleted instead of returning `InUse`.

- [ ] **Step 3: Implement normalized reference detection**

Extract image values from the typed document when possible; compare normalized URI paths and exact local URLs. Malformed content must fail closed for a URL textually present, without blocking unrelated images.

- [ ] **Step 4: Run focused and full backend tests**

Run the command from Step 2, then `dotnet test API.Tests/API.Tests.csproj`.

Expected: all pass.

- [ ] **Step 5: Commit**

Commit message: `fix: protect home content images from deletion`

### Task 5: Typed Angular content service and public Home integration

**Files:**
- Create: `client/src/app/home/home-content.model.ts`
- Create: `client/src/app/home/home-content.service.ts`
- Modify: `client/src/app/home/sections/industry-section/industry-content.ts`
- Modify: `client/src/app/home/sections/hero-section/hero-section.component.ts`
- Modify: `client/src/app/home/sections/commitments-section/commitments-section.component.ts`
- Modify: `client/src/app/home/sections/commitments-section/commitments-section.component.html`
- Modify: `client/src/app/home/sections/warranty-section/warranty-section.component.ts`
- Modify: `client/src/app/home/sections/warranty-section/warranty-section.component.html`
- Modify: `client/src/app/home/sections/cta-section/cta-section.component.ts`
- Modify: `client/src/app/home/sections/cta-section/cta-section.component.html`
- Modify: `client/src/app/home/home.component.ts`
- Modify: `client/src/app/home/home.component.html`
- Modify: existing specs under `client/src/app/home/**/*.spec.ts`
- Create: `client/src/app/home/home-content.service.spec.ts`

**Interfaces:**
- Produces: `HomePageContent`, `HomeContentResponse`, `DEFAULT_HOME_PAGE_CONTENT`, and `HomeContentService.get(): Observable<HomeContentResponse>` / `update(content): Observable<HomeContentResponse>`.
- Produces: required `content` inputs for Hero, Commitments, Warranty, and CTA section components; Industry keeps its existing typed input.

- [ ] **Step 1: Write failing service and Home fallback tests**

Test endpoint URL/typing, API content rendering, HTTP-error fallback, unsupported-version fallback, and independence from a failing appliance/catalogue request. Update section tests to set the new required inputs.

- [ ] **Step 2: Run focused frontend tests and verify RED**

Run: `npm.cmd test -- --browsers=ChromeHeadlessNoGpu --include=src/app/home/home-content.service.spec.ts --include=src/app/home/home.component.spec.ts --include=src/app/home/sections/hero-section/hero-section.component.spec.ts --include=src/app/home/sections/industry-section/industry-section.component.spec.ts`

Expected: compile/test failure for missing contracts, service, and inputs.

- [ ] **Step 3: Add typed models/defaults and service**

Move the existing compiled content values without copy changes into `DEFAULT_HOME_PAGE_CONTENT`; retain compatibility exports only where tests/components still need them. The service uses `environment.apiUrl + 'homecontent'`.

- [ ] **Step 4: Convert sections to content inputs**

Bind every approved editable field, including CTA `href` values built from phone/email, while keeping icons/themes/anchors/layout and warranty/search events application-controlled.

- [ ] **Step 5: Load content independently in HomeComponent**

Use a signal initialized to defaults. Start the Home-content request separately from the existing catalogue `forkJoin`; accept only version `1`; on error retain defaults; pass each typed section through the template.

- [ ] **Step 6: Run focused tests and production build**

Run the focused command from Step 2, then `npm.cmd run build` from `client`.

Expected: all focused specs pass and build exits 0.

- [ ] **Step 7: Commit**

Commit message: `feat: load managed content on home page`

### Task 6: Admin Home content editor, navigation, and unsaved-change protection

**Files:**
- Create: `client/src/app/admin/home-content/home-content-form.ts`
- Create: `client/src/app/admin/home-content/home-content-form.spec.ts`
- Create: `client/src/app/admin/home-content/home-content-admin-page.component.ts`
- Create: `client/src/app/admin/home-content/home-content-admin-page.component.html`
- Create: `client/src/app/admin/home-content/home-content-admin-page.component.spec.ts`
- Create: `client/src/app/admin/home-content/home-content-pending-changes.guard.ts`
- Modify: `client/src/app/admin/admin.routes.ts`
- Modify: `client/src/app/admin/layout/admin-layout.component.ts`

**Interfaces:**
- Consumes: `HomePageContent`, `DEFAULT_HOME_PAGE_CONTENT`, `HomeContentService`, `RepresentativeImagePickerComponent`, `NotifyService`, and `ConfirmService`.
- Produces: `createHomeContentForm(FormBuilder, HomePageContent)`, `readHomeContentForm(form)`, routed `HomeContentAdminPageComponent`, and `homeContentPendingChangesGuard` using `component.hasUnsavedChanges()`.

- [ ] **Step 1: Write failing form-mapper tests**

Assert defaults create seven editor groups, all fixed arrays retain their exact sizes/order, a patched image/text round-trips without changing system-owned fields, and required/email/phone validation marks invalid input.

- [ ] **Step 2: Run form tests and verify RED**

Run: `npm.cmd test -- --browsers=ChromeHeadlessNoGpu --include=src/app/admin/home-content/home-content-form.spec.ts`

Expected: compile failure for missing form factory/mappers.

- [ ] **Step 3: Implement the typed form factory/mappers**

Use nested `FormGroup`/`FormArray` structures with non-null controls. Keep discriminator, layout, theme, icon, and array-size values disabled or reconstructed from the loaded document rather than editable controls.

- [ ] **Step 4: Write failing page/guard tests**

Assert load renders the seven labeled sections and expected fixed item counts; picker changes update image controls; Save calls `update` and marks pristine only on success; failure retains dirty values; Restore Defaults asks for confirmation when dirty, cancellation preserves values, confirmation changes the form without calling `update`; guard allows pristine navigation and confirms dirty navigation.

- [ ] **Step 5: Run page tests and verify RED**

Run: `npm.cmd test -- --browsers=ChromeHeadlessNoGpu --include=src/app/admin/home-content/home-content-admin-page.component.spec.ts --include=src/app/admin/home-content/home-content-form.spec.ts`

Expected: compile failure for missing page/guard.

- [ ] **Step 6: Implement page and template**

Use the shared Admin page/card styles and Material tabs or clearly separated sections. Reuse `RepresentativeImagePickerComponent`; show loading/error/saving states; require explicit Save after Restore; include a `/` preview link.

- [ ] **Step 7: Add route, guard, and sidebar item**

Register `/admin/home-content` with breadcrumb `Nội dung trang chủ`, attach the guard, and add the menu item under the System group without changing other links.

- [ ] **Step 8: Run focused tests and production build**

Run the focused command from Step 5, then `npm.cmd run build` from `client`.

Expected: all focused specs pass and build exits 0.

- [ ] **Step 9: Commit**

Commit message: `feat: add admin home content editor`

### Task 7: Whole-feature verification and review

**Files:**
- Modify only files required by failures found during verification.

**Interfaces:**
- Consumes all prior task outputs; produces a release-ready branch with no Critical or Important review findings.

- [ ] **Step 1: Verify formatting and migration consistency**

Run: `git diff --check`

Run: `dotnet ef migrations has-pending-model-changes --project Infrastructure/Infrastructure.csproj --startup-project API/API.csproj`

Expected: no whitespace errors and no pending model changes.

- [ ] **Step 2: Run all automated tests**

Run: `dotnet test skinet.sln`

Run from `client`: `npm.cmd test -- --browsers=ChromeHeadlessNoGpu`

Expected: all tests pass.

- [ ] **Step 3: Run production builds**

Run: `dotnet build skinet.sln --no-restore`

Run from `client`: `npm.cmd run build`

Expected: both exit 0.

- [ ] **Step 4: Perform desktop/mobile visual QA**

Inspect all Admin tables for one-line cells and card-local scrolling. Inspect `/admin/home-content` and `/` at desktop and mobile widths, including long text, image previews, save feedback, API failure fallback, and no document-level horizontal overflow.

- [ ] **Step 5: Review the complete diff against this plan/spec**

Fix all Critical and Important findings with focused RED/GREEN tests. Record any accepted Minor finding with rationale.

- [ ] **Step 6: Commit verification fixes if any**

Commit message: `fix: address home content review findings`
