# Admin, media, and OTP setup

## Database

The application applies migrations at startup. To apply them manually:

```powershell
dotnet ef database update --project Infrastructure --startup-project API --context StoreContext
dotnet ef database update --project Infrastructure --startup-project API --context AppIdentityDbContext
```

Metadata on Company, Brand, and products is stored as PostgreSQL `jsonb` with a `Dictionary<string,string>` API contract. Product delete actions permanently remove the database row and its managed cover, color, and seed gallery images. Images referenced by other products, page content, logos, categories, or avatars are retained. Company, brand, and category delete actions still use `IsUsed = false`.

## Local image storage

Development uses `API/Content/entity-images`. For a virtual machine, point the root to a persistent directory outside the deployment release folder:

```text
MediaStorage__RootPath=/srv/ecommerce-media
MediaStorage__RequestPath=/api/content/entity-images
MediaStorage__MaxFileSize=10485760
```

Give the application process read/write permission on the root and include this directory in backups. The `/api` prefix ensures production IIS/ARR forwards image requests to the API. PostgreSQL stores only entity/image metadata and the relative file path; it does not store Base64 image data.

Images are uploaded directly from admin forms. There is no standalone image library or library picker. During product deletion, files move temporarily to `.pending-deletions` until the database transaction commits; a failed transaction restores them. If final removal fails, the API logs the pending path for cleanup. These `.pending` files are not served as images.

## Updating electric-bike seed images

Run this on the database/media server, with `MediaRoot` set to the API's actual storage directory:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\seed-electric-bikes.ps1 -Preview -UpdateImagesOnly
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\seed-electric-bikes.ps1 -Apply -UpdateImagesOnly -Database Ecommerse -MediaRoot 'C:\Deploy\publish-api\Content\entity-images'
```

The image-only mode updates `PictureUrl`, color image URLs, and the internal seed gallery references. It preserves product details, prices, stock, custom metadata, and edited color codes, and creates no products, categories, companies, or brands. A missing seeded product stops the run before copying files. Without `-UpdateImagesOnly`, missing products are seeded and existing product images are refreshed. `-Preview` does not copy files, write SQL, or connect to the database. SQL generation without `-Apply` writes SQL only; run the PowerShell script with `-Apply` to copy the files as well.

Seed gallery references are stored under the internal `seedImageUrls` metadata key and hidden from the admin metadata editor. Existing seed data receives these references when the script is rerun, allowing later product deletion to clean up every seeded photo.

## Product categories

Admin categories load from the database and support a three-level tree. Create a subcategory with the add-child action or choose a valid parent in the category form. Parent selection excludes the current subtree and moves beyond three levels. Product filters use category IDs and include descendants when a parent is selected.

## Development OTP login

1. Create an active user from `/admin/users` or allow the seed user to be created.
2. Enter the email on `/account/login`.
3. Read the six-digit code from the API console entry `Development OTP for ...`.
4. Enter the code within five minutes.

OTP values are hashed in PostgreSQL and can be used once. Development logging is refused outside the Development environment. Before production, replace `LoggingOtpSender` with an email implementation of `IOtpSender` and provide a secret `Otp__HashKey` of at least 32 characters.
