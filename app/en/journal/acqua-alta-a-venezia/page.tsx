import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Acqua alta in Venice: what to know | Venice Travel Journal',
  description:'A natural lagoon phenomenon to understand without alarm: what it means, how long it lasts and how MOSE helps protect Venice.',
  alternates:{canonical:'/en/journal/acqua-alta-a-venezia',languages:{'it-IT':'/journal/acqua-alta-a-venezia','en-GB':'/en/journal/acqua-alta-a-venezia','de-DE':'/de/journal/acqua-alta-a-venezia','fr-FR':'/fr/journal/acqua-alta-a-venezia','es-ES':'/es/journal/acqua-alta-a-venezia','zh-CN':'/zh/journal/acqua-alta-a-venezia','x-default':'/journal/acqua-alta-a-venezia'}},
  openGraph:{title:'Acqua alta in Venice: what to know | Venice Travel Journal',description:'A natural lagoon phenomenon to understand without alarm: what it means, how long it lasts and how MOSE helps protect Venice.',url:'/en/journal/acqua-alta-a-venezia',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Acqua alta in Venice: what to know | Venice Travel Journal',description:'A natural lagoon phenomenon to understand without alarm: what it means, how long it lasts and how MOSE helps protect Venice.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'What acqua alta really is',text:'Temporary high tides depend on a combination of sea level, wind, atmospheric pressure and conditions in the Adriatic. Events are normally limited in time, and the same tide level can have very different effects in different parts of the city.'},
{title:'Why St Mark’s Square gets wet first',text:'St Mark’s Square is one of the lowest areas of Venice and can begin to show the effects of the tide at lower levels than other parts of the city. Photos of water in the square therefore do not automatically mean that the whole city is flooded.'},
{title:'The MOSE system',text:'Since 2020 Venice has had MOSE, the system of mobile barriers installed at the lagoon’s three inlets. When particularly high tides are forecast, the gates are raised to temporarily separate the lagoon from the Adriatic Sea. The system is operated according to forecasts and operational criteria, with the aim of protecting Venice from the most significant tides and keeping lagoon levels around the 110-centimetre threshold.'},
{title:'What to do during your visit',text:'A forecast of acqua alta does not necessarily mean giving up your day in Venice. Check the level and peak time with the Tide Forecasting Centre, remember that some vaporetto routes may be altered, and follow local guidance. When necessary, wear suitable footwear and choose routes compatible with the forecast level.'},
{title:'The sirens are nothing to fear',text:'When a significant tide is forecast, Venice uses an audible warning system. The signals communicate expected levels in advance and are part of the city’s normal management of high water.'}
];
const related = [
['Where to park when visiting Venice','/en/journal/dove-parcheggiare-venezia'],
['Getting to Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-acqua-alta.webp" alt="Acqua alta in Venice: what to know in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Acqua alta in Venice: what to know</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Practical Venice</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Acqua alta in Venice: what to know</h1><p className="mt-6 max-w-3xl text-xl text-white/80">A natural lagoon phenomenon to understand without alarm: what it means, how long it lasts and how MOSE helps protect Venice.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Acqua alta is a natural, temporary phenomenon deeply connected with life in the lagoon. It does not mean that all of Venice is underwater: the city sits at different elevations, and lower areas such as St Mark’s Square are affected first.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Before changing your plans, always check the forecast level, the time of the peak and the areas affected: acqua alta is usually far more localised and temporary than photographs can make it seem.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.comune.venezia.it/en/content/tide-forecasting-and-reporting-centre" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Venice Tide Forecasting and Reporting Centre ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
