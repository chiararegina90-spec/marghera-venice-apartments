# Welcome Books — protected images session migration fix

Date: 2026-09-02

## Fixes
- Automatically promotes any valid legacy guest session cookie from the old `/guest` scope to `Path=/` when visiting either apartment guest landing page.
- Refreshes the root-scoped cookie again on authenticated language routes before the browser requests protected `/guest-content/...` images.
- Applies to both Rossi Apartment and Dimora Castelli.
- Keeps protected image requests behind the same server-side guest authentication.
- Keeps `HttpOnly`, `Secure`, `SameSite=Lax`, 30-day lifetime, noindex/noarchive headers and private/no-store behavior.
- Normalized `public/guest-content/assets/rossi/dishwasher.png` so its actual file format is PNG, matching its extension/MIME type.
- CH label remains visible for Chinese; technical locale remains `zh` / `zh-CN`.
