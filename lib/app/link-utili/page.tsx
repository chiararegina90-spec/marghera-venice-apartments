import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Link utili | Marghera Venice Apartments',
  description:'Una raccolta di fonti ufficiali per trasporti, biglietti, eventi, musei e informazioni utili per Venezia e il Veneto.',
  alternates:{canonical:'/link-utili',languages:{'it-IT':'/link-utili','en-GB':'/en/useful-links','de-DE':'/de/useful-links','fr-FR':'/fr/useful-links','es-ES':'/es/useful-links','zh-CN':'/zh/useful-links','x-default':'/link-utili'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const groups = [
  {
    title:'Trasporti e mobilità',
    text:'Orari, biglietti, aeroporti e collegamenti.',
    links:[
      ['ACTV','Autobus, tram e navigazione nel Comune di Venezia.','https://actv.avmspa.it/'],
      ['AVM Venezia','Mobilità, parcheggi e servizi del territorio veneziano.','https://avm.avmspa.it/'],
      ['Venezia Unica','Biglietti, pass e servizi turistici ufficiali.','https://www.veneziaunica.it/'],
      ['Trenitalia','Orari e biglietti ferroviari.','https://www.trenitalia.com/'],
      ['ATVO','Collegamenti aeroportuali e autobus extraurbani.','https://www.atvo.it/'],
      ['Arriva Veneto','Linee e orari, compresi i collegamenti verso Chioggia.','https://www.arrivaveneto.it/'],
      ['Terminal Fusina','Collegamenti via acqua da Fusina verso Venezia e la laguna.','https://www.terminalfusina.it/'],
      ['RadioTaxi Venezia','Taxi, informazioni, prenotazioni e calcolo tariffa.','https://www.radiotaxivenezia.com/']
    ]
  },
  {
    title:'Venezia: informazioni ufficiali',
    text:'Fonti da consultare per regole, maree, eventi e vita della città.',
    links:[
      ['Comune di Venezia','Servizi, ordinanze, eventi e informazioni istituzionali.','https://www.comune.venezia.it/'],
      ['Centro Maree','Previsioni e informazioni sull’acqua alta.','https://www.comune.venezia.it/it/content/centro-previsioni-e-segnalazioni-maree'],
      ['Carnevale di Venezia','Programma e informazioni dell’edizione corrente.','https://carnevale.venezia.it/'],
      ['Venezia Unica','Informazioni e servizi ufficiali per la visita.','https://www.veneziaunica.it/']
    ]
  },
  {
    title:'Arte, musei ed eventi',
    text:'Per controllare mostre, biglietti, programmi e aperture.',
    links:[
      ['La Biennale di Venezia','Arte, architettura, cinema, danza, musica e teatro.','https://www.labiennale.org/'],
      ['MUVE – Musei Civici di Venezia','Musei, biglietti, mostre e informazioni di visita.','https://www.visitmuve.it/'],
      ['Museo di Storia Naturale','Informazioni ufficiali sul museo Giancarlo Ligabue.','https://msn.visitmuve.it/'],
      ['Terrazza Aperol Venezia','Locale ufficiale Aperol in Campo Santo Stefano.','https://terrazza.aperol.com/it/']
    ]
  },
  {
    title:'Veneto e patrimonio',
    text:'Territorio, cultura e patrimonio da esplorare oltre Venezia.',
    links:[
      ['Regione del Veneto','Portale istituzionale della Regione.','https://www.regione.veneto.it/'],
      ['Veneto.eu','Portale turistico ufficiale del Veneto.','https://www.veneto.eu/'],
      ['UNESCO – Venezia e la sua Laguna','Scheda del sito Patrimonio Mondiale UNESCO.','https://whc.unesco.org/en/list/394/']
    ]
  }
];

export default function LinkUtili(){
  return <><Header/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">Link utili</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Fonti ufficiali</p>
        <h1 className="mt-4 max-w-4xl font-serif text-6xl leading-none md:text-8xl">Link utili</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Una piccola biblioteca di siti ufficiali per verificare orari, tariffe, eventi, maree, musei e servizi prima e durante il soggiorno.</p>
      </div>
    </section>

    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl space-y-14 px-5 lg:px-8">
        {groups.map(group=><section key={group.title}>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Risorse ufficiali</p>
          <h2 className="mt-2 font-serif text-4xl text-navy md:text-5xl">{group.title}</h2>
          <p className="mt-3 max-w-3xl text-slate-600">{group.text}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.links.map(([name,desc,href])=><a key={name+href} href={href} target="_blank" rel="noopener noreferrer" className="group rounded-[2rem] bg-white p-7 shadow-soft transition hover:-translate-y-1">
              <h3 className="font-serif text-3xl text-navy">{name}</h3>
              <p className="mt-3 text-slate-600">{desc}</p>
              <span className="mt-5 inline-block font-bold text-gold">Visita il sito ↗</span>
            </a>)}
          </div>
        </section>)}
      </div>
    </section>
  </main><Footer/></>
}
