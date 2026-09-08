import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialHero from '@/components/EditorialHero';
import type {GlassWeekContent} from '@/data/glassWeek2026';

const heroImage='/images/journal-venice-glass-week-2026-cover.webp';

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
                <div className="font-serif text-5xl text-gold">06</div>
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
                <div className="font-serif text-5xl text-gold">07</div>
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
