import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Burano: cosa vedere e come organizzare la visita | Marghera Venice Apartments',
  description: 'Guida a Burano: case colorate, Museo del Merletto, Piazza Galuppi, itinerario e consigli pratici.',
  openGraph: {
    title: 'Burano, l’isola dei colori',
    description: 'Una guida pratica e originale per organizzare la visita a Burano.',
    images: ['/images/burano-guide-hero.webp'],
  },
  alternates:{canonical:'/guide/burano',languages:{'it-IT':'/guide/burano','en-GB':'/en/guide/burano','de-DE':'/de/guide/burano','fr-FR':'/fr/guide/burano','es-ES':'/es/guide/burano','zh-CN':'/zh/guide/burano','x-default':'/guide/burano'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const highlights = [
  ['Le case colorate','Facciate vivaci, canali stretti e riflessi che cambiano durante la giornata.'],
  ['Museo del Merletto','Racconta secoli di lavorazione del merletto veneziano.'],
  ['Piazza Galuppi','Il cuore dell’isola, ideale per orientarsi e fare una pausa.'],
  ['Casa di Bepi Suà','Una delle facciate più note e decorate di Burano.'],
  ['Canali secondari','Zone più tranquille e fotografie più naturali.'],
  ['Mazzorbo','Un ponte conduce a un paesaggio più verde e silenzioso.'],
];

const experiences = [
  ['Passeggiata fotografica','Colori, ponti bassi e riflessi rendono ogni deviazione interessante.'],
  ['Museo del Merletto','Approfondisci una tradizione artigiana unica.'],
  ['Pausa in Piazza Galuppi','Il luogo più semplice per fermarsi e osservare la vita dell’isola.'],
  ['Pranzo di pesce','La tradizione lagunare è parte importante dell’esperienza.'],
  ['Passeggiata a Mazzorbo','Attraversa il ponte e cambia completamente atmosfera.'],
  ['Calli laterali','Allontanati dalla via principale per scoprire una Burano più quieta.'],
];

const itinerary = [
  ['09:30','Arrivo a Burano','Comincia presto per vivere i canali con più calma.'],
  ['10:00','Case colorate e calli laterali','Esplora prima che aumenti l’affluenza.'],
  ['11:30','Museo del Merletto','Approfondisci la tradizione artigiana.'],
  ['13:00','Pranzo','Scegli una pausa semplice o cucina di pesce.'],
  ['14:30','Casa di Bepi e canali minori','Dedica tempo alle zone meno affollate.'],
  ['16:00','Mazzorbo','Attraversa il ponte e cambia atmosfera.'],
];

const faq = [
  ['Quanto tempo serve per visitare Burano?','Mezza giornata è sufficiente; una giornata intera permette museo, Mazzorbo e pranzo senza fretta.'],
  ['Burano è adatta ai bambini?','Sì, soprattutto per i colori e il viaggio in vaporetto.'],
  ['Si può visitare con il cane?','Sì, ma verifica le regole aggiornate per musei e trasporto pubblico.'],
  ['Qual è il momento migliore?','La mattina presto offre luce morbida e meno folla.'],
  ['Murano e Burano nello stesso giorno?','È possibile, ma la giornata è intensa: parti presto.'],
];

export default function BuranoGuide(){
  return <><Header/>
    <main data-build="sprint6-burano-1">
      <section className="relative min-h-[84vh] overflow-hidden pt-20">
        <Image src="/images/burano-guide-hero.webp" alt="Canale e case colorate di Burano" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/15"/>
        <div className="relative mx-auto flex min-h-[calc(84vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
              <Link href="/" className="hover:text-gold">Home</Link><span>›</span>
              <Link href="/scopri-venezia" className="hover:text-gold">Scopri Venezia</Link><span>›</span>
              <span className="text-gold">Burano</span>
            </nav>
            <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Marghera Venice Guide</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Burano</h1>
            <p className="mt-4 font-serif text-3xl text-white/95">L’isola dei colori, del merletto e dei ritmi lenti.</p>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Canali raccolti, facciate vivaci e una tradizione artigiana che continua a raccontare la laguna nord.</p>
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
            ['Visita consigliata','Mezza giornata o giornata intera'],
            ['Come arrivare','Vaporetto dalla zona di Venezia'],
            ['Ideale per','Arte, famiglie e fotografia'],
            ['Stile della visita','A piedi, con ritmo tranquillo'],
          ].map(([title,text])=><div key={title} className="rounded-2xl bg-cream p-5">
            <p className="text-xs font-black uppercase tracking-[.16em] text-gold">{title}</p>
            <p className="mt-2 font-serif text-2xl text-navy">{text}</p>
          </div>)}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Una storia ancora viva</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Il colore è solo l’inizio</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>Burano conquista al primo sguardo, ma la sua identità non si esaurisce nelle facciate colorate. È un’isola legata alla pesca, alla vita di comunità e alla tradizione del merletto.</p>
              <p>Le dimensioni contenute permettono di visitarla a piedi, ma conviene evitare una passeggiata troppo rapida. Le calli laterali, Piazza Galuppi e il ponte verso Mazzorbo raccontano una laguna più silenziosa.</p>
              <p>Arriva al mattino, lascia il percorso principale e dedica tempo ai canali minori: sono spesso la parte più autentica della visita.</p>
            </div>
          </div>
          <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Prima di partire</p>
            <h2 className="mt-3 font-serif text-4xl">Informazioni che possono cambiare</h2>
            <p className="mt-5 text-white/75">Orari dei vaporetti, tariffe, accessi alle fornaci e aperture museali possono variare. Usa questa guida per progettare la giornata, poi verifica i dettagli sui canali ufficiali poco prima della visita.</p>
            <div className="mt-7 grid gap-3">
              <a href="https://www.veneziaunica.it/en/things-to-do-in-venice/venice-areas/islands/burano" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-center font-bold text-navy">Venezia Unica</a>
              <a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold">Trasporti ACTV</a>
              <a href="https://museomerletto.visitmuve.it/en/home/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold">Museo del Merletto</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Cosa non perdere" title="Sei modi per conoscere Burano" text="Una selezione equilibrata tra arte, storia, passeggiate ed esperienze."/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="text-2xl text-gold">✦</div>
              <h2 className="mt-4 font-serif text-3xl text-navy">{title}</h2>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Esperienze" title="Colori, artigianato e laguna" text="Murano è più interessante quando la visita alterna osservazione, racconto e tempo libero."/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map(([title,text])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <h2 className="font-serif text-3xl text-navy">{title}</h2>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="itinerario" className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Itinerario consigliato" title="Burano in una giornata rilassata" text="Gli orari sono orientativi: usali come struttura flessibile."/>
          <div className="grid gap-4">
            {itinerary.map(([time,title,text])=><article key={time} className="grid gap-4 rounded-[2rem] bg-white/10 p-7 md:grid-cols-[110px_1fr]">
              <div className="font-black tracking-[.14em] text-gold">{time}</div>
              <div><h2 className="font-serif text-3xl">{title}</h2><p className="mt-2 text-white/70">{text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
            <Image src="/images/burano-canale.webp" alt="Canale di Burano con case colorate" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il consiglio di Marghera Venice Apartments</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Arriva presto e lascia il percorso principale</h2>
            <p className="mt-6 text-lg text-slate-600">Le foto più belle e l’atmosfera più autentica si trovano spesso nelle calli laterali. Dopo Piazza Galuppi, prosegui verso Mazzorbo.</p>
            <div className="mt-8 rounded-[2rem] border-l-4 border-aqua bg-cream p-7">
              <p className="font-bold text-navy">Murano + Burano nello stesso giorno?</p>
              <p className="mt-2 text-slate-600">È possibile, ma la giornata diventa intensa. Per goderti entrambe le isole, parti presto e limita il numero di visite prenotate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-20 text-navy">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.22em]">Lo sapevi?</p>
          <h2 className="mt-4 font-serif text-5xl">Il Museo del Merletto si trova nello storico palazzo del Podestà di Torcello.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">L’edificio fu anche sede della celebre Scuola del Merletto di Burano.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionTitle eyebrow="Domande frequenti" title="Prima di visitare Burano" text="Risposte rapide ai dubbi più comuni."/>
          <div className="space-y-4">
            {faq.map(([question,answer])=><details key={question} className="group rounded-3xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer list-none font-serif text-2xl text-navy">{question}<span className="float-right text-gold group-open:rotate-45">+</span></summary>
              <p className="mt-4 max-w-4xl text-slate-600">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Dopo Burano</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Rientra in una casa comoda e collegata con Venezia</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Parcheggio privato, collegamenti H24, servizi Pet & Family e contatto diretto con noi prima e durante il soggiorno.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
            <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
            <Link href="/guide/murano" className="rounded-full border border-slate-300 px-8 py-4 font-bold text-navy">Guida di Murano</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    <Script id="burano-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context':'https://schema.org',
      '@type':'TouristDestination',
      name:'Burano',
      description:'Guida pratica a Burano a cura di Marghera Venice Apartments.',
      containedInPlace:{'@type':'City',name:'Venezia'},
      touristType:['Appassionati di arte','Famiglie','Coppie','Fotografi']
    })}}/>
  </>
}
