# Protected Welcome Books — 2026-09-02

Integrated the approved Rossi Apartment and Dimora Castelli Welcome Books into the Next.js site.

## Guest URLs
- `/guest/rossi`
- `/guest/dimora-castelli`
- language pages: `/it`, `/en`, `/fr`, `/de`, `/es`, `/zh` below each apartment path.

## Access control
Codes are NOT stored in source code. Configure these Vercel environment variables for Production (and Preview if desired):
- `ROSSI_GUEST_CODE`
- `CASTELLI_GUEST_CODE`

The actual access-code values must be stored only in Vercel Environment Variables and must never be committed to the repository.

Authentication is server-side. A successful login stores an HttpOnly + Secure + SameSite=Lax cookie for 30 days. The cookie value is derived from the current code, so changing the Vercel code invalidates previous access cookies automatically.

## Privacy / SEO
- Guest pages remain noindex/nofollow.
- `robots.txt` disallows both `/guest` and `/guest-content`.
- Protected HTML and apartment-specific images are checked in `proxy.ts`.
- Private responses add `X-Robots-Tag` and `Cache-Control: private, no-store`.
- Guest pages are not added to sitemap or public navigation.

## Content integration
- Approved HTML/CSS/images preserved under `public/guest-content`.
- Language-switch links use clean protected URLs (no `.html`).
- Links from translated Welcome Books to the public website now open the matching site language instead of always Italian.
- Legacy `/guest/castelli` redirects to `/guest/dimora-castelli`.

## Deployment order
1. Add the two environment variables in Vercel Project Settings > Environment Variables.
2. Deploy this package.
3. Test wrong code, correct code, six languages, direct deep-link protection, image protection, and code rotation.
