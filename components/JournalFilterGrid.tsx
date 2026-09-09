'use client';

import {useMemo,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonsPhoto from '@/components/CommonsPhoto';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
export type JournalFilterItem={
  title:string; category:string; text:string; image:string; alt:string; href:string;
  eventDate?:string; commonsQuery?:string; fallbackImage?:string; startDate?:string; endDate?:string;
};
const ui:Record<Lang,{all:string;filter:string;read:string;results:string}>={
  it:{all:'Tutti',filter:'Filtra gli articoli',read:'Leggi l’articolo',results:'articoli'},
  en:{all:'All',filter:'Filter articles',read:'Read article',results:'articles'},
  de:{all:'Alle',filter:'Artikel filtern',read:'Artikel lesen',results:'Artikel'},
  fr:{all:'Tous',filter:'Filtrer les articles',read:'Lire l’article',results:'articles'},
  es:{all:'Todos',filter:'Filtrar artículos',read:'Leer artículo',results:'artículos'},
  zh:{all:'全部',filter:'筛选文章',read:'阅读文章',results:'篇文章'}
};
const legacyDates:Record<string,[string,string]>={
  'amerigo-vespucci-venezia-2026':['2026-10-02','2026-10-08'],
  'venice-glass-week-2026':['2026-09-12','2026-09-20'],
  'regata-storica-2026':['2026-09-06','2026-09-06'],
  'carnevale-di-venezia':['2027-01-23','2027-02-09'],
  'festa-del-redentore':['2027-07-17','2027-07-17'],
  'mostra-del-cinema':['2026-09-02','2026-09-12'],
  'homo-faber-2026':['2026-09-01','2026-09-30'],
  'biennale-di-venezia':['2026-05-09','2026-11-22']
};
function slugOf(href:string){return href.split('?')[0].replace(/\/$/,'').split('/').pop()||'';}
function withDates(item:JournalFilterItem){const d=legacyDates[slugOf(item.href)];return d&&!item.startDate?{...item,startDate:d[0],endDate:d[1]}:item;}
function rank(item:JournalFilterItem,today:string){
  if(item.startDate&&item.endDate){if(item.startDate<=today&&today<=item.endDate)return 0;if(item.startDate>today)return 1;return 3;} return 2;
}
function sortJournal(items:JournalFilterItem[]){
  const today=new Date().toISOString().slice(0,10);
  return items.map((x,i)=>({x:withDates(x),i})).sort((a,b)=>{
    const ra=rank(a.x,today),rb=rank(b.x,today); if(ra!==rb)return ra-rb;
    if(ra===0)return (a.x.endDate||'').localeCompare(b.x.endDate||'')||a.i-b.i;
    if(ra===1)return (a.x.startDate||'').localeCompare(b.x.startDate||'')||a.i-b.i;
    if(ra===3)return (b.x.endDate||'').localeCompare(a.x.endDate||'')||a.i-b.i;
    return a.i-b.i;
  }).map(v=>v.x);
}

export default function JournalFilterGrid({items,dynamicEvents=[],lang='it',readLabel}:{items:JournalFilterItem[];dynamicEvents?:JournalFilterItem[];lang?:Lang;readLabel?:string}){
  const t=ui[lang];
  const merged=useMemo(()=>{
    const seen=new Set<string>();
    return sortJournal([...dynamicEvents,...items].filter(a=>{if(seen.has(a.href))return false;seen.add(a.href);return true;}));
  },[items,dynamicEvents]);
  const categories=useMemo(()=>Array.from(new Set(merged.map(x=>x.category))),[merged]);
  const [active,setActive]=useState(t.all);
  const visible=active===t.all?merged:merged.filter(x=>x.category===active);
  return <>
    <section className="bg-cream py-10"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <label htmlFor={`journal-filter-${lang}`} className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-gold md:hidden">{t.filter}</label>
      <select id={`journal-filter-${lang}`} value={active} onChange={e=>setActive(e.target.value)} className="w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 font-bold text-navy shadow-sm md:hidden"><option value={t.all}>{t.all}</option>{categories.map(x=><option key={x} value={x}>{x}</option>)}</select>
      <div className="hidden flex-wrap gap-3 md:flex">{[t.all,...categories].map(x=><button type="button" key={x} onClick={()=>setActive(x)} aria-pressed={active===x} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${active===x?'border-navy bg-navy text-white':'border-navy/15 bg-white text-navy hover:border-gold hover:text-gold'}`}>{x}</button>)}</div>
      <p className="mt-4 text-sm text-slate-500">{visible.length} {t.results}</p>
    </div></section>
    <section className="bg-cream pb-24"><div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
      {visible.map(a=><article key={a.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"><Link href={a.href} className="block h-full">
        <div className="relative h-64 overflow-hidden">{a.commonsQuery?<CommonsPhoto query={a.commonsQuery} alt={a.alt} fallbackSrc={a.fallbackImage||a.image} sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="card-image object-cover"/>:<Image src={a.image} alt={a.alt} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="card-image object-cover"/>}</div>
        <div className="p-7">{a.eventDate&&<p className="mb-3 inline-flex rounded-full bg-navy px-3 py-1.5 text-[11px] font-black uppercase leading-4 tracking-[.14em] text-white">{a.eventDate}</p>}<p className="text-xs font-black uppercase tracking-[.18em] text-gold">{a.category}</p><h2 className="mt-3 font-serif text-4xl text-navy">{a.title}</h2><p className="mt-4 text-slate-600">{a.text}</p><span className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">{readLabel||t.read}</span></div>
      </Link></article>)}
    </div></section>
  </>;
}
