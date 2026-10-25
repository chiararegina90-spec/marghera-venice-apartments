import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {GlassWeekContent} from '@/data/glassWeek2026';
import EditorialStayCta from '@/components/EditorialStayCta';

const heroImage='/images/journal-venice-glass-week-2026-cover.webp';

const resultsUi:Record<GlassWeekContent['lang'],{title:string;text:string}>={
 it:{title:'I premi ufficiali della decima edizione',text:'La giuria 2026 ha assegnato il Premio Fondazione di Venezia alla mostra Shape of Silence. Tanja Pak; il Premio Arterìa è andato a Marzena Krzeminska per Emotion; Boldizsár Lukácsi ha vinto il Premio The Studio – Corning Museum of Glass per Crystal Charge. Il festival ha inoltre attribuito menzioni e riconoscimenti speciali ad altri progetti.'},
 en:{title:'Official awards from the tenth edition',text:'The 2026 jury awarded the Fondazione di Venezia Prize to the exhibition Shape of Silence. Tanja Pak; the Arterìa Prize went to Marzena Krzeminska for Emotion; and Boldizsár Lukácsi received The Studio – Corning Museum of Glass Prize for Crystal Charge. The festival also awarded special mentions and recognitions to other projects.'},
 de:{title:'Die offiziellen Preise der zehnten Ausgabe',text:'Die Jury 2026 verlieh den Premio Fondazione di Venezia an die Ausstellung Shape of Silence. Tanja Pak; der Premio Arterìa ging an Marzena Krzeminska für Emotion; Boldizsár Lukácsi erhielt den Preis The Studio – Corning Museum of Glass für Crystal Charge. Weitere Projekte erhielten Sondererwähnungen und Auszeichnungen.'},
 fr:{title:'Les prix officiels de la dixième édition',text:'Le jury 2026 a attribué le Premio Fondazione di Venezia à l’exposition Shape of Silence. Tanja Pak ; le Premio Arterìa à Marzena Krzeminska pour Emotion ; et le Premio The Studio – Corning Museum of Glass à Boldizsár Lukácsi pour Crystal Charge. D’autres projets ont reçu des mentions et distinctions spéciales.'},
 es:{title:'Los premios oficiales de la décima edición',text:'El jurado de 2026 concedió el Premio Fondazione di Venezia a la exposición Shape of Silence. Tanja Pak; el Premio Arterìa fue para Marzena Krzeminska por Emotion; y Boldizsár Lukácsi recibió el Premio The Studio – Corning Museum of Glass por Crystal Charge. El festival otorgó además menciones y reconocimientos especiales a otros proyectos.'},
 zh:{title:'第十届官方奖项',text:'2026年评审结果中，Fondazione di Venezia 奖授予展览 Shape of Silence. Tanja Pak；Arterìa 奖授予 Marzena Krzeminska 的 Emotion；Boldizsár Lukácsi 凭 Crystal Charge 获得 The Studio – Corning Museum of Glass 奖。主办方还向其他项目颁发了特别提名与特别认可。'}
};

export default function GlassWeek2026Article({data}:{data:GlassWeekContent}){
  return <>
    <Header lang={data.lang}/>
    <main>
      <article className="editorial-page">
        <EditorialHero
          image={heroImage}
          imageAlt={data.imageAlt}
          crumbs={[
            {label:data.homeLabel,href:data.homeHref},
            {label:data.journalLabel,href:data.journalHref},
            {label:'The Venice Glass Week 2026'}
          ]}
          eyebrow={<>{data.category} • {data.eventDate}</>}
          title={data.h1}
          subtitle={data.heroSubtitle}
          strongShade
        />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <p className="font-serif text-3xl leading-relaxed text-navy">{data.lead}</p>
            <div className="mt-14 space-y-12">
              {data.sections.map((section,i)=><section key={section.title} className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
                <div className="font-serif text-5xl text-gold">{String(i+1).padStart(2,'0')}</div>
                <div><h2 className="font-serif text-4xl text-navy">{section.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{section.text}</p></div>
              </section>)}

              <section className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
                <div className="font-serif text-5xl text-gold">{String(data.sections.length+1).padStart(2,'0')}</div>
                <div>
                  <h2 className="font-serif text-4xl text-navy">{resultsUi[data.lang].title}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{resultsUi[data.lang].text}</p>
                </div>
              </section>

              <section className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
                <div className="font-serif text-5xl text-gold">{String(data.sections.length+2).padStart(2,'0')}</div>
                <div>
                  <h2 className="font-serif text-4xl text-navy">{data.picksTitle}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{data.picksIntro}</p>
                  <div className="mt-7 grid gap-5">
                    {data.picks.map((pick,index)=><div key={pick.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <p className="text-xs font-black uppercase tracking-[.18em] text-gold">0{index+1}</p>
                      <h3 className="mt-2 font-serif text-3xl text-navy">{pick.name}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">{pick.text}</p>
                      <p className="mt-4 text-sm font-bold text-navy">{pick.zone}</p>
                      {pick.note&&<p className="mt-2 text-sm font-semibold text-gold">{pick.note}</p>}
                    </div>)}
                  </div>
                </div>
              </section>

              <section className="editorial-section-row grid grid-cols-[34px_1fr] gap-3 sm:grid-cols-[42px_1fr] sm:gap-4">
                <div className="font-serif text-5xl text-gold">{String(data.sections.length+3).padStart(2,'0')}</div>
                <div>
                  <h2 className="font-serif text-4xl text-navy">{data.planTitle}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{data.planText}</p>
                  <Link href={data.muranoHref} className="mt-6 inline-flex rounded-full border border-navy px-6 py-3 font-bold text-navy transition hover:bg-navy hover:text-white">{data.muranoCta}</Link>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="rounded-[2rem] bg-gold p-8 text-navy">
              <p className="text-xs font-black uppercase tracking-[.22em]">{data.tipLabel}</p>
              <p className="mt-4 font-serif text-3xl">{data.tip}</p>
            </div>
            <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-soft">
              <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{data.officialLabel}</p>
              <p className="mt-3 text-slate-600">{data.officialNote}</p>
              <a href={data.officialHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-6 py-3 font-bold text-white">{data.officialButton} ↗</a>
            </div>
          </div>
        </section>

        <EditorialStayCta lang={data.lang} context="journal"/>
<section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{data.relatedEyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl text-navy">{data.relatedTitle}</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <Link href={data.homoFaberHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.homoFaberLabel} <span className="text-gold">→</span></Link>
              <Link href={data.biennaleHref} className="rounded-3xl border border-slate-200 p-6 font-serif text-2xl text-navy transition hover:-translate-y-1 hover:shadow-soft">{data.biennaleLabel} <span className="text-gold">→</span></Link>
            </div>
            <div className="mt-10 text-center"><Link href={data.journalHref} className="inline-flex rounded-full bg-gold px-7 py-4 font-bold text-navy">{data.backLabel}</Link></div>
          </div>
        </section>
      </article>
    </main>
    <Footer lang={data.lang}/>
  </>;
}
