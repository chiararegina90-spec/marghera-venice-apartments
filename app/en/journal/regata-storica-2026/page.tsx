import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Venice Historical Regatta 2026: programme, times & where to watch',
  description:'Venice Historical Regatta returns on Sunday 6 September 2026: historical water parade, Grand Canal races, route, times and practical tips.',
  alternates:{canonical:'/en/journal/regata-storica-2026',languages:{'it-IT':'/journal/regata-storica-2026','en-GB':'/en/journal/regata-storica-2026','de-DE':'/de/journal/regata-storica-2026','fr-FR':'/fr/journal/regata-storica-2026','es-ES':'/es/journal/regata-storica-2026','zh-CN':'/zh/journal/regata-storica-2026','x-default':'/journal/regata-storica-2026'}},
  openGraph:{type:'article',images:['/images/journal-regata-storica-2026.webp']},
  twitter:{card:'summary_large_image',images:['/images/journal-regata-storica-2026.webp']}
};

const sections = [
  {title:'The Historical Water Parade',text:'At 3:30 pm the Historical and Sport Water Parade begins. Historic boats with crews in period costume, gondolas and boats from Venetian rowing associations travel from St Mark’s Basin along the Grand Canal past Rialto and the railway station, then return to Ca’ Foscari. The historical pageant also recalls the welcome given to Caterina Cornaro in 1489.'},
  {title:'Then the racing begins',text:'Races start from 4:00 pm. Highlights include the six-oared Caorline at 5:10 pm, the women’s twin-oared Mascarete at 5:40 pm and the twin-oared Gondolini at 6:10 pm. The programme also includes the International Universities Boat Challenge on eight-oared galeoni.'},
  {title:'Where to watch the Regata Storica',text:'St Mark’s Basin and Punta della Dogana, Rialto, the San Marcuola area and Ca’ Foscari are among the most interesting sections of the route. The Grand Canal banks fill early, so arrive well before the parade if you want a good viewing position.'},
  {title:'Transport changes to keep in mind',text:'On Sunday 6 September ACTV waterbus services will be changed or suspended on some sections during the afternoon. Official information indicates changes from roughly 2:00 pm to 7:30 pm, with navigation on the Grand Canal suspended approximately from 3:00 pm to 7:30 pm. From Marghera Venice Apartments, we recommend travelling into Venice by bus or train and allowing extra time for walking.'},
  {title:'Why it is worth seeing at least once',text:'The Regata Storica is not simply a show created for visitors. Voga alla Veneta remains a living Venetian tradition, and this day is one of the highlights of the city’s rowing calendar. For a few hours, history, sport, colour and local passion all meet on the Grand Canal.'},
  {title:'Practical information',text:'Sunday 6 September 2026, Grand Canal – Venice. Historical parade from around 3:30 pm and races from 4:00 pm. Programmes, access arrangements and transport changes can vary, so always check the official Regata Storica website shortly before your visit.'}
];

export default function Article(){
  return <><Header lang="en"/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-regata-storica-2026.webp" alt="Historic boats during the Venice Regata Storica on the Grand Canal" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><Link href="/en/journal">Journal</Link><span>›</span><span className="text-gold">Regata Storica 2026</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Events</p>
        <h1 className="mt-4 break-words font-serif text-[clamp(3rem,9vw,6rem)] leading-none">Venice Historical Regatta 2026</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/80">On Sunday 6 September, the Grand Canal takes centre stage with the historical water parade and Venice’s famous rowing races.</p>
      </div></div>
    </section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">Every first Sunday in September, Venice celebrates one of its most spectacular and deeply rooted traditions. The Regata Storica combines history, sport, period costumes and local participation, turning the Grand Canal into the main stage of Voga alla Veneta.</p>
      <div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Travel into Venice early by bus or train, choose your Grand Canal viewing area in advance and plan your return before the final races finish.</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Official information</p><p className="mt-3 text-slate-600">Programme, times and waterbus arrangements can change. Always check the official updates before your visit.</p><a href="https://www.regatastoricavenezia.it/en/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Official Regata Storica website ↗</a></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-serif text-4xl text-navy">You may also like</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2"><Link href="/en/discover-venice" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Discover Venice <span className="text-gold">→</span></Link><Link href="/en/getting-to-venice" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Getting to Venice <span className="text-gold">→</span></Link></div>
      <div className="mt-10 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div>
    </div></section>
  </article></main><Footer lang="en"/></>;
}
