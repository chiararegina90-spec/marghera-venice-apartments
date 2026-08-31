import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata = {
  title:'Mostra del Cinema Venezia 2026: date, biglietti e Lido',
  description:'La 83ª Mostra del Cinema di Venezia si svolge dal 2 al 12 settembre 2026: scopri date, proiezioni aperte al pubblico, Venice Immersive e come raggiungere il Lido.',
  alternates:{canonical:'/journal/mostra-del-cinema',languages:{'it-IT':'/journal/mostra-del-cinema','en-GB':'/en/journal/mostra-del-cinema','de-DE':'/de/journal/mostra-del-cinema','fr-FR':'/fr/journal/mostra-del-cinema','es-ES':'/es/journal/mostra-del-cinema','zh-CN':'/zh/journal/mostra-del-cinema','x-default':'/journal/mostra-del-cinema'}},
  openGraph:{type:'article',images:['/images/journal-mostra-cinema.webp']},twitter:{card:'summary_large_image',images:['/images/journal-mostra-cinema.webp']}
};

const sections = [
  {title:'La 83ª Mostra: 2–12 settembre 2026',text:'Per undici giorni il Lido di Venezia torna al centro del cinema internazionale. Il cuore della manifestazione è nell’area del Palazzo del Cinema, del Palazzo del Casinò, della Sala Darsena e degli altri spazi della Biennale.'},
  {title:'Si può partecipare anche senza accredito',text:'Sì. La Mostra non è riservata soltanto a professionisti e invitati: molte proiezioni sono aperte al pubblico con biglietto acquistabile online. Alcune grandi première restano invece a invito, quindi conviene controllare sempre il programma ufficiale della giornata.'},
  {title:'Venice Immersive: il cinema oltre lo schermo',text:'Sull’Isola del Lazzaretto Vecchio, di fronte alla Riva di Corinto al Lido, Venice Immersive presenta 68 progetti XR provenienti da 26 Paesi: realtà virtuale e mista, mondi virtuali e installazioni immersive.'},
  {title:'Red carpet e momenti speciali',text:'Il 2 settembre George Clooney riceverà il Leone d’Oro alla carriera durante la cerimonia di apertura. Ospiti, arrivi e orari cambiano ogni giorno: se vuoi vivere l’atmosfera del red carpet, verifica il calendario ufficiale poco prima di partire.'},
  {title:'Come raggiungere il Lido da Marghera',text:'Da Marghera Venice Apartments consigliamo di raggiungere Venezia in autobus o treno e poi proseguire in vaporetto verso il Lido. Nei giorni più importanti della Mostra considera tempi più larghi per coincidenze, code e maggiore affluenza.'},
  {title:'Domenica 6 settembre: Venezia raddoppia',text:'La domenica della Mostra coincide con la Regata Storica sul Canal Grande. Se vuoi vivere entrambi gli eventi nella stessa giornata, pianifica con attenzione gli spostamenti e considera le modifiche alla navigazione previste durante la Regata.'}
];

export default function Article(){
  return <><Header/><main><article>
    <section className="relative min-h-[72vh] overflow-hidden pt-20">
      <Image src="/images/journal-mostra-cinema.webp" alt="Mostra Internazionale d’Arte Cinematografica di Venezia al Lido" fill priority sizes="100vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/20"/>
      <div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 lg:px-8"><div className="max-w-4xl text-white">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Mostra del Cinema 2026</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Arte & Cultura</p>
        <h1 className="mt-4 font-serif text-[clamp(3rem,8vw,6rem)] leading-none">Mostra del Cinema di Venezia 2026</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/80">Dal 2 al 12 settembre il Lido torna protagonista: proiezioni, red carpet, grandi anteprime e un’intera isola dedicata alle esperienze immersive.</p>
      </div></div>
    </section>

    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <p className="font-serif text-3xl leading-relaxed text-navy">La 83ª Mostra Internazionale d’Arte Cinematografica è organizzata dalla Biennale di Venezia e diretta da Alberto Barbera. Anche senza inviti esclusivi, è possibile vivere il Festival da visitatori: scegliendo una proiezione aperta al pubblico, passeggiando al Lido e respirando un’atmosfera che per undici giorni cambia completamente ritmo all’isola.</p>
      <div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="grid gap-5 md:grid-cols-[70px_1fr]"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div>
    </div></section>

    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8">
      <div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p><p className="mt-4 font-serif text-3xl">Scegli una proiezione che ti interessa davvero, lascia tempo per passeggiare al Lido e controlla programma e trasporti il giorno stesso: durante la Mostra le giornate più belle sono spesso quelle meno rigide.</p></div>
      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Informazioni ufficiali</p><p className="mt-3 text-slate-600">Programma, disponibilità dei biglietti e condizioni di accesso possono cambiare. Prima della visita consulta sempre La Biennale.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://www.labiennale.org/it/cinema/2026" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Biennale Cinema 2026 ↗</a><a href="https://www.labiennale.org/it/cinema/2026/programma-cinema-2026-pubblico" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy">Programma per il pubblico ↗</a></div></div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Settembre a Venezia</p><h2 className="mt-3 font-serif text-4xl text-navy">Potrebbe interessarti anche</h2><div className="mt-7 grid gap-4 md:grid-cols-2"><Link href="/journal/regata-storica-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Regata Storica 2026 <span className="text-gold">→</span></Link><Link href="/journal/homo-faber-2026" className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">Homo Faber 2026 <span className="text-gold">→</span></Link></div><div className="mt-10 text-center"><Link href="/journal" className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">Torna al Journal</Link></div></div></section>
  </article></main><Footer/></>
}
