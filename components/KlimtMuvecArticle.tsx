import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';
import {
 KLIMT_MUVEC_COVER,KLIMT_MUVEC_END,KLIMT_MUVEC_INFO,KLIMT_MUVEC_MODIFIED,
 KLIMT_MUVEC_OFFICIAL,KLIMT_MUVEC_PUBLISHED,KLIMT_MUVEC_SLUG,KLIMT_MUVEC_START,
 klimtMuvec2026
} from '@/data/klimtMuvec2026';
import {hreflang,localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';

const caPesaroUi:Record<SiteLang,{eyebrow:string;title:string;text:string;label:string}>={
 it:{eyebrow:'GIUDITTA II · PRESTITO TEMPORANEO',title:'Cerchi Giuditta II a Ca’ Pesaro?',text:'Il capolavoro di Gustav Klimt, normalmente conservato a Ca’ Pesaro, è temporaneamente esposto qui al MUVEC fino al 14 febbraio 2027.',label:'Apri la scheda di Ca’ Pesaro'},
 en:{eyebrow:'JUDITH II · TEMPORARY LOAN',title:'Looking for Judith II at Ca’ Pesaro?',text:'Gustav Klimt’s masterpiece, normally held at Ca’ Pesaro, is temporarily on display here at MUVEC until 14 February 2027.',label:'Open the Ca’ Pesaro guide'},
 de:{eyebrow:'JUDITH II · VORÜBERGEHENDE LEIHGABE',title:'Suchen Sie Judith II in Ca’ Pesaro?',text:'Gustav Klimts Meisterwerk, normalerweise in Ca’ Pesaro, ist bis 14. Februar 2027 vorübergehend hier im MUVEC zu sehen.',label:'Ca’ Pesaro Guide öffnen'},
 fr:{eyebrow:'JUDITH II · PRÊT TEMPORAIRE',title:'Vous cherchez Judith II à Ca’ Pesaro ?',text:'Le chef-d’œuvre de Gustav Klimt, habituellement conservé à Ca’ Pesaro, est temporairement exposé ici au MUVEC jusqu’au 14 février 2027.',label:'Ouvrir le guide de Ca’ Pesaro'},
 es:{eyebrow:'JUDITH II · PRÉSTAMO TEMPORAL',title:'¿Buscas Judith II en Ca’ Pesaro?',text:'La obra maestra de Gustav Klimt, normalmente conservada en Ca’ Pesaro, está expuesta temporalmente aquí en MUVEC hasta el 14 de febrero de 2027.',label:'Abrir la guía de Ca’ Pesaro'},
 zh:{eyebrow:'JUDITH II · 临时外借',title:'在 Ca’ Pesaro 找 Judith II？',text:'Gustav Klimt 的这件名作通常收藏于 Ca’ Pesaro，目前临时在 MUVEC 展出至2027年2月14日。',label:'打开 Ca’ Pesaro 指南'}
};

const ui:Record<SiteLang,{home:string;journal:string;official:string;guide:string;back:string}>={
 it:{home:'Home',journal:'Journal',official:'Apri il sito ufficiale',guide:'Apri la guida MUVEC',back:'Torna al Journal'},
 en:{home:'Home',journal:'Journal',official:'Open official website',guide:'Open the MUVEC guide',back:'Back to Journal'},
 de:{home:'Startseite',journal:'Journal',official:'Offizielle Website öffnen',guide:'MUVEC-Guide öffnen',back:'Zurück zum Journal'},
 fr:{home:'Accueil',journal:'Journal',official:'Ouvrir le site officiel',guide:'Ouvrir le guide MUVEC',back:'Retour au Journal'},
 es:{home:'Inicio',journal:'Journal',official:'Abrir la web oficial',guide:'Abrir la guía MUVEC',back:'Volver al Journal'},
 zh:{home:'首页',journal:'旅行日志',official:'打开官方网站',guide:'打开 MUVEC 指南',back:'返回旅行日志'}
};

function QuickFacts({lang}:{lang:SiteLang}){
 const c=klimtMuvec2026[lang];
 const q=c.quick;
 const rows=[
  [q.whereLabel,q.where],[q.whenLabel,q.when],[q.hoursLabel,q.hours],[q.lastEntryLabel,q.lastEntry],
  [q.closedLabel,q.closed],[q.ticketsLabel,q.tickets],[q.curatorLabel,q.curator],[q.idealLabel,q.ideal]
 ];
 return <aside className="rounded-[2rem] bg-navy p-6 text-white shadow-soft sm:p-7">
  <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{q.title}</p>
  <h2 className="mt-2 font-serif text-3xl">{c.officialTitle}</h2>
  <dl className="mt-6 divide-y divide-white/10 text-sm">
   {rows.map(([label,value])=><div key={label} className="grid grid-cols-[.85fr_1.45fr] gap-4 py-4">
    <dt className="font-bold text-white/65">{label}</dt>
    <dd className="text-right font-semibold leading-6">{value}</dd>
   </div>)}
  </dl>
  <a href={KLIMT_MUVEC_OFFICIAL} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-center text-sm font-black text-navy transition hover:-translate-y-0.5">
   {q.officialLabel} ↗
  </a>
 </aside>;
}

export default function KlimtMuvecArticle({lang}:{lang:SiteLang}){
 const c=klimtMuvec2026[lang];
 const t=ui[lang];
 const canonical=localePath(KLIMT_MUVEC_SLUG,lang);
 const articleLd={
  '@context':'https://schema.org','@type':'Article',
  headline:c.title,description:c.description,image:BASE+KLIMT_MUVEC_COVER,
  datePublished:KLIMT_MUVEC_PUBLISHED,dateModified:KLIMT_MUVEC_MODIFIED,
  inLanguage:hreflang[lang],mainEntityOfPage:BASE+canonical,
  author:{'@type':'Organization',name:'Marghera Venice Apartments'},
  publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE}
 };
 const eventLd={
  '@context':'https://schema.org','@type':'ExhibitionEvent',
  name:c.officialTitle,description:c.description,image:BASE+KLIMT_MUVEC_COVER,
  startDate:KLIMT_MUVEC_START,endDate:KLIMT_MUVEC_END,
  eventStatus:'https://schema.org/EventScheduled',
  eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
  url:BASE+canonical,
  location:{'@type':'Place',name:'MUVEC – Casa delle Contemporaneità',address:{'@type':'PostalAddress',streetAddress:'Piazzale Candiani',addressLocality:'Mestre',postalCode:'30174',addressCountry:'IT'}},
  organizer:{'@type':'Organization',name:'Fondazione Musei Civici di Venezia',url:'https://www.visitmuve.it/'}
 };
 const faqLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:c.faq.map(x=>({'@type':'Question',name:x.question,acceptedAnswer:{'@type':'Answer',text:x.answer}}))};

 return <>
  <Header lang={lang}/>
  <main>
   <section className="relative min-h-[72vh] overflow-hidden pt-20">
    <div className="absolute inset-0">
     <Image src={KLIMT_MUVEC_COVER} alt={c.imageAlt} fill priority sizes="100vw" className="object-cover"/>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/15"/>
    <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8">
     <div className="max-w-5xl text-white">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/70">
       <Link href={localePath('/',lang)} className="hover:text-gold">{t.home}</Link><span>›</span>
       <Link href={localePath('/journal',lang)} className="hover:text-gold">{t.journal}</Link><span>›</span>
       <span className="text-gold">{c.category}</span>
      </nav>
      <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">{c.eyebrow}</p>
      <h1 className="mt-4 max-w-5xl text-balance font-serif text-[clamp(2.7rem,7vw,5.25rem)] leading-[.96]">{c.title}</h1>
      <p className="mt-5 max-w-3xl text-sm font-black uppercase tracking-[.16em] text-white/75">{c.eventDate}</p>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">{c.officialTitle}</p>
     </div>
    </div>
   </section>

   <section className="py-16 sm:py-20">
    <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
     <article className="min-w-0">
      <p className="max-w-4xl font-serif text-3xl leading-relaxed text-navy sm:text-4xl">{c.lead}</p>

      <div className="mt-10 lg:hidden"><QuickFacts lang={lang}/></div>

      <div className="mt-14 space-y-12">
       {c.sections.map(([title,text],i)=><section key={title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
        <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
        <div><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{text}</p></div>
       </section>)}
      </div>

      <section className="mt-14 rounded-[2rem] border border-gold/30 bg-[#fffaf0] p-7 sm:p-8">
       <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{caPesaroUi[lang].eyebrow}</p>
       <h2 className="mt-2 font-serif text-3xl text-navy">{caPesaroUi[lang].title}</h2>
       <p className="mt-4 max-w-3xl leading-7 text-slate-600">{caPesaroUi[lang].text}</p>
       <Link href={localePath('/guide/musei-venezia/ca-pesaro',lang)} className="mt-6 inline-flex rounded-full border border-navy px-6 py-3 text-sm font-black text-navy transition hover:bg-navy hover:text-white">
        {caPesaroUi[lang].label} →
       </Link>
      </section>

      <section className="mt-14 rounded-[2rem] border border-navy/10 bg-cream p-7 sm:p-8">
       <p className="text-xs font-black uppercase tracking-[.2em] text-gold">MUVEC</p>
       <h2 className="mt-2 font-serif text-3xl text-navy">{c.muvecGuideLabel}</h2>
       <p className="mt-4 max-w-3xl leading-7 text-slate-600">{c.muvecGuideText}</p>
       <Link href={localePath('/guide/musei-venezia/muvec-mestre',lang)} className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">
        {t.guide} →
       </Link>
      </section>

      <section className="mt-14">
       <h2 className="font-serif text-4xl text-navy">{c.faqTitle}</h2>
       <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
        {c.faq.map(item=><details key={item.question} className="group py-5">
         <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-navy marker:hidden">{item.question}<span className="float-right text-gold transition group-open:rotate-45">+</span></summary>
         <p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
        </details>)}
       </div>
      </section>

      <section className="mt-14 rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-slate-200 sm:p-8">
       <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.sourcesTitle}</p>
       <div className="mt-5 flex flex-wrap gap-3">
        <a href={KLIMT_MUVEC_OFFICIAL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">{c.officialExhibitionLabel} ↗</a>
        <a href={KLIMT_MUVEC_INFO} target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy">{c.officialMuseumLabel} ↗</a>
       </div>
      </section>
     </article>

     <div className="hidden lg:block lg:sticky lg:top-28"><QuickFacts lang={lang}/></div>
    </div>
   </section>

   <EditorialStayCta lang={lang} context="event"/>

   <section className="py-14 text-center">
    <Link href={localePath('/journal',lang)} className="inline-flex rounded-full border border-navy/15 px-6 py-3 font-bold text-navy">{t.back}</Link>
   </section>
  </main>
  <Footer lang={lang}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleLd)}}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(eventLd)}}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqLd)}}/>
 </>;
}
