# Admin UI Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every current Admin page visually consistent with `/admin/companies`, with simple data tables and spacious, responsive create, edit, and detail dialogs while preserving all existing behavior.

**Architecture:** Put reusable layout, table, action-button, dialog, and responsive rules in `client/src/styles.scss`; keep page templates responsible only for resource-specific content. Migrate the Companies-only SCSS into those shared primitives, then update each Admin template to consume the same classes without changing services, models, routes, or CRUD handlers.

**Tech Stack:** Angular 20 standalone components, Angular Material 20, ng-zorro 20 tables, Tailwind CSS 3, SCSS, Jasmine/Karma with ChromeHeadless.

**Spec:** `docs/superpowers/specs/2026-09-28-admin-ui-consistency-design.md`

## Global Constraints

- Preserve all current business behavior, API contracts, permissions, validation, and data flows.
- Apply the shared page, card, and spacing treatment to every current Admin route.
- Apply CRUD table and dialog changes to Companies, Brands, Electric Bikes, Agricultural Machines, Electrical Appliances, and Users.
- Keep Dashboard and Media content models intact; do not force them into table layouts.
- Do not change backend code, services, models, routes, database schema, authentication, authorization, or CRUD semantics.
- Do not introduce a new design-system package, UI framework, table generator, or form generator.
- Preserve keyboard navigation, Material focus behavior, descriptive tooltips, accessible labels, loading states, empty states, and narrow-viewport dialog reachability.
- Do not modify or commit the user's unrelated Home-page work or visual-review artifacts.

## Review Focus

- At narrow viewport widths, wide tables must scroll horizontally and dialog grids must collapse to one column; Tasks 1, 2, and 3 pin the required responsive classes and Task 5 verifies the rendered routes.
- Long names, descriptions, URLs, identifiers, and metadata must wrap or truncate without expanding dialogs or rows; Tasks 2 and 3 assert the wrapping/truncation classes and Task 5 checks representative long content.
- Resource-specific actions such as user password reset and activation must remain present after visual simplification; Task 4 asserts those controls in the rendered User template.
- Inactive-state behavior must not be converted into a cosmetic-only state; Tasks 2 and 3 retain the existing handlers and focused behavior tests, while changing only presentation.
- Loading and empty states must remain usable on every list page; Tasks 2–4 assert their presence and Task 5 checks them during browser review.

## File Structure

- Create `client/src/app/admin/shared/admin-ui-primitives.spec.ts`: computed-style contract for shared Admin surfaces, spacing, actions, and responsive dialog primitives.
- Modify `client/src/styles.scss`: single source of truth for Admin content gutters, cards, filters, tables, action buttons, dialogs, detail heroes, and responsive behavior.
- Modify `client/src/app/admin/companies/company-admin-page.component.{html,scss}`: consume the shared primitives and retain only Company-specific toggle rules locally.
- Modify `client/src/app/admin/brands/brand-admin-page.component.{html,spec.ts}`: Company-style table actions and sectioned dialogs.
- Modify `client/src/app/admin/resources/admin-entity-page.component.html`: shared table, form, and detail structure for generic entity pages.
- Modify `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.html`: standardized product list, form, and detail layout.
- Modify `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.html`: standardized product list, form, and detail layout.
- Modify `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.{html,spec.ts}`: standardized product list, form, and detail layout.
- Create `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.spec.ts`: rendered layout and preserved filter/empty-state contract.
- Create `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.spec.ts`: rendered layout and preserved filter/empty-state contract.
- Modify `client/src/app/admin/users/user-admin-page.component.html`: standardized table, user form, reset-password form, and detail layout.
- Create `client/src/app/admin/users/user-admin-page.component.spec.ts`: rendered actions, empty state, and dialog-section contract.
- Modify `client/src/app/admin/admin-dashboard.component.html`: shared responsive content gutter and card spacing.
- Modify `client/src/app/admin/media/admin-media-page.component.html`: shared responsive content gutter, card spacing, and actions.

---

### Task 1: Establish shared Admin UI primitives

**Files:**
- Create: `client/src/app/admin/shared/admin-ui-primitives.spec.ts`
- Modify: `client/src/styles.scss`
- Modify: `client/src/app/admin/companies/company-admin-page.component.html`
- Modify: `client/src/app/admin/companies/company-admin-page.component.scss`

**Interfaces:**
- Consumes: existing `.admin-shell`, `.admin-card`, `.admin-toolbar`, `.admin-table`, `.admin-dialog`, `.admin-dialog-section`, and `.admin-detail-hero` conventions.
- Produces: `.admin-page-content`, `.admin-action-btn` variants, standardized table density, 20–24px card/dialog spacing, and responsive dialog/detail rules for Tasks 2–4.

- [ ] **Step 1: Write the failing computed-style contract**

Create a standalone Jasmine host in `admin-ui-primitives.spec.ts` that renders `.admin-page-content`, `.admin-card`, `.admin-action-btn.view`, `.admin-dialog-section`, and `.admin-detail-hero`. Assert that the card has at least `20px` padding, the action button is `34px` square, dialog sections have at least `20px` padding, and the content gutter is larger than the current fixed mobile-only gutter at desktop width.

- [ ] **Step 2: Run the shared-style spec and verify RED**

Run from `client`: `npm test -- --include=src/app/admin/shared/admin-ui-primitives.spec.ts`

Expected: FAIL because `.admin-page-content` and the global action/dialog spacing contract do not yet exist.

- [ ] **Step 3: Implement the shared SCSS primitives**

In `styles.scss`, define responsive page gutters, a consistent card surface, compact table header/body spacing, 34px action buttons with `view`/`edit`/`delete` states, dialog title/content/action padding, 20px section padding, detail-hero layout, safe wrapping, and phone breakpoints that stack heroes and dialog grids. Keep `nz-table` horizontal overflow and Material focus styles intact.

- [ ] **Step 4: Migrate Companies to the shared primitives**

Replace the fixed `m-4` wrapper with `.admin-page-content`, use global `.admin-action-btn` variants, add the shared section structure to its form/detail templates, and remove duplicated action/table styles from `company-admin-page.component.scss`. Retain only Company-specific status-toggle scale rules locally.

- [ ] **Step 5: Run the shared-style spec and Company build check**

Run from `client`: `npm test -- --include=src/app/admin/shared/admin-ui-primitives.spec.ts`

Run from `client`: `npm run build`

Expected: the focused spec passes and the Angular build exits 0.

- [ ] **Step 6: Commit the shared foundation**

```powershell
git add client/src/styles.scss client/src/app/admin/shared/admin-ui-primitives.spec.ts client/src/app/admin/companies/company-admin-page.component.html client/src/app/admin/companies/company-admin-page.component.scss
git commit -m "style: establish shared admin UI primitives"
```

### Task 2: Standardize Company, Brand, and generic entity CRUD presentation

**Files:**
- Modify: `client/src/app/admin/brands/brand-admin-page.component.html`
- Modify: `client/src/app/admin/brands/brand-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/resources/admin-entity-page.component.html`

**Interfaces:**
- Consumes: Task 1 shared classes.
- Produces: the reference list/form/detail pattern that product and user pages follow in Tasks 3 and 4.

- [ ] **Step 1: Add a failing rendered Brand layout test**

Extend `brand-admin-page.component.spec.ts` with a `TestBed` fixture and service/dialog/notification providers. With one active and one inactive row, assert that the rendered page uses `.admin-page-content`, each row exposes consistent `.admin-action-btn` controls, the primary name opens detail, an empty-state component is present when rows become empty, and dialog templates contain `.admin-dialog-section` plus safe wrapping classes for long descriptions and URLs.

- [ ] **Step 2: Run the Brand spec and verify RED**

Run from `client`: `npm test -- --include=src/app/admin/brands/brand-admin-page.component.spec.ts`

Expected: FAIL because the Brand template still uses the older action sizing and unsectioned form layout.

- [ ] **Step 3: Simplify the Brand table and dialogs**

Use the Companies column hierarchy, status presentation, centered 34px action buttons, shared page gutter, sectioned form, dedicated image section, and shared detail hero/list. Preserve search, status filters, visibility toggling, delete behavior, and metadata editing.

- [ ] **Step 4: Align the generic entity page**

Apply the same page gutter, table/action classes, form sections, detail sections, wrapping utilities, and responsive grids to `admin-entity-page.component.html`. Do not change its dynamic field iteration, value conversion, CRUD methods, or configuration interface.

- [ ] **Step 5: Run the Brand spec and build**

Run from `client`: `npm test -- --include=src/app/admin/brands/brand-admin-page.component.spec.ts`

Run from `client`: `npm run build`

Expected: focused tests pass and build exits 0.

- [ ] **Step 6: Commit reference CRUD pages**

```powershell
git add client/src/app/admin/brands/brand-admin-page.component.html client/src/app/admin/brands/brand-admin-page.component.spec.ts client/src/app/admin/resources/admin-entity-page.component.html
git commit -m "style: align brand and generic admin CRUD pages"
```

### Task 3: Standardize product Admin tables and dialogs

**Files:**
- Modify: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.html`
- Create: `client/src/app/admin/electric-bikes/electric-bike-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.html`
- Create: `client/src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.html`
- Modify: `client/src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`

**Interfaces:**
- Consumes: Task 1 shared primitives and Task 2 CRUD hierarchy.
- Produces: one consistent product-management layout across all three product families without changing form mappers or service calls.

- [ ] **Step 1: Write failing rendered-layout tests for all three product pages**

Create TestBed fixtures with service dependencies returning `of([])`. For each page, assert `.admin-page-content`, `.admin-table`, compact action controls, `app-admin-empty-state`, sectioned form markup, a dedicated representative-image section, a status/metadata section, `.admin-detail-hero`, and responsive detail-list usage. Retain the existing electrical-appliance filter test.

- [ ] **Step 2: Run the three product specs and verify RED**

Run from `client`: `npm test -- --include=src/app/admin/electric-bikes/electric-bike-admin-page.component.spec.ts --include=src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.spec.ts --include=src/app/admin/electrical-appliances/electrical-appliance-admin-page.component.spec.ts`

Expected: FAIL on the old table action classes, fixed page gutter, or inconsistent dialog structure.

- [ ] **Step 3: Standardize the three list tables**

Apply the Companies density and action layout to each table. Keep product image, name/supporting model, price, stock, and status scannable; preserve all resource-specific filters, summary inventory signals, pagination, horizontal scrolling, toggles, and delete operations.

- [ ] **Step 4: Standardize the three create/edit dialogs**

Use consistent sections for primary information, classification/relationships, technical specifications, image, and status/metadata. Give dialog content generous shared padding and responsive 12-column grids without renaming controls or changing validators/defaults.

- [ ] **Step 5: Standardize the three detail dialogs**

Use the shared image hero, grouped `app-admin-detail-list` sections, status/stock chips, safe description wrapping, and optional metadata section. Preserve every currently displayed resource-specific field.

- [ ] **Step 6: Run the product specs and build**

Run the focused command from Step 2, then run from `client`: `npm run build`

Expected: all focused specs pass and build exits 0.

- [ ] **Step 7: Commit product Admin consistency**

```powershell
git add client/src/app/admin/electric-bikes client/src/app/admin/agricultural-machines client/src/app/admin/electrical-appliances
git commit -m "style: standardize product admin tables and dialogs"
```

### Task 4: Align Users, Dashboard, and Media

**Files:**
- Modify: `client/src/app/admin/users/user-admin-page.component.html`
- Create: `client/src/app/admin/users/user-admin-page.component.spec.ts`
- Modify: `client/src/app/admin/admin-dashboard.component.html`
- Modify: `client/src/app/admin/media/admin-media-page.component.html`

**Interfaces:**
- Consumes: Task 1 shared primitives and Task 2 table/dialog hierarchy.
- Produces: consistent Admin shell spacing across all routed pages while retaining user-specific and media-specific workflows.

- [ ] **Step 1: Write the failing User rendered-layout test**

Create a User fixture with HTTP/dialog/notification/confirmation dependencies stubbed at their boundaries. Assert the page gutter, table/action classes, empty state, user form sections, reset-password dialog section, detail hero/list, and presence of view, edit, activation/deactivation, password-reset, and delete controls for the relevant record states.

- [ ] **Step 2: Run the User spec and verify RED**

Run from `client`: `npm test -- --include=src/app/admin/users/user-admin-page.component.spec.ts`

Expected: FAIL because the current User form, reset-password form, or table actions do not use the shared structure.

- [ ] **Step 3: Standardize the User page**

Apply the simple table hierarchy and shared action sizing, then group create/edit, password reset, and detail content into spacious responsive sections. Preserve role management, account status logic, password reset behavior, validation, and all existing handlers.

- [ ] **Step 4: Align Dashboard and Media spacing**

Replace fixed page margins/padding with `.admin-page-content` and shared card surfaces where appropriate. Keep dashboard metrics, shortcuts, media upload/select/delete behavior, OTP requirements, and tile layout unchanged.

- [ ] **Step 5: Run the User spec and build**

Run from `client`: `npm test -- --include=src/app/admin/users/user-admin-page.component.spec.ts`

Run from `client`: `npm run build`

Expected: focused spec passes and build exits 0.

- [ ] **Step 6: Commit remaining routed pages**

```powershell
git add client/src/app/admin/users client/src/app/admin/admin-dashboard.component.html client/src/app/admin/media/admin-media-page.component.html
git commit -m "style: align remaining admin page layouts"
```

### Task 5: Full verification and visual QA

**Files:**
- Modify only files from Tasks 1–4 when verification exposes an issue.

**Interfaces:**
- Consumes: all previous tasks.
- Produces: a verified, buildable Admin UI ready for review.

- [ ] **Step 1: Check whitespace and accidental scope**

Run: `git diff --check`

Run: `git status --short`

Expected: no whitespace errors; unrelated Home files and visual-review artifacts are still untouched and are not staged by this work.

- [ ] **Step 2: Run all frontend tests**

Run from `client`: `npm test`

Expected: zero failed specs. Report any pre-existing failure by exact spec name rather than omitting it.

- [ ] **Step 3: Run the Angular development build**

Run from `client`: `npm run build`

Expected: exit 0 without Angular template, TypeScript, or SCSS errors.

- [ ] **Step 4: Perform desktop visual checks**

At approximately 1440px viewport width, inspect every current Admin route. On each CRUD route, open create/edit and detail dialogs; verify simple table density, consistent action alignment, 20–24px card/dialog spacing, dialog scrolling, long-text handling, and preservation of resource-specific actions.

- [ ] **Step 5: Perform narrow-screen visual checks**

At approximately 390px viewport width, inspect the same routes. Verify responsive page gutters, wrapped filters, horizontal table scrolling, one-column form/detail layouts, stacked detail heroes, reachable dialog actions, and no clipped text or controls.

- [ ] **Step 6: Re-run focused checks after visual fixes**

For any visual fix, first add or tighten the nearest focused spec so it fails for that regression, then apply the minimal markup/SCSS correction and rerun that spec plus `npm run build`.

- [ ] **Step 7: Commit verification fixes if needed**

```powershell
git add client/src/styles.scss client/src/app/admin
git commit -m "test: verify consistent admin UI"
```
