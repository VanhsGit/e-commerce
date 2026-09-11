# Admin, media, and OTP setup

## Database

The application applies migrations at startup. To apply them manually:

```powershell
dotnet ef database update --project Infrastructure --startup-project API --context StoreContext
dotnet ef database update --project Infrastructure --startup-project API --context AppIdentityDbContext
```

Metadata on Company, Brand, ElectricBikeProduct, and AgriculturalMachineProduct is stored as PostgreSQL `jsonb` with a `Dictionary<string,string>` API contract. All persisted models have `IsUsed = true` by default; admin delete actions set it to false.

## Local image storage

Development uses `API/Content/entity-images`. For a virtual machine, point the root to a persistent directory outside the deployment release folder:

```text
MediaStorage__RootPath=/srv/ecommerce-media
MediaStorage__RequestPath=/content/entity-images
MediaStorage__MaxFileSize=10485760
```

Give the application process read/write permission on the root and include this directory in backups. PostgreSQL stores only entity/image metadata and the relative file path; it does not store Base64 image data.

## Development OTP login

1. Create an active user from `/admin/users` or allow the seed user to be created.
2. Enter the email on `/account/login`.
3. Read the six-digit code from the API console entry `Development OTP for ...`.
4. Enter the code within five minutes.

OTP values are hashed in PostgreSQL and can be used once. Development logging is refused outside the Development environment. Before production, replace `LoggingOtpSender` with an email implementation of `IOtpSender` and provide a secret `Otp__HashKey` of at least 32 characters.

