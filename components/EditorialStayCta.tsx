import Link from 'next/link';
import {localePath,type SiteLang} from '@/lib/i18n';

export type EditorialStayCtaContext='journal'|'event'|'guide'|'itinerary'|'family';

const copy:Record<SiteLang,{eyebrow:string;eventTitle:string;guideTitle:string;itineraryTitle:string;familyTitle:string;text:string}>={
 it:{eyebrow:'Una base comoda per Venezia',eventTitle:'Visiti Venezia per questo evento?',guideTitle:'Stai organizzando il tuo viaggio?',itineraryTitle:'Usa Marghera come base per esplorare Venezia',familyTitle:'Cerchi una soluzione comoda per la famiglia?',text:'Soggiorna a Marghera con parcheggio privato e collegamenti giorno e notte con Venezia.'},
 en:{eyebrow:'A convenient base for Venice',eventTitle:'Visiting Venice for this event?',guideTitle:'Planning your Venice trip?',itineraryTitle:'Use Marghera as your base for exploring Venice',familyTitle:'Looking for a practical family base?',text:'Stay in Marghera with free private parking and convenient day-and-night connections to Venice.'},
 de:{eyebrow:'Eine praktische Basis für Venedig',eventTitle:'Kommen Sie für diese Veranstaltung nach Venedig?',guideTitle:'Planen Sie Ihre Reise nach Venedig?',itineraryTitle:'Nutzen Sie Marghera als Ausgangspunkt für Venedig',familyTitle:'Suchen Sie eine praktische Unterkunft für die Familie?',text:'Übernachten Sie in Marghera mit privatem Parkplatz und Verbindungen nach Venedig am Tag und in der Nacht.'},
 fr:{eyebrow:'Un point de départ pratique pour Venise',eventTitle:'Vous venez à Venise pour cet événement ?',guideTitle:'Vous préparez votre séjour à Venise ?',itineraryTitle:'Utilisez Marghera comme base pour explorer Venise',familyTitle:'Vous cherchez une base pratique pour la famille ?',text:'Séjournez à Marghera avec parking privé et des liaisons vers Venise de jour comme de nuit.'},
 es:{eyebrow:'Una base práctica para visitar Venecia',eventTitle:'¿Vienes a Venecia por este evento?',guideTitle:'¿Estás organizando tu viaje a Venecia?',itineraryTitle:'Usa Marghera como base para explorar Venecia',familyTitle:'¿Buscas una base cómoda para viajar en familia?',text:'Alójate en Marghera con aparcamiento privado y conexiones con Venecia de día y de noche.'},
 zh:{eyebrow:'轻松游览威尼斯的住宿基地',eventTitle:'为这场活动来威尼斯？',guideTitle:'正在规划威尼斯行程？',itineraryTitle:'把马尔盖拉作为探索威尼斯的住宿基地',familyTitle:'正在寻找适合家庭的实用住宿？',text:'住在马尔盖拉，享受免费私人停车，并可日夜便捷往返威尼斯。'}
};

type CopyOverride={eyebrow?:string;title:string;text:string};

const guideSlugs=new Set([
 'acqua-alta-a-venezia','buone-maniere-a-venezia','cicchetti-veneziani','contributo-accesso-venezia',
 'dove-parcheggiare-venezia','spritz-veneziano','venezia-con-il-cane'
]);
const itinerarySlugs=new Set(['venezia-a-novembre']);

export function editorialStayContext(slug:string):EditorialStayCtaContext{
 if(slug==='venezia-con-bambini') return 'family';
 if(itinerarySlugs.has(slug)) return 'itinerary';
 if(guideSlugs.has(slug)) return 'guide';
 return 'event';
}

export default function EditorialStayCta({lang,context='journal',copyOverride}:{lang:SiteLang;context?:EditorialStayCtaContext;copyOverride?:CopyOverride}){
 const t=copy[lang];
 const normalized=context==='journal'?'event':context;
 const eyebrow=copyOverride?.eyebrow||t.eyebrow;
 const title=copyOverride?.title||(normalized==='event'?t.eventTitle:normalized==='family'?t.familyTitle:normalized==='itinerary'?t.itineraryTitle:t.guideTitle);
 const text=copyOverride?.text||t.text;
 return <section className="py-12 sm:py-14"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="rounded-[2rem] border border-slate-200 bg-cream p-7 text-center sm:p-9"><p className="text-xs font-black uppercase tracking-[.2em] text-gold">{eyebrow}</p><h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{title}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">{text}</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Link href={localePath('/case/rossi-apartment',lang)} className="rounded-full bg-gold px-6 py-3 font-bold text-navy">Rossi Apartment</Link><Link href={localePath('/case/dimora-castelli',lang)} className="rounded-full border border-navy px-6 py-3 font-bold text-navy">Dimora Castelli</Link></div></div></div></section>;
}
