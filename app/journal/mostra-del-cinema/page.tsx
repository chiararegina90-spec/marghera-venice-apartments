import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Mostra del Cinema di Venezia | Journal | Marghera Venice Apartments',
  description:'Il Lido diventa il centro internazionale del cinema: proiezioni, red carpet e un’atmosfera completamente diversa dal resto dell’anno.'
};

const sections = [
{title:'Dove si svolge',text:'Il cuore della manifestazione è nell’area del Palazzo del Cinema e degli spazi della Biennale al Lido.'},
{title:'Biglietti e programma',text:'Film, orari, accrediti e modalità di accesso cambiano a ogni edizione. Per informazioni affidabili bisogna fare riferimento al programma ufficiale della Biennale.'},
{title:'Abbina cinema e Lido',text:'Puoi trasformare la giornata in un itinerario completo: Mostra, passeggiata sul lungomare, Murazzi e, se il tempo lo permette, spiaggia.'}
];

const related = [
['Lido di Venezia','/guide/lido-di-venezia'],
['Come muoversi','/come-raggiungere-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-mostra-cinema.webp" alt="Mostra del Cinema di Venezia" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Mostra del Cinema di Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Mostra del Cinema di Venezia</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Il Lido diventa il centro internazionale del cinema: proiezioni, red carpet e un’atmosfera completamente diversa dal resto dell’anno.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">La Mostra Internazionale d’Arte Cinematografica si svolge al Lido di Venezia ed è organizzata dalla Biennale. Anche senza partecipare agli eventi più esclusivi, il periodo della Mostra è interessante per vivere il Lido in una veste speciale.</p>
          <div className="mt-14 space-y-12">
            {sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]">
              <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
              <div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div>
            </section>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-[2rem] bg-gold p-8 text-navy">
            <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-4 font-serif text-3xl">Nei giorni più importanti considera tempi più larghi per i trasporti e prenota in anticipo ciò che richiede un biglietto.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://www.labiennale.org/it/cinema" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">La Biennale di Venezia – Cinema ↗</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a esplorare</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}
          </div>
          <div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div>
        </div>
      </section>
    </article>
  </main><Footer/></>
}