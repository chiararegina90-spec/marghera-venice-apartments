import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venezia con il cane | Journal | Marghera Venice Apartments',
  description:'Passeggiare tra calli e campi con il proprio cane è possibile: servono solo un po’ di organizzazione e ritmi adatti.',
  alternates:{canonical:'/journal/venezia-con-il-cane',languages:{'it-IT':'/journal/venezia-con-il-cane','en-GB':'/en/journal/venezia-con-il-cane','de-DE':'/de/journal/venezia-con-il-cane','fr-FR':'/fr/journal/venezia-con-il-cane','es-ES':'/es/journal/venezia-con-il-cane','zh-CN':'/zh/journal/venezia-con-il-cane','x-default':'/journal/venezia-con-il-cane'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const sections = [
{title:'Scegli gli orari migliori',text:'Mattina presto e tardo pomeriggio sono spesso più piacevoli delle ore centrali. Nei mesi caldi controlla la temperatura della pavimentazione, porta acqua e prevedi pause frequenti all’ombra.'},
{title:'Muoversi senza stress',text:'Calli strette, ponti e folla possono stancare anche il cane. Evita gli assi più affollati nelle ore di punta, fai pause regolari e lascia spazio agli altri passanti quando ti fermi.'},
{title:'Trasporto pubblico: controlla le regole ACTV',text:'Le regole cambiano tra navigazione e rete automobilistica/tranviaria. In navigazione i cani devono essere muniti di museruola e tenuti al guinzaglio o in braccio; su autobus e tram ACTV non è consentito il trasporto di cani di taglia media o grande. Verifica sempre le condizioni aggiornate prima di partire.'},
{title:'Zone più tranquille',text:'Allontanarsi dall’asse San Marco–Rialto aiuta a trovare campi e fondamenta più rilassati. Castello, Sant’Elena e alcune zone del Lido sono spesso più adatte a una passeggiata con ritmi tranquilli.'},
{title:'Rientrare in una casa pet-friendly',text:'Rossi Apartment e Dimora Castelli accolgono gli animali. Negli appartamenti mettiamo a disposizione ciotole e cuccia; per pet shop, toelettatura e veterinario trovi i riferimenti aggiornati nella pagina Servizi in zona.'}
];

const related = [
['Servizi in zona','/servizi-in-zona'],
['Lido di Venezia','/guide/lido-di-venezia'],
['Come muoversi','/come-raggiungere-venezia']
];

export default function Article(){
  return <><Header/><main>
    <article>
      <section className="relative min-h-[72vh] overflow-hidden pt-20">
        <Image src="/images/journal-venezia-cane.webp" alt="Venezia con il cane" fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
        <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Venezia con il cane</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Pet Friendly</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venezia con il cane</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/80">Passeggiare tra calli e campi con il proprio cane è possibile: servono solo un po’ di organizzazione e ritmi adatti.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="font-serif text-3xl leading-relaxed text-navy">Venezia è una città interamente pedonale, ma ponti, folla e pavimentazioni possono rendere la giornata intensa per un animale. Programmare soste, acqua e percorsi meno affollati fa una grande differenza.</p>
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
            <p className="mt-4 font-serif text-3xl">Entrambi i nostri appartamenti sono Pet Friendly e possiamo predisporre cuccia e ciotole: comunicaci la presenza del cane prima dell’arrivo.</p>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni aggiornate</p>
            <p className="mt-3 text-slate-600">Date, programmi, tariffe e condizioni possono cambiare. Per gli elementi variabili consulta sempre la fonte ufficiale prima della visita.</p>
            <a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">ACTV – informazioni sul servizio ↗</a>
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
