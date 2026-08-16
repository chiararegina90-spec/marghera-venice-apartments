import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venezia con bambini | Journal | Marghera Venice Apartments',
  description:'Una Venezia fatta di campi, musei, barche e pause: con i bambini il segreto è non trasformarla in una corsa.',
  alternates:{canonical:'/journal/venezia-con-bambini',languages:{'it-IT':'/journal/venezia-con-bambini','en-GB':'/en/journal/venezia-con-bambini','de-DE':'/de/journal/venezia-con-bambini','fr-FR':'/fr/journal/venezia-con-bambini','es-ES':'/es/journal/venezia-con-bambini','zh-CN':'/zh/journal/venezia-con-bambini','x-default':'/journal/venezia-con-bambini'}}
};

const sections = [
{title:'Costruisci una giornata leggera',text:'Scegli una grande visita al mattino e lascia il pomeriggio più libero. Venezia con i bambini funziona meglio quando si alternano monumenti, vaporetto, pause e momenti in cui possono semplicemente giocare.'},
{title:'Museo di Storia Naturale',text:'Il Museo di Storia Naturale di Venezia Giancarlo Ligabue, ospitato nel Fontego dei Turchi sul Canal Grande, è una tappa particolarmente adatta alle famiglie. Collezioni naturalistiche e allestimenti permettono di alternare la visita della città a un’esperienza coinvolgente anche per i più piccoli.'},
{title:'Aree verdi e giochi',text:'Venezia offre anche spazi dove rallentare. Sant’Elena e l’area dei Giardini della Biennale permettono di inserire una pausa nel verde durante la giornata; nelle zone attrezzate i bambini possono giocare e muoversi lontano dai percorsi più affollati.'},
{title:'I campi sono parte dell’itinerario',text:'A Venezia non servono sempre attrazioni organizzate. I campi più tranquilli sono perfetti per una merenda, una pausa e qualche minuto di libertà prima di riprendere la visita.'},
{title:'Passeggino o marsupio?',text:'Ponti e gradini rendono alcuni percorsi più impegnativi con il passeggino. Un itinerario ragionato e qualche tratta in vaporetto possono alleggerire molto la giornata.'}
];

const related = [
['Venezia senza far arrabbiare i veneziani','/journal/buone-maniere-a-venezia'],
['Acqua alta a Venezia','/journal/acqua-alta-a-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/venezia-bambini-campo-nuova.webp" alt="Venezia con bambini" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Venezia con bambini</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Famiglie</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venezia con bambini</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Una Venezia fatta di campi, musei, barche e pause: con i bambini il segreto è non trasformarla in una corsa.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Venezia può essere bellissima con i bambini se si cambia ritmo. Meno monumenti da spuntare, più esperienze: un vaporetto, un campo dove fermarsi, un museo scelto bene e il tempo di osservare la città.</p>
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
            <p className="mt-4 font-serif text-3xl">Non cercare di vedere tutta Venezia. Una giornata riuscita con i bambini vale più di una lista lunghissima di monumenti visitati di fretta.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Per le famiglie</p>
            <p className="mt-3 text-slate-600">Per orari, biglietti e attività del Museo di Storia Naturale consulta direttamente il sito ufficiale.</p>
            <a href="https://msn.visitmuve.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Museo di Storia Naturale – sito ufficiale ↗</a>
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