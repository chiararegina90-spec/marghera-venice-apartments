import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import EditorialStayCta from '@/components/EditorialStayCta';
import type {JournalArticleData} from '@/components/LocalizedRich';

const BASE='https://www.margheraveniceapartments.com';
type Lang='it'|'en';
const ui={
 it:{home:'Home',journal:'Journal',more:'Potrebbe interessarti anche',sourceNote:'Orari, accessi, prenotazioni e trasporti possono cambiare. Controlla le informazioni variabili sulla fonte ufficiale prima della visita.',official:'Informazioni ufficiali',tip:'Il consiglio di Marghera Venice Apartments',back:'Torna al Journal',tag:'it-IT'},
 en:{home:'Home',journal:'Journal',more:'You may also like',sourceNote:'Times, access rules, reservations and transport arrangements can change. Check variable details with the official source before your visit.',official:'Official information',tip:'Marghera Venice Apartments tip',back:'Back to Journal',tag:'en-GB'}
} as const;
function p(lang:Lang,path:string){return lang==='it'?path:`/en${path==='/'?'':path}`;}
export default function AuditedPrimaryJournalArticle({lang,data}:{lang:Lang;data:JournalArticleData}){
 const t=ui[lang]; const logical=`/journal/${data.slug}`; const pagePath=p(lang,logical); const pageUrl=`${BASE}${pagePath}`; const imageUrl=data.image.startsWith('http')?data.image:`${BASE}${data.image}`;
 const org={'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}};
 const schemas:any[]=[
  {'@context':'https://schema.org','@type':'Article',headline:data.title,description:data.description,inLanguage:t.tag,image:[imageUrl],dateModified:'2026-09-11',mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},author:org,publisher:org,url:pageUrl},
  {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:t.home,item:`${BASE}${p(lang,'/')}`},{'@type':'ListItem',position:2,name:t.journal,item:`${BASE}${p(lang,'/journal')}`},{'@type':'ListItem',position:3,name:data.title,item:pageUrl}]}
 ];
 if(data.slug==='festa-del-redentore')schemas.push({'@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,startDate:'2027-07-17',endDate:'2027-07-18',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:t.tag,image:[imageUrl],url:pageUrl,location:{'@type':'City',name:'Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}});
 if(data.slug==='regata-storica-2026')schemas.push({'@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,startDate:'2026-09-06',endDate:'2026-09-06',eventStatus:'https://schema.org/EventCompleted',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:t.tag,image:[imageUrl],url:pageUrl,location:{'@type':'Place',name:'Canal Grande, Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}});
 return <><Header lang={lang}/><main><article className="editorial-page">{schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}
  <EditorialHero image={data.image} imageAlt={data.imageAlt} crumbs={[{label:t.home,href:p(lang,'/')},{label:t.journal,href:p(lang,'/journal')},{label:data.title}]} eyebrow={<>{data.category}{data.eventDate&&<> • {data.eventDate}</>}</>} title={data.title} subtitle={data.description} strongShade={Boolean(data.posterHero)}/>
  <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p><div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div></div></section>
  <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{t.tip}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>{data.official&&<div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{t.official}</p><p className="mt-3 text-slate-600">{t.sourceNote}</p><a href={data.official[1]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.official[0]} ↗</a></div>}</div></section>
  <EditorialStayCta lang={lang} context="journal"/>
  <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{t.more}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{data.related?.map(([label,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{label} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href={p(lang,'/journal')} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{t.back}</Link></div></div></section>
 </article></main><Footer lang={lang}/></>;
}
