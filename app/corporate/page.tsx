import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata:Metadata={
  title:'Alloggi per aziende e trasfertisti a Marghera e Mestre | MVA',
  description:'Appartamenti arredati per aziende, tecnici, operai e lavoratori in trasferta a Marghera e Mestre. Canone mensile, utenze incluse entro soglia, parcheggio privato e letti configurabili.',
  keywords:[
    'alloggi per operai in trasferta Marghera',
    'appartamenti per aziende Mestre',
    'affitti temporanei lavoratori Venezia',
    'alloggi trasfertisti Mestre',
    'alloggi trasfertisti Marghera',
    'foresteria aziendale Mestre',
    'appartamenti uso foresteria Marghera',
    'corporate housing Venice',
    'worker accommodation Marghera',
    'employee accommodation Venice',
    'contractor accommodation Mestre',
    'business apartments Venice'
  ],
  alternates:{canonical:'/corporate'},
  openGraph:{
    title:'Alloggi per aziende e trasfertisti a Marghera e Mestre',
    description:'Due appartamenti arredati per soggiorni di lavoro: fino a 4 persone, parcheggio privato, Wi-Fi, cucina, lavatrice e utenze incluse entro soglia concordata.',
    images:[{url:'/images/rossi-page-hero.webp',alt:'Rossi Apartment a Marghera, soluzione per aziende e trasfertisti'}],
    type:'website'
  },
  twitter:{
    card:'summary_large_image',
    title:'Corporate housing a Marghera e Mestre | MVA',
    description:'Appartamenti arredati per dipendenti, tecnici e lavoratori in trasferta.',
    images:['/images/rossi-page-hero.webp']
  }
};

const emailHref='mailto:info@margheraveniceapartments.com?subject=Richiesta%20preventivo%20aziendale%20-%20MVA&body=Buongiorno%2C%0A%0Avorrei%20ricevere%20un%20preventivo%20per%20un%20soggiorno%20aziendale.%0A%0APeriodo%3A%20%0ANumero%20di%20persone%3A%20%0ATipologia%20di%20veicolo%3A%20%0AConfigurazione%20letti%20richiesta%3A%20%0A%0AGrazie.';
const whatsappHref='https://wa.me/393514462261?text=Buongiorno%2C%20vorrei%20ricevere%20un%20preventivo%20aziendale%20per%20un%20soggiorno%20a%20Marghera.%0APeriodo%3A%20%0ANumero%20di%20persone%3A%20%0AVeicolo%3A%20%0AConfigurazione%20letti%3A%20';

function CheckIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-none stroke-current stroke-[2.2]"><path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const included=[
  'Wi-Fi veloce',
  'Cucina completamente attrezzata',
  'Lavatrice',
  'Aria condizionata e pompa di calore',
  'Biancheria e dotazioni essenziali',
  'Parcheggio privato riservato',
  'Smart TV',
  'Soggiorno arredato e pronto all’uso'
];

const faq=[
  {
    q:'Per chi sono pensati gli appartamenti corporate?',
    a:'Per aziende che devono ospitare dipendenti, tecnici, consulenti, operai, manutentori o squadre di lavoro per periodi temporanei a Marghera, Mestre, Porto Marghera e Venezia.'
  },
  {
    q:'Le utenze sono comprese nel canone?',
    a:'Sì. Energia elettrica, acqua e riscaldamento sono compresi fino a una soglia di consumo concordata. Eventuali eccedenze vengono conteggiate separatamente sulla base dei costi effettivi.'
  },
  {
    q:'Quante persone possono soggiornare?',
    a:'La proposta corporate standard è studiata per un massimo di 4 persone in entrambi gli appartamenti, così da garantire spazi adeguati anche durante soggiorni prolungati.'
  },
  {
    q:'I letti possono essere separati?',
    a:'Sì, con configurazioni diverse a seconda dell’appartamento. Dimora Castelli può essere preparata con quattro letti singoli. Rossi Apartment offre una camera matrimoniale fissa, una seconda camera configurabile come matrimoniale o due singoli e due letti singoli in soggiorno.'
  },
  {
    q:'È disponibile il parcheggio?',
    a:'Sì. Rossi Apartment dispone di un posto privato adatto a un’auto o a un furgoncino. Dimora Castelli dispone di parcheggio privato adatto a un’auto oppure, in base alle dimensioni, a due auto piccole; l’accesso non è adatto ai furgoni.'
  },
  {
    q:'Come si richiede un preventivo?',
    a:'È sufficiente indicare periodo, numero di persone, tipologia di veicolo e configurazione letti desiderata. Prepariamo una proposta aziendale in base alla disponibilità.'
  }
];

export default function CorporatePage(){
  const serviceJsonLd={
    '@context':'https://schema.org',
    '@type':'Service',
    name:'Alloggi per aziende e trasfertisti a Marghera e Mestre',
    serviceType:'Corporate housing e alloggi temporanei per lavoratori',
    provider:{'@type':'Organization',name:'Marghera Venice Apartments',url:'https://www.margheraveniceapartments.com'},
    areaServed:[
      {'@type':'Place',name:'Marghera'},
      {'@type':'Place',name:'Mestre'},
      {'@type':'Place',name:'Venezia'},
      {'@type':'Place',name:'Porto Marghera'}
    ],
    url:'https://www.margheraveniceapartments.com/corporate',
    description:'Appartamenti arredati per aziende, dipendenti, tecnici, operai e lavoratori in trasferta, con parcheggio privato e utenze incluse entro soglia concordata.'
  };
  const faqJsonLd={
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity:faq.map(item=>({
      '@type':'Question',
      name:item.q,
      acceptedAnswer:{'@type':'Answer',text:item.a}
    }))
  };
  const breadcrumbJsonLd={
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:'https://www.margheraveniceapartments.com/'},
      {'@type':'ListItem',position:2,name:'Corporate housing',item:'https://www.margheraveniceapartments.com/corporate'}
    ]
  };

  return <><Header/><main className="overflow-hidden">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}}/>

    <section className="relative min-h-[82vh] overflow-hidden pt-20">
      <Image src="/images/rossi-page-hero.webp" alt="Rossi Apartment a Marghera, appartamento arredato per aziende e lavoratori in trasferta" fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/35"/>
      <div className="relative mx-auto flex min-h-[calc(82vh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="max-w-4xl text-white">
          <p className="text-xs font-black uppercase tracking-[.24em] text-gold">Marghera Venice Apartments · Corporate stays</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[.98]">Alloggi per aziende e lavoratori in trasferta a Marghera</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">Appartamenti completamente arredati per dipendenti, tecnici, operai e squadre di lavoro che cercano una sistemazione temporanea a Marghera, Mestre, Porto Marghera o Venezia.</p>
          <div className="mt-8 flex flex-wrap gap-2.5 text-sm font-bold">
            {['Parcheggio privato','Wi-Fi','Utenze incluse entro soglia','Fino a 4 persone','Letti configurabili'].map(x=><span key={x} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">{x}</span>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#preventivo" className="rounded-full bg-gold px-7 py-4 font-bold text-navy transition hover:-translate-y-1">Richiedi un preventivo aziendale</a>
            <a href="#appartamenti" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-navy">Confronta gli appartamenti</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Corporate housing · Mestre e Venezia</p>
          <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,4rem)] leading-tight text-navy">Una casa pronta, senza organizzare ogni dettaglio da zero.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Quando un’azienda deve ospitare personale in trasferta per settimane o mesi, la sistemazione deve essere semplice da gestire e comoda da vivere. MVA offre due appartamenti arredati a Marghera con cucina, lavatrice, Wi-Fi, climatizzazione e parcheggio privato.</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">La proposta corporate è pensata soprattutto per soggiorni medio-lunghi nel periodo <strong className="text-navy">da novembre a fine marzo</strong>, con preventivo personalizzato in base a durata, numero di ospiti e necessità operative.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {included.map(x=><div key={x} className="flex items-start gap-3 rounded-2xl bg-white p-4 font-semibold text-navy shadow-sm"><span className="mt-0.5 text-gold"><CheckIcon/></span><span>{x}</span></div>)}
        </div>
      </div>
    </section>

    <section id="appartamenti" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Due soluzioni corporate</p>
          <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,4rem)] leading-tight text-navy">Appartamenti per aziende a Mestre e Marghera</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Entrambe le soluzioni sono proposte per un massimo di 4 persone nei soggiorni aziendali prolungati, privilegiando comfort, privacy e una gestione semplice per l’azienda.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="relative aspect-[16/10]">
              <Image src="/images/rossi-card.webp" alt="Rossi Apartment a Marghera" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
              <div className="absolute left-5 top-5 rounded-full bg-navy px-4 py-2 text-sm font-black text-white">ROSSI APARTMENT</div>
            </div>
            <div className="p-7 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div><p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">Canone corporate mensile</p><p className="mt-2 font-serif text-5xl text-navy">€1.650</p></div>
                <p className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-navy">fino a 4 persone</p>
              </div>
              <p className="mt-6 leading-7 text-slate-600">Utenze di energia elettrica, acqua e riscaldamento comprese fino a una soglia di consumo prestabilita. Eventuali consumi eccedenti vengono conteggiati separatamente sulla base dei costi effettivi.</p>

              <div className="mt-7 border-t border-slate-200 pt-7">
                <h3 className="font-serif text-2xl text-navy">Configurazione letti</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex gap-3"><span className="text-gold">●</span><span>Camera 1: letto matrimoniale fisso.</span></li>
                  <li className="flex gap-3"><span className="text-gold">●</span><span>Camera 2: matrimoniale oppure 2 letti singoli.</span></li>
                  <li className="flex gap-3"><span className="text-gold">●</span><span>Soggiorno: 2 letti singoli, utilizzabili quando serve separare maggiormente le postazioni letto.</span></li>
                </ul>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['2 camere + soggiorno','Cucina abitabile','Lavatrice e lavastoviglie','Aria condizionata / pompa di calore','Terrazza con area fumatori','Smart TV e Wi-Fi'].map(x=><div key={x} className="flex gap-2 text-sm font-semibold text-navy"><span className="text-gold"><CheckIcon/></span>{x}</div>)}
              </div>

              <div className="mt-7 rounded-2xl bg-cream p-5">
                <p className="font-bold text-navy">Parcheggio privato incluso</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">1 posto riservato, adatto a un’auto oppure a un furgoncino.</p>
              </div>
              <Link href="/case/rossi-apartment" className="mt-6 inline-flex font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">Vedi Rossi Apartment →</Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="relative aspect-[16/10]">
              <Image src="/images/castelli-card.webp" alt="Dimora Castelli a Marghera" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"/>
              <div className="absolute left-5 top-5 rounded-full bg-navy px-4 py-2 text-sm font-black text-white">DIMORA CASTELLI</div>
            </div>
            <div className="p-7 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div><p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">Canone corporate mensile</p><p className="mt-2 font-serif text-5xl text-navy">€1.450</p></div>
                <p className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-navy">massimo 4 persone</p>
              </div>
              <p className="mt-6 leading-7 text-slate-600">Utenze di energia elettrica, acqua e riscaldamento comprese fino a una soglia di consumo prestabilita. Eventuali consumi eccedenti vengono conteggiati separatamente sulla base dei costi effettivi.</p>

              <div className="mt-7 border-t border-slate-200 pt-7">
                <h3 className="font-serif text-2xl text-navy">Configurazione letti modulare</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex gap-3"><span className="text-gold">●</span><span>2 camere indipendenti.</span></li>
                  <li className="flex gap-3"><span className="text-gold">●</span><span>Ogni camera può essere preparata come matrimoniale oppure con 2 letti singoli.</span></li>
                  <li className="flex gap-3"><span className="text-gold">●</span><span>Per quattro colleghi è quindi possibile predisporre 4 letti singoli.</span></li>
                </ul>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['2 camere configurabili','Cucina abitabile','Lavatrice','Aria condizionata canalizzata','Balconcino / area fumatori','Smart TV e Wi-Fi'].map(x=><div key={x} className="flex gap-2 text-sm font-semibold text-navy"><span className="text-gold"><CheckIcon/></span>{x}</div>)}
              </div>

              <div className="mt-7 rounded-2xl bg-cream p-5">
                <p className="font-bold text-navy">Parcheggio privato incluso</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Adatto a 1 auto oppure, in base alle dimensioni, a 2 auto piccole. L’accesso non è adatto ai furgoni.</p>
              </div>
              <Link href="/case/dimora-castelli" className="mt-6 inline-flex font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">Vedi Dimora Castelli →</Link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Alloggi per operai, tecnici e trasfertisti</p>
          <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,4rem)] leading-tight">Una base pratica per lavorare tra Porto Marghera, Mestre e Venezia.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-white/75">
          <p>La posizione a Marghera rende gli appartamenti adatti a imprese che devono ospitare personale impegnato nell’area industriale di Porto Marghera, a Mestre, Venezia e nei cantieri o servizi della zona.</p>
          <p>Per chi cerca <strong className="text-white">alloggi per operai in trasferta a Marghera</strong>, <strong className="text-white">appartamenti per aziende a Mestre</strong>, <strong className="text-white">foresteria aziendale</strong> o <strong className="text-white">affitti temporanei per lavoratori a Venezia</strong>, l’obiettivo è semplice: offrire una sistemazione già pronta, senza rinunciare agli spazi e ai servizi di una casa.</p>
          <p className="text-base text-white/60">For international companies: furnished corporate housing near Venice, Mestre and Marghera for employees, technicians and contractors.</p>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Per soggiorni di lavoro</p>
            <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,3.7rem)] leading-tight text-navy">Più autonomia di un hotel, con un costo mensile chiaro.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Cucina vera','Il personale può organizzare pasti e turni con maggiore autonomia.'],
              ['Lavatrice in casa','Utile soprattutto per permanenze di diverse settimane o mesi.'],
              ['Spazi separati','Camere e zone comuni permettono di vivere meglio anche dopo il lavoro.'],
              ['Parcheggio riservato','Nessuna ricerca quotidiana del posto auto al rientro.'],
              ['Canone mensile','Una formula semplice da valutare per l’azienda.'],
              ['Configurazione letti','Prepariamo gli ambienti in base alla composizione della squadra.']
            ].map(([title,text])=><div key={title} className="rounded-[1.6rem] border border-slate-200 p-6"><h3 className="font-serif text-2xl text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="text-center text-xs font-black uppercase tracking-[.2em] text-gold">Domande frequenti</p>
        <h2 className="mt-4 text-center font-serif text-[clamp(2.3rem,4vw,3.8rem)] text-navy">Corporate housing a Marghera: informazioni utili</h2>
        <div className="mt-10 space-y-4">
          {faq.map(item=><details key={item.q} className="group rounded-2xl bg-white p-6 shadow-sm">
            <summary className="cursor-pointer list-none font-bold text-navy">{item.q}<span className="float-right text-gold transition group-open:rotate-45">+</span></summary>
            <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section id="preventivo" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2.2rem] bg-gold p-8 text-navy sm:p-12">
          <p className="text-xs font-black uppercase tracking-[.2em]">Richiesta aziendale</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">Hai bisogno di un alloggio per il tuo personale?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-navy/80">Indicaci periodo, numero di persone, tipologia di veicolo e configurazione letti richiesta. Ti risponderemo con disponibilità e proposta economica per l’appartamento più adatto.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={emailHref} className="rounded-full bg-navy px-7 py-4 font-bold text-white transition hover:-translate-y-1">Richiedi un preventivo aziendale</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-navy/40 px-7 py-4 font-bold text-navy transition hover:bg-white">Scrivici su WhatsApp</a>
          </div>
          <p className="mt-6 text-sm font-semibold text-navy/65">Nessuna prenotazione automatica: la proposta viene preparata in base alle esigenze dell’azienda e alla disponibilità del periodo.</p>
        </div>
      </div>
    </section>

    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <a href="#preventivo" className="block rounded-full bg-navy px-5 py-4 text-center text-sm font-black text-white shadow-2xl ring-1 ring-white/20">Richiedi un preventivo aziendale</a>
    </div>
  </main><Footer/></>;
}
