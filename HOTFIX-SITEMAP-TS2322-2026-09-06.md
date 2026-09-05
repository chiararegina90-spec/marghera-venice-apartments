# Hotfix sitemap TypeScript TS2322 — 2026-09-06

Vercel compiled the production bundle successfully, then TypeScript stopped at `app/sitemap.ts` because `changeFrequency` in the pre-existing routes array was inferred as a generic `string` before being concatenated with the typed cultural sitemap entries.

Fix applied:
- `existing` is explicitly typed as `MetadataRoute.Sitemap`.
- `changeFrequency` uses literal values (`'weekly' as const` / `'monthly' as const`).

This does not change sitemap URLs or SEO behavior; it only makes the type inference compatible with Next.js `MetadataRoute.Sitemap`.
