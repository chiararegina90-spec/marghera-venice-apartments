import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import EditorialStayCta from '@/components/EditorialStayCta';
import type {JournalArticleData} from '@/components/LocalizedRich';
import {hreflang,localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
type Lang=Extract<SiteLang,'de'|'fr'|'es'|'zh'>;
const ui:Record<Lang,{home:string;journal:string;more:string;sourceNote:string;breadcrumb:string}>={
 de:{home:'Startseite',journal:'Journal',more:'Weitere Tipps für Ihren Aufenthalt',sourceNote:'Termine, Preise und Bedingungen können sich ändern. Variable Angaben bitte kurz vor dem Besuch bei der offiziellen Quelle prüfen.',breadcrumb:'Brotkrümelnavigation'},
 fr:{home:'Accueil',journal:'Journal',more:'D’autres conseils pour votre séjour',sourceNote:'Dates, tarifs et conditions peuvent évoluer. Vérifiez les informations variables auprès de la source officielle avant votre visite.',breadcrumb:'Fil d’Ariane'},
 es:{home:'Inicio',journal:'Journal',more:'Más consejos para tu estancia',sourceNote:'Las fechas, precios y condiciones pueden cambiar. Comprueba la información variable en la fuente oficial antes de la visita.',breadcrumb:'Ruta de navegación'},
 zh:{home:'首页',journal:'旅行日志',more:'更多住宿期间的实用内容',sourceNote:'日期、票价和条件可能变化。涉及实时信息时，请在出行前通过官方来源再次确认。',breadcrumb:'面包屑导航'}
};

export default function AuditedLocalizedJournalArticle({lang,data,tipLabel,officialLabel,backLabel}:{lang:Lang;data:JournalArticleData;tipLabel:string;officialLabel:string;backLabel:string}){
 const t=ui[lang];
 const logicalPath=`/journal/${data.slug}`;
 const pagePath=localePath(logicalPath,lang);
 const pageUrl=`${BASE}${pagePath}`;
 const imageUrl=data.image.startsWith('http')?data.image:`${BASE}${data.image}`;
 const schemas:any[]=[
  {'@context':'https://schema.org','@type':'Article',headline:data.title,description:data.description,inLanguage:hreflang[lang],image:imageUrl,dateModified:'2026-09-11',mainEntityOfPage:{'@type':'WebPage','@id':pageUrl},author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE}},
  {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:t.home,item:`${BASE}${localePath('/',lang)}`},{'@type':'ListItem',position:2,name:t.journal,item:`${BASE}${localePath('/journal',lang)}`},{'@type':'ListItem',position:3,name:data.title,item:pageUrl}]}
 ];
 if(data.slug==='carnevale-di-venezia') schemas.push({'@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,startDate:'2027-01-23',endDate:'2027-02-09',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:hreflang[lang],image:imageUrl,url:pageUrl,location:{'@type':'City',name:'Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}});
 if(data.slug==='festa-del-redentore') schemas.push({'@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,startDate:'2027-07-17',endDate:'2027-07-18',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:hreflang[lang],image:imageUrl,url:pageUrl,location:{'@type':'Place',name:'Venezia e Giudecca',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}});
 if(data.slug==='regata-storica-2026') schemas.push({'@context':'https://schema.org','@type':'Event',name:data.title,description:data.description,startDate:'2026-09-06',endDate:'2026-09-06',eventStatus:'https://schema.org/EventCompleted',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',inLanguage:hreflang[lang],image:imageUrl,url:pageUrl,location:{'@type':'Place',name:'Canal Grande, Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}});
 return <><Header lang={lang}/><main><article className="editorial-page">{schemas.map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}
  <EditorialHero image={data.image} imageAlt={data.imageAlt} crumbs={[{label:t.home,href:localePath('/',lang)},{label:t.journal,href:localePath('/journal',lang)},{label:data.title}]} breadcrumbLabel={t.breadcrumb} eyebrow={<>{data.category}{data.eventDate&&<> • {data.eventDate}</>}</>} title={data.title} subtitle={data.description} strongShade={Boolean(data.posterHero)}/>
  <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p><div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div></div></section>
  <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>{data.official&&<div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{officialLabel}</p><p className="mt-3 text-slate-600">{t.sourceNote}</p><a href={data.official[1]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.official[0]} ↗</a></div>}</div></section>
  <EditorialStayCta lang={lang} context="journal"/>
  <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{t.more}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{data.related?.map(([label,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{label} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href={localePath('/journal',lang)} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{backLabel}</Link></div></div></section>
 </article></main><Footer lang={lang}/></>;
}
