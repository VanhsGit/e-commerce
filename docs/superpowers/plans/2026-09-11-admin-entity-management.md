# Admin Entity Management Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Provide authenticated routed CRUD management for all requested catalog, order, delivery, user, and media entities.

**Architecture:** Explicit resource APIs sit over existing repositories/Identity while Angular uses a shared admin shell and table/form primitives. Catalog resources share presentation structure; Order and User retain bespoke forms and rules.

**Tech Stack:** .NET 10, ASP.NET Core Identity, EF Core 10, AutoMapper, Angular 20 standalone components, ng-zorro, Jasmine/Karma.

**Spec:** `docs/superpowers/specs/2026-09-11-admin-entity-management-design.md`

## Global Constraints

- Every write endpoint requires authentication; every active authenticated user is an admin.
- Delete is soft delete via `IsUsed = false`.
- Admin lists include active and inactive records; storefront lists exclude inactive records.
- HTTP contracts are typed and resource-specific.
- Order and User use bespoke forms.

---

### Task 1: Complete backend CRUD contracts for catalog resources

**Files:**
- Modify: `API/Controllers/CompaniesController.cs`
- Modify: `API/Controllers/BrandsController.cs`
- Modify: `API/Controllers/ElectricBikeProductsController.cs`
- Modify: `API/Controllers/AgriculturalMachineProductsController.cs`
- Create: `API/Controllers/ProductsController.cs`
- Create: `API/Controllers/ProductBrandsController.cs`
- Create: `API/Controllers/ProductTypesController.cs`
- Modify/Create: corresponding DTO files under `API/Dtos`
- Modify: `API/Helpers/MappingProfiles.cs`
- Create: `Core/Specification/ActiveEntitySpecifications.cs`
- Create: `Tests/API.Tests/CatalogCrudTests.cs`

**Interfaces:**
- Produces: authenticated `/api/admin/{resource}` list/detail/create/update/delete routes.
- Produces: public active-only resource reads on existing routes.

- [ ] **Step 1: Write failing API contract tests**

```csharp
[Theory]
[InlineData("/api/admin/products")]
[InlineData("/api/admin/productbrands")]
[InlineData("/api/admin/producttypes")]
public async Task Admin_write_without_token_is_unauthorized(string route)
{
    var response = await _client.PostAsJsonAsync(route, new { });
    response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
}

[Fact]
public async Task Delete_product_marks_it_inactive()
{
    await _authorized.DeleteAsync("/api/admin/products/1");
    (await _db.Products.FindAsync(1))!.IsUsed.Should().BeFalse();
}
```

- [ ] **Step 2: Run and verify tests fail on missing routes/soft deletion**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter CatalogCrudTests`

- [ ] **Step 3: Implement explicit DTOs/controllers and active filters**

All updates load tracked entities, map allowed fields, validate referenced IDs are active, set `UpdatedAt` where present, and call `Complete()` once.

- [ ] **Step 4: Run CRUD tests and build**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter CatalogCrudTests`

Run: `dotnet build skinet.sln`

- [ ] **Step 5: Commit**

```bash
git add API Core Tests/API.Tests
git commit -m "feat: complete catalog admin APIs"
```

### Task 2: Delivery method and order admin APIs

**Files:**
- Create: `API/Controllers/AdminDeliveryMethodsController.cs`
- Create: `API/Controllers/AdminOrdersController.cs`
- Create: `API/Dtos/AdminDeliveryMethodDto.cs`
- Create: `API/Dtos/AdminOrderDto.cs`
- Create: `Core/Specification/AdminOrdersSpecification.cs`
- Modify: `Core/Entities/OrderAggregate/Order.cs`
- Modify: `Infrastructure/Services/OrderService.cs`
- Create: `Tests/API.Tests/AdminOrderCrudTests.cs`

**Interfaces:**
- Produces: `/api/admin/deliverymethods` CRUD.
- Produces: `/api/admin/orders` list/detail/create/update/delete.

- [ ] **Step 1: Write failing order behavior tests**

```csharp
[Fact]
public async Task Update_order_replaces_items_only_when_items_are_supplied()
{
    var originalItems = _order.OrderItems.ToArray();
    await _service.UpdateAsync(_order.Id, new AdminOrderUpdateDto { Status = OrderStatus.PaymentReceived });
    _order.OrderItems.Should().BeEquivalentTo(originalItems);
}

[Fact]
public async Task Inactive_delivery_method_is_not_available_to_checkout()
{
    _delivery.IsUsed = false;
    (await _orderService.GetDeliveryMethods()).Should().NotContain(x => x.Id == _delivery.Id);
}
```

- [ ] **Step 2: Run and verify order tests fail**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter AdminOrderCrudTests`

- [ ] **Step 3: Implement DTO validation, transactional item replacement, and soft delete**

Order create/update validates buyer email, address fields, delivery method, item quantity/price, subtotal, allowed status enum, and optional payment intent. Item replacement occurs inside the StoreContext transaction.

- [ ] **Step 4: Run order tests and full backend build**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter AdminOrderCrudTests`

Run: `dotnet build skinet.sln`

- [ ] **Step 5: Commit**

```bash
git add API Core Infrastructure Tests/API.Tests
git commit -m "feat: add delivery and order administration"
```

### Task 3: Passwordless user administration API

**Files:**
- Create: `API/Controllers/AdminUsersController.cs`
- Create: `API/Dtos/AdminUserDto.cs`
- Modify: `API/Dtos/CreateUserDto.cs`
- Modify: `API/Controllers/AccountController.cs`
- Create: `Tests/API.Tests/AdminUserCrudTests.cs`

**Interfaces:**
- Produces: `/api/admin/users` list/detail/create/update/delete.
- Consumes: `UserManager<AppUser>.CreateAsync(AppUser)` without a password.

- [ ] **Step 1: Write failing passwordless user tests**

```csharp
[Fact]
public async Task Create_user_requires_email_but_not_password()
{
    var response = await _authorized.PostAsJsonAsync("/api/admin/users", new { email = "new@example.com", displayName = "New" });
    response.StatusCode.Should().Be(HttpStatusCode.Created);
    (await _users.FindByEmailAsync("new@example.com"))!.PasswordHash.Should().BeNull();
}

[Fact]
public async Task User_cannot_deactivate_self()
{
    var response = await _authorized.DeleteAsync($"/api/admin/users/{_currentUser.Id}");
    response.StatusCode.Should().Be(HttpStatusCode.Conflict);
}
```

- [ ] **Step 2: Run and verify tests fail**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter AdminUserCrudTests`

- [ ] **Step 3: Implement user DTOs/controller and remove password from creation**

Use Identity normalization/validation, return conflict for duplicate email or self-deactivation, and never return password/security fields.

- [ ] **Step 4: Run user tests and backend build**

Run: `dotnet test Tests/API.Tests/API.Tests.csproj --filter AdminUserCrudTests`

Run: `dotnet build skinet.sln`

- [ ] **Step 5: Commit**

```bash
git add API Tests/API.Tests
git commit -m "feat: add passwordless user administration"
```

### Task 4: Routed Angular admin shell

**Files:**
- Create: `client/src/app/admin/admin.routes.ts`
- Create: `client/src/app/admin/layout/admin-layout.component.ts`
- Create: `client/src/app/admin/layout/admin-layout.component.html`
- Create: `client/src/app/admin/layout/admin-layout.component.scss`
- Create: `client/src/app/admin/layout/admin-layout.component.spec.ts`
- Modify: `client/src/app/admin/admin-dashboard.component.ts`
- Modify: `client/src/app/admin/admin-dashboard.component.html`
- Modify: `client/src/app/app.routes.ts`

**Interfaces:**
- Produces: lazy `/admin` route with child routes and responsive sidebar.

- [ ] **Step 1: Write failing route/nav tests**

```typescript
it('shows every managed resource in navigation', () => {
  const labels = fixture.nativeElement.textContent;
  for (const label of ['Companies', 'Brands', 'Electric Bikes', 'Agricultural Machines', 'Products', 'Product Brands', 'Product Types', 'Orders', 'Delivery Methods', 'Users', 'Media']) {
    expect(labels).toContain(label);
  }
});
```

- [ ] **Step 2: Run and verify shell tests fail**

Run: `npm test -- --include src/app/admin/layout/admin-layout.component.spec.ts`

- [ ] **Step 3: Implement lazy routes, shell, sidebar, outlet, and dashboard summary**

Use standalone Angular components and ng-zorro menu/drawer controls. Keep mobile navigation keyboard accessible.

- [ ] **Step 4: Run shell tests and Angular build**

Run: `npm test -- --include src/app/admin/layout/admin-layout.component.spec.ts`

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add client/src/app/admin client/src/app/app.routes.ts
git commit -m "feat: add routed admin workspace"
```

### Task 5: Shared admin table and catalog CRUD pages

**Files:**
- Create: `client/src/app/admin/shared/admin-table/admin-table.component.ts`
- Create: `client/src/app/admin/shared/admin-table/admin-table.component.html`
- Create: `client/src/app/admin/shared/admin-table/admin-table.component.spec.ts`
- Create: resource folders under `client/src/app/admin/resources/`
- Create/Modify: typed models and services under `client/src/app/shared/models/` and `client/src/app/services/`

**Interfaces:**
- Produces: table events `createRequested`, `editRequested`, `deactivateRequested`, and `reactivateRequested`.
- Produces: pages for seven catalog resources using typed forms.

- [ ] **Step 1: Write failing table and payload tests**

```typescript
it('maps metadata rows and isUsed into the update payload', () => {
  component.form.patchValue({ name: 'Brand', isUsed: false });
  component.metadata.set({ country: 'VN' });
  expect(component.toPayload()).toEqual(jasmine.objectContaining({ isUsed: false, metadata: { country: 'VN' } }));
});
```

- [ ] **Step 2: Run and verify resource tests fail**

Run: `npm test -- --include src/app/admin/resources/**/*.spec.ts`

- [ ] **Step 3: Implement shared table, resource services/pages, typed forms, relationships, metadata, and image manager integration**

Each page handles server validation, loading, empty state, inactive filtering, create/edit, soft delete, reactivation, and images after first save.

- [ ] **Step 4: Run resource tests and build**

Run: `npm test -- --include src/app/admin/resources/**/*.spec.ts`

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add client/src/app
git commit -m "feat: add catalog administration pages"
```

### Task 6: Order, delivery, user, and media pages

**Files:**
- Create: `client/src/app/admin/orders/*`
- Create: `client/src/app/admin/delivery-methods/*`
- Create: `client/src/app/admin/users/*`
- Create: `client/src/app/admin/media/*`
- Modify: `client/src/app/account/account.service.ts`
- Remove: `client/src/app/admin/users/create-user/create-user.component.ts`
- Remove: `client/src/app/admin/users/create-user/create-user.component.html`

**Interfaces:**
- Consumes: admin order, delivery, user, and entity-image APIs.
- Produces: bespoke order/user forms and global media browser.

- [ ] **Step 1: Write failing page tests**

```typescript
it('creates a user without sending a password', () => {
  component.form.setValue({ email: 'admin@example.com', displayName: 'Admin', isUsed: true });
  component.save();
  expect(users.create).toHaveBeenCalledWith({ email: 'admin@example.com', displayName: 'Admin', isUsed: true });
});
```

- [ ] **Step 2: Run and verify tests fail**

Run: `npm test -- --include src/app/admin/{orders,delivery-methods,users,media}/**/*.spec.ts`

- [ ] **Step 3: Implement pages, services, validation, and navigation integration**

Order items use a form array; the media browser filters by entity type/entity ID/image type; user forms contain no password field.

- [ ] **Step 4: Run all Angular tests and build**

Run: `npm test`

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add client/src/app
git commit -m "feat: complete admin entity management"
```

