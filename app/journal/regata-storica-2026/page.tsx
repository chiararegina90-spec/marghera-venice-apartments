import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Regata Storica Venezia 2026: programma, orari e dove vederla',
  description:'La Regata Storica di Venezia torna domenica 6 settembre 2026: corteo storico sul Canal Grande, orari delle gare, percorso e consigli per assistere all’evento.',
  alternates:{canonical:'/journal/regata-storica-2026',languages:{'it-IT':'/journal/regata-storica-2026','en-GB':'/en/journal/regata-storica-2026','de-DE':'/de/journal/regata-storica-2026','fr-FR':'/fr/journal/regata-storica-2026','es-ES':'/es/journal/regata-storica-2026','zh-CN':'/zh/journal/regata-storica-2026','x-default':'/journal/regata-storica-2026'}},
  openGraph:{type:'article',images:['/images/journal-regata-storica-2026.webp']},
  twitter:{card:'summary_large_image',images:['/images/journal-regata-storica-2026.webp']}
};

const sections = [
  {title:'Il Corteo Storico: Venezia torna ai tempi della Serenissima',text:'Alle 15:30 prende il via il Corteo Storico-Sportivo. Imbarcazioni storiche con figuranti in costume, gondole e barche delle associazioni di voga alla veneta percorrono il Bacino di San Marco, il Canal Grande, Rialto e la zona della Ferrovia, per poi tornare lungo il Canal Grande fino a Ca’ Foscari. Il corteo storico rievoca anche l’accoglienza riservata nel 1489 a Caterina Cornaro, regina di Cipro, che rinunciò al trono in favore della Serenissima.'},
  {title:'Poi inizia la vera sfida sull’acqua',text:'Dalle 16:00 iniziano le regate. Tra gli appuntamenti principali: alle 17:10 la Regata delle Caorline a sei remi, alle 17:40 la Regata delle Donne su mascarete a due remi e alle 18:10 la Regata dei Gondolini a due remi. Il programma comprende anche la Sfida Remiera Internazionale delle Università su galeoni a otto remi.'},
  {title:'Dove vedere la Regata Storica',text:'Il Bacino di San Marco e Punta della Dogana, Rialto, il tratto verso San Marcuola e Ca’ Foscari sono tra i punti più interessanti lungo il percorso. È una delle giornate più partecipate dell’anno: le rive del Canal Grande si riempiono presto, quindi se vuoi trovare una buona posizione arriva con largo anticipo.'},
  {title:'Attenzione ai trasporti',text:'Domenica 6 settembre il servizio di navigazione ACTV subirà modifiche e sospensioni nel pomeriggio. Le comunicazioni ufficiali indicano variazioni dalle 14:00 alle 19:30 circa; in Canal Grande la navigazione sarà sospesa indicativamente dalle 15:00 alle 19:30 e nel Bacino di San Marco sono previste interruzioni in alcune tratte. Se soggiorni a Marghera Venice Apartments, consigliamo di raggiungere Venezia in autobus o treno e di prevedere più spostamenti a piedi.'},
  {title:'Perché vale la pena vederla almeno una volta',text:'La Regata Storica non è soltanto uno spettacolo organizzato per i visitatori. La voga alla veneta è ancora oggi una tradizione viva e questa giornata rappresenta uno dei momenti culminanti della stagione remiera cittadina. Per qualche ora storia, sport, colori e partecipazione veneziana si incontrano sullo stesso Canal Grande.'},
  {title:'Informazioni pratiche',text:'Domenica 6 settembre 2026, Canal Grande – Venezia. Corteo Storico dalle 15:30 e regate dalle 16:00. Programma, accessi e trasporti possono subire variazioni: prima di partire controlla sempre gli aggiornamenti pubblicati sul sito ufficiale della Regata Storica.'}
];

export default function Article(){
  return <><Header/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-regata-storica-2026.webp" alt="Corteo storico della Regata Storica di Venezia sul Canal Grande" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Regata Storica 2026</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi</p>
        <h1 className="mt-4 break-words font-serif text-[clamp(3rem,9vw,6rem)] leading-none">Regata Storica di Venezia 2026</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/80">Domenica 6 settembre il Canal Grande torna protagonista tra corteo storico, voga alla veneta e grandi regate.</p>
      </div></div>
    </section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">Ogni prima domenica di settembre Venezia celebra uno degli appuntamenti più spettacolari e sentiti della sua tradizione. La Regata Storica unisce storia, sport, costumi d’epoca e partecipazione popolare, trasformando il Canal Grande nel grande palcoscenico della voga alla veneta.</p>
      <div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p><p className="mt-4 font-serif text-3xl">Arriva presto in autobus o treno, scegli in anticipo il tratto del Canal Grande da cui vuoi assistere alla manifestazione e pianifica il rientro prima della fine delle gare.</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni ufficiali</p><p className="mt-3 text-slate-600">Programma, orari e modifiche alla navigazione possono cambiare. Controlla sempre gli aggiornamenti ufficiali prima della visita.</p><a href="https://www.regatastoricavenezia.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Sito ufficiale Regata Storica ↗</a></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a esplorare</p><h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2"><Link href="/journal/mostra-del-cinema" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Mostra del Cinema 2026 <span className="text-gold">→</span></Link><Link href="/journal/homo-faber-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Homo Faber 2026 <span className="text-gold">→</span></Link></div>
      <div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div>
    </div></section>
  </article></main><Footer/></>;
}
