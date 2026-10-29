# Product Detail Image Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the product-detail image area wider, hover-zoomable on desktop, and viewable in a full-screen lightbox.

**Architecture:** Keep image selection in `ProductDetailComponent`. Add presentation state for hover position and lightbox visibility, bind it in the existing gallery template, and scope visual behavior to the component SCSS so shared product-card image rules remain unchanged.

**Tech Stack:** Angular 20 standalone component, signals, Angular template control flow, SCSS, Jasmine/Karma.

**Spec:** `docs/superpowers/specs/2026-10-29-product-detail-image-viewer-design.md`

## Global Constraints

- Do not add dependencies or change product APIs/gallery selection semantics.
- Preserve `object-fit: contain` over a black background for the main image and lightbox image.
- Zoom is limited to hover-capable fine-pointer devices.

## Review Focus

- Empty galleries must not open an invalid lightbox; test the open guard.
- Switching product route or colour must clear the lightbox and zoom state; test reset behavior.
- Escape must close the full-screen viewer without affecting the selected thumbnail; test the close method/state.
- The black canvas must preserve full portrait and landscape images; verify in component styles.
- Keyboard users must be able to open and close the viewer; verify the image trigger and close control in the template.

---

### Task 1: Image viewer state and behavior

**Files:**
- Modify: `client/src/app/product-detail/product-detail.component.ts`
- Test: `client/src/app/product-detail/product-detail.component.spec.ts`

**Interfaces:**
- Produces: `imageViewerOpen(): boolean`, `imageZoomed(): boolean`, `imageZoomPosition(): { x: number; y: number }`, `openImageViewer()`, `closeImageViewer()`, `beginImageZoom()`, `moveImageZoom(event: PointerEvent)`, and `endImageZoom()` for the template.

- [ ] **Step 1: Write failing state tests**

Add Jasmine assertions that opening requires an active image, closing clears lightbox and zoom state, and pointer movement stores a clamped percentage position.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- --include='src/app/product-detail/product-detail.component.spec.ts'`
Expected: FAIL because the viewer methods and signals do not exist.

- [ ] **Step 3: Add minimal signal-backed viewer and zoom behavior**

Implement the interfaces above; clear transient viewer/zoom state when product data reloads or the selected colour changes.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `npm test -- --include='src/app/product-detail/product-detail.component.spec.ts'`
Expected: PASS.

### Task 2: Responsive zoom and full-screen viewer presentation

**Files:**
- Modify: `client/src/app/product-detail/product-detail.component.html:106-149`
- Modify: `client/src/app/product-detail/product-detail.component.scss`
- Test: `client/src/app/product-detail/product-detail.component.spec.ts`

**Interfaces:**
- Consumes: viewer and zoom signals/methods from Task 1.
- Produces: an accessible main-image trigger, conditional lightbox dialog, and scoped CSS classes for image zoom/canvas.

- [ ] **Step 1: Write failing template-oriented assertions**

Add test coverage for viewer state methods and retain the existing selected-image behavior; inspect the compiled template/build for accessible bindings.

- [ ] **Step 2: Apply template and SCSS changes**

Widen the desktop gallery grid, use a 4:3 black `object-contain` canvas, bind pointer events and custom origin properties to the main image trigger, and render a backdrop-dismissible Escape-closeable lightbox.

- [ ] **Step 3: Run targeted tests and a production build**

Run: `npm test -- --include='src/app/product-detail/product-detail.component.spec.ts'`
Expected: PASS.

Run: `npm run build:prod`
Expected: Angular production build completes successfully.
