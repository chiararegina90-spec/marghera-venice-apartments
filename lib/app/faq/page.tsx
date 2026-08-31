import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'FAQ | Marghera Venice Apartments',
  description:'Check-in, check-out, self check-in, deposito bagagli, parcheggio, bambini, animali e informazioni sul soggiorno.',
  alternates:{canonical:'/faq',languages:{'it-IT':'/faq','en-GB':'/en/faq','de-DE':'/de/faq','fr-FR':'/fr/faq','es-ES':'/es/faq','zh-CN':'/zh/faq','x-default':'/faq'}},
openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const groups = [
  {
    title:'Arrivo e check-in',
    items:[
      ['A che ora è possibile effettuare il check-in?','L’orario viene concordato prima dell’arrivo. Chiediamo agli ospiti di comunicarci l’orario previsto e di aggiornarci circa un’ora prima.'],
      ['È possibile effettuare il check-in in piena notte?','Dipende dall’appartamento, dall’orario e dagli accordi presi prima dell’arrivo. Contattaci prima di prenotare se prevedi un arrivo molto tardivo.'],
      ['È disponibile il self check-in?','Il self check-in con tastiera elettronica è disponibile solo a Dimora Castelli quando concordato. Rossi Apartment prevede normalmente l’accoglienza di persona.'],
      ['È possibile richiedere un check-in anticipato?','Possiamo valutarlo in base alla partenza degli ospiti precedenti e ai tempi di pulizia. Non può essere garantito in anticipo.'],
    ]
  },
  {
    title:'Partenza e bagagli',
    items:[
      ['A che ora è il check-out?','Il check-out è previsto entro le 10:00, salvo accordi diversi.'],
      ['È possibile richiedere un check-out posticipato?','Possiamo valutarlo in base agli arrivi successivi e all’organizzazione delle pulizie.'],
      ['È disponibile il deposito bagagli?','Quando l’organizzazione lo consente possiamo offrire un servizio di deposito bagagli prima del check-in o dopo il check-out. Contattaci per verificarne la disponibilità.'],
      ['Posso lasciare l’auto dopo il check-out per trascorrere un’altra giornata a Venezia?','Dipende dagli arrivi successivi e dalla disponibilità del parcheggio. Chiedilo prima della partenza: faremo il possibile, ma non possiamo garantirlo sempre.'],
    ]
  },
  {
    title:'Parcheggio e mobilità',
    items:[
      ['Il parcheggio è gratuito?','Sì. Entrambi gli appartamenti dispongono di parcheggio privato gratuito, secondo le indicazioni specifiche della struttura.'],
      ['È necessario usare l’auto per visitare Venezia?','No. Consigliamo di lasciare l’auto parcheggiata e usare autobus o treno.'],
      ['Dove trovo le informazioni su autobus, treni e biglietti?','Nella pagina “Come arrivare” trovi indicazioni dagli aeroporti, dalla stazione e verso Venezia.'],
    ]
  },
  {
    title:'Famiglie e animali',
    items:[
      ['Fornite culla o lettino?','Sì. Culla o lettino con biancheria sono disponibili gratuitamente su richiesta in entrambi gli appartamenti.'],
      ['Gli appartamenti sono Pet Friendly?','Sì. Possiamo mettere a disposizione cuccia e ciotole. Comunica la presenza dell’animale prima dell’arrivo.'],
      ['Ci sono costi aggiuntivi per bambini o animali?','Eventuali condizioni vengono comunicate chiaramente prima della prenotazione.'],
    ]
  },
  {
    title:'Documenti e soggiorno',
    items:[
      ['Servono i documenti di tutti gli ospiti?','Sì. La normativa italiana richiede la registrazione di tutte le persone che soggiornano, compresi i minori.'],
      ['Come viene gestita la tassa di soggiorno?','La tassa è applicata secondo le regole del Comune di Venezia in vigore al momento del soggiorno. Importi ed esenzioni possono cambiare.'],
      ['Posso modificare la disposizione dei letti?','Quando possibile chiediamo agli ospiti di comunicarci prima dell’arrivo la configurazione desiderata.'],
    ]
  }
];

export default function FAQ(){
  return <><Header/><main>
    <section className="bg-navy px-5 pb-20 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">FAQ</span></nav>
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Prima e durante il soggiorno</p>
        <h1 className="mt-4 max-w-5xl font-serif text-6xl leading-none md:text-8xl">Domande frequenti</h1>
        <p className="mt-6 max-w-3xl text-xl text-white/75">Check-in, check-out, deposito bagagli, parcheggio, bambini, animali e tutte le informazioni operative.</p>
      </div>
    </section>

    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {groups.map((group)=><section key={group.title} className="mb-16">
          <SectionTitle eyebrow="FAQ" title={group.title} text="Le richieste soggette a disponibilità devono essere concordate direttamente con noi."/>
          <div className="space-y-4">
            {group.items.map(([q,a])=><details key={q} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span className="min-w-0">{q}</span><span className="shrink-0 text-gold transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-4 text-slate-600">{a}</p>
            </details>)}
          </div>
        </section>)}

        <div className="rounded-[2rem] bg-gold p-8 text-center text-navy">
          <h2 className="font-serif text-4xl">Non hai trovato la risposta?</h2>
          <p className="mx-auto mt-4 max-w-2xl">Scrivici prima della prenotazione: preferiamo chiarire ogni dettaglio in anticipo.</p>
          <a href="https://wa.me/393514462261?text=Ciao%2C%20avrei%20una%20domanda%20sul%20soggiorno%20presso%20Marghera%20Venice%20Apartments.%20" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-navy px-7 py-4 font-bold text-white">Contattaci su WhatsApp ↗</a>
        </div>
      </div>
    </section>
  </main><Footer/></>
}
