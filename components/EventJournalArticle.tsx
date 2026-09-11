import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonsPhoto from '@/components/CommonsPhoto';
import type {EventArticle,EventLang} from '@/data/journal-events-2026';
import {journalEvents2026} from '@/data/journal-events-2026';
import {journalEventImagePair} from '@/data/journal-event-images';
import EditorialStayCta from '@/components/EditorialStayCta';

const BASE='https://www.margheraveniceapartments.com';
const languageTag:Record<EventLang,string>={it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'};
const ui:Record<EventLang,{home:string;journal:string;tip:string;official:string;sourceNote:string;more:string;back:string;date:string;breadcrumb:string}>={
  it:{home:'Home',journal:'Journal',tip:'Il consiglio di Marghera Venice Apartments',official:'Informazioni ufficiali',sourceNote:'Programma, orari, disponibilità e condizioni possono cambiare. Per le informazioni variabili controlla sempre la fonte ufficiale prima della visita.',more:'Potrebbe interessarti anche',back:'Torna al Journal',date:'Quando',breadcrumb:'Percorso di navigazione'},
  en:{home:'Home',journal:'Journal',tip:'Marghera Venice Apartments tip',official:'Official information',sourceNote:'Programmes, times, availability and conditions may change. Always check variable information with the official source before your visit.',more:'You may also like',back:'Back to Journal',date:'When',breadcrumb:'Breadcrumb'},
  de:{home:'Startseite',journal:'Journal',tip:'Tipp von Marghera Venice Apartments',official:'Offizielle Informationen',sourceNote:'Programm, Uhrzeiten, Verfügbarkeit und Bedingungen können sich ändern. Variable Angaben bitte vor dem Besuch bei der offiziellen Quelle prüfen.',more:'Das könnte Sie auch interessieren',back:'Zurück zum Journal',date:'Termin',breadcrumb:'Brotkrümelnavigation'},
  fr:{home:'Accueil',journal:'Journal',tip:'Le conseil de Marghera Venice Apartments',official:'Informations officielles',sourceNote:'Programme, horaires, disponibilités et conditions peuvent évoluer. Vérifiez toujours les informations variables auprès de la source officielle.',more:'À découvrir aussi',back:'Retour au Journal',date:'Quand',breadcrumb:'Fil d’Ariane'},
  es:{home:'Inicio',journal:'Journal',tip:'Consejo de Marghera Venice Apartments',official:'Información oficial',sourceNote:'El programa, los horarios, la disponibilidad y las condiciones pueden cambiar. Comprueba siempre la información variable en la fuente oficial.',more:'También puede interesarte',back:'Volver al Journal',date:'Cuándo',breadcrumb:'Ruta de navegación'},
  zh:{home:'首页',journal:'旅行日志',tip:'Marghera Venice Apartments 建议',official:'官方信息',sourceNote:'节目、时间、余位和条件可能变化。涉及实时信息时，请在出行前通过官方来源再次确认。',more:'你可能也感兴趣',back:'返回旅行日志',date:'日期',breadcrumb:'面包屑导航'}
};
function base(lang:EventLang){return lang==='it'?'':`/${lang}`;}
export default function EventJournalArticle({lang,data}:{lang:EventLang;data:EventArticle}){
  const t=ui[lang];
  const eventImages=journalEventImagePair(data.slug);
  const imagePath=eventImages?.cover||data.fallbackImage||data.image;
  const imageUrl=imagePath.startsWith('http')?imagePath:`${BASE}${imagePath}`;
  const related=data.relatedSlugs.map(slug=>journalEvents2026[lang][slug]).filter(Boolean);
  const relatedLinks=data.relatedLinks||[];
  const pagePath=`${base(lang)}/journal/${data.slug}`;
  const pageUrl=`${BASE}${pagePath}`;
  const journalUrl=`${BASE}${base(lang)}/journal`;
  const homeUrl=`${BASE}${base(lang)||''}`;
  const locations=data.eventLocations?.length?data.eventLocations:data.eventLocation?[data.eventLocation]:[];
  const organization={'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}};
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.title,description:data.description,inLanguage:languageTag[lang],image:[imageUrl],
    author:organization,publisher:organization,mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},url:pageUrl,
    ...(data.datePublished?{datePublished:data.datePublished}:{}),...(data.dateModified?{dateModified:data.dateModified}:{})
  };
  const breadcrumbJsonLd={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:t.home,item:homeUrl||BASE},
      {'@type':'ListItem',position:2,name:t.journal,item:journalUrl},
      {'@type':'ListItem',position:3,name:data.title,item:pageUrl}
    ]
  };
  const eventJsonLd=data.startDate&&data.endDate?{
    '@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,inLanguage:languageTag[lang],image:[imageUrl],
    startDate:data.startDate,endDate:data.endDate,eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    ...(locations.length?{location:locations.map(place=>({'@type':'Place',name:place.name,address:{'@type':'PostalAddress',...(place.streetAddress?{streetAddress:place.streetAddress}:{}),addressLocality:place.addressLocality,addressCountry:place.addressCountry}}))}:{}),
    organizer:organization,url:pageUrl
  }:null;
  return <><Header lang={lang}/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}}/>
    {eventJsonLd&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>}
    <section className="relative min-h-[72vh] overflow-hidden pt-20"><div className="absolute inset-0">{eventImages?<Image src={eventImages.cover} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover"/>:<CommonsPhoto query={data.commonsQuery} alt={data.imageAlt} fallbackSrc={data.fallbackImage} priority sizes="100vw" className="absolute inset-0"/>}</div><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/20"/><div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8"><div className="max-w-5xl text-white"><nav aria-label={t.breadcrumb} className="flex flex-wrap items-center gap-2 text-sm text-white/70"><Link href={base(lang)||'/'} className="hover:text-gold">{t.home}</Link><span>›</span><Link href={`${base(lang)}/journal`} className="hover:text-gold">{t.journal}</Link><span>›</span><span className="text-gold">{data.title}</span></nav><p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">{data.category} • {data.eventDate}</p><h1 className="mt-4 max-w-5xl break-words font-serif text-[clamp(2.6rem,7vw,5.2rem)] leading-[.98]">{data.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{data.description}</p></div></div></section>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="mb-10 flex flex-wrap items-center gap-3 border-y border-slate-200 py-4 text-sm font-bold text-navy"><span className="text-gold">{t.date}</span><span>{data.eventDate}</span><span className="text-slate-300">•</span><span>Venezia</span></div><p className="font-serif text-[clamp(1.65rem,3vw,2.25rem)] leading-[1.42] text-navy">{data.lead}</p><div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-[clamp(2rem,4vw,2.6rem)] leading-tight text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div>{data.internalLink&&<p className="mt-10 text-lg leading-8 text-slate-600">{data.internalLink.text}<Link href={data.internalLink.href} className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{data.internalLink.label}</Link>{data.internalLink.tail}</p>}</div></section>
    <section className="bg-cream py-14 sm:py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-7 text-navy sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em]">{t.tip}</p><p className="mt-4 font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-snug">{data.tip}</p></div><div className="mt-7 rounded-[2rem] bg-white p-7 shadow-soft sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{t.official}</p><p className="mt-3 leading-7 text-slate-600">{t.sourceNote}</p><a href={data.official[1]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-gold hover:text-navy">{data.official[0]} ↗</a></div></div></section>
    <EditorialStayCta lang={lang} context="journal"/>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{t.more}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(x=><Link key={x.slug} href={`${base(lang)}/journal/${x.slug}`} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{x.title} <span className="text-gold">→</span></Link>)}{relatedLinks.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{t.back}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
