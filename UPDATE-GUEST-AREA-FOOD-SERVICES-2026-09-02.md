# Update 2026-09-02 — Guest scaffold + public local pages

- Added public “Dove mangiare” and “Servizi in zona” pages, localized in IT/EN/DE/FR/ES/ZH.
- Food/service seed data derives from the Rossi Apartment Notion Welcome Book supplied by the owner; unsupported vet/pet-shop entries are intentionally marked as being reviewed rather than invented.
- Added `/guest`, `/guest/rossi`, `/guest/castelli` and six language routes for each apartment.
- Guest pages are `noindex`, `nofollow`, `nocache`, excluded from sitemap, not linked from public navigation, and disallowed in robots.txt.
- Guest language selection is saved in localStorage and reused on later visits to the apartment chooser.
- Guest language pages are placeholders only; no private Wi-Fi or operational content has been published yet.
- Added public page links to the footer and locale-switch mappings.
