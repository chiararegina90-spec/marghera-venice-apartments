# Image replacement package — 8 September 2026

This package starts from commit `9f804cc92ed7ca82cdc6c8846c12f83cb3956fa5` and preserves the UX refresh already present in the uploaded project.

## Journal 2026 — approved card / cover images
- Venicemarathon 2026
- Veleziana 2026
- Venice Cocktail Week 2026
- Venice Fashion Week 2026
- Venice Hospitality Challenge 2026
- Venice Design Week 2026
- Biennale Musica 2026
- Salone dell’Alto Artigianato Italiano 2026
- Venice Noir 2026

All nine event families now use the uploaded local images instead of Wikimedia/Commons for both Journal cards and article hero covers, across all six languages. The local images are also used by event metadata through the shared event dataset. Event URLs are included dynamically in the sitemap.

## Guide / Culture — approved local card / cover images
- Gallerie dell’Accademia
- Museo Fortuny
- Museo d’Arte Orientale
- Museo del Vetro di Murano
- MUVEC – Casa delle Contemporaneità
- Museo Storico Navale
- Museo e Ghetto Ebraico
- Querini Stampalia
- Punta della Dogana
- Fondazione Giorgio Cini
- Fondazione Emilio Vedova
- Scuola Grande di San Rocco
- Casa Museo Andrich
- Biennale di Venezia – Arsenale
- Fondazione Ugo e Olga Levi
- Ca’ Foscari
- Torre dell’Orologio
- Campanile di San Marco
- Torre Civica di Mestre
- Abbazia / San Giorgio Maggiore
- Chiesa di Santo Stefano
- Chiesa di San Giacomo dell’Orio
- Complesso dell’Ospedaletto
- Chiesa delle Penitenti

For these destinations the directory card uses the approved card image and the detail-page hero uses the approved cover image. Wikimedia remains only as a fallback system for destinations that have not yet received a local approved pair.

## Intentionally not changed
- Island-guide issues mentioned for the next session are not altered in this package.
- Existing URL architecture, canonical/hreflang structure, guest area and noindex protections are preserved.

## Validation
- 447 TS/TSX files enumerated.
- 0 TypeScript/TSX parse errors (excluding `next-env.d.ts`, which is declaration-only and cannot be transpiled by `transpileModule`).
- 0 missing local imports in modified files.
- 48 local Culture images and 18 local Journal-event images generated as optimized WebP files.
- Full Next.js build was not executed in this environment because npm dependency installation could not complete; Vercel Preview remains the final integration/build gate before approval.
