<#
.SYNOPSIS
Generates SQL for the electric bike photo folders. -Apply copies photos and seeds PostgreSQL.
.EXAMPLE
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\seed-electric-bikes.ps1 -Preview
.EXAMPLE
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\seed-electric-bikes.ps1 -Apply -Database Ecommerse
.EXAMPLE
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\seed-electric-bikes.ps1 -Apply -UpdateImagesOnly -Database Ecommerse
#>
[CmdletBinding()]
param(
    [string]$SourceFolder = (Join-Path $env:USERPROFILE 'Downloads\anh xe dien'),
    [string]$MediaRoot = 'C:\Deploy\publish-api\Content\entity-images',
    [string]$RelativeFolder = 'library/2026/11/anh xe dien',
    [string]$PublicPrefix = '/api/content/entity-images',
    [string]$CatalogPath,
    [string]$SqlOutputPath,
    [string]$CompanyId = 'company-seed-bike-pending',
    [string]$BrandId = 'brand-seed-bike-pending',
    [string]$ServerHost = 'localhost',
    [ValidateRange(1, 65535)][int]$Port = 5432,
    [string]$Database = 'Ecommerse',
    [string]$UserName = 'postgres',
    [string]$PsqlPath,
    [switch]$Preview,
    [switch]$Apply,
    [switch]$UpdateImagesOnly
)

$ErrorActionPreference = 'Stop'
if (-not $CatalogPath) { $CatalogPath = Join-Path $PSScriptRoot 'electric-bikes.seed.json' }
if (-not $SqlOutputPath) { $SqlOutputPath = Join-Path $PSScriptRoot 'seed-electric-bikes.generated.sql' }
$utf8 = New-Object System.Text.UTF8Encoding($false)
$culture = [Globalization.CultureInfo]::InvariantCulture
function Quote-Sql([string]$Value) { return "'" + $Value.Replace("'", "''") + "'" }
function Get-StableId([string]$Value) {
    $hash = [Security.Cryptography.MD5]::Create()
    try { return ([BitConverter]::ToString($hash.ComputeHash([Text.Encoding]::UTF8.GetBytes($Value)))).Replace('-', '').ToLowerInvariant() }
    finally { $hash.Dispose() }
}
function Get-ChildPath([string]$Root, [string]$Relative) {
    $full = [IO.Path]::GetFullPath((Join-Path $Root $Relative))
    $prefix = $Root.TrimEnd('\', '/') + [IO.Path]::DirectorySeparatorChar
    if (-not $full.StartsWith($prefix, [StringComparison]::OrdinalIgnoreCase)) { throw "Path is outside its root: $Relative" }
    return $full
}

if ($Preview -and $Apply) { throw 'Choose either -Preview or -Apply.' }
if (-not (Test-Path -LiteralPath $SourceFolder -PathType Container)) { throw "Source folder not found: $SourceFolder" }
$sourceRoot = (Get-Item -LiteralPath $SourceFolder).FullName.TrimEnd('\', '/')
$mediaRootPath = [IO.Path]::GetFullPath($MediaRoot).TrimEnd('\', '/')
$RelativeFolder = $RelativeFolder.Replace('\', '/').Trim('/')
if ($RelativeFolder -match '(^|/)\.\.?(/|$)' -or $RelativeFolder -match '[:\\]' -or -not $RelativeFolder) { throw 'RelativeFolder must be a safe relative path.' }
if (-not $PublicPrefix.StartsWith('/api/content/entity-images')) { throw 'PublicPrefix must start with /api/content/entity-images.' }
$destinationRoot = Get-ChildPath $mediaRootPath $RelativeFolder
if (@(Get-ChildItem -LiteralPath $sourceRoot -Recurse -Directory | Where-Object { $_.Attributes -band [IO.FileAttributes]::ReparsePoint }).Count) {
    throw 'Source subfolders must not be symbolic links or junctions.'
}
$catalog = Get-Content -LiteralPath $CatalogPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $catalog.Count) { throw 'The seed catalog is empty.' }
$seenModels = @{}
$categories = @{}
$products = @()
$images = @()
$mimeTypes = @{ '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.webp' = 'image/webp'; '.gif' = 'image/gif' }

foreach ($row in $catalog) {
    foreach ($field in @('folder', 'name', 'model', 'categorySlug', 'categoryName')) {
        if ([string]::IsNullOrWhiteSpace($row.$field)) { throw "Catalog field missing: $field" }
    }
    if ($row.folder -match '[/\\]' -or $row.folder -in @('.', '..')) { throw 'Each catalog folder must be a single directory name.' }
    if ($seenModels.ContainsKey($row.model)) { throw "Duplicate model: $($row.model)" }
    $seenModels[$row.model] = $true
    if ($null -eq $row.price -or $null -eq $row.stockQuantity -or [decimal]$row.price -lt 0 -or [decimal]$row.stockQuantity -lt 0 -or [decimal]$row.stockQuantity -ne [int]$row.stockQuantity) { throw "Invalid price/stock for $($row.model)" }
    $folder = Get-ChildPath $sourceRoot $row.folder
    if (-not (Test-Path -LiteralPath $folder -PathType Container)) { throw "Product folder not found: $folder" }
    $files = @(Get-ChildItem -LiteralPath $folder -Recurse -File |
        Where-Object { $mimeTypes.ContainsKey($_.Extension.ToLowerInvariant()) } |
        Sort-Object DirectoryName, @{ Expression = { if ($_.BaseName -match '^\d+$') { [long]$_.BaseName } else { [long]::MaxValue } } }, Name)
    if (-not $files.Count) { throw "No images for $($row.model)" }
    $colorFiles = @{}
    $productImages = @()
    foreach ($file in $files) {
        if ($file.Length -eq 0) { throw "Empty image: $($file.FullName)" }
        $sourceRelative = $file.FullName.Substring($sourceRoot.Length + 1).Replace('\', '/')
        $relative = "$RelativeFolder/$sourceRelative"
        # Keep the same raw URL format as LocalEntityImageStorage.GetPublicUrl.
        # Browsers encode spaces and Vietnamese characters when making requests.
        $url = $PublicPrefix.TrimEnd('/') + '/' + $relative
        $images += [PSCustomObject]@{
            id = 'seed-bike-image-' + (Get-StableId $relative)
            source = $file.FullName; destination = Get-ChildPath $mediaRootPath $relative
            relative = $relative; url = $url; name = $file.Name
            mime = $mimeTypes[$file.Extension.ToLowerInvariant()]; length = $file.Length
        }
        $productImages += $images[-1]
        $withinProduct = $file.FullName.Substring($folder.Length + 1).Replace('\', '/')
        $parts = $withinProduct.Split('/')
        if ($parts.Length -gt 1 -and $parts[0] -notmatch '(?i)(ảnh|anh).*gộp|(ảnh|anh).*gop') {
            if (-not $colorFiles.ContainsKey($parts[0])) { $colorFiles[$parts[0]] = $url }
        }
    }
    $colors = @($colorFiles.Keys | Sort-Object | ForEach-Object { @{ Name = $_; HexCode = ''; ImageUrl = $colorFiles[$_] } })
    $picture = if ($colors.Count) { $colors[0].ImageUrl } else { $productImages[0].url }
    $products += [PSCustomObject]@{
        id = 'seed-bike-product-' + (Get-StableId $row.model)
        name = $row.name; model = $row.model; category = $row.categorySlug
        price = ([decimal]$row.price).ToString($culture); stock = [int]$row.stockQuantity
        picture = $picture; battery = [string]$row.batteryCapacity
        colors = ConvertTo-Json -InputObject @($colors) -Depth 10 -Compress
        imageUrls = ConvertTo-Json -InputObject @($productImages | ForEach-Object { $_.url }) -Compress
    }
    $categories[$row.categorySlug] = @{ name = $row.categoryName; parent = [string]$row.parentSlug }
    if ($row.parentSlug) { $categories[$row.parentSlug] = @{ name = $row.parentName; parent = '' } }
}

Write-Output "Found $($products.Count) products, $($images.Count) images, $((($products | ForEach-Object { ($_.colors | ConvertFrom-Json).Count }) | Measure-Object -Sum).Sum) colors."
Write-Output "Source: $sourceRoot"
Write-Output "Destination: $destinationRoot"
Write-Output "Database: ${ServerHost}:${Port} / $Database / $UserName"
if ($UpdateImagesOnly) { Write-Output 'Mode: update existing product images only; no products, categories, companies or brands will be created.' }
if ($Preview) {
    $products | Select-Object name, model, price, stock, picture | Format-Table -AutoSize
    Write-Output 'PREVIEW ONLY: no files copied, no SQL written, no database connection.'
    return
}

$sql = New-Object Text.StringBuilder
[void]$sql.AppendLine("BEGIN; SET LOCAL standard_conforming_strings = on; SET LOCAL client_encoding = 'UTF8';")
[void]$sql.AppendLine('CREATE TEMP TABLE seed_bike_options (images_only boolean NOT NULL) ON COMMIT DROP;')
$imagesOnlySql = if ($UpdateImagesOnly) { 'TRUE' } else { 'FALSE' }
[void]$sql.AppendLine("INSERT INTO seed_bike_options VALUES ($imagesOnlySql);")
[void]$sql.AppendLine('CREATE TEMP TABLE seed_bike_categories (slug text PRIMARY KEY, name text, parent_slug text) ON COMMIT DROP;')
[void]$sql.AppendLine('CREATE TEMP TABLE seed_bike_images (id text, relative_path text, original_name text, mime_type text, file_size bigint) ON COMMIT DROP;')
[void]$sql.AppendLine('CREATE TEMP TABLE seed_bike_products (id text, name text, model text, category_slug text, price numeric, stock_quantity integer, picture_url text, battery_capacity text, company_id text, brand_id text, colors jsonb, image_urls jsonb) ON COMMIT DROP;')
foreach ($slug in ($categories.Keys | Sort-Object)) {
    $c = $categories[$slug]
    [void]$sql.AppendLine("INSERT INTO seed_bike_categories VALUES ($(Quote-Sql $slug), $(Quote-Sql $c.name), $(Quote-Sql $c.parent));")
}
foreach ($i in $images) {
    [void]$sql.AppendLine("INSERT INTO seed_bike_images VALUES ($(Quote-Sql $i.id), $(Quote-Sql $i.relative), $(Quote-Sql $i.name), $(Quote-Sql $i.mime), $($i.length));")
}
foreach ($p in $products) {
    [void]$sql.AppendLine("INSERT INTO seed_bike_products VALUES ($(Quote-Sql $p.id), $(Quote-Sql $p.name), $(Quote-Sql $p.model), $(Quote-Sql $p.category), $($p.price), $($p.stock), $(Quote-Sql $p.picture), $(Quote-Sql $p.battery), $(Quote-Sql $CompanyId), $(Quote-Sql $BrandId), $(Quote-Sql $p.colors)::jsonb, $(Quote-Sql $p.imageUrls)::jsonb);")
}
[void]$sql.AppendLine((Get-Content -LiteralPath (Join-Path $PSScriptRoot 'seed-electric-bikes.sql') -Raw -Encoding UTF8))
[void]$sql.AppendLine("COMMIT;")
$SqlOutputPath = [IO.Path]::GetFullPath($SqlOutputPath)
[IO.File]::WriteAllText($SqlOutputPath, $sql.ToString(), $utf8)
Write-Output "SQL generated: $SqlOutputPath"
if (-not $Apply) { return }

if (-not $PsqlPath) {
    $command = Get-Command psql.exe -CommandType Application -ErrorAction SilentlyContinue
    if ($command) { $PsqlPath = $command.Source }
    else {
        $postgresRoot = Join-Path $env:ProgramFiles 'PostgreSQL'
        if (Test-Path -LiteralPath $postgresRoot) {
            $PsqlPath = Get-ChildItem -LiteralPath $postgresRoot -Directory |
                Where-Object { $_.Name -match '^\d+(\.\d+)*$' } |
                Sort-Object { [int]($_.Name.Split('.')[0]) } -Descending |
                ForEach-Object { Join-Path $_.FullName 'bin\psql.exe' } |
                Where-Object { Test-Path -LiteralPath $_ -PathType Leaf } | Select-Object -First 1
        }
    }
}
if (-not $PsqlPath -or -not (Test-Path -LiteralPath $PsqlPath -PathType Leaf)) { throw 'psql.exe not found. Supply -PsqlPath.' }
$connectionArguments = @('-X', '--host', $ServerHost, '--port', $Port.ToString(), '--dbname', $Database, '--username', $UserName, '--set', 'ON_ERROR_STOP=1')
if ($UpdateImagesOnly) {
    # Validate before copying: a deleted product must not leave freshly re-copied orphan photos.
    $ids = ($products | ForEach-Object { '(' + (Quote-Sql $_.id) + ')' }) -join ','
    $preflightPath = Join-Path ([IO.Path]::GetTempPath()) ('seed-bike-preflight-' + [guid]::NewGuid().ToString('N') + '.sql')
    $preflightSql = 'DO $check$ BEGIN IF EXISTS (SELECT 1 FROM (VALUES ' + $ids + ') s(id) WHERE NOT EXISTS (SELECT 1 FROM public."ElectricBikeProducts" p WHERE p."Id" = s.id)) THEN RAISE EXCEPTION ''An existing seed product is missing. No images copied. Image-only mode never recreates deleted products.''; END IF; END $check$;'
    [IO.File]::WriteAllText($preflightPath, $preflightSql, $utf8)
    try {
        $ErrorActionPreference = 'Continue'
        & $PsqlPath @connectionArguments --file $preflightPath
        $preflightExit = $LASTEXITCODE
        $ErrorActionPreference = 'Stop'
        if ($preflightExit -ne 0) { throw 'Image-only validation failed; no images copied and no database changes applied.' }
    }
    finally {
        $ErrorActionPreference = 'Stop'
        Remove-Item -LiteralPath $preflightPath -ErrorAction SilentlyContinue
    }
}
# Check ALL existing destinations before copying; never overwrite different images.
foreach ($i in $images) {
    if (-not $i.source.Equals($i.destination, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $i.destination)) {
        if ((Get-FileHash -LiteralPath $i.source -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $i.destination -Algorithm SHA256).Hash) {
            throw "Different file already exists; nothing copied: $($i.destination)"
        }
    }
}
foreach ($i in $images) {
    if (-not (Test-Path -LiteralPath $i.destination -PathType Leaf)) {
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($i.destination)) | Out-Null
        Copy-Item -LiteralPath $i.source -Destination $i.destination
    }
}
$arguments = $connectionArguments + @('--file', $SqlOutputPath)
# psql prompts for a password when needed; credentials are never embedded in SQL.
$ErrorActionPreference = "Continue"
& $PsqlPath @arguments
$psqlExit = $LASTEXITCODE
$ErrorActionPreference = "Stop"
if ($psqlExit -ne 0) { throw "psql failed (exit code $psqlExit). Database changes rolled back; copied files remain for retry." }
Write-Output 'Seed completed. Product images updated; existing product details, prices and stock were preserved.'
