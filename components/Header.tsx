'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {localePath} from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
type NavItem={label:string;href:string};
type NavGroup={label:string;items:NavItem[]};

type HeaderCopy={
  apartments:string;
  discover:NavGroup;
  plan:NavGroup;
  experiences:string;
  journal:string;
  faq:string;
  contact:string;
};

const prefix:Record<Lang,string>={it:'',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};
const home:Record<Lang,string>={it:'/',en:'/en',de:'/de',fr:'/fr',es:'/es',zh:'/zh'};
const langLabel:Record<Lang,string>={it:'IT',en:'EN',de:'DE',fr:'FR',es:'ES',zh:'CH'};
const aria:Record<Lang,[string,string,string]>={
  zh:['主导航','打开菜单','关闭菜单'],it:['Navigazione principale','Apri il menu','Chiudi il menu'],en:['Main navigation','Open menu','Close menu'],de:['Hauptnavigation','Menü öffnen','Menü schließen'],fr:['Navigation principale','Ouvrir le menu','Fermer le menu'],es:['Navegación principal','Abrir el menú','Cerrar el menú']
};
const wa:Record<Lang,string>={
  zh:'您好，我想了解 Marghera Venice Apartments 的住宿信息。',
  it:'Ciao, vorrei ricevere informazioni su Marghera Venice Apartments.',
  en:"Hello, I'd like information about Marghera Venice Apartments.",
  de:'Hallo, ich möchte Informationen zu Marghera Venice Apartments.',
  fr:'Bonjour, je souhaite recevoir des informations sur Marghera Venice Apartments.',
  es:'Hola, me gustaría recibir información sobre Marghera Venice Apartments.'
};

function paths(lang:Lang){
  const b=prefix[lang];
  return {
    homes:lang==='it'?'/#case':`${b}/#case`,
    venice:lang==='it'?'/scopri-venezia':`${b}/discover-venice`,
    veneto:lang==='it'?'/scopri-il-veneto':`${b}/discover-veneto`,
    guide:lang==='it'?'/guide':`${b}/guide`,
    getting:lang==='it'?'/come-raggiungere-venezia':`${b}/getting-to-venice`,
    food:lang==='it'?'/dove-mangiare':`${b}/where-to-eat`,
    services:lang==='it'?'/servizi-in-zona':`${b}/services-nearby`,
    experiences:lang==='it'?'/collaborazioni':`${b}/experiences`,
    journal:`${b}/journal`,
    faq:`${b}/faq`,
    contact:lang==='it'?'/#contatto-diretto':`${b}/#direct-contact`,
  };
}

const navCopy:Record<Lang,(p:ReturnType<typeof paths>)=>HeaderCopy>={
  it:p=>({
    apartments:'Le nostre case',
    discover:{label:'Scopri',items:[{label:'Scopri Venezia',href:p.venice},{label:'Scopri il Veneto',href:p.veneto}]},
    plan:{label:'Organizza',items:[{label:'Guide',href:p.guide},{label:'Come arrivare',href:p.getting},{label:'Dove mangiare',href:p.food},{label:'Servizi in zona',href:p.services}]},
    experiences:'Esperienze',journal:'Journal',faq:'FAQ',contact:'Contatti'
  }),
  en:p=>({
    apartments:'Our apartments',
    discover:{label:'Discover',items:[{label:'Discover Venice',href:p.venice},{label:'Discover Veneto',href:p.veneto}]},
    plan:{label:'Plan',items:[{label:'Guides',href:p.guide},{label:'Getting to Venice',href:p.getting},{label:'Where to eat',href:p.food},{label:'Services nearby',href:p.services}]},
    experiences:'Experiences',journal:'Journal',faq:'FAQ',contact:'Contact'
  }),
  de:p=>({
    apartments:'Unsere Apartments',
    discover:{label:'Entdecken',items:[{label:'Venedig entdecken',href:p.venice},{label:'Venetien entdecken',href:p.veneto}]},
    plan:{label:'Planen',items:[{label:'Reiseführer',href:p.guide},{label:'Anreise',href:p.getting},{label:'Essen gehen',href:p.food},{label:'Services in der Nähe',href:p.services}]},
    experiences:'Erlebnisse',journal:'Journal',faq:'FAQ',contact:'Kontakt'
  }),
  fr:p=>({
    apartments:'Nos appartements',
    discover:{label:'Découvrir',items:[{label:'Découvrir Venise',href:p.venice},{label:'Découvrir la Vénétie',href:p.veneto}]},
    plan:{label:'Organiser',items:[{label:'Guides',href:p.guide},{label:'Comment arriver',href:p.getting},{label:'Où manger',href:p.food},{label:'Services à proximité',href:p.services}]},
    experiences:'Expériences',journal:'Journal',faq:'FAQ',contact:'Contact'
  }),
  es:p=>({
    apartments:'Nuestros apartamentos',
    discover:{label:'Descubrir',items:[{label:'Descubrir Venecia',href:p.venice},{label:'Descubrir Véneto',href:p.veneto}]},
    plan:{label:'Organizar',items:[{label:'Guías',href:p.guide},{label:'Cómo llegar',href:p.getting},{label:'Dónde comer',href:p.food},{label:'Servicios cercanos',href:p.services}]},
    experiences:'Experiencias',journal:'Journal',faq:'FAQ',contact:'Contacto'
  }),
  zh:p=>({
    apartments:'我们的公寓',
    discover:{label:'探索',items:[{label:'探索威尼斯',href:p.venice},{label:'探索威尼托',href:p.veneto}]},
    plan:{label:'规划',items:[{label:'旅行指南',href:p.guide},{label:'如何前往',href:p.getting},{label:'餐饮推荐',href:p.food},{label:'附近服务',href:p.services}]},
    experiences:'精选体验',journal:'旅行日志',faq:'常见问题',contact:'联系我们'
  })
};

function DesktopDropdown({group}:{group:NavGroup}){
  return <div className="group relative">
    <button type="button" className="inline-flex items-center gap-1.5 whitespace-nowrap py-7 text-[12px] text-white/90 transition hover:text-gold" aria-haspopup="true">
      {group.label}<span aria-hidden="true" className="text-[10px] text-gold">▾</span>
    </button>
    <div className="invisible absolute left-1/2 top-[calc(100%-7px)] z-50 w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/10 bg-navy p-2 opacity-0 shadow-2xl ring-1 ring-black/10 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      {group.items.map(item=><Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-gold">{item.label}</Link>)}
    </div>
  </div>;
}

export default function Header({lang='it'}:{lang?:Lang}){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  const p=paths(lang);
  const nav=navCopy[lang](p);
  const waUrl='https://wa.me/393514462261?text='+encodeURIComponent(wa[lang]+' ');
  const close=()=>setOpen(false);
  const standalone:NavItem[]=[
    {label:nav.experiences,href:p.experiences},
    {label:nav.journal,href:p.journal},
    {label:nav.faq,href:p.faq},
    {label:nav.contact,href:p.contact},
  ];

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-5 lg:px-8">
      <Link href={home[lang]} className="flex items-center gap-3 text-white" onClick={close}>
        <Image src="/images/logo.png" alt="Marghera Venice Apartments" width={58} height={58} priority className="h-[58px] w-[58px] rounded-full bg-cream object-contain shadow-sm"/>
        <span className="hidden font-serif tracking-[.16em] min-[1660px]:block">MARGHERA<br/><span className="text-xs tracking-[.25em]">VENICE APARTMENTS</span></span>
      </Link>

      <nav aria-label={aria[lang][0]} className="hidden items-center gap-5 text-white/90 xl:flex">
        <Link href={p.homes} className="whitespace-nowrap text-[12px] transition hover:text-gold">{nav.apartments}</Link>
        <DesktopDropdown group={nav.discover}/>
        <DesktopDropdown group={nav.plan}/>
        {standalone.map(item=><Link key={item.href} href={item.href} className="whitespace-nowrap text-[12px] transition hover:text-gold">{item.label}</Link>)}
      </nav>

      <div className="ml-4 flex shrink-0 items-center gap-3 2xl:ml-8">
        <div className="hidden items-center gap-1 rounded-full border border-white/25 p-1 text-[11px] font-black text-white sm:flex">
          {(['it','en','de','fr','es','zh'] as Lang[]).map(l=><Link key={l} href={localePath(pathname,l)} hrefLang={l} className={`rounded-full px-2 py-1 ${lang===l?'bg-gold text-navy':'hover:text-gold'}`} aria-label={l==='zh'?'中文':langLabel[l]}>{langLabel[l]}</Link>)}
        </div>
        {lang==='zh'?<Link href="/zh/#direct-contact" className="hidden rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5 sm:inline-flex">微信 WeChat</Link>:<a href={waUrl} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5 sm:inline-flex">WhatsApp</a>}
        <button type="button" aria-label={open?aria[lang][2]:aria[lang][1]} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white xl:hidden"><span className="text-2xl leading-none">{open?'×':'☰'}</span></button>
      </div>
    </div>

    {open&&<div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-5 xl:hidden">
      <nav id="mobile-navigation" aria-label={aria[lang][0]} className="mx-auto grid max-w-7xl gap-2">
        <div className="mb-3 flex flex-wrap gap-2 border-b border-white/10 pb-4 sm:hidden">
          {(['it','en','de','fr','es','zh'] as Lang[]).map(l=><Link key={l} href={localePath(pathname,l)} hrefLang={l} onClick={close} className={`rounded-full border px-3 py-2 text-xs font-black ${lang===l?'border-gold bg-gold text-navy':'border-white/25 text-white'}`}>{langLabel[l]}</Link>)}
        </div>
        <Link href={p.homes} onClick={close} className="rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-gold">{nav.apartments}</Link>
        {[nav.discover,nav.plan].map(group=><details key={group.label} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[.04]">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold text-white/90"><span>{group.label}</span><span className="text-gold transition-transform group-open:rotate-45">+</span></summary>
          <div className="grid gap-1 border-t border-white/10 p-2">{group.items.map(item=><Link key={item.href} href={item.href} onClick={close} className="rounded-lg px-4 py-3 text-sm font-semibold text-white/75 hover:bg-white/10 hover:text-gold">{item.label}</Link>)}</div>
        </details>)}
        {standalone.map(item=><Link key={item.href} href={item.href} onClick={close} className="rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-gold">{item.label}</Link>)}
        {lang==='zh'?<Link href="/zh/#direct-contact" onClick={close} className="mt-3 rounded-full bg-gold px-5 py-3 text-center font-bold text-navy">微信 WeChat</Link>:<a href={waUrl} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-full bg-gold px-5 py-3 text-center font-bold text-navy">WhatsApp</a>}
      </nav>
    </div>}
  </header>;
}
