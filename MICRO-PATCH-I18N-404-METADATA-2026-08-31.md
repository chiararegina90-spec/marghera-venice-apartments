# Micro patch — 31/08/2026

Changes only:
1. Localized 404 page in IT, EN, DE, FR, ES and ZH, using `x-site-lang` from the existing proxy. Header, footer and return-home link follow the detected language.
2. Removed the legacy global `meta keywords` tag from `app/layout.tsx`. Search-relevant title, description, canonical, hreflang, Open Graph and robots metadata are unchanged.

No Journal content, routes, images, event dates, GA4 code, cookie consent, contacts, sitemap logic or other site content was changed.
