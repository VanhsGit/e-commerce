# Admin Local Images and Table Design

## Scope

Improve the existing Angular admin pages for companies, brands, electric bikes, agricultural machines, users, and the media library. Filters must be sent to the API, tables must use a restrained visual style and remain readable, and create/update forms must support one representative image uploaded to local storage or selected from the media library.

## Image model

`EntityImage` is the media-library record. It stores file metadata and the relative public path, but it does not own or attach to a company, brand, product, or user.

The existing image properties remain the source of truth for the representative image:

- `Company.LogoUrl`
- `Brand.LogoUrl`
- `ElectricBikeProduct.PictureUrl`
- `AgriculturalMachineProduct.PictureUrl`
- `AppUser.AvatarUrl`

No image-attachment table is required. Selecting an image copies its relative public URL into the appropriate property. The same media-library image can therefore be reused by multiple entities.

## Local storage and public URLs

Local storage is configured through `MediaStorage`:

- `RootPath` is the physical directory. Its default is `Content/entity-images`, resolved relative to the API content root.
- `RequestPath` is the public URL prefix. Its default is `/content/entity-images`.
- `MaxFileSize` and `AllowedContentTypes` control upload validation.

An upload follows this flow:

1. Validate the extension, MIME type, file signature, and size.
2. Generate a collision-resistant file name.
3. Write the file below `RootPath`.
4. Create an `EntityImage` record containing the relative path and file metadata.
5. Return a public relative URL below `RequestPath`.
6. The form writes that URL to its existing image property when the entity is saved.

The database stores a relative public URL, not a development host such as `https://localhost:5001`. This keeps data portable between development and production. ASP.NET Core static-file middleware maps `RequestPath` to `RootPath`, so requesting the stored URL reads the image from local disk.

Deleting a media-library record also deletes its local file. Before deletion, the API checks the existing image properties and rejects deletion when the URL is still in use.

## Media API and picker

The media API provides operations to:

- list and search media-library images;
- upload an image without requiring a parent entity;
- delete an unused image;
- return the public relative URL for every image.

A reusable Angular image picker is used by all create/update forms. It supports:

- uploading a new image and immediately selecting its returned URL;
- opening the media library and selecting an existing image;
- previewing the current selection;
- clearing the selection.

The picker manages one image only. Its preview is a single bordered element with a small corner radius and `object-fit: cover`.

## User avatars

`AppUser` gains an `AvatarUrl` property because the current Angular user form already exposes an avatar URL while the identity model and API DTOs do not persist it. The admin user create, update, list, and detail endpoints return and accept this property. An identity migration adds the column.

## Filters

Every admin list keeps draft filter values separate from applied values. Clicking the filter action or pressing Enter builds HTTP query parameters and reloads the list from the API. Clearing filters reloads the unfiltered API result. No client-side filtering is used as a substitute for server-side filtering.

Filter controls use visible neutral borders, consistent heights, and clear focus states. Company, brand, product, and user endpoints continue to receive their supported `search`, `isUsed`, `companyId`, `brandId`, `category`, and `role` parameters.

The media list receives its own search parameter for file name and MIME type.

## Tables and avatar presentation

Admin tables use neutral backgrounds and status indicators without gradients or decorative color blocks. Cells allow normal wrapping for descriptive content. Long identifiers, URLs, and email addresses use safe word breaking. Each table has a minimum horizontal width and an explicit horizontal scroll container so columns are not compressed until their contents become unreadable.

Representative images are rendered as one `<img>` element when a URL exists. The image fills its fixed-size box with `object-fit: cover`, a one-pixel neutral border, and a small radius. A simple text placeholder is shown when no image is assigned.

## Error handling and consistency

- If disk writing fails, no `EntityImage` database record is created.
- If database persistence fails after writing, the newly written file is removed.
- Unsupported or oversized files return a clear `400` response.
- A failed entity save does not change its stored image URL.
- A failed image upload leaves the form usable and preserves its previous selection.
- Paths are normalized and verified to remain under the configured storage root.

## Verification

Backend tests cover file validation, path generation, upload rollback, public URL generation, in-use deletion protection, media filtering, and avatar persistence. Frontend tests cover query-parameter construction and image-picker selection. The final verification runs the .NET tests, Angular tests where available, and production/development builds for both projects.
