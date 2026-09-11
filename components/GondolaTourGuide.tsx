import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';
import SocialLinks from '@/components/SocialLinks';
import WeChatCard from '@/components/WeChatCard';
import {gondolaTourContent} from '@/data/gondolaTourContent';
import {localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const LOGICAL='/guide/gondola-tour-venezia';
const OFFICIAL='https://www.comune.venezia.it/it/node/16768';

export default function GondolaTourGuide({lang}:{lang:SiteLang}){
  const c=gondolaTourContent[lang];
  const path=localePath(LOGICAL,lang);
  const articleUrl=`${BASE}${path}`;
  const articleSchema={
    '@context':'https://schema.org','@type':'Article',headline:c.h1,description:c.metaDescription,
    datePublished:'2026-09-10',dateModified:'2026-09-11',mainEntityOfPage:{'@type':'WebPage','@id':articleUrl},
    author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}},
    image:`${BASE}/images/gondola-tour-venezia-cover.jpg`
  };
  const breadcrumbSchema={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:c.labels.home,item:`${BASE}${localePath('/',lang)}`},
      {'@type':'ListItem',position:2,name:c.labels.guides,item:`${BASE}${localePath('/guide',lang)}`},
      {'@type':'ListItem',position:3,name:c.h1,item:articleUrl}
    ]
  };
  const faqSchema={
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:c.faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))
  };
  const related=[
    [c.labels.hidden,localePath('/guide/venezia-nascosta',lang)],
    [c.labels.children,localePath('/journal/venezia-con-bambini',lang)],
    [c.labels.getting,localePath('/come-raggiungere-venezia',lang)],
    [c.labels.discover,localePath('/scopri-venezia',lang)]
  ] as const;

  return <>
    <Header lang={lang}/>
    <main><article className="editorial-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>

      <section className="relative min-h-[68svh] overflow-hidden pt-20 sm:min-h-[76vh]">
        <Image src="/images/gondola-tour-venezia-cover.jpg" alt={c.coverAlt} fill priority sizes="100vw" className="object-cover object-center"/>
        <div className="absolute inset-0 editorial-cover-shade"/>
        <div className="relative mx-auto flex min-h-[calc(68svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(76vh-5rem)] lg:px-8"><div className="max-w-5xl text-white">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href={localePath('/',lang)}>{c.labels.home}</Link><span>›</span><Link href={localePath('/guide',lang)}>{c.labels.guides}</Link><span>›</span><span className="text-gold">{c.h1}</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{c.kicker}</p>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,6vw,5.6rem)] leading-[.97]">{c.h1}</h1>
          <p className="mt-6 text-sm font-semibold text-white/80">{c.updatedLabel}</p>
        </div></div>
      </section>

      <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="space-y-5">{c.intro.map((p,i)=><p key={p} className={i===0?'font-serif text-3xl leading-relaxed text-navy':'text-lg leading-8 text-slate-600'}>{p}</p>)}</div></div></section>

      <section className="bg-cream py-16 sm:py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.2em] text-gold">2026</p>
        <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">{c.pricingTitle}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{c.pricingIntro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-black/5"><p className="text-xs font-black uppercase tracking-[.16em] text-gold">{c.dayLabel}</p><p className="mt-2 font-serif text-3xl text-navy">{c.dayTime}</p><p className="mt-5 font-serif text-6xl text-navy">{c.dayPrice}</p><p className="mt-2 text-slate-600">{c.dayDuration}</p></div>
          <div className="rounded-[2rem] bg-navy p-7 text-white shadow-soft"><p className="text-xs font-black uppercase tracking-[.16em] text-gold">{c.nightLabel}</p><p className="mt-2 font-serif text-3xl">{c.nightTime}</p><p className="mt-5 font-serif text-6xl">{c.nightPrice}</p><p className="mt-2 text-white/70">{c.nightDuration}</p></div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3"><div className="rounded-3xl bg-white p-6 md:col-span-1"><p className="text-xs font-black uppercase tracking-[.14em] text-gold">{c.maxLabel}</p><p className="mt-2 font-serif text-2xl text-navy">{c.maxValue}</p></div><div className="rounded-3xl bg-white p-6 md:col-span-2"><p className="leading-7 text-slate-700">{c.proportionalText}</p><p className="mt-3 leading-7 text-slate-600">{c.variabilityText}</p></div></div>
        <div className="mt-7 rounded-3xl border border-gold/30 bg-white p-6"><p className="leading-7 text-slate-700">{c.officialNote}</p><a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-bold text-gold">{c.labels.officialSource}: {c.officialLink} ↗</a></div>
      </div></section>

      <section className="py-20"><div className="mx-auto max-w-4xl space-y-16 px-5 lg:px-8">
        <section><h2 className="font-serif text-4xl text-navy">{c.priceTitle}</h2><div className="mt-5 space-y-4">{c.priceParagraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div></section>
        <section><h2 className="font-serif text-4xl text-navy">{c.durationTitle}</h2><div className="mt-5 space-y-4">{c.durationParagraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div></section>
      </div></section>

      <section className="bg-cream py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy sm:text-5xl">{c.routesTitle}</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{c.routesIntro}</p><div className="mt-9 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] bg-navy p-7 text-white sm:p-9"><p className="text-xs font-black uppercase tracking-[.16em] text-gold">01</p><h3 className="mt-3 font-serif text-4xl">{c.grandTitle}</h3><p className="mt-4 leading-7 text-white/75">{c.grandText}</p><ul className="mt-6 space-y-3">{c.grandBullets.map(b=><li key={b} className="flex gap-3"><span className="text-gold">•</span><span>{b}</span></li>)}</ul></article>
        <article className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9"><p className="text-xs font-black uppercase tracking-[.16em] text-gold">02</p><h3 className="mt-3 font-serif text-4xl text-navy">{c.smallTitle}</h3><p className="mt-4 leading-7 text-slate-600">{c.smallText}</p><ul className="mt-6 space-y-3 text-slate-700">{c.smallBullets.map(b=><li key={b} className="flex gap-3"><span className="text-gold">•</span><span>{b}</span></li>)}</ul></article>
      </div><p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">{c.routesOutro}</p></div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy sm:text-5xl">{c.timingTitle}</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{c.times.map((item,i)=><div key={item.label} className="rounded-3xl border border-slate-200 p-6"><p className="text-xs font-black tracking-[.15em] text-gold">0{i+1}</p><h3 className="mt-2 font-serif text-3xl text-navy">{item.label}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section className="bg-navy py-20 text-white"><div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{lang==='zh'?'微信 WeChat':'WhatsApp'}</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">{c.customTitle}</h2><p className="mt-5 text-lg leading-8 text-white/75">{c.customIntro}</p><p className="mt-5 leading-7 text-white/70">{c.customTiming}</p><p className="mt-5 text-sm leading-6 text-white/55">{c.customNote}</p><p className="mt-7 font-semibold text-gold">{lang==='zh'?'通过微信联系我们，我们会根据你的日期和人数提供建议。':c.customCta}</p>{lang==='zh'?<div className="mt-5"><WeChatCard dark title="添加我们的微信"/></div>:<SocialLinks className="mt-4 text-white" showWhatsApp lang={lang}/>}</div><ul className="self-start rounded-[2rem] bg-white/8 p-7 ring-1 ring-white/15">{c.customItems.map(x=><li key={x} className="flex gap-3 border-b border-white/10 py-3 last:border-0"><span className="text-gold">✓</span><span>{x}</span></li>)}</ul></div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy sm:text-5xl">{c.curiositiesTitle}</h2><div className="mt-9 grid gap-6 md:grid-cols-2">{c.curiosities.map((item,i)=><article key={item.title} className="rounded-[2rem] bg-cream p-7"><p className="text-xs font-black tracking-[.15em] text-gold">0{i+1}</p><h3 className="mt-3 font-serif text-3xl text-navy">{item.title}</h3><div className="mt-4 space-y-3">{item.paragraphs.map(p=><p key={p} className="leading-7 text-slate-600">{p}</p>)}</div>{i===3&&<Link href={localePath('/guide/venezia-nascosta',lang)} className="mt-5 inline-flex font-bold text-gold">{c.labels.hidden} →</Link>}</article>)}</div></div></section>

      <section className="bg-cream py-20"><div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:px-8"><article className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9"><h2 className="font-serif text-4xl text-navy">{c.kidsTitle}</h2><div className="mt-5 space-y-4">{c.kidsParagraphs.map(p=><p key={p} className="leading-7 text-slate-600">{p}</p>)}</div><Link href={localePath('/journal/venezia-con-bambini',lang)} className="mt-6 inline-flex font-bold text-gold">{c.labels.children} →</Link></article><article className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9"><h2 className="font-serif text-4xl text-navy">{c.worthTitle}</h2><div className="mt-5 space-y-4">{c.worthParagraphs.map(p=><p key={p} className="leading-7 text-slate-600">{p}</p>)}</div></article></div></section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy sm:text-5xl">{c.faqTitle}</h2><div className="mt-8 divide-y divide-slate-200 rounded-[2rem] bg-cream px-6 sm:px-8">{c.faq.map(item=><details key={item.q} className="py-5"><summary className="cursor-pointer list-none pr-6 font-serif text-2xl text-navy">{item.q}</summary><p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.relatedTitle}</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{related.map(([label,href])=><Link key={href} href={href} className="rounded-2xl bg-white p-4 font-semibold text-navy shadow-soft">{label} <span className="text-gold">→</span></Link>)}</div></div></section>

      <div className="py-12"><EditorialStayCta lang={lang} context="guide"/></div>
      <div className="pb-16 text-center"><Link href={localePath('/guide',lang)} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">← {c.labels.back}</Link></div>
    </article></main>
    <Footer lang={lang}/>
  </>;
}
