import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';

const BASE='https://www.margheraveniceapartments.com';
const URL=`${BASE}/journal/carnevale-di-venezia`;
const IMAGE=`${BASE}/images/journal-carnevale.webp`;

export const metadata:Metadata={
  title:'Carnevale Venezia 2027: date, programma e consigli pratici',
  description:'Carnevale di Venezia 2027 dal 23 gennaio al 9 febbraio: date, weekend, Martedì Grasso, eventi confermati, bambini, trasporti e dove dormire.',
  alternates:{canonical:'/journal/carnevale-di-venezia',languages:{'it-IT':'/journal/carnevale-di-venezia','en-GB':'/en/journal/carnevale-di-venezia','de-DE':'/de/journal/carnevale-di-venezia','fr-FR':'/fr/journal/carnevale-di-venezia','es-ES':'/es/journal/carnevale-di-venezia','zh-CN':'/zh/journal/carnevale-di-venezia','x-default':'/journal/carnevale-di-venezia'}},
  openGraph:{title:'Carnevale Venezia 2027: date, programma e consigli pratici',description:'Dal 23 gennaio al 9 febbraio 2027: cosa è già ufficiale e come organizzare il Carnevale di Venezia.',url:'/journal/carnevale-di-venezia',locale:'it_IT',type:'article',images:[{url:'/images/journal-carnevale.webp',alt:'Maschere durante il Carnevale di Venezia'}]},
  twitter:{card:'summary_large_image',title:'Carnevale Venezia 2027: date, programma e consigli pratici',description:'Date ufficiali e consigli pratici per il Carnevale di Venezia 2027.',images:['/images/journal-carnevale.webp']}
};

const sections=[
  {title:'Date ufficiali del Carnevale di Venezia 2027',text:'Il Carnevale di Venezia 2027 si svolgerà dal 23 gennaio al 9 febbraio. Martedì Grasso cade il 9 febbraio, ultimo giorno dell’edizione. Le date sono già pubblicate dal sito ufficiale del Carnevale; il programma generale 2027, invece, non è ancora completo e non va confuso con quello del 2026.'},
  {title:'Quali weekend scegliere',text:'I fine settimana del 23–24 gennaio, 30–31 gennaio e 6–7 febbraio concentreranno naturalmente più visitatori. Se puoi viaggiare nei giorni feriali avrai più margine per muoverti tra calli, musei e campi. Per l’ultimo weekend e per Martedì Grasso conviene partire presto da Marghera e lasciare flessibilità agli spostamenti.'},
  {title:'Cosa è già confermato',text:'Tra gli appuntamenti già pubblicati c’è l’Official Dinner Show a Ca’ Vendramin Calergi: 30 e 31 gennaio e poi dal 4 al 9 febbraio 2027, con inizio alle 21:00. Il sito ufficiale indica tariffe a partire da 650 euro e costume d’epoca obbligatorio. Sono informazioni riferite esclusivamente al Dinner Show, non al resto del programma del Carnevale.'},
  {title:'Carnevale con bambini',text:'Maschere, artisti di strada e spettacoli diffusi possono funzionare molto bene con i bambini, ma eviterei una giornata costruita soltanto su Piazza San Marco. Alterna un appuntamento principale a campi più tranquilli, un tragitto in vaporetto e pause vere. La nostra guida Venezia con bambini raccoglie idee pratiche per organizzare il resto della giornata.'},
  {title:'Come arrivare e dove parcheggiare',text:'Se soggiorni a Marghera non serve portare l’auto fino a Venezia: puoi lasciarla al parcheggio dell’appartamento e proseguire con bus o treno. Nei giorni più affollati questa soluzione evita costi e tempi legati ai parcheggi di Piazzale Roma e Tronchetto. Controlla comunque gli orari dei mezzi per il rientro serale.'},
  {title:'Contributo di Accesso nel 2027',text:'Al momento non esiste ancora un calendario ufficiale del Contributo di Accesso per il 2027. Non diamo quindi per scontato che date, prezzi o regole del 2026 vengano ripetuti. Prima del viaggio verifica la nostra pagina dedicata e il portale ufficiale del Comune di Venezia.'},
  {title:'Cosa mangiare durante il Carnevale',text:'Frittelle e galani sono i dolci tradizionali del periodo. Per una pausa più sostanziosa puoi aggiungere cicchetti e un bacaro, evitando però di trasformare la giornata in una lista rigida di locali: durante i weekend del Carnevale anche le zone più conosciute possono essere molto affollate.'},
  {title:'Dove dormire per il Carnevale',text:'Dormire a Marghera è una soluzione pratica soprattutto per famiglie, gruppi e chi arriva in auto. Rossi Apartment e Dimora Castelli permettono di lasciare la macchina fuori dal centro storico e raggiungere Venezia con i mezzi pubblici, tornando poi in una zona più tranquilla a fine giornata.'},
  {title:'Programma 2027: cosa controllare prima di partire',text:'Il calendario ufficiale viene aggiornato man mano che vengono annunciati spettacoli, cortei, attività e modalità di accesso. Prima di partire controlla sempre il programma del giorno, eventuali prenotazioni richieste e modifiche alla mobilità. Non utilizzare programmi del 2026 come se fossero validi per il 2027.'}
];

const faq=[
  ['Quando è il Carnevale di Venezia 2027?','Dal 23 gennaio al 9 febbraio 2027.'],
  ['Quando è Martedì Grasso nel 2027?','Martedì Grasso cade il 9 febbraio 2027 ed è l’ultimo giorno del Carnevale.'],
  ['Il programma completo 2027 è già disponibile?','Non ancora in forma completa. Alcuni appuntamenti sono già pubblicati, ma il calendario ufficiale continuerà ad aggiornarsi.'],
  ['Il Carnevale di Venezia è adatto ai bambini?','Sì, soprattutto se si alternano gli eventi più affollati a percorsi tranquilli e pause.'],
  ['È meglio arrivare in auto fino a Venezia?','Se soggiorni a Marghera, in genere è più semplice lasciare l’auto al parcheggio dell’alloggio e usare bus o treno.'],
  ['Il Contributo di Accesso sarà attivo durante il Carnevale 2027?','Al momento non è stato pubblicato un calendario ufficiale 2027: va verificato prima del viaggio.']
] as const;

const related=[
  ['Venezia con bambini','/journal/venezia-con-bambini'],
  ['Come raggiungere Venezia','/come-raggiungere-venezia'],
  ['Dove parcheggiare a Venezia','/journal/dove-parcheggiare-venezia'],
  ['Contributo di Accesso','/journal/contributo-accesso-venezia'],
  ['Venezia nascosta','/guide/venezia-nascosta'],
  ['Cicchetti veneziani','/journal/cicchetti-veneziani'],
  ['Rossi Apartment','/case/rossi-apartment'],
  ['Dimora Castelli','/case/dimora-castelli']
] as const;

export default function Article(){
  const articleSchema={'@context':'https://schema.org','@type':'Article',headline:'Carnevale di Venezia 2027',description:'Date ufficiali, informazioni confermate e consigli pratici per organizzare il Carnevale di Venezia 2027.',inLanguage:'it-IT',dateModified:'2026-09-11',image:IMAGE,mainEntityOfPage:{'@type':'WebPage','@id':URL},author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE}};
  const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:BASE},{'@type':'ListItem',position:2,name:'Journal',item:`${BASE}/journal`},{'@type':'ListItem',position:3,name:'Carnevale di Venezia 2027',item:URL}]};
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};
  return <><Header/><main><article className="editorial-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <section className="relative min-h-[64svh] overflow-hidden pt-20 sm:min-h-[72vh]"><Image src="/images/journal-carnevale.webp" alt="Maschere durante il Carnevale di Venezia" fill priority sizes="100vw" className="object-cover"/><div className="absolute inset-0 editorial-cover-shade"/><div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-20 sm:min-h-[calc(72vh-5rem)] lg:px-8"><div className="max-w-5xl text-white"><nav aria-label="Percorso di navigazione" className="mb-5 flex flex-wrap gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><Link href="/journal">Journal</Link><span>›</span><span className="text-gold">Carnevale di Venezia 2027</span></nav><p className="text-xs font-black uppercase tracking-[.22em] text-gold">Eventi • 23 gennaio – 9 febbraio 2027</p><h1 className="mt-4 font-serif text-[clamp(2.8rem,7vw,5.8rem)] leading-none">Carnevale di Venezia 2027</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Date ufficiali, ciò che è già confermato e come organizzare la visita senza confondere il programma 2026 con quello del 2027.</p></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="font-serif text-3xl leading-relaxed text-navy">Il Carnevale 2027 è già fissato dal <strong>23 gennaio al 9 febbraio</strong>. Il calendario completo è ancora in aggiornamento: qui riportiamo soltanto informazioni già ufficiali e consigli pratici realmente utili per organizzare il viaggio.</p><div className="mt-14 space-y-12">{sections.map((s,i)=><section key={s.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4"><div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div><div><h2 className="font-serif text-4xl text-navy">{s.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{s.text}</p></div></section>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="rounded-[2rem] bg-gold p-8 text-navy"><p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p><p className="mt-4 font-serif text-3xl">Nei weekend più affollati parti presto, scegli un solo appuntamento “obbligatorio” e lascia il resto della giornata flessibile. Venezia durante il Carnevale si vive meglio senza rincorrere dieci eventi.</p></div><div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Fonte ufficiale</p><p className="mt-3 text-slate-600">Le date 23 gennaio–9 febbraio 2027 e le informazioni sull’Official Dinner Show provengono dal sito ufficiale del Carnevale di Venezia. Il resto del programma va ricontrollato quando sarà pubblicato.</p><a href="https://carnevale.venezia.it/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Carnevale di Venezia – sito ufficiale ↗</a></div></div></section>
    <section className="py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">Domande frequenti sul Carnevale 2027</h2><div className="mt-8 divide-y divide-slate-200 rounded-[2rem] bg-cream px-6 sm:px-8">{faq.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer list-none pr-6 font-serif text-2xl text-navy">{q}</summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div></div></section>
    <section className="bg-cream py-16"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">Continua a organizzare il viaggio</p><h2 className="mt-3 font-serif text-4xl text-navy">Guide utili per il Carnevale</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{related.map(([title,href])=><Link key={href} href={href} className="rounded-3xl bg-white p-6 font-serif text-2xl text-navy shadow-soft">{title} <span className="text-gold">→</span></Link>)}</div></div></section>
    <EditorialStayCta lang="it" context="journal"/>
  </article></main><Footer/></>;
}
