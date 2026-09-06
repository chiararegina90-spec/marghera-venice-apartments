# Super refactor sito — 6 settembre 2026

Aggiornamento generale di coerenza editoriale, UX mobile e architettura dei contenuti.

## Principali interventi
- Nuovo standard tipografico globale: H1/H2/H3, lead, numerazioni editoriali, card e spaziature più equilibrate soprattutto su mobile.
- Hero editoriali uniformate per Guide, Journal/eventi e schede culturali, con immagine integrata e protezione del contrasto del testo quando necessaria.
- Guide di destinazione riorganizzate per ridurre ripetizioni fra “cosa vedere” e itinerari e aumentare il contenuto editoriale.
- Hub Guide, Scopri Venezia e Scopri il Veneto riorganizzati per dare maggiore visibilità alle directory culturali senza duplicare le pagine SEO.
- Directory culturale ampliata a 131 luoghi: 82 a Venezia e 49 nel Veneto.
- Schede cultura con hero fotografica, info pratiche e narrazione più coerente per tipo di luogo.
- Journal: gerarchia visiva e leggibilità migliorate; filtri/categorie più chiari.
- Footer alleggerito e navigazione superiore raggruppata per aree logiche.
- Welcome Book: bandiera cinese, Maps corretti per Rossi Apartment e Dimora Castelli, navigazione mobile compatta con menu rapido e sezioni richiudibili.
- Crediti Wikimedia rimossi dalla superficie delle foto e spostati nella gestione/pagina dedicata.
- Correzioni linguistiche e di parità fra IT/EN/DE/FR/ES/ZH.
- Aggiornamento editoriale della Mostra del Cinema 2026 con informazioni correnti verificate durante il refactor.

## Note tecniche
- Non includere `node_modules` nel deploy: Vercel deve installare le dipendenze da `package-lock.json`.
- I Welcome Book restano protetti, `noindex` e serviti tramite rewrite autenticato ai file statici in `public/guest-content`.
