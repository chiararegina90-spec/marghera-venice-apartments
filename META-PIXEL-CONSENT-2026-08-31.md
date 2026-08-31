# Meta Pixel e consenso — 31 agosto 2026

## Configurazione

- Dataset / Meta Pixel: `Marghera Venice Apartments – Website`
- Pixel ID: `915955927794487`
- Google Analytics 4: `G-W2HWSG9YG1`
- Conversions API: non attivata in questa fase

## Comportamento del consenso

- GA4 e Meta Pixel non vengono scaricati prima del rispettivo consenso.
- Il banner offre Accetta tutto, Rifiuta non necessari e Personalizza.
- Analytics e Marketing possono essere scelti separatamente.
- Il link Preferenze cookie nel footer riapre le scelte in tutte le lingue.
- La revoca interrompe i nuovi eventi e rimuove i cookie GA/Meta accessibili dal dominio.
- La nuova versione del consenso usa la chiave locale `mva-cookie-consent-v3`, quindi richiede una nuova scelta anche ai visitatori che avevano risposto al vecchio banner Analytics.

## Eventi

- `PageView`: pagine visitate.
- `ViewContent`: pagine degli appartamenti e singoli articoli Journal.
- `Contact`: clic su WhatsApp, email o telefono.
- Non vengono inviati eventi `Lead`, `Purchase` o `Booking` senza una conferma reale.

## Informative

Cookie Policy e Privacy Policy sono state aggiornate in IT, EN, DE, FR, ES e ZH con finalità, provider, identificatori, eventi e modalità di revoca.

## Verifica tecnica

- `npm run build`: completato con successo.
- TypeScript: nessun errore.
- 266 pagine generate.
- Audit dipendenze: 0 vulnerabilità.
