# Aggiornamento guide culturali — 05/09/2026

## Nuove sezioni

Sono state aggiunte due directory culturali complete e multilingua:

- **Musei, monumenti e chiese di Venezia** — 80 luoghi
- **Cultura in Veneto** — 49 luoghi distribuiti nelle 7 province

Lingue: IT, EN, DE, FR, ES, ZH.

La struttura genera 786 nuove URL culturali: 12 pagine indice e 774 pagine dettaglio.

## Navigazione

- Desktop: ricerca, filtri per categoria e griglia di schede.
- Mobile Venezia: categorie a fisarmonica Musei/Fondazioni, Monumenti, Chiese/Basiliche, Panorami/Campanili.
- Mobile Veneto: categorie a fisarmonica per provincia.
- Filtro trasversale family-friendly, senza duplicare le schede.

## Schede dettaglio

Ogni luogo include:

- foto cercata su Wikimedia Commons;
- attribuzione autore/licenza e collegamento alla pagina Commons;
- badge categoria ben visibile sopra la foto;
- durata media;
- prezzo/tipologia di ingresso;
- orari o invito localizzato alla verifica ufficiale quando variabili;
- indicazione di prenotazione;
- famiglie, accessibilità e animali;
- link ufficiale e Google Maps;
- contenuto editoriale SEO;
- FAQ;
- luoghi correlati.

Su mobile il riquadro **Info pratiche** appare immediatamente dopo la foto; su desktop è sticky nella colonna laterale.

## SEO

- metadata localizzati;
- canonical;
- hreflang per le 6 lingue + x-default;
- BreadcrumbList;
- FAQPage;
- TouristAttraction;
- sitemap automatica per indici e schede;
- cambio lingua che conserva la stessa attrazione.

## Integrazione sito

- nuove card nella pagina Guide in tutte le lingue;
- collegamenti nel footer;
- collegamenti nei Welcome Book di Rossi Apartment e Dimora Castelli in tutte le 6 lingue;
- `/guest` resta escluso dalla sitemap e protetto da `noindex`/robots.

## Immagini Wikimedia Commons

Le immagini non vengono duplicate nel repository. Una route interna interroga Wikimedia Commons, preferisce fotografie raster ampie/orizzontali e penalizza mappe, loghi, stemmi, planimetrie, disegni e diagrammi. In assenza di un risultato adatto viene mostrato un placeholder pulito.

## Manutenzione

La directory è data-driven: aggiungendo un nuovo luogo in `data/culturePlaces.ts`, lo stesso sistema può generare automaticamente scheda, traduzioni UI, route, collegamenti e sitemap senza duplicare il layout.
