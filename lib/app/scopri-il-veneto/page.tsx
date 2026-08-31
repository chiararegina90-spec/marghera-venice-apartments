import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Scopri il Veneto | Marghera Venice Apartments',
  description: 'Itinerari dal parcheggio privato di Marghera verso Riviera del Brenta, Padova, Treviso, Valdobbiadene, Verona, Chioggia, Jesolo e il Veneto.',
  openGraph: {
    title: 'Scopri il Veneto | Marghera Venice Apartments',
    description: 'Una guida per esplorare il Veneto partendo da Marghera.',
    images: ['/images/veneto-colline-prosecco-final.webp'],
  },
  alternates:{canonical:'/scopri-il-veneto',languages:{'it-IT':'/scopri-il-veneto','en-GB':'/en/discover-veneto','de-DE':'/de/discover-veneto','fr-FR':'/fr/discover-veneto','es-ES':'/es/discover-veneto','zh-CN':'/zh/discover-veneto','x-default':'/scopri-il-veneto'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const destinations = [
  {
    title:'Riviera del Brenta',
    eyebrow:'Ville, acqua e paesaggio',
    text:'Un itinerario tra ville venete, borghi, giardini storici e scorci lungo il Naviglio del Brenta. È la prima escursione che consigliamo a chi arriva in auto.',
    image:'/images/veneto-riviera-brenta-final.webp',
    note:'Ideale per mezza giornata o una giornata intera.'
  },
  {
    title:'Colline del Prosecco',
    eyebrow:'Valdobbiadene e dintorni',
    text:'Strade panoramiche, vigneti, piccoli paesi e cantine. Un percorso da vivere con calma, alternando paesaggio, degustazioni e soste nei borghi.',
    image:'/images/veneto-colline-prosecco-final.webp',
    note:'Perfetto per chi ama vino, natura e fotografia.'
  },
  {
    title:'Padova',
    eyebrow:'Arte e vita cittadina',
    text:'Piazze, portici, mercati, la Basilica di Sant’Antonio e un centro storico vivace. Una città d’arte facile da inserire in un soggiorno più lungo.',
    image:'/images/veneto-padova-final.webp',
    note:'Una giornata completa tra arte, passeggiate e cucina.'
  },
  {
    title:'Treviso',
    eyebrow:'Canali e portici',
    text:'Una città elegante e raccolta, con canali, piazze, portici e un’atmosfera rilassata. Ottima per una passeggiata senza fretta.',
    image:'/images/veneto-treviso-final.webp',
    note:'Adatta anche a una visita di poche ore.'
  },
  {
    title:'Chioggia e Pellestrina',
    eyebrow:'Laguna autentica',
    text:'Calli, canali, pescherie, spiagge e una Venezia più quotidiana. Un itinerario ideale per chi cerca mare e tradizioni locali.',
    image:'/images/veneto-chioggia-pellestrina-final.webp',
    note:'Consigliata soprattutto nella bella stagione.'
  },
  {
    title:'Verona',
    eyebrow:'Storia e romanticismo',
    text:'Arena, piazze, ponti e vicoli storici. Una meta più distante, ma perfetta per una giornata dedicata a una delle città più note del Veneto.',
    image:'/images/veneto-verona-final.webp',
    note:'Meglio partire al mattino e dedicare l’intera giornata.'
  },
  {
    title:'Dolomiti',
    eyebrow:'Una giornata in montagna',
    text:'Laghi, passi e panorami alpini per chi viaggia in auto e vuole dedicare un’intera giornata alla montagna. Scegli una sola area, parti presto e controlla sempre meteo e viabilità.',
    image:'/images/guide-dolomiti-final.webp',
    note:'È l’escursione più lunga: consigliata come giornata intera ben pianificata.'
  },
];

const reasons = [
  ['Parcheggio privato','Parti direttamente dalle nostre case senza cercare un posto auto ogni giorno.'],
  ['Libertà di itinerario','Puoi alternare Venezia, città d’arte, colline, spiagge e laguna.'],
  ['Rientro comodo','Dopo l’escursione torni in una casa tranquilla, con cucina e tutti i comfort.'],
  ['Viaggio su misura','Scegli ogni giorno in base al meteo, alla stagione e ai tuoi ritmi.'],
];

const tips = [
  'Non riempire ogni giornata: lascia spazio a soste, deviazioni e piccoli borghi.',
  'Per cantine e visite guidate, prenota in anticipo e verifica sempre gli orari.',
  'Controlla traffico, parcheggi e condizioni meteo prima di partire.',
  'Se viaggi con bambini o animali, pianifica pause e tappe brevi.',
];

export default function ScopriIlVeneto(){
  return <><Header/><main data-build="sprint5-corrected-all-images">
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/veneto-hero-prosecco-final.webp" alt="Colline del Prosecco in Veneto. Foto di Alberto Caliman su Unsplash" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/75">
            <Link href="/" className="hover:text-gold">Home</Link><span>›</span><span className="text-gold">Scopri il Veneto</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">La tua auto, il nostro punto di partenza</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Il Veneto ti aspetta.</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/85">Dalle ville della Riviera del Brenta alle colline del Prosecco, dalle città d’arte alla laguna: il parcheggio privato rende ogni giornata più libera.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#destinazioni" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Esplora le destinazioni</a>
            <a href="#mappa-veneto" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">Guarda la mappa</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Perché partire da Marghera" title="Una base strategica per esplorare" text="Non sei costretto a scegliere tra Venezia e il resto del Veneto: puoi vivere entrambe le esperienze nello stesso soggiorno."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="text-2xl text-gold">✦</div>
            <h2 className="mt-4 font-serif text-3xl text-navy">{title}</h2>
            <p className="mt-3 text-slate-600">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="mappa-veneto" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Orientarsi" title="Marghera al centro del tuo viaggio" text="La mappa raccoglie le principali destinazioni da considerare durante il soggiorno, senza tempi rigidi: traffico, mezzo scelto e stagione possono cambiare la durata del percorso."/>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-cream shadow-soft">
          <Image src="/images/mappa-veneto-definitiva.webp" alt="Mappa illustrata del Veneto con Marghera, Venezia, Riviera del Brenta, Padova, Treviso, Valdobbiadene, Verona, Dolomiti, Jesolo, Pellestrina e Chioggia" width={1536} height={1024} className="h-auto w-full"/>
        </div>
      </div>
    </section>

    <section id="destinazioni" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Itinerari suggeriti" title="Scegli il Veneto che assomiglia al tuo viaggio" text="Ogni destinazione ha un carattere diverso: ville e giardini, vigneti, città d’arte, spiagge o laguna."/>
        <div className="space-y-8">
          {destinations.map((d,index)=><article key={d.title} className={`grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-2 ${index%2?'lg:[&>div:first-child]:order-2':''}`}>
            <div className="relative min-h-[340px] lg:min-h-[460px]">
              <Image src={d.image} alt={d.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{d.eyebrow}</p>
              <h2 className="mt-3 font-serif text-5xl text-navy">{d.title}</h2>
              <p className="mt-5 text-lg text-slate-600">{d.text}</p>
              <p className="mt-6 rounded-2xl bg-cream p-5 font-semibold text-navy">{d.note}</p>{d.title==='Dolomiti'&&<Link href="/guide/dolomiti" className="mt-6 inline-flex w-fit rounded-full bg-gold px-6 py-3 font-bold text-navy">Apri la guida Dolomiti</Link>}
            </div>
          </article>)}
        </div>
      </div>
    </section>
<section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il consiglio di Marghera Venice Apartments</p>
          <h2 className="mt-3 font-serif text-5xl">La Riviera del Brenta merita un posto nel tuo viaggio.</h2>
          <p className="mt-6 text-lg text-white/75">È vicina, sorprendente e spesso ignorata da chi visita solo Venezia. Ville, giardini e paesaggi d’acqua raccontano un volto del Veneto completamente diverso dalla laguna.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {tips.map((tip,i)=><div key={tip} className="rounded-3xl bg-white/10 p-6"><div className="text-gold">0{i+1}</div><p className="mt-3 text-white/80">{tip}</p></div>)}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">La base per il tuo viaggio</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Venezia è la destinazione. Il Veneto è il viaggio.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Scegli la casa più adatta a te e usa Marghera come punto di partenza per scoprire ogni giorno qualcosa di diverso.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
          <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
        </div>
      </div>
    </section>
  </main><Footer/>
  <Script id="veneto-destination-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
    '@context':'https://schema.org','@type':'TouristDestination',name:'Veneto',description:'Guida alle destinazioni del Veneto partendo da Marghera.',containedInPlace:{'@type':'Country',name:'Italia'}
  })}}/>
  </>
}
