import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Jesolo: spiaggia, mare e come arrivare | Marghera Venice Apartments',
  description: 'Piccola guida a Lido di Jesolo: spiaggia, famiglie, passeggiate e collegamenti in auto o autobus ATVO da Venezia Mestre.',
  alternates:{canonical:'/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}}
};

const highlights = [
  ['Una lunga giornata al mare','Jesolo è una delle mete balneari più conosciute del Veneto e permette di alternare facilmente giornate culturali a Venezia e tempo sulla spiaggia.'],
  ['Spiaggia attrezzata','Lungo il litorale trovi stabilimenti balneari, servizi, ristorazione e numerose possibilità per trascorrere l’intera giornata sul mare.'],
  ['Famiglie','Spiaggia sabbiosa, passeggiate pianeggianti e molti servizi rendono Jesolo una destinazione semplice anche con bambini.'],
  ['Passeggiata serale','Dopo il mare puoi fermarti sul litorale per cena o per una passeggiata prima di rientrare a Marghera.'],
];

export default function JesoloGuide(){
  return <><Header/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/guide-jesolo.webp" alt="Spiaggia di Jesolo con cabine colorate e ombrelloni" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/5"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-white/75"><Link href="/">Home</Link><span>›</span><Link href="/guide">Guide</Link><span>›</span><span className="text-gold">Jesolo</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Guide</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-8xl">Lido di Jesolo</h1>
          <p className="mt-5 max-w-3xl text-xl text-white/80">Una giornata di mare facile da organizzare partendo da Marghera, in auto oppure con l’autobus da Venezia Mestre.</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Una pausa sul mare</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Dalla laguna all’Adriatico</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Jesolo è una delle escursioni che ci vengono chieste più spesso dagli ospiti. È una scelta semplice per chi desidera dedicare una giornata al mare senza rinunciare a soggiornare in una posizione comoda per visitare Venezia.</p>
          <p className="mt-5 text-lg leading-8 text-slate-600">Il Lido di Jesolo offre un lungo litorale sabbioso, stabilimenti, servizi e una zona urbana ricca di locali e attività stagionali. Puoi viverlo come una semplice giornata di spiaggia oppure fermarti fino a sera.</p>
        </div>
        <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Come arrivare</p>
          <h2 className="mt-3 font-serif text-4xl">Auto oppure ATVO</h2>
          <p className="mt-5 text-white/75"><strong>In auto:</strong> da Marghera puoi raggiungere Jesolo direttamente con il tuo mezzo, soluzione comoda soprattutto per famiglie e per chi porta con sé tutto il necessario per la spiaggia.</p>
          <p className="mt-4 text-white/75"><strong>In autobus:</strong> la linea ATVO 10A collega la stazione ferroviaria di Venezia Mestre con Lido di Jesolo. Gli orari sono stagionali: controllali sempre prima di partire.</p>
          <a href="https://www.atvo.it/assets/bus_routes/010a_08.06.26-30.08.26.pdf" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">Orari ATVO 10A 2026 ↗</a>
        </aside>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Perché andarci" title="Jesolo in quattro idee" text="Una destinazione semplice da abbinare a qualche giorno dedicato a Venezia."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Il nostro consiglio</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Scegli l’auto per la massima libertà, il bus per non pensare al parcheggio</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">Se viaggi con bambini, molte borse o attrezzatura da spiaggia, l’auto è spesso la soluzione più pratica. Se preferisci lasciare l’auto parcheggiata all’appartamento, raggiungi Venezia Mestre e prosegui con ATVO.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://www.visitjesolo.it/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Eventi e informazioni su Visit Jesolo ↗</a>
          <Link href="/guide" className="rounded-full border border-navy px-7 py-4 font-bold text-navy">Tutte le guide</Link>
          <Link href="/scopri-il-veneto" className="rounded-full border border-navy px-7 py-4 font-bold text-navy">Scopri il Veneto</Link>
        </div>
      </div>
    </section>
  </main><Footer/></>
}