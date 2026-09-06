import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';

export const metadata:Metadata = {
  title:'Mostra del Cinema Venezia 2026: programma, biglietti e Lido',
  description:'Guida aggiornata alla 83ª Mostra del Cinema di Venezia, dal 2 al 12 settembre 2026: programma pubblico, biglietti online, Venice Immersive, Leone d’Oro e come arrivare al Lido.',
  alternates:{canonical:'/journal/mostra-del-cinema',languages:{'it-IT':'/journal/mostra-del-cinema','en-GB':'/en/journal/mostra-del-cinema','de-DE':'/de/journal/mostra-del-cinema','fr-FR':'/fr/journal/mostra-del-cinema','es-ES':'/es/journal/mostra-del-cinema','zh-CN':'/zh/journal/mostra-del-cinema','x-default':'/journal/mostra-del-cinema'}},
  openGraph:{type:'article',images:['/images/journal-mostra-cinema.webp']},twitter:{card:'summary_large_image',images:['/images/journal-mostra-cinema.webp']}
};

const sections = [
  {title:'La 83ª Mostra è in corso fino al 12 settembre',text:'La Biennale Cinema 2026 si svolge al Lido dal 2 al 12 settembre. L’edizione è diretta da Alberto Barbera e la selezione ufficiale comprende Venezia 83, Venice Open – Fuori Concorso, Orizzonti, Venezia Spotlight, Biennale College Cinema, Venezia Classici e Venice Immersive.'},
  {title:'Il film d’apertura è Ink di Danny Boyle',text:'Ink, diretto da Danny Boyle e interpretato da Jack O’Connell, Guy Pearce e Claire Foy, ha aperto la Mostra il 2 settembre in prima mondiale e in concorso. È uno dei riferimenti principali dell’edizione 2026, insieme agli altri titoli della selezione Venezia 83.'},
  {title:'Biglietti per il pubblico: acquisto online',text:'Molte proiezioni sono accessibili anche senza accredito. I biglietti si acquistano esclusivamente online, fino a esaurimento posti. Nel listino 2026 l’intero va da 10 a 50 euro in base a sala e orario; sono previste riduzioni per under 26, over 65 e possessori di Biennale Card 2026. Il biglietto non garantisce l’accesso al red carpet e alcune serate possono avere regole specifiche.'},
  {title:'Venice Immersive: 68 progetti da 26 Paesi',text:'La sezione XR si svolge sull’Isola del Lazzaretto Vecchio, di fronte alla Riva di Corinto. L’edizione 2026 presenta 68 progetti provenienti da 26 Paesi tra realtà virtuale e mista, mondi virtuali e installazioni immersive. L’accesso alla sezione segue le condizioni indicate dalla Biennale per gli accreditati.'},
  {title:'Leoni d’Oro alla carriera e Masterclass',text:'George Clooney ha ricevuto il Leone d’Oro alla carriera durante la cerimonia di apertura del 2 settembre. Il secondo riconoscimento alla carriera dell’edizione 2026 è destinato a Ellen Burstyn e sarà consegnato lunedì 7 settembre. Il programma delle Masterclass alla Match Point Arena comprende George Clooney, Chloe Zhao con Lukasz Zal, Luc Besson, Luca Guadagnino ed Ellen Burstyn: l’accesso in presenza è riservato agli accreditati, mentre alcune sessioni sono disponibili anche in livestream sul sito della Biennale.'},
  {title:'Come arrivare al Lido da Marghera',text:'Da Marghera Venice Apartments la soluzione più semplice resta autobus o treno fino a Venezia e poi vaporetto verso Lido S.M.E. Nei giorni più affollati conviene lasciare margine per coincidenze, code e maggiore pressione sul trasporto pubblico.'},
  {title:'Domenica 6 settembre: Mostra e Regata Storica',text:'La domenica del 6 settembre concentra due grandi appuntamenti: la Mostra al Lido e la Regata Storica sul Canal Grande. Se vuoi vivere entrambi, controlla il programma della giornata e le eventuali modifiche alla navigazione prima di spostarti tra Venezia e il Lido.'}
];

export default function Article(){
  return <><Header/><main><article className="editorial-page">
    <EditorialHero
      image="/images/journal-mostra-cinema.webp"
      imageAlt="Mostra Internazionale d’Arte Cinematografica di Venezia al Lido"
      crumbs={[{label:'Home',href:'/'},{label:'Journal',href:'/journal'},{label:'Mostra del Cinema 2026'}]}
      eyebrow="Arte & Cultura • 2–12 settembre 2026"
      title="Mostra del Cinema di Venezia 2026"
      subtitle="La 83ª edizione è in corso al Lido: proiezioni per il pubblico, grandi anteprime, red carpet e un programma da controllare giorno per giorno."
      strongShade
    />

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="editorial-lead font-serif text-navy">La 83ª Mostra Internazionale d’Arte Cinematografica è organizzata dalla Biennale di Venezia e diretta da Alberto Barbera. Non serve essere addetti ai lavori per viverla: il programma pubblico comprende numerose proiezioni acquistabili online e il Lido, per undici giorni, cambia completamente ritmo.</p>
      <div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="editorial-number text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="editorial-h2 font-serif text-navy">{s.title}</h2><p className="editorial-body mt-3 text-slate-600">{s.text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[1.6rem] bg-gold p-7 text-navy sm:p-8"><p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p><p className="mt-4 font-serif text-3xl">Scegli prima una proiezione che ti interessa davvero, poi costruisci il resto della giornata intorno a quella. La Mostra si vive meglio lasciando spazio anche a una passeggiata sul Lido, invece di rincorrere ogni evento.</p></div>
      <div className="mt-7 rounded-[1.6rem] bg-white p-7 shadow-soft sm:p-8"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni ufficiali aggiornate</p><p className="mt-3 text-slate-600">Programma, disponibilità dei biglietti, prezzi e condizioni di accesso possono cambiare anche durante il Festival. Controlla sempre La Biennale prima di partire.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://www.labiennale.org/it/cinema/2026" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Biennale Cinema 2026 ↗</a><a href="https://www.labiennale.org/it/cinema/2026/programma-cinema-2026-pubblico" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Programma per il pubblico ↗</a><a href="https://www.labiennale.org/it/cinema/2026/informazioni" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Biglietti e tariffe ↗</a></div></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Settembre a Venezia</p><h2 className="editorial-h2 mt-3 font-serif text-navy">Potrebbe interessarti anche</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><Link href="/journal/regata-storica-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Regata Storica 2026 <span className="text-gold">→</span></Link><Link href="/journal/homo-faber-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Homo Faber 2026 <span className="text-gold">→</span></Link></div><div className="mt-9 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div></div></section>
  </article></main><Footer/></>;
}
