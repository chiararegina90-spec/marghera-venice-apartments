import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Where to park when visiting Venice | Venice Travel Journal',
  description:'No, you cannot drive to St Mark’s Square. But if you prefer travelling by car, there are several very convenient options.',
  alternates:{canonical:'/en/journal/dove-parcheggiare-venezia',languages:{'it-IT':'/journal/dove-parcheggiare-venezia','en-GB':'/en/journal/dove-parcheggiare-venezia','de-DE':'/de/journal/dove-parcheggiare-venezia','fr-FR':'/fr/journal/dove-parcheggiare-venezia','es-ES':'/es/journal/dove-parcheggiare-venezia','zh-CN':'/zh/journal/dove-parcheggiare-venezia','x-default':'/journal/dove-parcheggiare-venezia'}},
  openGraph:{title:'Where to park when visiting Venice | Venice Travel Journal',description:'No, you cannot drive to St Mark’s Square. But if you prefer travelling by car, there are several very convenient options.',url:'/en/journal/dove-parcheggiare-venezia',locale:'en_GB',type:'article'},
  twitter:{card:'summary_large_image',title:'Where to park when visiting Venice | Venice Travel Journal',description:'No, you cannot drive to St Mark’s Square. But if you prefer travelling by car, there are several very convenient options.'}
};

const sections = [
{title:'The simplest option for our guests',text:'Rossi Apartment and Dimora Castelli both offer free private parking. To visit Venice, we normally recommend leaving the car at your accommodation and using the bus or train: no searching for a space and no city-garage cost for the day.'},
{title:'Piazzale Roma: AVM Municipal Garage',text:'If you want to drive as close as possible to the historic centre, cross the Ponte della Libertà to Piazzale Roma and leave your car in the municipal garage. Check the AVM website for current rates, conditions and booking options.'},
{title:'Piazzale Roma: Garage San Marco',text:'Also at Piazzale Roma is Garage San Marco, another multi-storey option for travellers who prefer to arrive at the edge of Venice by car. It is wise to check availability and book during busy periods.'},
{title:'Tronchetto',text:'Tronchetto is another major vehicle-access area for Venice. It is particularly useful if you want to park before Piazzale Roma and continue towards the centre using public transport.'},
{title:'Car or public transport?',text:'A car offers independence, but parking garages in Venice cost considerably more than buses or trains. If parking is already included in your stay, leaving the car in Marghera is almost always the simplest choice.'},
{title:'After Piazzale Roma',text:'This is where car-accessible Venice ends. From the terminal you can continue on foot or by ACTV vaporetto. Driving to St Mark’s Square, on the other hand, is best left to the imagination. 😄'}
];
const related = [
['Getting to Venice','/en/getting-to-venice'],
['Discover Venice','/en/discover-venice']
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-parcheggi-venezia.webp" alt="Where to park when visiting Venice in Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Where to park when visiting Venice</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Transport</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Where to park when visiting Venice</h1><p className="mt-6 max-w-3xl text-xl text-white/80">No, you cannot drive to St Mark’s Square. But if you prefer travelling by car, there are several very convenient options.</p>
      </div></div>
    </section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Venice’s historic centre has no cars. Arriving from the mainland, vehicles can reach Piazzale Roma or the Tronchetto area; from there, you continue on foot or by water.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">If you are staying with us, try the simplest solution first: park free at the apartment and reach Venice by bus or train. If you prefer to drive, Piazzale Roma and Tronchetto remain excellent alternatives.</p></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div><div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>
}
