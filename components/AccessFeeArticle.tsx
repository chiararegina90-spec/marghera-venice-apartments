import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialStayCta from '@/components/EditorialStayCta';
import {accessFeeContent} from '@/data/accessFeeContent';
import {localePath,type SiteLang} from '@/lib/i18n';

const BASE='https://www.margheraveniceapartments.com';
const SLUG='/journal/contributo-accesso-venezia';
const officialPortal:Record<SiteLang,string>={
  it:'https://cda.ve.it/it/',en:'https://cda.ve.it/en/',de:'https://cda.ve.it/de/',fr:'https://cda.ve.it/fr/',es:'https://cda.ve.it/es/',zh:'https://cda.ve.it/en/'
};
const heroAlt:Record<SiteLang,string>={
  it:'Contributo di Accesso a Venezia: punto informativo per i visitatori',
  en:'Venice Access Fee information point for visitors',
  de:'Informationsstelle zum Zugangsbeitrag für Venedig',
  fr:'Point d’information sur la contribution d’accès à Venise',
  es:'Punto de información sobre la tasa de acceso a Venecia',
  zh:'威尼斯入城费游客信息点'
};
const municipality='https://live.comune.venezia.it/it/2026/10/contributo-di-accesso-il-calendario-2027';
const islandGuides=[
  ['Murano','murano'],['Burano','burano'],['Lido di Venezia','lido-di-venezia'],['Pellestrina','pellestrina'],["Sant’Erasmo",'sant-erasmo'],['Certosa','certosa']
] as const;

const activeDates:Record<number,number[]>={
  2:[26,27,28,29],
  3:[2,3,4,9,10,11,16,17,18,23,24,25,26,27,28,29,30],
  4:[1,2,7,8,9,14,15,16,21,22,23,28,29,30,31],
  5:[1,2,3,4,5,6,11,12,13,18,19,20,25,26,27],
  6:[2,3,4,9,10,11,16,17,18,23,24,25,30,31],
  7:[1,6,7,8,13,14,15]
};

const ui:Record<SiteLang,{
  quickEyebrow:string;quickTitle:string;cost:string;costValue:string;costNote:string;
  dates:string;datesValue:string;hours:string;hoursValue:string;
  stayBadge:string;stayTitle:string;stayBody:string;stayDuration:string;
  voucherTitle:string;voucherBody:string;voucherButton:string;
  calendarEyebrow:string;calendarTitle:string;calendarIntro:string;calendarLegend:string;days:string;
  officialNote:string;months:string[];weekdays:string[];
}>={
  it:{
    quickEyebrow:'In breve',quickTitle:'Contributo di Accesso 2027',cost:'Costo 2027',costValue:'fino a €10',costNote:'L’articolazione definitiva del prezzo sarà stabilita con i prossimi atti.',
    dates:'Quando',datesValue:'72 giornate · 26 marzo–15 agosto',hours:'Orario',hoursValue:'08:30–16:30',
    stayBadge:'Ospiti MVA',stayTitle:'Soggiorni da noi? Il punto chiave è l’esenzione',stayBody:'Nelle edizioni precedenti gli ospiti delle strutture ricettive del Comune di Venezia erano esenti dal pagamento. Marghera è nel Comune di Venezia. Il Comune deve ancora confermare le modalità operative 2027.',stayDuration:'Nel 2026 l’esenzione copriva dal giorno di arrivo al giorno di partenza.',
    voucherTitle:'Voucher / QR di esenzione',voucherBody:'La procedura 2027 e l’eventuale codice dedicato non sono ancora stati pubblicati. Appena il Comune aprirà il portale, aggiorneremo questa pagina con i passaggi esatti.',voucherButton:'Controlla il portale ufficiale',
    calendarEyebrow:'Calendario ufficiale',calendarTitle:'Le 72 giornate del 2027',calendarIntro:'Le giornate evidenziate sono quelle in cui il Contributo di Accesso sarà applicato nella fascia 08:30–16:30.',calendarLegend:'Giornata di applicazione',days:'giorni',
    officialNote:'Calendario approvato dal Comune di Venezia il 15 ottobre 2026.',months:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],weekdays:['L','M','M','G','V','S','D']
  },
  en:{
    quickEyebrow:'At a glance',quickTitle:'Venice Access Fee 2027',cost:'2027 price',costValue:'up to €10',costNote:'The final price structure will be defined by further measures.',
    dates:'When',datesValue:'72 days · 26 March–15 August',hours:'Hours',hoursValue:'8:30 am–4:30 pm',
    stayBadge:'MVA guests',stayTitle:'Staying with us? The key point is the exemption',stayBody:'In previous editions, guests staying in accommodation within the City of Venice were exempt from payment. Marghera is part of the City of Venice. The 2027 operating procedure still has to be confirmed.',stayDuration:'In 2026 the exemption covered the period from arrival day through departure day.',
    voucherTitle:'Exemption voucher / QR code',voucherBody:'The 2027 procedure and any dedicated code have not yet been published. As soon as the City opens the portal, we will update this page with the exact steps.',voucherButton:'Check the official portal',
    calendarEyebrow:'Official calendar',calendarTitle:'The 72 chargeable days in 2027',calendarIntro:'Highlighted dates are the days on which the Access Fee will apply between 8:30 am and 4:30 pm.',calendarLegend:'Chargeable day',days:'days',
    officialNote:'Calendar approved by the City of Venice on 15 October 2026.',months:['January','February','March','April','May','June','July','August','September','October','November','December'],weekdays:['M','T','W','T','F','S','S']
  },
  de:{
    quickEyebrow:'Kurz erklärt',quickTitle:'Zugangsbeitrag Venedig 2027',cost:'Preis 2027',costValue:'bis zu 10 €',costNote:'Die endgültige Preisstaffel wird mit weiteren Beschlüssen festgelegt.',
    dates:'Wann',datesValue:'72 Tage · 26. März–15. August',hours:'Uhrzeit',hoursValue:'08:30–16:30 Uhr',
    stayBadge:'MVA-Gäste',stayTitle:'Du wohnst bei uns? Entscheidend ist die Befreiung',stayBody:'In den bisherigen Ausgaben waren Gäste von Beherbergungsbetrieben im Gemeindegebiet Venedig von der Zahlung befreit. Marghera gehört zur Stadt Venedig. Das Verfahren für 2027 muss noch bestätigt werden.',stayDuration:'2026 galt die Befreiung vom Anreise- bis zum Abreisetag.',
    voucherTitle:'Befreiungs-Voucher / QR-Code',voucherBody:'Das Verfahren 2027 und ein möglicher Unterkunftscode sind noch nicht veröffentlicht. Sobald das Portal öffnet, ergänzen wir hier die genauen Schritte.',voucherButton:'Offizielles Portal prüfen',
    calendarEyebrow:'Offizieller Kalender',calendarTitle:'Die 72 Anwendungstage 2027',calendarIntro:'Markierte Tage sind die offiziellen Anwendungstage zwischen 08:30 und 16:30 Uhr.',calendarLegend:'Anwendungstag',days:'Tage',
    officialNote:'Kalender der Stadt Venedig vom 15. Oktober 2026.',months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],weekdays:['M','D','M','D','F','S','S']
  },
  fr:{
    quickEyebrow:'En bref',quickTitle:'Contribution d’Accès 2027',cost:'Tarif 2027',costValue:'jusqu’à 10 €',costNote:'La grille tarifaire définitive sera fixée par les prochains actes.',
    dates:'Quand',datesValue:'72 jours · 26 mars–15 août',hours:'Horaires',hoursValue:'08h30–16h30',
    stayBadge:'Clients MVA',stayTitle:'Vous séjournez chez nous ? Le point clé est l’exonération',stayBody:'Lors des éditions précédentes, les clients hébergés dans une structure située dans la Commune de Venise étaient exonérés du paiement. Marghera fait partie de la Commune. La procédure 2027 doit encore être confirmée.',stayDuration:'En 2026, l’exonération couvrait du jour d’arrivée au jour de départ.',
    voucherTitle:'Voucher / QR d’exonération',voucherBody:'La procédure 2027 et l’éventuel code dédié ne sont pas encore publiés. Dès l’ouverture du portail, nous ajouterons ici les étapes exactes.',voucherButton:'Consulter le portail officiel',
    calendarEyebrow:'Calendrier officiel',calendarTitle:'Les 72 jours concernés en 2027',calendarIntro:'Les dates surlignées sont les journées d’application de la Contribution entre 08h30 et 16h30.',calendarLegend:'Jour d’application',days:'jours',
    officialNote:'Calendrier approuvé par la Ville de Venise le 15 octobre 2026.',months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],weekdays:['L','M','M','J','V','S','D']
  },
  es:{
    quickEyebrow:'En resumen',quickTitle:'Tarifa de Acceso 2027',cost:'Precio 2027',costValue:'hasta 10 €',costNote:'La estructura definitiva del precio se fijará en los próximos actos.',
    dates:'Cuándo',datesValue:'72 días · 26 de marzo–15 de agosto',hours:'Horario',hoursValue:'08:30–16:30',
    stayBadge:'Huéspedes MVA',stayTitle:'¿Te alojas con nosotros? La clave es la exención',stayBody:'En las ediciones anteriores, los huéspedes de alojamientos situados en el municipio de Venecia estaban exentos del pago. Marghera pertenece al municipio. El procedimiento de 2027 aún debe confirmarse.',stayDuration:'En 2026 la exención cubría desde el día de llegada hasta el día de salida.',
    voucherTitle:'Voucher / QR de exención',voucherBody:'El procedimiento 2027 y cualquier código específico todavía no se han publicado. En cuanto se abra el portal, añadiremos aquí los pasos exactos.',voucherButton:'Consultar el portal oficial',
    calendarEyebrow:'Calendario oficial',calendarTitle:'Los 72 días de aplicación en 2027',calendarIntro:'Las fechas destacadas son los días en los que se aplicará la Tarifa de Acceso entre las 08:30 y las 16:30.',calendarLegend:'Día de aplicación',days:'días',
    officialNote:'Calendario aprobado por el Ayuntamiento de Venecia el 15 de octubre de 2026.',months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],weekdays:['L','M','X','J','V','S','D']
  },
  zh:{
    quickEyebrow:'快速查看',quickTitle:'2027威尼斯入城费',cost:'2027费用',costValue:'最高10欧元',costNote:'最终收费分级将由后续官方文件确定。',
    dates:'实施日期',datesValue:'72天 · 3月26日–8月15日',hours:'时段',hoursValue:'08:30–16:30',
    stayBadge:'MVA住客',stayTitle:'住在我们这里？重点是住宿豁免',stayBody:'在此前的实施年度，入住威尼斯市行政范围内正规住宿设施的客人免于缴费。Marghera属于威尼斯市。2027年的具体办理方式仍待确认。',stayDuration:'2026年的豁免从入住日持续到退房日。',
    voucherTitle:'豁免Voucher / QR码',voucherBody:'2027年的申请流程以及住宿方专用代码尚未公布。官方平台开放后，我们会在本页补充准确步骤。',voucherButton:'查看官方平台',
    calendarEyebrow:'官方日历',calendarTitle:'2027年的72个实施日',calendarIntro:'高亮日期为08:30–16:30实施入城费的官方日期。',calendarLegend:'实施日',days:'天',
    officialNote:'日历由威尼斯市政府于2026年10月15日批准。',months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],weekdays:['一','二','三','四','五','六','日']
  }
};

function MiniCalendar({month,lang}:{month:number;lang:SiteLang}){
  const copy=ui[lang];
  const daysInMonth=new Date(Date.UTC(2027,month+1,0)).getUTCDate();
  const jsDay=new Date(Date.UTC(2027,month,1)).getUTCDay();
  const mondayOffset=(jsDay+6)%7;
  const active=new Set(activeDates[month]??[]);
  const cells:Array<number|null>=[...Array(mondayOffset).fill(null),...Array.from({length:daysInMonth},(_,i)=>i+1)];
  while(cells.length%7!==0) cells.push(null);
  return <div className="rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="font-serif text-2xl text-navy">{copy.months[month]}</h3>
      <span className="text-[11px] font-bold uppercase tracking-[.12em] text-gold">{active.size} {copy.days}</span>
    </div>
    <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-slate-400">
      {copy.weekdays.map((d,i)=><span key={`${d}-${i}`}>{d}</span>)}
    </div>
    <div className="mt-2 grid grid-cols-7 gap-1">
      {cells.map((day,i)=>day===null
        ? <span key={`blank-${i}`} className="aspect-square"/>
        : <span key={day} className={`flex aspect-square items-center justify-center rounded-lg text-xs font-semibold sm:text-sm ${active.has(day)?'bg-navy text-white shadow-sm':'text-slate-500'}`}>{day}</span>
      )}
    </div>
  </div>;
}

function QuickFact({icon,label,value,note}:{icon:string;label:string;value:string;note?:string}){
  return <div className="grid grid-cols-[42px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-base font-black text-navy" aria-hidden="true">{icon}</div>
    <div><p className="text-[11px] font-black uppercase tracking-[.14em] text-white/55">{label}</p><p className="mt-1 font-serif text-xl text-white">{value}</p>{note&&<p className="mt-1 text-xs leading-5 text-white/60">{note}</p>}</div>
  </div>;
}

export default function AccessFeeArticle({lang}:{lang:SiteLang}){
  const c=accessFeeContent[lang];
  const copy=ui[lang];
  const currentPath=localePath(SLUG,lang);
  const articleUrl=`${BASE}${currentPath}`;
  const faqSchema={
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:c.faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))
  };
  const articleSchema={
    '@context':'https://schema.org','@type':'Article',headline:c.h1,description:c.metaDescription,
    datePublished:'2026-09-10',dateModified:'2026-10-16',mainEntityOfPage:{'@type':'WebPage','@id':articleUrl},
    author:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE},
    publisher:{'@type':'Organization',name:'Marghera Venice Apartments',url:BASE,logo:{'@type':'ImageObject',url:`${BASE}/images/logo.png`}},
    image:`${BASE}/images/access-fee-cover.png`
  };
  const breadcrumbSchema={
    '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:c.labels.home,item:`${BASE}${localePath('/',lang)}`},
      {'@type':'ListItem',position:2,name:c.labels.journal,item:`${BASE}${localePath('/journal',lang)}`},
      {'@type':'ListItem',position:3,name:c.h1,item:articleUrl}
    ]
  };
  const related=[
    [c.labels.getting,localePath('/come-raggiungere-venezia',lang)],
    [c.labels.parking,localePath('/journal/dove-parcheggiare-venezia',lang)],
    [c.labels.useful,localePath('/link-utili',lang)],
    [c.labels.faq,localePath('/faq',lang)],
    [c.labels.children,localePath('/journal/venezia-con-bambini',lang)]
  ] as const;

  return <>
    <Header lang={lang}/>
    <main><article className="editorial-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>

      <section className="relative min-h-[46svh] overflow-hidden pt-20 sm:min-h-[54vh]">
        <Image src="/images/access-fee-cover.png" alt={heroAlt[lang]} fill priority sizes="100vw" className="object-cover"/>
        <div className="absolute inset-0 editorial-cover-shade"/>
        <div className="relative mx-auto flex min-h-[calc(46svh-5rem)] max-w-7xl items-end px-5 pb-10 pt-16 sm:min-h-[calc(54vh-5rem)] sm:pb-14 lg:px-8">
          <div className="max-w-4xl text-white">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap gap-2 text-sm text-white/70"><Link href={localePath('/',lang)}>{c.labels.home}</Link><span>›</span><Link href={localePath('/journal',lang)}>{c.labels.journal}</Link><span>›</span><span className="text-gold">{c.h1}</span></nav>
            <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{c.kicker}</p>
            <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.3rem,5vw,4.6rem)] leading-[1.02]">{c.h1}</h1>
            <p className="mt-5 text-sm font-semibold text-white/75">{c.updatedLabel}</p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 xl:gap-14">
          <div className="min-w-0">
            <div className="space-y-5">
              {c.intro.map((p,i)=><p key={p} className={i===0?'font-serif text-3xl leading-relaxed text-navy':'text-lg leading-8 text-slate-700'}>{p}</p>)}
            </div>

            <div className="mt-9 rounded-[1.5rem] border border-gold/30 bg-cream p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{c.newsUpdate.title}</p>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy">{copy.officialNote}</span>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-700">{c.newsUpdate.body}</p>
              <a href={c.newsUpdate.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-bold text-navy underline decoration-gold underline-offset-4">{c.newsUpdate.sourceLabel} ↗</a>
            </div>

            <section className="mt-14">
              <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{copy.calendarEyebrow}</p>
              <h2 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">{copy.calendarTitle}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{copy.calendarIntro}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="h-4 w-4 rounded bg-navy" aria-hidden="true"/>{copy.calendarLegend}</div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[2,3,4,5,6,7].map(month=><MiniCalendar key={month} month={month} lang={lang}/>)}
              </div>
            </section>

            <div className="mt-16 space-y-12">
              {c.sections.map((section,i)=><section key={section.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
                <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
                <div>
                  <h2 className="font-serif text-4xl text-navy">{section.title}</h2>
                  <div className="mt-4 space-y-4">{section.paragraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div>
                  {section.bullets&&<ul className="mt-6 grid gap-2 rounded-3xl bg-cream p-6 text-slate-700">{section.bullets.map(b=><li key={b} className="flex gap-3"><span className="text-gold">•</span><span>{b}</span></li>)}</ul>}
                </div>
              </section>)}
            </div>
          </div>

          <aside className="lg:relative">
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-[1.75rem] bg-navy p-6 text-white shadow-xl sm:p-7">
                <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{copy.quickEyebrow}</p>
                <h2 className="mt-2 font-serif text-3xl">{copy.quickTitle}</h2>
                <div className="mt-6 grid gap-3">
                  <QuickFact icon="€" label={copy.cost} value={copy.costValue} note={copy.costNote}/>
                  <QuickFact icon="72" label={copy.dates} value={copy.datesValue}/>
                  <QuickFact icon="⏱" label={copy.hours} value={copy.hoursValue}/>
                </div>
              </div>

              <div className="rounded-[1.75rem] border-2 border-gold bg-white p-6 shadow-soft">
                <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-[11px] font-black uppercase tracking-[.16em] text-navy">{copy.stayBadge}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-navy">{copy.stayTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy.stayBody}</p>
                <div className="mt-4 rounded-2xl bg-cream p-4 text-sm font-semibold leading-6 text-navy">{copy.stayDuration}</div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-lg font-black text-navy" aria-hidden="true">QR</div>
                <h3 className="mt-4 font-serif text-2xl text-navy">{copy.voucherTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy.voucherBody}</p>
                <a href={officialPortal[lang]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-black text-navy transition hover:opacity-90">{copy.voucherButton} ↗</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.taxTitle}</h2><div className="mt-5 space-y-4">{c.taxParagraphs.map(p=><p key={p} className="text-lg leading-8 text-slate-600">{p}</p>)}</div></div></section>

      <section className="py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.islandsTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{c.islandsIntro}</p><div className="mt-7 flex flex-wrap gap-3">{islandGuides.map(([name,slug])=><Link key={slug} href={localePath(`/guide/${slug}`,lang)} className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-navy transition hover:border-gold hover:text-gold">{name} →</Link>)}</div><p className="mt-7 text-lg leading-8 text-slate-600">{c.islandsOutro}</p></div></section>

      <section className="bg-cream py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><h2 className="font-serif text-4xl text-navy">{c.faqTitle}</h2><div className="mt-8 divide-y divide-slate-200 rounded-[2rem] bg-white px-6 sm:px-8">{c.faq.map(item=><details key={item.q} className="group py-5"><summary className="cursor-pointer list-none pr-6 font-serif text-2xl text-navy">{item.q}</summary><p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section>

      <section className="py-16"><div className="mx-auto grid max-w-5xl gap-7 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.relatedTitle}</p><div className="mt-5 grid gap-3">{related.map(([label,href])=><Link key={href} href={href} className="rounded-2xl border border-slate-200 p-4 font-semibold text-navy transition hover:border-gold">{label} <span className="text-gold">→</span></Link>)}</div></div><aside className="rounded-[2rem] bg-navy p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.officialTitle}</p><p className="mt-4 leading-7 text-white/75">{c.officialText}</p><div className="mt-6 grid gap-3"><a href={officialPortal[lang]} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">{c.officialPortal} →</a><a href={municipality} target="_blank" rel="noopener noreferrer" className="font-bold text-gold">{c.officialComune} →</a></div></aside></div></section>

      <EditorialStayCta lang={lang} context="guide"/>
      <div className="pb-16 text-center"><Link href={localePath('/journal',lang)} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">← {c.labels.journal}</Link></div>
    </article></main>
    <Footer lang={lang}/>
  </>;
}
