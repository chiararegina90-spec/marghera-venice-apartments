import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice with your dog | Venice Travel Journal',
  description:'Walking through Venice’s calli and campi with your dog is possible: it just takes a little planning and the right pace.',
  alternates:{canonical:'/en/journal/venezia-con-il-cane',languages:{'it-IT':'/journal/venezia-con-il-cane','en-GB':'/en/journal/venezia-con-il-cane','de-DE':'/de/journal/venezia-con-il-cane','fr-FR':'/fr/journal/venezia-con-il-cane','es-ES':'/es/journal/venezia-con-il-cane','zh-CN':'/zh/journal/venezia-con-il-cane','x-default':'/journal/venezia-con-il-cane'}},
  openGraph:{title:'Venice with your dog | Venice Travel Journal',description:'Walking through Venice’s calli and campi with your dog is possible: it just takes a little planning and the right pace.',url:'/en/journal/venezia-con-il-cane',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Venice with your dog | Venice Travel Journal',description:'Walking through Venice’s calli and campi with your dog is possible: it just takes a little planning and the right pace.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Choose the best times',text:'Early morning and late afternoon are often more pleasant than the middle of the day. In warm weather, check pavement temperature, carry water and plan frequent shaded breaks.'},
{title:'Move without adding stress',text:'Narrow streets, bridges and crowds can tire a dog quickly. Avoid the busiest routes at peak times, take regular breaks and move to the side whenever you stop.'},
{title:'Public transport: check ACTV rules',text:'Rules differ between water services and the bus/tram network. On water services dogs must have a muzzle and be kept on a lead or carried; ACTV buses and trams do not allow medium or large dogs. Always check the latest official conditions before travelling.'},
{title:'Quieter areas',text:'Moving away from the San Marco–Rialto axis makes it easier to find calmer campi and fondamenta. Castello, Sant’Elena and parts of the Lido often suit a slower walk.'},
{title:'Return to a pet-friendly apartment',text:'Both Rossi Apartment and Dimora Castelli welcome pets. Bowls and a pet bed are provided; our Services nearby page lists a pet shop, grooming service and veterinary clinic in Marghera.'}
];
const related = [
['Services nearby','/en/services-nearby'],
['Venice Lido','/en/guide/lido-di-venezia'],
['Getting around Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-venezia-cane.webp" alt="Venice with your dog in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venice with your dog</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Pet Friendly</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venice with your dog</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Walking through Venice’s calli and campi with your dog is possible: it just takes a little planning and the right pace.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Venice is entirely pedestrian, but bridges, crowds and paving can make the day demanding for an animal. Planning breaks, water and quieter routes makes a big difference.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Both of our apartments are pet friendly and we can provide a dog bed and bowls: please tell us that you are travelling with a dog before arrival.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://avm.avmspa.it/en/content/venice-urban-services-0" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">ACTV – service information ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
