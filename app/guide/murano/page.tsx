import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Murano: cosa vedere e come organizzare la visita | Marghera Venice Apartments',
  description: 'Guida a Murano: fornaci, Museo del Vetro, Basilica dei Santi Maria e Donato, itinerario, consigli pratici e collegamenti da Venezia.',
  openGraph: {
    title: 'Murano, l’isola dove il vetro diventa arte',
    description: 'Una guida pratica e originale per organizzare la visita a Murano.',
    images: ['/images/murano-guide-hero.webp'],
  },
};

const highlights = [
  ['Le fornaci','Assistere alla lavorazione del vetro permette di comprendere la precisione e la velocità dei maestri muranesi.'],
  ['Museo del Vetro','Una raccolta storica ospitata nell’antica sede dei vescovi di Torcello, ideale per leggere l’evoluzione dell’arte vetraria.'],
  ['Basilica dei Santi Maria e Donato','Una delle architetture religiose più riconoscibili dell’isola, con un’atmosfera raccolta e un forte legame con la storia locale.'],
  ['Fondamenta dei Vetrai','Il tratto più piacevole per passeggiare tra canali, botteghe, ponti e laboratori.'],
  ['Botteghe artigiane','Non solo souvenir: cerca lavorazioni originali, firme riconoscibili e informazioni chiare sulla provenienza.'],
  ['Canali tranquilli','Allontanandosi dalle fermate principali, Murano rivela scorci silenziosi e un ritmo più lento.'],
];

const experiences = [
  ['Dimostrazione in fornace','Osserva sabbia, calore e gesti esperti trasformarsi in forme leggere e colorate.'],
  ['Laboratorio creativo','Alcune realtà propongono attività su prenotazione per adulti e famiglie.'],
  ['Museo e audioguida','Il Museo del Vetro offre un percorso storico e una guida digitale utilizzabile sul proprio smartphone.'],
  ['Shopping consapevole','Chiedi sempre informazioni sulla lavorazione e sull’origine dell’oggetto che desideri acquistare.'],
  ['Aperitivo sul canale','Una pausa all’aperto è il modo migliore per rallentare dopo musei e fornaci.'],
  ['Passeggiata fotografica','Ponti bassi, riflessi sull’acqua e facciate colorate offrono prospettive molto diverse da Venezia.'],
];

const itinerary = [
  ['09:30','Arrivo a Murano','Scendi in una fermata comoda per iniziare senza fretta e orientarti lungo il canale.'],
  ['10:00','Dimostrazione del vetro','Dedica la prima parte della mattina a una fornace o a un laboratorio prenotato.'],
  ['11:30','Fondamenta e botteghe','Passeggia, confronta le lavorazioni e lascia spazio alle deviazioni spontanee.'],
  ['13:00','Pranzo o cicchetti','Scegli un locale affacciato sull’acqua oppure una pausa più veloce.'],
  ['14:30','Museo del Vetro','Approfondisci tecniche, stili e storia del vetro muranese.'],
  ['16:30','Basilica e canali minori','Concludi con una zona più tranquilla, lontano dai passaggi principali.'],
  ['18:00','Rientro o proseguimento','Torna verso Venezia oppure abbina Burano se hai organizzato una giornata più lunga.'],
];

const faq = [
  ['Quanto tempo serve per visitare Murano?','Per una prima visita calcola almeno mezza giornata. Una giornata intera permette di aggiungere museo, pranzo e una passeggiata più lenta.'],
  ['Conviene prenotare la dimostrazione del vetro?','È consigliabile nei periodi di maggiore affluenza o quando desideri visitare una realtà specifica. Controlla sempre condizioni, durata e costi prima di prenotare.'],
  ['Murano è adatta ai bambini?','Sì. La lavorazione del vetro è coinvolgente, ma occorre rispettare le indicazioni di sicurezza nelle fornaci e alternare le visite con pause all’aperto.'],
  ['Si può visitare Murano con il cane?','La passeggiata sull’isola è piacevole anche con un cane. Per musei, fornaci e trasporto pubblico verifica in anticipo le regole aggiornate.'],
  ['Qual è il momento migliore?','La mattina offre spesso un’atmosfera più tranquilla e rende più semplice organizzare una dimostrazione o la visita al museo.'],
  ['Serve pagare il contributo di accesso?','Le regole del contributo di accesso dipendono dal giorno e dal percorso del visitatore. Consulta sempre il portale ufficiale del Comune di Venezia prima della visita.'],
];

export default function MuranoGuide(){
  return <><Header/>
    <main data-build="sprint6-murano-1">
      <section className="relative min-h-[84vh] overflow-hidden pt-20">
        <Image src="/images/murano-guide-hero.webp" alt="Opere in vetro colorato di Murano" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/15"/>
        <div className="relative mx-auto flex min-h-[calc(84vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
              <Link href="/" className="hover:text-gold">Home</Link><span>›</span>
              <Link href="/scopri-venezia" className="hover:text-gold">Scopri Venezia</Link><span>›</span>
              <span className="text-gold">Murano</span>
            </nav>
            <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Marghera Venice Guide</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Murano</h1>
            <p className="mt-4 font-serif text-3xl text-white/95">L’isola dove il vetro diventa arte.</p>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Fornaci, canali tranquilli e botteghe artigiane raccontano una tradizione che continua a rinnovarsi senza perdere la propria identità.</p>
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
            <h2 className="mt-3 font-serif text-5xl text-navy">Non è soltanto vetro: è un modo di leggere Venezia</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>Quando si arriva a Murano, la prima differenza rispetto al centro storico è il ritmo. Le fondamenta sono meno frenetiche, i ponti più raccolti e il rapporto tra botteghe, case e canali appare immediato.</p>
              <p>Il vetro è presente ovunque, ma la visita diventa davvero interessante quando si supera l’idea del semplice souvenir. Una fornace mostra il lavoro fisico e la precisione necessari per modellare il materiale; il museo ne racconta l’evoluzione; le botteghe permettono di osservare come la tradizione dialoghi con il design contemporaneo.</p>
              <p>Murano può essere visitata rapidamente, ma dà il meglio quando le si concede tempo: una deviazione lungo un canale laterale, una sosta davanti a una vetrina ben curata o qualche minuto per osservare la luce riflessa sull’acqua.</p>
            </div>
          </div>
          <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Prima di partire</p>
            <h2 className="mt-3 font-serif text-4xl">Informazioni che possono cambiare</h2>
            <p className="mt-5 text-white/75">Orari dei vaporetti, tariffe, accessi alle fornaci e aperture museali possono variare. Usa questa guida per progettare la giornata, poi verifica i dettagli sui canali ufficiali poco prima della visita.</p>
            <div className="mt-7 grid gap-3">
              <a href="https://www.veneziaunica.it/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-center font-bold text-navy">Venezia Unica</a>
              <a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold">Trasporti ACTV</a>
              <a href="https://museovetro.visitmuve.it/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold">Museo del Vetro</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Cosa non perdere" title="Sei modi per conoscere davvero Murano" text="Una selezione equilibrata tra arte, storia, passeggiate ed esperienze."/>
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
          <SectionTitle eyebrow="Esperienze" title="Guarda, prova, scegli con consapevolezza" text="Murano è più interessante quando la visita alterna osservazione, racconto e tempo libero."/>
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
          <SectionTitle eyebrow="Itinerario consigliato" title="Murano in una giornata, senza trasformarla in una corsa" text="Gli orari sono orientativi: usali come struttura flessibile."/>
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
            <Image src="/images/murano-glass.webp" alt="Dettagli in vetro artistico di Murano" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il consiglio di Marghera Venice Apartments</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Arriva al mattino e non fermarti alla prima vetrina</h2>
            <p className="mt-6 text-lg text-slate-600">Le prime ore della giornata sono spesso più piacevoli per passeggiare e organizzare una dimostrazione. Confronta più botteghe, fai domande e cerca oggetti che raccontino chiaramente chi li ha realizzati.</p>
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
          <h2 className="mt-4 font-serif text-5xl">Il museo si trova in un palazzo che fu sede dei vescovi di Torcello.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">La visita unisce quindi la storia dell’arte vetraria a quella di un edificio importante per la laguna veneziana.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionTitle eyebrow="Domande frequenti" title="Prima di visitare Murano" text="Risposte rapide ai dubbi più comuni."/>
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
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Dopo Murano</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Rientra in una casa comoda e collegata con Venezia</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Parcheggio privato, collegamenti H24, servizi Pet & Family e contatto diretto con noi prima e durante il soggiorno.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
            <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
            <Link href="/scopri-venezia" className="rounded-full border border-slate-300 px-8 py-4 font-bold text-navy">Altre guide su Venezia</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    <Script id="murano-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context':'https://schema.org',
      '@type':'TouristDestination',
      name:'Murano',
      description:'Guida pratica a Murano a cura di Marghera Venice Apartments.',
      containedInPlace:{'@type':'City',name:'Venezia'},
      touristType:['Appassionati di arte','Famiglie','Coppie','Fotografi']
    })}}/>
  </>
}