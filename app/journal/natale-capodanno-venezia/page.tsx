import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Natale e Capodanno a Venezia | Journal | Marghera Venice Apartments',
  description:'Luci, inverno, calli più intime e grandi eventi: Venezia cambia ritmo durante le feste.',
  alternates:{canonical:'/journal/natale-capodanno-venezia',languages:{'it-IT':'/journal/natale-capodanno-venezia','en-GB':'/en/journal/natale-capodanno-venezia','de-DE':'/de/journal/natale-capodanno-venezia','fr-FR':'/fr/journal/natale-capodanno-venezia','es-ES':'/es/journal/natale-capodanno-venezia','zh-CN':'/zh/journal/natale-capodanno-venezia','x-default':'/journal/natale-capodanno-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:'Venezia a Natale',text:'Mercatini e iniziative possono variare di anno in anno. Il piacere più grande resta spesso passeggiare tra campi illuminati, chiese e sestieri con un ritmo più tranquillo.'},
{title:'Capodanno',text:'La notte di San Silvestro Venezia celebra l’arrivo del nuovo anno con eventi e, quando previsto dal programma ufficiale, con uno spettacolo pirotecnico nel Bacino di San Marco. Accessi, orari, aree di visione e trasporti straordinari possono cambiare a ogni edizione: verifica sempre le informazioni ufficiali prima di partire.'},
{title:'Come vestirsi',text:'Umidità, vento e possibili giornate di acqua alta rendono utili scarpe adatte e abbigliamento a strati.'}
];

const related = [
['Acqua alta a Venezia','/journal/acqua-alta-a-venezia'],
['Come arrivare a Venezia','/come-raggiungere-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-natale-capodanno.webp" alt="Natale e Capodanno a Venezia" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Natale e Capodanno a Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Natale e Capodanno a Venezia</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Luci, inverno, calli più intime e grandi eventi: Venezia cambia ritmo durante le feste.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Tra dicembre e inizio gennaio Venezia offre un’atmosfera molto diversa dall’estate. Le giornate sono più corte e il clima richiede attenzione, ma la luce invernale e le passeggiate serali possono essere magnifiche.</p>
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
            <p className="mt-4 font-serif text-3xl">Per le feste prenota ristoranti ed eventi con anticipo, ma lascia sempre qualche ora libera: Venezia d’inverno è bellissima anche senza programma.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://www.veneziaunica.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Venezia Unica ↗</a>
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
