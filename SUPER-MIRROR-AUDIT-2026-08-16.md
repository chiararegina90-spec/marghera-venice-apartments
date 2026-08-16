# SUPER MIRROR AUDIT — 16/08/2026

Audit strutturale e grafico statico di Marghera Venice Apartments dopo il riallineamento multilingua.

## Lingue e route
- Italiano: 40 pagine
- English: 40 pagine
- Deutsch: 40 pagine
- Français: 40 pagine
- Español: 40 pagine
- 中文: 40 pagine
- Totale: 240 pagine

## Correzioni di questa revisione
- Ripristinata la foto originale con cartello VENEZIA come hero di “Come arrivare” in tutte le 6 lingue.
- Hero “Come arrivare” uniformata con `object-cover object-top` e stesso asset in tutte le lingue.
- Rafforzata la protezione da sovrapposizioni/overflow dei testi lunghi (DE/FR/ES/ZH): wrapping, text balance, pulsanti multilinea, breakpoint header più sicuro.
- FAQ: eliminato il vecchio `float-right` del simbolo +; ora domanda e icona usano flex e non possono sovrapporsi.
- Guide: template a 10 sezioni uniformato fra IT/EN/DE/FR/ES/ZH.
- Guide localizzate: normalizzati 6 highlights, 6 esperienze, 4 FAQ, 3 guide correlate e link ufficiali.
- Aggiunti i 5 dataset italiani mancanti: Murano, Burano, Lido di Venezia, Jesolo, Veneto in bicicletta. Ora 15/15 guide in ogni lingua.
- Immagini hero delle 15 guide verificate: identiche per slug in tutte le lingue.
- Journal: 12 articoli per lingua; numero di sezioni normalizzato allo stesso articolo IT/EN, immagini identiche per slug e box link/fonti riallineati.
- Link utili DE/FR/ES/ZH: portati allo stesso schema EN con 4 gruppi e lo stesso set di risorse principali.
- Header: wordmark esteso mostrato solo su desktop molto largo, per evitare collisioni con menu tedeschi/francesi/spagnoli.
- Home: 8 sezioni e set immagini coerente in tutte le lingue; anchor Case, Pet & Family e contatto presenti ovunque.

## Controlli automatici finali
- 240 pagine rilevate.
- 40 pagine per ciascuna lingua.
- 0 errori di parsing TypeScript/TSX.
- 0 immagini locali referenziate ma mancanti.
- 0 componenti Next Image senza attributo `alt`.
- 0 link `target="_blank"` privi di `noopener noreferrer`.
- 0 link interni letterali verso route inesistenti.
- 0 pagine senza metadata.
- 0 pagine senza alternates/hreflang.
- 0 pagine senza Open Graph/Twitter metadata.
- 0 route attive che importano i vecchi template ridotti LocalizedPage/LocalizedPageZh.
- 15 guide EN/DE/FR/ES/ZH e 15 guide IT.
- 12 articoli Journal per ogni lingua.
- Hero “Come arrivare”: stesso file in IT/EN/DE/FR/ES/ZH.
- Immagini Journal: stesso file per articolo in tutte le lingue.
- Immagini Guide: stesso file per guida in tutte le lingue.

## Nota build
Non è stato possibile eseguire `next build` nel container di audit perché il progetto non include `node_modules` e l'ambiente non riesce a completare l'installazione npm. È stato però eseguito il parsing di tutti i file TS/TSX con TypeScript, oltre ai controlli statici sopra. Il precedente errore Vercel TS2802 (`Set`) rimane corretto tramite `Array.from(new Set(...))`.
