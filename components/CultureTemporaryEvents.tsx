import type {CultureLang} from '@/data/culturePlaces';
import {cultureTemporaryEventStatus,cultureTemporaryEventsFor,cultureTemporaryLabels,cultureTemporarySummary} from '@/data/cultureTemporaryEvents';

function locale(lang:CultureLang){
  return ({it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'} as const)[lang];
}

function formatDate(value:string,lang:CultureLang){
  const [y,m,d]=value.split('-').map(Number);
  return new Intl.DateTimeFormat(locale(lang),{day:'numeric',month:'short',year:'numeric',timeZone:'Europe/Rome'}).format(new Date(Date.UTC(y,m-1,d,12)));
}

export default function CultureTemporaryEvents({placeSlug,lang}:{placeSlug:string;lang:CultureLang}){
  const events=cultureTemporaryEventsFor(placeSlug);
  if(!events.length) return null;
  const labels=cultureTemporaryLabels(lang);

  return <section id="mostre-eventi-temporanei" className="mt-8 scroll-mt-28 rounded-[1.75rem] border border-gold/30 bg-[#fffaf0] p-6 sm:p-8">
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="text-xs font-black uppercase tracking-[.2em] text-gold">NOW / NEXT</p>
        <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">{labels.section}</h2>
      </div>
      <span className="rounded-full bg-navy px-4 py-2 text-xs font-black uppercase tracking-[.12em] text-white">{events.length}</span>
    </div>

    <div className="mt-6 grid gap-4">
      {events.map((event)=>{
        const status=cultureTemporaryEventStatus(event);
        const statusLabel=status==='current'?labels.current:labels.upcoming;
        return <article key={event.title+event.start} className="rounded-2xl border border-[#eadfca] bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[.13em]">
            <span className="rounded-full bg-gold/15 px-3 py-1.5 text-[#9a6a10]">{statusLabel}</span>
            <span className="text-slate-500">{labels.types[event.type]}</span>
          </div>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">{event.title}</h3>
          <p className="mt-2 text-sm font-bold text-slate-500">{formatDate(event.start,lang)} — {formatDate(event.end,lang)}</p>
          <p className="mt-3 leading-7 text-slate-600">{cultureTemporarySummary(event,lang)}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={event.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-4 py-2 text-sm font-bold text-navy transition hover:bg-navy hover:text-white">{labels.official} ↗</a>
            <span className="text-xs text-slate-400">{labels.verified}: {formatDate(event.lastVerified,lang)}</span>
          </div>
        </article>;
      })}
    </div>
  </section>;
}
