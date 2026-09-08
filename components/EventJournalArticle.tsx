import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonsPhoto from '@/components/CommonsPhoto';
import type {EventArticle,EventLang} from '@/data/journal-events-2026';
import {journalEvents2026} from '@/data/journal-events-2026';
import {journalEventImagePair} from '@/data/journal-event-images';

const ui:Record<EventLang,{home:string;journal:string;tip:string;official:string;sourceNote:string;more:string;back:string;date:string}>= {
  it:{home:'Home',journal:'Journal',tip:'Il consiglio di Marghera Venice Apartments',official:'Informazioni ufficiali',sourceNote:'Programma, orari, disponibilità e condizioni possono cambiare. Per le informazioni variabili controlla sempre la fonte ufficiale prima della visita.',more:'Potrebbe interessarti anche',back:'Torna al Journal',date:'Quando'},
  en:{home:'Home',journal:'Journal',tip:'Marghera Venice Apartments tip',official:'Official information',sourceNote:'Programmes, times, availability and conditions may change. Always check variable information with the official source before your visit.',more:'You may also like',back:'Back to Journal',date:'When'},
  de:{home:'Startseite',journal:'Journal',tip:'Tipp von Marghera Venice Apartments',official:'Offizielle Informationen',sourceNote:'Programm, Uhrzeiten, Verfügbarkeit und Bedingungen können sich ändern. Variable Angaben bitte vor dem Besuch bei der offiziellen Quelle prüfen.',more:'Das könnte Sie auch interessieren',back:'Zurück zum Journal',date:'Termin'},
  fr:{home:'Accueil',journal:'Journal',tip:'Le conseil de Marghera Venice Apartments',official:'Informations officielles',sourceNote:'Programme, horaires, disponibilités et conditions peuvent évoluer. Vérifiez toujours les informations variables auprès de la source officielle.',more:'À découvrir aussi',back:'Retour au Journal',date:'Quand'},
  es:{home:'Inicio',journal:'Journal',tip:'Consejo de Marghera Venice Apartments',official:'Información oficial',sourceNote:'El programa, los horarios, la disponibilidad y las condiciones pueden cambiar. Comprueba siempre la información variable en la fuente oficial.',more:'También puede interesarte',back:'Volver al Journal',date:'Cuándo'},
  zh:{home:'首页',journal:'旅行日志',tip:'Marghera Venice Apartments 建议',official:'官方信息',sourceNote:'节目、时间、余位和条件可能变化。涉及实时信息时，请在出行前通过官方来源再次确认。',more:'你可能也感兴趣',back:'返回旅行日志',date:'日期'}
};

const schemaDates:Record<string,[string,string]>={
 'venicemarathon-2026':['2026-10-25','2026-10-25'],'veleziana-2026':['2026-10-10','2026-10-18'],'venice-cocktail-week-2026':['2026-10-21','2026-10-25'],'venice-fashion-week-2026':['2026-10-19','2026-10-24'],'venice-hospitality-challenge-2026':['2026-10-17','2026-10-17'],'venice-design-week-2026':['2026-10-09','2026-10-18'],'biennale-musica-2026':['2026-10-10','2026-10-24'],'salone-alto-artigianato-italiano-2026':['2026-10-01','2026-10-04'],'venice-noir-2026':['2026-11-12','2026-11-15']
};

function base(lang:EventLang){return lang==='it'?'':`/${lang}`;}

export default function EventJournalArticle({lang,data}:{lang:EventLang;data:EventArticle}){
  const t=ui[lang]; const eventImages=journalEventImagePair(data.slug);
  const related=data.relatedSlugs.map(slug=>journalEvents2026[lang][slug]).filter(Boolean);
  const [startDate,endDate]=schemaDates[data.slug]||['2026-01-01','2026-01-01'];
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,
    startDate,endDate,eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',location:{'@type':'Place',name:data.eventLocation?.name||'Venezia',address:{'@type':'PostalAddress',...(data.eventLocation?.streetAddress?{streetAddress:data.eventLocation.streetAddress}:{}),addressLocality:data.eventLocation?.addressLocality||'Venezia',addressCountry:data.eventLocation?.addressCountry||'IT'}},
    url:`https://www.margheraveniceapartments.com${base(lang)}/journal/${data.slug}`
  };
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.title,description:data.description,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},
    mainEntityOfPage:`https://www.margheraveniceapartments.com${base(lang)}/journal/${data.slug}`
  };
  return <><Header lang={lang}/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
    <section className="relative min-h-[72vh] overflow-hidden pt-20"><div className="absolute inset-0">{eventImages?<Image src={eventImages.cover} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover"/>:<CommonsPhoto query={data.commonsQuery} alt={data.imageAlt} fallbackSrc={data.fallbackImage} priority sizes="100vw" className="absolute inset-0"/>}</div><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/20"/><div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8"><div className="max-w-5xl text-white"><nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/70"><Link href={base(lang)||'/'} className="hover:text-gold">{t.home}</Link><span>›</span><Link href={`${base(lang)}/journal`} className="hover:text-gold">{t.journal}</Link><span>›</span><span className="text-gold">{data.title}</span></nav><p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">{data.category} • {data.eventDate}</p><h1 className="mt-4 max-w-5xl break-words font-serif text-[clamp(2.6rem,7vw,5.2rem)] leading-[.98]">{data.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{data.description}</p></div></div></section>

    <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="mb-10 flex flex-wrap items-center gap-3 border-y border-slate-200 py-4 text-sm font-bold text-navy"><span className="text-gold">{t.date}</span><span>{data.eventDate}</span><span className="text-slate-300">•</span><span>Venezia</span></div>
      <p className="font-serif text-[clamp(1.65rem,3vw,2.25rem)] leading-[1.42] text-navy">{data.lead}</p>
      <div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-[clamp(2rem,4vw,2.6rem)] leading-tight text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div>
      {data.internalLink&&<p className="mt-10 text-lg leading-8 text-slate-600">{data.internalLink.text}<Link href={data.internalLink.href} className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{data.internalLink.label}</Link>{data.internalLink.tail}</p>}
    </div></section>

    <section className="bg-cream py-14 sm:py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-7 text-navy sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em]">{t.tip}</p><p className="mt-4 font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-snug">{data.tip}</p></div>
      <div className="mt-7 rounded-[2rem] bg-white p-7 shadow-soft sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{t.official}</p><p className="mt-3 leading-7 text-slate-600">{t.sourceNote}</p><a href={data.official[1]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-gold hover:text-navy">{data.official[0]} ↗</a></div>
    </div></section>

    <section className="py-16 sm:py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{t.more}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(x=><Link key={x.slug} href={`${base(lang)}/journal/${x.slug}`} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{x.title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{t.back}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
