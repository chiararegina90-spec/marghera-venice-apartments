# Final pre-domain audit — 18 August 2026

## Corrections in this pass
- Visible Chinese language selector changed from `ZH` to `CH`; technical locale remains `zh` / `zh-CN` for routes, hreflang and SEO.
- Chinese footer `Journal` translated to `旅行日志`.
- Chinese Journal article breadcrumb `Journal` translated to `旅行日志`.
- Chinese Home location label updated to `Marghera · 威尼斯` and guide badges to `Marghera / 威尼斯`.
- Residual localized UI strings cleaned up (pet/family labels, travel label, selected guide labels and photo-credit labels).
- German guide index action wording normalized.
- Journal official-source links normalized across DE/FR/ES/ZH so localized articles expose the same official-reference functionality.
- Long-title safeguards retained/strengthened: responsive heading sizing, wrapping, flex-wrap CTAs/breadcrumbs and global overflow-wrap rules to prevent translated text collisions/overlay.

## Structural parity checks
- 240 page routes total.
- 40 routes for each language: IT / EN / DE / FR / ES / ZH.
- Sitemap: 240 unique entries, exact match with the 240 real routes.
- 15 guides per language.
- 12 Journal articles per language.
- Home pages: 8 sections in every language.
- Guide pages use mirrored shared layouts.
- Localized Journal pages use a shared layout with section-count parity based on the Italian reference.

## Link and media checks
- 544 literal internal navigation links checked: 0 missing route targets.
- 0 doubled locale routes such as `/zh/zh/...`.
- 0 unsafe `_blank` links without `noopener`.
- 0 missing referenced local images in the static image audit.
- 0 Next `<Image>` tags without `alt` in the static audit.
- `Come arrivare / Getting to Venice` uses the same recovered original Venezia road-sign hero across all languages.

## Code check
- 288 TypeScript/TSX files transpile with 0 syntax diagnostics in the local static syntax pass.
- The previous production deployment on Vercel was READY before this final text/UI cleanup. This package must receive its own Vercel build after push to GitHub.
