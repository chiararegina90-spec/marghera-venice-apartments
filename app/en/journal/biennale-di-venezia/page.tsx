import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice Biennale | Venice Travel Journal',
  description:'Giardini, Arsenale and exhibitions across Venice: one day is not enough to see everything, and that is exactly the point.',
  alternates:{canonical:'/en/journal/biennale-di-venezia',languages:{'it-IT':'/journal/biennale-di-venezia','en-GB':'/en/journal/biennale-di-venezia','de-DE':'/de/journal/biennale-di-venezia','fr-FR':'/fr/journal/biennale-di-venezia','es-ES':'/es/journal/biennale-di-venezia','zh-CN':'/zh/journal/biennale-di-venezia','x-default':'/journal/biennale-di-venezia'}},
  openGraph:{title:'Venice Biennale | Venice Travel Journal',description:'Giardini, Arsenale and exhibitions across Venice: one day is not enough to see everything, and that is exactly the point.',url:'/en/journal/biennale-di-venezia',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Venice Biennale | Venice Travel Journal',description:'Giardini, Arsenale and exhibitions across Venice: one day is not enough to see everything, and that is exactly the point.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Giardini and Arsenale',text:'These are the two main venues for the international art and architecture exhibitions. A complete visit can easily take an entire day.'},
{title:'Venice becomes a city-wide exhibition',text:'During Biennale periods, many palaces and spaces across the city host exhibitions and collateral events. Some are also a chance to enter places that are normally less accessible.'},
{title:'Plan by area',text:'If you have several days, dedicate one to the main venues and another to the city-wide events that genuinely interest you.'}
];
const related = [
['Venice Film Festival','/en/journal/mostra-del-cinema'],
['Discover Venice','/en/discover-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-biennale.webp" alt="Venice Biennale in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venice Biennale</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Art & Culture</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venice Biennale</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Giardini, Arsenale and exhibitions across Venice: one day is not enough to see everything, and that is exactly the point.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">The Biennale brings art, architecture, cinema, dance, music and theatre to Venice. The major exhibitions at the Giardini and Arsenale take time: it is better to choose what you really want to see than rush through them.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Do not plan the Biennale, St Mark’s, Rialto and the islands all on the same day. The Biennale deserves time, and Venice does not reward rushing.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.labiennale.org/en" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">La Biennale di Venezia ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
