import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:"Dove parcheggiare per visitare Venezia | Journal | Marghera Venice Apartments",
  description:"No, in Piazza San Marco non si arriva in macchina. Ma per chi preferisce l’auto esistono diverse soluzioni molto comode.",
  alternates:{canonical:'/journal/dove-parcheggiare-venezia',languages:{'it-IT':'/journal/dove-parcheggiare-venezia','en-GB':'/en/journal/dove-parcheggiare-venezia','de-DE':'/de/journal/dove-parcheggiare-venezia','fr-FR':'/fr/journal/dove-parcheggiare-venezia','es-ES':'/es/journal/dove-parcheggiare-venezia','zh-CN':'/zh/journal/dove-parcheggiare-venezia','x-default':'/journal/dove-parcheggiare-venezia'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:"La soluzione più semplice per i nostri ospiti",text:"Rossi Apartment e Dimora Castelli dispongono di parcheggio gratuito. Per visitare Venezia consigliamo normalmente di lasciare l’auto all’alloggio e utilizzare autobus o treno: niente ricerca del posto auto e nessun costo di garage per la giornata."},
{title:"Piazzale Roma: Autorimessa Comunale AVM",text:"Se vuoi arrivare il più vicino possibile al centro storico, puoi attraversare il Ponte della Libertà fino a Piazzale Roma e lasciare l’auto nell’Autorimessa Comunale. Sul sito AVM trovi tariffe, condizioni e possibilità di prenotazione."},
{title:"Piazzale Roma: Garage San Marco",text:"Sempre a Piazzale Roma trovi il Garage San Marco, altra soluzione multipiano per chi preferisce arrivare alle porte di Venezia con il proprio mezzo. Anche qui è consigliabile controllare disponibilità e prenotare nei periodi di maggiore affluenza."},
{title:"Tronchetto",text:"Il Tronchetto è un’altra grande area di accesso automobilistico a Venezia. È particolarmente utile per chi vuole lasciare l’auto prima di Piazzale Roma e proseguire poi con i collegamenti pubblici verso il centro."},
{title:"Auto o mezzi pubblici?",text:"L’auto offre autonomia, ma i garage di Venezia hanno un costo decisamente superiore rispetto a autobus e treno. Se il parcheggio è già incluso nel soggiorno, lasciare l’auto a Marghera è quasi sempre la scelta più semplice."},
{title:"Da Piazzale Roma in poi",text:"Qui finisce la Venezia delle automobili. Dal terminal puoi proseguire a piedi oppure con il vaporetto ACTV. Piazza San Marco in macchina, invece, lasciamola alla fantasia. 😄"}
];

const related = [
["Come arrivare","/come-raggiungere-venezia"],
["Venezia senza far arrabbiare i veneziani","/journal/buone-maniere-a-venezia"]
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-parcheggi-venezia.webp" alt="Dove parcheggiare per visitare Venezia" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Dove parcheggiare per visitare Venezia</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Trasporti</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Dove parcheggiare per visitare Venezia</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">No, in Piazza San Marco non si arriva in macchina. Ma per chi preferisce l’auto esistono diverse soluzioni molto comode.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Venezia è una città senza automobili nel centro storico. Arrivando dalla terraferma, l’auto può raggiungere Piazzale Roma o l’area del Tronchetto; da lì si prosegue a piedi o sull’acqua.</p>
          <div className="mt-12 space-y-10">
            {sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]">
              <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
              <div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div>
            </section>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-[2rem] bg-gold p-8 text-navy">
            <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-4 font-serif text-3xl">Se soggiorni da noi, prova prima la soluzione più semplice: auto parcheggiata gratuitamente all’appartamento e Venezia in autobus o treno. Se preferisci guidare, Piazzale Roma e Tronchetto restano ottime alternative.</p>
          </div>
          <div className="mt-7 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Approfondisci</p>
            <p className="mt-3 text-slate-600">Per informazioni soggette a variazioni consulta sempre la fonte ufficiale.</p>
            <div className="mt-5 flex flex-wrap gap-3"><a href="https://avm.avmspa.it/it/content/autorimessa-comunale-1" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Autorimessa Comunale AVM ↗</a><a href="https://www.garagesanmarco.it/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Garage San Marco ↗</a></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a esplorare</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {related.map(([label,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{label} <span className="text-gold">→</span></Link>)}
          </div>
          <div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div>
        </div>
      </section>
    </article>
  </main><Footer/></>
}
