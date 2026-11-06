# MVA · «Il tuo soggiorno a Venezia» · Piano URL per i 17 capitoli

Data controllo redazionale: **6 novembre 2026**. Manoscritto PDF integrale di lavoro, 141 pagine e 17 capitoli (5 novembre 2026). Questi collegamenti sono URL pubblici stabili già previsti dall'app; **non stampare QR senza un ultimo controllo HTTP 200 sui domini pubblici**. Le traduzioni seguono la funzione `localePath` in `lib/i18n.ts` (IT, EN, DE, FR, ES, ZH), per cui NON anteporre a mano `/en` alle route italiane speciali.

| Cap. | Capitolo | QR principale (italiano) | Link secondari opzionali |
|---|---|---|---|
| 01 | Prima di partire | https://www.margheraveniceapartments.com/come-raggiungere-venezia | https://www.margheraveniceapartments.com/journal/contributo-accesso-venezia |
| 02 | Leggere Venezia | https://www.margheraveniceapartments.com/guide/venezia-nizioleti-calli-sestieri | https://www.margheraveniceapartments.com/guide/venezia-nascosta |
| 03 | Venezia in un giorno | https://www.margheraveniceapartments.com/guide/venezia-in-un-giorno | — |
| 04 | Venezia in due o tre giorni | https://www.margheraveniceapartments.com/guide/venezia-in-due-o-tre-giorni | — |
| 05 | Quattro giorni, una settimana e oltre | https://www.margheraveniceapartments.com/guide/itinerari-venezia-1-7-giorni | https://www.margheraveniceapartments.com/guide/venezia-in-una-settimana · https://www.margheraveniceapartments.com/guide/veneto-in-bicicletta |
| 06 | Le isole della laguna | https://www.margheraveniceapartments.com/guide/torcello | https://www.margheraveniceapartments.com/guide/murano · https://www.margheraveniceapartments.com/guide/burano · https://www.margheraveniceapartments.com/guide/sant-erasmo · https://www.margheraveniceapartments.com/guide/certosa |
| 07 | Venezia al mare | https://www.margheraveniceapartments.com/guide/lido-di-venezia | https://www.margheraveniceapartments.com/guide/pellestrina |
| 08 | Arte e musei | https://www.margheraveniceapartments.com/guide/museum-pass-venezia | https://www.margheraveniceapartments.com/guide/musei-venezia · https://www.margheraveniceapartments.com/guide/musei-venezia/basilica-frari · https://www.margheraveniceapartments.com/guide/musei-venezia/gallerie-dell-accademia · https://www.margheraveniceapartments.com/guide/musei-venezia/m9-museo-del-900 · https://www.margheraveniceapartments.com/guide/musei-venezia/muvec-mestre |
| 09 | Gondole e traghetti | https://www.margheraveniceapartments.com/guide/gondola-tour-venezia | — |
| 10 | Venezia da gustare | https://www.margheraveniceapartments.com/guide/cosa-mangiare-a-venezia | https://www.margheraveniceapartments.com/journal/cicchetti-veneziani · https://www.margheraveniceapartments.com/journal/spritz-veneziano |
| 11 | Comprare bene | https://www.margheraveniceapartments.com/guide/acquisti-autentici-venezia | — |
| 12 | A Venezia si mangia bene. Basta sapere dove! | https://www.margheraveniceapartments.com/guide/mangiare-a-venezia-senza-sorprese | https://www.margheraveniceapartments.com/dove-mangiare |
| 13 | Sopravvivere a Venezia | https://www.margheraveniceapartments.com/journal/buone-maniere-a-venezia | — |
| 14 | Venezia per tutti | https://www.margheraveniceapartments.com/guide/venezia-accessibile | https://www.margheraveniceapartments.com/journal/venezia-con-bambini · https://www.margheraveniceapartments.com/journal/venezia-con-il-cane |
| 15 | Venezia da fotografare | https://www.margheraveniceapartments.com/guide/venezia-da-fotografare | — |
| 16 | Venezia con qualsiasi tempo | https://www.margheraveniceapartments.com/guide/venezia-con-qualsiasi-tempo | https://www.margheraveniceapartments.com/journal/acqua-alta-a-venezia |
| 17 | Parole veneziane che non si traducono | https://www.margheraveniceapartments.com/guide/parole-veneziane-glossario | — |

## Regole per la stampa

- Un solo QR principale per capitolo, se possibile: evita troppe immagini e scansioni superflue; i link secondari restano nella pagina MVA.
- I QR devono puntare al dominio canonico `www.margheraveniceapartments.com`, non a shortener, preview Vercel o Welcome Book protetti da password.
- Il libro è in italiano: partire dagli URL italiani e offrire la scelta lingua sul sito; per eventuali edizioni straniere creare QR con `localePath`.
- Inserire un controllo manuale 200/301, canonical, hreflang e navigazione mobile sui 17 URL prima di mandare Amazon KDP in stampa. Non sono immagini QR: il file è solo il registro editoriale.
- Rivedere da fonte primaria biglietti, orari, accessibilità, tratte ACTV e mostre periodicamente. La data di verifica va aggiornata solo dopo un controllo reale.
- Le principali pagine d'approfondimento erano già pubblicate prima di questo pacchetto; la correzione dei Frari, i chiarimenti M9/MUVEC/Peggy/Accademia e la nota Torcello ampliano quelle pagine senza cambiare slug.
