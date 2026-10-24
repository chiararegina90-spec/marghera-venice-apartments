import Link from 'next/link';
import {localePath,type SiteLang} from '@/lib/i18n';

export type EditorialStayCtaContext=
 | 'journal'
 | 'event'
 | 'guide'
 | 'itinerary'
 | 'family'
 | 'culture-venice'
 | 'culture-veneto'
 | 'discover-venice'
 | 'discover-veneto';

type Copy={
 eyebrow:string;
 eventTitle:string;
 guideTitle:string;
 itineraryTitle:string;
 familyTitle:string;
 discoverVeniceTitle:string;
 discoverVenetoTitle:string;
 cultureVeniceTitle:(subject:string)=>string;
 cultureVenetoTitle:(subject:string)=>string;
 veniceText:string;
 venetoText:string;
};

const copy:Record<SiteLang,Copy>={
 it:{
  eyebrow:'Il tuo soggiorno con MVA',
  eventTitle:'Vuoi viverlo dal vivo? Soggiorna da noi.',
  guideTitle:'Vuoi scoprire Venezia dal vivo? Soggiorna da noi.',
  itineraryTitle:'Vuoi vivere Venezia con calma? Soggiorna da noi.',
  familyTitle:'Vieni a Venezia con i bambini? Soggiorna da noi.',
  discoverVeniceTitle:'Vuoi vivere Venezia dal vivo? Soggiorna da noi.',
  discoverVenetoTitle:'Vuoi scoprire il Veneto? Soggiorna da noi.',
  cultureVeniceTitle:subject=>`Vuoi vedere ${subject} dal vivo? Soggiorna da noi.`,
  cultureVenetoTitle:subject=>`Vuoi scoprire ${subject} dal vivo? Soggiorna da noi.`,
  veniceText:'Scegli Marghera come base: parcheggio privato, collegamenti comodi con Venezia e due appartamenti pensati per vivere la città con più libertà.',
  venetoText:'Scegli Marghera come base per alternare Venezia e Veneto: parcheggio privato, collegamenti da Venezia Mestre e due appartamenti dove rientrare con calma dopo ogni escursione.'
 },
 en:{
  eyebrow:'Stay with MVA',
  eventTitle:'Want to experience it in person? Stay with us.',
  guideTitle:'Want to experience Venice in person? Stay with us.',
  itineraryTitle:'Want to enjoy Venice at your own pace? Stay with us.',
  familyTitle:'Coming to Venice with children? Stay with us.',
  discoverVeniceTitle:'Want to experience Venice in person? Stay with us.',
  discoverVenetoTitle:'Want to explore Veneto? Stay with us.',
  cultureVeniceTitle:subject=>`Want to see ${subject} in person? Stay with us.`,
  cultureVenetoTitle:subject=>`Want to discover ${subject} in person? Stay with us.`,
  veniceText:'Use Marghera as your base: private parking, convenient connections to Venice and two apartments designed to give you more freedom during your stay.',
  venetoText:'Use Marghera as your base for Venice and Veneto: private parking, connections from Venezia Mestre and two apartments to come home to after each day trip.'
 },
 de:{
  eyebrow:'Ihr Aufenthalt bei MVA',
  eventTitle:'Möchten Sie es live erleben? Übernachten Sie bei uns.',
  guideTitle:'Möchten Sie Venedig selbst erleben? Übernachten Sie bei uns.',
  itineraryTitle:'Möchten Sie Venedig in Ruhe erleben? Übernachten Sie bei uns.',
  familyTitle:'Kommen Sie mit Kindern nach Venedig? Übernachten Sie bei uns.',
  discoverVeniceTitle:'Möchten Sie Venedig selbst erleben? Übernachten Sie bei uns.',
  discoverVenetoTitle:'Möchten Sie Venetien entdecken? Übernachten Sie bei uns.',
  cultureVeniceTitle:subject=>`Möchten Sie ${subject} selbst sehen? Übernachten Sie bei uns.`,
  cultureVenetoTitle:subject=>`Möchten Sie ${subject} selbst entdecken? Übernachten Sie bei uns.`,
  veniceText:'Nutzen Sie Marghera als Ausgangspunkt: privater Parkplatz, bequeme Verbindungen nach Venedig und zwei Apartments für mehr Freiheit während Ihres Aufenthalts.',
  venetoText:'Nutzen Sie Marghera als Basis für Venedig und Venetien: privater Parkplatz, Verbindungen ab Venezia Mestre und zwei Apartments für die entspannte Rückkehr nach jedem Ausflug.'
 },
 fr:{
  eyebrow:'Votre séjour avec MVA',
  eventTitle:'Envie de le vivre sur place ? Séjournez chez nous.',
  guideTitle:'Envie de découvrir Venise sur place ? Séjournez chez nous.',
  itineraryTitle:'Envie de profiter de Venise à votre rythme ? Séjournez chez nous.',
  familyTitle:'Vous venez à Venise avec des enfants ? Séjournez chez nous.',
  discoverVeniceTitle:'Envie de vivre Venise sur place ? Séjournez chez nous.',
  discoverVenetoTitle:'Envie de découvrir la Vénétie ? Séjournez chez nous.',
  cultureVeniceTitle:subject=>`Envie de voir ${subject} sur place ? Séjournez chez nous.`,
  cultureVenetoTitle:subject=>`Envie de découvrir ${subject} sur place ? Séjournez chez nous.`,
  veniceText:'Choisissez Marghera comme base : parking privé, liaisons pratiques avec Venise et deux appartements pour profiter de la ville avec plus de liberté.',
  venetoText:'Choisissez Marghera comme base pour Venise et la Vénétie : parking privé, liaisons depuis Venezia Mestre et deux appartements où rentrer tranquillement après chaque excursion.'
 },
 es:{
  eyebrow:'Tu estancia con MVA',
  eventTitle:'¿Quieres vivirlo en persona? Alójate con nosotros.',
  guideTitle:'¿Quieres descubrir Venecia en persona? Alójate con nosotros.',
  itineraryTitle:'¿Quieres disfrutar Venecia a tu ritmo? Alójate con nosotros.',
  familyTitle:'¿Vienes a Venecia con niños? Alójate con nosotros.',
  discoverVeniceTitle:'¿Quieres vivir Venecia en persona? Alójate con nosotros.',
  discoverVenetoTitle:'¿Quieres descubrir el Véneto? Alójate con nosotros.',
  cultureVeniceTitle:subject=>`¿Quieres ver ${subject} en persona? Alójate con nosotros.`,
  cultureVenetoTitle:subject=>`¿Quieres descubrir ${subject} en persona? Alójate con nosotros.`,
  veniceText:'Elige Marghera como base: aparcamiento privado, conexiones cómodas con Venecia y dos apartamentos para disfrutar la ciudad con más libertad.',
  venetoText:'Elige Marghera como base para combinar Venecia y el Véneto: aparcamiento privado, conexiones desde Venezia Mestre y dos apartamentos a los que volver con calma después de cada excursión.'
 },
 zh:{
  eyebrow:'入住 MVA',
  eventTitle:'想亲自体验吗？住在我们这里。',
  guideTitle:'想亲自感受威尼斯吗？住在我们这里。',
  itineraryTitle:'想从容地体验威尼斯吗？住在我们这里。',
  familyTitle:'带孩子来威尼斯？住在我们这里。',
  discoverVeniceTitle:'想亲自感受威尼斯吗？住在我们这里。',
  discoverVenetoTitle:'想探索威尼托吗？住在我们这里。',
  cultureVeniceTitle:subject=>`想亲自看看 ${subject} 吗？住在我们这里。`,
  cultureVenetoTitle:subject=>`想亲自探索 ${subject} 吗？住在我们这里。`,
  veniceText:'把马尔盖拉作为住宿基地：私人停车、便捷往返威尼斯，并可选择两套公寓，让行程更自由。',
  venetoText:'把马尔盖拉作为探索威尼斯和威尼托的基地：私人停车、Venezia Mestre 的交通连接，以及两套适合每日出游后轻松返回的公寓。'
 }
};

type CopyOverride={eyebrow?:string;title?:string;text?:string};

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

function titleFor(context:EditorialStayCtaContext,t:Copy,subject?:string){
 const normalized=context==='journal'?'event':context;
 if(normalized==='family')return t.familyTitle;
 if(normalized==='itinerary')return t.itineraryTitle;
 if(normalized==='guide')return t.guideTitle;
 if(normalized==='discover-venice')return t.discoverVeniceTitle;
 if(normalized==='discover-veneto')return t.discoverVenetoTitle;
 if(normalized==='culture-venice')return t.cultureVeniceTitle(subject||'Venezia');
 if(normalized==='culture-veneto')return t.cultureVenetoTitle(subject||'il Veneto');
 return t.eventTitle;
}

export default function EditorialStayCta({
 lang,
 context='journal',
 subject,
 copyOverride
}:{lang:SiteLang;context?:EditorialStayCtaContext;subject?:string;copyOverride?:CopyOverride}){
 const t=copy[lang];
 const eyebrow=copyOverride?.eyebrow||t.eyebrow;
 const title=copyOverride?.title||titleFor(context,t,subject);
 const text=copyOverride?.text||(context==='culture-veneto'||context==='discover-veneto'?t.venetoText:t.veniceText);
 return <section className="py-12 sm:py-14" data-editorial-stay-cta>
  <div className="mx-auto max-w-5xl px-5 lg:px-8">
   <div className="rounded-[2rem] border border-slate-200 bg-cream p-7 text-center sm:p-9">
    <p className="text-xs font-black uppercase tracking-[.2em] text-gold">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">{title}</h2>
    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">{text}</p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
     <Link href={localePath('/case/rossi-apartment',lang)} className="rounded-full bg-gold px-6 py-3 font-bold text-navy">Rossi Apartment</Link>
     <Link href={localePath('/case/dimora-castelli',lang)} className="rounded-full border border-navy px-6 py-3 font-bold text-navy">Dimora Castelli</Link>
    </div>
   </div>
  </div>
 </section>;
}
