import Link from 'next/link';
import {localePath,type SiteLang} from '@/lib/i18n';

const copy:Record<SiteLang,{eyebrow:string;journalTitle:string;guideTitle:string;text:string}>={
 it:{eyebrow:'Una base comoda per Venezia',journalTitle:'Visiti Venezia per questo evento?',guideTitle:'Stai organizzando il tuo viaggio?',text:'Soggiorna a Marghera con parcheggio privato e collegamenti giorno e notte con Venezia.'},
 en:{eyebrow:'A convenient base for Venice',journalTitle:'Visiting Venice for this event?',guideTitle:'Planning your Venice trip?',text:'Stay in Marghera with free private parking and convenient day-and-night connections to Venice.'},
 de:{eyebrow:'Eine praktische Basis für Venedig',journalTitle:'Kommen Sie für diese Veranstaltung nach Venedig?',guideTitle:'Planen Sie Ihre Reise nach Venedig?',text:'Übernachten Sie in Marghera mit privatem Parkplatz und Verbindungen nach Venedig am Tag und in der Nacht.'},
 fr:{eyebrow:'Un point de départ pratique pour Venise',journalTitle:'Vous venez à Venise pour cet événement ?',guideTitle:'Vous préparez votre séjour à Venise ?',text:'Séjournez à Marghera avec parking privé et des liaisons vers Venise de jour comme de nuit.'},
 es:{eyebrow:'Una base práctica para visitar Venecia',journalTitle:'¿Vienes a Venecia por este evento?',guideTitle:'¿Estás organizando tu viaje a Venecia?',text:'Alójate en Marghera con aparcamiento privado y conexiones con Venecia de día y de noche.'},
 zh:{eyebrow:'轻松游览威尼斯的住宿基地',journalTitle:'为这场活动来威尼斯？',guideTitle:'正在规划威尼斯行程？',text:'住在马尔盖拉，享受免费私人停车，并可日夜便捷往返威尼斯。'}
};
export default function EditorialStayCta({lang,context='journal'}:{lang:SiteLang;context?:'journal'|'guide'}){
 const t=copy[lang];
 return <section className="py-12 sm:py-14"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="rounded-[2rem] border border-slate-200 bg-cream p-7 text-center sm:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{t.eyebrow}</p><h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{context==='journal'?t.journalTitle:t.guideTitle}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">{t.text}</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Link href={localePath('/case/rossi-apartment',lang)} className="rounded-full bg-gold px-6 py-3 font-bold text-navy">Rossi Apartment</Link><Link href={localePath('/case/dimora-castelli',lang)} className="rounded-full border border-navy px-6 py-3 font-bold text-navy">Dimora Castelli</Link></div></div></div></section>;
}
