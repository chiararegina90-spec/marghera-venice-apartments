import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonsPhoto from '@/components/CommonsPhoto';
import CulturePracticalCard from '@/components/CulturePracticalCard';
import CultureCard from '@/components/CultureCard';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cityLabel,cultureDetailPath,cultureIndexPath,cultureUi,highlightsLabel,kindLabel,localizedHighlights,planningText,planningTitle} from '@/data/cultureTranslations';
import {cultureNarrative} from '@/data/cultureNarrative';

const kindIcons={museum:'🏛️',monument:'🏰',church:'⛪',panorama:'👀'} as const;

export default function CultureDetailPage({place,lang,scope,allPlaces}:{place:CulturePlace;lang:CultureLang;scope:CultureScope;allPlaces:CulturePlace[]}){
 const ui=cultureUi[lang]; const city=cityLabel(place.city,lang); const index=cultureIndexPath(scope,lang); const home=lang==='it'?'/':`/${lang}`; const guide=lang==='it'?'/guide':`/${lang}/guide`; const narrative=cultureNarrative(place,lang);
 const related=allPlaces.filter(p=>p.slug!==place.slug && (p.city===place.city||p.kind===place.kind)).slice(0,3);
 const faq=[
   [ui.faqDurationQ(place.name),ui.faqDurationA(place.name,place.duration)],
   [ui.faqBookingQ(place.name),ui.faqBookingA],
   [ui.faqKidsQ(place.name),ui.faqKidsA],
 ];
 const jsonLd=[
   {'@context':'https://schema.org','@type':'TouristAttraction',name:place.name,address:{'@type':'PostalAddress',addressLocality:place.city,addressRegion:'Veneto',addressCountry:'IT'},url:`https://www.margheraveniceapartments.com${cultureDetailPath(scope,lang,place.slug)}`,sameAs:[place.officialUrl],isAccessibleForFree:priceLooksFree(place),touristType:place.family?'Families':''},
   {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
     {'@type':'ListItem',position:1,name:ui.home,item:`https://www.margheraveniceapartments.com${home==='/'?'':home}`},
     {'@type':'ListItem',position:2,name:ui.guides,item:`https://www.margheraveniceapartments.com${guide}`},
     {'@type':'ListItem',position:3,name:scope==='venice'?ui.veniceTitle:ui.venetoTitle,item:`https://www.margheraveniceapartments.com${index}`},
     {'@type':'ListItem',position:4,name:place.name,item:`https://www.margheraveniceapartments.com${cultureDetailPath(scope,lang,place.slug)}`},
   ]},
   {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
 ];
 return <><Header lang={lang}/><main className="culture-detail editorial-page">
   {jsonLd.map((x,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>)}

   <section className="relative isolate min-h-[520px] overflow-hidden bg-navy text-white sm:min-h-[580px] lg:min-h-[640px]">
     <div className="absolute inset-0 -z-20">
       <CommonsPhoto query={place.commonsQuery} alt={`${place.name}, ${city}`} lang={lang} className="object-cover" sizes="100vw"/>
     </div>
     <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,43,64,.92)_0%,rgba(7,43,64,.78)_43%,rgba(7,43,64,.28)_76%,rgba(7,43,64,.12)_100%)]"/>
     <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-navy/70 to-transparent"/>
     <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:min-h-[580px] sm:pb-12 lg:min-h-[640px] lg:px-8 lg:pb-14">
       <nav aria-label="Breadcrumb" className="flex max-w-4xl flex-wrap items-center gap-2 text-sm text-white/78"><Link href={home}>{ui.home}</Link><span>›</span><Link href={guide}>{ui.guides}</Link><span>›</span><Link href={index}>{scope==='venice'?ui.veniceTitle:ui.venetoTitle}</Link><span>›</span><span className="text-gold">{place.name}</span></nav>
       <div className="mt-6 flex items-center gap-3">
         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-white/90 bg-white/95 text-xl shadow-lg" title={kindLabel(place.kind,lang)} aria-label={kindLabel(place.kind,lang)}>{kindIcons[place.kind]}</span>
         <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{kindLabel(place.kind,lang)} · {city}</p>
       </div>
       <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.45rem,6vw,4.8rem)] leading-[.96] tracking-[-.02em] [text-shadow:0_2px_18px_rgba(0,0,0,.28)]">{place.name}</h1>
       <p className="mt-5 max-w-3xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8 [text-shadow:0_1px_10px_rgba(0,0,0,.22)]">{narrative.lead}</p>
     </div>
   </section>

   <section className="bg-white py-7 sm:py-9"><div className="mx-auto max-w-7xl px-5 lg:px-8">
     <CulturePracticalCard place={place} lang={lang} className="lg:hidden"/>
   </div></section>

   <section className="pb-16 pt-2 sm:pb-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
     <article className="min-w-0">
       <section><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">01</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{ui.why}</h2></div><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{narrative.why}</p></section>
       <section className="mt-8"><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">02</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{ui.miss}</h2></div><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{ui.missText(highlightsLabel(place,lang))}</p><div className="mt-5 flex flex-wrap gap-2">{localizedHighlights(place,lang).map(h=><span key={h} className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-navy">✦ {h}</span>)}</div></section>
       <section className="mt-8 rounded-[1.75rem] border border-[#e5dccd] bg-white p-6 sm:p-8"><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">03</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{planningTitle(lang)}</h2></div><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{planningText(place,lang)}</p></section>
       <section className="mt-8 rounded-[1.75rem] bg-cream p-6 sm:p-8"><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">04</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{ui.curiosity}</h2></div><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{narrative.curiosity}</p></section>
       <section className="mt-8"><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">05</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{ui.getting}</h2></div><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{narrative.getting}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{ui.maps} ↗</a></section>
       <section className="mt-8 border-l-4 border-gold bg-[#fbf8f2] p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{ui.tip}</p><p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{narrative.tip}</p></section>
       <section className="mt-10"><div className="flex items-baseline gap-3"><p className="text-sm font-black uppercase tracking-[.18em] text-gold">FAQ</p><h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{ui.faq}</h2></div><div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">{faq.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy"><span>{q}</span><span className="text-gold transition group-open:rotate-180">⌄</span></summary><p className="pt-4 leading-7 text-slate-600">{a}</p></details>)}</div></section>
     </article>
     <div className="hidden lg:block"><CulturePracticalCard place={place} lang={lang} className="sticky top-28"/></div>
   </div></section>

   <section className="bg-cream py-12 sm:py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{ui.related}</p><h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl">{scope==='venice'?ui.veniceTitle:ui.venetoTitle}</h2></div><Link href={index} className="rounded-full border border-navy px-5 py-3 font-bold text-navy">{scope==='venice'?ui.backVenice:ui.backVeneto}</Link></div><div className="mt-7 grid gap-7 md:grid-cols-3">{related.map(p=><CultureCard key={p.slug} place={p} lang={lang} scope={scope}/>)}</div></div></section>
 </main><Footer lang={lang}/></>;
}

function priceLooksFree(place:CulturePlace){return place.price.toLowerCase().includes('ingresso libero')||place.price.toLowerCase().includes('chiesa libera');}
