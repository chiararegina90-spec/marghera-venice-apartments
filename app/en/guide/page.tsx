import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Venice & Veneto Travel Guides | Marghera Venice Apartments',
  description: 'Local travel guides to Venice, the lagoon islands and Veneto: Murano, Burano, Lido, Chioggia, Padua, Verona, the Dolomites and more.',
  alternates:{canonical:'/en/guide',languages:{'it-IT':'/guide','en-GB':'/en/guide','de-DE':'/de/guide','fr-FR':'/fr/guide','es-ES':'/es/guide','zh-CN':'/zh/guide','x-default':'/guide'}},
  openGraph:{title:'Venice & Veneto Travel Guides | Marghera Venice Apartments',description:'Plan day trips and discover Venice, its lagoon islands and Veneto with practical local guides.',url:'/en/guide',locale:'en_GB',type:'website'}
};

const guides = [
  ['Murano','Where glass becomes art','Furnaces, workshops and centuries of glassmaking tradition.','/images/murano-glass.webp','Artistic coloured Murano glass details','murano'],
  ['Burano','Colourful houses and lace','Bright façades, small canals and an island tradition that is instantly recognisable.','/images/burano-canale.webp','Burano canal with colourful houses and boats','burano'],
  ['Venice Lido','Beaches, bicycles and the Murazzi','Venice by the sea, with beaches, cycling, the Murazzi and international events.','/images/lido-venezia-spiaggia.webp','Beach on Venice Lido overlooking the Adriatic Sea','lido-di-venezia'],
  ['Cycling in Veneto','Lagoon, hills and mountains by bike','Routes through rivers, vineyards, villages, the Dolomites and Veneto cycleways.','/images/guide-veneto-bicicletta.webp','Cyclists riding through vineyards and landscapes in Veneto','veneto-in-bicicletta'],
  ['Jesolo','Beach, sea and summer life','A day on the Adriatic coast, reachable by car or public transport from Mestre.','/images/guide-jesolo.webp','Jesolo beach on the Adriatic coast','jesolo'],
  ['Pellestrina','Slow lagoon life and bicycles','A long, quiet island to explore between fishing villages, lagoon landscapes and cycle routes.','/images/guide-pellestrina-final.webp','Aerial view of Pellestrina between the Venetian Lagoon and Adriatic Sea','pellestrina'],
  ['Chioggia','Canals, seafood and Sottomarina','A lively lagoon town with canals, its fish market and the nearby Sottomarina coast.','/images/veneto-chioggia-pellestrina-final.webp','Chioggia canal with bridges, boats and waterfront houses','chioggia'],
  ['Brenta Riviera','Venetian villas and riverside landscapes','Historic villas, villages and scenery along the Brenta, ideal for a day outside Venice.','/images/veneto-riviera-brenta-final.webp','Brenta Riviera landscape with canal, bridges and historic houses','riviera-del-brenta'],
  ['Padua','Giotto, squares and porticoes','Art, historic squares and arcades in an easy day trip from the Venice area.','/images/veneto-padova-final.webp','Prato della Valle in Padua with canal, statues and historic buildings','padova'],
  ['Treviso','Canals and elegant city life','A compact historic centre crossed by canals, perfect for an unhurried walk.','/images/veneto-treviso-final.webp','Canal in Treviso historic centre with porticoes and willow trees','treviso'],
  ['Verona','Arena, Adige and history','The Arena, historic centre and riverside walks make this a classic Veneto day trip.','/images/veneto-verona-final.webp','Verona Arena and Piazza Bra on a sunny day','verona'],
  ['Prosecco Hills','Vineyards and villages','Vine-covered hills, small villages and panoramic roads in the heart of Prosecco country.','/images/veneto-colline-prosecco-final.webp','Prosecco Hills with vineyards and rural Veneto landscape','colline-del-prosecco'],
  ['Dolomites','A day in the mountains','Alpine scenery and nature for adding a mountain day to your Veneto trip.','/images/guide-dolomiti-final.webp','Dolomites panorama with rocky peaks, meadows and alpine houses','dolomiti'],
  ['Certosa Island','Green space and silence','A green corner of the lagoon close to Venice but away from its busiest areas.','/images/guide-certosa-final.webp','Aerial view of Certosa Island in the Venetian Lagoon','certosa'],
  ["Sant’Erasmo","Venice's garden island and the Bacan",'Fields, lagoon scenery and agricultural traditions on the island known as the garden of Venice.','/images/guide-sant-erasmo-final.webp',"Aerial view of Sant’Erasmo with canals and fields in the Venetian Lagoon",'sant-erasmo']
];

export default function GuideIndex(){return <><Header lang="en"/><main>
<section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8"><div className="mx-auto max-w-7xl">
<nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/70"><Link href="/en">Home</Link><span>›</span><span className="text-gold">Guides</span></nav>
<p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Guides</p>
<h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,11vw,4rem)] leading-[.98] tracking-[-0.02em] sm:text-6xl md:text-8xl">Travel guides for discovering Venice and Veneto.</h1>
<p className="mt-6 max-w-3xl text-xl text-white/75">Practical ideas, day trips and local inspiration to help you plan more than just the obvious Venice highlights.</p>
</div></section>
<section className="bg-cream py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-2">
{guides.map(([title,subtitle,text,image,alt,slug])=><article key={slug} className="overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="relative h-64 sm:h-72 lg:h-80"><Image src={image} alt={alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/></div><div className="p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{subtitle}</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">{title}</h2><p className="mt-4 text-lg text-slate-600">{text}</p><Link href={`/en/guide/${slug}`} className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy">Open guide</Link></div></article>)}
</div></div></section></main><Footer lang="en"/></>}
