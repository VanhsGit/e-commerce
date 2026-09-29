# Admin Tables and Home Content Management Design

## Goal

Make every Admin data table stay on one line and scroll horizontally when its columns exceed the viewport. Add an Admin page that can update all marketing content and images currently visible on the Home page, with saved changes appearing immediately.

The Home layout remains fixed. Administrators edit content inside the existing design rather than adding, deleting, or reordering sections.

## Confirmed Product Decisions

- Home content covers the Hero, three industry sections, commitments, warranty introduction/support copy, and CTA/contact section.
- Saving publishes immediately; there is no draft, scheduling, approval, or revision workflow.
- Fixed list sizes and section order are preserved so editable content cannot break the current layout.
- Images can be uploaded or selected from the existing Media library.
- Product search and warranty lookup behavior remain unchanged.

## Admin Table Behavior

All current and reusable Admin tables use a shared no-wrap contract:

- Header and body cells remain on one visual line.
- Nested labels, descriptions, identifiers, chips, and primary links inherit the no-wrap behavior.
- Tables wider than their card scroll horizontally inside the table container; the overall Admin page must not create document-level horizontal overflow.
- Each table keeps an explicit horizontal scroll width appropriate to its columns. Existing pagination, sticky columns, filters, actions, and responsive toolbars remain unchanged.
- Dialog and detail content are excluded from this rule and continue wrapping long text safely.

The shared implementation belongs in `client/src/styles.scss`, with page template changes only where a table lacks an explicit `nzScroll` width or a local utility overrides the shared rule.

## Content Architecture

### Persistence

Add a singleton `HomePageContent` entity in the catalogue database:

- `Id`: stable key `home`
- `ContentJson`: complete versioned Home content document
- `UpdatedAt`: UTC timestamp of the latest successful save
- `IsUsed`: inherited active flag where the existing entity convention requires it

`ContentJson` uses `jsonb` on PostgreSQL and `TEXT` on SQLite, following the provider-aware pattern already used by `StoreContext`. A migration creates the table and seeds the current Home content as the initial `home` row, so deployment preserves the page exactly as it appears today.

A single versioned JSON document is preferred over separate tables per section because the content is loaded and saved as one page, list sizes are fixed, and the sections share one publishing lifecycle. The API still exposes strongly typed DTOs and validates the document rather than accepting arbitrary JSON.

### Content contract

The document contains these fixed sections:

- `version`
- `hero`
  - badge, title, highlighted title, description
  - three fixed industry cards with kind, destination anchor, image, alt text, eyebrow, title, and description
  - three fixed metrics with value and label
- `industries`
  - exactly one `bike`, one `machine`, and one `appliance` entry
  - existing eyebrow, title, slogan, description, detail, category labels, highlight titles/notes, service title/note, starting-price text, CTA label, and gallery image metadata
  - industry kind, theme, anchor, gallery layout, icon choices, and list sizes remain system-controlled
- `commitments`
  - section title and description
  - four fixed items with editable title and description; icon and accent remain system-controlled
- `warranty`
  - section badge, heading, introduction
  - lookup panel headings/help text, product lookup headings/help text, and supporting tip/browse copy
  - input semantics, lookup actions, result messages, and product data remain controlled by application logic
- `cta`
  - heading, highlighted heading, description
  - phone, email, button labels
  - working-hours, address, and support labels/values

Image values are stored as the public URLs returned by the existing entity-image API. Image alt text remains separately editable.

## API

Add `HomeContentController` with a typed request/response contract:

- `GET /api/homecontent`
  - Public, because the public Home page consumes it.
  - Returns the singleton document plus `updatedAt`.
  - Returns the seeded/default document if the row is unexpectedly absent.
- `PUT /api/homecontent`
  - Requires an authenticated Admin role.
  - Validates the full document, normalizes whitespace and fixed discriminators, replaces the singleton content atomically, updates `UpdatedAt`, and returns the saved document.

Validation rejects missing required headings, invalid email/phone link values, unsupported image URL schemes, duplicate/missing industry kinds, or changed fixed list sizes. Validation errors use the existing API error response style. A failed save leaves the previous document untouched.

No delete endpoint is added. “Restore defaults” is a client-side action that loads the versioned default document into the form; the administrator must press Save to publish it.

## Admin Home Content Page

Add `/admin/home-content` and a sidebar item named “Nội dung trang chủ”. The page uses the existing Admin header, cards, section spacing, notification service, and representative image picker.

The editor is a single reactive form divided into clear sections or tabs:

1. Hero
2. Xe điện
3. Máy nông nghiệp
4. Điện gia dụng
5. Cam kết
6. Bảo hành
7. CTA & liên hệ

Each section edits only the fields allowed by the content contract. Repeated fixed items are rendered with stable labels such as “Chỉ số 1” or “Cam kết 1”; there are no add, delete, drag, or reorder controls. Gallery fields reuse `RepresentativeImagePickerComponent`, so upload and Media-library selection work exactly like current product/company forms.

The page provides:

- loading and load-error states
- dirty-form protection before restoring defaults or leaving with unsaved changes
- “Khôi phục mặc định” that changes the form only
- “Lưu thay đổi” with disabled/saving state
- success/error notifications
- a link to open the public Home page for review after saving

## Public Home Integration

Create a shared TypeScript `HomePageContent` model and `DEFAULT_HOME_PAGE_CONTENT`. Existing hard-coded Home constants move into this default object without changing their displayed values.

`HomeContentService` loads the public endpoint once for `HomeComponent`. On success, the Home sections receive the API document through typed inputs. On an HTTP error or invalid response, the component renders `DEFAULT_HOME_PAGE_CONTENT` and does not block the existing product/company requests.

The section components become presentational for editable copy:

- `HeroSectionComponent` receives hero content instead of importing `HOME_HERO` directly.
- `IndustrySectionComponent` continues receiving its industry object.
- `CommitmentsSectionComponent`, `WarrantySectionComponent`, and `CtaSectionComponent` receive their editable content through inputs.

Interactive behavior, navigation targets, responsive design, search state, and warranty state stay in their current owners.

## Error Handling and Compatibility

- Home content loading is independent from product catalogue loading; one failure cannot suppress the other.
- The currently compiled default content is always available as a safe fallback.
- The document includes a schema version. The first implementation accepts version `1` only and falls back safely if a newer unsupported version is returned.
- Save uses last-write-wins semantics. This is adequate for the current single-page Admin workflow; multi-user revision history is outside scope.
- Existing image deletion protection must consider URLs referenced by Home content before allowing a Media item to be deleted.

## Security

- Public clients can only read Home content.
- Only authenticated users with the Admin role can update it.
- The server owns validation and fixed structural fields; hiding controls in the browser is not treated as authorization.
- Stored content is rendered with Angular interpolation and property binding. Raw HTML editing/rendering is not introduced.

## Testing and Verification

### Backend

- Migration/model test for the singleton entity and provider-specific JSON storage.
- Controller tests for public GET, Admin-only PUT, validation failures, first-row recovery, and successful immediate replacement.
- Test that a failed update does not overwrite the previous document.
- Image usage test covering Home content references.

### Frontend

- Shared Admin table test proving cells use no-wrap styling and the table container scrolls horizontally.
- Admin editor tests for loading, fixed section/list rendering, image selection binding, validation, restore-default behavior, save success, and save failure.
- Home tests proving API content is rendered and HTTP failure uses the existing defaults.
- Section component tests updated to use typed inputs while preserving current visible output and interactions.

### Final checks

- Run the complete .NET test suite.
- Run the complete Angular test suite with the repository’s no-GPU headless browser launcher.
- Run the Angular production build and the .NET build.
- Inspect every Admin table at desktop and narrow widths, confirming one-line cells and internal horizontal scrolling.
- Inspect Home and `/admin/home-content` at desktop and mobile widths, including long text, image previews, save feedback, and fallback behavior.

## Non-goals

- A free-form page builder or rich-text/HTML editor.
- Adding, deleting, hiding, or reordering Home sections and fixed cards.
- Drafts, scheduled publishing, approval workflows, revision history, or rollback history.
- Changing the product search, warranty lookup, catalogue data, or product images.
- Editing non-rendered legacy Home components that are not part of the current `HomeComponent` template.
