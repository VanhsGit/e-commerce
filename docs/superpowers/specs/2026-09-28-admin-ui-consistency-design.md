# Admin UI Consistency Design

## Goal

Use `/admin/companies` as the visual baseline for every reachable admin page so lists are simple and consistent, while create, edit, and detail dialogs have clearer grouping and more generous spacing. Preserve all current business behavior, API contracts, permissions, validation, and data flows.

## Scope

The shared admin styling and layout apply to all current admin routes:

- `/admin/dashboard`
- `/admin/companies`
- `/admin/brands`
- `/admin/electric-bikes`
- `/admin/agricultural-machines`
- `/admin/electrical-appliances`
- `/admin/users`
- `/admin/media`

CRUD table and dialog work applies to Companies, Brands, Electric Bikes, Agricultural Machines, Electrical Appliances, and Users. Dashboard and Media receive only the shared page, card, and spacing treatment appropriate to their existing content.

The generic `AdminEntityPageComponent` will also consume the shared styles so future or indirect uses do not retain an older visual pattern.

## Design Direction

### Shared page shell

- Keep `AdminPageHeaderComponent` as the common page header.
- Use a consistent outer content gutter with responsive spacing: compact on phones and more generous from tablet widths upward.
- Use white content cards with a restrained border/shadow, moderate radius, and 20–24px internal padding.
- Preserve each page's title, subtitle, refresh action, and primary create action.

### List tables

The Companies table is the reference for density and hierarchy:

- Light neutral table header, compact middle-sized rows, subtle cell borders, and a restrained hover state.
- A simple first column for sequence number and a clearly identifiable primary-name cell that opens detail.
- Only information needed to scan or act on a record remains visually prominent. Supporting text uses smaller neutral typography.
- Status remains visible in its own column. Existing activation/deactivation behavior is preserved; controls may be rendered as a compact toggle or existing semantic state action when the underlying workflow requires it.
- View, edit, and delete actions use the same 34px icon-button treatment and consistent colors/tooltips. Additional domain actions, such as password reset, remain available but adopt the same sizing and visual hierarchy.
- Horizontal scrolling remains enabled for wide product and user tables, and pagination behavior remains unchanged.
- Existing filters and search behavior remain unchanged. Filter controls share consistent height, spacing, and responsive wrapping.
- Decorative summary chips may remain where they convey useful inventory or status totals, but they must not compete with filters or table content.

### Create and edit dialogs

- Use the existing Angular Material dialogs and current reactive forms.
- Standardize the dialog surface, title, scrollable content, and sticky-looking action footer through shared styles.
- Increase content padding and vertical rhythm so controls do not appear cramped.
- Group fields into bordered white sections with short uppercase section headings.
- Use responsive 12-column grids: one column on small screens and two or more columns only where field relationships are clear.
- Keep representative-image selection in a dedicated section or side column.
- Keep metadata and status controls in clearly labeled sections near the end of the form.
- Preserve current validators, defaults, option sources, submit handlers, loading states, and error handling.

### Detail dialogs

- Start with a compact hero block containing the record image/avatar where applicable, primary name, identifier/supporting text, and status.
- Present attributes in grouped white sections using `AdminDetailListComponent` and `AdminDetailRowComponent` where appropriate.
- Use 20–24px section padding and consistent vertical gaps.
- Long descriptions, URLs, metadata, and identifiers wrap safely without forcing horizontal overflow.
- On small screens, hero content and multi-column detail grids collapse cleanly to one column.

### Dashboard and Media

- Keep their current content model and behavior.
- Align page gutters, card surfaces, radii, borders, shadows, and section spacing with the CRUD pages.
- Do not force dashboard metrics or media tiles into table layouts.

## Implementation Structure

The primary source of truth will be `client/src/styles.scss`. It will own reusable admin classes for page gutters, cards, toolbars, tables, action buttons, dialog surfaces, dialog sections, detail heroes, and responsive behavior.

Page templates under `client/src/app/admin` will be adjusted to consume these classes consistently. Page-specific styling is retained only for genuinely page-specific behavior; repeated Companies styles should move to the shared stylesheet rather than being copied into every component.

No backend, service, model, route, or database changes are required.

## Behavior and Accessibility Constraints

- Every current click handler and CRUD operation must continue to work.
- Existing loading, empty, disabled, and error states must remain available.
- Action buttons keep descriptive tooltips and accessible labels where the control has no visible text.
- Status cannot be communicated by color alone; text, tooltip, or accessible label remains present.
- Keyboard navigation and Material focus behavior must not be removed.
- Dialog content must remain reachable on short and narrow viewports.

## Verification

- Add or update focused Angular component tests that assert the shared structural classes and required CRUD controls on affected templates.
- Run the relevant admin component test files during implementation, observing each new assertion fail before applying the corresponding production markup or styling change.
- Run the complete Angular test suite after the focused tests pass.
- Run a development Angular build to catch template, type, and stylesheet errors.
- Inspect the affected routes at desktop and mobile widths, checking table overflow, dialog scrolling, responsive field layout, action availability, and preservation of existing empty/loading states.

## Non-goals

- Redesigning the public storefront or Home page.
- Changing API requests, database schema, authentication, authorization, or CRUD semantics.
- Replacing Angular Material, ng-zorro tables, Tailwind utilities, or the existing admin component architecture.
- Introducing a new design-system package or a generalized data-table/form generator.
