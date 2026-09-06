'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const langs=[['it','🇮🇹','Italiano'],['en','🇬🇧','English'],['fr','🇫🇷','Français'],['de','🇩🇪','Deutsch'],['es','🇪🇸','Español'],['zh','🇨🇳','中文']] as const;
type GuestApartment='rossi'|'dimora-castelli';

export default function GuestLanguageChooser({apartment}:{apartment:GuestApartment}){
 const router=useRouter();
 useEffect(()=>{const saved=localStorage.getItem(`mva-guest-${apartment}-lang`);if(saved&&langs.some(([l])=>l===saved)) router.replace(`/guest/${apartment}/${saved}`)},[apartment,router]);
 const choose=(l:string)=>localStorage.setItem(`mva-guest-${apartment}-lang`,l);
 const name=apartment==='rossi'?'Rossi Apartment':'Dimora Castelli';
 return <main className="min-h-screen bg-cream px-5 py-10 text-navy"><div className="mx-auto max-w-xl text-center"><Image src="/images/logo.png" alt="Marghera Venice Apartments" width={96} height={96} className="mx-auto rounded-full bg-white"/><p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Apartments</p><h1 className="mt-3 font-serif text-5xl">{name}</h1><p className="mx-auto mt-4 max-w-md text-slate-600">Welcome to your private digital guide · Scegli la lingua per continuare.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{langs.map(([l,flag,label])=><Link key={l} href={`/guest/${apartment}/${l}`} onClick={()=>choose(l)} className="flex items-center gap-4 rounded-2xl bg-white p-5 text-left font-bold shadow-soft transition hover:-translate-y-0.5"><span className="text-3xl" aria-hidden>{flag}</span><span>{label}</span></Link>)}</div></div></main>;
}
