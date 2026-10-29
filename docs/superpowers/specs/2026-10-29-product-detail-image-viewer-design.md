# Product Detail Image Viewer Design

## Intent

Make the product image area on `/product-detail/:kind/:id` feel like a primary product-detail surface: larger horizontally, able to inspect image detail on desktop hover, and able to view the selected image at full size on click.

## Goals

- Use a wider 4:3 main-image frame with a black canvas and `object-fit: contain`, so narrow or portrait images retain their full content without stretching.
- On mouse/trackpad hover, magnify the part of the image under the pointer inside the main frame.
- On click or keyboard activation, show the active image in a dismissible full-screen lightbox.
- Keep the existing colour-driven gallery, thumbnail selection, loading layout, and responsive mobile layout intact.

## Non-goals

- No image editing, download control, carousel navigation, new dependency, or API/data-model change.
- Touch devices do not receive a hover-only zoom state.

## Approaches considered

1. Replace the main image with a third-party gallery/zoom package. This adds weight and duplicates existing gallery state, so it is not appropriate.
2. Render a separate magnified preview pane. It would consume horizontal room needed for product information.
3. Use the existing selected-image signal with a CSS-clipped, pointer-positioned zoom and a native component lightbox. Chosen: it keeps the detail layout balanced and needs no dependency.

## Constraints and accessibility

- The main image is a semantic button with a descriptive label and visible keyboard focus.
- The lightbox has `role="dialog"`, `aria-modal="true"`, an accessible close control, closes on backdrop click and Escape, and does not appear without an active image.
- The zoom applies only when a fine pointer can hover; it never changes thumbnail behavior.
