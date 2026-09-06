import type {Metadata} from 'next';
import type {CultureLang,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cultureDetailPath,cultureIndexPath,cultureUi,cityLabel,kindLabel} from '@/data/cultureTranslations';
import {siteLangs,hreflang} from '@/lib/i18n';
import {cultureNarrative} from '@/data/cultureNarrative';

function alternates(scope:CultureScope,slug?:string){
 const languages=Object.fromEntries(siteLangs.map(lang=>[hreflang[lang],slug?cultureDetailPath(scope,lang,slug):cultureIndexPath(scope,lang)]));
 return {...languages,'x-default':slug?cultureDetailPath(scope,'it',slug):cultureIndexPath(scope,'it')};
}

export function cultureIndexMetadata(scope:CultureScope,lang:CultureLang):Metadata{
 const ui=cultureUi[lang]; const path=cultureIndexPath(scope,lang); const title=scope==='venice'?ui.veniceTitle:ui.venetoTitle; const description=scope==='venice'?ui.veniceSubtitle:ui.venetoSubtitle;
 return {title:`${title} | Marghera Venice Apartments`,description,alternates:{canonical:path,languages:alternates(scope)},openGraph:{type:'website',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}

export function cultureDetailMetadata(scope:CultureScope,lang:CultureLang,place:CulturePlace):Metadata{
 const city=cityLabel(place.city,lang); const kind=kindLabel(place.kind,lang); const path=cultureDetailPath(scope,lang,place.slug);
 const title=`${place.name}: ${kind}, ${city}`;
 const narrative=cultureNarrative(place,lang);
 const practicalTail=lang==='it'?' Durata, biglietti, orari, prenotazione e fonti ufficiali.':lang==='en'?' Visit time, tickets, opening hours, booking and official sources.':lang==='de'?' Besuchsdauer, Tickets, Öffnungszeiten, Reservierung und offizielle Quellen.':lang==='fr'?' Durée, billets, horaires, réservation et sources officielles.':lang==='es'?' Duración, entradas, horarios, reserva y fuentes oficiales.':' 包含参观时长、门票、开放时间、预约与官方来源。';
 const localizedDescription=(narrative.lead+practicalTail).replace(/\s+/g,' ').trim().slice(0,190);
 return {title:`${title} | Marghera Venice Apartments`,description:localizedDescription,alternates:{canonical:path,languages:alternates(scope,place.slug)},openGraph:{type:'article',title,description:localizedDescription,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description:localizedDescription,images:['/images/home-rialto-vincenzo-landino.webp']}};
}
