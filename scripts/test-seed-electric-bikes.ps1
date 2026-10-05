# Runs only against a disposable database supplied by the caller.
# Never supply the application's database here.
param(
    [string]$Database = 'seed_bikes_script_test',
    [int]$Port = 55439,
    [string]$PsqlPath = 'C:\Program Files\PostgreSQL\16\bin\psql.exe'
)
$ErrorActionPreference = 'Stop'
if ($Database -notmatch '^seed_bikes_script_test(?:_[a-z0-9]+)?$') { throw 'A disposable test database name is required.' }
$scriptPath = Join-Path $PSScriptRoot 'seed-electric-bikes.ps1'
if (-not (Test-Path -LiteralPath $scriptPath)) { throw 'Missing seed-electric-bikes.ps1' }

$testRoot = Join-Path $env:TEMP ('ecommerce-bike-seed-' + [guid]::NewGuid().ToString('N'))
$source = Join-Path $testRoot 'source'
$media = Join-Path $testRoot 'media'
$output = Join-Path $testRoot 'seed.sql'
$catalogPath = Join-Path $testRoot 'catalog.json'
New-Item -ItemType Directory -Path $testRoot | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)
$catalog = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'electric-bikes.seed.json') -Raw -Encoding UTF8 | ConvertFrom-Json
# The apostrophe must survive both filesystem paths and SQL quoting.
$catalog[0].folder += " ' test"
$catalog[0].price = 1234567
$catalog[0].stockQuantity = 7
[IO.File]::WriteAllText($catalogPath, (ConvertTo-Json -InputObject @($catalog) -Depth 10), $utf8)
foreach ($row in $catalog) {
    $folder = Join-Path $source $row.folder
    foreach ($color in @('Màu Đỏ', 'Màu Xám', 'ảnh thân xe gộp')) {
        $colorPath = Join-Path $folder $color
        New-Item -ItemType Directory -Path $colorPath -Force | Out-Null
        foreach ($file in @('2.jpg', '10.jpg')) { [IO.File]::WriteAllBytes((Join-Path $colorPath $file), [byte[]](255, 216, 255, 217)) }
    }
    [IO.File]::WriteAllText((Join-Path $folder 'ignore.lnk'), 'not an image')
}

function Invoke-TestSql([string]$Sql) {
    $path = Join-Path $testRoot 'query.sql'
    [IO.File]::WriteAllText($path, $Sql, $utf8)
    $result = & $PsqlPath -X -w -h 127.0.0.1 -p $Port -U postgres -d $Database -v ON_ERROR_STOP=1 -At --file $path
    if ($LASTEXITCODE -ne 0) { throw 'Test SQL failed.' }
    return ($result -join "`n").Trim()
}

$preview = & $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -Preview | Out-String
if (Test-Path -LiteralPath $media) { throw 'Preview copied files.' }
if ($preview -notmatch '11 products' -or $preview -notmatch '66 images') { throw 'Preview counts are incorrect.' }
& $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -SqlOutputPath $output
if (Test-Path -LiteralPath $media) { throw 'SQL generation copied files.' }

# The caller creates the empty schema before running this test.
& $PsqlPath -X -w -h 127.0.0.1 -p $Port -U postgres -d $Database -v ON_ERROR_STOP=1 --file $output | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Generated SQL failed.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts";') -ne '11') { throw 'Product count incorrect.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."EntityImages";') -ne '66') { throw 'Image count incorrect.' }
if ((Invoke-TestSql 'SELECT SUM(jsonb_array_length("Colors")) FROM public."ElectricBikeProducts";') -ne '22') { throw 'Gallery folder became a color.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE "PictureUrl" LIKE ''/api/content/entity-images/library/2026/11/anh xe dien/%/2.jpg'';') -ne '11') { throw 'URL prefix or numeric image order incorrect.' }
Invoke-TestSql 'UPDATE public."ElectricBikeProducts" SET "Price" = 7654321, "PictureUrl" = '''', "Colors" = ''[]''::jsonb, "Metadata" = ''{"custom":"keep"}''::jsonb;' | Out-Null
# -Apply is tested only on the disposable database and temporary media root.
# PGPASSWORD avoids an interactive prompt in this test's trust-authenticated server.
& $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -SqlOutputPath $output -Apply -ServerHost 127.0.0.1 -Port $Port -Database $Database -PsqlPath $PsqlPath
if (@(Get-ChildItem -LiteralPath $media -Recurse -File).Count -ne 66) { throw 'Copy count incorrect.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE "Price" = 7654321;') -ne '11') { throw 'Rerun changed existing prices.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."EntityImages";') -ne '66') { throw 'Rerun duplicated media.' }

if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE "PictureUrl" <> '''' AND jsonb_array_length("Colors") = 2;') -ne '11') { throw 'Rerun did not restore cover and color images.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE "Metadata"->>''custom'' = ''keep'';') -ne '11') { throw 'Rerun lost custom metadata.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE jsonb_array_length(("Metadata"->>''seedImageUrls'')::jsonb) = 6;') -ne '11') { throw 'Seed gallery images are not linked to products.' }
if ((Invoke-TestSql 'SELECT SUM("StockQuantity") FROM public."ElectricBikeProducts";') -ne '7') { throw 'Rerun changed existing stock.' }

Invoke-TestSql 'UPDATE public."ElectricBikeProducts" SET "PictureUrl" = '''', "Colors" = jsonb_set("Colors", ''{0,HexCode}'', ''"#ff0000"''::jsonb); UPDATE public."ProductCategories" SET "IsUsed" = FALSE;' | Out-Null
& $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -SqlOutputPath $output -UpdateImagesOnly -Apply -ServerHost 127.0.0.1 -Port $Port -Database $Database -PsqlPath $PsqlPath -CompanyId 'missing-company' -BrandId 'missing-brand'
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts" WHERE "PictureUrl" <> '''' AND "Colors"->0->>''HexCode'' = ''#ff0000'';') -ne '11') { throw 'Image-only rerun failed or lost edited color codes.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ProductCategories" WHERE "IsUsed";') -ne '0') { throw 'Image-only mode changed categories.' }
Invoke-TestSql 'UPDATE public."ProductCategories" SET "IsUsed" = TRUE;' | Out-Null

$badCatalog = @($catalog[0])
$badCatalog[0].model = 'MISSING-BRAND-TEST'
[IO.File]::WriteAllText($catalogPath, (ConvertTo-Json -InputObject @($badCatalog) -Depth 10), $utf8)
& $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -SqlOutputPath $output -UpdateImagesOnly
$ErrorActionPreference = "Continue"
& $PsqlPath -X -w -h 127.0.0.1 -p $Port -U postgres -d $Database -v ON_ERROR_STOP=1 --file $output 2>$null | Out-Null
$missingProductExit = $LASTEXITCODE
$ErrorActionPreference = "Stop"
if ($missingProductExit -eq 0) { throw 'Image-only mode recreated a missing product.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts";') -ne '11') { throw 'Image-only mode changed product count.' }
$missingMedia = Join-Path $testRoot 'missing-product-media'
$preflightRejected = $false
try {
    & $scriptPath -SourceFolder $source -MediaRoot $missingMedia -CatalogPath $catalogPath -SqlOutputPath $output -UpdateImagesOnly -Apply -ServerHost 127.0.0.1 -Port $Port -Database $Database -PsqlPath $PsqlPath 2>$null | Out-Null
}
catch { $preflightRejected = $true }
if (-not $preflightRejected) { throw 'Image-only preflight accepted a missing product.' }
if (Test-Path -LiteralPath $missingMedia) { throw 'Image-only preflight copied orphan photos for a deleted product.' }
& $scriptPath -SourceFolder $source -MediaRoot $media -CatalogPath $catalogPath -SqlOutputPath $output -BrandId 'missing-brand'
$ErrorActionPreference = "Continue"
& $PsqlPath -X -w -h 127.0.0.1 -p $Port -U postgres -d $Database -v ON_ERROR_STOP=1 --file $output 2>$null | Out-Null
$expectedFailureExit = $LASTEXITCODE
$ErrorActionPreference = "Stop"
if ($expectedFailureExit -eq 0) { throw 'Missing foreign key was accepted.' }
if ((Invoke-TestSql 'SELECT COUNT(*) FROM public."ElectricBikeProducts";') -ne '11') { throw 'Failed transaction changed product count.' }
Write-Output "PASS: preview, Unicode/apostrophes, numeric sort, color grouping, file copy, image updates, linked gallery, price/stock/color preservation, image-only mode and rollback. Temporary artifacts: $testRoot"
