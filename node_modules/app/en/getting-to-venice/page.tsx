import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'Getting to Venice',
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

export default function Mobilita(){
  return <><Header lang="en"/><main>
    <section className="relative min-h-[80vh] overflow-hidden pt-20">
      <Image src="/images/come-arrivare-hero-originale.webp" alt="Bus and public transport connections from Marghera to Venice" fill priority sizes="100vw" className="object-cover object-top"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(80vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><span className="text-gold">Getting here</span></nav>
          <p className="text-xs font-black uppercase tracking-[.24em] text-gold">Plan your journey with confidence</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Getting here</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/80">Plan your journey before you arrive: find out how to reach the apartments by car, train or plane and how to travel conveniently into Venice.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appartamenti" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Getting to the apartments</a>
            <a href="#venezia" className="rounded-full border border-white/50 px-7 py-4 font-bold">Getting to Venice</a>
          </div>
        </div>
      </div>
    </section>

    <section id="appartamenti" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Before you book" title="Getting to the apartments is easy" text="Detailed check-in instructions are reserved for confirmed guests. Here you will find everything you need to plan your journey."/>
        <div className="grid gap-7 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Via Cesare Rossarol 32</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Rossi Apartment</h2>
            <div className="mt-7 space-y-6 text-slate-600">
              <div><h3 className="font-serif text-2xl text-navy">🚗 By car</h3><p className="mt-2">Free reserved parking inside the gated condominium grounds.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">🚆 From Venezia Mestre station</h3><p className="mt-2">You can take a taxi, tram T2 towards Marghera and get off at Sant’Antonio, or walk via the Marghera – Via Ulloa exit.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">✈️ From Venice Marco Polo Airport</h3><p className="mt-2">Take a taxi or an ACTV/ATVO bus to Venezia Mestre station, then continue to the apartment.</p></div>
            </div>
            <a href="https://maps.app.goo.gl/RsR3uoKtqtVDwgcN6" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-4 font-bold text-white">Open in Google Maps ↗</a>
          </article>

          <article className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">Via Jacopo Castelli 22</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">Dimora Castelli</h2>
            <div className="mt-7 space-y-6 text-slate-600">
              <div><h3 className="font-serif text-2xl text-navy">🚗 By car</h3><p className="mt-2">Free private parking inside the property. If you have more than one car, free street parking is normally available nearby.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">🚆 From Venezia Mestre station</h3><p className="mt-2">You can walk via Via Ulloa, Piazzale Giovannacci and Via Cesare Rossarol, or take tram T2 to Sant’Antonio Municipio.</p></div>
              <div><h3 className="font-serif text-2xl text-navy">✈️ From Marco Polo or Treviso Canova airports</h3><p className="mt-2">ATVO coaches reach Venezia Mestre station; from there continue on foot, by tram or by taxi.</p></div>
            </div>
            <a href="https://maps.app.goo.gl/yX3pS9GXamZyoGvUA" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-4 font-bold text-white">Open in Google Maps ↗</a>
          </article>
        </div>
        <p className="mt-7 rounded-3xl border-l-4 border-aqua bg-white p-6 text-slate-600 shadow-soft">Taxi fares and journey times vary with traffic, time of day and service. For this reason we do not quote a guaranteed taxi price on the public website.</p>
      </div>
    </section>

    <section id="venezia" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Getting to Venice" title="Bus or train: two convenient options" text="Routes and fares have been checked against official sources. Timetables can change, so always check your service for the day in the AVM Venezia Official app or on the operators’ websites."/>
        <div className="grid gap-7 lg:grid-cols-2">
          {veneziaOptions.map((option)=><article key={option.title} className="rounded-[2rem] bg-white/10 p-8">
            <h2 className="font-serif text-4xl">{option.title}</h2>
            <p className="mt-4 text-white/70">{option.text}</p>
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/15">
              {option.rows.map(([time,line,freq])=><div key={time} className="grid gap-1 border-b border-white/10 p-4 last:border-0 md:grid-cols-3">
                <strong className="text-gold">{time}</strong><span>{line}</span><span className="text-white/70">{freq}</span>
              </div>)}
            </div>
          </article>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://avm.avmspa.it/en/content/avm-venezia-official-app-how-use-0" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Official AVM/ACTV times ↗</a>
          <a href="https://www.trenitalia.com/en.html" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Trenitalia times ↗</a>
        </div>
      </div>
    </section>


    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-navy p-8 text-white shadow-soft lg:grid-cols-[1fr_.8fr] lg:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Local taxi</p>
            <h2 className="mt-3 font-serif text-4xl">RadioTaxi Venezia</h2>
            <p className="mt-5 text-white/75">A useful option for airports, the railway station and arrivals with luggage. The RadioTaxi Venezia website provides service information, indicative fare calculations and booking or app options.</p>
          </div>
          <div className="flex items-center lg:justify-end">
            <a href="https://www.radiotaxivenezia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">RadioTaxi Venezia ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Useful ticket information" title="Checked fares and tourist passes" text="Fares checked against official AVM/ACTV and Venezia Unica sources. Prices may change, so always confirm the current fare before purchase."/>
        <div className="grid gap-5 md:grid-cols-3">
          {ticketCards.map(([title,price,note])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-soft">
            <p className="text-sm font-black uppercase tracking-[.18em] text-gold">{title}</p>
            <p className="mt-4 font-serif text-5xl text-navy">{price}</p>
            <p className="mt-3 text-slate-600">{note}</p>
          </article>)}
        </div>

        <div className="mt-12 rounded-[2rem] bg-cream p-8">
          <h2 className="font-serif text-4xl text-navy">Unlimited travel passes</h2>
          <p className="mt-3 text-slate-600">Especially useful if you plan to use buses, trams and waterbuses several times during your stay.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {passes.map(([duration,price])=><div key={duration} className="rounded-2xl bg-white p-5 shadow-soft"><p className="font-bold text-navy">{duration}</p><p className="mt-2 text-lg text-slate-600">{price}</p></div>)}
          </div>
          <p className="mt-6 text-sm text-slate-500">Family note: children travel free on urban services in the Municipality of Venice until their sixth birthday. For travellers aged 6–29, Rolling Venice with an ACTV 72-hour ticket is available subject to current conditions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.veneziaunica.it/en/buy-tickets/public-trasport-in-venice" target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">Venezia Unica fares ↗</a>
            <a href="https://avm.avmspa.it/en/content/venice-urban-services-0" target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy">AVM/ACTV fares ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Where to buy" title="Tickets before or during your stay" text="Buying and validating the correct ticket helps avoid wasted time and fines."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <a href="https://avm.avmspa.it/en/content/avm-venezia-official-app-how-use-0" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">App AVM Venezia</h2><p className="mt-3 text-slate-600">Digital ticket purchase and service information.</p><span className="mt-5 inline-block font-bold text-gold">Open ↗</span></a>
          <a href="https://www.veneziaunica.it/en/buy-tickets/public-trasport-in-venice" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">Venezia Unica</h2><p className="mt-3 text-slate-600">Tourist passes and services available online.</p><span className="mt-5 inline-block font-bold text-gold">Open ↗</span></a>
          <a href="https://maps.app.goo.gl/bJzKjQh8vEJWbF5g9" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">Nearby tobacco shop</h2><p className="mt-3 text-slate-600">In-person ticket purchase during opening hours.</p><span className="mt-5 inline-block font-bold text-gold">Open map ↗</span></a>
          <a href="https://avm.avmspa.it/en/content/venice-urban-services-0" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-white p-7 shadow-soft"><h2 className="font-serif text-3xl text-navy">ACTV</h2><p className="mt-3 text-slate-600">Official timetables, stops, validity and service updates.</p><span className="mt-5 inline-block font-bold text-gold">Open ↗</span></a>
        </div>
      </div>
    </section>

    <section className="bg-gold py-20 text-navy">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em]">Our local tip</p>
        <h2 className="mt-4 font-serif text-5xl">Use your car to reach Marghera and explore Veneto; leave it parked when you visit Venice.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">If you plan to use the vaporetto several times, a pass may offer better value than individual tickets. Compare your itinerary with current fares.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionTitle eyebrow="Transport FAQ" title="Frequently asked questions" text="For check-in, check-out, luggage storage and stay-related information, see our main FAQ page."/>
        <div className="space-y-4">
          {faq.map(([q,a])=><details key={q} className="group rounded-3xl border border-slate-200 bg-white p-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span className="min-w-0">{q}</span><span className="shrink-0 text-gold transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-4 text-slate-600">{a}</p>
          </details>)}
        </div>
        <div className="mt-8 text-center"><Link href="/en/faq" className="inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">View all stay FAQs</Link></div>
      </div>
    </section>
  </main><Footer lang="en"/></>
}
