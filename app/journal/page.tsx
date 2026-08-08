import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Journal | Venezia, eventi e consigli | Marghera Venice Apartments',
  description:'Eventi, tradizioni, cultura veneziana, famiglie, trasporti e informazioni pratiche per vivere Venezia con maggiore consapevolezza.'
};

const articles = [
  {title:'Carnevale di Venezia',category:'Eventi',text:'Maschere, cortei, spettacoli e una città che per alcune settimane cambia completamente volto.',image:'/images/journal-carnevale.webp',href:'/journal/carnevale-di-venezia'},
  {title:'Festa del Redentore',category:'Eventi',text:'Una delle notti più sentite dai veneziani: memoria, barche e fuochi nel Bacino di San Marco.',image:'/images/journal-redentore.webp',href:'/journal/festa-del-redentore'},
  {title:'Natale e Capodanno a Venezia',category:'Eventi',text:'Luci, inverno, calli più intime e il Capodanno veneziano nel cuore della laguna.',image:'/images/journal-natale-capodanno.webp',href:'/journal/natale-capodanno-venezia'},
  {title:'Mostra del Cinema di Venezia',category:'Arte & Cultura',text:'Il Lido diventa il centro internazionale del cinema tra proiezioni, red carpet e grandi anteprime.',image:'/images/journal-mostra-cinema.webp',href:'/journal/mostra-del-cinema'},
  {title:'Biennale di Venezia',category:'Arte & Cultura',text:'Giardini, Arsenale e mostre diffuse: arte, architettura e creatività trasformano la città.',image:'/images/journal-biennale.webp',href:'/journal/biennale-di-venezia'},
  {title:'Venezia con bambini',category:'Famiglie',text:'Campi, musei, vaporetto, aree verdi e pause: Venezia può essere bellissima anche con i più piccoli.',image:'/images/venezia-bambini-campo-nuova.webp',href:'/journal/venezia-con-bambini'},
  {title:'Venezia con il cane',category:'Pet Friendly',text:'Passeggiare tra calli e campi con il proprio cane è possibile con qualche accortezza pratica.',image:'/images/journal-venezia-cane.webp',href:'/journal/venezia-con-il-cane'},
  {title:'Acqua alta a Venezia: cosa sapere',category:'Venezia pratica',text:'Cos’è davvero l’acqua alta, quanto dura, perché alcune zone si bagnano prima e come funziona il MOSE.',image:'/images/journal-acqua-alta.webp',href:'/journal/acqua-alta-a-venezia'},
  {title:'Dove parcheggiare per visitare Venezia',category:'Trasporti',text:'Parcheggio all’appartamento, Piazzale Roma o Tronchetto: tutte le soluzioni per chi arriva in auto.',image:'/images/journal-parcheggi-venezia.webp',href:'/journal/dove-parcheggiare-venezia'},
  {title:'Lo Spritz veneziano',category:'Sapori & tradizioni',text:'Per il resto del mondo è un cocktail. Per noi veneziani è semplicemente l’aperitivo.',image:'/images/journal-spritz.webp',href:'/journal/spritz-veneziano'},
  {title:'Cicchetti veneziani',category:'Sapori & tradizioni',text:'Baccalà, sarde in saor, polpette e crostini: piccoli assaggi che a Venezia non hanno bisogno di traduzione.',image:'/images/journal-cicchetti.webp',href:'/journal/cicchetti-veneziani'},
  {title:'Venezia senza far arrabbiare i veneziani',category:'Vivere Venezia',text:'Piccole buone maniere per godersi la città senza dimenticare che qualcuno qui ci vive davvero.',image:'/images/journal-buone-maniere.webp',href:'/journal/buone-maniere-a-venezia'}
];

export default function Journal(){
  return <><Header/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">Journal</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Venezia, eventi e vita in laguna</p>
        <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-none md:text-8xl">Il Journal di Marghera Venice Apartments</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Idee, informazioni pratiche e ispirazioni per organizzare il tuo soggiorno: eventi, tradizioni, attività per famiglie e consigli per scoprire Venezia con maggiore consapevolezza.</p>
      </div>
    </section>

    <section className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {['Eventi','Arte & Cultura','Famiglie','Pet Friendly','Venezia pratica','Trasporti','Sapori & tradizioni','Vivere Venezia'].map(x=><span key={x} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-bold text-navy">{x}</span>)}
        </div>
      </div>
    </section>

    <section className="bg-cream pb-24">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        {articles.map((a)=><article key={a.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <Link href={a.href} className="block">
            <div className="relative h-64 overflow-hidden"><Image src={a.image} alt={a.title} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="card-image object-cover"/></div>
            <div className="p-7">
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{a.category}</p>
              <h2 className="mt-3 font-serif text-4xl text-navy">{a.title}</h2>
              <p className="mt-4 text-slate-600">{a.text}</p>
              <span className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">Leggi l’articolo</span>
            </div>
          </Link>
        </article>)}
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Continua a esplorare</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Cerchi una destinazione specifica?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Le Guide approfondiscono Venezia, le isole e le escursioni in Veneto; il Journal racconta invece eventi, tradizioni e informazioni utili per vivere meglio il soggiorno.</p>
        <Link href="/guide" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Apri tutte le guide</Link>
      </div>
    </section>
  </main><Footer/></>
}