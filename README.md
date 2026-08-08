# Marghera Venice Apartments — Sprint 1 corretto

## Avvio

```bash
npm install
npm run dev
```

Apri poi `http://localhost:3000`.

Questa versione include la configurazione completa di Tailwind CSS. La versione precedente non compilava le classi grafiche, perciò il browser mostrava immagini e icone senza layout.


Aggiornamento Sprint 1.2:
- rimosse le icone incorporate dalle immagini Pet & Family;
- eliminate le scritte dalle immagini del Journal;
- immagini del Journal ricampionate per una resa più pulita;
- mappa ridisegnata come cartina illustrata con costa, laguna, Lido, Pellestrina e principali destinazioni.

## Aggiornamento Sprint 1.3

- Inserita nella Home la nuova mappa illustrata in stile acquerello.
- La mappa mostra Marghera come punto di partenza e include Venezia, Mestre,
  Riviera del Brenta, Padova, Verona, Valdobbiadene, Treviso, Jesolo,
  Lido di Venezia, Pellestrina e Chioggia.
- L'immagine è stata ottimizzata in formato WebP per il caricamento sul sito.

## Sprint 2

- Home rifinita con collegamenti reali alle pagine interne.
- Header responsive con menu mobile.
- Footer definitivo con contatti e CIN.
- Creata la pagina completa di Rossi Apartment:
  hero, breadcrumb, galleria, servizi, Pet & Family, collegamenti H24,
  contatti diretti e CIN.

## Sprint 2 Premium

- valorizzati gli oltre 100 m² di Rossi Apartment;
- aggiunta la terrazza come area fumatori esterna;
- nuova sezione “Perché scegliere Rossi Apartment”;
- nuova timeline “Una giornata tipo”;
- servizi aggiornati con superficie e area fumatori.

## Sprint 3

- creata la pagina completa di Dimora Castelli;
- valorizzati circa 60 m², piano terra rialzato e accesso comodo;
- inseriti giardino condominiale, finestre sul verde e zanzariere;
- descritti aria condizionata centralizzata e pompa di calore;
- aggiunte sezioni “Perché sceglierla”, “Ideale per” e “Una giornata tipo”;
- raccontato l'edificio storico in chiave architettonica e culturale;
- collegata la card di Dimora Castelli dalla Home;
- aggiunti contatti e CIN dedicati.

## Sprint 4

- creata la pagina `/scopri-venezia`;
- Hero immersiva e breadcrumb;
- percorso Marghera–Venezia con collegamenti H24;
- itinerario “Venezia in un giorno”;
- consigli di Marghera Venice Apartments;
- mappa illustrata di Venezia e della laguna;
- sezioni Venezia con bambini e Pet Friendly;
- focus su Murano, Burano e Lido;
- CTA verso Scopri il Veneto e le due case;
- metadata Open Graph e dati strutturati TouristDestination;
- collegamenti aggiornati dalla Home e dall’Header.

## Sprint 4.1

- sostituita la Hero con una fotografia di Venezia più nitida;
- sostituita l'immagine “Venezia con bambini” con bambini che giocano a pallone in un campo veneziano;
- sostituita la mappa SVG con una mappa illustrata più leggibile e riconoscibile;
- aggiornati testi alternativi e dimensioni delle immagini.

## Sprint 4.2

- nuova Hero panoramica del Bacino di San Marco;
- nuova immagine dedicata alla sezione “Venezia con bambini”;
- nuova mappa vettoriale SVG con forma più riconoscibile di Venezia;
- etichette della mappa completamente vettoriali e nitide;
- ridimensionata la fotografia dei bambini per evitare perdita di qualità.

## Sprint 4.3 — Correzione verificata

La versione precedente conteneva un errore reale: la Hero della pagina
`/scopri-venezia` continuava a puntare a `/images/venezia.webp`.

Correzioni:
- Hero collegata realmente a `bacino-san-marco-hero-v2.webp`;
- nuova foto dei bambini collegata a `bambini-campo-venezia-v2.webp`;
- mappa vettoriale mantenuta in `map-venezia-clean.svg`;
- aggiunti attributi `sizes` alle immagini principali;
- aggiunto `metadataBase`;
- aggiunto identificatore `data-build="sprint4-v4-corrected"` per verificare la build.

## Sprint 4.4 / v5

- nuova foto bambini con soggetti interi e qualità superiore;
- nuova mappa raster illustrata con file e nome completamente nuovi;
- riferimenti aggiornati con filenames univoci per evitare cache;
- build marker aggiornato a `sprint4-v5`.


## Home page — revisione definitiva
- Hero sostituita con foto originale di Vincenzo Landino (Unsplash), senza deformazioni.
- Inserita attribuzione fotografica nella Hero e nell'alt text.
- Culla e lettino sostituiti con le immagini fornite.
- Card “Venezia con bambini” sostituita con la foto del Museo di Storia Naturale.
- Mappa Veneto aggiornata eliminando tutti i tempi di percorrenza.

## Aggiornamento pagina Scopri Venezia

- sostituita la copertina con la foto di Michael Heise;
- aggiunto il credito “Foto di Michael Heise su Unsplash” in piccolo, in basso e in bianco;
- sostituita la foto della sezione “Venezia con bambini”;
- uniformato il credito della foto nella Home rendendolo piccolo, bianco e discreto.

## Revisione completa — aggiornamento Lido

- sostituita l'immagine della card “Lido” nella pagina Scopri Venezia;
- utilizzata la nuova fotografia della spiaggia del Lido;
- immagine ottimizzata in WebP senza modificare il layout;
- build identificata come `revisione-completa-lido-1`.

## Mappe definitive e giardino reale

- sostituita la fotografia provvisoria del parcheggio con il giardino reale di Dimora Castelli;
- inserita nella Home la nuova mappa definitiva del Veneto fornita dalla proprietaria;
- sostituita la mappa di Scopri Venezia con una nuova versione vettoriale corretta;
- corretti nomi e punti d'interesse principali della mappa di Venezia;
- colori della mappa di Venezia armonizzati con blu, crema, oro e terracotta del sito.

## Mappa Venezia finale

- rimossa la precedente mappa vettoriale;
- inserita la nuova mappa illustrata fornita dalla proprietaria;
- mantenute proporzioni e qualità elevate;
- ottimizzata in WebP per il sito.

## Isole finali

- sostituita l'immagine di Murano con la fotografia delle opere in vetro colorato;
- sostituita l'immagine di Burano con la fotografia reale del canale e delle case colorate;
- immagini ottimizzate in WebP;
- mantenuto il layout uniforme delle card.

## Sprint 5 — Scopri il Veneto

- creata la pagina `/scopri-il-veneto`;
- inserita la mappa definitiva del Veneto;
- aggiunti itinerari per Riviera del Brenta, Valdobbiadene, Padova, Treviso, Chioggia/Pellestrina e Verona;
- valorizzati parcheggio privato e posizione strategica di Marghera;
- aggiornati menu e link dalla Home;
- aggiunti metadata SEO e dati strutturati.

## Sprint 5 — fotografie definitive

- nuova copertina con le Colline del Prosecco;
- Riviera del Brenta: nuova fotografia;
- Colline del Prosecco: nuova fotografia;
- Padova: nuova fotografia;
- Treviso: nuova fotografia;
- Chioggia e Pellestrina: nuova fotografia;
- Verona: nuova fotografia;
- immagini ottimizzate in WebP;
- credito Unsplash aggiunto alla copertina.

## Sprint 5 corretto — tutte le immagini

Correzione verificata delle immagini:
- Riviera del Brenta;
- Colline del Prosecco;
- Padova;
- Treviso;
- Chioggia e Pellestrina;
- Verona;
- copertina.

Build marker: `sprint5-corrected-all-images`.

## Sprint 6.1 — Murano

- creata la guida completa `/guide/murano`;
- Hero dedicata e immagine ottimizzata;
- storia, cose da vedere, esperienze e itinerario;
- consigli di Marghera Venice Apartments;
- FAQ e dati strutturati SEO;
- collegamento dalla card Murano in Scopri Venezia;
- aggiunta voce Guide nel menu.

## Sprint 6.2 — Burano e link esterni
- link esterni in nuova scheda;
- guida /guide/burano;
- card Burano collegata.

## Guide hub

- creata la pagina indice `/guide`;
- il menu “Guide” ora apre l’elenco completo;
- aggiunte card per Murano e Burano;
- aggiunto collegamento “Torna alle guide” nelle singole guide.

## Sprint 6.3 — Lido di Venezia

- creata la guida completa `/guide/lido-di-venezia`;
- aggiunta la card Lido nell’indice Guide;
- collegata la card Lido dalla pagina Scopri Venezia;
- aggiunti itinerario, esperienze, FAQ e link esterni in nuova scheda.


## Sprint 6 completo
- 13 guide integrate
- Lido aggiornato con spiagge, ferry, Fusina, Murazzi e Aqua Granda
- Pellestrina e Chioggia separate
- Dolomiti aggiunte a Scopri il Veneto
- Certosa e Sant’Erasmo/Bacan inserite come luoghi del cuore

## Aggiornamento immagini guide

- Dolomiti: nuova fotografia panoramica;
- Isola della Certosa: nuova fotografia reale;
- Sant’Erasmo: nuova fotografia del paesaggio agricolo;
- Pellestrina: nuova fotografia panoramica dell’isola;
- aggiornate anche le card nell’indice Guide;
- aggiunto credito “Foto di Stefano Bazzoli su Unsplash” alla guida Dolomiti.

## Sprint 7 — contenuti mancanti

- creata `/come-raggiungere-venezia`;
- creato l’indice `/journal`;
- creata la pagina `/collaborazioni`;
- aggiornato il menu principale;
- usati link ufficiali ACTV, Venezia Unica, Terminal Fusina e Arriva Veneto;
- nessuna collaborazione commerciale è dichiarata senza accordo reale.

## Sprint 7.1 — Arrivi, mobilità e FAQ

- rinominata e ampliata la pagina pubblica dedicata ad arrivo e mobilità;
- aggiunte indicazioni per raggiungere Rossi Apartment e Dimora Castelli in auto, treno o aereo;
- mantenute fuori dal sito pubblico le istruzioni operative di check-in;
- aggiunta una sezione breve “Come raggiungerci” in entrambe le pagine degli appartamenti;
- inseriti orari indicativi per autobus e treno verso Venezia;
- inserite tariffe indicative, pass e punti di acquisto dei biglietti;
- creata la pagina FAQ completa con check-in, check-out, deposito bagagli, self check-in e parcheggio dopo la partenza.


## Sprint 8 — Journal completo

Creati 13 articoli editoriali:
- /journal/carnevale-di-venezia
- /journal/festa-del-redentore
- /journal/venezia-con-bambini
- /journal/venezia-con-il-cane
- /journal/venezia-quando-piove
- /journal/dove-parcheggiare-venezia
- /journal/mostra-del-cinema
- /journal/biennale-di-venezia
- /journal/natale-capodanno-venezia
- /journal/bacari-e-aperitivi
- /journal/venezia-in-un-giorno
- /journal/venezia-in-due-o-tre-giorni
- /journal/acqua-alta-a-venezia

Principi:
- contenuti evergreen dove possibile;
- date, tariffe e programmi variabili rimandano alle fonti ufficiali;
- link esterni aperti in una nuova scheda;
- collegamenti interni verso guide, mobilità e altri articoli;
- revisione immagini e micro-correzioni rimandata al passaggio finale richiesto.

## Revisione cumulativa pre-Journal

- Home: navigazione, link Journal, immagini, mappa con Dolomiti, scroll Contatti.
- Dimora Castelli: galleria uniformata, nuova foto edificio, testo Città Giardino.
- Scopri Venezia: ACTV, spaziature, contrasto titoli, indicazioni cane/museruola.
- Scopri il Veneto: Dolomiti integrate nello stesso layout e mappa aggiornata.
- Come arrivare: nome ripristinato, RadioTaxi Venezia, gratuità bambini fino al compimento dei 6 anni.
- Appartamenti: CTA verso Come arrivare.
- Guide: contrasto titoli, spaziature ridotte, curiosità di Chioggia corretta.
- Journal: lasciato invariato per la revisione editoriale successiva.

## Revisione Journal — immagini e contenuti

- nuovo testo introduttivo del Journal;
- Redentore: nuova foto in anteprima e copertina + informazioni sulle prenotazioni per assistere ai fuochi;
- Carnevale: nuova foto in anteprima e copertina;
- Venezia con bambini: foto dei bambini che giocano in campo + Museo di Storia Naturale, Sant’Elena e Giardini della Biennale;
- Venezia con il cane: nuova foto + richiamo pratico alla museruola sui mezzi pubblici;
- Mostra del Cinema: nuova foto;
- Biennale: nuova foto;
- Natale e Capodanno: nuova foto + riferimento allo spettacolo pirotecnico di Capodanno nel Bacino di San Marco quando previsto dal programma ufficiale.

## Revisione Journal V2 e link utili

- rimossi: Venezia quando piove, Bacari e aperitivi, Venezia in un giorno, Venezia in 2 o 3 giorni;
- aggiunti: Spritz veneziano, Cicchetti veneziani, Venezia senza far arrabbiare i veneziani;
- approfondito Acqua alta con MOSE e nuova immagine;
- riscritto Dove parcheggiare per visitare Venezia e aggiunte le soluzioni Piazzale Roma/Tronchetto;
- creata la pagina /link-utili, accessibile dal footer;
- uniformata la spaziatura delle voci del menu principale.
