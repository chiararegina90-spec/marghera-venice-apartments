import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Guide di viaggio | Marghera Venice Apartments',
  description: 'Scopri le guide di Marghera Venice Apartments dedicate a Venezia, alle isole della laguna e alle destinazioni del Veneto.',
};

const guides = [
  {
    "title": "Murano",
    "subtitle": "L’isola dove il vetro diventa arte",
    "text": "L’isola dove il vetro diventa arte",
    "image": "/images/murano-glass.webp",
    "href": "/guide/murano"
  },
  {
    "title": "Burano",
    "subtitle": "Colori e merletto",
    "text": "Colori e merletto",
    "image": "/images/burano-canale.webp",
    "href": "/guide/burano"
  },
  {
    "title": "Lido di Venezia",
    "subtitle": "Spiagge, bici e Murazzi",
    "text": "Spiagge, bici e Murazzi",
    "image": "/images/lido-venezia-spiaggia.webp",
    "href": "/guide/lido-di-venezia"
  },
  {
    "title": "Jesolo",
    "subtitle": "Spiaggia, mare e vita estiva",
    "text": "Una giornata sull’Adriatico, raggiungibile in auto o con ATVO da Venezia Mestre.",
    "image": "/images/guide-jesolo.webp",
    "href": "/guide/jesolo"
  },
  {
    "title": "Pellestrina",
    "subtitle": "Laguna lenta e biciclette",
    "text": "Laguna lenta e biciclette",
    "image": "/images/guide-pellestrina-final.webp",
    "href": "/guide/pellestrina"
  },
  {
    "title": "Chioggia",
    "subtitle": "Canali, pesce e Sottomarina",
    "text": "Canali, pesce e Sottomarina",
    "image": "/images/veneto-chioggia-pellestrina-final.webp",
    "href": "/guide/chioggia"
  },
  {
    "title": "Riviera del Brenta",
    "subtitle": "Ville e paesaggio fluviale",
    "text": "Ville e paesaggio fluviale",
    "image": "/images/veneto-riviera-brenta-final.webp",
    "href": "/guide/riviera-del-brenta"
  },
  {
    "title": "Padova",
    "subtitle": "Giotto, piazze e portici",
    "text": "Giotto, piazze e portici",
    "image": "/images/veneto-padova-final.webp",
    "href": "/guide/padova"
  },
  {
    "title": "Treviso",
    "subtitle": "Canali e vita elegante",
    "text": "Canali e vita elegante",
    "image": "/images/veneto-treviso-final.webp",
    "href": "/guide/treviso"
  },
  {
    "title": "Verona",
    "subtitle": "Arena, Adige e storia",
    "text": "Arena, Adige e storia",
    "image": "/images/veneto-verona-final.webp",
    "href": "/guide/verona"
  },
  {
    "title": "Colline del Prosecco",
    "subtitle": "Vigneti e borghi",
    "text": "Vigneti e borghi",
    "image": "/images/veneto-colline-prosecco-final.webp",
    "href": "/guide/colline-del-prosecco"
  },
  {
    "title": "Dolomiti",
    "subtitle": "Una giornata in montagna",
    "text": "Una giornata in montagna",
    "image": "/images/guide-dolomiti-final.webp",
    "href": "/guide/dolomiti"
  },
  {
    "title": "Isola della Certosa",
    "subtitle": "Verde e silenzio",
    "text": "Verde e silenzio",
    "image": "/images/guide-certosa-final.webp",
    "href": "/guide/certosa"
  },
  {
    "title": "Sant’Erasmo",
    "subtitle": "L’orto di Venezia e il Bacan",
    "text": "L’orto di Venezia e il Bacan",
    "image": "/images/guide-sant-erasmo-final.webp",
    "href": "/guide/sant-erasmo"
  }
];

export default function GuideIndex(){
  return <><Header/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="hover:text-gold">Home</Link><span>›</span><span className="text-gold">Guide</span>
        </nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Guide</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,11vw,4rem)] leading-[.98] tracking-[-0.02em] sm:text-6xl md:text-8xl">Guide per vivere Venezia e il Veneto al meglio.</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Itinerari, informazioni pratiche e consigli per organizzare il viaggio senza perdere tempo tra pagine sparse.</p>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {guides.map((guide)=><article key={guide.href} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="relative h-80">
              <Image src={guide.image} alt={guide.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
            </div>
            <div className="p-8">
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{guide.subtitle}</p>
              <h2 className="mt-3 font-serif text-5xl text-navy">{guide.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{guide.text}</p>
              <Link href={guide.href} className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy">Apri la guida</Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    
  </main><Footer/></>
}