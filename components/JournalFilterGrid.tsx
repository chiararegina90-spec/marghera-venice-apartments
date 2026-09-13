'use client';

import {useEffect,useMemo,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonsPhoto from '@/components/CommonsPhoto';
import {eventCalendarDate} from '@/data/event-calendar';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
export type JournalFilterItem={
  title:string; category:string; text:string; image:string; alt:string; href:string;
  eventDate?:string; commonsQuery?:string; fallbackImage?:string; startDate?:string; endDate?:string;
};
const ui:Record<Lang,{all:string;filter:string;hint:string;read:string;results:string}>={
  it:{all:'Tutti gli articoli',filter:'Scegli il mese',hint:'Quando vuoi visitare Venezia?',read:'Leggi l’articolo',results:'articoli'},
  en:{all:'All articles',filter:'Choose a month',hint:'When would you like to visit Venice?',read:'Read article',results:'articles'},
  de:{all:'Alle Artikel',filter:'Monat auswählen',hint:'Wann möchten Sie Venedig besuchen?',read:'Artikel lesen',results:'Artikel'},
  fr:{all:'Tous les articles',filter:'Choisir un mois',hint:'Quand souhaitez-vous visiter Venise ?',read:'Lire l’article',results:'articles'},
  es:{all:'Todos los artículos',filter:'Elige un mes',hint:'¿Cuándo quieres visitar Venecia?',read:'Leer artículo',results:'artículos'},
  zh:{all:'全部文章',filter:'选择月份',hint:'您计划什么时候来威尼斯？',read:'阅读文章',results:'篇文章'}
};
const locale:Record<Lang,string>={it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'};
function slugOf(href:string){return href.split('?')[0].replace(/\/$/,'').split('/').pop()||'';}
function withDates(item:JournalFilterItem){const d=eventCalendarDate(slugOf(item.href));return d&&!item.startDate?{...item,...d}:item;}
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
function monthsBetween(startDate:string,endDate:string){
  const out:string[]=[];
  let y=Number(startDate.slice(0,4)),m=Number(startDate.slice(5,7));
  const ey=Number(endDate.slice(0,4)),em=Number(endDate.slice(5,7));
  while(y<ey||(y===ey&&m<=em)){
    out.push(`${y}-${String(m).padStart(2,'0')}`);
    m+=1;if(m===13){m=1;y+=1;}
  }
  return out;
}
function monthBounds(key:string){
  const [year,month]=key.split('-').map(Number);
  const last=new Date(Date.UTC(year,month,0)).getUTCDate();
  return {start:`${key}-01`,end:`${key}-${String(last).padStart(2,'0')}`};
}
function overlapsMonth(item:JournalFilterItem,key:string){
  if(!item.startDate||!item.endDate)return false;
  const b=monthBounds(key);return item.startDate<=b.end&&item.endDate>=b.start;
}
function monthLabel(key:string,lang:Lang){
  const [year,month]=key.split('-').map(Number);
  const value=new Intl.DateTimeFormat(locale[lang],{month:'long',year:'numeric'}).format(new Date(Date.UTC(year,month-1,1)));
  return value.charAt(0).toLocaleUpperCase(locale[lang])+value.slice(1);
}

export default function JournalFilterGrid({items,dynamicEvents=[],lang='it',readLabel}:{items:JournalFilterItem[];dynamicEvents?:JournalFilterItem[];lang?:Lang;readLabel?:string}){
  const t=ui[lang];
  const merged=useMemo(()=>{
    const seen=new Set<string>();
    return sortJournal([...dynamicEvents,...items].filter(a=>{if(seen.has(a.href))return false;seen.add(a.href);return true;}));
  },[items,dynamicEvents]);
  const monthOptions=useMemo(()=>{
    const now=new Date();const current=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
    const months=new Set<string>();
    merged.forEach(item=>{if(item.startDate&&item.endDate)monthsBetween(item.startDate,item.endDate).forEach(m=>{if(m>=current)months.add(m);});});
    return Array.from(months).sort();
  },[merged]);
  const [activeMonth,setActiveMonth]=useState('all');
  useEffect(()=>{
    const syncFromUrl=()=>{
      const requested=new URL(window.location.href).searchParams.get('mese');
      setActiveMonth(requested&&monthOptions.includes(requested)?requested:'all');
    };
    syncFromUrl();window.addEventListener('popstate',syncFromUrl);return()=>window.removeEventListener('popstate',syncFromUrl);
  },[monthOptions]);
  const chooseMonth=(value:string)=>{
    setActiveMonth(value);
    const url=new URL(window.location.href);
    if(value==='all')url.searchParams.delete('mese');else url.searchParams.set('mese',value);
    window.history.replaceState({},'',`${url.pathname}${url.search}${url.hash}`);
  };
  const visible=activeMonth==='all'?merged:merged.filter(x=>overlapsMonth(x,activeMonth));
  return <>
    <section className="bg-cream py-10"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-xl">
        <p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-gold">{t.hint}</p>
        <label htmlFor={`journal-month-${lang}`} className="sr-only">{t.filter}</label>
        <select id={`journal-month-${lang}`} value={activeMonth} onChange={e=>chooseMonth(e.target.value)} className="w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 font-bold text-navy shadow-sm">
          <option value="all">{t.all}</option>
          {monthOptions.map(m=><option key={m} value={m}>{monthLabel(m,lang)}</option>)}
        </select>
      </div>
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
