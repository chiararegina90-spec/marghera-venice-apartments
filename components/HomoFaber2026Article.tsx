import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {HomoFaberContent} from '@/data/homoFaber2026';

const heroImage='/images/journal-homo-faber-2026-cover.webp';

export default function HomoFaber2026Article({data}:{data:HomoFaberContent}){
  const baseUrl='https://www.margheraveniceapartments.com';
  const pageUrl=`${baseUrl}${data.journalHref}/homo-faber-2026`;
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.h1,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},
    mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},url:pageUrl
  };
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:'Homo Faber 2026: An Island of Light',description:data.metaDescription,
    startDate:'2026-09-01',endDate:'2026-09-30',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    location:{'@type':'Place',name:'Fondazione Giorgio Cini',address:{'@type':'PostalAddress',streetAddress:'Isola di San Giorgio Maggiore',addressLocality:'Venezia',addressCountry:'IT'}},url:pageUrl
  };
  return <>
    <Header lang={data.lang}/>
    <main><article className="editorial-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
      <EditorialHero image={heroImage} imageAlt={data.imageAlt} crumbs={[{label:data.homeLabel,href:data.homeHref},{label:data.journalLabel,href:data.journalHref},{label:'Homo Faber 2026'}]} eyebrow={<>{data.category} • {data.eventDate}</>} title={data.h1} subtitle={data.heroSubtitle} strongShade/>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{data.stats.map(stat=><div key={stat} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center font-bold text-navy shadow-sm">{stat}</div>)}</div>
        <div className="mt-14 space-y-12">{data.sections.map((section,i)=><section key={section.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
          <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
          <div><h2 className="font-serif text-4xl text-navy">{section.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{section.text}</p>{section.items&&<ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.items.map(item=><li key={item} className="rounded-2xl bg-cream px-5 py-4 font-semibold text-navy">{item}</li>)}</ul>}{i===3&&<Link href={data.discoverHref} className="mt-6 inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy transition hover:bg-navy hover:text-white">{data.discoverCta}</Link>}</div>
        </section>)}</div>
      </div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>
        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialLabel}</p><p className="mt-3 text-slate-600">{data.officialNote}</p><a href={data.officialHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialButton} ↗</a></div>
      </div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{data.relatedEyebrow}</p><h2 className="mt-3 font-serif text-4xl text-navy">{data.relatedTitle}</h2><div className="mt-7 grid gap-4 md:grid-cols-2"><Link href={data.filmHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.filmLabel} <span className="text-gold">→</span></Link><Link href={data.glassHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.glassLabel} <span className="text-gold">→</span></Link></div><div className="mt-10 text-center"><Link href={data.journalHref} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
    </article></main>
    <Footer lang={data.lang}/>
  </>;
}
