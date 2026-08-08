'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

const links = [
  ['Le nostre case','/#case'],
  ['Scopri Venezia','/scopri-venezia'],
  ['Scopri il Veneto','/scopri-il-veneto'],
  ['Come arrivare','/come-raggiungere-venezia'],
  ['Esperienze','/collaborazioni'],
  ['Guide','/guide'],
  ['Journal','/journal'],
  ['FAQ','/faq'],
  ['Pet & Family','/#pet-family'],
  ['Contatti','/#contatto-diretto'],
];

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-8">
      <Link href="/" className="flex items-center gap-3 text-white" onClick={()=>setOpen(false)}>
        <Image src="/images/logo.png" alt="Marghera Venice Apartments" width={66} height={52} className="rounded-lg bg-white p-1"/>
        <span className="hidden font-serif tracking-[.16em] sm:block">MARGHERA<br/><span className="text-xs tracking-[.25em]">VENICE APARTMENTS</span></span>
      </Link>

      <nav className="hidden items-center gap-5 text-[13px] text-white/90 xl:flex">
        {links.map(([label,href])=><Link key={label} href={href} className="whitespace-nowrap transition hover:text-gold">{label}</Link>)}
      </nav>

      <div className="ml-8 flex shrink-0 items-center gap-3">
        <a href="https://wa.me/393514462261" target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5 sm:inline-flex">WhatsApp</a>
        <button type="button" aria-label="Apri il menu" aria-expanded={open} onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white xl:hidden">
          <span className="text-2xl leading-none">{open?'×':'☰'}</span>
        </button>
      </div>
    </div>

    {open && <div className="border-t border-white/10 bg-navy px-5 py-5 xl:hidden">
      <nav className="mx-auto grid max-w-7xl gap-1">
        {links.map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-gold">{label}</Link>)}
        <a href="https://wa.me/393514462261" target="_blank" rel="noopener noreferrer" className="mt-3 rounded-full bg-gold px-5 py-3 text-center font-bold text-navy">Scrivici su WhatsApp</a>
      </nav>
    </div>}
  </header>
}