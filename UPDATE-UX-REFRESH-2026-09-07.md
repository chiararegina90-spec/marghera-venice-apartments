# UX Refresh — 7 settembre 2026

## Obiettivo
Svecchiare e semplificare le famiglie di pagina che risultavano più dense, senza impoverire i contenuti SEO e senza modificare l'architettura URL.

## Interventi
- `Scopri Venezia`: trasformata da pagina-enciclopedia a hub di orientamento, con accessi più chiari a cultura, isole, famiglie, pet, trasporti e Journal.
- `Come raggiungere Venezia`: semplificata la gerarchia tra bus, treno, biglietti, pass, acquisto e FAQ; taxi integrato nei collegamenti invece di un blocco autonomo.
- Rossi Apartment e Dimora Castelli: eliminate sezioni commerciali ridondanti (`Perché sceglierla`, `Ideale per`, `Una giornata tipo`, blocchi finali di collegamento ripetuti); mantenuti i contenuti distintivi.
- Dimora Castelli EN: corretti i residui misti italiano/inglese nella parte introduttiva/accessibilità.
- Guide destinazione: `GuideBody` reso più editoriale, con meno griglie di card e più righe numerate, timeline e FAQ a disclosure.
- Servizi in zona: schede trasformate in righe compatte, pensate soprattutto per uso mobile.
- Parità DE/FR/ES/ZH: aggiornati i template condivisi `LocalizedParityPages` e `LocalizedRich` per riflettere la nuova struttura.

## Cosa NON è stato modificato
- URL pubbliche/canonical/hreflang.
- Dataset cultura (131 luoghi: 82 Venezia + 49 Veneto).
- Home, FAQ e directory cultura, che erano già coerenti con il refactor precedente.
- Area guest e relativi meccanismi di protezione/noindex.

## Validazione locale
- 428 file TS/TSX attivi analizzati con parser TypeScript.
- Errori di parsing: 0.
- Import locali mancanti nei file modificati: 0.
- Ricerca mirata di residui misti italiano/inglese nelle pagine EN modificate: nessun risultato.

## Nota build
Il registro npm non è raggiungibile dall'ambiente locale di verifica; la preview visuale viene quindi compilata su Vercel. La build integrale del repository va comunque eseguita come gate finale prima di promuovere la modifica sul dominio di produzione.
