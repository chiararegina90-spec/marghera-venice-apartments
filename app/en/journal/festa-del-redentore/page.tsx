import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Festa del Redentore | Venice Travel Journal',
  description:'One of the nights Venetians care about most: remembrance, shared tables, boats and fireworks reflected across St Mark’s Basin.',
  alternates:{canonical:'/en/journal/festa-del-redentore',languages:{'it-IT':'/journal/festa-del-redentore','en-GB':'/en/journal/festa-del-redentore','de-DE':'/de/journal/festa-del-redentore','fr-FR':'/fr/journal/festa-del-redentore','es-ES':'/es/journal/festa-del-redentore','zh-CN':'/zh/journal/festa-del-redentore','x-default':'/journal/festa-del-redentore'}},
  openGraph:{title:'Festa del Redentore | Venice Travel Journal',description:'One of the nights Venetians care about most: remembrance, shared tables, boats and fireworks reflected across St Mark’s Basin.',url:'/en/journal/festa-del-redentore',locale:'en_GB',type:'article'},
  twitter:{card:'summary_large_image',title:'Festa del Redentore | Venice Travel Journal',description:'One of the nights Venetians care about most: remembrance, shared tables, boats and fireworks reflected across St Mark’s Basin.'}
};

const sections = [
{title:'The votive bridge',text:'For the celebration, a temporary floating bridge is built between the Zattere and Giudecca, leading towards the Church of the Redentore. It is one of the festival’s most recognisable symbols.'},
{title:'The night of the fireworks',text:'On Saturday evening, St Mark’s Basin becomes the stage for the major fireworks display. Access, viewing areas and reservations may be regulated, so the arrangements should be checked each year.'},
{title:'Want to watch the fireworks from St Mark’s Basin?',text:'The Festa del Redentore is celebrated every year on the third Sunday of July, with the major fireworks display taking place during the night between Saturday and Sunday. As a general guide, reservations for designated public viewing areas may open around two weeks before the festival. Dates, procedures and available areas can change each year, so always check official communications and do not leave it until the last minute.'},
{title:'It is more than a show',text:'For Venetians, the Redentore is above all a community celebration. If it is your first time, it is worth understanding its history rather than seeing it simply as a night of fireworks.'}
];
const related = [
['Getting to Venice','/en/getting-to-venice'],
['Acqua alta in Venice','/en/journal/acqua-alta-a-venezia']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-redentore.webp" alt="Festa del Redentore in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Festa del Redentore</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Events</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Festa del Redentore</h1><p className="mt-6 max-w-3xl text-xl text-white/80">One of the nights Venetians care about most: remembrance, shared tables, boats and fireworks reflected across St Mark’s Basin.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">The Redentore grew from the city’s vow after liberation from the sixteenth-century plague. It still has a deeply Venetian character today: the religious tradition is joined by celebrations on boats, outdoor dinners and the spectacular fireworks display.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Do not improvise on the evening itself: check access rules, reservations and transport changes in advance. The city manages exceptional visitor flows for this celebration.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.comune.venezia.it/en" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">City of Venice information ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
