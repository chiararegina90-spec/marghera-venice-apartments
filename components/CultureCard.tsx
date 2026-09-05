import Link from 'next/link';
import CommonsPhoto from '@/components/CommonsPhoto';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cityLabel,cultureDetailPath,cultureUi,kindLabel,priceLabel} from '@/data/cultureTranslations';

const icons={museum:'🏛️',monument:'🏰',church:'⛪',panorama:'👀'} as const;

export default function CultureCard({place,lang,scope}:{place:CulturePlace;lang:CultureLang;scope:CultureScope}){
 const ui=cultureUi[lang];
 return <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-black/5">
   <div className="relative h-56 overflow-hidden sm:h-64">
     <CommonsPhoto query={place.commonsQuery} alt={`${place.name}, ${place.city}`} lang={lang} className="card-image" sizes="(min-width:1280px) 31vw, (min-width:768px) 48vw, 100vw"/>
     <div className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white bg-white/95 text-2xl shadow-lg" title={kindLabel(place.kind,lang)} aria-label={kindLabel(place.kind,lang)}>{icons[place.kind]}</div>
   </div>
   <div className="p-6">
     <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-gold"><span>{kindLabel(place.kind,lang)}</span><span aria-hidden="true">·</span><span>{cityLabel(place.city,lang)}</span></div>
     <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">{place.name}</h3>
     <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-600">
       <span className="rounded-full bg-cream px-3 py-1.5">⏱️ {place.duration}</span>
       {place.family&&<span className="rounded-full bg-cream px-3 py-1.5">🧒 {ui.families}</span>}
       {place.panorama&&<span className="rounded-full bg-cream px-3 py-1.5">👀 {ui.panoramaYes}</span>}
     </div>
     <p className="mt-5 text-sm font-semibold text-slate-500">🎟️ {priceLabel(place,lang)}</p>
     <Link href={cultureDetailPath(scope,lang,place.slug)} className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 font-bold text-white transition hover:bg-gold hover:text-navy">{ui.read}</Link>
   </div>
 </article>
}
