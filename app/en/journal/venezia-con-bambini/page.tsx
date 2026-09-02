import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice with children | Venice Travel Journal',
  description:'A Venice of campi, museums, boats and breaks: with children, the secret is not turning the day into a race.',
  alternates:{canonical:'/en/journal/venezia-con-bambini',languages:{'it-IT':'/journal/venezia-con-bambini','en-GB':'/en/journal/venezia-con-bambini','de-DE':'/de/journal/venezia-con-bambini','fr-FR':'/fr/journal/venezia-con-bambini','es-ES':'/es/journal/venezia-con-bambini','zh-CN':'/zh/journal/venezia-con-bambini','x-default':'/journal/venezia-con-bambini'}},
  openGraph:{title:'Venice with children | Venice Travel Journal',description:'A Venice of campi, museums, boats and breaks: with children, the secret is not turning the day into a race.',url:'/en/journal/venezia-con-bambini',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Venice with children | Venice Travel Journal',description:'A Venice of campi, museums, boats and breaks: with children, the secret is not turning the day into a race.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Build a lighter day',text:'Choose one major visit in the morning and keep the afternoon flexible. Venice with children works best when monuments, vaporetto rides, breaks and simple playtime are alternated.'},
{title:'Natural History Museum',text:'The Giancarlo Ligabue Natural History Museum, in the Fontego dei Turchi on the Grand Canal, is a family-friendly stop and a useful change of pace from bridges, streets and monuments.'},
{title:'Campi and places for a break',text:'Campo Santa Margherita, Campo San Polo and Campo Santa Maria Formosa work well for a snack or a short pause. For more greenery, consider Sant’Elena; back on the mainland, Parco San Giuliano offers far more open space.'},
{title:'Workshops that become memories',text:'A mask-making workshop or a glass activity can turn sightseeing into something children actively remember. Always check minimum ages, duration and booking requirements with the organiser.'},
{title:'Light stroller, baby carrier and water',text:'Bridges and steps make heavy strollers impractical, so a lightweight model is easier; for younger children, a baby carrier can be a useful alternative. Carry a reusable bottle and refill it at public drinking fountains when available.'},
{title:'A day trip beyond Venice?',text:'If you have a car and want a full family day outside the city, Parco Natura Viva can be an option. It is a substantial trip from Venice, so choose it only if your itinerary has enough time.'}
];
const related = [
['Discover Venice','/en/discover-venice'],
['How to enjoy Venice respectfully','/en/journal/buone-maniere-a-venezia'],
['Acqua alta in Venice','/en/journal/acqua-alta-a-venezia']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/venezia-bambini-campo-nuova.webp" alt="Venice with children in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venice with children</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Families</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venice with children</h1><p className="mt-6 max-w-3xl text-xl text-white/80">A Venice of campi, museums, boats and breaks: with children, the secret is not turning the day into a race.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Venice can be wonderful with children if you change the pace. Fewer monuments to tick off, more experiences: a vaporetto ride, a campo where you can stop, a well-chosen museum and time simply to observe the city.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Do not try to see all of Venice. A successful day with children is worth more than a very long list of monuments visited in a hurry.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://msn.visitmuve.it/en/home/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Natural History Museum – official website ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
