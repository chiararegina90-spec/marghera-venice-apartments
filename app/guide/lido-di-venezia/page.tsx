import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Lido di Venezia: spiagge, bici e cosa vedere | Marghera Venice Apartments',
  description: 'Guida al Lido di Venezia: spiagge, Mostra del Cinema, ville Liberty, biciclette, Alberoni, itinerario e consigli pratici.',
  openGraph: {
    title: 'Lido di Venezia, tra laguna e mare Adriatico',
    description: 'Una guida pratica per vivere il Lido con ritmi più lenti.',
    images: ['/images/lido-guide-hero.webp'],
  },
  alternates:{canonical:'/guide/lido-di-venezia',languages:{'it-IT':'/guide/lido-di-venezia','en-GB':'/en/guide/lido-di-venezia','de-DE':'/de/guide/lido-di-venezia','fr-FR':'/fr/guide/lido-di-venezia','es-ES':'/es/guide/lido-di-venezia','zh-CN':'/zh/guide/lido-di-venezia','x-default':'/guide/lido-di-venezia'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const highlights = [
  ['Spiagge e mare Adriatico','Le spiagge del Lido comprendono stabilimenti con noleggio di lettini e ombrelloni e anche una spiaggia libera. Servizi e accessi vanno verificati in base alla stagione.'],
  ['Gran Viale Santa Maria Elisabetta','Il viale principale collega l’approdo dei vaporetti al mare ed è il punto più semplice da cui iniziare la visita.'],
  ['Ville Liberty','Lungo le strade laterali si incontrano edifici eleganti che raccontano la stagione balneare e mondana del primo Novecento.'],
  ['Palazzo del Cinema','Il luogo simbolo della Mostra Internazionale d’Arte Cinematografica e uno dei riferimenti culturali più conosciuti dell’isola.'],
  ['Bicicletta','Il terreno pianeggiante rende la bici uno dei mezzi più piacevoli per esplorare l’isola senza fretta.'],
  ['Alberoni e Murazzi','La parte meridionale conserva spiaggia libera, dune, tratti più selvaggi e gli storici Murazzi che difendono la laguna dal mare.'],
];

const experiences = [
  ['Giornata al mare','Una pausa ideale dopo giornate intense tra calli, musei e ponti.'],
  ['Tour in bicicletta','Pedala lungo il Lido e scegli liberamente dove fermarti.'],
  ['Passeggiata Liberty','Osserva facciate, giardini e dettagli architettonici lontano dai percorsi più affollati.'],
  ['Cinema e cultura','Durante la Mostra del Cinema l’isola cambia completamente atmosfera.'],
  ['Tramonto sulla laguna','La costa rivolta verso Venezia offre una luce molto diversa rispetto alla spiaggia adriatica.'],
  ['Escursione verso Alberoni','Perfetta per chi cerca natura, calma e spazi aperti.'],
];

const itinerary = [
  ['09:30','Arrivo a Santa Maria Elisabetta','Orientati tra laguna, Gran Viale e servizi principali.'],
  ['10:00','Passeggiata o bicicletta','Attraversa l’isola verso il mare e osserva le ville Liberty.'],
  ['11:00','Spiaggia','Dedica qualche ora al mare oppure a una passeggiata sul lungomare.'],
  ['13:30','Pranzo','Scegli un locale lungo il Gran Viale o nelle vie laterali.'],
  ['15:00','Palazzo del Cinema','Raggiungi l’area della Mostra e scopri il lato più culturale dell’isola.'],
  ['16:30','Laguna o Alberoni','Scegli tra una passeggiata al tramonto o una parte più naturale dell’isola.'],
  ['19:00','Rientro','Torna verso Venezia e prosegui poi per Marghera con i collegamenti disponibili.'],
];

const faq = [
  ['Il Lido è adatto a una gita di un giorno?','Sì. In una giornata puoi abbinare spiaggia, bicicletta, passeggiata Liberty e zona del Palazzo del Cinema.'],
  ['È meglio muoversi a piedi o in bicicletta?','Per la zona centrale bastano gli spostamenti a piedi. La bicicletta è consigliata per esplorare tratti più lunghi e raggiungere zone meno centrali.'],
  ['Il Lido è adatto ai bambini?','Sì. Spiagge, spazi aperti e percorsi pianeggianti lo rendono una meta particolarmente comoda per le famiglie.'],
  ['Si può visitare con il cane?','La passeggiata sull’isola è semplice, ma le regole di accesso alle spiagge e ai trasporti possono variare. Verifica sempre in anticipo.'],
  ['Quando conviene visitarlo?','La primavera e l’inizio dell’autunno sono piacevoli per bici e passeggiate; l’estate è il periodo più indicato per il mare.'],
  ['Esiste una spiaggia libera?','Sì. Oltre agli stabilimenti con lettini e ombrelloni a noleggio è presente anche una spiaggia libera. Verifica accessi e condizioni stagionali.'],
];

export default function LidoGuide(){
  return <><Header/><main data-build="sprint6-lido-1">
    <section className="relative min-h-[84vh] overflow-hidden pt-20">
      <Image src="/images/lido-guide-hero.webp" alt="Spiaggia del Lido di Venezia con mare Adriatico" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10"/>
      <div className="relative mx-auto flex min-h-[calc(84vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/">Home</Link><span>›</span><Link href="/guide">Guide</Link><span>›</span><span className="text-gold">Lido di Venezia</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Marghera Venice Guide</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Lido di Venezia</h1>
          <p className="mt-4 font-serif text-3xl">Tra laguna, mare Adriatico e architetture Liberty.</p>
          <p className="mt-6 max-w-3xl text-xl text-white/80">Una giornata più lenta, fatta di spiaggia, biciclette, ville eleganti e spazi aperti.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#itinerario" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Organizza la visita</a>
            <Link href="/guide" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Torna alle guide</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 -mt-8 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Visita consigliata','Giornata intera'],
          ['Come arrivare','Vaporetto dalla zona di Venezia'],
          ['Ideale per','Mare, bici, famiglie e relax'],
          ['Stile della visita','A piedi o in bicicletta'],
        ].map(([title,text])=><div key={title} className="rounded-2xl bg-cream p-5"><p className="text-xs font-black uppercase tracking-[.16em] text-gold">{title}</p><p className="mt-2 font-serif text-2xl text-navy">{text}</p></div>)}
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Una Venezia diversa</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Il punto in cui la laguna incontra il mare</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>Il Lido cambia completamente il ritmo del viaggio. Dopo calli strette, musei e piazze affollate, l’isola offre strade più ampie, giardini, biciclette e la presenza del mare Adriatico.</p>
            <p>La zona centrale è facile da esplorare a piedi, mentre una bicicletta permette di raggiungere tratti più tranquilli e di osservare con calma le ville Liberty che hanno accompagnato la nascita del turismo balneare veneziano.</p>
            <p>È una meta ideale per spezzare un soggiorno culturale con una giornata all’aperto, ma conserva anche un’identità legata al cinema, all’architettura e alla storia della villeggiatura.</p>
          </div>
        </div>
        <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Prima di partire</p>
          <h2 className="mt-3 font-serif text-4xl">Controlla trasporti e servizi</h2>
          <p className="mt-5 text-white/75">Orari dei vaporetti, servizi di spiaggia, noleggi e regole di accesso possono cambiare in base al periodo.</p>
          <div className="mt-7 grid gap-3">
            <a href="https://www.veneziaunica.it/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-center font-bold text-navy">Venezia Unica ↗</a>
            <a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold">Trasporti ACTV ↗</a>
          </div>
        </aside>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Cosa non perdere" title="Sei modi per conoscere il Lido" text="Mare, architettura, cinema e percorsi all’aria aperta."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white p-8 shadow-soft"><div className="text-2xl text-gold">✦</div><h2 className="mt-4 font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Esperienze" title="Vivi il Lido con un ritmo più lento" text="Una giornata da costruire tra mare, bicicletta, cultura e paesaggio."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map(([title,text])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8"><h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p></article>)}
        </div>
      </div>
    </section>


    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Il Lido in bicicletta" title="Dal Tronchetto agli Alberoni, fino a Pellestrina" text="Il Lido è pianeggiante e si presta molto bene a una giornata in bici."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-8 shadow-soft"><h2 className="font-serif text-3xl text-navy">Ferry dal Tronchetto</h2><p className="mt-3 text-slate-600">Puoi raggiungere il Lido con la bicicletta utilizzando il ferry boat dal Tronchetto, verificando orari, tariffe e regole per il trasporto bici.</p></article>
          <article className="rounded-[2rem] bg-white p-8 shadow-soft"><h2 className="font-serif text-3xl text-navy">Alberoni e Pellestrina</h2><p className="mt-3 text-slate-600">Pedalando verso sud puoi raggiungere gli Alberoni e proseguire verso Pellestrina con il ferry, secondo il servizio disponibile.</p></article>
          <article className="rounded-[2rem] bg-white p-8 shadow-soft"><h2 className="font-serif text-3xl text-navy">Terminal Fusina</h2><p className="mt-3 text-slate-600">In stagione il Terminal Fusina può offrire collegamenti verso Alberoni e Pellestrina. Giorni, orari e condizioni possono cambiare: verifica sempre il servizio aggiornato sul sito ufficiale prima di partire.</p><a href="https://www.terminalfusina.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-bold text-gold">Terminal Fusina ↗</a></article>
        </div>
      </div>
    </section>

    <section className="bg-gold py-20 text-navy">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em]">I guardiani della laguna</p>
        <h2 className="mt-4 font-serif text-5xl">I Murazzi e la memoria dell’Acqua Granda del 1966</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">I Murazzi furono costruiti in pietra d’Istria per difendere Lido e Pellestrina dalla forza dell’Adriatico. Il 4 novembre 1966, durante l’Acqua Granda, la mareggiata colpì duramente le difese costiere e lasciò un segno profondo nella memoria veneziana.</p>
      </div>
    </section>

    <section id="itinerario" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Itinerario consigliato" title="Una giornata al Lido di Venezia" text="Una struttura flessibile da adattare alla stagione e al meteo."/>
        <div className="grid gap-4">
          {itinerary.map(([time,title,text])=><article key={time} className="grid gap-4 rounded-[2rem] bg-white/10 p-7 md:grid-cols-[110px_1fr]"><div className="font-black tracking-[.14em] text-gold">{time}</div><div><h2 className="font-serif text-3xl">{title}</h2><p className="mt-2 text-white/70">{text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft"><Image src="/images/lido-venezia-spiaggia.webp" alt="Spiaggia del Lido di Venezia" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/></div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il consiglio di Marghera Venice Apartments</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Abbina la spiaggia a una passeggiata tra le ville</h2>
          <p className="mt-6 text-lg text-slate-600">Il Lido è più interessante quando non lo si vive soltanto come destinazione balneare. Dedica una parte della giornata al mare e una parte alle strade interne, alla bicicletta e alla zona del Palazzo del Cinema.</p>
        </div>
      </div>
    </section>


    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Informazioni aggiornate</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Eventi e vita del Lido</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Per eventi, servizi e informazioni sull’isola consulta Visit Lido. Se programmi la visita durante la Mostra Internazionale d’Arte Cinematografica, trovi programma e informazioni aggiornate sul sito ufficiale della Biennale Cinema.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://www.visitlido.it/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Visit Lido ↗</a>
          <a href="https://www.labiennale.org/it/cinema" target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy px-7 py-4 font-bold text-navy">Biennale Cinema ↗</a>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionTitle eyebrow="Domande frequenti" title="Prima di visitare il Lido" text="Risposte rapide ai dubbi più comuni."/>
        <div className="space-y-4">
          {faq.map(([question,answer])=><details key={question} className="group rounded-3xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer list-none font-serif text-2xl text-navy">{question}<span className="float-right text-gold group-open:rotate-45">+</span></summary><p className="mt-4 max-w-4xl text-slate-600">{answer}</p></details>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Dopo il Lido</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Rientra in una casa comoda e collegata con Venezia</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Parcheggio privato, collegamenti H24 e servizi Pet & Family.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
          <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
          <Link href="/guide" className="rounded-full border border-slate-300 px-8 py-4 font-bold text-navy">Tutte le guide</Link>
        </div>
      </div>
    </section>
  </main><Footer/>
  <Script id="lido-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    '@context':'https://schema.org','@type':'TouristDestination',name:'Lido di Venezia',
    description:'Guida pratica al Lido di Venezia a cura di Marghera Venice Apartments.',
    containedInPlace:{'@type':'City',name:'Venezia'},
    touristType:['Famiglie','Coppie','Cicloturisti','Viaggiatori interessati al mare']
  })}}/>
  </>
}
