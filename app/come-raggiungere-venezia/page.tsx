import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export const metadata:Metadata = {
  title:'Da Marghera a Venezia: bus, treno, biglietti e parcheggio',
  description:'Come raggiungere Rossi Apartment e Dimora Castelli in auto, treno o aereo e come andare a Venezia da Marghera con autobus, tram e treno.',
  openGraph:{
    title:'Come arrivare e come raggiungere Venezia',
    description:'Indicazioni chiare per pianificare il viaggio verso gli appartamenti e gli spostamenti a Venezia.',
    images:['/images/come-arrivare-hero-originale.webp']
  },
  alternates:{canonical:'/come-raggiungere-venezia',languages:{'it-IT':'/come-raggiungere-venezia','en-GB':'/en/getting-to-venice','de-DE':'/de/getting-to-venice','fr-FR':'/fr/getting-to-venice','es-ES':'/es/getting-to-venice','zh-CN':'/zh/getting-to-venice','x-default':'/come-raggiungere-venezia'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

const veneziaOptions = [
  {
    title:'Autobus – consigliato',
    text:'La fermata Sant’Antonio Municipio è il riferimento principale per raggiungere Venezia – Piazzale Roma. Sono presenti collegamenti diurni e notturni.',
    rows:[
      ['Di giorno','Linee 6 e 6L','circa ogni 10 minuti · direzione Venezia – Piazzale Roma'],
      ['Sera','Linea 6','circa ogni 20 minuti · verifica la corsa nell’app AVM Venezia Official'],
      ['Notte','Linea N2','circa ogni 30 minuti · collegamento notturno via Sant’Antonio Municipio'],
    ]
  },
  {
    title:'Treno',
    text:'La stazione ferroviaria di Venezia Mestre è raggiungibile a piedi dagli appartamenti. I treni regionali arrivano a Venezia Santa Lucia.',
    rows:[
      ['Durante il giorno','Treni regionali','corse frequenti'],
      ['In serata','Venezia Santa Lucia','verificare l’ultima corsa'],
    ]
  }
];

const ticketCards = [
  ['Treno','da € 1,50','Venezia Mestre → Venezia Santa Lucia; verifica la corsa scelta'],
  ['Autobus','€ 1,50','a persona, a tratta'],
  ['Rete unica ACTV','€ 9,50','75 minuti: include anche la navigazione urbana ACTV'],
];

const passes = [
  ['24 ore','€ 25,00'],
  ['2 giorni','€ 35,00'],
  ['3 giorni','€ 45,00'],
  ['Young 3 giorni','€ 33,00 – Rolling Venice + ACTV 72h, per giovani 6-29 anni secondo condizioni'],
];

const faq = [
  ['Qual è il modo più semplice per arrivare a Venezia?','Per la maggior parte degli ospiti l’autobus diretto verso Piazzale Roma è la soluzione più semplice perché evita parcheggi e cambi.'],
  ['I collegamenti funzionano anche di notte?','Sì, è presente un servizio notturno. Orari e frequenze vanno verificati sul sito ACTV per il giorno della visita.'],
  ['Conviene usare l’auto per Venezia?','Di solito no. Il parcheggio privato degli appartamenti permette di lasciare l’auto a Marghera e usare autobus o treno.'],
  ['Autobus e vaporetto usano lo stesso biglietto?','Dipende dal titolo acquistato. I pass turistici possono includere autobus, tram e navigazione; verifica sempre la validità del biglietto scelto.'],
  ['I bambini viaggiano gratis?','Sì. I bambini fino al compimento dei 6 anni, quindi fino a 5 anni compiuti, viaggiano gratuitamente sui servizi urbani del Comune di Venezia. Dal compimento dei 6 anni è necessario il titolo di viaggio.'],
];

export default function Mobilita(){return <><Header/><main className="editorial-page" data-build="getting-refresh-2026-09-07">
<section className="relative min-h-[72vh] overflow-hidden pt-20"><Image src="/images/come-arrivare-hero-originale.webp" alt="Autobus e mezzi pubblici per raggiungere Venezia da Marghera" fill priority sizes="100vw" className="object-cover object-top"/><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20"/><div className="relative mx-auto flex min-h-[calc(72vh-5rem)] max-w-7xl items-end px-5 pb-14 pt-24 lg:px-8"><div className="max-w-4xl text-white"><nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-white/70"><Link href="/">Home</Link><span>›</span><span className="text-gold">Come arrivare</span></nav><p className="text-xs font-black uppercase tracking-[.24em] text-gold">Pianifica il viaggio con tranquillità</p><h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Come arrivare</h1><p className="mt-6 max-w-3xl text-xl text-white/80">Come raggiungere gli appartamenti e come arrivare a Venezia da Marghera, senza trasformare trasporti e biglietti in un manuale.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#appartamenti" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Raggiungere gli appartamenti</a><a href="#venezia" className="rounded-full border border-white/50 px-7 py-4 font-bold">Andare a Venezia</a></div></div></div></section>
<section id="appartamenti" className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Prima della prenotazione" title="Raggiungere gli appartamenti è semplice" text="Le istruzioni di check-in restano riservate agli ospiti prenotati. Qui trovi solo ciò che serve davvero per pianificare il viaggio."/><div className="mt-8 grid gap-10 lg:grid-cols-2">{[["Via Cesare Rossarol 32","Rossi Apartment",['Parcheggio gratuito e riservato all’interno del giardino condominiale recintato.','Taxi, tram T2 verso Marghera con discesa a Sant’Antonio, oppure a piedi dall’uscita Marghera – Via Ulloa.','Taxi oppure autobus ACTV/ATVO fino a Venezia Mestre e poi proseguire verso l’appartamento.'],'https://maps.app.goo.gl/JRuHsc4BoKkYTUop9?g_st=ac'],["Via Jacopo Castelli 22","Dimora Castelli",['Parcheggio gratuito all’interno della proprietà; per eventuali auto aggiuntive è normalmente disponibile anche parcheggio gratuito in strada.','A piedi da Via Ulloa, Piazzale Giovannacci e Via Cesare Rossarol, oppure tram T2 fino a Sant’Antonio Municipio.','Le navette ATVO raggiungono Venezia Mestre; da lì puoi proseguire a piedi, in tram o in taxi.'],'https://maps.app.goo.gl/JdPBaX8TaLqesNgM6?g_st=ac']].map(([address,name,texts,map])=><article key={String(name)} className="border-t border-navy/15 pt-6"><p className="text-xs font-black uppercase tracking-[.18em] text-gold">{String(address)}</p><h2 className="mt-2 font-serif text-4xl text-navy">{String(name)}</h2><div className="mt-6 divide-y divide-navy/10 text-slate-600">{[['🚗 In auto',(texts as string[])[0]],['🚆 Da Venezia Mestre',(texts as string[])[1]],['✈️ Dall’aeroporto',(texts as string[])[2]]].map(([label,text])=><div key={label} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]"><h3 className="font-bold text-navy">{label}</h3><p>{text}</p></div>)}</div><a href={String(map)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">Apri su Google Maps ↗</a></article>)}</div><p className="mt-9 border-l-4 border-aqua pl-5 text-sm text-slate-600">Le tariffe taxi e i tempi di viaggio variano in base a traffico, orario e servizio: per questo non indichiamo un prezzo garantito.</p></div></section>
<section id="venezia" className="bg-navy py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Da Marghera a Venezia" title="Autobus o treno: scegli quello più comodo quel giorno" text="L’autobus porta a Piazzale Roma; il treno arriva a Venezia Santa Lucia. Orari e frequenze possono cambiare, quindi controlla la corsa prima di partire."/><div className="mt-8 grid gap-10 lg:grid-cols-2">{veneziaOptions.map(option=><article key={option.title} className="border-t border-white/20 pt-6"><h2 className="font-serif text-4xl">{option.title}</h2><p className="mt-3 text-white/70">{option.text}</p><div className="mt-5 divide-y divide-white/15">{option.rows.map(([time,line,freq])=><div key={time} className="grid gap-1 py-4 md:grid-cols-[110px_150px_1fr]"><strong className="text-gold">{time}</strong><span>{line}</span><span className="text-white/65">{freq}</span></div>)}</div></article>)}</div><div className="mt-9 flex flex-wrap gap-3"><a href="https://avm.avmspa.it/it/content/app-avm-venezia-official" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">AVM/ACTV ↗</a><a href="https://www.trenitalia.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">Trenitalia ↗</a><a href="https://www.radiotaxivenezia.com/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy">RadioTaxi Venezia ↗</a></div></div></section>
<section className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Biglietti" title="Le tariffe essenziali, senza perdersi tra le opzioni" text="Le tariffe possono cambiare: qui hai un riferimento rapido, poi verifica sempre il prezzo corrente sui canali ufficiali."/><div className="mt-8 border-y border-navy/15">{ticketCards.map(([title,price,note])=><div key={title} className="grid gap-2 border-b border-navy/10 py-5 last:border-0 sm:grid-cols-[180px_140px_1fr] sm:items-center"><strong className="font-serif text-2xl text-navy">{title}</strong><span className="font-serif text-2xl text-gold">{price}</span><span className="text-slate-600">{note}</span></div>)}</div><details className="group mt-8 border-b border-navy/15 pb-6" open><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-3xl text-navy"><span>Pass con viaggi illimitati</span><span className="text-gold transition group-open:rotate-45">+</span></summary><p className="mt-3 text-slate-600">Utili soprattutto se prevedi più corse in autobus, tram e vaporetto.</p><div className="mt-5 grid gap-x-8 sm:grid-cols-2">{passes.map(([duration,price])=><div key={duration} className="flex justify-between gap-4 border-b border-navy/10 py-3"><strong className="text-navy">{duration}</strong><span className="text-slate-600">{price}</span></div>)}</div><p className="mt-5 text-sm text-slate-500">I bambini viaggiano gratuitamente fino al compimento del 6° anno sui servizi urbani del Comune di Venezia. Per i giovani 6–29 anni verifica le condizioni Rolling Venice.</p></details><div className="mt-10 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-black uppercase tracking-[.18em] text-gold">Dove acquistare</p><h2 className="mt-2 font-serif text-4xl text-navy">Prima o durante il soggiorno</h2><p className="mt-3 text-slate-600">App, Venezia Unica, tabaccheria vicina o canali ACTV.</p></div><div className="divide-y divide-navy/10 border-y border-navy/15">{[['App AVM Venezia','Acquisto digitale e informazioni sul servizio.','https://avm.avmspa.it/it/content/app-avm-venezia-official'],['Venezia Unica','Pass e servizi turistici online.','https://www.veneziaunica.it/it/acquista-i-biglietti/trasporto-pubblico-a-venezia'],['Tabaccheria vicina','Acquisto di persona durante gli orari di apertura.','https://maps.app.goo.gl/bJzKjQh8vEJWbF5g9'],['ACTV','Orari, fermate e aggiornamenti ufficiali.','https://actv.avmspa.it/']].map(([title,text,url])=><a key={title} href={url} target="_blank" rel="noopener noreferrer" className="grid gap-2 py-4 sm:grid-cols-[180px_1fr_auto] sm:items-center"><strong className="text-navy">{title}</strong><span className="text-sm text-slate-600">{text}</span><span className="font-bold text-gold">Apri ↗</span></a>)}</div></div></div></section>
<section className="bg-gold py-16 text-navy"><div className="mx-auto max-w-5xl px-5 text-center lg:px-8"><p className="text-xs font-black uppercase tracking-[.22em]">Il consiglio di Marghera Venice Apartments</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Usa l’auto per arrivare a Marghera e scoprire il Veneto; lasciala parcheggiata quando visiti Venezia.</h2></div></section>
<section className="py-20"><div className="mx-auto max-w-5xl px-5 lg:px-8"><SectionTitle eyebrow="FAQ trasporti" title="Le domande che servono davvero" text="Per check-in, check-out e deposito bagagli trovi invece la pagina FAQ del soggiorno."/><div className="border-y border-navy/15">{faq.map(([q,a])=><details key={q} className="group border-b border-navy/10 py-5 last:border-0"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span>{q}</span><span className="shrink-0 text-gold transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-slate-600">{a}</p></details>)}</div><div className="mt-7 text-center"><Link href="/faq" className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">Consulta tutte le FAQ</Link></div></div></section>
</main><Footer/></>}

