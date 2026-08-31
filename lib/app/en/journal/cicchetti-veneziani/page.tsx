import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venetian cicchetti | Venice Travel Journal',
  description:'They are not tapas, not a starter and not a miniature meal. They are simply… cicchetti.',
  alternates:{canonical:'/en/journal/cicchetti-veneziani',languages:{'it-IT':'/journal/cicchetti-veneziani','en-GB':'/en/journal/cicchetti-veneziani','de-DE':'/de/journal/cicchetti-veneziani','fr-FR':'/fr/journal/cicchetti-veneziani','es-ES':'/es/journal/cicchetti-veneziani','zh-CN':'/zh/journal/cicchetti-veneziani','x-default':'/journal/cicchetti-veneziani'}},
  openGraph:{title:'Venetian cicchetti | Venice Travel Journal',description:'They are not tapas, not a starter and not a miniature meal. They are simply… cicchetti.',url:'/en/journal/cicchetti-veneziani',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'Venetian cicchetti | Venice Travel Journal',description:'They are not tapas, not a starter and not a miniature meal. They are simply… cicchetti.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'An osteria tradition',text:'Cicchetti belong to the culture of Venetian bàcari and osterie. For centuries, small bites have accompanied wine, allowing people to stop, eat something and continue their day without turning every pause into a sit-down meal.'},
{title:'What are they for?',text:'Nothing complicated: they accompany an ombra of wine or a Spritz, take the edge off your hunger and, above all, are part of the pleasure of being together. One or two, then perhaps move on to another bàcaro. If you are full after five places, technically it has become dinner, although that probably was not the plan. 😄'},
{title:'What you may find on the counter',text:'Baccalà mantecato, sarde in saor, meatballs, crostini, small octopus, mozzarella in carrozza, eggs, vegetables, fried fish and preparations that change from place to place and from one day to the next.'},
{title:'Cicchetto is a format, not a recipe',text:'That is the key point: there is no universal cicchetti menu. Walk in, look at the counter and choose whatever catches your eye. That is much more Venetian than arriving with a rigid checklist.'},
{title:'The bàcaro tour',text:'Cannaregio, San Polo, Santa Croce and Dorsoduro are just some of the areas where it is enjoyable to move from one bàcaro to another. You do not need to chase ten famous addresses: often the place that looks inviting during your walk is part of the experience.'}
];
const related = [
['The Venetian Spritz','/en/journal/spritz-veneziano'],
['How to enjoy Venice respectfully','/en/journal/buone-maniere-a-venezia']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-cicchetti.webp" alt="Venetian cicchetti in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Venetian cicchetti</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Food & Traditions</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Venetian cicchetti</h1><p className="mt-6 max-w-3xl text-xl text-white/80">They are not tapas, not a starter and not a miniature meal. They are simply… cicchetti.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">If you walk into a bàcaro and hear someone order “an ombra and two cicchetti”, you are stepping into one of the most ordinary pleasures of Venetian life. These are small bites served at the counter, made to accompany a drink and a pause rather than follow the rules of a full meal.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Do not try too hard to translate cicchetti into tapas, finger food or appetisers. After your first bàcaro, you will understand why in Venice we simply call them cicchetti.</p></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
