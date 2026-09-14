import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {BiennaleArte2026Data,BiennaleArte2026Lang} from '@/data/biennaleArte2026';
import EditorialStayCta from '@/components/EditorialStayCta';
import {localePath} from '@/lib/i18n';

function base(lang:BiennaleArte2026Lang){return lang==='it'?'':`/${lang}`;}
const architecture2027:Record<BiennaleArte2026Lang,{eyebrow:string;title:string;text:string;cta:string}>={
  it:{eyebrow:'Prossima grande edizione',title:'Biennale Architettura Venezia 2027',text:'Le date sono già ufficiali: 8 maggio–21 novembre 2027, con Wang Shu e Lu Wenyu come curatori. La nostra nuova guida è già online e verrà aggiornata progressivamente.',cta:'Scopri la Biennale Architettura 2027'},
  en:{eyebrow:'Next major edition',title:'Venice Architecture Biennale 2027',text:'The dates are already official: 8 May–21 November 2027, curated by Wang Shu and Lu Wenyu. Our new guide is online and will be updated progressively.',cta:'Explore the 2027 Architecture Biennale'},
  de:{eyebrow:'Nächste große Ausgabe',title:'Architekturbiennale Venedig 2027',text:'Die Termine stehen fest: 8. Mai–21. November 2027, kuratiert von Wang Shu und Lu Wenyu. Unser neuer Guide ist bereits online und wird laufend aktualisiert.',cta:'Architekturbiennale 2027 entdecken'},
  fr:{eyebrow:'Prochaine grande édition',title:'Biennale d’Architecture de Venise 2027',text:'Les dates sont déjà officielles : 8 mai–21 novembre 2027, sous le commissariat de Wang Shu et Lu Wenyu. Notre nouveau guide est en ligne et sera enrichi progressivement.',cta:'Découvrir la Biennale Architecture 2027'},
  es:{eyebrow:'Próxima gran edición',title:'Bienal de Arquitectura de Venecia 2027',text:'Las fechas ya son oficiales: 8 de mayo–21 de noviembre de 2027, con Wang Shu y Lu Wenyu como comisarios. La nueva guía ya está online y se actualizará progresivamente.',cta:'Descubrir la Bienal de Arquitectura 2027'},
  zh:{eyebrow:'下一届重点展览',title:'2027 威尼斯建筑双年展',text:'日期已经正式公布：2027年5月8日至11月21日，策展人为王澍与陆文宇。新指南现已上线，并会持续更新。',cta:'查看2027建筑双年展指南'}
};

export default function BiennaleArte2026Article({lang,data}:{lang:BiennaleArte2026Lang;data:BiennaleArte2026Data}){
  const path=`${base(lang)}/journal/biennale-di-venezia`;
  const url=`https://www.margheraveniceapartments.com${path}`;
  const next=architecture2027[lang];
  const articleJsonLd={
    '@context':'https://schema.org','@type':'Article',headline:data.heroTitle,description:data.metaDescription,
    author:{'@type':'Organization',name:'Marghera Venice Apartments'},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments'},
    mainEntityOfPage:url,url
  };
  const eventJsonLd={
    '@context':'https://schema.org','@type':'Event',name:'Biennale Arte 2026 – In Minor Keys',description:data.metaDescription,
    startDate:'2026-05-09',endDate:'2026-11-22',eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    location:[
      {'@type':'Place',name:'Giardini della Biennale',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},
      {'@type':'Place',name:'Arsenale di Venezia',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}},
      {'@type':'Place',name:'Forte Marghera',address:{'@type':'PostalAddress',addressLocality:'Venezia',addressCountry:'IT'}}
    ],url
  };
  return <><Header lang={lang}/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventJsonLd)}}/>
    {(lang==='it'||lang==='en')?<section className="relative min-h-[64svh] overflow-hidden pt-20 sm:min-h-[72vh]">
      <Image src="/images/journal-biennale.webp" alt={data.imageAlt} fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 editorial-cover-shade"/>
      <div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(72vh-5rem)] lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href={base(lang)||'/'}>Home</Link><span>›</span><Link href={`${base(lang)}/journal`}>Journal</Link><span>›</span><span className="text-gold">{data.breadcrumb}</span></nav>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{data.category} • {data.eventDate}</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{data.heroTitle}</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/80">{data.heroSubtitle}</p>
        </div>
      </div>
    </section>:<EditorialHero
      image="/images/journal-biennale.webp"
      imageAlt={data.imageAlt}
      crumbs={[{label:lang==='de'?'Startseite':lang==='fr'?'Accueil':lang==='es'?'Inicio':'首页',href:base(lang)||'/'},{label:lang==='zh'?'旅行日志':'Journal',href:`${base(lang)}/journal`},{label:data.breadcrumb}]}
      eyebrow={`${data.category} • ${data.eventDate}`}
      title={data.heroTitle}
      subtitle={data.heroSubtitle}
    />}

    <section className="bg-cream py-8"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[1.6rem] border border-navy/10 bg-white p-6 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8"><div><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{next.eyebrow}</p><h2 className="mt-2 font-serif text-3xl text-navy">{next.title}</h2><p className="mt-3 max-w-2xl text-slate-600">{next.text}</p></div><Link href={localePath('/journal/biennale-architettura-2027',lang)} className="mt-5 inline-flex shrink-0 rounded-full bg-navy px-6 py-3 font-bold text-white sm:mt-0">{next.cta} →</Link></div></div></section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p>
      <div className="mt-14 space-y-12">{data.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p><p className="mt-4 font-serif text-3xl">{data.tip}</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialBoxLabel}</p><p className="mt-3 text-slate-600">{data.sourceNote}</p><a href={data.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialLabel} ↗</a></div>
    </div></section>

    <EditorialStayCta lang={lang} context="journal"/>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Journal</p><h2 className="mt-3 font-serif text-4xl text-navy">{data.moreLabel}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{data.related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href={`${base(lang)}/journal`} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div></div></section>
  </article></main><Footer lang={lang}/></>;
}
