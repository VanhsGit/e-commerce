# Home Connected Collage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the complete Home page into the approved C1 balanced connected collage while preserving three editable industries and all existing Home behavior.

**Architecture:** Keep `HomePageContent` as the source of truth and preserve the current standalone section components. Add a page-level visual shell for transitions, give each section a focused SCSS file for its collage composition, and retain `galleryLayout` as the switch for the three industry arrangements. No new API schema or product-list flow is introduced.

**Tech Stack:** Angular 20 standalone components, TypeScript 5.8, Angular Material, NG-ZORRO, Tailwind CSS utilities, SCSS, Jasmine/Karma, ASP.NET Core content defaults.

**Spec:** `docs/superpowers/specs/2026-09-29-home-connected-collage-design.md`

## Global Constraints

- Render exactly three Home industries in this order: `bike`, `machine`, `appliance`.
- Do not render product cards or a Home product-list component.
- Hero and industry image URLs must come from editable `HomePageContent`; templates must not hard-code image paths.
- Preserve the existing Home content API shape and version `1`; do not require a content migration.
- Preserve warranty lookup, reset, result, catalogue navigation, `tel:`, and `mailto:` behavior.
- Mobile must use normal document flow for content and must not create page-level horizontal overflow.
- Respect `prefers-reduced-motion` and keep meaningful image alt text data-driven.

## Review Focus

- A long CMS title/description must wrap inside its section without colliding with collage images; the owning component test asserts shrink/wrap classes and normal mobile flow markers.
- An HTTPS image URL supplied by Home content must render unchanged; Hero and industry tests replace configured URLs and assert the resulting `src` values.
- Unsupported or malformed remote Home content must continue to fall back to compiled defaults; the Home integration test retains this case.
- Warranty active, expired, not-found, reset, and navigation events must remain usable after the visual restructure; the warranty component and Home tests exercise these states/events.
- Exactly three industries must render without any product showcase/list even when all product API calls return data; the Home integration test supplies all three groups and asserts the DOM contract.

---

### Task 1: Align editable default content across client and API

**Files:**
- Modify: `client/src/app/home/home-content.model.ts`
- Modify: `client/src/app/home/sections/industry-section/industry-content.ts`
- Modify: `client/src/app/home/sections/industry-section/industry-content.spec.ts`
- Create: `client/src/app/home/home-content.model.spec.ts`
- Modify: `Core/HomeContent/HomePageContentDefaults.cs`
- Modify: `API.Tests/HomePageContentModelTests.cs`

**Interfaces:**
- Consumes: existing `HomePageContent`, `HOME_HERO`, `HOME_GALLERIES`, and `HOME_INDUSTRIES` contracts.
- Produces: version-1 default content whose Hero, commitments, warranty introduction, and CTA consistently describe all three industries; image fields continue to accept local asset paths or HTTPS URLs.

- [ ] **Step 1: Write failing client content tests**

Add tests named `describes all three industries in trust and CTA copy` and `accepts HTTPS image URLs without changing the content shape`. Assert that default commitment/CTA text includes electrical appliances, contains no “hai ngành hàng” wording, and a cloned gallery/hero URL can be set to `https://cdn.example.com/home.jpg` while `isSupportedHomePageContent` remains true.

- [ ] **Step 2: Run the client content tests and verify failure**

Run: `npm test -- --include=src/app/home/home-content.model.spec.ts --include=src/app/home/sections/industry-section/industry-content.spec.ts`

Expected: FAIL on the old two-industry copy.

- [ ] **Step 3: Write the failing API default-content test**

In `HomePageContentModelTests.cs`, add `Defaults_DescribeAllThreeIndustries` asserting the serialized/default commitments and CTA mention electrical appliances and do not claim there are only two industries.

- [ ] **Step 4: Run the API test and verify failure**

Run: `dotnet test API.Tests/API.Tests.csproj --filter HomePageContentModelTests`

Expected: FAIL on existing server-side default copy.

- [ ] **Step 5: Update the version-1 defaults without changing the schema**

Revise the client and server default wording to cover electric bikes, agricultural machinery, and electrical appliances. Keep every existing property name and `version: 1`. Retain gallery and Hero image values as data fields.

- [ ] **Step 6: Run client and API content tests**

Run the commands from Steps 2 and 4.

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add client/src/app/home/home-content.model.ts client/src/app/home/home-content.model.spec.ts client/src/app/home/sections/industry-section/industry-content.ts client/src/app/home/sections/industry-section/industry-content.spec.ts Core/HomeContent/HomePageContentDefaults.cs API.Tests/HomePageContentModelTests.cs
git commit -m "content: align home copy across three industries"
```

### Task 2: Build the connected page shell and Hero collage

**Files:**
- Modify: `client/src/app/home/home.component.html`
- Modify: `client/src/app/home/home.component.scss`
- Modify: `client/src/app/home/home.component.spec.ts`
- Modify: `client/src/app/home/sections/hero-section/hero-section.component.ts`
- Modify: `client/src/app/home/sections/hero-section/hero-section.component.html`
- Create: `client/src/app/home/sections/hero-section/hero-section.component.scss`
- Modify: `client/src/app/home/sections/hero-section/hero-section.component.spec.ts`

**Interfaces:**
- Consumes: `HomeHeroContent`; emits existing `navigate: EventEmitter<string>`.
- Produces: `[data-home-canvas]` page shell, `[data-hero-collage]` Hero, and three `[data-industry-card]` navigation pills using the configured card images and anchors.

- [ ] **Step 1: Write failing shell and Hero contract tests**

Add assertions for:

```ts
expect(element.querySelector('[data-home-canvas]')).not.toBeNull();
expect(element.querySelector('[data-hero-collage]')).not.toBeNull();
expect(element.querySelectorAll('[data-industry-card]').length).toBe(3);
expect(element.querySelector('[data-hero-copy]')?.classList).toContain('min-w-0');
```

Clone `DEFAULT_HOME_PAGE_CONTENT.hero`, replace the first card URL with `https://cdn.example.com/bike.jpg`, and assert the Hero renders that exact `src`. Supply an intentionally long title and assert the copy container includes wrapping/overflow-safe classes.

- [ ] **Step 2: Run focused tests and verify failure**

Run: `npm test -- --include=src/app/home/home.component.spec.ts --include=src/app/home/sections/hero-section/hero-section.component.spec.ts`

Expected: FAIL because the connected shell and Hero collage markers do not exist.

- [ ] **Step 3: Implement the page shell**

Wrap existing section components in semantic transition regions inside `[data-home-canvas]`. Define inherited Home variables (`--home-evergreen`, `--home-canvas`, `--home-bridge`, accent colors, radii, shadows) and page-level overlap/connector behavior in `home.component.scss`. Add a reduced-motion media query and ensure `overflow-x: clip` with a safe fallback.

- [ ] **Step 4: Implement `HeroSectionComponent` collage styling**

Add `styleUrl: './hero-section.component.scss'`. Restructure the template into left editorial copy, dominant image composition, three image-led navigation pills, and the lower transition ornament. Continue to loop over `content.cards`, bind `[src]`, `[alt]`, and call the existing navigation method/event.

- [ ] **Step 5: Run focused tests**

Run the command from Step 2.

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add client/src/app/home/home.component.* client/src/app/home/sections/hero-section
git commit -m "feat: connect home shell and hero collage"
```

### Task 3: Refine the three image-led industry scenes

**Files:**
- Modify: `client/src/app/home/sections/industry-section/industry-section.component.ts`
- Modify: `client/src/app/home/sections/industry-section/industry-section.component.html`
- Create: `client/src/app/home/sections/industry-section/industry-section.component.scss`
- Modify: `client/src/app/home/sections/industry-section/industry-section.component.spec.ts`

**Interfaces:**
- Consumes: `IndustryContent.galleryLayout`, `gallery.main`, `gallery.secondary`, categories, highlights, service, and CTA fields.
- Produces: one `[data-industry-collage]` per section with `data-freestyle-scene` equal to `kinetic`, `field`, or `constellation`; one main image; all configured secondary images; one mobile `[data-secondary-rail]`.

- [ ] **Step 1: Strengthen failing scene tests**

For each layout, assert the scene has `[data-industry-collage]`, a unique layout modifier class, one main image, the configured secondary image count, and a mobile rail. Override a main image with an HTTPS URL and assert it is rendered unchanged. Provide long description/detail strings and assert the content column has `min-w-0` plus a mobile normal-flow marker.

- [ ] **Step 2: Run the industry test and verify failure**

Run: `npm test -- --include=src/app/home/sections/industry-section/industry-section.component.spec.ts`

Expected: FAIL on the new collage and overflow-safe contracts.

- [ ] **Step 3: Simplify the TypeScript layout contract**

Keep `galleryLayout` as the only layout discriminator. Replace oversized utility-string getters with stable semantic modifier classes where practical, while retaining `queryParams`, `listingPath`, and `trackImage` behavior.

- [ ] **Step 4: Implement the balanced collage markup and SCSS**

Create shared typography, chip, benefit, service, and image-frame styles. Implement:

- `kinetic`: copy left, dominant image right, two controlled overlaps;
- `field`: dominant image left, copy right, three staggered secondary images;
- `constellation`: copy left, organic/circular image right, four orbiting images.

At mobile widths, remove rotations that threaten the viewport, stack content, and use the snap-aligned secondary rail.

- [ ] **Step 5: Run the industry and content tests**

Run: `npm test -- --include=src/app/home/sections/industry-section/industry-section.component.spec.ts --include=src/app/home/sections/industry-section/industry-content.spec.ts`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add client/src/app/home/sections/industry-section
git commit -m "feat: refine connected industry collages"
```

### Task 4: Turn warranty into the after-sales bridge

**Files:**
- Modify: `client/src/app/home/sections/warranty-section/warranty-section.component.ts`
- Modify: `client/src/app/home/sections/warranty-section/warranty-section.component.html`
- Create: `client/src/app/home/sections/warranty-section/warranty-section.component.scss`
- Create: `client/src/app/home/sections/warranty-section/warranty-section.component.spec.ts`
- Modify: `client/src/app/home/home.component.spec.ts`

**Interfaces:**
- Consumes: existing `HomeWarrantyContent` and all current lookup inputs.
- Produces: the same output events (`serialChange`, `phoneChange`, `lookup`, `reset`, `lookupKindChange`, `lookupProductIdChange`, `lookupProduct`, `browseAll`) within `[data-warranty-bridge]`.

- [ ] **Step 1: Write the failing warranty behavior tests**

Render the component with default content and assert one `[data-warranty-bridge]`, both lookup modes, and existing result regions. Trigger the lookup/reset/catalogue controls and assert their corresponding outputs emit once. Render active, expired, and not-found results and assert each state remains identifiable by `data-warranty-status`.

- [ ] **Step 2: Run the warranty tests and verify failure**

Run: `npm test -- --include=src/app/home/sections/warranty-section/warranty-section.component.spec.ts`

Expected: FAIL because the bridge/state markers are not present.

- [ ] **Step 3: Implement the unified service panel**

Add `styleUrl: './warranty-section.component.scss'`. Replace the two disconnected cards with one asymmetric bridge panel containing the warranty lookup, quick product lookup, result display, tips, and browse actions. Preserve every binding and emitted value; do not add a new API or content property.

- [ ] **Step 4: Verify Home-level warranty fallback and navigation behavior**

Extend `home.component.spec.ts` to retain the existing malformed-content fallback and exercise `lookupWarranty`, `resetWarranty`, and `lookupProductById` using the router spy.

- [ ] **Step 5: Run warranty and Home tests**

Run: `npm test -- --include=src/app/home/sections/warranty-section/warranty-section.component.spec.ts --include=src/app/home/home.component.spec.ts`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add client/src/app/home/sections/warranty-section client/src/app/home/home.component.spec.ts
git commit -m "feat: redesign home warranty bridge"
```

### Task 5: Connect commitments and CTA into the finale

**Files:**
- Modify: `client/src/app/home/sections/commitments-section/commitments-section.component.ts`
- Modify: `client/src/app/home/sections/commitments-section/commitments-section.component.html`
- Create: `client/src/app/home/sections/commitments-section/commitments-section.component.scss`
- Create: `client/src/app/home/sections/commitments-section/commitments-section.component.spec.ts`
- Modify: `client/src/app/home/sections/cta-section/cta-section.component.ts`
- Modify: `client/src/app/home/sections/cta-section/cta-section.component.html`
- Create: `client/src/app/home/sections/cta-section/cta-section.component.scss`
- Create: `client/src/app/home/sections/cta-section/cta-section.component.spec.ts`

**Interfaces:**
- Consumes: unchanged `HomeCommitmentsContent` and `HomeCtaContent` inputs.
- Produces: four `[data-commitment-seal]` elements in `[data-trust-finale]`, followed by `[data-home-cta]` with usable phone/email links and editable contact details.

- [ ] **Step 1: Write failing commitment and CTA tests**

Assert that all configured commitments render as `[data-commitment-seal]`, each includes its configured icon/title/description, and the container uses the dark finale marker. Assert CTA renders `href="tel:${content.phone}"`, `href="mailto:${content.email}"`, working hours, address, support value, and copy covering all three industries.

- [ ] **Step 2: Run focused tests and verify failure**

Run: `npm test -- --include=src/app/home/sections/commitments-section/commitments-section.component.spec.ts --include=src/app/home/sections/cta-section/cta-section.component.spec.ts`

Expected: FAIL on the new finale/seal contracts.

- [ ] **Step 3: Implement the trust seals**

Add the commitments SCSS file and styleUrl. Replace the white card grid with four data-driven organic seals, alternating vertical offset only at desktop widths and using a two-column grid at small widths.

- [ ] **Step 4: Implement the overlapping CTA**

Add the CTA SCSS file and styleUrl. Create a lime high-contrast CTA panel that overlaps the finale safely, keeps all editable contact content, and preserves semantic links/focus states.

- [ ] **Step 5: Run focused tests**

Run the command from Step 2.

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add client/src/app/home/sections/commitments-section client/src/app/home/sections/cta-section
git commit -m "feat: connect home trust and contact finale"
```

### Task 6: Integrated responsive and regression verification

**Files:**
- Modify if needed: Home files changed in Tasks 1–5
- Test: all Home specifications and existing client/API suites

**Interfaces:**
- Consumes: completed C1 section contracts from Tasks 1–5.
- Produces: a buildable, test-verified Home page with no page-level horizontal overflow at representative widths.

- [ ] **Step 1: Add the final Home integration assertions**

Supply non-empty bike, machine, and appliance API responses, render `HomeComponent`, and assert exactly three `app-home-industry` elements, one connected canvas, one warranty bridge, one finale, and no `app-image-product-showcase` or product-card grid.

- [ ] **Step 2: Run all focused Home tests**

Run: `npm test -- --include=src/app/home/**/*.spec.ts`

Expected: all Home tests PASS.

- [ ] **Step 3: Run the Angular development build**

Run: `node --max_old_space_size=8048 node_modules/@angular/cli/bin/ng.js build --configuration development`

Working directory: `client`

Expected: build exits with code 0.

- [ ] **Step 4: Run API content tests**

Run: `dotnet test API.Tests/API.Tests.csproj --filter "HomePageContentModelTests|HomePageContentValidatorTests|HomeContentControllerTests"`

Expected: selected tests PASS.

- [ ] **Step 5: Perform browser visual QA**

Inspect the Home page at approximately 1440 px, 1024 px, 768 px, and 390 px widths. Verify image crops, readable overlay text, normal mobile flow, keyboard focus, warranty states, reduced-motion behavior, and absence of horizontal page scrolling. Fix only issues within this redesign and rerun the owning focused test plus the build.

- [ ] **Step 6: Run repository status and diff checks**

Run: `git diff --check` and `git status --short`.

Expected: no whitespace errors and only intended implementation changes.

- [ ] **Step 7: Commit final integration fixes**

```bash
git add client/src/app/home Core/HomeContent/HomePageContentDefaults.cs API.Tests/HomePageContentModelTests.cs
git commit -m "feat: deliver connected collage home experience"
```
