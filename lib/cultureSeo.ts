import type {Metadata} from 'next';
import type {CultureLang,CultureKind,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cultureDetailPath,cultureIndexPath,cultureUi,cityLabel,localizedHighlights} from '@/data/cultureTranslations';
import {siteLangs,hreflang} from '@/lib/i18n';

function alternates(scope:CultureScope,slug?:string){
 const languages=Object.fromEntries(siteLangs.map(lang=>[hreflang[lang],slug?cultureDetailPath(scope,lang,slug):cultureIndexPath(scope,lang)]));
 return {...languages,'x-default':slug?cultureDetailPath(scope,'it',slug):cultureIndexPath(scope,'it')};
}

const seoKindLabel:Record<CultureLang,Record<CultureKind,string>>={
 it:{museum:'museo',monument:'monumento',church:'chiesa',panorama:'punto panoramico'},
 en:{museum:'museum',monument:'monument',church:'church',panorama:'viewpoint'},
 de:{museum:'Museum',monument:'Monument',church:'Kirche',panorama:'Aussichtspunkt'},
 fr:{museum:'musée',monument:'monument',church:'église',panorama:'point de vue'},
 es:{museum:'museo',monument:'monumento',church:'iglesia',panorama:'mirador'},
 zh:{museum:'博物馆',monument:'历史建筑',church:'教堂',panorama:'观景点'}
};

function detailDescription(place:CulturePlace,lang:CultureLang,city:string){
 const highlights=localizedHighlights(place,lang);
 const first=highlights[0]; const second=highlights[1];
 const full=lang==='it'?`${place.name} a ${city}: ${first} e ${second}. Info pratiche su visita, biglietti, orari e prenotazione.`
  :lang==='en'?`${place.name} in ${city}: ${first} and ${second}. Practical info on visiting, tickets, opening hours and booking.`
  :lang==='de'?`${place.name} in ${city}: ${first} und ${second}. Praktische Infos zu Besuch, Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'?`${place.name} à ${city} : ${first} et ${second}. Infos pratiques sur la visite, les billets, les horaires et la réservation.`
  :lang==='es'?`${place.name} en ${city}: ${first} y ${second}. Información práctica sobre visita, entradas, horarios y reserva.`
  :`${place.name}（${city}）：了解${first}和${second}，并查看参观时长、门票、开放时间与预约等实用信息。`;
 if(full.length<=190)return full;
 const compact=lang==='it'?`${place.name} a ${city}: ${first}. Info su biglietti, orari e prenotazione.`
  :lang==='en'?`${place.name} in ${city}: ${first}. Tickets, opening hours and booking info.`
  :lang==='de'?`${place.name} in ${city}: ${first}. Infos zu Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'?`${place.name} à ${city} : ${first}. Infos sur billets, horaires et réservation.`
  :lang==='es'?`${place.name} en ${city}: ${first}. Información sobre entradas, horarios y reserva.`
  :`${place.name}（${city}）：${first}。查看门票、开放时间与预约信息。`;
 if(compact.length<=190)return compact;
 return lang==='it'?`${place.name}, ${city}. Info pratiche su biglietti, orari e prenotazione.`
  :lang==='en'?`${place.name}, ${city}. Tickets, opening hours and booking information.`
  :lang==='de'?`${place.name}, ${city}. Infos zu Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'?`${place.name}, ${city}. Infos sur billets, horaires et réservation.`
  :lang==='es'?`${place.name}, ${city}. Información sobre entradas, horarios y reserva.`
  :`${place.name}（${city}）。门票、开放时间与预约信息。`;
}

export function cultureIndexMetadata(scope:CultureScope,lang:CultureLang):Metadata{
 const ui=cultureUi[lang]; const path=cultureIndexPath(scope,lang); const title=scope==='venice'?ui.veniceTitle:ui.venetoTitle; const description=scope==='venice'?ui.veniceSubtitle:ui.venetoSubtitle;
 return {title,description,alternates:{canonical:path,languages:alternates(scope)},openGraph:{type:'website',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}

export function cultureDetailMetadata(scope:CultureScope,lang:CultureLang,place:CulturePlace):Metadata{
 const city=cityLabel(place.city,lang); const kind=seoKindLabel[lang][place.kind]; const path=cultureDetailPath(scope,lang,place.slug);
 const title=`${place.name}: ${kind}, ${city}`;
 const description=detailDescription(place,lang,city);
 return {title,description,alternates:{canonical:path,languages:alternates(scope,place.slug)},openGraph:{type:'article',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}
