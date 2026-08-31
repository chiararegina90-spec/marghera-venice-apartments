# Full multilingual repair — 16 August 2026

This build replaces the reduced DE/FR/ES/ZH page architecture with complete multilingual content templates.

## Repaired
- DE / FR / ES / ZH apartment pages: galleries, amenities, parking, transport and contact CTA.
- DE / FR / ES / ZH Discover Venice and Discover Veneto pages: full sections, images and internal links.
- DE / FR / ES / ZH Getting to Venice pages: bus, train, tickets and official links.
- DE / FR / ES / ZH Experiences pages: complete content cards.
- DE / FR / ES / ZH FAQ pages: visible, complete content instead of reduced/blank cards.
- DE / FR / ES / ZH Guide indexes: images, descriptions and links for all 15 guides.
- DE / FR / ES / ZH Journal indexes: images, descriptions and links for all 12 articles.
- FR and ES Journal articles rebuilt with complete translated content.
- DE and ZH Journal articles moved onto the same complete visual article template.
- Pet & Family navigation verified to point to each language home #pet-family section.
- Chinese contact blocks use the WeChat QR card.
- English version checked; mixed Italian strings and alt text found in EN apartment/home pages were corrected.
- hreflang alternate generation retained for rebuilt pages.

## Automated static checks
- 287 TypeScript/TSX files parsed: 0 syntax errors.
- 40 pages per EN/DE/FR/ES/ZH locale.
- 15 guide detail pages per EN/DE/FR/ES/ZH locale.
- 12 Journal article pages per EN/DE/FR/ES/ZH locale.
- 715 local image references checked: 0 missing assets.
- No DE/FR/ES/ZH page still uses the old LocalizedPage reduced wrapper.
- Home anchors #case, #pet-family and #direct-contact verified for EN/DE/FR/ES/ZH.

A full `next build` still requires project dependencies (`node_modules`) to be installed in the deployment environment.
