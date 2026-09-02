# Welcome Books — red build fix

Vercel build failed because legacy `app/guest/castelli/page.tsx` remained in the GitHub repository after the browser upload and still passed `apartment="castelli"`, while `GuestApartment` now accepts only `rossi | dimora-castelli`.

This package explicitly overwrites the legacy Castelli routes with redirects to the new protected routes:

- `/guest/castelli` -> `/guest/dimora-castelli`
- `/guest/castelli/{it,en,de,fr,es,zh}` -> `/guest/dimora-castelli/{lang}`

No auth codes are included in the source.
