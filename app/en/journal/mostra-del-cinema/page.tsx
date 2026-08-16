import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice Film Festival | Venice Travel Journal',
  description:'The Lido becomes an international centre for cinema, with screenings, red carpets and an atmosphere unlike any other time of year.',
  alternates:{canonical:'/en/journal/mostra-del-cinema',languages:{'it-IT':'/journal/mostra-del-cinema','en-GB':'/en/journal/mostra-del-cinema','de-DE':'/de/journal/mostra-del-cinema','fr-FR':'/fr/journal/mostra-del-cinema','es-ES':'/es/journal/mostra-del-cinema','zh-CN':'/zh/journal/mostra-del-cinema','x-default':'/journal/mostra-del-cinema'}},
  openGraph:{title:'Venice Film Festival | Venice Travel Journal',description:'The Lido becomes an international centre for cinema, with screenings, red carpets and an atmosphere unlike any other time of year.',url:'/en/journal/mostra-del-cinema',locale:'en_GB',type:'article'},
  twitter:{card:'summary_large_image',title:'Venice Film Festival | Venice Travel Journal',description:'The Lido becomes an international centre for cinema, with screenings, red carpets and an atmosphere unlike any other time of year.'}
};

const sections = [
{title:'Where it takes place',text:'The heart of the festival is around the Palazzo del Cinema and the Biennale venues on the Lido.'},
{title:'Tickets and programme',text:'Films, screening times, accreditation and access arrangements change with every edition. For reliable information, always refer to the official Biennale programme.'},
{title:'Combine cinema and the Lido',text:'Turn the day into a complete itinerary: the Festival, a walk along the seafront, the Murazzi and, weather permitting, some time at the beach.'}
];
const related = [
['Venice Lido','/en/guide/lido-di-venezia'],
['Getting around Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-mostra-cinema.webp" alt="Venice Film Festival in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venice Film Festival</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Art & Culture</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venice Film Festival</h1><p className="mt-6 max-w-3xl text-xl text-white/80">The Lido becomes an international centre for cinema, with screenings, red carpets and an atmosphere unlike any other time of year.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">The Venice International Film Festival takes place on the Venice Lido and is organised by La Biennale. Even without attending the most exclusive events, the festival period is an interesting time to experience the Lido in a very different mood.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">On the most important days, allow extra time for transport and book in advance anything that requires a ticket.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.labiennale.org/en/cinema" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">La Biennale di Venezia – Cinema ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
