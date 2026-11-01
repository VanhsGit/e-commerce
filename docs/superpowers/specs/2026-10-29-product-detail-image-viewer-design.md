# Product Detail Image Viewer Design

## Intent

Make the product image area on `/product-detail/:kind/:id` feel like a primary product-detail surface: larger horizontally, with a cursor-tracking zoom lens and a centered, size-constrained popup on desktop hover.

## Goals

- Use a wider 4:3 main-image frame with a black canvas and `object-fit: contain`, so narrow or portrait images retain their full content without stretching.
- On mouse/pen hover, show a lens over the corresponding region of the main image and magnify that region in a centered popup.
- On click or keyboard activation, show the active image in a separate dismissible popup.
- Keep thumbnail heights fixed while preserving each image's natural width-to-height ratio.
- Keep the existing colour-driven gallery, thumbnail selection, loading layout, and responsive mobile layout intact.

## Non-goals

- No image editing, download control, carousel navigation, new dependency, or API/data-model change.
- Touch devices do not receive a hover-only zoom state.

## Approaches considered

1. Replace the main image with a third-party gallery/zoom package. This adds weight and duplicates existing gallery state, so it is not appropriate.
2. Render a separate magnified preview pane. It would consume horizontal room needed for product information.
3. Use the existing selected-image signal, a cursor-tracking lens, and a native component popup. Chosen: it keeps the detail layout balanced and needs no dependency.

## Constraints and accessibility

- The main image is a semantic button with a descriptive label and visible keyboard focus.
- The lightbox has `role="dialog"`, `aria-modal="true"`, an accessible close control, closes on backdrop click and Escape, and does not appear without an active image.
- Hover zoom applies only to mouse or pen pointers; touch users can activate the image directly.
