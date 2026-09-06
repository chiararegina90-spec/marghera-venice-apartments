# Primo giro immagini — 6 settembre 2026

## Obiettivo
Completare le sezioni editoriali che risultavano visivamente prive di fotografia, mantenere coerente il contesto delle immagini e centralizzare i crediti nel link "Crediti immagini" del footer.

## Interventi
- aggiunte fotografie Unsplash alle categorie Esperienze ancora prive di immagine: transfer/NCC, guide turistiche, gondole/barche, biciclette, ristorazione;
- applicate le stesse immagini e traduzioni ALT alle versioni DE, FR, ES e ZH;
- completate le tre card iniziali di Scopri Venezia nelle versioni DE, FR, ES e ZH; per i quartieri più tranquilli è stata aggiunta una fotografia veneziana dedicata;
- aggiunto un punto focale `objectPosition` alle nuove immagini per evitare crop casuali del soggetto;
- esteso il componente delle card localizzate per supportare un focal point per immagine;
- creata una sezione statica Unsplash nella pagina Crediti immagini con autore, fonte, licenza, uso nel sito e link alla fotografia originale;
- mantenuta separata la gestione dinamica dei crediti Wikimedia Commons;
- configurato Next Image per `images.unsplash.com`.

## Controlli
- riferimenti locali `/images/...`: 121 unici, 0 mancanti;
- le card rimaste senza fotografie sono esclusivamente FAQ/informazioni pratiche e restano intenzionalmente testuali;
- parsing sintattico TypeScript/TSX dei file modificati: OK;
- build completa non eseguita in locale perché il pacchetto ricevuto non contiene le dipendenze reali di Next/React (`node_modules` è una copia del progetto, non un'installazione npm).
