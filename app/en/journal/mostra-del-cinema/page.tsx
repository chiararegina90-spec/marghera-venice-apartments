import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';

export const metadata:Metadata = {
  title:'Venice Film Festival 2026: Programme, Tickets & Lido Guide',
  description:'Updated guide to the 83rd Venice Film Festival, 2–12 September 2026: public screenings, online tickets, Venice Immersive, Golden Lions and how to reach the Lido.',
  alternates:{canonical:'/en/journal/mostra-del-cinema',languages:{'it-IT':'/journal/mostra-del-cinema','en-GB':'/en/journal/mostra-del-cinema','de-DE':'/de/journal/mostra-del-cinema','fr-FR':'/fr/journal/mostra-del-cinema','es-ES':'/es/journal/mostra-del-cinema','zh-CN':'/zh/journal/mostra-del-cinema','x-default':'/journal/mostra-del-cinema'}},
  openGraph:{type:'article',images:['/images/journal-mostra-cinema.webp']},twitter:{card:'summary_large_image',images:['/images/journal-mostra-cinema.webp']}
};

const sections = [
  {title:'The 83rd Festival runs until 12 September',text:'Biennale Cinema 2026 takes place on the Venice Lido from 2 to 12 September. Directed by Alberto Barbera, the official selection includes Venezia 83, Venice Open – Out of Competition, Orizzonti, Venezia Spotlight, Biennale College Cinema, Venice Classics and Venice Immersive.'},
  {title:'Danny Boyle’s Ink opened the Festival',text:'Ink, directed by Danny Boyle and starring Jack O’Connell, Guy Pearce and Claire Foy, opened the Festival on 2 September as a world premiere in competition. It is one of the headline titles of the 2026 edition.'},
  {title:'Public tickets are sold online',text:'Many screenings are open to visitors without accreditation. Public tickets are sold online and 2026 full-price tickets range roughly from €10 to €50 depending on venue and screening time, with concessions available. Some gala premieres remain invitation-only, so always check the individual screening.'},
  {title:'Venice Immersive: 68 projects from 26 countries',text:'The XR section is hosted on Lazzaretto Vecchio, opposite Riva di Corinto. The 2026 selection features 68 projects from 26 countries across virtual and mixed reality, virtual worlds and immersive installations. Access follows the accreditation conditions published by La Biennale.'},
  {title:'Lifetime Achievement Golden Lions and Masterclasses',text:'George Clooney received the Golden Lion for Lifetime Achievement during the opening ceremony on 2 September. Ellen Burstyn is the second 2026 Lifetime Achievement recipient and is due to receive the honour on Monday 7 September. The Match Point Arena masterclass programme features George Clooney, Chloe Zhao with Lukasz Zal, Luc Besson, Luca Guadagnino and Ellen Burstyn; in-person access is reserved for accredited visitors, while selected sessions are also livestreamed by La Biennale.'},
  {title:'How to reach the Lido from Marghera',text:'From Marghera Venice Apartments, travel to Venice by bus or train and continue by vaporetto to Lido S.M.E. On busy Festival days, allow extra time for connections, queues and heavier public-transport traffic.'},
  {title:'Sunday 6 September: Festival plus Regata Storica',text:'Sunday 6 September brings two major Venice events together: the Film Festival on the Lido and the Regata Storica on the Grand Canal. If you plan to see both, check the day’s schedule and any temporary navigation changes before moving between Venice and the Lido.'}
];

export default function Article(){
  return <><Header lang="en"/><main><article className="editorial-page">
    <EditorialHero
      image="/images/journal-mostra-cinema.webp"
      imageAlt="Venice International Film Festival on the Lido"
      crumbs={[{label:'Home',href:'/en'},{label:'Journal',href:'/en/journal'},{label:'Venice Film Festival 2026'}]}
      eyebrow="Art & Culture • 2–12 September 2026"
      title="Venice Film Festival 2026"
      subtitle="The 83rd edition is under way on the Lido, with public screenings, major premieres, the red carpet and a programme worth checking day by day."
      strongShade
    />

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="editorial-lead font-serif text-navy">The 83rd Venice International Film Festival is organised by La Biennale di Venezia and directed by Alberto Barbera. You do not need to be an industry professional to experience it: the public programme includes many ticketed screenings and, for eleven days, the Lido takes on an entirely different rhythm.</p>
      <div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="editorial-number text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="editorial-h2 font-serif text-navy">{s.title}</h2><p className="editorial-body mt-3 text-slate-600">{s.text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[1.6rem] bg-gold p-7 text-navy sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em]">Marghera Venice Apartments tip</p><p className="mt-4 font-serif text-3xl">Choose one screening you genuinely want to see, then build the rest of the day around it. The Festival is often more enjoyable when you leave time for a walk around the Lido instead of chasing every event.</p></div>
      <div className="mt-7 rounded-[1.6rem] bg-white p-7 shadow-soft sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Updated official information</p><p className="mt-3 text-slate-600">Programmes, ticket availability, prices and access conditions can change during the Festival. Always check La Biennale before travelling.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://www.labiennale.org/en/cinema/2026" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Biennale Cinema 2026 ↗</a><a href="https://www.labiennale.org/en/cinema/2026/program-cinema-2026-public" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Public programme ↗</a><a href="https://www.labiennale.org/en/cinema/2026/information" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Tickets & prices ↗</a></div></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">September in Venice</p><h2 className="editorial-h2 mt-3 font-serif text-navy">You may also like</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/en/journal/regata-storica-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Venice Historical Regatta 2026 <span className="text-gold">→</span></Link><Link href="/en/journal/homo-faber-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Homo Faber 2026 <span className="text-gold">→</span></Link></div><div className="mt-9 text-center"><Link href="/en/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Back to Journal</Link></div></div></section>
  </article></main><Footer lang="en"/></>;
}
