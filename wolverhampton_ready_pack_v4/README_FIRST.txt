Wolverhampton Ready Pack v4

Unzip this folder inside the root of your Next.js project.

Expected structure:
wolverhampton-plumber/
  app/
  public/
  package.json
  wolverhampton_ready_pack_v4/
    wolverhampton_ready_pack_v4/
      scripts/apply-ready-pack-v4.ps1

Run from the project root:
powershell -ExecutionPolicy Bypass -File .\wolverhampton_ready_pack_v4\wolverhampton_ready_pack_v4\scriptspply-ready-pack-v4.ps1

Then:
npm run build

Pages added/updated:
/videos
/marketing-assets  (private noindex page for pins, Canva SVG sources, upload metadata and video links)

Fix included:
Removes the weird emoji/mojibake checklist bullet and replaces it with a clean gold dot.
