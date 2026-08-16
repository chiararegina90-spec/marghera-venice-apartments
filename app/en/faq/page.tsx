import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'FAQ',
  description:'Check-in, check-out, self check-in, luggage storage, private parking, children, pets and practical information for your stay near Venice.',
  openGraph:{title:'FAQ',description:'Practical answers about staying in our apartments near Venice, from check-in and parking to families and pets.',type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},
  twitter:{card:'summary',title:'FAQ',description:'Practical answers for planning your stay near Venice.',images:['/images/home-rialto-vincenzo-landino.webp']},
  alternates:{canonical:'/en/faq',languages:{'it-IT':'/faq','en-GB':'/en/faq','de-DE':'/de/faq','fr-FR':'/fr/faq','es-ES':'/es/faq','zh-CN':'/zh/faq','x-default':'/faq'}}
};

const groups = [
  {
    title:'Arrival and check-in',
    items:[
      ['What time is check-in?','The check-in time is agreed before arrival. We ask guests to tell us their expected arrival time and update us about one hour beforehand.'],
      ['Can I check in late at night?','It depends on the apartment, the time and the arrangements made before arrival. Contact us before booking if you expect to arrive very late.'],
      ['Is self check-in available?','Self check-in with an electronic keypad is available only at Dimora Castelli when agreed in advance. Rossi Apartment normally includes an in-person welcome.'],
      ['Can I request early check-in?','We can consider it depending on the previous guests’ departure and cleaning time. It cannot be guaranteed in advance.'],
    ]
  },
  {
    title:'Departure and luggage',
    items:[
      ['What time is check-out?','Check-out is by 10:00 am unless otherwise agreed.'],
      ['Can I request a late check-out?','We can consider it depending on the next arrivals and cleaning schedule.'],
      ['Is luggage storage available?','When our schedule allows, we can offer luggage storage before check-in or after check-out. Contact us to check availability.'],
      ['Can I leave my car after check-out and spend another day in Venice?','It depends on incoming guests and parking availability. Ask us before departure: we will do our best, but cannot always guarantee it.'],
    ]
  },
  {
    title:'Parking and transport',
    items:[
      ['Is parking free?','Yes. Both apartments include free private parking, according to the specific arrangements for each property.'],
      ['Do I need a car to visit Venice?','No. We recommend leaving your car parked and using the bus or train.'],
      ['Where can I find information about buses, trains and tickets?','Our “Getting here” page includes directions from the airports and railway station, plus transport into Venice.'],
    ]
  },
  {
    title:'Families and pets',
    items:[
      ['Do you provide a cot or toddler bed?','Yes. A cot or toddler bed with linen is available free of charge on request in both apartments.'],
      ['Are the apartments pet friendly?','Yes. We can provide a pet bed and bowls. Please let us know about your pet before arrival.'],
      ['Are there extra charges for children or pets?','Any applicable conditions are communicated clearly before booking.'],
    ]
  },
  {
    title:'Documents and your stay',
    items:[
      ['Do you need identification for every guest?','Yes. Italian regulations require all guests, including minors, to be registered.'],
      ['How is the tourist tax handled?','Tourist tax is applied according to the Municipality of Venice rules in force at the time of your stay. Rates and exemptions may change.'],
      ['Can I request a particular bed setup?','Where possible, we ask guests to tell us their preferred bed configuration before arrival.'],
    ]
  }
];

export default function FAQ(){
  return <><Header lang="en"/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><span className="text-gold">FAQ</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Before and during your stay</p>
        <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-none md:text-8xl">Frequently asked questions</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Check-in, check-out, luggage storage, parking, children, pets and practical information for your stay.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {groups.map((group)=><section key={group.title} className="mb-16">
          <SectionTitle eyebrow="FAQ" title={group.title} text="Requests subject to availability must be agreed with us directly."/>
          <div className="space-y-4">
            {group.items.map(([q,a])=><details key={q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer list-none font-serif text-2xl text-navy">{q}<span className="float-right text-gold group-open:rotate-45">+</span></summary>
              <p className="mt-4 text-slate-600">{a}</p>
            </details>)}
          </div>
        </section>)}

        <div className="rounded-[2rem] bg-gold p-8 text-center text-navy">
          <h2 className="font-serif text-4xl">Still have a question?</h2>
          <p className="mx-auto mt-4 max-w-2xl">Message us before booking: we are happy to clarify every detail in advance.</p>
          <a href="https://wa.me/393514462261?text=Hello%2C%20I%20have%20a%20question%20about%20staying%20at%20Marghera%20Venice%20Apartments.%20" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Message us on WhatsApp ↗</a>
        </div>
      </div>
    </section>
  </main><Footer lang="en"/></>
}
