import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ReviewSection from '@/components/ReviewSection';
import {CarIcon, MoonIcon, PawIcon, BabyIcon} from '@/components/icons';

export const metadata:Metadata={
  title:'Rossi Apartment',
  description:'Rossi Apartment in Marghera near Venice: over 100 m² for up to 7 guests, free private parking, a furnished terrace and day-and-night public transport to Venice.',
  openGraph:{
    title:'Rossi Apartment | Up to 7 guests near Venice',
    description:'Over 100 m² in Marghera with free private parking, a furnished terrace and convenient day-and-night connections to Venice.',
    images:[{url:'/images/rossi-page-hero.webp',alt:'Bright and spacious living room at Rossi Apartment in Marghera near Venice'}]
  },
  twitter:{card:'summary_large_image',title:'Rossi Apartment',description:'Up to 7 guests, free private parking and convenient day-and-night connections to Venice.',images:['/images/rossi-page-hero.webp']},
  alternates:{canonical:'/en/apartments/rossi-apartment',languages:{'it-IT':'/case/rossi-apartment','en-GB':'/en/apartments/rossi-apartment','de-DE':'/de/apartments/rossi-apartment','fr-FR':'/fr/apartments/rossi-apartment','es-ES':'/es/apartments/rossi-apartment','zh-CN':'/zh/apartments/rossi-apartment','x-default':'/case/rossi-apartment'}}
};

const gallery = [
  ['/images/rossi-page-hero.webp','Bright and spacious living room at Rossi Apartment in Marghera near Venice'],
  ['/images/rossi-page-kitchen.webp','Large fully equipped kitchen at Rossi Apartment near Venice'],
  ['/images/rossi-page-bedroom-1.webp','Double bedroom at Rossi Apartment with professionally laundered linen'],
  ['/images/rossi-page-bedroom-2.webp','Second bedroom at Rossi Apartment, flexible for families and groups'],
  ['/images/rossi-page-extra-bed.webp','Additional sleeping area at Rossi Apartment for groups of up to 7 guests'],
];

const services = [
  'Up to 7 guests','Two bedrooms','Large fully equipped kitchen','55-inch Smart TV',
  'High-speed Wi-Fi','Independent air conditioning','Washing machine','Professionally laundered linen',
  'Furnished terrace','Outdoor smoking area','Over 100 m²','Private parking','Pet bed and bowls','Free cot or toddler bed'
];

const rossiReviews = [
  {name:'Sarah',date:'2026',text:'The apartment was spacious, spotless and very well equipped. We appreciated the gated parking and the bus stop just a few minutes away on foot. Alessio and Chiara were friendly, welcoming and always available.'},
  {name:'Giuseppe',date:'July 2025',text:'We had a fantastic stay. The bus stop for Venice and the supermarket are just around the corner. The apartment has everything you need and is very well equipped.'},
  {name:'P (Som)',date:'October 2025',text:'Lovely, spacious apartment, especially convenient if you have a car. Getting to Venice by bus was very easy. Chiara was very helpful and welcomed us in person.'},
  {name:'Ana',date:'June 2026',text:'The hospitality and warmth of our welcome were a highlight of our trip. The accommodation was perfect and full of useful information for sightseeing. We would definitely return.'},
  {name:'Summer',date:'April 2026',text:'A spacious, comfortable apartment near the station. We received lots of advice on getting around Venice, where to eat and how to buy tickets. I would choose it again.'}
];

export default function RossiApartment(){
  return <><Header lang="en"/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/rossi-page-hero.webp" alt="Bright and spacious living room at Rossi Apartment in Marghera near Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/en" className="hover:text-gold">Home</Link><span>›</span>
            <Link href="/en/#case" className="hover:text-gold">Our apartments</Link><span>›</span>
            <span className="text-gold">Rossi Apartment</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Up to 7 guests · Marghera</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-8xl">Rossi Apartment</h1>
          <p className="mt-6 max-w-2xl text-xl text-white/85">Over 100 m² of comfort near Venice, with generous spaces designed for families and groups of up to 7 guests.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/393514462261?text=Hello%2C%20I%27d%20like%20to%20check%20availability%20for%20Rossi%20Apartment.%20My%20dates%20are%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Check availability</a>
            <Link href="/en/#case" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Back to apartments</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-soft"><div className="text-3xl font-black text-gold">100+</div><h2 className="mt-3 font-serif text-2xl text-navy">Over 100 m²</h2><p className="mt-2 text-sm text-slate-600">Spacious, bright rooms for families and groups.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><CarIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Private parking</h2><p className="mt-2 text-sm text-slate-600">Reserved parking inside the condominium grounds.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><MoonIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Venice day & night</h2><p className="mt-2 text-sm text-slate-600">Day and night connections so you can return when it suits you.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><PawIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Pet Friendly</h2><p className="mt-2 text-sm text-slate-600">Pet bed and bowls available free of charge.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><BabyIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Family Friendly</h2><p className="mt-2 text-sm text-slate-600">Cot or toddler bed with linen available on request.</p></div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="The apartment" title="Spacious, bright and made to be lived in" text="Rossi Apartment welcomes families and groups with comfortable rooms, a large kitchen and everything you need for an easy stay near Venice."/>
        <div className="grid gap-4 lg:grid-cols-12">
          {gallery.map(([src,alt],index)=><div key={src} className={`relative overflow-hidden rounded-3xl ${index===0?'h-[340px] sm:h-[420px] lg:h-[460px] lg:col-span-7 lg:row-span-2':'h-[220px] sm:h-[240px] lg:h-[220px] lg:col-span-5'}`}>
            <Image src={src} alt={alt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025]"/>
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Feel at home</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Every space is designed for real life</h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p><strong className="text-navy">Large eat-in kitchen.</strong> Cookware, tableware, dishwasher, oven, microwave, kettle, toaster and Nespresso machine.</p>
            <p><strong className="text-navy">A living room made for time together.</strong> A large sofa, extendable dining table and 55-inch Smart TV with streaming services.</p>
            <p><strong className="text-navy">Two comfortable bedrooms.</strong> Generous wardrobes, individual Smart TVs and access to the furnished terrace.</p>
            <p><strong className="text-navy">Furnished terrace.</strong> An outdoor space to relax, enjoy a coffee or smoke: this is the apartment’s designated smoking area.</p>
            <p><strong className="text-navy">Everyday comfort.</strong> Air conditioning in every room, washing machine, iron, towels and professionally laundered bed linen.</p>
          </div>
          <div className="mt-10 rounded-3xl border-l-4 border-aqua bg-white p-7 shadow-soft">
            <p className="font-bold text-navy">Our local tip</p>
            <p className="mt-2 text-slate-600">Leave your car in the private parking area, take public transport to Venice and come back at your own pace: night connections are also available.</p>
          </div>
        </div>
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/rossi-page-kitchen-2.webp" alt="Large fully equipped kitchen at Rossi Apartment in Marghera near Venice" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Amenities" title="Everything you need, ready for your stay" text="A complete range of amenities for short breaks, family holidays and longer stays."/>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(service=><div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-navy shadow-sm">✓ {service}</div>)}
        </div>
      </div>
    </section>


    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Why choose it" title="More space, more freedom, more comfort" text="Rossi Apartment is for travellers who want to experience Venice without giving up the comfort and space of a real home."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Over 100 m²','Genuinely spacious rooms for families and groups of up to 7.'],
            ['Private parking','Leave your car safely parked and reach Venice by public transport.'],
            ['Venice day & night','Day and night connections give you more freedom.'],
            ['Fully equipped kitchen','Breakfast, lunch and dinner together, just like at home.'],
            ['Furnished terrace','Outdoor relaxation and a dedicated smoking area.'],
            ['Pet & Family Friendly','Pet bed, bowls, cot and toddler bed available on request.'],
          ].map(([title,copy])=><div key={title} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <h3 className="font-serif text-3xl text-navy">{title}</h3>
            <p className="mt-3 text-slate-600">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="A typical day" title="Imagine your stay" text="From breakfast to your evening return, Rossi Apartment fits naturally into every part of your day."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['08:00','Breakfast in the large kitchen before heading out.'],
            ['09:00','Bus or train to Venice.'],
            ['10:00','A day among Venice’s calli, canals and museums.'],
            ['18:00','Aperitivo and an easy journey home.'],
            ['21:00','Relax on the terrace, including a dedicated area for guests who smoke.'],
            ['23:00','Rest in quiet, comfortable bedrooms.'],
          ].map(([time,copy])=><div key={time} className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <div className="text-sm font-black uppercase tracking-[.18em] text-gold">{time}</div>
            <p className="mt-3 font-serif text-2xl text-navy">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Strategic location</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Venice when you want it, Veneto when you feel like exploring</h2>
          <p className="mt-6 text-lg text-white/75">The Sant’Antonio Municipio bus stop is close to the apartment. Day and night services connect Marghera with Venice, while Venezia Mestre railway station is within walking distance via the Via Ulloa exit.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Bus</p><h3 className="mt-2 font-serif text-3xl">Venice day & night</h3><p className="mt-2 text-white/70">Lines 6 and 6L, plus the N2 night service.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Train</p><h3 className="mt-2 font-serif text-3xl">Mestre FS</h3><p className="mt-2 text-white/70">About a 10-minute walk from the Via Ulloa exit.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Car</p><h3 className="mt-2 font-serif text-3xl">Riviera del Brenta</h3><p className="mt-2 text-white/70">Venetian villas and day-trip routes within easy reach.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Support</p><h3 className="mt-2 font-serif text-3xl">Direct contact</h3><p className="mt-2 text-white/70">WhatsApp support before and during your stay.</p></div>
        </div>
      </div>
    </section>

    <ReviewSection property="Rossi Apartment" reviews={rossiReviews}/>

    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Rossi Apartment</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Would you like to check availability?</h2>
        <p className="mt-5 text-lg text-slate-600">Send us your dates and number of guests. We’ll reply personally with availability and useful information for your stay.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/393514462261?text=Hello%2C%20I%27d%20like%20to%20check%20availability%20for%20Rossi%20Apartment.%20My%20dates%20are%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Check on WhatsApp</a>
          <a href="mailto:rossiapartmentvenice@gmail.com" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Send an email</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">CIN Rossi Apartment: IT027042C2EDHHAM7Z</p>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Getting here</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Easy to reach by car, train or plane</h2>
          <p className="mt-5 text-lg text-slate-600">Rossi Apartment has private parking. From Venezia Mestre station you can arrive on foot, by T2 tram or taxi; from the airports, Mestre is served by taxis and shuttle services.</p>
          <Link href="/en/getting-to-venice" className="mt-7 inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Getting here: transport, airports and Venice →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {['🚗 Private parking','🚆 Venezia Mestre station nearby','✈️ Airport connections'].map((x)=><div key={x} className="rounded-2xl bg-white p-5 font-semibold text-navy shadow-soft">{x}</div>)}
        </div>
      </div>
    </section>
  </main><Footer lang="en"/></>
}
