import type {CultureLang,CulturePlace} from '@/data/culturePlaces';
import {bookingLabel,cultureUi,hoursLabel,priceLabel} from '@/data/cultureTranslations';

export default function CulturePracticalCard({place,lang,className=''}:{place:CulturePlace;lang:CultureLang;className?:string}){
 const ui=cultureUi[lang];
 return <aside className={`rounded-[2rem] bg-navy p-6 text-white shadow-soft sm:p-7 ${className}`}>
   <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{ui.practical}</p>
   <h2 className="mt-2 font-serif text-3xl">{ui.practicalSub}</h2>
   <dl className="mt-6 divide-y divide-white/10 text-sm">
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">⏱️ {ui.duration}</dt><dd className="text-right font-semibold">{place.duration}</dd></div>
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">🎟️ {ui.price}</dt><dd className="text-right font-semibold">{priceLabel(place,lang)}</dd></div>
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">🕒 {ui.hours}</dt><dd className="text-right font-semibold">{hoursLabel(place,lang)}</dd></div>
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">📅 {ui.booking}</dt><dd className="text-right font-semibold">{bookingLabel(place.booking,lang)}</dd></div>
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">🧒 {ui.families}</dt><dd className="text-right font-semibold">{place.family?ui.familyYes:ui.familyNo}</dd></div>
     {place.panorama&&<div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">👀</dt><dd className="text-right font-semibold">{ui.panoramaYes}</dd></div>}
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">♿ {ui.access}</dt><dd className="text-right text-white/80">{ui.accessCheck}</dd></div>
     <div className="grid grid-cols-[1fr_1.35fr] gap-4 py-4"><dt className="font-bold text-white/70">🐾 {ui.pets}</dt><dd className="text-right text-white/80">{ui.petsCheck}</dd></div>
   </dl>
   <div className="mt-6 grid gap-3">
     <a href={place.officialUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-3 text-center font-bold text-navy">{ui.official} ↗</a>
     <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold text-white">{ui.maps} ↗</a>
   </div>
   <p className="mt-5 text-xs leading-5 text-white/55">{ui.updated}</p>
 </aside>
}
