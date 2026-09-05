import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommonsPhoto from '@/components/CommonsPhoto';
import CulturePracticalCard from '@/components/CulturePracticalCard';
import CultureCard from '@/components/CultureCard';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cityLabel,cultureDetailPath,cultureIndexPath,cultureUi,highlightsLabel,kindLabel,localizedHighlights,planningText,planningTitle} from '@/data/cultureTranslations';

export default function CultureDetailPage({place,lang,scope,allPlaces}:{place:CulturePlace;lang:CultureLang;scope:CultureScope;allPlaces:CulturePlace[]}){
 const ui=cultureUi[lang]; const city=cityLabel(place.city,lang); const index=cultureIndexPath(scope,lang); const home=lang==='it'?'/':`/${lang}`; const guide=lang==='it'?'/guide':`/${lang}/guide`;
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
 return <><Header lang={lang}/><main>
   {jsonLd.map((x,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>)}
   <section className="bg-navy px-5 pb-10 pt-32 text-white lg:px-8"><div className="mx-auto max-w-7xl">
     <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/65"><Link href={home}>{ui.home}</Link><span>›</span><Link href={guide}>{ui.guides}</Link><span>›</span><Link href={index}>{scope==='venice'?ui.veniceTitle:ui.venetoTitle}</Link><span>›</span><span className="text-gold">{place.name}</span></nav>
     <p className="mt-7 text-xs font-black uppercase tracking-[.22em] text-gold">{kindLabel(place.kind,lang)} · {city}</p>
     <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.8rem,9vw,6.4rem)] leading-[.95] tracking-[-.02em]">{place.name}</h1>
     <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{ui.whyText(place.name,city)}</p>
   </div></section>

   <section className="bg-white py-8 sm:py-12"><div className="mx-auto max-w-7xl px-5 lg:px-8">
     <div className="relative h-[52vw] max-h-[610px] min-h-[280px] overflow-hidden rounded-[2rem] bg-cream shadow-soft"><CommonsPhoto query={place.commonsQuery} alt={`${place.name}, ${city}`} lang={lang} className="object-cover" sizes="(min-width:1280px) 1200px, 100vw"/><div className="absolute right-4 top-4 z-10 rounded-xl border-2 border-white bg-white/95 px-4 py-2 text-sm font-black uppercase tracking-[.12em] text-navy shadow-lg">{kindLabel(place.kind,lang)}</div></div>
     <CulturePracticalCard place={place} lang={lang} className="mt-7 lg:hidden"/>
   </div></section>

   <section className="pb-20 pt-4 sm:pb-24"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
     <article className="min-w-0">
       <section><p className="text-xs font-black uppercase tracking-[.2em] text-gold">01</p><h2 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">{ui.why}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{ui.whyText(place.name,city)}</p></section>
       <section className="mt-14"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">02</p><h2 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">{ui.miss}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{ui.missText(highlightsLabel(place,lang))}</p><div className="mt-6 flex flex-wrap gap-2">{localizedHighlights(place,lang).map(h=><span key={h} className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-navy">✦ {h}</span>)}</div></section>
       <section className="mt-14 rounded-[2rem] border border-[#e5dccd] bg-white p-7 sm:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">03</p><h2 className="mt-2 font-serif text-4xl text-navy">{planningTitle(lang)}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{planningText(place,lang)}</p></section>
       <section className="mt-14 rounded-[2rem] bg-cream p-7 sm:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">04</p><h2 className="mt-2 font-serif text-4xl text-navy">{ui.curiosity}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{ui.curiosityText}</p></section>
       <section className="mt-14"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">05</p><h2 className="mt-2 font-serif text-4xl text-navy">{ui.getting}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{ui.gettingText(place.name,city)}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{ui.maps} ↗</a></section>
       <section className="mt-14 border-l-4 border-gold bg-[#fbf8f2] p-7"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{ui.tip}</p><p className="mt-3 text-lg leading-8 text-slate-700">{ui.tipText}</p></section>
       <section className="mt-16"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">FAQ</p><h2 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">{ui.faq}</h2><div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">{faq.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy"><span>{q}</span><span className="text-gold transition group-open:rotate-180">⌄</span></summary><p className="pt-4 leading-7 text-slate-600">{a}</p></details>)}</div></section>
     </article>
     <div className="hidden lg:block"><CulturePracticalCard place={place} lang={lang} className="sticky top-28"/></div>
   </div></section>

   <section className="bg-cream py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{ui.related}</p><h2 className="mt-2 font-serif text-4xl text-navy">{scope==='venice'?ui.veniceTitle:ui.venetoTitle}</h2></div><Link href={index} className="rounded-full border border-navy px-5 py-3 font-bold text-navy">{scope==='venice'?ui.backVenice:ui.backVeneto}</Link></div><div className="mt-8 grid gap-7 md:grid-cols-3">{related.map(p=><CultureCard key={p.slug} place={p} lang={lang} scope={scope}/>)}</div></div></section>
 </main><Footer lang={lang}/></>;
}

function priceLooksFree(place:CulturePlace){return place.price.toLowerCase().includes('ingresso libero')||place.price.toLowerCase().includes('chiesa libera');}
