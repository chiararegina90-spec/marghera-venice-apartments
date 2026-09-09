import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {MostraCinema2026Data,MostraCinema2026Lang} from '@/data/mostraCinema2026';

function base(lang:MostraCinema2026Lang){return lang==='it'?'':`/${lang}`;}
function homeLabel(lang:MostraCinema2026Lang){return lang==='de'?'Startseite':lang==='fr'?'Accueil':lang==='es'?'Inicio':lang==='zh'?'首页':'Home';}

export default function MostraCinema2026Article({lang,data}:{lang:MostraCinema2026Lang;data:MostraCinema2026Data}){
  const path=`${base(lang)}/journal/mostra-del-cinema`;
  const url=`https://www.margheraveniceapartments.com${path}`;
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.heroTitle,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},
    mainEntityOfPage:url,url
  };
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:'83rd Venice International Film Festival',description:data.metaDescription,
    startDate:'2026-09-02',endDate:'2026-09-12',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    location:{'@type':'Place',name:'Palazzo del Cinema, Lido di Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},url
  };
  return <><Header lang={lang}/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
    <EditorialHero
      image="/images/journal-mostra-cinema.webp"
      imageAlt={data.imageAlt}
      crumbs={[{label:homeLabel(lang),href:base(lang)||'/'},{label:lang==='zh'?'旅行日志':'Journal',href:`${base(lang)}/journal`},{label:data.breadcrumb}]}
      eyebrow={`${data.category} • ${data.eventDate}`}
      title={data.heroTitle}
      subtitle={data.heroSubtitle}
      strongShade
    />

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="editorial-lead font-serif text-navy">{data.lead}</p>
      <div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="editorial-number text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="editorial-h2 font-serif text-navy">{title}</h2><p className="editorial-body mt-3 text-slate-600">{text}</p></div></section>)}</div>
      <div className="mt-10"><Link href={data.lidoHref} className="inline-flex text-lg font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{data.lidoCta}</Link></div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[1.6rem] bg-gold p-7 text-navy sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>
      <div className="mt-7 rounded-[1.6rem] bg-white p-7 shadow-soft sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialBoxLabel}</p><p className="mt-3 text-slate-600">{data.sourceNote}</p><div className="mt-5 flex flex-wrap gap-3">{data.officialLinks.map(([label,href],i)=><a key={href} href={href} target="_blank" rel="noopener noreferrer" className={i===0?'inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white':'inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy'}>{label} ↗</a>)}</div></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="editorial-h2 mt-3 font-serif text-navy">{data.moreLabel}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{data.related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-9 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
