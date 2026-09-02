import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PracticalGuideCards from '@/components/PracticalGuideCards';

export const metadata: Metadata = {
  title: 'Guide di viaggio | Marghera Venice Apartments',
  description: 'Scopri le guide di Marghera Venice Apartments dedicate a Venezia, alle isole della laguna e alle destinazioni del Veneto.',
  alternates:{canonical:'/guide',languages:{'it-IT':'/guide','en-GB':'/en/guide','de-DE':'/de/guide','fr-FR':'/fr/guide','es-ES':'/es/guide','zh-CN':'/zh/guide','x-default':'/guide'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const guides = [
  {
    "title": "Murano",
    "subtitle": "L’isola dove il vetro diventa arte",
    "text": "Fornaci, botteghe e tradizione vetraria: una delle isole più conosciute della laguna.",
    "image": "/images/murano-glass.webp",
    "alt": "Dettagli in vetro artistico colorato di Murano",
    "href": "/guide/murano"
  },
  {
    "title": "Burano",
    "subtitle": "Colori e merletto",
    "text": "Case colorate, piccole calli e una tradizione artigiana che rende l’isola immediatamente riconoscibile.",
    "image": "/images/burano-canale.webp",
    "alt": "Canale di Burano con case colorate e barche",
    "href": "/guide/burano"
  },
  {
    "title": "Lido di Venezia",
    "subtitle": "Spiagge, bici e Murazzi",
    "text": "Il lato balneare di Venezia, tra spiagge, biciclette, Murazzi ed eventi internazionali.",
    "image": "/images/lido-venezia-spiaggia.webp",
    "alt": "Spiaggia del Lido di Venezia affacciata sul mare Adriatico",
    "href": "/guide/lido-di-venezia"
  },
  {
    "title": "Veneto in bicicletta",
    "subtitle": "Cicloturismo tra laguna, colline e montagne",
    "text": "Itinerari per pedalare tra fiumi, vigneti, borghi, Dolomiti e grandi ciclovie del Veneto.",
    "image": "/images/guide-veneto-bicicletta.webp",
    "alt": "Cicloturisti in bicicletta tra paesaggi e vigneti del Veneto",
    "href": "/guide/veneto-in-bicicletta"
  },
  {
    "title": "Jesolo",
    "subtitle": "Spiaggia, mare e vita estiva",
    "text": "Una giornata sull’Adriatico, raggiungibile in auto o con ATVO da Venezia Mestre.",
    "image": "/images/guide-jesolo.webp",
    "alt": "Spiaggia di Jesolo con ombrelloni e cabine sul litorale Adriatico",
    "href": "/guide/jesolo"
  },
  {
    "title": "Pellestrina",
    "subtitle": "Laguna lenta e biciclette",
    "text": "Un’isola lunga e tranquilla da scoprire lentamente, tra borghi, laguna e percorsi in bicicletta.",
    "image": "/images/guide-pellestrina-final.webp",
    "alt": "Vista aerea dell’isola di Pellestrina tra laguna e mare Adriatico",
    "href": "/guide/pellestrina"
  },
  {
    "title": "Chioggia",
    "subtitle": "Canali, pesce e Sottomarina",
    "text": "Una città lagunare viva e autentica, tra canali, mercato del pesce e il litorale di Sottomarina.",
    "image": "/images/veneto-chioggia-pellestrina-final.webp",
    "alt": "Canale di Chioggia con ponti, barche e case affacciate sull’acqua",
    "href": "/guide/chioggia"
  },
  {
    "title": "Riviera del Brenta",
    "subtitle": "Ville e paesaggio fluviale",
    "text": "Ville venete, borghi e paesaggi lungo il Brenta, perfetti per una giornata fuori Venezia.",
    "image": "/images/veneto-riviera-brenta-final.webp",
    "alt": "Paesaggio della Riviera del Brenta con canale, ponti e case storiche",
    "href": "/guide/riviera-del-brenta"
  },
  {
    "title": "Padova",
    "subtitle": "Giotto, piazze e portici",
    "text": "Arte, piazze storiche e portici: una città d’arte facilmente abbinabile a un soggiorno veneziano.",
    "image": "/images/veneto-padova-final.webp",
    "alt": "Prato della Valle a Padova con canale, statue e palazzi storici",
    "href": "/guide/padova"
  },
  {
    "title": "Treviso",
    "subtitle": "Canali e vita elegante",
    "text": "Un centro storico raccolto, attraversato da canali e ideale per una passeggiata senza fretta.",
    "image": "/images/veneto-treviso-final.webp",
    "alt": "Canale nel centro storico di Treviso con portici e salici",
    "href": "/guide/treviso"
  },
  {
    "title": "Verona",
    "subtitle": "Arena, Adige e storia",
    "text": "Arena, centro storico e lungadige per una delle escursioni culturali più classiche del Veneto.",
    "image": "/images/veneto-verona-final.webp",
    "alt": "Arena di Verona e Piazza Bra in una giornata di sole",
    "href": "/guide/verona"
  },
  {
    "title": "Colline del Prosecco",
    "subtitle": "Vigneti e borghi",
    "text": "Paesaggi vitati, piccoli borghi e strade panoramiche nel cuore delle colline del Prosecco.",
    "image": "/images/veneto-colline-prosecco-final.webp",
    "alt": "Colline del Prosecco con vigneti, borghi e paesaggio rurale veneto",
    "href": "/guide/colline-del-prosecco"
  },
  {
    "title": "Dolomiti",
    "subtitle": "Una giornata in montagna",
    "text": "Panorami alpini e natura per aggiungere una giornata di montagna al viaggio in Veneto.",
    "image": "/images/guide-dolomiti-final.webp",
    "alt": "Panorama delle Dolomiti con cime rocciose, prati e case alpine",
    "href": "/guide/dolomiti"
  },
  {
    "title": "Isola della Certosa",
    "subtitle": "Verde e silenzio",
    "text": "Un angolo verde della laguna, vicino a Venezia ma lontano dal ritmo delle zone più affollate.",
    "image": "/images/guide-certosa-final.webp",
    "alt": "Vista aerea dell’Isola della Certosa nella laguna di Venezia",
    "href": "/guide/certosa"
  },
  {
    "title": "Sant’Erasmo",
    "subtitle": "L’orto di Venezia e il Bacan",
    "text": "Campi, laguna e tradizioni agricole nell’isola conosciuta come l’orto di Venezia.",
    "image": "/images/guide-sant-erasmo-final.webp",
    "alt": "Vista aerea di Sant’Erasmo con canali, campi e case nella laguna di Venezia",
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

    <PracticalGuideCards />
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {guides.map((guide)=><article key={guide.href} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="relative h-64 sm:h-72 lg:h-80">
              <Image src={guide.image} alt={guide.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{guide.subtitle}</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">{guide.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{guide.text}</p>
              <Link href={guide.href} className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy">Apri la guida</Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    
  </main><Footer/></>
}
