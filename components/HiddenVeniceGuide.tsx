import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {cultureDetailPath} from '@/data/culturePlaces';
import {localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const LOGICAL='/guide/venezia-nascosta';
const heroAlt:Record<SiteLang,string>={
  it:'Venezia vista dal Bacino di San Marco prima di esplorare i quartieri più tranquilli',
  en:'Venice seen from St Mark’s Basin before exploring quieter neighbourhoods',
  de:'Blick auf Venedig vor einem Spaziergang durch ruhigere Stadtviertel',
  fr:'Vue de Venise avant de partir vers des quartiers plus calmes',
  es:'Vista de Venecia antes de recorrer barrios más tranquilos',
  zh:'从圣马可湾望向威尼斯，作为探索安静街区路线的起点'
};
const officialLabels:Record<SiteLang,string>={it:'Itinerari ufficiali Venezia Unica',en:'Official Venezia Unica itineraries',de:'Offizielle Routen von Venezia Unica',fr:'Itinéraires officiels Venezia Unica',es:'Itinerarios oficiales Venezia Unica',zh:'Venezia Unica官方路线'};
const sourceLinks=[
  ['Dorsoduro','https://www.veneziaunica.it/en/things-to-do-in-venice/itineraries/dorsoduro-the-art-district'],
  ['Castello','https://www.veneziaunica.it/en/things-to-do-in-venice/itineraries']
] as const;

function Fact({icon,label,value}:{icon:string;label:string;value:string}){return <div className="flex gap-3"><span aria-hidden="true">{icon}</span><div><p className="text-xs font-black uppercase tracking-[.12em] text-gold">{label}</p><p className="mt-1 leading-6 text-slate-700">{value}</p></div></div>}

export default function HiddenVeniceGuide({lang}:{lang:SiteLang}){
  const c=hiddenVeniceContent[lang];
  const path=localePath(LOGICAL,lang);
  const articleUrl=`${BASE}${path}`;
  const articleSchema={
    '@context':'https://schema.org','@type':'Article',headline:c.h1,description:c.metaDescription,datePublished:'2026-09-10',dateModified:'2026-09-10',
    mainEntityOfPage:{'@type':'WebPage','@id':articleUrl},author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}},image:`${BASE}/images/scopri-venezia-michael-heise.webp`
  };
  const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
    {'@type':'ListItem',position:1,name:c.labels.home,item:`${BASE}${localePath('/',lang)}`},
    {'@type':'ListItem',position:2,name:c.labels.guides,item:`${BASE}${localePath('/guide',lang)}`},
    {'@type':'ListItem',position:3,name:c.h1,item:articleUrl}
  ]};
  const lagoon=[['Certosa','certosa'],["Sant’Erasmo",'sant-erasmo'],['Pellestrina','pellestrina']] as const;
  const related=[
    [c.labels.children,localePath('/journal/venezia-con-bambini',lang)],
    [c.labels.dog,localePath('/journal/venezia-con-il-cane',lang)],
    ['Madonna dell’Orto',cultureDetailPath('venice',lang,'madonna-orto')],
    ['San Pietro di Castello',cultureDetailPath('venice',lang,'san-pietro-castello')]
  ] as const;

  return <>
    <Header lang={lang}/>
    <main><article className="editorial-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <section className="relative min-h-[68svh] overflow-hidden pt-20 sm:min-h-[76vh]">
        <Image src="/images/scopri-venezia-michael-heise.webp" alt={heroAlt[lang]} fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 editorial-cover-shade"/>
        <div className="relative mx-auto flex min-h-[calc(68svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(76vh-5rem)] lg:px-8"><div className="max-w-5xl text-white">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href={localePath('/',lang)}>{c.labels.home}</Link><span>›</span><Link href={localePath('/guide',lang)}>{c.labels.guides}</Link><span>›</span><span className="text-gold">{c.h1}</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{c.kicker}</p>
          <h1 className="mt-4 font-serif text-[clamp(2.7rem,6.3vw,5.8rem)] leading-[.96]">{c.h1}</h1>
          <p className="mt-6 text-sm font-semibold text-white/75">{c.updatedLabel}</p>
        </div></div>
      </section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="space-y-6">{c.intro.map((p,i)=><p key={p} className={i===0?'font-serif text-3xl leading-relaxed text-navy':'text-lg leading-8 text-slate-600'}>{p}</p>)}</div></div></section>

      <section className="pb-20"><div className="mx-auto max-w-5xl space-y-16 px-5 lg:px-8">{c.walks.map((walk,i)=><section key={walk.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-9"><div className="flex items-start gap-4"><span className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</span><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{walk.area}</p><h2 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">{walk.title}</h2></div></div><p className="mt-7 font-serif text-2xl leading-relaxed text-navy">{walk.intro}</p><div className="mt-6 space-y-5">{walk.paragraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div><div className="mt-8 grid gap-5 rounded-3xl bg-cream p-6 sm:grid-cols-2"><Fact icon="⏱" label={c.factsLabels.duration} value={walk.duration}/><Fact icon="💶" label={c.factsLabels.cost} value={walk.cost}/><Fact icon="🧒" label={c.factsLabels.kids} value={walk.kids}/><Fact icon="🦮" label={c.factsLabels.dog} value={walk.dog}/><Fact icon="👥" label={c.factsLabels.crowds} value={walk.crowds}/><Fact icon="🕐" label={c.factsLabels.best} value={walk.best}/><div className="sm:col-span-2"><Fact icon="📍" label={c.factsLabels.stops} value={walk.stops.join(' → ')}/></div></div>{i===0&&<div className="mt-7 flex flex-wrap gap-3"><Link href={cultureDetailPath('venice',lang,'madonna-orto')} className="font-bold text-gold">Madonna dell’Orto →</Link></div>}{i===2&&<div className="mt-7 flex flex-wrap gap-3"><Link href={cultureDetailPath('venice',lang,'san-pietro-castello')} className="font-bold text-gold">San Pietro di Castello →</Link></div>}</section>)}</div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9"><h2 className="font-serif text-4xl text-navy">{c.notHiddenTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{c.notHiddenIntro}</p><div className="mt-7 grid gap-4 sm:grid-cols-2">{c.notHiddenItems.map(item=><div key={item.name} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-serif text-2xl text-navy">{item.name}</h3><p className="mt-2 leading-7 text-slate-600">{item.text}</p></div>)}</div><p className="mt-7 text-lg leading-8 text-slate-600">{c.notHiddenOutro}</p></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-4xl space-y-14 px-5 lg:px-8"><section><h2 className="font-serif text-4xl text-navy">{c.twoHoursTitle}</h2><div className="mt-5 space-y-4">{c.twoHours.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div></section><section><h2 className="font-serif text-4xl text-navy">{c.kidsTitle}</h2><div className="mt-5 space-y-4">{c.kids.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div><Link href={localePath('/journal/venezia-con-bambini',lang)} className="mt-5 inline-flex font-bold text-gold">{c.labels.children} →</Link></section><section><h2 className="font-serif text-4xl text-navy">{c.dogTitle}</h2><div className="mt-5 space-y-4">{c.dog.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div><Link href={localePath('/journal/venezia-con-il-cane',lang)} className="mt-5 inline-flex font-bold text-gold">{c.labels.dog} →</Link></section><section><h2 className="font-serif text-4xl text-navy">{c.quieterTitle}</h2><div className="mt-5 space-y-4">{c.quieter.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div><div className="mt-6 flex flex-wrap gap-3">{lagoon.map(([name,slug])=><Link key={slug} href={localePath(`/guide/${slug}`,lang)} className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-navy transition hover:border-gold hover:text-gold">{name} →</Link>)}</div></section></div></section>

      <section className="bg-cream py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.faqTitle}</h2><div className="mt-8 divide-y divide-slate-200 rounded-[2rem] bg-white px-6 sm:px-8">{c.faq.map(item=><details key={item.q} className="py-5"><summary className="cursor-pointer list-none font-serif text-2xl text-navy">{item.q}</summary><p className="mt-3 leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="py-16"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.relatedTitle}</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{related.map(([label,href])=><Link key={href} href={href} className="rounded-2xl border border-slate-200 p-4 font-semibold text-navy transition hover:border-gold">{label} <span className="text-gold">→</span></Link>)}</div></div><aside className="rounded-[2rem] bg-navy p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{officialLabels[lang]}</p><p className="mt-4 leading-7 text-white/75">{c.officialNote}</p><div className="mt-5 grid gap-2">{sourceLinks.map(([name,href])=><a key={href} href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">{name} →</a>)}</div></aside></div></div></section>

      <EditorialStayCta lang={lang} context="guide"/>
      <div className="pb-16 text-center"><Link href={localePath('/guide',lang)} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">← {c.labels.guides}</Link></div>
    </article></main>
    <Footer lang={lang}/>
  </>;
}
