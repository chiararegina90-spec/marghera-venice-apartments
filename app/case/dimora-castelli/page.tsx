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
  description: 'Dimora Castelli a Marghera: circa 60 m², fino a 5 ospiti, giardino condominiale, parcheggio privato e collegamenti H24 per Venezia.',
  openGraph:{
    title:'Dimora Castelli | Fino a 5 ospiti vicino a Venezia',
    description:'Appartamento accogliente a Marghera con parcheggio privato, accesso al giardino condominiale e collegamenti H24 per Venezia.',
    images:[{url:'/images/dimora-page-hero.webp',alt:'Camera luminosa di Dimora Castelli a Marghera'}]
  },
  twitter:{card:'summary_large_image',title:'Dimora Castelli | Marghera Venice Apartments',description:'Fino a 5 ospiti, parcheggio privato e collegamenti H24 per Venezia.',images:['/images/dimora-page-hero.webp']},
  alternates:{canonical:'/case/dimora-castelli',languages:{'it-IT':'/case/dimora-castelli','en-GB':'/en/apartments/dimora-castelli','de-DE':'/de/apartments/dimora-castelli','fr-FR':'/fr/apartments/dimora-castelli','es-ES':'/es/apartments/dimora-castelli','zh-CN':'/zh/apartments/dimora-castelli','x-default':'/case/dimora-castelli'}}
};

const gallery = [
  ['/images/dimora-page-hero.webp', 'Camera matrimoniale luminosa di Dimora Castelli a Marghera'],
  ['/images/dimora-page-twin.webp', 'Seconda camera di Dimora Castelli con letti singoli'],
  ['/images/dimora-page-bathroom.webp', 'Bagno moderno di Dimora Castelli con doccia'],
  ['/images/dimora-page-kitchen.webp', 'Cucina completamente attrezzata di Dimora Castelli'],
  ['/images/dimora-page-sofabed.webp', 'Camera di Dimora Castelli con letto matrimoniale e divano letto'],
];

const galleryLayout = [
  'h-[360px] sm:h-[480px] lg:h-[616px] lg:col-span-7 lg:row-span-2',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-7',
  'h-[240px] sm:h-[280px] lg:h-[300px] lg:col-span-5',
];

const services = [
  'Circa 60 m²',
  'Fino a 5 ospiti',
  'Piano terra rialzato',
  'Cucina completa',
  'Due zone notte',
  'Wi-Fi',
  'Smart TV',
  'Zanzariere a tutte le finestre',
  'Aria condizionata centralizzata',
  'Pompa di calore',
  'Accesso al giardino condominiale',
  'Parcheggio privato',
  'Cuccia e ciotole',
  'Culla o lettino gratuito',
  'Biancheria inclusa',
];

const castelliReviews = [
  {name:'Semra',date:'marzo 2026',text:'Raggiungere la casa è stato facile e la fermata dell’autobus è vicinissima. Siamo riusciti a raggiungere il centro di Venezia in circa 15 minuti. Ci siamo sentiti come a casa e il parcheggio proprio all’ingresso è stato molto comodo.'},
  {name:'Marwa',date:'gennaio 2026',text:'La città è facilmente raggiungibile in autobus e in treno. L’appartamento è pulito, spazioso e i letti sono confortevoli. L’accoglienza è stata calorosa, con informazioni utili e piccole attenzioni da parte degli host.'},
  {name:'Lee',date:'aprile 2026',text:'Alessio e Chiara conoscono molto bene Venezia e ci hanno dato informazioni utili per orientarci. L’appartamento è molto spazioso e pulito, con tè e caffè per la colazione e un piacevole spazio con giardino.'},
  {name:'Lynda',date:'2026',text:'L’appartamento era comodo per raggiungere Venezia in autobus. È stato fantastico avere il parcheggio proprio di fronte all’unità. Al nostro arrivo il condizionatore era già acceso: un’attenzione molto apprezzata.'},
  {name:'Katharina',date:'agosto 2025',text:'Eravamo in quattro con un piccolo cane. L’appartamento era fornito di tutto il necessario, ristrutturato e con aria condizionata. In pochi minuti si raggiunge la fermata dell’autobus per Venezia. Ci torneremo.'}
];

export default function DimoraCastelli() {
  return <><Header/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/dimora-page-hero.webp" alt="Camera luminosa di Dimora Castelli a Marghera vicino a Venezia" fill priority sizes="100vw" className="object-cover"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/" className="hover:text-gold">Home</Link><span>›</span>
            <Link href="/#case" className="hover:text-gold">Le nostre case</Link><span>›</span>
            <span className="text-gold">Dimora Castelli</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Circa 60 m² · fino a 5 ospiti</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-8xl">Dimora Castelli</h1>
          <p className="mt-6 max-w-3xl text-xl text-white/85">Una casa silenziosa, immersa nel verde e pensata per adattarsi ai tuoi ritmi, a pochi minuti da Venezia.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/393514462261?text=Ciao%2C%20vorrei%20verificare%20la%20disponibilit%C3%A0%20di%20Dimora%20Castelli.%20Le%20mie%20date%20sono%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Verifica disponibilità</a>
            <Link href="/#case" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Torna alle case</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-soft"><div className="text-3xl font-black text-gold">60</div><h2 className="mt-3 font-serif text-2xl text-navy">Circa 60 m²</h2><p className="mt-2 text-sm text-slate-600">Spazi raccolti, luminosi e ben organizzati.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><CarIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Parcheggio privato</h2><p className="mt-2 text-sm text-slate-600">Comodo per chi viaggia in auto.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><MoonIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Venezia H24</h2><p className="mt-2 text-sm text-slate-600">Collegamenti diurni e notturni.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><PawIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Pet Friendly</h2><p className="mt-2 text-sm text-slate-600">Cuccia e ciotole disponibili.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><BabyIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Family Friendly</h2><p className="mt-2 text-sm text-slate-600">Culla o lettino con biancheria.</p></div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="La casa" title="La tranquillità di sentirsi a casa" text="Una casa luminosa e funzionale, ideale per coppie, piccole famiglie e soggiorni di lavoro."/>
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
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">La casa che si adatta ai tuoi ritmi</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Pratica, silenziosa e circondata dal verde</h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p><strong className="text-navy">Accesso semplice.</strong> La casa si trova al piano terra rialzato: una soluzione comoda per chi ha difficoltà motorie, viaggia con passeggini oppure porta valigie grandi e pesanti.</p>
            <p><strong className="text-navy">Finestre sul verde.</strong> L'edificio è circondato dalla vegetazione e tutte le finestre sono dotate di zanzariere, così puoi arieggiare gli ambienti anche nelle sere estive.</p>
            <p><strong className="text-navy">Clima sempre ideale.</strong> L'impianto centralizzato si controlla da un pratico pannello all'ingresso e funziona anche come pompa di calore.</p>
            <p><strong className="text-navy">Cucina completa.</strong> Uno spazio funzionale per una colazione tranquilla o una cena dopo una giornata trascorsa a Venezia.</p>
          </div>
          <div className="mt-10 rounded-3xl border-l-4 border-aqua bg-white p-7 shadow-soft">
            <p className="font-bold text-navy">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-2 text-slate-600">Approfitta del giardino condominiale sul retro per leggere qualche pagina, prendere aria o stendere il bucato durante i soggiorni più lunghi.</p>
          </div>
        </div>
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/dimora-page-kitchen-2.webp" alt="Cucina moderna e attrezzata di Dimora Castelli a Marghera" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Perché sceglierla" title="Comoda in ogni dettaglio" text="Dimora Castelli unisce tranquillità, praticità e una posizione strategica per Venezia e il Veneto."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Piano terra rialzato','Più semplice con valigie pesanti, passeggini o mobilità ridotta.'],
            ['Circondata dal verde','Finestre affacciate sulla vegetazione e atmosfera rilassante.'],
            ['Zanzariere','Presenti su tutte le finestre per arieggiare in tranquillità.'],
            ['Clima centralizzato','Aria condizionata e pompa di calore da un unico pannello.'],
            ['Giardino condominiale','Uno spazio sul retro per leggere, rilassarsi o stendere il bucato.'],
            ['Venezia H24','Collegamenti diurni e notturni per muoverti senza vincoli.'],
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
          <Image src="/images/dimora-castelli-giardino-reale.webp" alt="Giardino condominiale accessibile agli ospiti di Dimora Castelli" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center"/>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Un angolo verde</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Il giardino sul retro</h2>
          <p className="mt-6 text-lg text-white/75">L'accesso al giardino condominiale aggiunge un piccolo spazio di libertà alla casa: puoi fermarti a leggere un libro, prendere aria o utilizzare l'area per stendere i panni.</p>
          <p className="mt-5 text-white/75">Il verde che circonda l'edificio rende l'atmosfera più tranquilla e piacevole durante tutto l'anno.</p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Ideale per" title="Scegli la casa che somiglia al tuo viaggio" text="Dimora Castelli è particolarmente adatta a chi cerca semplicità, tranquillità e accesso comodo."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Coppie','Un rifugio raccolto e tranquillo dopo una giornata in città.'],
            ['Piccole famiglie','Spazi funzionali fino a 5 ospiti e servizi Family Friendly.'],
            ['Soggiorni di lavoro','Wi-Fi, cucina e una casa comoda per permanenze più lunghe.'],
            ['Chi cerca tranquillità','Verde, silenzio e ambienti ben organizzati.'],
          ].map(([title,copy])=><div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <h3 className="font-serif text-3xl text-navy">{title}</h3>
            <p className="mt-3 text-slate-600">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Una giornata tipo" title="Segui il tuo ritmo" text="Dimora Castelli rende semplice alternare Venezia, lavoro, relax e vita quotidiana."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['08:00','Colazione con calma nella cucina di casa.'],
            ['09:00','Partenza verso Venezia con i collegamenti H24.'],
            ['10:00','Musei, calli, isole o una giornata di lavoro.'],
            ['18:00','Rientro senza fretta e cena in casa o nei dintorni.'],
            ['21:00','Un libro, un po’ d’aria in giardino o relax sul divano.'],
            ['23:00','Riposo in una casa silenziosa, circondata dal verde.'],
          ].map(([time,copy])=><div key={time} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="text-sm font-black uppercase tracking-[.18em] text-gold">{time}</div>
            <p className="mt-3 font-serif text-2xl text-navy">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Servizi" title="Tutto ciò che serve per sentirsi a casa" text="Dotazioni pratiche e comfort pensati per soggiorni brevi o permanenze più lunghe."/>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(service=><div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-navy shadow-sm">✓ {service}</div>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[350px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/dimora-castelli-edificio-storia.webp" alt="Edificio che ospita Dimora Castelli nel centro di Marghera" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Un edificio con storia</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Nel cuore della Città Giardino</h2>
          <p className="mt-6 text-lg text-slate-600">Dimora Castelli si trova in una zona che racconta una parte importante della storia urbana di Marghera. All'inizio del Novecento il quartiere residenziale fu progettato secondo il modello della <strong>Città Giardino</strong>, ispirato alle Garden Cities inglesi: viali alberati, spazi verdi, villini e abitazioni pensate per tenere distinta la vita residenziale dalla nuova area industriale e portuale.</p>
          <p className="mt-5 text-slate-600">Via Castelli si inserì in questo disegno urbano, in posizione strategica tra il centro di Marghera, Mestre e le direttrici verso la Riviera del Brenta. Durante la Seconda Guerra Mondiale la vicinanza a Porto Marghera e alla rete ferroviaria rese l'intera zona particolarmente esposta ai bombardamenti.</p>
          <p className="mt-5 text-slate-600">Nel dopoguerra il quartiere fu ricostruito e trasformato insieme alla crescita della città. Oggi conserva tracce dell'idea originaria di Città Giardino, affiancate a servizi, negozi e collegamenti che rendono questa parte di Marghera una base pratica e autentica per scoprire Venezia e il Veneto.</p>
        </div>
      </div>
    </section>

    <section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Posizione strategica</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Venezia e il Veneto, senza rinunciare alla tranquillità</h2>
          <p className="mt-6 text-lg text-white/75">La fermata Sant'Antonio Municipio è vicina alla casa e offre collegamenti diurni e notturni con Venezia. La stazione di Venezia Mestre è raggiungibile a piedi dall'uscita Via Ulloa.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Autobus</p><h3 className="mt-2 font-serif text-3xl">Venezia H24</h3><p className="mt-2 text-white/70">Linee diurne e servizio notturno N2.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Treno</p><h3 className="mt-2 font-serif text-3xl">Mestre FS</h3><p className="mt-2 text-white/70">Circa 10 minuti a piedi dall'uscita Via Ulloa.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Auto</p><h3 className="mt-2 font-serif text-3xl">Veneto da esplorare</h3><p className="mt-2 text-white/70">Riviera del Brenta, Padova, Treviso e molto altro.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Assistenza</p><h3 className="mt-2 font-serif text-3xl">Contatto diretto</h3><p className="mt-2 text-white/70">WhatsApp prima e durante il soggiorno.</p></div>
        </div>
      </div>
    </section>

    <ReviewSection property="Dimora Castelli" reviews={castelliReviews}/>

    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Dimora Castelli</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Vuoi sapere se è disponibile?</h2>
        <p className="mt-5 text-lg text-slate-600">Scrivici le date e il numero di ospiti: ti risponderemo personalmente con disponibilità e informazioni per il soggiorno.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/393514462261?text=Ciao%2C%20vorrei%20verificare%20la%20disponibilit%C3%A0%20di%20Dimora%20Castelli.%20Le%20mie%20date%20sono%3A%20" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Verifica su WhatsApp</a>
          <a href="mailto:dimoracastelli22@gmail.com" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Invia un'email</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">CIN Dimora Castelli: IT027042C2YOUCUFM2</p>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Come raggiungerci</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Facile da raggiungere con qualsiasi mezzo</h2>
          <p className="mt-5 text-lg text-slate-600">Dimora Castelli dispone di parcheggio privato gratuito. Dalla stazione di Venezia Mestre puoi arrivare a piedi, con il tram T2 o in taxi; dagli aeroporti sono disponibili navette verso Mestre.</p>
          <Link href="/come-raggiungere-venezia" className="mt-7 inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Come arrivare: trasporti, aeroporti e Venezia →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {['🚗 Parcheggio privato gratuito','🚋 Tram T2 da Venezia Mestre','✈️ Navette aeroportuali verso Mestre'].map((x)=><div key={x} className="rounded-2xl bg-white p-5 font-semibold text-navy shadow-soft">{x}</div>)}
        </div>
      </div>
    </section>
  </main><Footer/></>
}
