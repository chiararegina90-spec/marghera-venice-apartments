import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'Esperienze e collaborazioni | Marghera Venice Apartments',
  description:'Servizi ed esperienze che vogliamo selezionare per gli ospiti: transfer, gondole, guide, cantine, biciclette e ristorazione.',
  alternates:{canonical:'/collaborazioni',languages:{'it-IT':'/collaborazioni','en-GB':'/en/experiences','de-DE':'/de/experiences','fr-FR':'/fr/experiences','es-ES':'/es/experiences','zh-CN':'/zh/experiences','x-default':'/collaborazioni'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const areas = [
  ['Transfer e NCC','Collegamenti con aeroporti, stazioni e destinazioni del Veneto.'],
  ['Guide turistiche','Visite private o di gruppo con professionisti abilitati.'],
  ['Gondole e barche','Esperienze in laguna da proporre con condizioni trasparenti.'],
  ['Biciclette','Noleggio e itinerari verso Lido, Pellestrina e terraferma.'],
  ['Cantine','Degustazioni nelle Colline del Prosecco, preferibilmente su prenotazione.'],
  ['Ristorazione','Locali selezionati a Marghera, Venezia e nelle destinazioni delle guide.'],
];

export default function Collaborazioni(){
  return <><Header/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">Esperienze e collaborazioni</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Selezione in costruzione</p>
        <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-none md:text-8xl">Esperienze affidabili, senza riempire il sito di pubblicità.</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Questa sezione è pronta ad accogliere collaborazioni reali. Non pubblicheremo partner o sconti finché non saranno concordati e verificati.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Categorie" title="Cosa vogliamo offrire agli ospiti" text="Pochi servizi selezionati, con informazioni chiare e collegamenti esterni aperti in una nuova scheda."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areas.map(([title,text])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-2xl text-gold">✦</div>
            <h2 className="mt-4 font-serif text-3xl text-navy">{title}</h2>
            <p className="mt-3 text-slate-600">{text}</p>
            <p className="mt-6 rounded-2xl bg-cream p-4 text-sm font-semibold text-navy">Partner in fase di selezione</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Criteri</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">Come scegliamo una collaborazione</h2>
          <div className="mt-7 space-y-4 text-lg text-slate-600">
            <p>Qualità reale del servizio e comunicazione chiara con l’ospite.</p>
            <p>Prezzi e condizioni indicati prima della prenotazione.</p>
            <p>Assistenza disponibile in caso di variazioni o problemi.</p>
            <p>Coerenza con una mobilità responsabile e con il territorio.</p>
          </div>
        </div>
        <aside className="rounded-[2rem] bg-navy p-8 text-white">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Sei un operatore locale?</p>
          <h2 className="mt-3 font-serif text-4xl">Proponi una collaborazione</h2>
          <p className="mt-5 text-white/75">La pagina è predisposta per inserire partner verificati, ma non dichiara accordi ancora inesistenti.</p>
          <a href="https://wa.me/393514462261" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-gold px-6 py-4 font-bold text-navy">Contattaci su WhatsApp ↗</a>
        </aside>
      </div>
    </section>
  </main><Footer/></>
}
