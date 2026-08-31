import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Christmas & New Year in Venice | Venice Travel Journal',
  description:'Lights, winter, more intimate calli and major celebrations: Venice changes rhythm during the festive season.',
  alternates:{canonical:'/en/journal/natale-capodanno-venezia',languages:{'it-IT':'/journal/natale-capodanno-venezia','en-GB':'/en/journal/natale-capodanno-venezia','de-DE':'/de/journal/natale-capodanno-venezia','fr-FR':'/fr/journal/natale-capodanno-venezia','es-ES':'/es/journal/natale-capodanno-venezia','zh-CN':'/zh/journal/natale-capodanno-venezia','x-default':'/journal/natale-capodanno-venezia'}},
  openGraph:{title:'Christmas & New Year in Venice | Venice Travel Journal',description:'Lights, winter, more intimate calli and major celebrations: Venice changes rhythm during the festive season.',url:'/en/journal/natale-capodanno-venezia',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Christmas & New Year in Venice | Venice Travel Journal',description:'Lights, winter, more intimate calli and major celebrations: Venice changes rhythm during the festive season.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Venice at Christmas',text:'Markets and events can vary from year to year. Often the greatest pleasure is simply walking through illuminated campi, churches and sestieri at a quieter pace.'},
{title:'New Year’s Eve',text:'On New Year’s Eve, Venice welcomes the new year with events and, when included in the official programme, a fireworks display over St Mark’s Basin. Access, times, viewing areas and special transport arrangements can change each year, so always check official information before setting out.'},
{title:'What to wear',text:'Humidity, wind and possible acqua alta days make suitable footwear and layered clothing especially useful.'}
];
const related = [
['Acqua alta in Venice','/en/journal/acqua-alta-a-venezia'],
['Getting to Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-natale-capodanno.webp" alt="Christmas & New Year in Venice in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Christmas & New Year in Venice</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Events</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Christmas & New Year in Venice</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Lights, winter, more intimate calli and major celebrations: Venice changes rhythm during the festive season.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">From December to early January, Venice has a very different atmosphere from summer. The days are shorter and the weather needs some planning, but winter light and evening walks can be magnificent.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">For the festive season, book restaurants and events in advance, but always leave a few hours free: Venice in winter is beautiful even without a schedule.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.veneziaunica.it/en" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Venezia Unica ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
