import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ReviewSection from '@/components/ReviewSection';
import {CarIcon, MoonIcon, PawIcon, BabyIcon} from '@/components/icons';

export const metadata: Metadata = {
  title: 'Dimora Castelli | Marghera Venice Apartments',
  description: 'Dimora Castelli in Marghera near Venice: approx. 60 m² for up to 5 guests, free private parking, access to a shared garden and convenient day-and-night connections to Venice.',
  openGraph:{
    title:'Dimora Castelli | Up to 5 guests vicino a Venezia',
    description:'A welcoming apartment in Marghera with free private parking, access to a shared garden and convenient connections to Venice.',
    images:[{url:'/images/dimora-page-hero.webp',alt:'Bright bedroom at Dimora Castelli in Marghera near Venice'}]
  },
  twitter:{card:'summary_large_image',title:'Dimora Castelli | Marghera Venice Apartments',description:'Up to 5 guests, free private parking and convenient day-and-night connections to Venice.',images:['/images/dimora-page-hero.webp']},
  alternates:{canonical:'/en/apartments/dimora-castelli',languages:{'it-IT':'/case/dimora-castelli','en-GB':'/en/apartments/dimora-castelli','de-DE':'/de/apartments/dimora-castelli','fr-FR':'/fr/apartments/dimora-castelli','es-ES':'/es/apartments/dimora-castelli','zh-CN':'/zh/apartments/dimora-castelli','x-default':'/case/dimora-castelli'}}
};

const gallery = [
  ['/images/dimora-page-hero.webp', 'Bright double bedroom at Dimora Castelli in Marghera near Venice'],
  ['/images/dimora-page-twin.webp', 'Second bedroom at Dimora Castelli with single beds'],
  ['/images/dimora-page-bathroom.webp', 'Modern bathroom with shower at Dimora Castelli'],
  ['/images/dimora-page-kitchen.webp', 'Fully equipped kitchenmente attrezzata di Dimora Castelli'],
  ['/images/dimora-page-sofabed.webp', 'Bedroom at Dimora Castelli with double bed and sofa bed'],
];

const galleryLayout = [
  'h-[360px] sm:h-[480px] lg:h-[616px] lg:col-span-7 lg:row-span-2',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-7',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
];

const services = [
  'Approx. 60 m²',
  'Up to 5 guests',
  'Raised ground floor',
  'Fully equipped kitchen',
  'Two sleeping areas',
  'Wi-Fi',
  'Smart TV',
  'Mosquito screens on all windows',
  'Central air conditioning',
  'Heat pump',
  'Access to the shared condominium garden',
  'Private parking',
  'Pet bed and bowls',
  'Free cot or toddler bed',
  'Bed linen and towels included',
];

const castelliReviews = [
  {name:'Semra',date:'March 2026',text:'The apartment was easy to reach and the bus stop is very close. We were able to reach Venice in about 15 minutes. We felt at home and the parking right by the entrance was very convenient.'},
  {name:'Marwa',date:'January 2026',text:'Venice is easy to reach by bus and train. The apartment is clean and spacious, and the beds are comfortable. We received a warm welcome, useful information and thoughtful touches from the hosts.'},
  {name:'Lee',date:'April 2026',text:'Alessio and Chiara know Venice very well and gave us useful information for getting around. The apartment is very spacious and clean, with tea and coffee for breakfast and a pleasant garden area.'},
  {name:'Lynda',date:'2026',text:'The apartment was convenient for reaching Venice by bus. Having parking directly in front was fantastic. The air conditioning was already on when we arrived, a very thoughtful touch.'},
  {name:'Katharina',date:'August 2025',text:'There were four of us with a small dog. The renovated apartment had everything we needed, including air conditioning. The bus stop for Venice is only a few minutes away. We’ll be back.'}
];

export default function DimoraCastelli() {
  return <><Header lang="en"/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/dimora-page-hero.webp" alt="Bright bedroom at Dimora Castelli in Marghera near Venice" fill priority sizes="100vw" className="object-cover"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/en" className="hover:text-gold">Home</Link><span>›</span>
            <Link href="/en/#case" className="hover:text-gold">Our apartments</Link><span>›</span>
            <span className="text-gold">Dimora Castelli</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Approx. 60 m² · up to 5 guests</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-8xl">Dimora Castelli</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/85">A quiet, welcoming apartment surrounded by greenery, designed around your pace and just minutes from Venice.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/393514462261?text=Hello%2C%20I%27d%20like%20to%20check%20availability%20for%20Dimora%20Castelli.%20My%20dates%20are%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Check availability</a>
            <Link href="/en/#case" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Back to apartments</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-soft"><div className="text-3xl font-black text-gold">60</div><h2 className="mt-3 font-serif text-2xl text-navy">Approx. 60 m²</h2><p className="mt-2 text-sm text-slate-600">Bright, well-organised spaces with a cosy feel.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><CarIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Private parking</h2><p className="mt-2 text-sm text-slate-600">Convenient for guests travelling by car.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><MoonIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Venice day & night</h2><p className="mt-2 text-sm text-slate-600">Day and night public transport connections.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><PawIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Pet Friendly</h2><p className="mt-2 text-sm text-slate-600">Pet bed and bowls disponibili.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><BabyIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Family Friendly</h2><p className="mt-2 text-sm text-slate-600">Cot or toddler bed with linen available.</p></div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="The apartment" title="The comfort of feeling at home" text="A bright, practical apartment ideal for couples, small families and business stays."/>
        <div className="grid gap-4 lg:grid-cols-12">
          {gallery.map(([src,alt],index)=><div key={src} className={`relative overflow-hidden rounded-3xl ${galleryLayout[index]}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={index === 0 || index === 3 ? '(min-width:1024px) 58vw, 100vw' : '(min-width:1024px) 42vw, 100vw'}
              className={`object-cover transition duration-700 hover:scale-[1.025] ${index === 1 ? 'object-center' : index === 2 ? 'object-[50%_45%]' : 'object-center'}`}
            />
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">The apartment che si adatta ai tuoi ritmi</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Practical, quiet and surrounded by greenery</h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p><strong className="text-navy">Easy access.</strong> The apartment si trova al piano terra rialzato: una soluzione comoda per chi ha difficoltà motorie, viaggia con passeggini oppure porta valigie grandi e pesanti.</p>
            <p><strong className="text-navy">Windows overlooking greenery.</strong> The building is surrounded by greenery and every window has a mosquito screen, so you can let fresh air in even on summer evenings.</p>
            <p><strong className="text-navy">Comfortable temperature year-round.</strong> The central climate system is controlled from a convenient panel by the entrance and also works as a heat pump.</p>
            <p><strong className="text-navy">Fully equipped kitchen.</strong> A practical space for a relaxed breakfast or dinner after a day in Venice.</p>
          </div>
          <div className="mt-10 rounded-3xl border-l-4 border-aqua bg-white p-7 shadow-soft">
            <p className="font-bold text-navy">Our local tip</p>
            <p className="mt-2 text-slate-600">Use the shared garden at the rear to read, get some fresh air or hang laundry during longer stays.</p>
          </div>
        </div>
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/dimora-page-kitchen-2.webp" alt="Modern fully equipped kitchen at Dimora Castelli in Marghera" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Why choose it" title="Comfort in every detail" text="Dimora Castelli combines tranquillity, practicality and a strategic location for exploring Venice and Veneto."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Raised ground floor','Easier with heavy luggage, pushchairs or reduced mobility.'],
            ['Surrounded by greenery','Green views and a relaxing atmosphere.'],
            ['Mosquito screens','Fitted to every window for comfortable ventilation.'],
            ['Central climate control','Air conditioning and heat pump controlled from one panel.'],
            ['Shared condominium garden','A rear garden area for reading, relaxing or hanging laundry.'],
            ['Venice day & night','Collegamenti diurni e notturni per muoverti senza vincoli.'],
          ].map(([title,copy])=><div key={title} className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <h3 className="font-serif text-3xl text-navy">{title}</h3>
            <p className="mt-3 text-slate-600">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-[2rem]">
          <Image src="/images/dimora-castelli-giardino-reale.webp" alt="Shared condominium garden available to guests at Dimora Castelli" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center"/>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">A touch of green</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">The garden at the rear</h2>
          <p className="mt-6 text-lg text-white/75">Access to the shared garden adds a little extra breathing room: sit with a book, enjoy some fresh air or use the area to hang laundry.</p>
          <p className="mt-5 text-white/75">The greenery around the building creates a quieter, more pleasant atmosphere throughout the year.</p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Ideal for" title="Choose a stay that matches your trip" text="Dimora Castelli is especially suited to guests looking for simplicity, tranquillity and convenient access."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Couples','A cosy, quiet place to return to after a day in the city.'],
            ['Small families','Practical spaces for up to 5 guests with family-friendly amenities.'],
            ['Business stays','Wi-Fi, a kitchen and a comfortable base for longer stays.'],
            ['Guests looking for peace and quiet','Greenery, quiet surroundings and well-organised spaces.'],
          ].map(([title,copy])=><div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <h3 className="font-serif text-3xl text-navy">{title}</h3>
            <p className="mt-3 text-slate-600">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="A typical day" title="Follow your own pace" text="Dimora Castelli makes it easy to combine Venice, work, relaxation and everyday life."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['08:00','A relaxed breakfast in your own kitchen.'],
            ['09:00','Head to Venice using day or night public transport.'],
            ['10:00','Museums, calli, islands or a day of work.'],
            ['18:00','An easy return and dinner at home or nearby.'],
            ['21:00','A book, some fresh air in the garden or time to relax on the sofa.'],
            ['23:00','Rest in a quiet apartment surrounded by greenery.'],
          ].map(([time,copy])=><div key={time} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="text-sm font-black uppercase tracking-[.18em] text-gold">{time}</div>
            <p className="mt-3 font-serif text-2xl text-navy">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Amenities" title="Everything you need to feel at home" text="Practical amenities and comfort for short breaks or longer stays."/>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(service=><div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-navy shadow-sm">✓ {service}</div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[350px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/dimora-castelli-edificio-storia.webp" alt="Building housing Dimora Castelli in central Marghera" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">A building with history</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">In the heart of Marghera’s Garden City</h2>
          <p className="mt-6 text-lg text-slate-600">Dimora Castelli lies in an area that tells an important part of Marghera’s urban history. In the early 20th century, the residential district was designed around the <strong>Garden City</strong> model, inspired by the English Garden Cities: tree-lined streets, green spaces and homes intended to separate residential life from the new industrial and port area.</p>
          <p className="mt-5 text-slate-600">Via Castelli became part of this urban plan in a strategic position between central Marghera, Mestre and routes towards the Brenta Riviera. During the Second World War, the proximity of Porto Marghera and the railway network left the area particularly exposed to bombing.</p>
          <p className="mt-5 text-slate-600">After the war, the neighbourhood was rebuilt and changed as the city grew. Today it still retains traces of the original Garden City idea, alongside shops, services and transport links that make this part of Marghera a practical, authentic base for exploring Venice and Veneto.</p>
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Strategic location</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Venice and Veneto without giving up peace and quiet</h2>
          <p className="mt-6 text-lg text-white/75">The Sant’Antonio Municipio bus stop is close to the apartment and offers day and night connections to Venice. Venezia Mestre railway station is within walking distance via the Via Ulloa exit.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Bus</p><h3 className="mt-2 font-serif text-3xl">Venice day & night</h3><p className="mt-2 text-white/70">Day services plus the N2 night bus.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Train</p><h3 className="mt-2 font-serif text-3xl">Mestre FS</h3><p className="mt-2 text-white/70">About a 10-minute walk from the Via Ulloa exit.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Car</p><h3 className="mt-2 font-serif text-3xl">Explore Veneto</h3><p className="mt-2 text-white/70">The Brenta Riviera, Padua, Treviso and much more.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Support</p><h3 className="mt-2 font-serif text-3xl">Direct contact</h3><p className="mt-2 text-white/70">WhatsApp support before and during your stay.</p></div>
        </div>
      </div>
    </section>

    <ReviewSection property="Dimora Castelli" reviews={castelliReviews}/>

    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Dimora Castelli</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Would you like to check availability?</h2>
        <p className="mt-5 text-lg text-slate-600">Send us your dates and number of guests. We’ll reply personally with availability and useful information for your stay.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/393514462261?text=Hello%2C%20I%27d%20like%20to%20check%20availability%20for%20Dimora%20Castelli.%20My%20dates%20are%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Check on WhatsApp</a>
          <a href="mailto:dimoracastelli22@gmail.com" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Send an email</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">CIN Dimora Castelli: IT027042C2YOUCUFM2</p>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Getting here</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Easy to reach however you travel</h2>
          <p className="mt-5 text-lg text-slate-600">Dimora Castelli offers free private parking. From Venezia Mestre station you can arrive on foot, by T2 tram or taxi; airport shuttle services connect the airports with Mestre.</p>
          <Link href="/en/getting-to-venice" className="mt-7 inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Getting here: transport, airports and Venice →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {['🚗 Free private parking','🚋 T2 tram from Venezia Mestre','✈️ Airport shuttles to Mestre'].map((x)=><div key={x} className="rounded-2xl bg-white p-5 font-semibold text-navy shadow-soft">{x}</div>)}
        </div>
      </div>
    </section>
  </main><Footer lang="en"/></>
}