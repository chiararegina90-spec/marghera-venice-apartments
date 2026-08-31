import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice Carnival 2027 | Dates & Practical Guide',
  description:'Venice Carnival 2027 runs from 23 January to 9 February: masks, parades, performances and practical tips for visiting the city.',
  alternates:{canonical:'/en/journal/carnevale-di-venezia',languages:{'it-IT':'/journal/carnevale-di-venezia','en-GB':'/en/journal/carnevale-di-venezia','de-DE':'/de/journal/carnevale-di-venezia','fr-FR':'/fr/journal/carnevale-di-venezia','es-ES':'/es/journal/carnevale-di-venezia','zh-CN':'/zh/journal/carnevale-di-venezia','x-default':'/journal/carnevale-di-venezia'}},
  openGraph:{title:'Venice Carnival 2027 | Dates & Practical Guide',description:'Venice Carnival 2027 runs from 23 January to 9 February: masks, parades, performances and practical tips for visiting the city.',url:'/en/journal/carnevale-di-venezia',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Venice Carnival 2027 | Dates & Practical Guide',description:'Venice Carnival 2027 runs from 23 January to 9 February: masks, parades, performances and practical tips for visiting the city.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'An ancient tradition',text:'The earliest records of the Venetian Carnival date back to the Middle Ages. Today the celebration brings together historic masks, street performances, water parades, cultural events and parties in palaces.'},
{title:'How to plan your day',text:'Check the official programme before setting out and choose one or two main events. At weekends and during the final days of Carnival, the centre can become very crowded: leaving Marghera early lets you experience Venice more calmly.'},
{title:'Carnival with children',text:'The performances around the city, masks and parades can be great fun for families too. Avoid an overly rigid schedule: leave time for breaks in the campi and routes away from the busiest flows.'}
];
const related = [
['Venice with children','/en/journal/venezia-con-bambini'],
['Getting to Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-carnevale.webp" alt="Venice Carnival in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venice Carnival</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Events • 23 January – 9 February 2027</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venice Carnival 2027</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Masks, parades, performances and a city that changes character completely for a few extraordinary weeks.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Carnival is not only St Mark’s Square: events spread through calli, campi, palaces, islands and the mainland. The best way to experience it is to alternate the most famous events with time away from the busiest areas.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">For Carnival, leave your car at the apartment and reach Venice by public transport. On the busiest days it is much easier.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://carnevale.venezia.it/en/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Official Venice Carnival programme ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
