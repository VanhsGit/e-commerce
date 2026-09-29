# Home Connected Collage Redesign

Date: 2026-09-29

Status: Approved visual direction, pending implementation plan

## 1. Objective

Redesign the complete Home page as one connected visual journey instead of a stack of unrelated sections. The approved direction is **C1 — Balanced Connected Collage**: image-led, asymmetrical, and editorial, while retaining clear reading order and business credibility.

The page continues to present exactly three industries:

1. Electric bikes
2. Agricultural machinery
3. Electrical appliances

All Home copy and image URLs must remain editable through the existing centralized Home content model and content service. The redesign must not reintroduce product-list grids on Home.

## 2. Design principles

### 2.1 One continuous canvas

The page background transitions through a deliberate sequence:

- dark evergreen Hero;
- warm off-white industry journey;
- pale green after-sales bridge;
- dark evergreen commitments and CTA finale.

Transitions overlap by a small amount so section boundaries do not read as separate cards. Repeated organic circles, asymmetric corner radii, soft shadows, and a shared accent palette connect the sections.

### 2.2 Controlled collage

Images may overlap, rotate slightly, or break the normal content column, but text remains on a stable grid. Desktop layouts can use absolute positioning inside bounded scene containers. Mobile layouts must return to a predictable vertical flow and horizontal image rail where appropriate.

### 2.3 Images lead the hierarchy

Each industry includes:

- one dominant image;
- multiple supporting images from `gallery.secondary`;
- short editorial copy;
- compact benefit/category information;
- one clear catalogue action.

The current full product listing remains excluded from Home.

## 3. Page composition

### 3.1 Home page shell

`home.component.html` wraps the sections in a page-level visual shell. The shell owns shared background transitions, decorative connectors, section overlap, and global spacing. Individual sections continue to own their content and interactions.

`home.component.scss` defines reusable Home-only design tokens with CSS custom properties:

- evergreen and slate surfaces;
- warm canvas and pale green bridge colors;
- sky, amber, and emerald industry accents;
- shared organic radii, shadow levels, and section spacing.

The shell must not change the order of the existing functional sections:

1. Hero
2. Electric bikes
3. Agricultural machinery
4. Electrical appliances
5. Warranty
6. Commitments
7. CTA

### 3.2 Hero

The Hero becomes the opening collage rather than a self-contained rectangular panel.

- Left: eyebrow, strong three-line value proposition, supporting copy, and primary action.
- Right: one dominant organic image composition representing the three industries, supplemented by small industry navigation pills.
- Bottom edge: decorative shape and spacing transition directly into the first industry section.
- Existing `navigate` events and smooth scrolling remain unchanged.

The Hero must render all three industries and use image URLs supplied by `HOME_HERO.cards`; it must not hard-code asset paths in the template.

### 3.3 Industry journey

The three industry sections share typography, spacing, and image treatment but keep different desktop compositions:

- **Electric bikes / kinetic:** copy on the left, dominant image on the right, secondary images overlapping the lower-left and lower-right edges.
- **Agricultural machinery / field:** dominant image on the left, copy on the right, secondary images forming a staggered field strip.
- **Electrical appliances / constellation:** copy on the left, a circular or organic dominant image on the right, supporting images orbiting the main image.

A subtle shared connector runs through the three scenes. It is decorative only and must be hidden from assistive technology.

The existing `galleryLayout` values remain the layout switch:

- `kinetic`
- `field`
- `constellation`

No new product data fetching or product cards are introduced.

### 3.4 Warranty bridge

The warranty section visually bridges the light industry canvas and the dark trust finale.

- Use one large asymmetrical service panel instead of two unrelated boxed panels.
- Keep warranty lookup and quick product lookup behavior intact.
- Preserve validation, result states, reset action, and navigation behavior.
- Group secondary links into a compact service rail.
- Do not add unsupported backend behavior. Electrical appliances can appear in general Home messaging, but warranty lookup continues to use the product kinds supported by the current lookup implementation unless the existing application flow already supports appliances end-to-end.

### 3.5 Commitments

Replace the conventional four-card grid with four connected trust seals or soft organic badges on a dark evergreen surface.

- Alternate vertical offsets on desktop to keep the collage rhythm.
- Use a two-column grid on small screens.
- Keep icon, title, description, and accent data-driven.
- Update default copy so it explicitly applies to all three industries rather than “two industries.”

### 3.6 CTA finale

The CTA sits partially over the bottom of the commitments area as the final collage element.

- Use a lime/green high-contrast asymmetrical panel.
- Keep phone, email, working hours, address, and support content data-driven.
- Update the description to include advice for electric bikes, agricultural machinery, and electrical appliances.
- Preserve usable `tel:` and `mailto:` actions.

## 4. Content architecture

The existing `HomePageContent` response remains the source of truth. Editable data continues to flow as follows:

`HomeContentService` → `HomeComponent.homeContent` signal → section inputs → templates

The implementation may extend content interfaces only where presentation requires a new editable label. Any extension must:

- include a default value in `DEFAULT_HOME_PAGE_CONTENT`;
- be covered by `isSupportedHomePageContent` shape validation;
- remain backward-compatible with stored version 1 content, or deliberately increment and migrate the version if compatibility cannot be preserved.

Preferred approach: reuse existing fields and avoid a content-version migration. Image presentation details such as crop position may remain in the industry gallery configuration.

No image URL is to be embedded directly in section HTML. The Hero and industry images come from `HOME_HERO` / `HOME_GALLERIES`, allowing either local `assets/...` paths or HTTPS URLs.

## 5. Responsive behavior

### Desktop, 1024 px and above

- Full collage composition and controlled overlaps.
- Alternating industry layouts.
- Four commitment seals in one row with slight vertical offsets.
- Warranty service panel uses a two-column form arrangement where space permits.

### Tablet, 640–1023 px

- Reduce overlap distances and rotations.
- Keep the primary image dominant.
- Stack copy and media when collision risk appears.
- Commitment seals may use two columns.

### Mobile, below 640 px

- Single-column reading order: eyebrow, heading, description, actions, primary image, secondary image rail.
- No content may depend on absolute positioning for document height.
- Secondary images use a horizontally scrollable, snap-aligned rail.
- Decorative connectors are reduced or hidden.
- Interactive targets remain at least 44 px high where practical.
- No horizontal page overflow.

## 6. Accessibility and interaction

- Preserve semantic section headings in descending logical order.
- Every meaningful image uses its configured caption or alt text.
- Decorative shapes and connector lines are hidden from screen readers.
- Text over images requires a gradient overlay and sufficient contrast.
- Links and buttons retain visible keyboard focus styles.
- Motion is limited to small entrance/hover movement and disabled under `prefers-reduced-motion`.
- Smooth scrolling and existing route/query parameter behavior remain intact.

## 7. Error and fallback behavior

- If remote Home content fails, `DEFAULT_HOME_PAGE_CONTENT` remains the fallback.
- An unavailable image must not collapse the scene; fixed aspect-ratio containers and a neutral background preserve layout.
- Warranty not-found, active, and expired states continue to render within the redesigned service panel.
- Long editable text must wrap without overlapping imagery; mobile returns to normal flow.

## 8. Implementation surface

Expected files to change:

- `client/src/app/home/home.component.html`
- `client/src/app/home/home.component.scss`
- `client/src/app/home/home-content.model.ts`
- `client/src/app/home/sections/industry-section/industry-content.ts`
- `client/src/app/home/sections/hero-section/hero-section.component.html`
- `client/src/app/home/sections/industry-section/industry-section.component.html`
- `client/src/app/home/sections/industry-section/industry-section.component.ts`
- `client/src/app/home/sections/warranty-section/warranty-section.component.html`
- `client/src/app/home/sections/commitments-section/commitments-section.component.html`
- `client/src/app/home/sections/cta-section/cta-section.component.html`
- related component specifications

CSS may remain utility-first in templates, but page-wide decorative rules and animation preferences should live in Home/component styles rather than being duplicated across markup.

## 9. Verification strategy

### Automated tests

- Hero renders all three editable image-led industry entries.
- Exactly three industry sections render in the expected order.
- Each industry renders one main image and all configured secondary images.
- Each `galleryLayout` selects its distinct scene structure/classes.
- No product-list component or product-card grid is present on Home.
- Commitment and CTA default copy refers to all three industries.
- Warranty inputs, lookup events, result states, reset, and product navigation continue to work.
- Content fallback still loads when the Home content request fails.

### Build and visual checks

- Run focused Home component tests.
- Run the broader client test suite when practical and separate unrelated failures from Home regressions.
- Run an Angular development build.
- Inspect desktop, tablet, and mobile widths for overflow, text/image collisions, focus states, and image crop quality.

## 10. Out of scope

- New backend product or warranty APIs.
- Changes to product detail or catalogue pages.
- Reintroduction of Home product lists.
- Creating new photography assets; this pass uses editable configured image URLs.
- Redesigning the global header or footer outside adjustments needed for a clean Home transition.
