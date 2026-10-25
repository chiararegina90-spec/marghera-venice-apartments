import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {HomoFaberContent} from '@/data/homoFaber2026';
import EditorialStayCta from '@/components/EditorialStayCta';
import JournalStructuredData from '@/components/JournalStructuredData';

const heroImage='/images/journal-homo-faber-2026-cover.webp';
const archiveCopy:Record<string,{lead:string;tip:string}>={
  it:{lead:'Homo Faber 2026 si è svolto a Venezia dal 1 al 30 settembre. Manteniamo questa guida come archivio dell’edizione An Island of Light, con i dati del programma 2026 e i riferimenti utili per capire il format della manifestazione.',tip:'L’edizione 2026 è conclusa. Orari, biglietti, navetta e attività riportati in questa pagina descrivono quell’edizione e non vanno usati come informazioni per una futura Homo Faber.'},
  en:{lead:'Homo Faber 2026 took place in Venice from 1 to 30 September. This guide now remains as an archive of An Island of Light, preserving the 2026 programme details and useful context about the event format.',tip:'The 2026 edition is over. Opening times, tickets, shuttle services and activities on this page describe that edition only and should not be used for a future Homo Faber.'},
  de:{lead:'Homo Faber 2026 fand vom 1. bis 30. September in Venedig statt. Dieser Guide bleibt als Archiv der Ausgabe An Island of Light online und dokumentiert das Programm 2026.',tip:'Die Ausgabe 2026 ist beendet. Öffnungszeiten, Tickets, Shuttle und Aktivitäten auf dieser Seite gelten ausschließlich für diese Ausgabe.'},
  fr:{lead:'Homo Faber 2026 s’est déroulé à Venise du 1er au 30 septembre. Cette page reste en ligne comme archive de l’édition An Island of Light et conserve les informations du programme 2026.',tip:'L’édition 2026 est terminée. Horaires, billets, navette et activités indiqués ici concernent uniquement cette édition.'},
  es:{lead:'Homo Faber 2026 se celebró en Venecia del 1 al 30 de septiembre. Esta guía queda como archivo de la edición An Island of Light y conserva la información del programa 2026.',tip:'La edición 2026 ha terminado. Horarios, entradas, lanzadera y actividades de esta página corresponden únicamente a esa edición.'},
  zh:{lead:'Homo Faber 2026 已于9月1日至30日在威尼斯举行。本页现作为 An Island of Light 这一届活动的档案，保留2026年的节目与实用背景信息。',tip:'2026年活动已经结束。本页所列开放时间、门票、接驳与活动信息仅适用于2026年，不应直接用于未来届次。'}
};


const resultCopy:Record<string,{title:string;text:string}>={
  it:{title:'Bilancio 2026: 65.000 visitatori',text:'L’organizzazione ha chiuso An Island of Light ringraziando 65.000 visitatori. Homo Faber 2026 ha riunito oltre 500 artigiani provenienti da più di 70 Paesi e più di 700 oggetti alla Fondazione Giorgio Cini.'},
  en:{title:'2026 recap: 65,000 visitors',text:'The organisers closed An Island of Light by thanking 65,000 visitors. Homo Faber 2026 brought together more than 500 artisans from over 70 countries and more than 700 objects at Fondazione Giorgio Cini.'},
  de:{title:'Bilanz 2026: 65.000 Besucher',text:'Zum Abschluss von An Island of Light dankten die Veranstalter 65.000 Besuchern. Homo Faber 2026 vereinte in der Fondazione Giorgio Cini mehr als 500 Kunsthandwerker aus über 70 Ländern und mehr als 700 Objekte.'},
  fr:{title:'Bilan 2026 : 65 000 visiteurs',text:'À la clôture d’An Island of Light, les organisateurs ont remercié 65 000 visiteurs. Homo Faber 2026 a réuni à la Fondazione Giorgio Cini plus de 500 artisans venus de plus de 70 pays et plus de 700 objets.'},
  es:{title:'Balance 2026: 65.000 visitantes',text:'Al cierre de An Island of Light, la organización agradeció a 65.000 visitantes. Homo Faber 2026 reunió en la Fondazione Giorgio Cini a más de 500 artesanos de más de 70 países y más de 700 objetos.'},
  zh:{title:'2026回顾：65,000名访客',text:'An Island of Light 结束后，主办方感谢了65,000名访客。Homo Faber 2026 在 Fondazione Giorgio Cini 汇集了来自70多个国家的500多位工艺师和700多件作品。'}
};


export default function HomoFaber2026Article({data}:{data:HomoFaberContent}){
  const baseUrl='https://www.margheraveniceapartments.com';
  const pageUrl=`${baseUrl}${data.journalHref}/homo-faber-2026`;
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.h1,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},
    dateModified:'2026-10-25',mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},url:pageUrl
  };
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:'Homo Faber 2026: An Island of Light',description:data.metaDescription,
    startDate:'2026-09-01',endDate:'2026-09-30',eventStatus:'https://schema.org/EventCompleted',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    location:{'@type':'Place',name:'Fondazione Giorgio Cini',address:{'@type':'PostalAddress',streetAddress:'Isola di San Giorgio Maggiore',addressLocality:'Venezia',addressCountry:'IT'}},url:pageUrl
  };
  return <>
    <Header lang={data.lang}/>
    <main><article className="editorial-page">
      <JournalStructuredData lang={data.lang} slug="homo-faber-2026" title={data.h1} description={data.metaDescription} article={false}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
      <EditorialHero image={heroImage} imageAlt={data.imageAlt} crumbs={[{label:data.homeLabel,href:data.homeHref},{label:data.journalLabel,href:data.journalHref},{label:'Homo Faber 2026'}]} eyebrow={<>{data.category} • {data.eventDate}</>} title={data.h1} subtitle={data.heroSubtitle} strongShade/>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="font-serif text-3xl leading-relaxed text-navy">{archiveCopy[data.lang]?.lead||data.lead}</p>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{data.stats.map(stat=><div key={stat} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center font-bold text-navy shadow-sm">{stat}</div>)}</div>
        <div className="mt-14 space-y-12">{data.sections.map((section,i)=><section key={section.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
          <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
          <div><h2 className="font-serif text-4xl text-navy">{section.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{section.text}</p>{section.items&&<ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.items.map(item=><li key={item} className="rounded-2xl bg-cream px-5 py-4 font-semibold text-navy">{item}</li>)}</ul>}{i===3&&<Link href={data.discoverHref} className="mt-6 inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy transition hover:bg-navy hover:text-white">{data.discoverCta}</Link>}</div>
        </section>)}</div>
        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-cream p-7 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Homo Faber 2026</p>
          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{resultCopy[data.lang].title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{resultCopy[data.lang].text}</p>
        </section>
      </div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{archiveCopy[data.lang]?.tip||data.tip}</p></div>
        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialLabel}</p><p className="mt-3 text-slate-600">{data.officialNote}</p><a href={data.officialHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialButton} ↗</a></div>
      </div></section>

      <EditorialStayCta lang={data.lang} context="journal"/>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{data.relatedEyebrow}</p><h2 className="mt-3 font-serif text-4xl text-navy">{data.relatedTitle}</h2><div className="mt-7 grid gap-4 md:grid-cols-2"><Link href={data.filmHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.filmLabel} <span className="text-gold">→</span></Link><Link href={data.glassHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.glassLabel} <span className="text-gold">→</span></Link></div><div className="mt-10 text-center"><Link href={data.journalHref} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
    </article></main>
    <Footer lang={data.lang}/>
  </>;
}
