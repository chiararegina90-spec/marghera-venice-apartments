import Link from 'next/link';
import type {CultureLang} from '@/data/culturePlaces';
import {
 cultureVisitorNoticeLabels,
 cultureVisitorNoticesFor,
 cultureVisitorNoticeStatus
} from '@/data/cultureVisitorNotices';
import {localePath} from '@/lib/i18n';

function locale(lang:CultureLang){
 return ({it:'it-IT',en:'en-GB',de:'de-DE',fr:'fr-FR',es:'es-ES',zh:'zh-CN'} as const)[lang];
}
function formatDate(value:string,lang:CultureLang){
 const [y,m,d]=value.split('-').map(Number);
 return new Intl.DateTimeFormat(locale(lang),{day:'numeric',month:'short',year:'numeric',timeZone:'Europe/Rome'}).format(new Date(Date.UTC(y,m-1,d,12)));
}

export default function CultureVisitorNotices({placeSlug,lang}:{placeSlug:string;lang:CultureLang}){
 const notices=cultureVisitorNoticesFor(placeSlug);
 if(!notices.length)return null;
 const labels=cultureVisitorNoticeLabels[lang];
 return <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
  <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{labels.eyebrow}</p>
  <h2 className="mt-2 font-serif text-3xl leading-tight text-navy sm:text-4xl">{labels.section}</h2>
  <div className="mt-6 grid gap-4">
   {notices.map(notice=>{
    const status=cultureVisitorNoticeStatus(notice);
    const period=notice.period?.[lang]||(notice.start&&notice.end?`${formatDate(notice.start,lang)} — ${formatDate(notice.end,lang)}`:notice.end?formatDate(notice.end,lang):'');
    return <article key={notice.key} className="rounded-2xl bg-cream p-5">
     <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[.13em]">
      <span className="rounded-full bg-gold/15 px-3 py-1.5 text-[#9a6a10]">{status==='current'?labels.current:labels.upcoming}</span>
      <span className="text-slate-500">{labels.kinds[notice.kind]}</span>
      {period&&<span className="text-slate-400">· {period}</span>}
     </div>
     <h3 className="mt-3 font-serif text-2xl leading-tight text-navy">{notice.title[lang]}</h3>
     <p className="mt-3 leading-7 text-slate-600">{notice.summary[lang]}</p>
     <div className="mt-4 flex flex-wrap gap-3">
      <a href={notice.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-navy px-4 py-2 text-sm font-bold text-navy">{labels.official} ↗</a>
      {notice.internalHref&&<Link href={localePath(notice.internalHref,lang)} className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{labels.internal} →</Link>}
     </div>
     <p className="mt-3 text-xs text-slate-400">{labels.verified}: {formatDate(notice.lastVerified,lang)}</p>
    </article>;
   })}
  </div>
 </section>;
}
