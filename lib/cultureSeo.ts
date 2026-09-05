import type {Metadata} from 'next';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cultureDetailPath,cultureIndexPath,cultureUi,cityLabel,kindLabel} from '@/data/cultureTranslations';
import {siteLangs,hreflang} from '@/lib/i18n';

function alternates(scope:CultureScope,slug?:string){
 const languages=Object.fromEntries(siteLangs.map(lang=>[hreflang[lang],slug?cultureDetailPath(scope,lang,slug):cultureIndexPath(scope,lang)]));
 return {...languages,'x-default':slug?cultureDetailPath(scope,'it',slug):cultureIndexPath(scope,'it')};
}

export function cultureIndexMetadata(scope:CultureScope,lang:CultureLang):Metadata{
 const ui=cultureUi[lang]; const path=cultureIndexPath(scope,lang); const title=scope==='venice'?ui.veniceTitle:ui.venetoTitle; const description=scope==='venice'?ui.veniceSubtitle:ui.venetoSubtitle;
 return {title:`${title} | Marghera Venice Apartments`,description,alternates:{canonical:path,languages:alternates(scope)},openGraph:{type:'website',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}

export function cultureDetailMetadata(scope:CultureScope,lang:CultureLang,place:CulturePlace):Metadata{
 const ui=cultureUi[lang]; const city=cityLabel(place.city,lang); const kind=kindLabel(place.kind,lang); const path=cultureDetailPath(scope,lang,place.slug);
 const title=`${place.name}: ${kind}, ${city}`;
 const description=scope==='venice'
  ? `${place.name}: ${ui.duration.toLowerCase()}, ${ui.price.toLowerCase()}, ${ui.hours.toLowerCase()}, ${ui.booking.toLowerCase()} e consigli pratici per organizzare la visita.`
  : `${place.name}, ${city}: ${ui.duration.toLowerCase()}, ${ui.price.toLowerCase()}, ${ui.hours.toLowerCase()} e informazioni pratiche per la visita in Veneto.`;
 const localizedDescription=lang==='it'?description:
  lang==='en'?`${place.name} in ${city}: average visit time, tickets, opening hours, booking advice, official links and practical tips.`:
  lang==='de'?`${place.name} in ${city}: Besuchsdauer, Eintritt, Öffnungszeiten, Reservierung, offizielle Links und praktische Tipps.`:
  lang==='fr'?`${place.name} à ${city} : durée de visite, billets, horaires, réservation, liens officiels et conseils pratiques.`:
  lang==='es'?`${place.name} en ${city}: duración de visita, entradas, horarios, reserva, enlaces oficiales y consejos prácticos.`:
  `${place.name}（${city}）：建议参观时长、门票、开放时间、预约、官方网站与实用提示。`;
 return {title:`${title} | Marghera Venice Apartments`,description:localizedDescription,alternates:{canonical:path,languages:alternates(scope,place.slug)},openGraph:{type:'article',title,description:localizedDescription,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description:localizedDescription,images:['/images/home-rialto-vincenzo-landino.webp']}};
}
