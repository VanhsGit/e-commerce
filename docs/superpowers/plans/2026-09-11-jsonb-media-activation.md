# JSONB Metadata, Activation, and Entity Media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize metadata as JSONB string pairs, add `IsUsed = true` to persisted models, and provide secure local entity-image upload/storage.

**Architecture:** Domain defaults live in Core, PostgreSQL persistence rules live in Infrastructure, and file persistence is hidden behind `IEntityImageStorage`. An explicit media API validates the polymorphic parent before coordinating disk and database writes.

**Tech Stack:** .NET 10, EF Core 10, Npgsql/PostgreSQL, ASP.NET Core multipart uploads, xUnit, Angular 20.

**Spec:** `docs/superpowers/specs/2026-09-11-jsonb-media-activation-design.md`

## Global Constraints

- Metadata values are strings and PostgreSQL columns remain `jsonb`.
- Every persisted model defaults `IsUsed` to `true`.
- Uploads allow JPEG, PNG, WebP, and GIF up to a configurable 10 MiB default.
- File paths must remain beneath the configured media root.
- Parent soft deletion does not delete image files.

---

### Task 1: Domain defaults and metadata contract

**Files:**
- Modify: `Core/Entities/BaseEntity.cs`
- Modify: `Core/Entities/Brand.cs`
- Modify: `Core/Entities/Company.cs`
- Modify: `Core/Entities/ElectricBikeProduct.cs`
- Modify: `Core/Entities/AgriculturalMachineProduct.cs`
- Modify: `Core/Entities/CustomerBasket.cs`
- Modify: `Core/Entities/BasketItem.cs`
- Modify: `Core/Entities/Identity/AppUser.cs`
- Modify: `Core/Entities/Identity/Address.cs`
- Modify: `Core/Entities/OrderAggregate/Address.cs`
- Modify: `Core/Entities/OrderAggregate/ProductItemOrdered.cs`
- Modify: `API/Dtos/BrandDto.cs`
- Modify: `API/Dtos/CompanyDto.cs`
- Modify: `API/Dtos/ElectricBikeProductDto.cs`
- Modify: `API/Dtos/AgriculturalMachineProductDto.cs`
- Create: `Tests/Core.Tests/EntityDefaultsTests.cs`
- Create: `Tests/Core.Tests/Core.Tests.csproj`
- Modify: `skinet.sln`

**Interfaces:**
- Produces: `bool IsUsed { get; set; } = true` on persisted models.
- Produces: `Dictionary<string,string> Metadata` on metadata-bearing models and DTOs.

- [ ] **Step 1: Add a failing domain-default test**

```csharp
[Theory]
[MemberData(nameof(PersistedModels))]
public void New_persisted_model_is_used(object model)
{
    model.GetType().GetProperty("IsUsed")!.GetValue(model).Should().Be(true);
}

[Fact]
public void Metadata_values_are_strings()
{
    new Brand().Metadata.Should().BeAssignableTo<Dictionary<string, string>>();
    new Company().Metadata.Should().BeEmpty();
}
```

- [ ] **Step 2: Run the test and verify the missing properties/types fail**

Run: `dotnet test Tests/Core.Tests/Core.Tests.csproj --filter EntityDefaultsTests`

Expected: compilation or assertion failure because the new contract is absent.

- [ ] **Step 3: Add the minimal properties and DTO type changes**

```csharp
public abstract class BaseEntity
{
    public int Id { get; set; }
    public bool IsUsed { get; set; } = true;
}

public Dictionary<string, string> Metadata { get; set; } = new();
```

Add the explicit `IsUsed` property to persisted models that do not inherit `BaseEntity`.

- [ ] **Step 4: Run the domain tests**

Run: `dotnet test Tests/Core.Tests/Core.Tests.csproj --filter EntityDefaultsTests`

Expected: all `EntityDefaultsTests` pass.

- [ ] **Step 5: Commit**

```bash
git add Core API/Dtos Tests/Core.Tests skinet.sln
git commit -m "feat: standardize metadata and entity activation"
```

### Task 2: EF Core JSONB configuration and migration

**Files:**
- Create: `Infrastructure/Data/Config/JsonbMetadataConfiguration.cs`
- Modify: `Infrastructure/Data/StoreContext.cs`
- Create: `Infrastructure/Data/Migrations/20260911100000_StandardizeMetadataAndActivation.cs`
- Create: `Infrastructure/Data/Migrations/20260911100000_StandardizeMetadataAndActivation.Designer.cs`
- Modify: `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`
- Create: `Infrastructure/Identity/Migrations/20260911100500_AddUserActivation.cs`
- Modify: `Infrastructure/Identity/Migrations/AppIdentityDbContextModelSnapshot.cs`
- Create: `Tests/Infrastructure.Tests/JsonbMetadataConfigurationTests.cs`
- Create: `Tests/Infrastructure.Tests/Infrastructure.Tests.csproj`
- Modify: `skinet.sln`

**Interfaces:**
- Consumes: `Dictionary<string,string>` metadata and `IsUsed` domain properties.
- Produces: `JsonbMetadataConfiguration.Configure<TEntity>()` shared mapping.

- [ ] **Step 1: Write failing EF model tests**

```csharp
[Fact]
public void Metadata_uses_jsonb_and_value_comparer()
{
    var property = CreateContext().Model.FindEntityType(typeof(Brand))!
        .FindProperty(nameof(Brand.Metadata))!;
    property.GetColumnType().Should().Be("jsonb");
    property.GetValueComparer().Should().NotBeNull();
}

[Fact]
public void Is_used_has_database_default_true()
{
    var property = CreateContext().Model.FindEntityType(typeof(Product))!
        .FindProperty(nameof(Product.IsUsed))!;
    property.GetDefaultValue().Should().Be(true);
}
```

- [ ] **Step 2: Run and verify the EF tests fail for the missing comparer/default**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter JsonbMetadataConfigurationTests`

Expected: tests fail on comparer/default assertions.

- [ ] **Step 3: Implement shared JSONB mapping and Boolean defaults**

```csharp
var comparer = new ValueComparer<Dictionary<string, string>>(
    (left, right) => left!.OrderBy(x => x.Key).SequenceEqual(right!.OrderBy(x => x.Key)),
    value => value.OrderBy(x => x.Key).Aggregate(0, (hash, pair) => HashCode.Combine(hash, pair.Key, pair.Value)),
    value => value.ToDictionary(pair => pair.Key, pair => pair.Value));

builder.Property(metadataExpression)
    .HasColumnType("jsonb")
    .HasConversion(value => JsonSerializer.Serialize(value, options), value => Deserialize(value))
    .Metadata.SetValueComparer(comparer);
```

Configure all mapped `IsUsed` properties with `.HasDefaultValue(true)`.

- [ ] **Step 4: Generate and inspect both migrations**

Run: `dotnet ef migrations add StandardizeMetadataAndActivation --project Infrastructure --startup-project API --context StoreContext`

Run: `dotnet ef migrations add AddUserActivation --project Infrastructure --startup-project API --context AppIdentityDbContext --output-dir Identity/Migrations`

Expected: Store migration adds activation columns and safely rewrites JSONB scalar values to strings; Identity migration adds `IsUsed DEFAULT TRUE`.

- [ ] **Step 5: Run EF tests and build**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter JsonbMetadataConfigurationTests`

Run: `dotnet build skinet.sln`

Expected: both commands exit successfully.

- [ ] **Step 6: Commit**

```bash
git add Infrastructure Tests/Infrastructure.Tests skinet.sln
git commit -m "feat: persist metadata and activation defaults"
```

### Task 3: Entity-image domain and local storage

**Files:**
- Create: `Core/Entities/EntityImage.cs`
- Create: `Core/Entities/EntityType.cs`
- Create: `Core/Interfaces/IEntityImageStorage.cs`
- Create: `Infrastructure/Services/LocalEntityImageStorage.cs`
- Create: `Infrastructure/Services/MediaStorageOptions.cs`
- Create: `Tests/Infrastructure.Tests/LocalEntityImageStorageTests.cs`

**Interfaces:**
- Produces: `Task<StoredImageFile> SaveAsync(Stream content, string fileName, string contentType, EntityType entityType, CancellationToken cancellationToken)`.
- Produces: `Task DeleteAsync(string relativePath, CancellationToken cancellationToken)`.

- [ ] **Step 1: Write failing storage tests**

```csharp
[Fact]
public async Task Save_writes_beneath_root_with_generated_name()
{
    var stored = await _storage.SaveAsync(StreamOf("image"), "../../bad.png", "image/png", EntityType.Product, default);
    Path.GetFullPath(Path.Combine(_root, stored.RelativePath)).Should().StartWith(_root);
    File.Exists(Path.Combine(_root, stored.RelativePath)).Should().BeTrue();
    stored.RelativePath.Should().NotContain("bad.png");
}

[Fact]
public async Task Delete_rejects_path_outside_root()
{
    var action = () => _storage.DeleteAsync("../outside.png", default);
    await action.Should().ThrowAsync<InvalidOperationException>();
}
```

- [ ] **Step 2: Run and verify tests fail because storage is absent**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter LocalEntityImageStorageTests`

- [ ] **Step 3: Implement entity model, options, path confinement, save, and delete**

```csharp
var generatedName = $"{Guid.NewGuid():N}{extension}";
var relativePath = Path.Combine(entityType.ToString().ToLowerInvariant(), generatedName);
var fullPath = EnsureUnderRoot(relativePath);
Directory.CreateDirectory(Path.GetDirectoryName(fullPath)!);
await using var output = File.Create(fullPath);
await content.CopyToAsync(output, cancellationToken);
```

- [ ] **Step 4: Run storage tests**

Run: `dotnet test Tests/Infrastructure.Tests/Infrastructure.Tests.csproj --filter LocalEntityImageStorageTests`

Expected: path, save, and delete tests pass.

- [ ] **Step 5: Commit**

```bash
git add Core/Entities Core/Interfaces Infrastructure/Services Tests/Infrastructure.Tests
git commit -m "feat: add local entity image storage"
```

### Task 4: Entity-image persistence and authenticated API

**Files:**
- Create: `Infrastructure/Data/Config/EntityImageConfiguration.cs`
- Modify: `Infrastructure/Data/StoreContext.cs`
- Create: `Core/Interfaces/IEntityImageService.cs`
- Create: `Infrastructure/Services/EntityImageService.cs`
- Create: `API/Dtos/EntityImageDto.cs`
- Create: `API/Controllers/EntityImagesController.cs`
- Modify: `API/Extensions/ApplicationServicesExtensions.cs`
- Modify: `API/Startup.cs`
- Modify: `API/appsettings.Development.json`
- Create: `Infrastructure/Data/Migrations/20260911101000_AddEntityImages.cs`
- Modify: `Infrastructure/Data/Migrations/StoreContextModelSnapshot.cs`
- Create: `Tests/API.Tests/EntityImageServiceTests.cs`
- Create: `Tests/API.Tests/API.Tests.csproj`
- Modify: `skinet.sln`

**Interfaces:**
- Produces: `POST /api/entityimages/{entityType}/{entityId}` multipart field `file` plus `imageType` and `sortOrder`.
- Produces: `GET /api/entityimages/{entityType}/{entityId}`.
- Produces: `PUT /api/entityimages/{id}` and `DELETE /api/entityimages/{id}`.

- [ ] **Step 1: Write failing service tests for parent validation and cleanup**

```csharp
[Fact]
public async Task Upload_deletes_written_file_when_database_save_fails()
{
    _parents.ExistsAsync(EntityType.Product, "42", default).Returns(true);
    _unitOfWork.Complete().Returns(Task.FromResult(0));
    await Assert.ThrowsAsync<InvalidOperationException>(() => _service.UploadAsync(Request(), default));
    await _storage.Received().DeleteAsync(Arg.Any<string>(), default);
}
```

- [ ] **Step 2: Run and verify the service tests fail**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter EntityImageServiceTests`

- [ ] **Step 3: Implement parent resolver, service, DTOs, controller, DI, and static-file mapping**

Controller upload validates file length, configured maximum, extension, and content type before calling the service. The service persists `EntityImage` and cleans disk on failed commit.

- [ ] **Step 4: Generate migration and run tests/build**

Run: `dotnet ef migrations add AddEntityImages --project Infrastructure --startup-project API --context StoreContext`

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter EntityImageServiceTests`

Run: `dotnet build skinet.sln`

Expected: tests and build succeed.

- [ ] **Step 5: Commit**

```bash
git add Core Infrastructure API Tests/API.Tests skinet.sln
git commit -m "feat: expose entity image management API"
```

### Task 5: Angular metadata and image primitives

**Files:**
- Modify: `client/src/app/shared/models/brand.ts`
- Modify: `client/src/app/shared/models/company.ts`
- Modify: `client/src/app/shared/models/electricBikeProduct.ts`
- Modify: `client/src/app/shared/models/agriculturalMachineProduct.ts`
- Create: `client/src/app/shared/models/entity-image.ts`
- Create: `client/src/app/services/entity-image.service.ts`
- Create: `client/src/app/admin/shared/metadata-editor/metadata-editor.component.ts`
- Create: `client/src/app/admin/shared/metadata-editor/metadata-editor.component.html`
- Create: `client/src/app/admin/shared/metadata-editor/metadata-editor.component.spec.ts`
- Create: `client/src/app/admin/shared/entity-image-manager/entity-image-manager.component.ts`
- Create: `client/src/app/admin/shared/entity-image-manager/entity-image-manager.component.html`
- Create: `client/src/app/admin/shared/entity-image-manager/entity-image-manager.component.spec.ts`

**Interfaces:**
- Produces: `Metadata = Record<string,string>`.
- Produces: `EntityImageService.upload(entityType, entityId, imageType, sortOrder, file)`.
- Produces: standalone `MetadataEditorComponent` and `EntityImageManagerComponent`.

- [ ] **Step 1: Write failing component tests**

```typescript
it('emits a string record for valid unique rows', () => {
  component.rows.set([{ key: 'voltage', value: '48V' }]);
  component.commit();
  expect(emitted).toEqual({ voltage: '48V' });
});

it('uploads multipart data and refreshes the gallery', () => {
  component.file.set(new File(['x'], 'x.png', { type: 'image/png' }));
  component.upload();
  expect(imageService.upload).toHaveBeenCalled();
});
```

- [ ] **Step 2: Run and verify component tests fail**

Run: `npm test -- --include src/app/admin/shared/**/*.spec.ts`

- [ ] **Step 3: Implement typed models, service, and standalone components**

The metadata editor rejects blank/duplicate keys. The image manager uses `FormData`, displays upload progress, previews active images, and confirms deletion.

- [ ] **Step 4: Run tests and Angular build**

Run: `npm test -- --include src/app/admin/shared/**/*.spec.ts`

Run: `npm run build`

Expected: tests and build succeed.

- [ ] **Step 5: Commit**

```bash
git add client/src/app
git commit -m "feat: add metadata and media admin controls"
```
