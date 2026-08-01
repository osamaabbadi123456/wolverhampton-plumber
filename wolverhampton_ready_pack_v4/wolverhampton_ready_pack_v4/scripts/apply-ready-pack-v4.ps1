$ErrorActionPreference = "Stop"

if (!(Test-Path ".\package.json") -or !(Test-Path ".\app") -or !(Test-Path ".\public")) {
  Write-Host "Run this script from the root of the Next.js project, where package.json exists." -ForegroundColor Red
  exit 1
}

$packRoot = Split-Path $PSScriptRoot -Parent
Write-Host "Applying Wolverhampton ready pack v4..." -ForegroundColor Cyan

Copy-Item -Path "$packRoot\app\*" -Destination ".\app" -Recurse -Force
Copy-Item -Path "$packRoot\public\*" -Destination ".\public" -Recurse -Force

if (Test-Path "$packRoot\marketing") {
  if (!(Test-Path ".\marketing")) { New-Item -ItemType Directory -Path ".\marketing" | Out-Null }
  Copy-Item -Path "$packRoot\marketing\*" -Destination ".\marketing" -Recurse -Force
}

function Add-CssBlock {
  param([string]$Path, [string]$Name, [string]$Css)
  if (!(Test-Path $Path)) {
    Write-Host "CSS file not found: $Path" -ForegroundColor Yellow
    return
  }
  $start = "/* === $Name START === */"
  $end = "/* === $Name END === */"
  $content = Get-Content $Path -Raw
  $pattern = [regex]::Escape($start) + "[\s\S]*?" + [regex]::Escape($end)
  $content = [regex]::Replace($content, $pattern, "")
  $block = "`r`n$start`r`n$Css`r`n$end`r`n"
  Set-Content -Path $Path -Value ($content.TrimEnd() + $block) -Encoding UTF8
}

$moduleCss = @'

/* Layout fixes for copied cards and sections */
.trustSection { padding: 96px 0; background: #fffaf0; }
.trustGrid { display: grid; grid-template-columns: minmax(0, 1fr) 420px; gap: 34px; align-items: stretch; }
.trustGrid h2, .sectionHeader h2, .finalBox h2 { color: var(--black, #111111); }
.trustGrid p { margin-top: 18px; max-width: 680px; color: #505050; font-size: 17px; line-height: 1.8; font-weight: 560; }
.trustList { margin-top: 26px; display: grid; gap: 14px; }
.trustList > div { padding: 18px 20px; border-radius: 20px; background: #ffffff; border: 1px solid rgba(17,17,17,.08); box-shadow: 0 12px 36px rgba(17,17,17,.055); }
.trustList strong { display: block; color: #111111; font-size: 16px; line-height: 1.25; font-weight: 950; }
.trustList span { display: block; margin-top: 7px; color: #666666; font-size: 14px; line-height: 1.55; font-weight: 650; }
.enquiryBox { padding: 28px; border-radius: 28px; background: #111111; color: #ffffff; box-shadow: 0 26px 80px rgba(17,17,17,.18); }
.checkCircle { width: 58px; height: 58px; border-radius: 18px; background: #fdb913; color: #111111; display: grid; place-items: center; font-size: 26px; font-weight: 950; }
.enquiryBox h3 { margin: 18px 0 0; color: #ffffff; font-size: 28px; line-height: 1.1; font-weight: 950; letter-spacing: -.03em; }
.enquiryRows { margin-top: 22px; display: grid; gap: 10px; }
.enquiryRows > div { padding: 14px; border-radius: 16px; background: rgba(255,255,255,.08); display: grid; gap: 4px; }
.enquiryRows span { color: rgba(255,255,255,.55); font-size: 12px; font-weight: 850; text-transform: uppercase; letter-spacing: .05em; }
.enquiryRows strong { color: #ffffff; font-size: 15px; line-height: 1.3; font-weight: 900; }
.fullBtn { margin-top: 22px; min-height: 52px; border-radius: 999px; background: #fdb913; color: #111111; display: inline-flex; align-items: center; justify-content: center; width: 100%; text-decoration: none; font-size: 14px; font-weight: 950; }

.articleBodySection { padding: 96px 0; background: #ffffff; }
.articleLayout { display: grid; grid-template-columns: minmax(0, 1fr) 310px; gap: 34px; align-items: start; }
.articleMain { padding: clamp(24px,4vw,46px); border-radius: 30px; background: #fff; border: 1px solid rgba(17,17,17,.09); box-shadow: 0 20px 70px rgba(17,17,17,.06); }
.articleMain h2 { margin: 42px 0 14px; color: #111111; font-size: clamp(30px,3.5vw,46px); line-height: 1.05; letter-spacing: -.055em; font-weight: 950; }
.articleMain p { margin: 14px 0 0; color: #555; font-size: 17px; line-height: 1.85; font-weight: 560; }
.articleLeadBox,.articleExampleMessage { padding: 24px; border-radius: 24px; background: #fffaf0; border: 1px solid rgba(253,185,19,.34); }
.articleLeadBox span,.articleExampleMessage span,.articleAsideCard > span { width: fit-content; display: block; padding: 7px 10px; border-radius: 999px; background: #fff4cf; color: #8a6100; font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .06em; }
.articleIconGrid { margin-top: 22px; display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; }
.articleIconCard { padding: 20px; border-radius: 22px; background: #fff; border: 1px solid rgba(17,17,17,.08); box-shadow: 0 14px 40px rgba(17,17,17,.055); }
.articleIconCard span { width: 44px; height: 44px; border-radius: 14px; background: #111; display: grid; place-items: center; font-size: 22px; }
.articleIconCard strong { display: block; margin-top: 16px; color: #111; font-size: 18px; line-height: 1.2; font-weight: 950; }
.articleIconCard p { margin-top: 8px; color: #606060; font-size: 15px; line-height: 1.65; }
.articleWarningBox { margin-top: 24px; padding: 22px; border-radius: 24px; background: #111; color: #fff; display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 16px; align-items: start; }
.articleWarningBox > span { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: #fdb913; font-size: 25px; }
.articleWarningBox strong { display: block; color: #fff; font-size: 18px; line-height: 1.25; font-weight: 950; }
.articleWarningBox p { margin-top: 8px; color: rgba(255,255,255,.72); font-size: 15px; line-height: 1.65; }
.articleChecklistBox { margin-top: 22px; padding: 24px; border-radius: 26px; background: #111; color: #fff; }
.articleChecklistBox > div { display: flex; align-items: center; gap: 12px; }
.articleChecklistBox span { width: 46px; height: 46px; border-radius: 14px; background: #fdb913; color: #111; display: grid; place-items: center; font-size: 20px; font-weight: 950; }
.articleChecklistBox h3 { margin: 0; color: #fff; font-size: 22px; line-height: 1.15; font-weight: 950; }
.articleChecklistBox ul { margin: 22px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.articleChecklistBox li { position: relative; padding: 13px 14px 13px 36px; border-radius: 15px; background: rgba(255,255,255,.08); color: rgba(255,255,255,.9); font-size: 14px; line-height: 1.45; font-weight: 750; }
.articleChecklistBox li::before { content: ""; position: absolute; left: 16px; top: 50%; width: 8px; height: 8px; border-radius: 999px; background: #fdb913; transform: translateY(-50%); margin: 0; }
.articleAside { position: sticky; top: 96px; display: grid; gap: 16px; }
.articleAsideCard { padding: 20px; border-radius: 24px; background: #fff; border: 1px solid rgba(17,17,17,.08); box-shadow: 0 14px 42px rgba(17,17,17,.055); display: grid; gap: 10px; }
.articleAsideCard a { padding: 12px 0; border-bottom: 1px solid rgba(17,17,17,.08); color: #222; text-decoration: none; font-size: 14px; line-height: 1.35; font-weight: 850; }
.articleRelatedInline { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; }
.articleRelatedInline a { min-height: 46px; padding: 0 16px; border-radius: 999px; background: #111; color: #fdb913; display: inline-flex; align-items: center; text-decoration: none; font-size: 13px; font-weight: 950; }

.videoHubSection { padding: 96px 0; background: #fffaf0; }
.videoGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start; }
.videoCard { overflow: hidden; border-radius: 30px; background: #fff; border: 1px solid rgba(17,17,17,.09); box-shadow: 0 20px 70px rgba(17,17,17,.08); }
.videoCard video { width: 100%; aspect-ratio: 9 / 16; max-height: 720px; display: block; background: #111; object-fit: cover; }
.videoCard > div { padding: 22px; }
.videoCard h2 { margin: 0; color: #111; font-size: 26px; line-height: 1.1; font-weight: 950; letter-spacing: -.03em; }
.videoCard p { margin: 10px 0 16px; color: #606060; font-size: 15px; line-height: 1.65; font-weight: 650; }

.assetHubSection { padding: 96px 0; background: #fffaf0; }
.assetGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; align-items: start; }
.assetCard { overflow: hidden; border-radius: 28px; background: #ffffff; border: 1px solid rgba(17,17,17,.09); box-shadow: 0 18px 60px rgba(17,17,17,.08); }
.assetCard img { width: 100%; display: block; aspect-ratio: 2 / 3; object-fit: cover; background: #111; }
.assetCard > div { padding: 18px; }
.assetCard h2 { margin: 0; color: #111; font-size: 20px; line-height: 1.15; font-weight: 950; letter-spacing: -.02em; }
.assetActions { margin-top: 14px; display: grid; gap: 8px; }
.assetActions a { min-height: 42px; padding: 0 14px; border-radius: 999px; background: #111; color: #fdb913; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-size: 13px; font-weight: 950; }
.assetFilesSection { padding: 82px 0; background: #ffffff; }
.assetFilesBox { padding: clamp(24px,4vw,42px); border-radius: 30px; background: #111; color: #fff; display: grid; grid-template-columns: minmax(0,1fr) 360px; gap: 26px; align-items: center; }
.assetFilesBox h2 { margin: 14px 0 0; color: #fff; font-size: clamp(34px,4vw,54px); line-height: 1.04; font-weight: 950; letter-spacing: -.055em; }
.assetFilesBox p { margin: 14px 0 0; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.7; font-weight: 650; }
.assetFileLinks, .assetVideoLinks { display: grid; gap: 10px; }
.assetFileLinks a, .assetVideoLinks a { min-height: 46px; padding: 0 14px; border-radius: 14px; background: rgba(255,255,255,.08); color: #fff; display: flex; align-items: center; text-decoration: none; font-size: 14px; line-height: 1.3; font-weight: 850; }
.assetFileLinks a:hover, .assetVideoLinks a:hover { background: #fdb913; color: #111; }
.assetVideoLinks { margin-top: 24px; grid-template-columns: repeat(5, minmax(0, 1fr)); }

@media (max-width: 980px) { .trustGrid,.articleLayout,.videoGrid,.assetFilesBox { grid-template-columns: 1fr; } .assetGrid { grid-template-columns: repeat(2, minmax(0,1fr)); } .assetVideoLinks { grid-template-columns: repeat(2, minmax(0, 1fr)); } .articleAside { position: static; } }
@media (max-width: 640px) { .trustSection,.articleBodySection,.videoHubSection,.assetHubSection,.assetFilesSection { padding: 62px 0; } .articleIconGrid,.assetGrid,.assetVideoLinks { grid-template-columns: 1fr; } .articleWarningBox { grid-template-columns: 1fr; } }

'@

Add-CssBlock -Path ".\app\emergency-plumber-wolverhampton\EmergencyPage.module.css" -Name "WOLVERHAMPTON READY PACK V3 MODULE FIXES" -Css $moduleCss

Write-Host "Done. Now run: npm run build" -ForegroundColor Green
Write-Host "Video page: /videos" -ForegroundColor Green
Write-Host "Marketing assets page: /marketing-assets" -ForegroundColor Green
Write-Host "Pin PNG direct folder: /pins" -ForegroundColor Green
Write-Host "Canva blueprint direct file: /marketing-assets/canva-design-blueprint.md" -ForegroundColor Green
