import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'Come arrivare | Marghera Venice Apartments',
  description:'Come raggiungere Rossi Apartment e Dimora Castelli in auto, treno o aereo e come andare a Venezia da Marghera con autobus, tram e treno.',
  openGraph:{
    title:'Come arrivare e come raggiungere Venezia',
    description:'Indicazioni chiare per pianificare il viaggio verso gli appartamenti e gli spostamenti a Venezia.',
    images:['/images/come-arrivare-hero-originale.webp']
  },
  alternates:{canonical:'/come-raggiungere-venezia',languages:{'it-IT':'/come-raggiungere-venezia','en-GB':'/en/getting-to-venice','de-DE':'/de/getting-to-venice','fr-FR':'/fr/getting-to-venice','es-ES':'/es/getting-to-venice','zh-CN':'/zh/getting-to-venice','x-default':'/come-raggiungere-venezia'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const veneziaOptions = [
  {
    title:'Autobus – consigliato',
    text:'La fermata Sant’Antonio Municipio è il riferimento principale per raggiungere Venezia – Piazzale Roma. Sono presenti collegamenti diurni e notturni.',
    rows:[
      ['Di giorno','Linee 6 e 6L','direzione Venezia – Piazzale Roma'],
      ['Sera','Linea 6','verifica la corsa nell’app AVM Venezia Official'],
      ['Notte','Linea N2','collegamento notturno via Sant’Antonio Municipio'],
    ]
  },
  {
    title:'Treno',
    text:'La stazione ferroviaria di Venezia Mestre è raggiungibile a piedi dagli appartamenti. I treni regionali arrivano a Venezia Santa Lucia.',
    rows:[
      ['Durante il giorno','Treni regionali','corse frequenti'],
      ['In serata','Venezia Santa Lucia','verificare l’ultima corsa'],
    ]
  }
];

const ticketCards = [
  ['Treno','da € 1,50','Venezia Mestre → Venezia Santa Lucia; verifica la corsa scelta'],
  ['Autobus','€ 1,50','a persona, a tratta'],
  ['Rete unica ACTV','€ 9,50','75 minuti: include anche la navigazione urbana ACTV'],
];

const passes = [
  ['24 ore','€ 25,00'],
  ['2 giorni','€ 35,00'],
  ['3 giorni','€ 45,00'],
  ['Young 3 giorni','€ 33,00 – Rolling Venice + ACTV 72h, per giovani 6-29 anni secondo condizioni'],
];

const faq = [
  ['Qual è il modo più semplice per arrivare a Venezia?','Per la maggior parte degli ospiti l’autobus diretto verso Piazzale Roma è la soluzione più semplice perché evita parcheggi e cambi.'],
  ['I collegamenti funzionano anche di notte?','Sì, è presente un servizio notturno. Orari e frequenze vanno verificati sul sito ACTV per il giorno della visita.'],
  ['Conviene usare l’auto per Venezia?','Di solito no. Il parcheggio privato degli appartamenti permette di lasciare l’auto a Marghera e usare autobus o treno.'],
  ['Autobus e vaporetto usano lo stesso biglietto?','Dipende dal titolo acquistato. I pass turistici possono includere autobus, tram e navigazione; verifica sempre la validità del biglietto scelto.'],
  ['I bambini viaggiano gratis?','Sì. I bambini fino al compimento dei 6 anni, quindi fino a 5 anni compiuti, viaggiano gratuitamente sui servizi urbani del Comune di Venezia. Dal compimento dei 6 anni è necessario il titolo di viaggio.'],
];

export default function Mobilita(){
  return <><Header/><main>
    <section className="relative min-h-[80vh] overflow-hidden pt-20">
      <Image src="/images/come-arrivare-hero-originale.webp" alt="Autobus e mezzi pubblici per raggiungere Venezia da Marghera" fill priority sizes="100vw" className="object-cover object-top"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(80vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">Come arrivare</span></nav>
          <p className="text-xs font-black uppercase tracking-[.24em] text-gold">Pianifica il viaggio con tranquillità</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Come arrivare</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/80">Parti dall’alloggio per progettare il viaggio: scopri come raggiungere gli appartamenti in auto, treno o aereo e come muoverti comodamente verso Venezia.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appartamenti" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Come arrivare agli appartamenti</a>
            <a href="#venezia" className="rounded-full border border-white/50 px-7 py-4 font-bold">Come arrivare a Venezia</a>
          </div>
        </div>
      </div>
    </section>

    <section id="appartamenti" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Prima della prenotazione" title="Raggiungere gli appartamenti è semplice" text="Le informazioni operative di check-in restano riservate agli ospiti prenotati. Qui trovi ciò che serve per pianificare il viaggio."/>
        <div className="grid gap-7 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Via Cesare Rossarol 32</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Rossi Apartment</h2>
            <div className="mt-7 space-y-6 text-slate-600">
              <div><h3 className="font-serif text-2xl text-navy">🚗 In auto</h3><p className="mt-2">Parcheggio gratuito e riservato all’interno del giardino condominiale recintato.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">🚆 Dalla stazione di Venezia Mestre</h3><p className="mt-2">Puoi arrivare in taxi, con il tram T2 in direzione Marghera scendendo a Sant’Antonio, oppure a piedi attraverso l’uscita Marghera – Via Ulloa.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">✈️ Dall’aeroporto Marco Polo</h3><p className="mt-2">Puoi utilizzare taxi oppure autobus ACTV/ATVO fino alla stazione di Venezia Mestre e proseguire verso l’appartamento.</p></div>
            </div>
            <a href="https://maps.app.goo.gl/RsR3uoKtqtVDwgcN6" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-4 font-bold text-white">Apri su Google Maps ↗</a>
          </article>

          <article className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Via Jacopo Castelli 22</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Dimora Castelli</h2>
            <div className="mt-7 space-y-6 text-slate-600">
              <div><h3 className="font-serif text-2xl text-navy">🚗 In auto</h3><p className="mt-2">Parcheggio gratuito all’interno della proprietà. In caso di più auto è normalmente possibile trovare parcheggio gratuito anche in strada.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">🚆 Dalla stazione di Venezia Mestre</h3><p className="mt-2">Puoi arrivare a piedi passando da Via Ulloa, Piazzale Giovannacci e Via Cesare Rossarol, oppure con il tram T2 fino a Sant’Antonio Municipio.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">✈️ Da Marco Polo o Treviso Canova</h3><p className="mt-2">Le navette ATVO raggiungono la stazione di Venezia Mestre; da lì puoi proseguire a piedi, in tram o in taxi.</p></div>
            </div>
            <a href="https://maps.app.goo.gl/yX3pS9GXamZyoGvUA" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-4 font-bold text-white">Apri su Google Maps ↗</a>
          </article>
        </div>
        <p className="mt-7 rounded-3xl border-l-4 border-aqua bg-white p-6 text-slate-600 shadow-soft">Le tariffe taxi e i tempi di viaggio possono variare in base al traffico, all’orario e al servizio scelto. Per questo nella pagina pubblica non indichiamo un prezzo garantito.</p>
      </div>
    </section>

    <section id="venezia" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Come arrivare a Venezia" title="Autobus o treno: due soluzioni comode" text="Le linee e le tariffe sono state ricontrollate sui canali ufficiali. Gli orari possono cambiare: verifica sempre la corsa del giorno sull’app AVM Venezia Official o sui siti degli operatori."/>
        <div className="grid gap-7 lg:grid-cols-2">
          {veneziaOptions.map((option)=><article key={option.title} className="rounded-[2rem] bg-white/10 p-8">
            <h2 className="font-serif text-4xl">{option.title}</h2>
            <p className="mt-4 text-white/70">{option.text}</p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/15">
              {option.rows.map(([time,line,freq])=><div key={time} className="grid gap-1 border-b border-white/10 p-4 last:border-0 md:grid-cols-3">
                <strong className="text-gold">{time}</strong><span>{line}</span><span className="text-white/70">{freq}</span>
              </div>)}
            </div>
          </article>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://avm.avmspa.it/it/content/app-avm-venezia-official" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Orari ufficiali AVM/ACTV ↗</a>
          <a href="https://www.trenitalia.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Orari Trenitalia ↗</a>
        </div>
      </div>
    </section>


    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-navy p-8 text-white shadow-soft lg:grid-cols-[1fr_.8fr] lg:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Taxi locale</p>
            <h2 className="mt-3 font-serif text-4xl">RadioTaxi Venezia</h2>
            <p className="mt-5 text-white/75">Una soluzione utile per aeroporti, stazione e arrivi con bagagli. Sul sito di RadioTaxi Venezia puoi consultare il servizio, calcolare una tariffa indicativa e trovare le opzioni per prenotare o richiedere il taxi anche tramite app.</p>
          </div>
          <div className="flex items-center lg:justify-end">
            <a href="https://www.radiotaxivenezia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">RadioTaxi Venezia ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Informazioni utili sui biglietti" title="Tariffe verificate e pass turistici" text="Tariffe ricontrollate sui canali ufficiali AVM/ACTV e Venezia Unica. I prezzi possono cambiare: verifica sempre la tariffa in vigore prima dell’acquisto."/>
        <div className="grid gap-5 md:grid-cols-3">
          {ticketCards.map(([title,price,note])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-soft">
            <p className="text-sm font-black uppercase tracking-[.18em] text-gold">{title}</p>
            <p className="mt-4 font-serif text-5xl text-navy">{price}</p>
            <p className="mt-3 text-slate-600">{note}</p>
          </article>)}
        </div>

        <div className="mt-12 rounded-[2rem] bg-cream p-8">
          <h2 className="font-serif text-4xl text-navy">Pass con viaggi illimitati</h2>
          <p className="mt-3 text-slate-600">Pensati soprattutto per chi utilizza più volte autobus, tram e battelli durante il soggiorno.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {passes.map(([duration,price])=><div key={duration} className="rounded-2xl bg-white p-5 shadow-soft"><p className="font-bold text-navy">{duration}</p><p className="mt-2 text-lg text-slate-600">{price}</p></div>)}
          </div>
          <p className="mt-6 text-sm text-slate-500">Nota famiglie: sui servizi urbani del Comune di Venezia i bambini viaggiano gratuitamente fino al compimento del 6° anno. Per i giovani dai 6 ai 29 anni è disponibile, secondo le condizioni in vigore, l’offerta Rolling Venice con titolo ACTV 72 ore.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.veneziaunica.it/it/acquista-i-biglietti/trasporto-pubblico-a-venezia" target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">Tariffe Venezia Unica ↗</a>
            <a href="https://avm.avmspa.it/it/content/tariffe" target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy">Tariffe AVM/ACTV ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Dove acquistare" title="Biglietti prima o durante il soggiorno" text="Acquistare e convalidare correttamente il titolo di viaggio evita perdite di tempo e sanzioni."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <a href="https://avm.avmspa.it/it/content/app-avm-venezia-official" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">App AVM Venezia</h2><p className="mt-3 text-slate-600">Acquisto digitale e informazioni sul servizio.</p><span className="mt-5 inline-block font-bold text-gold">Apri ↗</span></a>
          <a href="https://www.veneziaunica.it/it/acquista-i-biglietti/trasporto-pubblico-a-venezia" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">Venezia Unica</h2><p className="mt-3 text-slate-600">Pass e servizi turistici acquistabili online.</p><span className="mt-5 inline-block font-bold text-gold">Apri ↗</span></a>
          <a href="https://maps.app.goo.gl/bJzKjQh8vEJWbF5g9" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">Tabaccheria vicina</h2><p className="mt-3 text-slate-600">Acquisto di persona durante gli orari di apertura.</p><span className="mt-5 inline-block font-bold text-gold">Apri la mappa ↗</span></a>
          <a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">ACTV</h2><p className="mt-3 text-slate-600">Orari, fermate, validità e aggiornamenti ufficiali.</p><span className="mt-5 inline-block font-bold text-gold">Apri ↗</span></a>
        </div>
      </div>
    </section>

    <section className="bg-gold py-20 text-navy">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
        <h2 className="mt-4 font-serif text-5xl">Usa l’auto per raggiungere Marghera e scoprire il Veneto; lasciala parcheggiata quando visiti Venezia.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">Per chi usa più volte il vaporetto, un pass può risultare più conveniente dei singoli biglietti. Confronta sempre il tuo programma con le tariffe aggiornate.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionTitle eyebrow="FAQ trasporti" title="Domande frequenti" text="Le informazioni operative su check-in, check-out e deposito bagagli si trovano invece nella pagina FAQ del soggiorno."/>
        <div className="space-y-4">
          {faq.map(([q,a])=><details key={q} className="group rounded-3xl border border-slate-200 bg-white p-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span className="min-w-0">{q}</span><span className="shrink-0 text-gold transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-4 text-slate-600">{a}</p>
          </details>)}
        </div>
        <div className="mt-8 text-center"><Link href="/faq" className="inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Consulta tutte le FAQ del soggiorno</Link></div>
      </div>
    </section>
  </main><Footer/></>
}
