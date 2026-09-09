import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'Marghera to Venice: Bus, Train, Tickets & Parking',
  description:'How to reach Rossi Apartment and Dimora Castelli by car, train or plane, and how to travel from Marghera to Venice by bus or train.',
  openGraph:{
    title:'Getting here and reaching Venice from Marghera',
    description:'Practical directions for reaching our apartments and travelling easily from Marghera to Venice.',
    images:[{url:'/images/come-arrivare-hero-originale.webp',alt:'Public transport connections between Marghera and Venice'}],
    type:'website'
  },
  twitter:{card:'summary_large_image',title:'Getting to Venice from Marghera',description:'Bus, train, airport and parking information for an easy stay near Venice.',images:['/images/come-arrivare-hero-originale.webp']},
  alternates:{canonical:'/en/getting-to-venice',languages:{'it-IT':'/come-raggiungere-venezia','en-GB':'/en/getting-to-venice','de-DE':'/de/getting-to-venice','fr-FR':'/fr/getting-to-venice','es-ES':'/es/getting-to-venice','zh-CN':'/zh/getting-to-venice','x-default':'/come-raggiungere-venezia'}}
};

const veneziaOptions = [
  {
    title:'Bus – recommended',
    text:'Sant’Antonio Municipio is the main nearby stop for travelling to Venice – Piazzale Roma, with both daytime and night connections.',
    rows:[
      ['Daytime','Lines 6 and 6L','about every 10 minutes · towards Venice – Piazzale Roma'],
      ['Evening','Line 6','about every 20 minutes · check your service in the AVM Venezia Official app'],
      ['Night','Line N2','about every 30 minutes · night service via Sant’Antonio Municipio'],
    ]
  },
  {
    title:'Train',
    text:'Venezia Mestre railway station is within walking distance of the apartments. Regional trains take you directly to Venezia Santa Lucia.',
    rows:[
      ['Daytime','Regional trains','frequent services'],
      ['Evening','Venezia Santa Lucia','check the last train of the day'],
    ]
  }
];

const ticketCards = [
  ['Train','from €1.50','Venezia Mestre → Venezia Santa Lucia; check the fare for your chosen train'],
  ['Bus','€1.50','per person, each way'],
  ['ACTV integrated network','€9.50','75 minutes: also includes ACTV urban waterbus services'],
];

const passes = [
  ['24 hours','€25.00'],
  ['2 days','€35.00'],
  ['3 days','€45.00'],
  ['Young 3 days','€33.00 – Rolling Venice + ACTV 72h, for ages 6–29 subject to current conditions'],
];

const faq = [
  ['What is the easiest way to reach Venice?','For most guests, the direct bus to Piazzale Roma is the easiest option because it avoids parking and changes.'],
  ['Are there connections at night?','Yes. A night service is available; check current times and frequencies with ACTV for the day of your visit.'],
  ['Should I drive into Venice?','Usually not. Private parking at the apartments lets you leave the car in Marghera and continue by bus or train.'],
  ['Do buses and vaporetti use the same ticket?','It depends on the ticket you buy. Tourist passes may include buses, trams and waterbuses; always check the validity of your chosen ticket.'],
  ['Do children travel free?','Children travel free on urban services in the Municipality of Venice until their sixth birthday. From age 6, a valid ticket is required.'],
];

export default function Mobilita(){return <><Header lang="en"/><main className="editorial-page" data-build="getting-refresh-2026-09-07">
<section className="relative min-h-[72vh] overflow-hidden pt-20"><Image src="/images/come-arrivare-hero-originale.webp" alt="Bus and public transport connections from Marghera to Venice" fill priority sizes="100vw" className="object-cover object-top"/><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20"/><div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8"><div className="max-w-4xl text-white"><nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><span className="text-gold">Getting here</span></nav><p className="text-xs font-black uppercase tracking-[.24em] text-gold">Plan your journey with confidence</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Getting here</h1><p className="mt-6 max-w-3xl text-xl text-white/80">How to reach the apartments and Venice from Marghera, with the essential information easy to scan.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#apartments" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Getting to the apartments</a><a href="#venice" className="rounded-full border border-white/50 px-7 py-4 font-bold">Getting to Venice</a></div></div></div></section>
<section id="apartments" className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Before you book" title="Getting to the apartments is easy" text="Detailed check-in instructions remain private for confirmed guests. Here you only need the information required to plan the journey."/><div className="mt-8 grid gap-10 lg:grid-cols-2">{[["Via Cesare Rossarol 32","Rossi Apartment",['Free reserved parking inside the gated condominium grounds.','Taxi, tram T2 towards Marghera to Sant’Antonio, or walk via the Marghera – Via Ulloa exit.','Taxi or ACTV/ATVO bus to Venezia Mestre station, then continue to the apartment.'],'https://maps.app.goo.gl/JRuHsc4BoKkYTUop9?g_st=ac'],["Via Jacopo Castelli 22","Dimora Castelli",['Free private parking inside the property; additional free street parking is normally available nearby.','Walk via Via Ulloa, Piazzale Giovannacci and Via Cesare Rossarol, or take tram T2 to Sant’Antonio Municipio.','ATVO coaches reach Venezia Mestre station; continue on foot, by tram or taxi.'],'https://maps.app.goo.gl/JdPBaX8TaLqesNgM6?g_st=ac']].map(([address,name,texts,map])=><article key={String(name)} className="border-t border-navy/15 pt-6"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{String(address)}</p><h2 className="mt-2 font-serif text-4xl text-navy">{String(name)}</h2><div className="mt-6 divide-y divide-navy/10 text-slate-600">{[['🚗 By car',(texts as string[])[0]],['🚆 From Venezia Mestre',(texts as string[])[1]],['✈️ From the airport',(texts as string[])[2]]].map(([label,text])=><div key={label} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]"><h3 className="font-bold text-navy">{label}</h3><p>{text}</p></div>)}</div><a href={String(map)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">Open in Google Maps ↗</a></article>)}</div><p className="mt-9 border-l-4 border-aqua pl-5 text-sm text-slate-600">Taxi fares and journey times vary with traffic, time of day and service, so we do not quote a guaranteed public fare.</p></div></section>
<section id="venice" className="bg-navy py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="From Marghera to Venice" title="Bus or train: use whichever works best that day" text="The bus arrives at Piazzale Roma; the train at Venezia Santa Lucia. Timetables can change, so check the service before leaving."/><div className="mt-8 grid gap-10 lg:grid-cols-2">{veneziaOptions.map(option=><article key={option.title} className="border-t border-white/20 pt-6"><h2 className="font-serif text-4xl">{option.title}</h2><p className="mt-3 text-white/70">{option.text}</p><div className="mt-5 divide-y divide-white/15">{option.rows.map(([time,line,freq])=><div key={time} className="grid gap-1 py-4 md:grid-cols-[110px_150px_1fr]"><strong className="text-gold">{time}</strong><span>{line}</span><span className="text-white/65">{freq}</span></div>)}</div></article>)}</div><div className="mt-9 flex flex-wrap gap-3"><a href="https://avm.avmspa.it/en/content/avm-venezia-official-app-how-use-0" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">AVM/ACTV ↗</a><a href="https://www.trenitalia.com/en.html" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Trenitalia ↗</a><a href="https://www.radiotaxivenezia.com/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy">RadioTaxi Venezia ↗</a></div></div></section>
<section className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Tickets" title="The essential fares, without the clutter" text="Fares may change. Use these as a quick reference and confirm the current price on the official channels before purchase."/><div className="mt-8 border-y border-navy/15">{ticketCards.map(([title,price,note])=><div key={title} className="grid gap-2 border-b border-navy/10 py-5 last:border-0 sm:grid-cols-[180px_140px_1fr] sm:items-center"><strong className="font-serif text-2xl text-navy">{title}</strong><span className="font-serif text-2xl text-gold">{price}</span><span className="text-slate-600">{note}</span></div>)}</div><details className="group mt-8 border-b border-navy/15 pb-6" open><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-3xl text-navy"><span>Unlimited travel passes</span><span className="text-gold transition group-open:rotate-45">+</span></summary><p className="mt-3 text-slate-600">Most useful if you expect to use buses, trams and waterbuses several times.</p><div className="mt-5 grid gap-x-8 sm:grid-cols-2">{passes.map(([duration,price])=><div key={duration} className="flex justify-between gap-4 border-b border-navy/10 py-3"><strong className="text-navy">{duration}</strong><span className="text-slate-600">{price}</span></div>)}</div><p className="mt-5 text-sm text-slate-500">Children travel free on urban services in the Municipality of Venice until their sixth birthday. Travellers aged 6–29 should check current Rolling Venice conditions.</p></details><div className="mt-10 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Where to buy</p><h2 className="mt-2 font-serif text-4xl text-navy">Before or during your stay</h2><p className="mt-3 text-slate-600">App, Venezia Unica, a nearby tobacco shop or ACTV channels.</p></div><div className="divide-y divide-navy/10 border-y border-navy/15">{[['AVM Venezia app','Digital tickets and service information.','https://avm.avmspa.it/en/content/avm-venezia-official-app-how-use-0'],['Venezia Unica','Tourist passes and services online.','https://www.veneziaunica.it/en/buy-tickets/public-trasport-in-venice'],['Nearby tobacco shop','In-person purchase during opening hours.','https://maps.app.goo.gl/bJzKjQh8vEJWbF5g9'],['ACTV','Timetables, stops and official service updates.','https://avm.avmspa.it/en/content/venice-urban-services-0']].map(([title,text,url])=><a key={title} href={url} target="_blank" rel="noopener noreferrer" className="grid gap-2 py-4 sm:grid-cols-[180px_1fr_auto] sm:items-center"><strong className="text-navy">{title}</strong><span className="text-sm text-slate-600">{text}</span><span className="font-bold text-gold">Open ↗</span></a>)}</div></div></div></section>
<section className="bg-gold py-16 text-navy"><div className="mx-auto max-w-5xl px-5 text-center lg:px-8"><p className="text-xs font-black uppercase tracking-[.22em]">Our local tip</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Use the car to reach Marghera and explore Veneto; leave it parked when you visit Venice.</h2></div></section>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><SectionTitle eyebrow="Transport FAQ" title="The questions that actually matter" text="For check-in, check-out and luggage storage, see the main stay FAQ."/><div className="border-y border-navy/15">{faq.map(([q,a])=><details key={q} className="group border-b border-navy/10 py-5 last:border-0"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span>{q}</span><span className="shrink-0 text-gold transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-slate-600">{a}</p></details>)}</div><div className="mt-7 text-center"><Link href="/en/faq" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">View all FAQs</Link></div></div></section>
</main><Footer lang="en"/></>}

