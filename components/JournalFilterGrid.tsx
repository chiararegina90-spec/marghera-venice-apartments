'use client';

import {useMemo,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
export type JournalFilterItem={
  title:string;
  category:string;
  text:string;
  image:string;
  alt:string;
  href:string;
  eventDate?:string;
};
const ui:Record<Lang,{all:string;filter:string;read:string;results:string}>={
  it:{all:'Tutti',filter:'Filtra gli articoli',read:'Leggi l’articolo',results:'articoli'},
  en:{all:'All',filter:'Filter articles',read:'Read article',results:'articles'},
  de:{all:'Alle',filter:'Artikel filtern',read:'Artikel lesen',results:'Artikel'},
  fr:{all:'Tous',filter:'Filtrer les articles',read:'Lire l’article',results:'articles'},
  es:{all:'Todos',filter:'Filtrar artículos',read:'Leer el artículo',results:'artículos'},
  zh:{all:'全部',filter:'筛选文章',read:'阅读文章',results:'篇文章'}
};

export default function JournalFilterGrid({items,lang='it',readLabel}:{items:JournalFilterItem[];lang?:Lang;readLabel?:string}){
  const t=ui[lang];
  const categories=useMemo(()=>Array.from(new Set(items.map(x=>x.category))),[items]);
  const [active,setActive]=useState(t.all);
  const visible=active===t.all?items:items.filter(x=>x.category===active);
  return <>
    <section className="bg-cream py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <label htmlFor={`journal-filter-${lang}`} className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-gold md:hidden">{t.filter}</label>
        <select id={`journal-filter-${lang}`} value={active} onChange={e=>setActive(e.target.value)} className="w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 font-bold text-navy shadow-sm md:hidden">
          <option value={t.all}>{t.all}</option>{categories.map(x=><option key={x} value={x}>{x}</option>)}
        </select>
        <div className="hidden flex-wrap gap-3 md:flex">
          {[t.all,...categories].map(x=><button type="button" key={x} onClick={()=>setActive(x)} aria-pressed={active===x} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${active===x?'border-navy bg-navy text-white':'border-navy/15 bg-white text-navy hover:border-gold hover:text-gold'}`}>{x}</button>)}
        </div>
        <p className="mt-4 text-sm text-slate-500">{visible.length} {t.results}</p>
      </div>
    </section>
    <section className="bg-cream pb-24">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        {visible.map(a=><article key={a.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <Link href={a.href} className="block h-full">
            <div className="relative h-64 overflow-hidden"><Image src={a.image} alt={a.alt} fill sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" className="card-image object-cover"/></div>
            <div className="p-7">
              {a.eventDate&&<p className="mb-3 inline-flex rounded-full bg-navy px-3 py-1.5 text-[11px] font-black uppercase leading-4 tracking-[.14em] text-white">{a.eventDate}</p>}
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{a.category}</p>
              <h2 className="mt-3 font-serif text-4xl text-navy">{a.title}</h2>
              <p className="mt-4 text-slate-600">{a.text}</p>
              <span className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 font-bold text-navy">{readLabel||t.read}</span>
            </div>
          </Link>
        </article>)}
      </div>
    </section>
  </>;
}
