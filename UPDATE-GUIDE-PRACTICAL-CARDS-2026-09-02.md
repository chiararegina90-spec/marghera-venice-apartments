# Guide practical cards update — 2026-09-02

Integrated the existing public pages "Dove mangiare / Where to eat" and "Servizi in zona / Services nearby" into the Guide hub without creating duplicate pages or routes.

## What changed
- Added a reusable `PracticalGuideCards` component.
- Added a dedicated practical-guides section at the top of the Guide hub, before destination guides.
- Added both cards in IT, EN, DE, FR, ES and ZH.
- Kept the original standalone public URLs so they remain linkable from the future private Welcome Book and useful for SEO/internal linking.
- Kept existing footer links unchanged.
- No Guest Area, Meta Pixel, GA4, sitemap or route structure changes.

## Card links
- IT: `/dove-mangiare`, `/servizi-in-zona`
- EN: `/en/where-to-eat`, `/en/services-nearby`
- DE: `/de/where-to-eat`, `/de/services-nearby`
- FR: `/fr/where-to-eat`, `/fr/services-nearby`
- ES: `/es/where-to-eat`, `/es/services-nearby`
- ZH: `/zh/where-to-eat`, `/zh/services-nearby`

## Validation
- Targeted TSX transpile syntax check: PASS.
- All 12 target public routes exist in source.
- Full `next build` could not run locally because the supplied package does not contain a usable local `next` executable (`next: not found`). Vercel production build remains the final validation step.
