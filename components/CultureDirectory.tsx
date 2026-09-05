'use client';
import {useMemo,useState} from 'react';
import type {CultureKind,CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cityLabel,cultureUi,kindLabel,kindOrder,provinceOrder} from '@/data/cultureTranslations';
import CultureCard from '@/components/CultureCard';

const icons={museum:'🏛️',monument:'🏰',church:'⛪',panorama:'👀'} as const;

export default function CultureDirectory({places,lang,scope}:{places:CulturePlace[];lang:CultureLang;scope:CultureScope}){
 const ui=cultureUi[lang];
 const [query,setQuery]=useState('');
 const [kind,setKind]=useState<CultureKind|'all'>('all');
 const [family,setFamily]=useState(false);
 const q=query.trim().toLocaleLowerCase();
 const baseFiltered=useMemo(()=>places.filter(p=>{
   if(family&&!p.family) return false;
   if(q){const hay=[p.name,p.city,p.province,...p.highlights].join(' ').toLocaleLowerCase();if(!hay.includes(q)) return false;}
   return true;
 }),[places,q,family]);
 const desktopFiltered=kind==='all'?baseFiltered:baseFiltered.filter(p=>p.kind===kind);
 const groups=scope==='venice'
   ? kindOrder.map(k=>({id:k,title:kindLabel(k,lang),emoji:icons[k],items:baseFiltered.filter(p=>p.kind===k)})).filter(g=>g.items.length)
   : provinceOrder.map(province=>({id:province,title:cityLabel(province,lang),emoji:'📍',items:baseFiltered.filter(p=>p.province===province)})).filter(g=>g.items.length);

 return <section className="bg-cream py-16 sm:py-20">
   <div className="mx-auto max-w-7xl px-5 lg:px-8">
     <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7">
       <label className="block text-xs font-black uppercase tracking-[.18em] text-gold" htmlFor={`culture-search-${scope}`}>{ui.search}</label>
       <input id={`culture-search-${scope}`} value={query} onChange={e=>setQuery(e.target.value)} placeholder={ui.search} className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"/>
       <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-700"><input type="checkbox" checked={family} onChange={e=>setFamily(e.target.checked)} className="h-5 w-5 accent-[#c79f55]"/><span>🧒 {ui.familyOnly}</span></label>
       <div className="mt-5 hidden flex-wrap gap-2 md:flex">
         <button onClick={()=>setKind('all')} className={`rounded-full px-5 py-2.5 text-sm font-bold ${kind==='all'?'bg-navy text-white':'bg-cream text-navy'}`}>{ui.all}</button>
         {kindOrder.map(k=><button key={k} onClick={()=>setKind(k)} className={`rounded-full px-5 py-2.5 text-sm font-bold ${kind===k?'bg-navy text-white':'bg-cream text-navy'}`}>{icons[k]} {kindLabel(k,lang)}</button>)}
       </div>
     </div>

     <div className="mt-10 md:hidden">
       <p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-gold">{ui.quick}</p>
       <div className="divide-y divide-[#e1d8ca] border-y border-[#e1d8ca]">
         {groups.map(group=><details key={group.id} className="culture-category group">
           <summary className="flex cursor-pointer list-none items-center gap-4 py-5">
             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2e8d6] text-xl">{group.emoji}</div>
             <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-3"><h2 className="font-serif text-[1.55rem] font-semibold leading-tight text-navy">{group.title}</h2><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ddd5c8] bg-white text-lg text-[#8a682f] transition duration-200 group-open:rotate-180">⌄</span></div><p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-gold">{group.items.length} {group.items.length===1?ui.place:ui.places}</p></div>
           </summary>
           <div className="grid gap-6 pb-7">{group.items.map(p=><CultureCard key={p.slug} place={p} lang={lang} scope={scope}/>)}</div>
         </details>)}
         {!groups.length&&<p className="py-8 text-slate-600">0 {ui.places}</p>}
       </div>
     </div>

     <div className="mt-10 hidden md:block">
       <div className="mb-5 flex items-end justify-between gap-4"><p className="text-sm font-bold text-slate-500">{desktopFiltered.length} {desktopFiltered.length===1?ui.place:ui.places}</p></div>
       <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">{desktopFiltered.map(p=><CultureCard key={p.slug} place={p} lang={lang} scope={scope}/>)}</div>
     </div>
   </div>
   <style>{`details.culture-category > summary::-webkit-details-marker { display:none; }`}</style>
 </section>
}
