<#
.SYNOPSIS
Permanently clears all three product tables in PostgreSQL.
.EXAMPLE
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\truncate-products.ps1 -Preview
.EXAMPLE
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\truncate-products.ps1 -Database Ecommerse
#>
[CmdletBinding()]
param(
    [ValidateNotNullOrEmpty()][string]$ServerHost = 'localhost',
    [ValidateRange(1, 65535)][int]$Port = 5432,
    [ValidateNotNullOrEmpty()][string]$Database = 'Ecommerse',
    [ValidateNotNullOrEmpty()][string]$UserName = 'postgres',
    [string]$PsqlPath,
    [switch]$Preview
)

$ErrorActionPreference = 'Stop'
$sqlPath = Join-Path $PSScriptRoot 'truncate-products.sql'
if (-not (Test-Path -LiteralPath $sqlPath -PathType Leaf)) {
    throw "SQL file not found: $sqlPath"
}

Write-Output "Target: ${ServerHost}:${Port} / $Database / $UserName"
if ($Preview) {
    Write-Output 'PREVIEW ONLY: no database connection or changes.'
    Get-Content -LiteralPath $sqlPath -Raw
    return
}

if ([string]::IsNullOrWhiteSpace($PsqlPath)) {
    $psqlCommand = Get-Command psql.exe -CommandType Application -ErrorAction SilentlyContinue
    if ($psqlCommand) {
        $PsqlPath = $psqlCommand.Source
    } else {
        $postgresRoot = Join-Path $env:ProgramFiles 'PostgreSQL'
        if (Test-Path -LiteralPath $postgresRoot -PathType Container) {
            $PsqlPath = Get-ChildItem -LiteralPath $postgresRoot -Directory |
                Where-Object { $_.Name -match '^\d+(\.\d+)*$' } |
                Sort-Object { [int]($_.Name.Split('.')[0]) } -Descending |
                ForEach-Object { Join-Path $_.FullName 'bin\psql.exe' } |
                Where-Object { Test-Path -LiteralPath $_ -PathType Leaf } |
                Select-Object -First 1
        }
    }
}

if ([string]::IsNullOrWhiteSpace($PsqlPath) -or -not (Test-Path -LiteralPath $PsqlPath -PathType Leaf)) {
    throw 'psql.exe not found. Install PostgreSQL client tools or supply -PsqlPath.'
}

# -X ignores startup scripts; error-stop and one transaction prevent partial changes.
# -W asks for the password without including it in command arguments.
$psqlArguments = @(
    '-X', '-W',
    '--host', $ServerHost,
    '--port', $Port.ToString(),
    '--dbname', $Database,
    '--username', $UserName,
    '--set', 'ON_ERROR_STOP=1',
    '--single-transaction',
    '--file', $sqlPath
)

& $PsqlPath @psqlArguments
if ($LASTEXITCODE -ne 0) {
    throw "psql failed (exit code $LASTEXITCODE). The transaction was not committed."
}

Write-Output 'Done: all three product tables are empty.'
