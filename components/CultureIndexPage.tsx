import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CultureDirectory from '@/components/CultureDirectory';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cultureUi,cultureIndexPath} from '@/data/cultureTranslations';

export default function CultureIndexPage({lang,scope,places}:{lang:CultureLang;scope:CultureScope;places:CulturePlace[]}){
 const ui=cultureUi[lang];
 const title=scope==='venice'?ui.veniceTitle:ui.venetoTitle;
 const subtitle=scope==='venice'?ui.veniceSubtitle:ui.venetoSubtitle;
 const home=lang==='it'?'/':`/${lang}`;
 const guides=lang==='it'?'/guide':`/${lang}/guide`;
 return <><Header lang={lang}/><main>
   <section className="bg-navy px-5 pb-16 pt-36 text-white sm:pb-20 lg:px-8"><div className="mx-auto max-w-7xl">
     <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/70"><Link href={home}>{ui.home}</Link><span>›</span><Link href={guides}>{ui.guides}</Link><span>›</span><span className="text-gold">{title}</span></nav>
     <p className="mt-7 text-xs font-black uppercase tracking-[.22em] text-gold">{ui.eyebrow}</p>
     <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.65rem,9vw,6rem)] leading-[.98] tracking-[-.02em]">{title}</h1>
     <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">{subtitle}</p>
     <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold"><span className="rounded-full border border-white/25 px-4 py-2">{places.length} {ui.places}</span><span className="rounded-full border border-white/25 px-4 py-2">⏱️ {ui.duration}</span><span className="rounded-full border border-white/25 px-4 py-2">🧒 {ui.families}</span><span className="rounded-full border border-white/25 px-4 py-2">🎟️ {ui.practical}</span></div>
   </div></section>
   <section className="border-b border-slate-100 bg-white py-10"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="max-w-4xl leading-7 text-slate-600">{ui.verified} <strong className="text-navy">{ui.updated}</strong></p></div></section>
   <CultureDirectory places={places} lang={lang} scope={scope}/>
 </main><Footer lang={lang}/></>;
}
