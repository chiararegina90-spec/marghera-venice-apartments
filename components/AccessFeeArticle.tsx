import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';
import {accessFeeContent} from '@/data/accessFeeContent';
import {localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const SLUG='/journal/contributo-accesso-venezia';
const officialPortal:Record<SiteLang,string>={
  it:'https://cda.ve.it/it/',en:'https://cda.ve.it/en/',de:'https://cda.ve.it/de/',fr:'https://cda.ve.it/fr/',es:'https://cda.ve.it/es/',zh:'https://cda.ve.it/en/'
};
const municipality='https://www.comune.venezia.it/it/cda-info';
const islandGuides=[
  ['Murano','murano'],['Burano','burano'],['Lido di Venezia','lido-di-venezia'],['Pellestrina','pellestrina'],["Sant’Erasmo",'sant-erasmo'],['Certosa','certosa']
] as const;

export default function AccessFeeArticle({lang}:{lang:SiteLang}){
  const c=accessFeeContent[lang];
  const currentPath=localePath(SLUG,lang);
  const articleUrl=`${BASE}${currentPath}`;
  const faqSchema={
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:c.faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))
  };
  const articleSchema={
    '@context':'https://schema.org','@type':'Article',headline:c.h1,description:c.metaDescription,
    datePublished:'2026-09-10',dateModified:'2026-09-10',mainEntityOfPage:{'@type':'WebPage','@id':articleUrl},
    author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}},
    image:`${BASE}/images/journal-parcheggi-venezia.webp`
  };
  const breadcrumbSchema={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:c.labels.home,item:`${BASE}${localePath('/',lang)}`},
      {'@type':'ListItem',position:2,name:c.labels.journal,item:`${BASE}${localePath('/journal',lang)}`},
      {'@type':'ListItem',position:3,name:c.h1,item:articleUrl}
    ]
  };
  const related=[
    [c.labels.getting,localePath('/come-raggiungere-venezia',lang)],
    [c.labels.parking,localePath('/journal/dove-parcheggiare-venezia',lang)],
    [c.labels.useful,localePath('/link-utili',lang)],
    [c.labels.faq,localePath('/faq',lang)],
    [c.labels.children,localePath('/journal/venezia-con-bambini',lang)]
  ] as const;

  return <>
    <Header lang={lang}/>
    <main><article className="editorial-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      <section className="relative min-h-[64svh] overflow-hidden pt-20 sm:min-h-[72vh]">
        <Image src="/images/journal-parcheggi-venezia.webp" alt={c.h1} fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 editorial-cover-shade"/>
        <div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(72vh-5rem)] lg:px-8"><div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href={localePath('/',lang)}>{c.labels.home}</Link><span>›</span><Link href={localePath('/journal',lang)}>{c.labels.journal}</Link><span>›</span><span className="text-gold">{c.h1}</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{c.kicker}</p>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5.4rem)] leading-[.98]">{c.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">{c.updatedLabel}</p>
        </div></div>
      </section>

      <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="space-y-5">{c.intro.map((p,i)=><p key={p} className={i===0?'font-serif text-3xl leading-relaxed text-navy':'text-lg leading-8 text-slate-700'}>{p}</p>)}</div>
        <div className="mt-10 rounded-[2rem] border border-gold/30 bg-cream p-7 sm:p-9"><h2 className="font-serif text-3xl text-navy">{c.currentTitle}</h2><div className="mt-5 grid gap-3">{c.currentItems.map((item,i)=><div key={item} className="flex gap-3 text-base leading-7 text-slate-700"><span aria-hidden="true">{i<3?'✅':'⏳'}</span><span>{item}</span></div>)}</div></div>
      </div></section>

      <section className="pb-20"><div className="mx-auto max-w-4xl space-y-14 px-5 lg:px-8">{c.sections.map((section,i)=><section key={section.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{section.title}</h2><div className="mt-4 space-y-4">{section.paragraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div>{section.bullets&&<ul className="mt-6 grid gap-2 rounded-3xl bg-cream p-6 text-slate-700">{section.bullets.map(b=><li key={b} className="flex gap-3"><span className="text-gold">•</span><span>{b}</span></li>)}</ul>}</div></section>)}</div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.taxTitle}</h2><div className="mt-5 space-y-4">{c.taxParagraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div></div></section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.islandsTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{c.islandsIntro}</p><div className="mt-7 flex flex-wrap gap-3">{islandGuides.map(([name,slug])=><Link key={slug} href={localePath(`/guide/${slug}`,lang)} className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-navy transition hover:border-gold hover:text-gold">{name} →</Link>)}</div><p className="mt-7 text-lg leading-8 text-slate-600">{c.islandsOutro}</p></div></section>

      <section className="bg-cream py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.faqTitle}</h2><div className="mt-8 divide-y divide-slate-200 rounded-[2rem] bg-white px-6 sm:px-8">{c.faq.map(item=><details key={item.q} className="group py-5"><summary className="cursor-pointer list-none pr-6 font-serif text-2xl text-navy">{item.q}</summary><p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-7 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.relatedTitle}</p><div className="mt-5 grid gap-3">{related.map(([label,href])=><Link key={href} href={href} className="rounded-2xl border border-slate-200 p-4 font-semibold text-navy transition hover:border-gold">{label} <span className="text-gold">→</span></Link>)}</div></div><aside className="rounded-[2rem] bg-navy p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.officialTitle}</p><p className="mt-4 leading-7 text-white/75">{c.officialText}</p><div className="mt-6 grid gap-3"><a href={officialPortal[lang]} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">{c.officialPortal} →</a><a href={municipality} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">{c.officialComune} →</a></div></aside></div></section>
      <EditorialStayCta lang={lang} context="journal"/>
      <div className="pb-16 text-center"><Link href={localePath('/journal',lang)} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">← {c.labels.journal}</Link></div>
    </article></main>
    <Footer lang={lang}/>
  </>;
}
