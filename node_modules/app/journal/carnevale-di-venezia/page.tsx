import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Carnevale di Venezia | Journal | Marghera Venice Apartments',
  description:'Carnevale di Venezia 2027, dal 23 gennaio al 9 febbraio: maschere, cortei, spettacoli e consigli pratici per vivere la festa.',
  alternates:{canonical:'/journal/carnevale-di-venezia',languages:{'it-IT':'/journal/carnevale-di-venezia','en-GB':'/en/journal/carnevale-di-venezia','de-DE':'/de/journal/carnevale-di-venezia','fr-FR':'/fr/journal/carnevale-di-venezia','es-ES':'/es/journal/carnevale-di-venezia','zh-CN':'/zh/journal/carnevale-di-venezia','x-default':'/journal/carnevale-di-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:'Una tradizione antichissima',text:'Le prime testimonianze del Carnevale veneziano risalgono al Medioevo. Oggi la festa unisce maschere storiche, spettacoli di strada, cortei acquei, eventi culturali e feste nei palazzi.'},
{title:'Come organizzare la giornata',text:'Consulta il programma ufficiale prima di partire e scegli uno o due appuntamenti principali. Durante i fine settimana e negli ultimi giorni del Carnevale il centro può essere molto affollato: partire presto da Marghera permette di vivere Venezia con più calma.'},
{title:'Carnevale con bambini',text:'Gli spettacoli diffusi, le maschere e i cortei sono divertenti anche per le famiglie. Eviterei però programmi troppo rigidi: lascia spazio a soste nei campi e a percorsi meno congestionati.'}
];

const related = [
['Venezia con bambini','/journal/venezia-con-bambini'],
['Come arrivare a Venezia','/come-raggiungere-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-carnevale.webp" alt="Carnevale di Venezia" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Carnevale di Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi • 23 gennaio – 9 febbraio 2027</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Carnevale di Venezia</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Maschere, cortei, spettacoli e una città che per alcune settimane cambia completamente volto.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Il Carnevale non è soltanto Piazza San Marco: è un evento diffuso tra calli, campi, palazzi, isole e terraferma. Il modo migliore per viverlo è alternare gli appuntamenti più famosi a momenti lontani dalle zone più affollate.</p>
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
            <p className="mt-4 font-serif text-3xl">Per il Carnevale lascia l’auto nel parcheggio dell’appartamento e raggiungi Venezia con i mezzi pubblici. Nei giorni di maggiore affluenza è molto più semplice.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://carnevale.venezia.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Programma ufficiale del Carnevale ↗</a>
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
