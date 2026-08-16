import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Veneto in bicicletta | Itinerari e cicloturismo | Marghera Venice Apartments',
  description: 'Idee e percorsi per scoprire il Veneto in bicicletta: laguna, fiumi, colline, Dolomiti, ex ferrovie e grandi ciclovie.',
  alternates:{canonical:'/guide/veneto-in-bicicletta',languages:{'it-IT':'/guide/veneto-in-bicicletta','en-GB':'/en/guide/veneto-in-bicicletta','de-DE':'/de/guide/veneto-in-bicicletta','fr-FR':'/fr/guide/veneto-in-bicicletta','es-ES':'/es/guide/veneto-in-bicicletta','zh-CN':'/zh/guide/veneto-in-bicicletta','x-default':'/guide/veneto-in-bicicletta'}}
};

const percorsi = [
  {
    title: 'Fiumi e lagune',
    text: 'Pedalare vicino all’acqua è uno dei modi più piacevoli per conoscere il Veneto. Tra gli itinerari segnalati dal portale regionale ci sono il GiraSile da Treviso a Jesolo e il percorso tra Chioggia e il Lido di Venezia.'
  },
  {
    title: 'Dolomiti e parchi naturali',
    text: 'Per chi cerca paesaggi di montagna, la Lunga Via delle Dolomiti collega Cortina d’Ampezzo a Calalzo di Cadore. Il portale regionale propone anche l’Anello dei Colli Euganei, tra natura, borghi e colline.'
  },
  {
    title: 'Ex ferrovie e percorsi pianeggianti',
    text: 'Alcuni tracciati ciclabili seguono vecchie linee ferroviarie. Tra quelli proposti da Veneto.eu trovi la Treviso–Ostiglia e la Riviera Berica, due idee interessanti per chi preferisce percorsi regolari e paesaggi rurali.'
  },
  {
    title: 'Grandi viaggi in bicicletta',
    text: 'Per chi vuole trasformare la bici in un vero viaggio, il Veneto propone itinerari più lunghi come l’Anello del Veneto, Venezia–Trieste, Dolomiti–Venezia e il percorso Bolzano–Lago di Garda–Venezia.'
  }
];

export default function VenetoInBicicletta(){
  return <><Header/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image
        src="/images/guide-veneto-bicicletta.webp"
        alt="Cicloturisti tra i vigneti del Veneto al tramonto"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-white/75">
            <Link href="/">Home</Link><span>›</span><Link href="/guide">Guide</Link><span>›</span><span className="text-gold">Veneto in bicicletta</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Guide</p>
          <h1 className="mt-4 font-serif text-[clamp(2.75rem,11vw,4rem)] leading-[.98] tracking-[-0.02em] sm:text-6xl md:text-8xl">Veneto in bicicletta</h1>
          <p className="mt-5 max-w-3xl text-xl text-white/85">Un modo lento e bellissimo per scoprire lagune, fiumi, colline, borghi e montagne del Veneto.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Cicloturismo</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Il viaggio cambia quando rallenti</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Il portale turistico ufficiale della Regione del Veneto descrive il viaggio in bicicletta come un modo per riscoprire la semplicità, entrare in contatto con il territorio e conoscere le comunità che lo abitano.</p>
          <p className="mt-5 text-lg leading-8 text-slate-600">Dal nostro punto di vista è anche una splendida alternativa per chi soggiorna più giorni: Venezia può essere il cuore del viaggio, ma una giornata in bicicletta permette di scoprire un Veneto completamente diverso, fatto di acqua, campagne, vigneti e piccoli centri.</p>
        </div>

        <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Pianifica il percorso</p>
          <h2 className="mt-3 font-serif text-4xl">Scegli l’itinerario adatto a te</h2>
          <p className="mt-5 leading-7 text-white/75">Sul sito ufficiale Veneto.eu trovi itinerari, escursioni e una mappa dedicata al cicloturismo. Puoi confrontare i percorsi e costruire un viaggio su misura in base al tempo, alla zona e al tipo di esperienza che cerchi.</p>
          <a href="https://www.veneto.eu/it/esperienze/bici" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">Scopri gli itinerari su Veneto.eu ↗</a>
        </aside>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Da dove iniziare" title="Quattro modi di pedalare in Veneto" text="Percorsi diversi per paesaggio, durata e tipo di esperienza."/>
        <div className="grid gap-5 md:grid-cols-2">
          {percorsi.map((x,i)=><article key={x.title} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</p>
            <h2 className="mt-4 font-serif text-3xl text-navy">{x.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{x.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Qualche idea concreta</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Percorsi che vale la pena conoscere</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            'GiraSile · Treviso → Jesolo',
            'Isole di Venezia · Chioggia → Lido di Venezia',
            'Lunga Via delle Dolomiti · Cortina → Calalzo',
            'Anello dei Colli Euganei',
            'Treviso → Ostiglia',
            'Anello del Veneto',
            'Venezia → Trieste',
            'Dolomiti → Venezia'
          ].map(x=><div key={x} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-navy">{x}</div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il nostro consiglio</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Non serve essere ciclisti esperti</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Il bello del cicloturismo è scegliere il ritmo adatto a sé. Prima di partire verifica sempre lunghezza, fondo, dislivello, meteo e servizi disponibili lungo il percorso. Per le informazioni aggiornate fai riferimento alla scheda ufficiale dell’itinerario scelto.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://www.veneto.eu/it/esperienze/bici" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Veneto.eu · In bici ↗</a>
          <Link href="/scopri-il-veneto" className="rounded-full border border-navy px-7 py-4 font-bold text-navy">Scopri il Veneto</Link>
          <Link href="/guide" className="rounded-full border border-navy px-7 py-4 font-bold text-navy">Tutte le guide</Link>
        </div>
      </div>
    </section>
  </main><Footer/></>
}