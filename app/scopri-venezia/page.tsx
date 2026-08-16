import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Scopri Venezia | Marghera Venice Apartments',
  description: 'Come raggiungere Venezia da Marghera, itinerari, consigli locali, Venezia con bambini e con il cane, isole della laguna e collegamenti H24.',
  openGraph: {
    title: 'Scopri Venezia | Marghera Venice Apartments',
    description: 'Una guida pratica e autentica per vivere Venezia partendo da Marghera.',
    images: ['/images/scopri-venezia-michael-heise.webp'],
  },
  alternates:{canonical:'/scopri-venezia',languages:{'it-IT':'/scopri-venezia','en-GB':'/en/discover-venice','de-DE':'/de/discover-venice','fr-FR':'/fr/discover-venice','es-ES':'/es/discover-venice','zh-CN':'/zh/discover-venice','x-default':'/scopri-venezia'}}
};

const itinerary = [
  ['08:30','Piazza San Marco','Arriva presto, quando la luce è più bella e la città è ancora tranquilla.'],
  ['10:30','Palazzo Ducale','Dedica il tempo necessario alle sale e al Ponte dei Sospiri.'],
  ['12:30','Cicchetti','Allontanati di qualche calle dalle zone più turistiche.'],
  ['14:00','Rialto','Attraversa il ponte e visita il mercato nelle giornate di apertura.'],
  ['16:00','Castello e Acqua Alta','Scopri una Venezia più vissuta e meno prevedibile.'],
  ['18:30','Canal Grande al tramonto','Il vaporetto diventa uno dei punti panoramici più belli della città.'],
  ['21:00','Rientro senza fretta','I collegamenti notturni ti riportano a Marghera.'],
];

const tips = [
  ['Prima delle 8:30','San Marco e Rialto sono più piacevoli al mattino presto.'],
  ['Borraccia sempre con te','In città sono presenti numerose fontanelle pubbliche.'],
  ['Cicchetti lontano dalle piazze','Due o tre calli possono fare una grande differenza.'],
  ['Vaporetto al tramonto','Un modo semplice per vedere il Canal Grande da una prospettiva speciale.'],
  ['Cannaregio la sera','Atmosfera più rilassata e locali frequentati anche dai residenti.'],
  ['Scarpe comode','Ponti e pavimentazione richiedono calzature adatte.'],
];

const family = [
  ['Museo di Storia Naturale','Dinosauri, animali e un museo coinvolgente per bambini e adulti.'],
  ['Vaporetto','Per i più piccoli il viaggio sull’acqua è già parte dell’avventura.'],
  ['Libreria Acqua Alta','Una tappa curiosa, colorata e facile da ricordare.'],
  ['Campi e gelato','Programma pause frequenti e lascia spazio alla scoperta spontanea.'],
];

const pet = [
  ['Trasporto pubblico','Tieni sempre la museruola a portata di mano insieme al guinzaglio: sui mezzi pubblici può essere richiesto di farla indossare. Verifica sempre le regole ACTV aggiornate prima del viaggio.'],
  ['Passeggiate tranquille','Castello, Sant’Elena e alcune zone del Lido offrono ritmi più rilassati.'],
  ['Acqua e pause','Porta una ciotola pieghevole e pianifica soste durante i mesi caldi.'],
  ['Rientro in una casa Pet Friendly','Cuccia e ciotole sono disponibili gratuitamente nei nostri appartamenti.'],
];

const islands = [
  ['Murano','Vetro, fornaci e una passeggiata semplice da organizzare.','/images/murano-glass.webp','/guide/murano'],
  ['Burano','Case colorate, merletti e scorci fotografici.','/images/burano-canale.webp','/guide/burano'],
  ['Lido','Spiaggia, biciclette e un volto più rilassato della laguna.','/images/lido-venezia-spiaggia.webp','/guide/lido-di-venezia'],
];

export default function ScopriVenezia(){
  return <><Header/>
    <main data-build="isole-finali-1">
      <section className="relative min-h-[82vh] overflow-hidden pt-20">
        <Image src="/images/scopri-venezia-michael-heise.webp" alt="Bacino di San Marco con Palazzo Ducale e Campanile. Foto di Michael Heise su Unsplash" fill priority sizes="100vw" className="object-cover object-center"/>
        <div className="hero-overlay absolute inset-0"/>
        <p className="absolute bottom-4 right-5 z-20 text-[11px] text-white/90 drop-shadow-md">Foto di Michael Heise su Unsplash</p>
        <div className="relative mx-auto flex min-h-[calc(82vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/75">
              <Link href="/" className="hover:text-gold">Home</Link><span>›</span><span className="text-gold">Scopri Venezia</span>
            </nav>
            <p className="text-xs font-black uppercase tracking-[.25em] text-gold">La città, le isole, i nostri consigli</p>
            <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Scopri Venezia, con il tuo ritmo.</h1>
            <p className="mt-6 max-w-3xl text-xl text-white/85">Dai luoghi iconici agli angoli meno scontati: una guida pratica per vivere Venezia partendo da Marghera e rientrare quando vuoi.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#come-arrivare" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Come raggiungerla</a>
              <a href="#itinerario" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">Venezia in un giorno</a>
            </div>
          </div>
        </div>
      </section>

      <section id="come-arrivare" className="bg-cream pb-12 pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Da Marghera a Venezia" title="Più semplice di quanto immagini" text="Lascia l’auto nel parcheggio privato e raggiungi Venezia con collegamenti diurni e notturni."/>
          <div className="grid gap-5 lg:grid-cols-5">
            {[
              ['1','Parcheggia','Lascia l’auto presso il tuo appartamento.'],
              ['2','Sant’Antonio Municipio','Raggiungi la fermata vicina alle case.'],
              ['3','Bus diurno','Linee 6 e 6L nelle fasce diurne.'],
              ['4','Piazzale Roma','Arrivi direttamente all’ingresso di Venezia.'],
              ['5','Rientro H24','La linea N2 assicura il collegamento notturno.'],
            ].map(([n,title,text])=><article key={n} className="rounded-[2rem] bg-white p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gold font-black text-navy">{n}</div>
              <h2 className="mt-5 font-serif text-3xl text-navy">{title}</h2>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>)}
          </div>
          <div className="mt-8 rounded-[2rem] border-l-4 border-aqua bg-white p-7 shadow-soft">
            <p className="font-bold text-navy">Informazioni sui trasporti</p>
            <p className="mt-2 text-slate-600">Orari, frequenze e tariffe possono cambiare. Prima del viaggio verifica sempre le fonti ufficiali e acquista o valida correttamente il titolo di viaggio.</p><a href="https://actv.avmspa.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 font-bold text-white">Verifica orari e servizi ACTV ↗</a>
          </div>
        </div>
      </section>

      <section id="itinerario" className="pb-20 pt-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Venezia in un giorno" title="Un itinerario equilibrato, senza correre" text="Una proposta semplice per una prima visita, con tempo per osservare, fermarsi e cambiare programma."/>
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gold/40 md:block"/>
            <div className="space-y-5">
              {itinerary.map(([time,title,text])=><article key={time} className="relative grid gap-4 rounded-[2rem] bg-cream p-7 md:ml-16 md:grid-cols-[120px_1fr]">
                <div className="absolute -left-[53px] top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-gold shadow md:block"/>
                <div className="font-black tracking-[.12em] text-gold">{time}</div>
                <div><h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-2 text-slate-600">{text}</p></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="La nostra firma" title="Consigli che fanno davvero la differenza" text="Piccoli suggerimenti nati dall’esperienza quotidiana."/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tips.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white/10 p-8">
              <div className="text-2xl text-gold">✦</div>
              <h2 className="mt-4 font-serif text-3xl">{title}</h2>
              <p className="mt-3 text-white/70">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Orientarsi" title="Venezia e la laguna in una sola mappa" text="Una lettura illustrata dei principali punti di interesse e delle isole più conosciute."/>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-cream shadow-soft">
            <Image src="/images/mappa-venezia-finale.webp" alt="Mappa illustrata dei principali punti di interesse di Venezia, con Canal Grande, San Marco, Rialto, Murano, Burano e Lido" width={1408} height={1056} className="h-auto w-full"/>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[470px]">
            <Image src="/images/venezia-bambini-campo-nuova.webp" alt="Bambini che giocano a pallone in un campo veneziano" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center"/>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Venezia con bambini</p>
            <h2 className="mt-3 font-serif text-5xl text-navy">La città può diventare una grande avventura</h2>
            <p className="mt-6 text-lg text-slate-600">Alterna musei, vaporetto, pause e piccole scoperte. Un programma troppo rigido è raramente la scelta migliore con i più piccoli.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {family.map(([title,text])=><article key={title} className="rounded-3xl bg-white p-6 shadow-soft">
                <h3 className="font-serif text-2xl text-navy">{title}</h3><p className="mt-2 text-sm text-slate-600">{text}</p>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Pet Friendly" title="Venezia insieme al tuo cane" text="Con un po’ di organizzazione, anche il tuo compagno di viaggio può vivere una giornata piacevole in laguna."/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pet.map(([title,text])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7">
              <h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Le isole" title="La laguna oltre il centro storico" text="Murano, Burano e Lido possono diventare una gita dedicata o una tappa di un soggiorno più lungo."/>
          <div className="grid gap-6 lg:grid-cols-3">
            {islands.map(([title,text,image,href])=><article key={title} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <div className="relative h-64"><Image src={image} alt={title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover"/></div>
              <div className="p-7"><h2 className="font-serif text-4xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p><Link href={href} className="mt-5 inline-block font-bold text-gold">Scopri di più →</Link></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-gold py-20 text-navy">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p>
          <h2 className="mt-4 font-serif text-5xl">Se hai almeno tre giorni, non fermarti a Venezia.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">Il parcheggio privato ti permette di dedicare una giornata alla Riviera del Brenta, alle Colline del Prosecco o a una delle città d’arte del Veneto.</p>
          <Link href="/scopri-il-veneto" className="mt-8 inline-block rounded-full bg-navy px-8 py-4 font-bold text-white">Scopri il Veneto</Link>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Scegli la tua casa</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Venezia ti aspetta. Ora scegli dove rientrare.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Rossi Apartment per famiglie e gruppi fino a 7 ospiti; Dimora Castelli per coppie, piccole famiglie e chi cerca tranquillità.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
            <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    <Script id="tourist-attraction-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context':'https://schema.org',
      '@type':'TouristDestination',
      name:'Venezia',
      description:'Guida pratica a Venezia e alla laguna a cura di Marghera Venice Apartments.',
      touristType:['Famiglie','Coppie','Viaggiatori con animali domestici'],
      containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}
    })}}/>
  </>
}