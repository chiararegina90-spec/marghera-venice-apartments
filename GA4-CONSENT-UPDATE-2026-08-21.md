# GA4 + consent update — 21 August 2026

- Google Analytics 4 Measurement ID: G-W2HWSG9YG1
- Analytics loads only after explicit consent (Basic Consent Mode v2 approach).
- Consent defaults: analytics_storage denied; ad_storage, ad_user_data and ad_personalization denied.
- Advertising storage/personalisation remains disabled even after Analytics consent.
- Consent choice is stored locally in the browser and can be reopened from the footer.
- Rejection keeps GA4 disabled and removes existing _ga cookies when possible.
- Automatic page_view tracking for Next.js route changes after consent.
- Custom events after consent: whatsapp_click and email_click.
- Cookie Policy and Privacy Policy updated in IT/EN/DE/FR/ES/ZH.
- Static TS/TSX syntax parse: 289 files, 0 syntax errors.
- Full local Next.js build was not run because the extracted artifact did not include usable installed dependencies; Vercel production build remains the final deployment validation step.
