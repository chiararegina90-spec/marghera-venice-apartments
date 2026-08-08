import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Festa del Redentore | Journal | Marghera Venice Apartments',
  description:'Una delle notti più sentite dai veneziani: memoria, tavolate, barche e fuochi riflessi nel Bacino di San Marco.'
};

const sections = [
{title:'Il ponte votivo',text:'Per la ricorrenza viene realizzato un ponte galleggiante temporaneo tra le Zattere e la Giudecca, verso la Chiesa del Redentore. È uno dei simboli più riconoscibili della festa.'},
{title:'La notte dei fuochi',text:'Il sabato sera il Bacino di San Marco diventa il grande teatro dello spettacolo pirotecnico. Accessi, aree di visione e prenotazioni possono essere regolamentati: le disposizioni vanno controllate ogni anno.'},
{title:'Vuoi vedere i fuochi dal Bacino di San Marco?',text:'La Festa del Redentore si celebra ogni anno la terza domenica di luglio e il grande spettacolo pirotecnico si svolge nella notte tra sabato e domenica. Indicativamente, circa due settimane prima della festa vengono aperte le prenotazioni per i posti destinati al pubblico nelle aree predisposte per assistere ai fuochi nel Bacino di San Marco. Date, modalità e aree disponibili possono cambiare ogni anno: controlla sempre le comunicazioni ufficiali e non aspettare l’ultimo momento.'},
{title:'Non è soltanto uno spettacolo',text:'Per i veneziani il Redentore è soprattutto una ricorrenza di comunità. Se vieni per la prima volta, vale la pena conoscerne la storia e non considerarlo semplicemente una serata di fuochi d’artificio.'}
];

const related = [
['Come arrivare a Venezia','/come-raggiungere-venezia'],
['Acqua alta a Venezia','/journal/acqua-alta-a-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-redentore.webp" alt="Festa del Redentore" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Festa del Redentore</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Festa del Redentore</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Una delle notti più sentite dai veneziani: memoria, tavolate, barche e fuochi riflessi nel Bacino di San Marco.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Il Redentore nasce dal voto della città per la liberazione dalla peste del Cinquecento. Ancora oggi conserva un carattere profondamente veneziano: alla dimensione religiosa si affiancano la festa in barca, le cene all’aperto e lo spettacolo pirotecnico.</p>
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
            <p className="mt-4 font-serif text-3xl">Non improvvisare la sera stessa: controlla con anticipo accessi, prenotazioni e variazioni dei trasporti. Per questa festa la città gestisce flussi eccezionali.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://www.comune.venezia.it/it/taxonomy/term/478" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Informazioni del Comune di Venezia ↗</a>
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