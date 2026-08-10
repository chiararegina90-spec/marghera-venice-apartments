import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ReviewSection from '@/components/ReviewSection';
import {CarIcon, MoonIcon, PawIcon, BabyIcon} from '@/components/icons';

export const metadata:Metadata={
  title:'Rossi Apartment | Marghera Venice Apartments',
  description:'Rossi Apartment a Marghera: fino a 7 ospiti, parcheggio privato, collegamenti H24 per Venezia, Pet Friendly e Family Friendly.',
};

const gallery = [
  ['/images/rossi-page-hero.webp','Soggiorno di Rossi Apartment'],
  ['/images/rossi-page-kitchen.webp','Cucina completa'],
  ['/images/rossi-page-bedroom-1.webp','Camera matrimoniale'],
  ['/images/rossi-page-bedroom-2.webp','Seconda camera'],
  ['/images/rossi-page-extra-bed.webp','Zona notte aggiuntiva'],
];

const services = [
  'Fino a 7 ospiti','Due camere','Cucina ampia e attrezzata','Smart TV da 55 pollici',
  'Wi-Fi ad alta velocità','Aria condizionata indipendente','Lavatrice','Biancheria professionale',
  'Terrazza arredata','Area fumatori esterna','Oltre 100 m²','Parcheggio privato','Cuccia e ciotole','Culla o lettino gratuito'
];

const rossiReviews = [
  {name:'Sarah',date:'2026',text:'L’appartamento era spazioso, pulitissimo e molto ben attrezzato. Abbiamo apprezzato il parcheggio recintato e la fermata dell’autobus a pochi minuti a piedi. Alessio e Chiara sono stati cordiali, accoglienti e sempre disponibili.'},
  {name:'Giuseppe',date:'luglio 2025',text:'Abbiamo trascorso un soggiorno fantastico. La fermata dell’autobus per Venezia e il supermercato sono dietro l’angolo. L’appartamento è dotato di tutto il necessario ed è ben attrezzato.'},
  {name:'P (Som)',date:'ottobre 2025',text:'Appartamento incantevole e spazioso, soprattutto per chi dispone di un’auto. Raggiungere Venezia è stato molto facile in autobus. Chiara è stata molto disponibile e ci ha accolto di persona.'},
  {name:'Ana',date:'giugno 2026',text:'L’ospitalità e il calore con cui ci hanno accolto sono stati il punto chiave del nostro viaggio. L’alloggio è perfetto e ricco di informazioni utili per visitare i luoghi d’interesse. Ci torneremmo senza dubbio.'},
  {name:'Summer',date:'aprile 2026',text:'Appartamento vicino alla stazione, ampio e confortevole. Abbiamo ricevuto molti consigli su come muoverci a Venezia, dove mangiare e come acquistare i biglietti. Lo sceglierei di nuovo.'}
];

export default function RossiApartment(){
  return <><Header/><main>
    <section className="relative min-h-[78vh] overflow-hidden pt-20">
      <Image src="/images/rossi-page-hero.webp" alt="Rossi Apartment" fill priority className="object-cover"/>
      <div className="hero-overlay absolute inset-0"/>
      <div className="relative mx-auto flex min-h-[calc(78vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/" className="hover:text-gold">Home</Link><span>›</span>
            <Link href="/#case" className="hover:text-gold">Le nostre case</Link><span>›</span>
            <span className="text-gold">Rossi Apartment</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">Fino a 7 ospiti · Marghera</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-8xl">Rossi Apartment</h1>
          <p className="mt-6 max-w-2xl text-xl text-white/85">Oltre 100 m² di comfort per vivere Venezia in totale libertà, con spazi ampi pensati per famiglie e gruppi fino a 7 ospiti.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/393514462261" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Richiedi disponibilità</a>
            <Link href="/#case" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Torna alle case</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-soft"><div className="text-3xl font-black text-gold">100+</div><h2 className="mt-3 font-serif text-2xl text-navy">Oltre 100 m²</h2><p className="mt-2 text-sm text-slate-600">Spazi ampi e luminosi per famiglie e gruppi.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><CarIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Parcheggio privato</h2><p className="mt-2 text-sm text-slate-600">Riservato all'interno del giardino condominiale.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><MoonIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Venezia H24</h2><p className="mt-2 text-sm text-slate-600">Collegamenti diurni e notturni per rientrare quando vuoi.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><PawIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Pet Friendly</h2><p className="mt-2 text-sm text-slate-600">Cuccia e ciotole disponibili gratuitamente.</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-soft"><BabyIcon/><h2 className="mt-3 font-serif text-2xl text-navy">Family Friendly</h2><p className="mt-2 text-sm text-slate-600">Culla o lettino con biancheria, su richiesta.</p></div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="La casa" title="Ampia, luminosa, pensata per essere vissuta" text="Rossi Apartment accoglie famiglie e gruppi con ambienti comodi, una grande cucina e tutti i servizi necessari per un soggiorno senza pensieri."/>
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
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Sentiti a casa</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Ogni ambiente ha una funzione precisa</h2>
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p><strong className="text-navy">Cucina ampia e abitabile.</strong> Pentole, stoviglie, lavastoviglie, forno, microonde, bollitore, tostapane e macchina Nespresso.</p>
            <p><strong className="text-navy">Soggiorno per stare insieme.</strong> Grande divano, tavolo allungabile e Smart TV da 55 pollici con servizi di streaming.</p>
            <p><strong className="text-navy">Due camere confortevoli.</strong> Armadi capienti, Smart TV dedicate e accesso alla terrazza arredata.</p>
            <p><strong className="text-navy">Terrazza arredata.</strong> Uno spazio esterno per rilassarsi, prendere un caffè o fumare: è l’area fumatori dedicata della casa.</p>
            <p><strong className="text-navy">Comfort quotidiano.</strong> Aria condizionata in ogni stanza, lavatrice, ferro da stiro, asciugamani e biancheria lavati professionalmente.</p>
          </div>
          <div className="mt-10 rounded-3xl border-l-4 border-aqua bg-white p-7 shadow-soft">
            <p className="font-bold text-navy">Il consiglio di Marghera Venice Apartments</p>
            <p className="mt-2 text-slate-600">Lascia l'auto nel parcheggio privato, raggiungi Venezia con i mezzi pubblici e rientra con calma: i collegamenti sono disponibili anche nelle ore notturne.</p>
          </div>
        </div>
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/rossi-page-kitchen-2.webp" alt="Cucina di Rossi Apartment" fill className="object-cover"/>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Servizi" title="Tutto ciò che serve, già a disposizione" text="Una dotazione completa per soggiorni brevi, vacanze in famiglia e permanenze più lunghe."/>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(service=><div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-navy shadow-sm">✓ {service}</div>)}
        </div>
      </div>
    </section>


    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Perché sceglierlo" title="Più spazio, più libertà, più comfort" text="Rossi Apartment è pensato per chi vuole vivere Venezia senza rinunciare a una vera casa."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Oltre 100 m²','Spazi davvero ampi per famiglie e gruppi fino a 7 persone.'],
            ['Parcheggio privato','Lascia l’auto in sicurezza e raggiungi Venezia con i mezzi.'],
            ['Venezia H24','Collegamenti diurni e notturni per muoverti senza vincoli.'],
            ['Cucina completa','Colazioni, pranzi e cene insieme come a casa.'],
            ['Terrazza arredata','Relax all’aperto e area fumatori dedicata.'],
            ['Pet & Family Friendly','Cuccia, ciotole, culla e lettino disponibili su richiesta.'],
          ].map(([title,copy])=><div key={title} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <h3 className="font-serif text-3xl text-navy">{title}</h3>
            <p className="mt-3 text-slate-600">{copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Una giornata tipo" title="Immagina il tuo soggiorno" text="Dalla colazione al rientro serale, Rossi Apartment accompagna ogni momento della giornata."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['08:00','Colazione nella grande cucina prima di partire.'],
            ['09:00','Bus o treno verso Venezia.'],
            ['10:00','Una giornata tra calli, canali e musei.'],
            ['18:00','Aperitivo e rientro senza fretta.'],
            ['21:00','Relax in terrazza, anche per gli ospiti fumatori.'],
            ['23:00','Riposo in camere silenziose e confortevoli.'],
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
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Posizione strategica</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Venezia quando vuoi, il Veneto quando ti va</h2>
          <p className="mt-6 text-lg text-white/75">La fermata Sant'Antonio Municipio è vicina all'appartamento. Le linee diurne e notturne collegano Marghera a Venezia 24 ore su 24; la stazione di Venezia Mestre è raggiungibile a piedi dall'uscita Via Ulloa.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Autobus</p><h3 className="mt-2 font-serif text-3xl">Venezia H24</h3><p className="mt-2 text-white/70">Linee 6, 6L e servizio notturno N2.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Treno</p><h3 className="mt-2 font-serif text-3xl">Mestre FS</h3><p className="mt-2 text-white/70">Circa 10 minuti a piedi dall'uscita Via Ulloa.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Auto</p><h3 className="mt-2 font-serif text-3xl">Riviera del Brenta</h3><p className="mt-2 text-white/70">Ville venete e itinerari a pochi minuti.</p></div>
          <div className="rounded-3xl bg-white/10 p-6"><p className="text-gold">Assistenza</p><h3 className="mt-2 font-serif text-3xl">Contatto diretto</h3><p className="mt-2 text-white/70">WhatsApp prima e durante il soggiorno.</p></div>
        </div>
      </div>
    </section>

    <ReviewSection property="Rossi Apartment" reviews={rossiReviews}/>

    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Rossi Apartment</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Vuoi sapere se è disponibile?</h2>
        <p className="mt-5 text-lg text-slate-600">Scrivici direttamente: nessuna prenotazione automatica, riceverai una risposta personale.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/393514462261" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">WhatsApp</a>
          <a href="mailto:rossiapartmentvenice@gmail.com" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Invia un'email</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">CIN Rossi Apartment: IT027042C2EDHHAM7Z</p>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Come raggiungerci</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-navy">Comodo in auto, treno o aereo</h2>
          <p className="mt-5 text-lg text-slate-600">Rossi Apartment dispone di parcheggio privato. Dalla stazione di Venezia Mestre puoi arrivare a piedi, in tram T2 o in taxi; dagli aeroporti puoi raggiungere Mestre con taxi o navetta.</p>
          <Link href="/come-raggiungere-venezia" className="mt-7 inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Come arrivare: trasporti, aeroporti e Venezia →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {['🚗 Parcheggio privato','🚆 Venezia Mestre nelle vicinanze','✈️ Collegamenti dagli aeroporti'].map((x)=><div key={x} className="rounded-2xl bg-white p-5 font-semibold text-navy shadow-soft">{x}</div>)}
        </div>
      </div>
    </section>
  </main><Footer/></>
}