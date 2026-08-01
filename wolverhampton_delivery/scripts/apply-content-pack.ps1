# Run from your project root after unzipping this pack into the project root.
# Expected folder: .\wolverhampton_delivery

$PackRoot = ".\wolverhampton_delivery"

Copy-Item -Path "$PackRoot\app\siteLinks.ts" -Destination ".\app\siteLinks.ts" -Force
Copy-Item -Path "$PackRoot\app\SiteHeader.tsx" -Destination ".\app\SiteHeader.tsx" -Force
Copy-Item -Path "$PackRoot\app\layout.tsx" -Destination ".\app\layout.tsx" -Force
Copy-Item -Path "$PackRoot\app\icon.svg" -Destination ".\app\icon.svg" -Force
Copy-Item -Path "$PackRoot\app\robots.ts" -Destination ".\app\robots.ts" -Force
Copy-Item -Path "$PackRoot\public\llms.txt" -Destination ".\public\llms.txt" -Force
Copy-Item -Path "$PackRoot\public\ai-summary.json" -Destination ".\public\ai-summary.json" -Force

New-Item -ItemType Directory -Force -Path ".\public\pins" | Out-Null
Copy-Item -Path "$PackRoot\public\pins\*" -Destination ".\public\pins\" -Recurse -Force

$globalsPath = ".\app\globals.css"
$cssMarker = "/* WOLVERHAMPTON_NAV_FOOTER_ADDITIONS */"
$additions = Get-Content -Path "$PackRoot\app\globals.nav-footer.additions.css" -Raw
$globals = Get-Content -Path $globalsPath -Raw

if ($globals -notlike "*$cssMarker*") {
  Add-Content -Path $globalsPath -Value "`n$cssMarker`n$additions`n"
  Write-Host "Nav/footer CSS additions appended to app/globals.css"
} else {
  Write-Host "Nav/footer CSS additions already exist in app/globals.css"
}

Write-Host "Done. Next: npm run build"
