# Public Content Integration — 2026-09-02

Baseline: latest Marghera Venice Apartments package with Meta Pixel, Venice Glass Week, public Food/Services pages and Guest scaffold.

## Integrated public content

### Journal
- Venezia con bambini: added practical family stops, Natural History Museum, workshops, stroller/carrier and hydration tips, Parco San Giuliano and optional Parco Natura Viva day trip.
- Venezia con il cane: added heat/water guidance, quieter routes, general ACTV pet guidance, pet-friendly positioning and link to Servizi in zona.
- Venezia senza far arrabbiare i veneziani: expanded etiquette and anti-pickpocket practical advice while preserving the light educational tone.
- Dove parcheggiare per visitare Venezia: strengthened Marghera/base positioning, bus/train alternative, Piazzale Roma, Autorimessa Comunale, Garage San Marco, Tronchetto, convenience/cost comparison and CTAs.
- Cicchetti veneziani: added bacaro context, when/how to eat cicchetti, pairings and link to Dove mangiare.
- Lo Spritz veneziano: added aperitivo culture, Spritz vs aperitivo, cicchetti pairing and cross-links.

### Guides
- Riviera del Brenta: Villa Foscari La Malcontenta, Villa Widmann, Villa Pisani, cycling, Il Burchiello and historical context.
- Lido di Venezia: ACTV access, pass guidance, summer weekend and family tips.
- Jesolo / Pellestrina / Chioggia: useful beach/day-trip information distributed into the existing guides; no duplicate generic “day at the beach” article created.

### Discover Veneto
- Added “Città d’arte raggiungibili in treno” with Padova, Treviso and Verona, indicative travel times, key attractions, reasons to visit, internal guide links and Trenitalia link.

### Dove mangiare / Servizi in zona
- Public card wording neutralized so the same pages can be used by both Rossi Apartment and Dimora Castelli.
- No apartment-specific walking distances in public cards.
- Added food cross-links to Cicchetti and Spritz.
- Services include pet shop/groomer, veterinary clinic, sports including Golf Club Venezia, health, shopping and practical services.
- Removed malformed/legacy Google Maps link patterns.

## Multilingual
All additions are available in IT, EN, DE, FR, ES and ZH, preserving the existing routing/design system and shared components where appropriate.

## Guest privacy
- `/guest/...`: `noindex`, `nofollow`, `nocache`, Google `noimageindex`.
- `/guest/` disallowed in robots.txt.
- Guest routes excluded from sitemap.
- No public navigation links to `/guest`.

## Static audit
- TypeScript/TSX parse: 659 files, 0 syntax errors.
- Routes: 291 total = 276 public + 15 guest.
- Sitemap: 276 public routes, 0 missing, 0 extra.
- Literal internal href destinations checked: 248, 0 broken.
- Referenced local images: 70 unique, 0 missing.
- Focused translation-residue scan on modified DE/FR/ES/ZH data: 0 flags.
- Legacy malformed map-link patterns: 0.

## Build note
A full `next build` was not used as the final verification in this local package because the supplied local dependency tree is incomplete. Vercel production build remains the authoritative compile/deploy check.
