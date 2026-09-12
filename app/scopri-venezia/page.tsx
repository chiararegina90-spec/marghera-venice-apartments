import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import HubCultureSection from '@/components/HubCultureSection';

export const metadata: Metadata = {
  title: 'Scopri Venezia | Marghera Venice Apartments',
  description: 'Come raggiungere Venezia da Marghera, itinerari, consigli locali, Venezia con bambini e con il cane, isole della laguna e collegamenti H24.',
  openGraph: {
    title: 'Scopri Venezia | Marghera Venice Apartments',
    description: 'Una guida pratica e autentica per vivere Venezia partendo da Marghera.',
    images: ['/images/scopri-venezia-michael-heise.webp'],
  },
  alternates:{canonical:'/scopri-venezia',languages:{'it-IT':'/scopri-venezia','en-GB':'/en/discover-venice','de-DE':'/de/discover-venice','fr-FR':'/fr/discover-venice','es-ES':'/es/discover-venice','zh-CN':'/zh/discover-venice','x-default':'/scopri-venezia'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const itinerary = [
  ['08:30','Piazza San Marco','Arriva presto, quando la luce è più bella e la città è ancora tranquilla.'],
  ['10:30','Palazzo Ducale','Dedica il tempo necessario alle sale e al Ponte dei Sospiri.'],
  ['12:30','Cicchetti','Allontanati di qualche calle dalle zone più turistiche.'],
  ['14:00','Rialto','Attraversa il ponte e visita il mercato nelle giornate di apertura.'],
  ['16:00','Castello e Acqua Alta','Scopri una Venezia più vissuta e meno prevedibile.'],
  ['18:30','Canal Grande al tramonto','Il vaporetto diventa uno dei punti panoramici più belli della città.'],
  ['21:00','Rientro senza fretta','I collegamenti notturni ti riportano a Marghera.'],
];

const tips = [
  ['Prima delle 8:30','San Marco e Rialto sono più piacevoli al mattino presto.'],
  ['Borraccia sempre con te','In città sono presenti numerose fontanelle pubbliche.'],
  ['Cicchetti lontano dalle piazze','Due o tre calli possono fare una grande differenza.'],
  ['Vaporetto al tramonto','Un modo semplice per vedere il Canal Grande da una prospettiva speciale.'],
  ['Cannaregio la sera','Atmosfera più rilassata e locali frequentati anche dai residenti.'],
  ['Scarpe comode','Ponti e pavimentazione richiedono calzature adatte.'],
];

const family = [
  ['Museo di Storia Naturale','Dinosauri, animali e un museo coinvolgente per bambini e adulti.'],
  ['Vaporetto','Per i più piccoli il viaggio sull’acqua è già parte dell’avventura.'],
  ['Libreria Acqua Alta','Una tappa curiosa, colorata e facile da ricordare.'],
  ['Campi e gelato','Programma pause frequenti e lascia spazio alla scoperta spontanea.'],
];

const pet = [
  ['Trasporto pubblico','Tieni sempre la museruola a portata di mano insieme al guinzaglio: sui mezzi pubblici può essere richiesto di farla indossare. Verifica sempre le regole ACTV aggiornate prima del viaggio.'],
  ['Passeggiate tranquille','Castello, Sant’Elena e alcune zone del Lido offrono ritmi più rilassati.'],
  ['Acqua e pause','Porta una ciotola pieghevole e pianifica soste durante i mesi caldi.'],
  ['Rientro in una casa Pet Friendly','Cuccia e ciotole sono disponibili gratuitamente nei nostri appartamenti.'],
];

const islands = [
  ['Murano','Vetro, fornaci e una storia produttiva che merita più di una visita veloce.','/images/murano-glass.webp','/guide/murano'],
  ['Burano','Colori, pesca e merletto: molto più di uno sfondo fotografico.','/images/burano-canale.webp','/guide/burano'],
  ['Lido','Mare, Liberty, cinema, Malamocco e biciclette.','/images/lido-venezia-spiaggia.webp','/guide/lido-di-venezia'],
  ['Pellestrina','Borghi di pescatori, Murazzi e laguna da attraversare lentamente.','/images/guide-pellestrina-final.webp','/guide/pellestrina'],
  ['Sant’Erasmo','L’orto di Venezia: campi, carciofi, biciclette e Bacan.','/images/guide-sant-erasmo-final.webp','/guide/sant-erasmo'],
  ['Certosa','Una pausa verde vicinissima alla città, tra laguna e spazi aperti.','/images/guide-certosa-final.webp','/guide/certosa'],
];

export default function ScopriVenezia(){
  const explore = [
    ['01','Musei, monumenti e chiese','Scegli cosa vale davvero il tuo tempo con durata media, prezzi e informazioni pratiche.','/guide/musei-venezia'],
    ['02','Le isole della laguna','Murano, Burano, Lido, Pellestrina, Sant’Erasmo e Certosa: scegli in base alla giornata.','#isole'],
    ['03','Venezia con bambini','Musei, vaporetto, pause e idee per vivere la città senza trasformarla in una maratona.','/journal/venezia-con-bambini'],
    ['04','Venezia con il cane','Trasporti, passeggiate tranquille e piccole regole pratiche per una giornata più semplice.','/journal/venezia-con-il-cane'],
    ['05','Come arrivare e muoversi','Bus, treno, biglietti e collegamenti notturni partendo dagli appartamenti.','/come-raggiungere-venezia'],
    ['06','Eventi e storie','Mostre, feste tradizionali, curiosità e appuntamenti nel Journal.','/journal'],
  ] as const;

  return <><Header/>
    <main className="editorial-page" data-build="discover-venice-refresh-2026-09-06">
      <section className="relative min-h-[74vh] overflow-hidden pt-20">
        <Image src="/images/scopri-venezia-michael-heise.webp" alt="Bacino di San Marco con Palazzo Ducale e Campanile" fill priority sizes="100vw" className="object-cover object-center"/>
        <div className="hero-overlay absolute inset-0"/>
        <div className="relative mx-auto flex min-h-[calc(74vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/75"><Link href="/" className="hover:text-gold">Home</Link><span>›</span><span className="text-gold">Scopri Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.25em] text-gold">La città, la laguna, il tuo modo di viverle</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Scopri Venezia, con il tuo ritmo.</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/85">Non serve leggere tutto prima di partire. Scegli ciò che ti interessa — arte, isole, bambini, cane, eventi o trasporti — e costruisci la tua giornata da lì.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#inizia" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Da dove vuoi iniziare?</a><Link href="/guide/musei-venezia" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">Musei e monumenti</Link></div>
          </div>
        </div>
      </section>

      <section id="inizia" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Scegli il tuo percorso" title="Che Venezia vuoi vivere?" text="Questa pagina ora fa da bussola: i dettagli restano nelle guide dedicate, così trovi prima ciò che ti serve e scorri molto meno."/>
          <div className="mt-8 grid border-y border-navy/15 md:grid-cols-2">
            {explore.map(([n,title,text,href],i)=><Link key={title} href={href} className={`group grid grid-cols-[42px_1fr_auto] gap-3 py-6 transition hover:bg-cream md:px-6 ${i%2===0?'md:border-r md:border-navy/10':''} ${i<4?'border-b border-navy/10':''}`}>
              <span className="pt-1 text-xs font-black tracking-[.16em] text-gold">{n}</span><span><span className="block font-serif text-2xl text-navy">{title}</span><span className="mt-2 block max-w-xl leading-7 text-slate-600">{text}</span></span><span className="pt-1 text-2xl text-gold transition group-hover:translate-x-1">→</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_.85fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Da Marghera a Venezia</p>
            <h2 className="mt-3 max-w-3xl font-serif text-5xl text-navy">Lascia l’auto. A Venezia entra senza pensieri.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Dagli appartamenti puoi raggiungere Piazzale Roma con le linee 6 e 6L di giorno, continuare con la linea 6 la sera e rientrare anche di notte con la N2. In alternativa, Venezia Santa Lucia è raggiungibile in treno dalla stazione di Venezia Mestre.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/come-raggiungere-venezia" className="rounded-full bg-navy px-6 py-3.5 font-bold text-white">Trasporti, biglietti e aeroporti →</Link><a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy/25 px-6 py-3.5 font-bold text-navy">ACTV ufficiale ↗</a></div>
          </div>
          <div className="self-start border-y border-navy/15">
            {[
              ['Di giorno','6 · 6L','Ogni 10 minuti · Marghera → Piazzale Roma'],
              ['Di sera','6','Ogni 20 minuti · Marghera → Piazzale Roma'],
              ['Di notte','N2','Ogni 30 minuti · Rientro da Venezia verso Marghera'],
              ['In treno','Mestre → Santa Lucia','Corse regionali frequenti'],
            ].map(([a,b,c])=><div key={a} className="grid grid-cols-[88px_1fr] gap-4 border-b border-navy/10 py-5 last:border-b-0"><span className="text-xs font-black uppercase tracking-[.14em] text-gold">{a}</span><span><strong className="block text-navy">{b}</strong><span className="mt-1 block text-sm text-slate-600">{c}</span></span></div>)}
          </div>
        </div>
      </section>

      <section id="itinerario" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Prima visita" title="Venezia in un giorno, senza trasformarla in una gara" text="Una traccia semplice: serve per dare un ordine alla giornata, non per obbligarti a seguire ogni tappa."/>
          <ol className="mt-8 border-y border-slate-200 lg:grid lg:grid-cols-2 lg:gap-x-10">
            {itinerary.map(([time,title,text])=><li key={time} className="grid grid-cols-[72px_1fr] gap-4 border-b border-slate-200 py-5 last:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0"><span className="pt-1 text-xs font-black tracking-[.12em] text-gold">{time}</span><span><strong className="block font-serif text-2xl font-normal text-navy">{title}</strong><span className="mt-1.5 block leading-7 text-slate-600">{text}</span></span></li>)}
          </ol>
        </div>
      </section>

      <HubCultureSection scope="venice" lang="it"/>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Venezia per come viaggi" title="Bambini o cane? Abbiamo due guide dedicate." text="Qui teniamo solo l’essenziale. Per consigli, regole e idee complete apri la guida che riguarda davvero il tuo viaggio."/>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-[2rem] bg-cream"><div className="relative h-72"><Image src="/images/venezia-bambini-campo-nuova.webp" alt="Bambini che giocano in un campo veneziano" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]"/></div><div className="p-7 sm:p-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Venezia con bambini</p><h2 className="mt-3 font-serif text-4xl text-navy">Pause, vaporetto e piccole avventure</h2><p className="mt-4 leading-7 text-slate-600">{family[0][1]} {family[3][1]}</p><Link href="/journal/venezia-con-bambini" className="mt-6 inline-flex font-bold text-navy">Apri la guida per famiglie →</Link></div></article>
            <article className="group overflow-hidden rounded-[2rem] bg-navy text-white"><div className="relative h-72"><Image src="/images/journal-venezia-cane.webp" alt="Visitare Venezia con il cane" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]"/></div><div className="p-7 sm:p-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Pet Friendly</p><h2 className="mt-3 font-serif text-4xl">Venezia insieme al tuo cane</h2><p className="mt-4 leading-7 text-white/75">{pet[0][1]} {pet[2][1]}</p><Link href="/journal/venezia-con-il-cane" className="mt-6 inline-flex font-bold text-gold">Apri la guida Pet Friendly →</Link></div></article>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-black uppercase tracking-[.22em] text-gold">La nostra firma</p><h2 className="mt-3 font-serif text-5xl">Sei piccoli consigli che fanno una grande differenza.</h2><p className="mt-5 leading-7 text-white/70">Niente regole rigide: sono solo accorgimenti semplici per goderti meglio la città.</p></div>
          <div className="divide-y divide-white/15 border-y border-white/15 sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">{tips.map(([title,text],i)=><div key={title} className={`py-5 sm:px-6 ${i<4?'sm:border-b sm:border-white/15':''}`}><p className="text-xs font-black tracking-[.14em] text-gold">0{i+1}</p><h3 className="mt-2 font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-white/70">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="isole" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Le isole" title="La laguna oltre il centro storico" text="Murano e Burano sono solo l’inizio. Scegli l’isola in base al tempo che hai e al tipo di giornata che vuoi vivere."/>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {islands.map(([title,text,image,href])=><article key={title} className="group overflow-hidden rounded-[1.75rem] bg-white"><div className="relative h-56 overflow-hidden"><Image src={image} alt={title} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]"/></div><div className="p-6"><h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-2.5 leading-7 text-slate-600">{text}</p><Link href={href} className="mt-5 inline-flex font-bold text-navy">Scopri l’isola →</Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div><p className="text-xs font-black uppercase tracking-[.22em] text-gold">Orientarsi</p><h2 className="mt-3 font-serif text-5xl text-navy">Venezia e la laguna in una sola mappa</h2><p className="mt-5 leading-7 text-slate-600">Usala per capire le distanze tra centro storico, isole e principali punti di interesse; per il percorso esatto apri poi Google Maps.</p></div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-cream"><Image src="/images/mappa-venezia-finale.webp" alt="Mappa illustrata dei principali punti di interesse di Venezia e della laguna" width={1408} height={1056} className="h-auto w-full"/></div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-16 text-navy sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div><p className="text-xs font-black uppercase tracking-[.22em]">Se hai più tempo</p><h2 className="mt-3 font-serif text-5xl">Venezia è solo l’inizio.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-navy/75">Con il parcheggio privato puoi dedicare una giornata alla Riviera del Brenta, alle Colline del Prosecco o a una città d’arte del Veneto.</p><Link href="/scopri-il-veneto" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Scopri il Veneto →</Link></div>
          <div className="border-t border-navy/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><p className="text-xs font-black uppercase tracking-[.22em]">Scegli la tua casa</p><h2 className="mt-3 font-serif text-4xl">Dove vuoi rientrare la sera?</h2><p className="mt-4 leading-7 text-navy/75">Rossi Apartment per famiglie e gruppi fino a 7 ospiti; Dimora Castelli per coppie, piccole famiglie e chi cerca tranquillità.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/case/rossi-apartment" className="rounded-full bg-white px-6 py-3 font-bold text-navy">Rossi Apartment</Link><Link href="/case/dimora-castelli" className="rounded-full border border-navy px-6 py-3 font-bold text-navy">Dimora Castelli</Link></div></div>
        </div>
      </section>
    </main>
    <Footer/>
    <Script id="tourist-attraction-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'TouristDestination',name:'Venezia',description:'Guida pratica a Venezia e alla laguna a cura di Marghera Venice Apartments.',touristType:['Famiglie','Coppie','Viaggiatori con animali domestici'],containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}})}}/>
  </>;
}
