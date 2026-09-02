# Micro patch — 2026-09-02

Changes:
- `localePath()` now translates mapped route prefixes, not only exact paths. This fixes language-switcher and sitemap hreflang URLs for nested Experiences pages such as Row Venice.
- `robots.txt` blocks `/guest` (covering both `/guest` and all descendants).
- Removed the global explicit `robots: index, follow` metadata. Normal pages remain indexable by default, while Next.js can inject `noindex` for genuine 404 responses instead of inheriting an explicit global `index, follow`.

No content, Meta Pixel, GA4, consent, Journal, Guest content, images or public route content was changed.
