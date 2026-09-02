import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'The Venetian Spritz | Venice Travel Journal',
  description:'For much of the world it is a cocktail. For Venetians, it is simply aperitivo.',
  alternates:{canonical:'/en/journal/spritz-veneziano',languages:{'it-IT':'/journal/spritz-veneziano','en-GB':'/en/journal/spritz-veneziano','de-DE':'/de/journal/spritz-veneziano','fr-FR':'/fr/journal/spritz-veneziano','es-ES':'/es/journal/spritz-veneziano','zh-CN':'/zh/journal/spritz-veneziano','x-default':'/journal/spritz-veneziano'}},
  openGraph:{title:'The Venetian Spritz | Venice Travel Journal',description:'For much of the world it is a cocktail. For Venetians, it is simply aperitivo.',url:'/en/journal/spritz-veneziano',locale:'en_GB',type:'article',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary_large_image',title:'The Venetian Spritz | Venice Travel Journal',description:'For much of the world it is a cocktail. For Venetians, it is simply aperitivo.',images:['/images/home-rialto-vincenzo-landino.webp']}
};

const sections = [
{title:'Spritz and aperitivo are not the same thing',text:'The Spritz is the drink. Aperitivo is the moment: a pause before dinner, a conversation, a few cicchetti and perhaps a second stop somewhere else. That social ritual, more than the cocktail itself, is what makes it part of everyday Venetian life.'},
{title:'Where it comes from',text:'The name is generally linked to the German verb spritzen, “to spray”, and to the period of Austrian presence in Veneto, when local wine was lightened with water. Over time that habit evolved into the modern Spritz.'},
{title:'Aperol, Select, Campari or Cynar?',text:'There is no single Venetian version: Aperol is softer and more citrusy, Select is strongly connected with local tradition, Campari is more assertive and Cynar more herbal. In Venice, being asked “what would you like it with?” is part of the ritual.'},
{title:'Spritz and cicchetti',text:'A Spritz naturally goes with cicchetti: small counter bites chosen according to what the bàcaro has prepared. One drink, one or two cicchetti and then you continue your walk.'},
{title:'Where to try it',text:'Choose a neighbourhood bàcaro or a better-known venue such as Terrazza Aperol in Campo Santo Stefano. Our Where to eat page collects a selection of places in Marghera and Venice.'}
];
const related = [
['Where to eat','/en/where-to-eat'],
['Venetian cicchetti','/en/journal/cicchetti-veneziani'],
['Discover Venice','/en/discover-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-spritz.webp" alt="The Venetian Spritz in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">The Venetian Spritz</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Food & Traditions</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">The Venetian Spritz</h1><p className="mt-6 max-w-3xl text-xl text-white/80">For much of the world it is a cocktail. For Venetians, it is simply aperitivo.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">In Venice, a Spritz is not something reserved for special occasions. It is the aperitivo drink: the one that accompanies a chat, a stop at a bàcaro and, almost inevitably, a few cicchetti.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">If outside Venice someone charges you the price of dinner for a badly made Spritz, know that a Venetian somewhere is suffering with you. 😄</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Dates, programmes, fares and conditions may change. For variable information, always check the official source before your visit.</p><a href="https://terrazza.aperol.com/en/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Terrazza Aperol Venice ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
