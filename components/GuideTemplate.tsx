import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

export type GuideData = {
  slug: string;
  title: string;
  kicker: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: [string,string][];
  introTitle: string;
  intro: string[];
  highlights: [string,string][];
  experiences: [string,string][];
  itinerary: [string,string,string][];
  adviceTitle: string;
  advice: string;
  heartTitle?: string;
  heartText?: string;
  historyTitle?: string;
  historyText?: string;
  faq: [string,string][];
  related: [string,string][];
  officialLinks?: [string,string][];
};

export default function GuideTemplate({data}:{data:GuideData}){
  return <><Header/><main data-guide={data.slug}>
    <section className="relative min-h-[84vh] overflow-hidden pt-20">
      <Image src={data.image} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10"/>
      {data.slug === "dolomiti" && <p className="absolute bottom-4 right-5 z-20 text-[11px] text-white/90 drop-shadow-md">Foto di Stefano Bazzoli su Unsplash</p>}
      <div className="relative mx-auto flex min-h-[calc(84vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8">
        <div className="max-w-4xl text-white">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/">Home</Link><span>›</span><Link href="/guide">Guide</Link><span>›</span><span className="text-gold">{data.title}</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[.25em] text-gold">{data.kicker}</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{data.title}</h1>
          <p className="mt-4 font-serif text-3xl">{data.subtitle}</p>
          <p className="mt-6 max-w-3xl text-xl text-white/80">{data.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#itinerario" className="rounded-full bg-gold px-7 py-4 font-bold text-navy">Organizza la visita</a>
            <Link href="/guide" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white">← Torna alle guide</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 -mt-8 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {data.badges.map(([title,text])=><div key={title} className="rounded-2xl bg-cream p-5">
          <p className="text-xs font-black uppercase tracking-[.16em] text-gold">{title}</p>
          <p className="mt-2 font-serif text-2xl text-navy">{text}</p>
        </div>)}
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Marghera Venice Guide</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">{data.introTitle}</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            {data.intro.map((p)=><p key={p}>{p}</p>)}
          </div>
        </div>
        <aside className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Prima di partire</p>
          <h2 className="mt-3 font-serif text-4xl">Controlla sempre le informazioni aggiornate</h2>
          <p className="mt-5 text-white/75">Orari, tariffe, accessi e condizioni dei servizi possono cambiare. Questa guida aiuta a progettare la giornata; prima di partire verifica i canali ufficiali.</p>
          <div className="mt-7 grid gap-3">
            {(data.officialLinks || []).map(([label,url])=><a key={url} href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-5 py-3 text-center font-bold first:bg-white first:text-navy">{label} ↗</a>)}
          </div>
        </aside>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Cosa non perdere" title={`Sei modi per conoscere ${data.title}`} text="Una selezione equilibrata tra luoghi, paesaggi ed esperienze."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.highlights.map(([title,text])=><article key={title} className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="text-2xl text-gold">✦</div><h2 className="mt-4 font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Esperienze" title="Costruisci la giornata secondo il tuo ritmo" text="Non solo cose da vedere: anche modi diversi di vivere il luogo."/>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.experiences.map(([title,text])=><article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <h2 className="font-serif text-3xl text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="itinerario" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Itinerario consigliato" title={`Una giornata a ${data.title}`} text="Una struttura flessibile da adattare alla stagione, al meteo e ai trasporti."/>
        <div className="grid gap-4">
          {data.itinerary.map(([time,title,text])=><article key={time} className="grid gap-4 rounded-[2rem] bg-white/10 p-7 md:grid-cols-[110px_1fr]">
            <div className="font-black tracking-[.14em] text-gold">{time}</div><div><h2 className="font-serif text-3xl">{title}</h2><p className="mt-2 text-white/70">{text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover"/>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Come ci andiamo noi</p>
          <h2 className="mt-3 font-serif text-5xl text-navy">{data.adviceTitle}</h2>
          <p className="mt-6 text-lg text-slate-600">{data.advice}</p>
          {data.heartText && <div className="mt-8 rounded-[2rem] border-l-4 border-aqua bg-cream p-7">
            <p className="font-bold text-navy">❤️ {data.heartTitle || 'Un luogo del cuore dei veneziani'}</p>
            <p className="mt-2 text-slate-600">{data.heartText}</p>
          </div>}
        </div>
      </div>
    </section>

    {data.historyText && <section className="bg-gold py-16 text-navy">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em]">Una storia del territorio</p>
        <h2 className="mt-4 font-serif text-5xl">{data.historyTitle}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-navy/75">{data.historyText}</p>
      </div>
    </section>}

    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionTitle eyebrow="Domande frequenti" title={`Prima di visitare ${data.title}`} text="Risposte rapide ai dubbi più comuni."/>
        <div className="space-y-4">
          {data.faq.map(([question,answer])=><details key={question} className="group rounded-3xl border border-slate-200 bg-white p-6">
            <summary className="cursor-pointer list-none font-serif text-2xl text-navy">{question}<span className="float-right text-gold group-open:rotate-45">+</span></summary>
            <p className="mt-4 max-w-4xl text-slate-600">{answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">Guide correlate</p>
        <h2 className="mt-3 font-serif text-5xl text-navy">Continua a esplorare</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {data.related.map(([label,href])=><Link key={href} href={href} className="rounded-full border border-navy px-6 py-3 font-bold text-navy">{label}</Link>)}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/case/rossi-apartment" className="rounded-full bg-gold px-8 py-4 font-bold text-navy">Rossi Apartment</Link>
          <Link href="/case/dimora-castelli" className="rounded-full border border-navy px-8 py-4 font-bold text-navy">Dimora Castelli</Link>
        </div>
      </div>
    </section>
  </main><Footer/>
  <Script id={`${data.slug}-schema`} type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    '@context':'https://schema.org','@type':'TouristDestination',name:data.title,
    description:data.description, containedInPlace:{'@type':'AdministrativeArea',name:'Veneto'}
  })}}/>
  </>
}