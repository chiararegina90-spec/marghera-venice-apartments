# Technical audit — 16 August 2026

Corrections completed without changing the normal visual design or adding Journal/Guide articles.

- Fixed home/menu anchor navigation in all six languages.
- Fixed sitemap coverage: 240 page routes / 240 sitemap routes.
- Removed misleading dynamic `lastModified` timestamps from the sitemap and aligned route priorities across locales.
- Normalized localized metadata titles to prevent duplicated brand names.
- Ensured page-level Open Graph and Twitter image metadata across all pages.
- Replaced provisional Privacy/Cookie copy in all six languages with content matching the current site configuration.
- Added `manifest.ts` and a real `not-found.tsx` page.
- Replaced year-specific external timetable/event links with stable official destination pages where appropriate.
- Optimized the source logo PNG and WeChat QR PNG without changing their displayed design.
- Static validation: no missing local image files, no Next Image without alt text, no unsafe target=_blank links, no TODO/FIXME/pre-launch placeholders.

## Build note
A full `next build` could not be executed in the audit environment because the uploaded archive does not include `node_modules` and the environment cannot retrieve the missing npm packages. TypeScript parsing was checked; after the fixes no syntax/parse-class TypeScript errors remain. A final `npm install && npm run build` should be run in the deployment environment.
