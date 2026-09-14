import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import WeChatCard from '@/components/WeChatCard';
import {CarIcon,MoonIcon} from '@/components/icons';
import {hreflang,localePath,type SiteLang} from '@/lib/i18n';
import {parkingStayContent} from '@/data/parkingStayContent';

const BASE='https://www.margheraveniceapartments.com';
const LOGICAL='/appartamenti-venezia-parcheggio-gratuito';
const whatsappMessage:Record<Exclude<SiteLang,'zh'>,string>={
  it:'Ciao, sto cercando un appartamento vicino Venezia con parcheggio gratuito e vorrei verificare la disponibilità. Le mie date sono: ',
  en:"Hello, I'm looking for an apartment near Venice with free parking and I'd like to check availability. My dates are: ",
  de:'Hallo, ich suche eine Ferienwohnung bei Venedig mit kostenlosem Parkplatz und möchte die Verfügbarkeit prüfen. Meine Reisedaten sind: ',
  fr:'Bonjour, je cherche un appartement près de Venise avec parking gratuit et je souhaite vérifier les disponibilités. Mes dates sont : ',
  es:'Hola, busco un apartamento cerca de Venecia con aparcamiento gratuito y me gustaría consultar disponibilidad. Mis fechas son: '
};

function IconShell({children}:{children:React.ReactNode}){
  return <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-gold">{children}</div>;
}

export default function ParkingStayPage({lang}:{lang:SiteLang}){
  const c=parkingStayContent[lang];
  const pagePath=localePath(LOGICAL,lang);
  const homePath=localePath('/',lang);
  const rossiPath=localePath('/case/rossi-apartment',lang);
  const castelliPath=localePath('/case/dimora-castelli',lang);
  const gettingPath=localePath('/come-raggiungere-venezia',lang);
  const parkingGuidePath=localePath('/journal/dove-parcheggiare-venezia',lang);
  const pageUrl=`${BASE}${pagePath}`;
  const schemas=[
    {
      '@context':'https://schema.org','@type':'WebPage',name:c.h1,description:c.metaDescription,url:pageUrl,inLanguage:hreflang[lang],
      isPartOf:{'@type':'WebSite',name:'Marghera Venice Apartments',url:BASE},
      about:[
        {'@type':'Thing',name:c.strengths[0].title},
        {'@type':'Place',name:'Marghera'},
        {'@type':'City',name:'Venezia'}
      ]
    },
    {
      '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
        {'@type':'ListItem',position:1,name:c.home,item:`${BASE}${homePath==='/'?'':homePath}`},
        {'@type':'ListItem',position:2,name:c.page,item:pageUrl}
      ]
    },
    {
      '@context':'https://schema.org','@type':'FAQPage',inLanguage:hreflang[lang],mainEntity:c.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))
    }
  ];

  return <><Header lang={lang}/><main className="editorial-page">
    {schemas.map((schema,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}

    <section className="bg-navy px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-20 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/70">
            <Link href={homePath} className="hover:text-gold">{c.home}</Link><span aria-hidden="true">›</span><span>{c.plan}</span><span aria-hidden="true">›</span><span className="text-gold">{c.page}</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.24em] text-gold">{c.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl break-words font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[.98]">{c.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{c.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#le-nostre-case" className="rounded-full bg-gold px-7 py-4 font-bold text-navy transition hover:-translate-y-1">{c.heroPrimary}</a>
            <Link href={gettingPath} className="rounded-full border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-navy">{c.heroSecondary}</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/85">
            {c.heroUsps.map(item=><span key={item} className="inline-flex items-center gap-2"><span className="text-gold">✓</span>{item}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 h-[300px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[380px] lg:h-[430px]">
            <Image src="/images/rossi-parcheggio-privato.webp" alt={c.parkingRossiAlt} fill priority sizes="(min-width:1024px) 48vw, 100vw" className="object-cover"/>
          </div>
          <div className="relative h-40 overflow-hidden rounded-3xl sm:h-52">
            <Image src="/images/castelli-parcheggio-privato.webp" alt={c.parkingCastelliAlt} fill sizes="(min-width:1024px) 24vw, 50vw" className="object-cover"/>
          </div>
          <div className="relative h-40 overflow-hidden rounded-3xl sm:h-52">
            <Image src="/images/home-come-raggiungere-venezia.webp" alt={c.heroSecondary} fill sizes="(min-width:1024px) 24vw, 50vw" className="object-cover object-center"/>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div><SectionTitle eyebrow={c.problemEyebrow} title={c.problemTitle} text={c.problemText}/></div>
        <div>
          <div className="border-y border-navy/15">
            {c.problemPoints.map((point,index)=><div key={point} className="grid grid-cols-[38px_1fr] gap-3 border-b border-navy/10 py-5 last:border-0"><span className="font-serif text-2xl text-gold">0{index+1}</span><p className="text-lg text-navy">{point}</p></div>)}
          </div>
          <p className="mt-7 border-l-4 border-aqua pl-5 leading-7 text-slate-600">{c.problemSolution}</p>
        </div>
      </div>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.strengthsEyebrow} title={c.strengthsTitle}/>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {c.strengths.map((item,index)=><article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-black/5">
            <IconShell>{index===2?<MoonIcon/>:<CarIcon/>}</IconShell>
            <h2 className="font-serif text-3xl text-navy">{item.title}</h2><p className="mt-4 leading-7 text-slate-600">{item.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="le-nostre-case" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.homesEyebrow} title={c.homesTitle} text={c.homesText}/>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {[
            {name:'Rossi Apartment',data:c.rossi,image:'/images/rossi-card.webp',href:rossiPath},
            {name:'Dimora Castelli',data:c.dimora,image:'/images/castelli-card.webp',href:castelliPath}
          ].map(home=><article key={home.name} className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/5">
            <div className="relative h-72 overflow-hidden sm:h-80"><Image src={home.image} alt={home.data.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.025]"/></div>
            <div className="p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{home.data.guests}</p>
              <h2 className="mt-2 font-serif text-4xl text-navy">{home.name}</h2>
              <p className="mt-4 leading-7 text-slate-600">{home.data.description}</p>
              <div className="mt-6 border-y border-navy/10 text-sm text-slate-600">
                <p className="border-b border-navy/10 py-3"><strong className="text-navy">P</strong> · {home.data.parking}</p>
                <p className="py-3"><strong className="text-navy">24h</strong> · {home.data.transport}</p>
              </div>
              <Link href={home.href} className="mt-7 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-gold hover:text-navy">{home.data.cta}</Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.parkingEyebrow} title={c.parkingTitle} text={c.parkingText}/>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white/5"><div className="relative h-[320px] sm:h-[460px]"><Image src="/images/rossi-parcheggio-privato.webp" alt={c.parkingRossiAlt} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover"/></div><figcaption className="px-5 py-4 text-sm font-bold text-white/75">{c.parkingRossi}</figcaption></figure>
          <figure className="overflow-hidden rounded-[2rem] bg-white/5"><div className="relative h-[320px] sm:h-[460px]"><Image src="/images/castelli-parcheggio-privato.webp" alt={c.parkingCastelliAlt} fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover"/></div><figcaption className="px-5 py-4 text-sm font-bold text-white/75">{c.parkingCastelli}</figcaption></figure>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.transportEyebrow} title={c.transportTitle} text={c.transportText}/>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[{title:c.busTitle,text:c.busText,icon:'BUS'},{title:c.trainTitle,text:c.trainText,icon:'FS'},{title:c.nightTitle,text:c.nightText,icon:'24'}].map(item=><article key={item.title} className="border-t border-navy/20 pt-6"><span className="text-xs font-black uppercase tracking-[.18em] text-gold">{item.icon}</span><h2 className="mt-2 font-serif text-3xl text-navy">{item.title}</h2><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}
        </div>
        <div className="mt-9"><Link href={gettingPath} className="inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-gold hover:text-navy">{c.transportCta} →</Link></div>
      </div>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.compareEyebrow} title={c.compareTitle}/>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[{title:c.directTitle,items:c.directItems},{title:c.margheraTitle,items:c.margheraItems}].map((column,index)=><article key={column.title} className={`rounded-[2rem] p-7 sm:p-9 ${index===1?'bg-navy text-white':'bg-white text-navy shadow-soft'}`}><h2 className="font-serif text-4xl">{column.title}</h2><div className={`mt-6 divide-y ${index===1?'divide-white/15':'divide-navy/10'}`}>{column.items.map(item=><p key={item} className={`py-4 leading-7 ${index===1?'text-white/75':'text-slate-600'}`}><span className="mr-2 font-bold text-gold">✓</span>{item}</p>)}</div></article>)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-navy/10 bg-white p-7 shadow-soft sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{c.journalEyebrow}</p><h2 className="mt-3 font-serif text-4xl text-navy">{c.journalTitle}</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">{c.journalText}</p></div>
          <Link href={parkingGuidePath} className="inline-flex justify-center rounded-full bg-gold px-6 py-3 font-bold text-navy">{c.journalCta} →</Link>
        </div>
      </div>
    </section>

    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionTitle eyebrow={c.faqEyebrow} title={c.faqTitle}/>
        <div className="mt-8 border-y border-navy/15">{c.faq.map(([question,answer])=><details key={question} className="group border-b border-navy/10 py-5 last:border-0"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-2xl text-navy"><span>{question}</span><span aria-hidden="true" className="shrink-0 text-gold transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-slate-600">{answer}</p></details>)}</div>
      </div>
    </section>

    <section className="bg-gold py-20 text-navy">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em]">{c.finalEyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-6xl">{c.finalTitle}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">{c.finalText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={rossiPath} className="rounded-full bg-navy px-6 py-3 font-bold text-white">{c.rossi.cta}</Link>
          <Link href={castelliPath} className="rounded-full border border-navy/30 px-6 py-3 font-bold text-navy">{c.dimora.cta}</Link>
        </div>
        {lang==='zh'?<div className="mx-auto mt-8 max-w-xl"><WeChatCard title={c.availability}/></div>:<a href={`https://wa.me/393514462261?text=${encodeURIComponent(whatsappMessage[lang])}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-navy/30 bg-white/40 px-6 py-3 font-bold text-navy">{c.availability}</a>}
      </div>
    </section>
  </main><Footer lang={lang}/></>;
}
