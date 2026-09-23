# Electrical Appliances, Home Catalog, and Admin UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a seeded electrical-appliance product catalog and expose it consistently through the API, public catalog, product detail, and a polished Admin UI with reliable edit mapping and compact toggles.

**Architecture:** Keep the existing three product families as separate domain entities and services, adding `ElectricalApplianceProduct` beside electric bikes and agricultural machines. Put form-to-DTO conversion in pure frontend mapper functions so Admin edit and toggle requests can be unit-tested independently of dialogs. Reuse the current Company visual language and shared Admin primitives rather than introducing a second design system.

**Tech Stack:** .NET 10, ASP.NET Core Web API, EF Core 10 with PostgreSQL/SQLite compatibility, AutoMapper, Angular 20 standalone components, RxJS 7, Angular Material 20, ng-zorro 20, Tailwind CSS 3, xUnit, Jasmine/Karma.

**Spec:** `docs/superpowers/specs/2026-09-23-electrical-appliances-home-admin-ui-design.md`

## Global Constraints

- `ElectricalApplianceType` has exactly six values: PressureWasher, HandTool, ConstructionMachine, Motor, WaterPump, Battery.
- Persist the enum as a string and expose a Vietnamese `TypeName` from the API.
- Seed exactly one sample product for each type with stable IDs; migrations must be repeatable through EF Core's migration history.
- Public pages display only records where `IsUsed != false`.
- Keep authentication, OTP, standalone media management, and existing Company/Brand schema behavior unchanged.
- Do not spread API response objects into create/update requests; use explicit mapper functions.
- Use existing image fallback behavior and do not add a new UI framework or runtime dependency.

## Review Focus

- A product response containing read-only fields (`companyName`, `brandName`, `typeName`, timestamps) must produce a PUT body with none of those fields; Task 4 pins this with mapper tests.
- Nullable specifications and empty selectors must become `null` or validation errors, never the strings `"null"` or `"undefined"`; Task 4 pins this with mapper tests.
- One failed Home catalog request must not hide successful product groups; Task 7 pins this with a partial-failure component test.
- An inactive appliance must be excluded from Home, Products, related products, and public search; Tasks 7 and 8 pin this with component tests.
- Invalid route kinds and unknown appliance IDs must render the existing not-found state instead of falling through to the agricultural service; Task 8 pins this with route tests.

## File Structure

### Backend

- Create `Core/Entities/ElectricalApplianceProduct.cs`: enum and domain entity only.
- Create `Core/Specification/ElectricalApplianceProductsWithSpec.cs`: query/filter/include rules.
- Create `API/Dtos/ElectricalApplianceProductDto.cs`: read/create/update contracts.
- Create `API/Helpers/ElectricalApplianceProductUrlResolver.cs`: public image URL normalization.
- Create `API/Controllers/ElectricalApplianceProductsController.cs`: HTTP CRUD boundary.
- Modify `Infrastructure/Data/StoreContext.cs`: DbSet, enum conversion, metadata conversion, and stable seed data.
- Modify `API/Helpers/MappingProfiles.cs`: appliance maps.
- Modify `Infrastructure/Services/EntityImageService.cs`: protect appliance images from deletion while referenced.
- Generate `Infrastructure/Data/Migrations/*_AddElectricalApplianceProducts.cs` and its designer: schema and seed migration created by the exact EF command in Task 3.
- Modify `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`: generated snapshot.
- Create `API.Tests/ElectricalApplianceMappingTests.cs`: mapping coverage.
- Create `API.Tests/ElectricalApplianceSpecificationTests.cs`: filter/include coverage.
- Modify `API.Tests/EntityImageServiceTests.cs`: in-use appliance image coverage.

### Frontend contracts and shared behavior

- Create `client/src/app/shared/models/electrical-appliance-product.ts`: enum and API DTO interfaces.
- Create `client/src/app/services/electrical-appliance.service.ts`: list/get/create/update/delete API client.
- Create `client/src/app/services/electrical-appliance.service.spec.ts`: query and request contract tests.
- Create `client/src/app/admin/shared/product-form-mappers.ts`: pure form/API mapping for all three product families.
- Create `client/src/app/admin/shared/product-form-mappers.spec.ts`: regression tests for Edit/PUT mapping.
- Modify `client/src/app/shared/models/entity-image.ts`: add `ElectricalApplianceProduct` entity type.

### Admin

- Create `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.ts`: appliance CRUD state and behavior.
- Create `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.html`: Company-style list/Edit/Detail UI.
- Create `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`: filter and mapping behavior.
- Modify `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.{ts,html}`: mapper usage and standardized UI.
- Create `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.spec.ts`: edit payload regression coverage.
- Modify `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.{ts,html}`: mapper usage and standardized UI.
- Create `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.spec.ts`: edit payload regression coverage.
- Modify `client/src/app/admin/brands/brand-admin-page.component.html`: shared spacing and dialog visual structure.
- Modify `client/src/app/admin/users/user-admin-page.component.html` and `client/src/app/admin/media/admin-media-page.component.html`: shared shell/header/card/action styling only.
- Modify `client/src/app/admin/admin.routes.ts`: appliance route.
- Modify `client/src/app/admin/layout/admin-layout.component.ts`: appliance menu item.
- Modify `client/src/styles.scss`: compact Admin toggle tokens and common dialog sections.

### Public catalog

- Create `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.{ts,html,scss}`: reusable image-first product strip/grid.
- Create `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.spec.ts`: active-only cards and navigation output.
- Modify `client/src/app/home/home.component.{ts,html,scss}`: third catalog and independent loading failures.
- Modify `client/src/app/home/home.component.spec.ts`: partial-failure behavior.
- Modify `client/src/app/products/products.component.{ts,html,scss}`: appliance filter and unified card adapter.
- Modify `client/src/app/products/products.component.spec.ts`: appliance/inactive filtering.
- Modify `client/src/app/product-detail/product-detail.component.{ts,html,scss}`: appliance detail, specs, gallery, and siblings.
- Modify `client/src/app/product-detail/product-detail.component.spec.ts`: route and not-found behavior.

---

### Task 1: Add the electrical-appliance domain and AutoMapper contracts

**Files:**
- Create: `Core/Entities/ElectricalApplianceProduct.cs`
- Create: `API/Dtos/ElectricalApplianceProductDto.cs`
- Create: `API/Helpers/ElectricalApplianceProductUrlResolver.cs`
- Modify: `API/Helpers/MappingProfiles.cs`
- Create: `API.Tests/ElectricalApplianceMappingTests.cs`

**Interfaces:**
- Produces: `ElectricalApplianceType`, `ElectricalApplianceProduct`, `ElectricalApplianceProductDto`, `CreateElectricalApplianceProductDto`, and `UpdateElectricalApplianceProductDto` for Tasks 2-8.
- Produces: AutoMapper conversions between those DTOs and the entity.

- [ ] **Step 1: Write failing mapping tests**

```csharp
[Fact]
public void UpdateDto_MapsEditableFieldsWithoutReplacingIdentity()
{
    var mapper = CreateMapper();
    var entity = Product();
    var dto = new UpdateElectricalApplianceProductDto
    {
        Id = entity.Id,
        Name = "Máy bơm tăng áp",
        Brand = "Panasonic",
        Model = "A-130JAK",
        Type = ElectricalApplianceType.WaterPump,
        Description = "Bơm nước gia đình",
        Price = 2490000,
        StockQuantity = 8,
        PictureUrl = "/assets/images/img-ph.jpg",
        Power = "125W",
        Voltage = "220V",
        Capacity = "30 lít/phút",
        Compatibility = null,
        CompanyId = "company-seed-electrical-001",
        BrandId = "brand-seed-electrical-001",
        Metadata = new() { ["warrantyMonths"] = "12" },
        IsUsed = true
    };

    mapper.Map(dto, entity);

    Assert.Equal("Máy bơm tăng áp", entity.Name);
    Assert.Equal(ElectricalApplianceType.WaterPump, entity.Type);
    Assert.Equal("company-seed-electrical-001", entity.CompanyId);
    Assert.Equal("brand-seed-electrical-001", entity.BrandId);
    Assert.True(entity.IsUsed);
}

[Theory]
[InlineData(ElectricalApplianceType.PressureWasher, "Máy rửa xe")]
[InlineData(ElectricalApplianceType.Battery, "Ắc quy các loại")]
public void Entity_MapsVietnameseTypeName(ElectricalApplianceType type, string expected)
{
    var dto = CreateMapper().Map<ElectricalApplianceProductDto>(Product(type));
    Assert.Equal(expected, dto.TypeName);
}
```

- [ ] **Step 2: Run the tests and verify the missing-type failure**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~ElectricalApplianceMappingTests`

Expected: FAIL because the appliance entity and DTO types do not exist.

- [ ] **Step 3: Implement the enum, entity, DTOs, URL resolver, and maps**

```csharp
public enum ElectricalApplianceType
{
    PressureWasher = 1,
    HandTool = 2,
    ConstructionMachine = 3,
    Motor = 4,
    WaterPump = 5,
    Battery = 6
}

public class ElectricalApplianceProduct : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public ElectricalApplianceType Type { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string PictureUrl { get; set; } = string.Empty;
    public string? Power { get; set; }
    public string? Voltage { get; set; }
    public string? Capacity { get; set; }
    public string? Compatibility { get; set; }
    public string CompanyId { get; set; } = string.Empty;
    public Company Company { get; set; } = null!;
    public string BrandId { get; set; } = string.Empty;
    public Brand BrandEntity { get; set; } = null!;
    public Dictionary<string, string> Metadata { get; set; } = new();
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
```

Add an entity-to-read-DTO map with `CompanyName`, `BrandName`, the Vietnamese `TypeName` switch, and `ElectricalApplianceProductUrlResolver`. Add create/update maps with UTC timestamps exactly as the existing product mappings do.

- [ ] **Step 4: Run mapping tests**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~ElectricalApplianceMappingTests`

Expected: PASS.

- [ ] **Step 5: Commit the domain slice**

```powershell
git add Core/Entities/ElectricalApplianceProduct.cs API/Dtos/ElectricalApplianceProductDto.cs API/Helpers/ElectricalApplianceProductUrlResolver.cs API/Helpers/MappingProfiles.cs API.Tests/ElectricalApplianceMappingTests.cs
git commit -m "feat: add electrical appliance domain contracts"
```

### Task 2: Add filtering and appliance CRUD API

**Files:**
- Create: `Core/Specification/ElectricalApplianceProductsWithSpec.cs`
- Create: `API/Controllers/ElectricalApplianceProductsController.cs`
- Create: `API.Tests/ElectricalApplianceSpecificationTests.cs`

**Interfaces:**
- Consumes: entity and DTO contracts from Task 1.
- Produces: `GET/POST/PUT/DELETE /api/ElectricalApplianceProducts` and query parameters `companyId`, `brandId`, `type`, `search`, `isUsed`.

- [ ] **Step 1: Write failing specification tests**

```csharp
[Fact]
public async Task Specification_FiltersByTypeSearchAndActiveStatus()
{
    await using var db = CreateStoreContext();
    SeedRelations(db);
    db.ElectricalApplianceProducts.AddRange(
        Product("Máy bơm ly tâm", ElectricalApplianceType.WaterPump, true),
        Product("Máy bơm ngừng bán", ElectricalApplianceType.WaterPump, false),
        Product("Máy khoan pin", ElectricalApplianceType.HandTool, true));
    await db.SaveChangesAsync();

    var spec = new ElectricalApplianceProductsWithSpec(
        companyId: null,
        brandId: null,
        type: ElectricalApplianceType.WaterPump,
        search: "ly tâm",
        isUsed: true);
    var rows = await new GenericRepository<ElectricalApplianceProduct>(db).ListAsync(spec);

    Assert.Single(rows);
    Assert.Equal("Máy bơm ly tâm", rows[0].Name);
    Assert.NotNull(rows[0].Company);
    Assert.NotNull(rows[0].BrandEntity);
}
```

- [ ] **Step 2: Run the specification test**

Run: `dotnet test API.Tests/API.Tests.csproj --filter FullyQualifiedName~ElectricalApplianceSpecificationTests`

Expected: FAIL because the specification and DbSet do not exist.

- [ ] **Step 3: Implement the specification**

```csharp
public ElectricalApplianceProductsWithSpec(
    string? companyId,
    string? brandId,
    ElectricalApplianceType? type,
    string? search,
    bool? isUsed)
    : base(p =>
        (companyId == null || p.CompanyId == companyId) &&
        (brandId == null || p.BrandId == brandId) &&
        (type == null || p.Type == type) &&
        (isUsed == null || p.IsUsed == isUsed) &&
        (string.IsNullOrWhiteSpace(search) ||
         p.Name.ToLower().Contains(search.ToLower()) ||
         p.Brand.ToLower().Contains(search.ToLower()) ||
         p.Model.ToLower().Contains(search.ToLower())))
{
    AddInclude(p => p.Company);
    AddInclude(p => p.BrandEntity);
    AddOrderBy(p => p.Name);
}
```

Also add the ID constructor with includes, following the existing two product specifications.

- [ ] **Step 4: Implement the controller**

Add the same flow used by `ElectricBikeProductsController`: public list/detail; authorized create/update/delete; route/body ID mismatch returns 400; delete sets `IsUsed = false`; update sets `UpdatedAt` and returns a fully included DTO.

```csharp
[HttpPut("{id}")]
[Authorize]
public async Task<ActionResult<ElectricalApplianceProductDto>> Update(
    string id,
    [FromBody] UpdateElectricalApplianceProductDto dto)
{
    if (id != dto.Id) return BadRequest(new ApiResponse(400, "Id mismatch"));
    var product = await _unitOfWork.Repository<ElectricalApplianceProduct>().GetByIdAsync(id);
    if (product == null) return NotFound(new ApiResponse(404));
    _mapper.Map(dto, product);
    product.UpdatedAt = DateTime.UtcNow;
    _unitOfWork.Repository<ElectricalApplianceProduct>().Update(product);
    if (await _unitOfWork.Complete() <= 0)
        return BadRequest(new ApiResponse(400, "Problem updating product"));
    var updated = await _unitOfWork.Repository<ElectricalApplianceProduct>()
        .GetEntityWithSpec(new ElectricalApplianceProductsWithSpec(id, true));
    return Ok(_mapper.Map<ElectricalApplianceProductDto>(updated));
}
```

- [ ] **Step 5: Run backend tests**

Run: `dotnet test API.Tests/API.Tests.csproj`

Expected: PASS.

- [ ] **Step 6: Commit the API slice**

```powershell
git add Core/Specification/ElectricalApplianceProductsWithSpec.cs API/Controllers/ElectricalApplianceProductsController.cs API.Tests/ElectricalApplianceSpecificationTests.cs Infrastructure/Data/StoreContext.cs
git commit -m "feat: expose electrical appliance catalog API"
```

### Task 3: Add persistence, stable sample data, and media reference protection

**Files:**
- Modify: `Infrastructure/Data/StoreContext.cs`
- Modify: `Infrastructure/Services/EntityImageService.cs`
- Modify: `API.Tests/EntityImageServiceTests.cs`
- Generate: `Infrastructure/Data/Migrations/*_AddElectricalApplianceProducts.cs`
- Generate: `Infrastructure/Data/Migrations/*_AddElectricalApplianceProducts.Designer.cs`
- Modify: `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`

**Interfaces:**
- Consumes: Task 1 entity.
- Produces: `StoreContext.ElectricalApplianceProducts` and six stable seeded rows for every later UI task.

- [ ] **Step 1: Add the failing media-reference test**

```csharp
[Fact]
public async Task DeleteAsync_ReturnsInUseWhenElectricalApplianceReferencesThePublicUrl()
{
    await using var store = CreateStoreContext();
    await using var identity = CreateIdentityContext();
    var company = Company("company-media");
    var brand = Brand("brand-media");
    var image = new EntityImage
    {
        OriginalFileName = "pump.png",
        RelativePath = "library/pump.png",
        MimeType = "image/png"
    };
    store.AddRange(company, brand, image, new ElectricalApplianceProduct
    {
        Name = "Máy bơm", Brand = brand.Name, Model = "P-01",
        Type = ElectricalApplianceType.WaterPump, Description = "Máy bơm",
        PictureUrl = "/content/entity-images/library/pump.png",
        CompanyId = company.Id, BrandId = brand.Id
    });
    await store.SaveChangesAsync();

    var storage = new Mock<IEntityImageStorage>();
    storage.Setup(x => x.GetPublicUrl(image.RelativePath))
        .Returns("/content/entity-images/library/pump.png");
    var result = await new EntityImageService(store, identity, storage.Object)
        .DeleteAsync(image.Id);

    Assert.Equal(DeleteEntityImageResult.InUse, result);
}
```

- [ ] **Step 2: Configure the DbSet and model**

```csharp
public DbSet<ElectricalApplianceProduct> ElectricalApplianceProducts { get; set; }

modelBuilder.Entity<ElectricalApplianceProduct>()
    .Property(p => p.Type)
    .HasConversion<string>();
ConfigureMetadata(modelBuilder.Entity<ElectricalApplianceProduct>().Property(e => e.Metadata));
```

Add stable model seed records using IDs `company-seed-electrical-001`, `brand-seed-electrical-001`, and `ea000001-...-000000000301` through `ea000006-...-000000000306`. Use names/type pairs from the approved list, fixed UTC timestamps, nonzero prices/stocks, and `/assets/images/img-ph.jpg` as the initial image URL. Seed the matching Company and Brand with all their required fields.

- [ ] **Step 3: Protect appliance image references**

Extend the `isUsed` expression inside `EntityImageService.DeleteAsync` with:

```csharp
await _storeContext.ElectricalApplianceProducts
    .AnyAsync(x => x.PictureUrl == publicUrl, cancellationToken)
```

- [ ] **Step 4: Generate and inspect the migration**

Run:

```powershell
dotnet ef migrations add AddElectricalApplianceProducts --project Infrastructure/Infrastructure.csproj --startup-project API/API.csproj --context StoreContext --output-dir Data/Migrations
```

Expected: migration creates `ElectricalApplianceProducts`, both indexes and foreign keys, inserts one seed Company, one seed Brand, and six products. Verify `Down` deletes product seeds before Brand/Company seeds and drops the table.

- [ ] **Step 5: Run persistence tests and validate the model**

Run: `dotnet test API.Tests/API.Tests.csproj`

Run: `dotnet ef migrations script --project Infrastructure/Infrastructure.csproj --startup-project API/API.csproj --context StoreContext --idempotent`

Expected: tests pass and SQL generation exits 0 without model-change warnings.

- [ ] **Step 6: Commit persistence**

```powershell
git add Infrastructure/Data/StoreContext.cs Infrastructure/Data/Migrations Infrastructure/Services/EntityImageService.cs API.Tests/EntityImageServiceTests.cs
git commit -m "feat: seed electrical appliance products"
```

### Task 4: Add frontend contracts, API service, and explicit form mappers

**Files:**
- Create: `client/src/app/shared/models/electrical-appliance-product.ts`
- Create: `client/src/app/services/electrical-appliance.service.ts`
- Create: `client/src/app/services/electrical-appliance.service.spec.ts`
- Create: `client/src/app/admin/shared/product-form-mappers.ts`
- Create: `client/src/app/admin/shared/product-form-mappers.spec.ts`
- Modify: `client/src/app/shared/models/entity-image.ts`

**Interfaces:**
- Produces: `ElectricalApplianceService` and TypeScript product contracts.
- Produces: `electricBikeToForm`, `electricBikeCreateDto`, `electricBikeUpdateDto`, `agriculturalMachineToForm`, `agriculturalMachineCreateDto`, `agriculturalMachineUpdateDto`, `electricalApplianceToForm`, `electricalApplianceCreateDto`, and `electricalApplianceUpdateDto`.

- [ ] **Step 1: Write failing service request tests**

```typescript
it('sends type and active filters', () => {
  service.getAll({ type: ElectricalApplianceType.WaterPump, isUsed: true }).subscribe();
  const req = http.expectOne(r => r.url === '/api/electricalApplianceProducts');
  expect(req.request.params.get('type')).toBe('5');
  expect(req.request.params.get('isUsed')).toBe('true');
  req.flush([]);
});

it('sends the explicit update DTO to the id URL', () => {
  const dto = applianceUpdateDto();
  service.update(dto.id, dto).subscribe();
  const req = http.expectOne(`/api/electricalApplianceProducts/${dto.id}`);
  expect(req.request.method).toBe('PUT');
  expect(req.request.body).toEqual(dto);
  req.flush(applianceResponse());
});
```

- [ ] **Step 2: Write mapper regression tests**

```typescript
it('maps an appliance response to an update DTO without read-only fields', () => {
  const form = electricalApplianceToForm(applianceResponse());
  const dto = electricalApplianceUpdateDto('ea-1', form, { warrantyMonths: '12' });

  expect(dto).toEqual(jasmine.objectContaining({
    id: 'ea-1', type: ElectricalApplianceType.WaterPump,
    companyId: 'company-1', brandId: 'brand-1', price: 2500000,
    isUsed: true,
  }));
  expect(dto as any).not.toEqual(jasmine.objectContaining({
    companyName: jasmine.anything(), typeName: jasmine.anything(),
  }));
});

it('normalizes empty optional specifications to null', () => {
  const dto = electricalApplianceCreateDto({
    ...applianceForm(), power: '', voltage: '', capacity: '', compatibility: '',
  }, {});
  expect(dto.power).toBeNull();
  expect(dto.voltage).toBeNull();
  expect(dto.capacity).toBeNull();
  expect(dto.compatibility).toBeNull();
});
```

Repeat the read-only-field assertion for bike and agricultural responses to reproduce and lock down the current edit/mapData bug.

- [ ] **Step 3: Run focused Angular tests**

Run from `client`: `npm test -- --include src/app/services/electrical-appliance.service.spec.ts --include src/app/admin/shared/product-form-mappers.spec.ts`

Expected: FAIL because the files do not exist.

- [ ] **Step 4: Implement model, service, and mappers**

```typescript
export enum ElectricalApplianceType {
  PressureWasher = 1,
  HandTool = 2,
  ConstructionMachine = 3,
  Motor = 4,
  WaterPump = 5,
  Battery = 6,
}

const nullable = (value: string | null | undefined): string | null =>
  value?.trim() ? value.trim() : null;

export function electricalApplianceUpdateDto(
  id: string,
  raw: ElectricalApplianceFormValue,
  metadata: Record<string, string>,
): UpdateElectricalApplianceProduct {
  return { id, ...electricalApplianceCreateDto(raw, metadata) };
}
```

All three create mappers must explicitly enumerate editable keys and coerce `price`/`stockQuantity` with `Number`, relation IDs with `String`, optional specifications with `nullable`, and `isUsed` with `raw.isUsed !== false`.

Add `'ElectricalApplianceProduct'` to the `EntityType` union.

- [ ] **Step 5: Run the focused tests**

Run from `client`: `npm test -- --include src/app/services/electrical-appliance.service.spec.ts --include src/app/admin/shared/product-form-mappers.spec.ts`

Expected: PASS.

- [ ] **Step 6: Commit frontend contracts**

```powershell
git add client/src/app/shared/models/electrical-appliance-product.ts client/src/app/shared/models/entity-image.ts client/src/app/services/electrical-appliance.service.ts client/src/app/services/electrical-appliance.service.spec.ts client/src/app/admin/shared/product-form-mappers.ts client/src/app/admin/shared/product-form-mappers.spec.ts
git commit -m "feat: add appliance client contracts and safe product mappers"
```

### Task 5: Add the appliance Admin page, route, and menu

**Files:**
- Create: `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.ts`
- Create: `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.html`
- Create: `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/admin.routes.ts`
- Modify: `client/src/app/admin/layout/admin-layout.component.ts`

**Interfaces:**
- Consumes: Task 4 service and mapper functions.
- Produces: `/admin/electrical-appliances` and the “Đồ điện dân dụng” Admin menu entry.

- [ ] **Step 1: Write the failing Admin behavior tests**

```typescript
it('applies trimmed search, type, and active status filters', () => {
  const component = bareComponent();
  component.searchDraft.set('  máy bơm  ');
  component.typeDraft.set(ElectricalApplianceType.WaterPump);
  component.statusDraft.set('active');
  spyOn(component, 'loadAll');

  component.applyFilters();

  expect(component.loadAll).toHaveBeenCalledWith({
    search: 'máy bơm', companyId: null, brandId: null,
    type: ElectricalApplianceType.WaterPump, isUsed: true,
  });
});

it('builds a complete update DTO when saving an edit', () => {
  const dto = electricalApplianceUpdateDto('ea-1', applianceForm(), {});
  expect(dto.id).toBe('ea-1');
  expect(dto.companyId).toBe('company-1');
  expect(dto.brandId).toBe('brand-1');
});
```

- [ ] **Step 2: Run the Admin test**

Run from `client`: `npm test -- --include src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`

Expected: FAIL because the Admin component does not exist.

- [ ] **Step 3: Implement Admin state and CRUD behavior**

Mirror the Company page's signals/dialog lifecycle while using `ElectricalApplianceService`. Load rows, companies, and brands with `forkJoin`; use the Task 4 mapper for `open`, `save`, and `toggleActive`; preserve active filters after save/delete/toggle.

```typescript
readonly typeOptions = [
  { value: ElectricalApplianceType.PressureWasher, label: 'Máy rửa xe' },
  { value: ElectricalApplianceType.HandTool, label: 'Dụng cụ cầm tay' },
  { value: ElectricalApplianceType.ConstructionMachine, label: 'Máy xây dựng' },
  { value: ElectricalApplianceType.Motor, label: 'Mô Tơ' },
  { value: ElectricalApplianceType.WaterPump, label: 'Máy Bơm' },
  { value: ElectricalApplianceType.Battery, label: 'Ắc quy các loại' },
];
```

- [ ] **Step 4: Build the Company-style template**

Use an Admin page header, compact summary cards, filter row, image/name/type/stock/status/action columns, empty state, and two dialogs. The Edit dialog groups “Thông tin chính”, “Phân loại & liên kết”, “Thông số”, “Ảnh đại diện”, and “Trạng thái & metadata”. The Detail dialog begins with an image hero and uses `app-admin-detail-list` for the remaining fields.

```html
<div class="admin-detail-hero">
  <img class="admin-detail-hero__image" [src]="v.pictureUrl" appImgFallback alt="" />
  <div class="min-w-0 flex-1">
    <h3 class="truncate text-lg font-bold text-slate-900">{{ v.name }}</h3>
    <p class="text-sm text-slate-500">{{ v.typeName }} · {{ v.model }}</p>
    <mat-chip class="admin-chip" [ngClass]="v.isUsed === false ? 'chip-default' : 'chip-green'">
      {{ v.isUsed === false ? 'Ngừng dùng' : 'Đang hoạt động' }}
    </mat-chip>
  </div>
</div>
```

- [ ] **Step 5: Register route and navigation**

Add lazy route `electrical-appliances` with breadcrumb `Đồ điện dân dụng`, and add `{ path: 'electrical-appliances', label: 'Đồ điện dân dụng', icon: 'electrical_services', group: 'Sản phẩm' }` after agricultural machines.

- [ ] **Step 6: Run test and build**

Run from `client`: `npm test -- --include src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`

Run from `client`: `npm run build`

Expected: PASS and build exits 0.

- [ ] **Step 7: Commit Admin appliance UI**

```powershell
git add client/src/app/admin/electrical-appliances client/src/app/admin/admin.routes.ts client/src/app/admin/layout/admin-layout.component.ts
git commit -m "feat: add electrical appliance admin page"
```

### Task 6: Fix existing product edit mapping and standardize Admin dialogs/toggles

**Files:**
- Modify: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.{ts,html}`
- Create: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.{ts,html}`
- Create: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/brands/brand-admin-page.component.html`
- Modify: `client/src/app/admin/users/user-admin-page.component.html`
- Modify: `client/src/app/admin/media/admin-media-page.component.html`
- Modify: `client/src/styles.scss`

**Interfaces:**
- Consumes: Task 4 bike/agricultural mapper functions.
- Produces: uniform `.admin-compact-toggle`, `.admin-dialog-section`, and `.admin-detail-hero` styling used by all CRUD pages.

- [ ] **Step 1: Add edit regression tests to the existing product page specs**

```typescript
it('uses only editable fields when building the bike update request', () => {
  const form = electricBikeToForm(bikeResponseWithReadOnlyNames());
  const dto = electricBikeUpdateDto('bike-1', form, {});
  expect(Object.keys(dto).sort()).toEqual([
    'batteryCapacity', 'brand', 'brandId', 'category', 'companyId',
    'compatibility', 'description', 'id', 'isUsed', 'metadata', 'model',
    'name', 'pictureUrl', 'power', 'price', 'stockQuantity', 'voltage',
  ].sort());
});
```

Add the equivalent agricultural assertion.

- [ ] **Step 2: Replace inline mapping in both components**

Use `electricBikeToForm`/`electricBikeCreateDto`/`electricBikeUpdateDto` and the agricultural equivalents in `open`, `save`, and `toggleActive`. Toggle must call the update mapper with `{ ...toFormValue(record), isUsed: record.isUsed === false }`, not spread the API response.

- [ ] **Step 3: Standardize Edit and Detail markup**

Apply the same section headings, 12-column responsive layout, image picker column, fixed action row, detail hero, detail list, status chip, and metadata card used by Company and Task 5. Keep each resource's real fields; do not add decorative inputs with no backend property.

- [ ] **Step 4: Add compact toggle tokens and shared dialog CSS**

```scss
.admin-compact-toggle {
  --mdc-switch-track-width: 36px;
  --mdc-switch-track-height: 18px;
  --mdc-switch-handle-width: 14px;
  --mdc-switch-handle-height: 14px;
  --mdc-switch-selected-track-color: #16a34a;
  --mdc-switch-selected-hover-track-color: #15803d;
  --mdc-switch-unselected-track-color: #cbd5e1;
  --mdc-switch-unselected-hover-track-color: #94a3b8;
}

.admin-dialog-section {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  padding: 16px;
}

.admin-detail-hero {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  padding: 16px;
}

.admin-detail-hero__image {
  width: 112px;
  height: 112px;
  flex: 0 0 112px;
  border-radius: 10px;
  object-fit: contain;
  background: #f8fafc;
}
```

Attach `class="admin-compact-toggle"` to every Admin `mat-slide-toggle`; keep the label adjacent and readable.

- [ ] **Step 5: Align Users and Media without changing their behavior**

Wrap their content in the existing `admin-shell`, use `app-admin-page-header`, `admin-card`, matching filter spacing, and the same icon-button sizing. Do not change endpoints, upload behavior, OTP behavior, or user lifecycle actions.

- [ ] **Step 6: Run Admin tests and build**

Run from `client`: `npm test -- --include src/app/admin/**/*.spec.ts`

Run from `client`: `npm run build`

Expected: all selected tests and build pass.

- [ ] **Step 7: Commit Admin standardization**

```powershell
git add client/src/app/admin client/src/styles.scss
git commit -m "fix: standardize admin edit detail and compact toggles"
```

### Task 7: Add image-first Home product showcases with failure isolation

**Files:**
- Create: `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.ts`
- Create: `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.html`
- Create: `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.scss`
- Create: `client/src/app/shared/components/image-product-showcase/image-product-showcase.component.spec.ts`
- Modify: `client/src/app/home/home.component.ts`
- Modify: `client/src/app/home/home.component.html`
- Modify: `client/src/app/home/home.component.scss`
- Create or modify: `client/src/app/home/home.component.spec.ts`

**Interfaces:**
- Consumes: all three public services.
- Produces: image-first Home sections and `ProductKind = 'bike' | 'machine' | 'appliance'` navigation.

- [ ] **Step 1: Write showcase and partial-failure tests**

```typescript
it('renders only active image cards and emits their detail target', () => {
  fixture.componentRef.setInput('items', [activeCard(), inactiveCard()]);
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelectorAll('.image-product-card').length).toBe(1);
});

it('keeps successful Home groups when the appliance request fails', fakeAsync(() => {
  bikeService.getAll.and.returnValue(of([bike()]));
  machineService.getAll.and.returnValue(of([machine()]));
  applianceService.getAll.and.returnValue(throwError(() => new Error('offline')));

  component.ngOnInit();
  tick();

  expect(component.featuredBikes().length).toBe(1);
  expect(component.featuredMachines().length).toBe(1);
  expect(component.featuredAppliances()).toEqual([]);
}));
```

- [ ] **Step 2: Run Home tests**

Run from `client`: `npm test -- --include src/app/shared/components/image-product-showcase/image-product-showcase.component.spec.ts --include src/app/home/home.component.spec.ts`

Expected: FAIL because the showcase and appliance Home state do not exist.

- [ ] **Step 3: Implement the reusable image showcase**

Inputs: `title`, `eyebrow`, `kind`, and `items: ImageShowcaseItem[]`; output: `browseAll`. `ImageShowcaseItem` contains `id`, `name`, `typeName`, `pictureUrl`, and `isUsed`. Filter inactive items in a computed signal and route each card to `/product-detail/:kind/:id`.

```html
<a *ngFor="let item of visibleItems()"
   class="image-product-card"
   [routerLink]="['/product-detail', kind(), item.id]">
  <div class="image-product-card__media">
    <img [src]="item.pictureUrl" appImgFallback [alt]="item.name" />
  </div>
  <div class="image-product-card__copy">
    <span>{{ item.typeName }}</span>
    <h3>{{ item.name }}</h3>
  </div>
</a>
```

Use `aspect-ratio: 4 / 3`, `object-fit: contain`, a white/gray editorial background, a restrained hover lift, a four-column desktop grid, two columns on tablet, and horizontal snap cards on narrow mobile screens.

- [ ] **Step 4: Integrate all three groups into Home with isolated errors**

```typescript
forkJoin({
  companies: this.companyService.getCompanies().pipe(catchError(() => of([]))),
  bikes: this.electricBikeService.getAll({ isUsed: true }).pipe(catchError(() => of([]))),
  machines: this.agriculturalMachineService.getAll({ isUsed: true }).pipe(catchError(() => of([]))),
  appliances: this.electricalApplianceService.getAll({ isUsed: true }).pipe(catchError(() => of([]))),
}).subscribe(({ companies, bikes, machines, appliances }) => {
  this.companies.set(companies);
  this.electricBikes.set(bikes);
  this.agriculturalMachines.set(machines);
  this.electricalAppliances.set(appliances);
});
```

Add `featuredAppliances`, appliance search results, an appliance search option, and three `<app-image-product-showcase>` sections after the current industry sections. Keep only images, type, and short names on the cards.

- [ ] **Step 5: Run Home tests and build**

Run from `client`: `npm test -- --include src/app/shared/components/image-product-showcase/image-product-showcase.component.spec.ts --include src/app/home/home.component.spec.ts`

Run from `client`: `npm run build`

Expected: PASS.

- [ ] **Step 6: Commit Home integration**

```powershell
git add client/src/app/shared/components/image-product-showcase client/src/app/home
git commit -m "feat: show image-first product groups on home"
```

### Task 8: Integrate appliances into Products and Product Detail

**Files:**
- Modify: `client/src/app/products/products.component.ts`
- Modify: `client/src/app/products/products.component.html`
- Modify: `client/src/app/products/products.component.scss`
- Create or modify: `client/src/app/products/products.component.spec.ts`
- Modify: `client/src/app/product-detail/product-detail.component.ts`
- Modify: `client/src/app/product-detail/product-detail.component.html`
- Modify: `client/src/app/product-detail/product-detail.component.scss`
- Create or modify: `client/src/app/product-detail/product-detail.component.spec.ts`

**Interfaces:**
- Consumes: Task 4 service/model.
- Produces: `type=appliance` listing filter and `/product-detail/appliance/:id` detail flow.

- [ ] **Step 1: Write listing and route tests**

```typescript
it('includes active appliances and excludes inactive appliances', () => {
  component.appliances.set([appliance({ isUsed: true }), appliance({ id: 'hidden', isUsed: false })]);
  const applianceIds = component.allProducts()
    .filter(p => p.kind === 'appliance')
    .map(p => p.id);
  expect(applianceIds).toEqual(['ea-1']);
});

it('loads an appliance route with the appliance service', () => {
  routeParamMap.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
  expect(applianceService.getById).toHaveBeenCalledWith('ea-1');
  expect(machineService.getById).not.toHaveBeenCalled();
});

it('marks an unsupported kind as not found without calling a product service', () => {
  routeParamMap.next(convertToParamMap({ kind: 'unknown', id: '1' }));
  expect(component.notFound()).toBeTrue();
  expect(applianceService.getById).not.toHaveBeenCalled();
});
```

- [ ] **Step 2: Run focused catalog tests**

Run from `client`: `npm test -- --include src/app/products/products.component.spec.ts --include src/app/product-detail/product-detail.component.spec.ts`

Expected: FAIL because `appliance` is not supported.

- [ ] **Step 3: Extend Products**

Add `appliance` to `ProductKind`, an appliance signal/service request, and a mapper into `UnifiedProduct` where `category` is `type`, `categoryName` is `typeName`, and chips use power/voltage/capacity. Add the third filter label and type options. Preserve company, brand, price, sorting, URL query synchronization, and active-only filtering.

```typescript
const appliances: UnifiedProduct[] = this.appliances()
  .filter(p => p.isUsed !== false)
  .map(p => ({
    kind: 'appliance', id: p.id, name: p.name, brandName: p.brandName,
    brand: p.brand, model: p.model, category: p.type,
    categoryName: p.typeName, description: p.description, price: p.price,
    stockQuantity: p.stockQuantity, pictureUrl: p.pictureUrl,
    companyId: p.companyId, companyName: p.companyName, brandId: p.brandId,
    createdAt: p.createdAt, chip1: p.power ?? undefined,
    chip2: p.voltage ?? undefined, chip3: p.capacity ?? undefined,
  }));
```

- [ ] **Step 4: Extend Product Detail**

Add `_appliance`, `_allAppliances`, service branches in `_loadProduct` and `_loadSiblings`, appliance-aware gallery colors, highlights, specs, related products, breadcrumb copy, and listing navigation. Clear the other two entity signals before setting the selected kind. Accept only the exact kinds `bike`, `machine`, and `appliance`.

For appliance specs, include Type, Power, Voltage, Capacity, Compatibility, Company, stock, and warranty metadata. Filter inactive sibling records before building related products.

- [ ] **Step 5: Run catalog tests and build**

Run from `client`: `npm test -- --include src/app/products/products.component.spec.ts --include src/app/product-detail/product-detail.component.spec.ts`

Run from `client`: `npm run build`

Expected: PASS.

- [ ] **Step 6: Commit public catalog integration**

```powershell
git add client/src/app/products client/src/app/product-detail
git commit -m "feat: add appliances to catalog and product detail"
```

### Task 9: Full verification and migration smoke check

**Files:**
- Modify only files required to fix failures found by the commands below.

**Interfaces:**
- Consumes: all previous tasks.
- Produces: a verified implementation ready for review.

- [ ] **Step 1: Verify clean formatting and accidental scope**

Run: `git diff --check`

Run: `git status --short`

Expected: no whitespace errors; only intended source, test, migration, and generated snapshot files are changed.

- [ ] **Step 2: Run all backend tests**

Run: `dotnet test skinet.sln`

Expected: PASS with zero failed tests.

- [ ] **Step 3: Run all frontend tests**

Run from `client`: `npm test -- --watch=false --browsers=ChromeHeadless`

Expected: PASS with zero failed specs.

- [ ] **Step 4: Run production builds**

Run: `dotnet build skinet.sln --configuration Release`

Run from `client`: `npm run build`

Expected: both exit 0 without TypeScript or C# errors.

- [ ] **Step 5: Smoke-test the migration against an isolated database**

Use the project's configured development provider with a temporary connection string, apply migrations, and query counts:

```powershell
$env:ConnectionStrings__DefaultConnection = 'Host=localhost;Port=5432;Database=skinet_appliance_smoke;Username=postgres;Password=postgres'
dotnet ef database update --project Infrastructure/Infrastructure.csproj --startup-project API/API.csproj --context StoreContext
```

Expected: migration succeeds and `ElectricalApplianceProducts` contains six seeded rows with six distinct `Type` values. Do not point this command at a production database.

- [ ] **Step 6: Perform browser visual checks**

Check Home at 1440px and 390px widths; `/products?type=appliance`; one appliance detail route; Admin list/Edit/Detail at desktop and narrow width; compact toggle on/off contrast; image fallback; and a failed appliance request with the other Home groups still visible.

- [ ] **Step 7: Commit verification fixes**

```powershell
git add Core Infrastructure API API.Tests client
git commit -m "test: verify appliance catalog and admin UI"
```
