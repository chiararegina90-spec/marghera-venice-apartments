import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'How to enjoy Venice without annoying Venetians | Venice Travel Journal',
  description:'A few simple manners for enjoying the city as a guest, without forgetting that people really live here.',
  alternates:{canonical:'/en/journal/buone-maniere-a-venezia',languages:{'it-IT':'/journal/buone-maniere-a-venezia','en-GB':'/en/journal/buone-maniere-a-venezia','de-DE':'/de/journal/buone-maniere-a-venezia','fr-FR':'/fr/journal/buone-maniere-a-venezia','es-ES':'/es/journal/buone-maniere-a-venezia','zh-CN':'/zh/journal/buone-maniere-a-venezia','x-default':'/journal/buone-maniere-a-venezia'}},
  openGraph:{title:'How to enjoy Venice without annoying Venetians | Venice Travel Journal',description:'A few simple manners for enjoying the city as a guest, without forgetting that people really live here.',url:'/en/journal/buone-maniere-a-venezia',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'How to enjoy Venice without annoying Venetians | Venice Travel Journal',description:'A few simple manners for enjoying the city as a guest, without forgetting that people really live here.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Calli are our streets',text:'Keep to the right and, in the narrowest passages, walk single file. If you need to check Maps, photograph a pigeon or decide where to go, move to the side: stopping suddenly in the middle of a calle is the quickest way to create a tiny Venetian traffic jam.'},
{title:'Bridges are not benches',text:'Sitting on bridge steps to eat may seem romantic, but that bridge is a street. Do not block it for lunch, photographs or while waiting for your group: people carrying groceries, pushing a stroller, making deliveries or simply going home need to get through.'},
{title:'The vaporetto is our bus',text:'Let people get off before you board, keep landing exits clear, move forward when staff ask you to and take your backpack off your shoulders when the boat is crowded. It is more comfortable for you and much safer for the nose of the person behind you. 😄'},
{title:'Photograph everything, but step aside',text:'Venice is extraordinary and taking photographs is natural. Before stopping suddenly, check that there are not other people behind you. This matters especially on bridges, in narrow calli, at vaporetto exits and in front of the railway station.'},
{title:'Keep an eye on bags and phones',text:'In very busy areas, on crowded transport and around major transport hubs, keep an eye on your wallet, phone and bag. Venice is a safe city to visit, but crowds are an ideal environment for pickpockets.'},
{title:'If you need a toilet, ask',text:'Venice has public toilets as well as bars and cafés. If a child urgently needs the toilet, ask politely; where appropriate, buying something small is a courteous way to return the favour. Calli, sottoporteghi and hidden corners are not toilets.'},
{title:'Rubbish, dogs and canals',text:'If you cannot immediately find a bin, keep your rubbish with you until you do. Dog waste must always be picked up. And no: canals are not swimming pools, but real transport routes used by vaporetti, taxis, work boats and emergency services.'},
{title:'The simplest rule',text:'Remember that someone lives here. The calle you want to photograph is someone’s street and that vaporetto is someone’s bus. Enjoy Venice, get lost and take as many photographs as you like—just leave a little space for people who are not on holiday.'}
];
const related = [
['Venice with your dog','/en/journal/venezia-con-il-cane'],
['Getting to Venice','/en/getting-to-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-buone-maniere.webp" alt="How to enjoy Venice without annoying Venetians in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">How to enjoy Venice without annoying Venetians</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Living Venice</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">How to enjoy Venice without annoying Venetians</h1><p className="mt-6 max-w-3xl text-xl text-white/80">A few simple manners for enjoying the city as a guest, without forgetting that people really live here.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Venice has a curious effect on visitors: you look up, suddenly stop for a photograph and, for a few minutes, forget that the calli are real streets. That is understandable. A few simple habits are enough to enjoy the city better while leaving space for people who are not on holiday.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">If you hear a colourful Venetian expression behind you, first check that you have not stopped exactly in the middle of the calle. 😄</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://www.comune.venezia.it/en" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">City of Venice ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
