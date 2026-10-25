import type {Metadata} from 'next';
import type {CultureLang,CultureKind,CulturePlace,CultureScope} from '@/data/culturePlaces';
import {cultureDetailPath,cultureIndexPath,cultureUi,cityLabel,localizedHighlights} from '@/data/cultureTranslations';
import {siteLangs,hreflang} from '@/lib/i18n';
import {cultureTemporaryEventsFor} from '@/data/cultureTemporaryEvents';

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

function trimAtWord(value:string,max=92){
 if(value.length<=max)return value;
 const cut=value.slice(0,max-1);
 const last=cut.lastIndexOf(' ');
 return (last>50?cut.slice(0,last):cut).replace(/[,:;–—-]+$/,'')+'…';
}

function detailDescription(place:CulturePlace,lang:CultureLang,city:string){
 const highlights=localizedHighlights(place,lang);
 const first=highlights[0]; const second=highlights[1];
 const temporary=cultureTemporaryEventsFor(place.slug)[0];

 if(temporary){
  const eventTitle=trimAtWord(temporary.title);
  const current=temporary.start<=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Rome',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const temp=lang==='it'
   ? `${place.name} a ${city}: ${eventTitle}, ${current?'mostra/evento in corso':'mostra/evento in arrivo'}. Biglietti, orari e informazioni per la visita.`
   :lang==='en'
   ? `${place.name} in ${city}: ${eventTitle}, ${current?'current temporary exhibition/event':'upcoming exhibition/event'}. Tickets, hours and visitor information.`
   :lang==='de'
   ? `${place.name} in ${city}: ${eventTitle}, ${current?'aktuelle Sonderausstellung/Veranstaltung':'kommende Ausstellung/Veranstaltung'}. Tickets, Öffnungszeiten und Besuchsinfos.`
   :lang==='fr'
   ? `${place.name} à ${city} : ${eventTitle}, ${current?'exposition/événement en cours':'exposition/événement à venir'}. Billets, horaires et infos visite.`
   :lang==='es'
   ? `${place.name} en ${city}: ${eventTitle}, ${current?'exposición/evento en curso':'exposición/evento próximo'}. Entradas, horarios e información para la visita.`
   : `${place.name}（${city}）：${eventTitle}，${current?'当前临时展览/活动':'即将举行的展览/活动'}。查看门票、开放时间与参观信息。`;
  if(temp.length<=190)return temp;
 }

 const full=lang==='it'? `${place.name} a ${city}: ${first} e ${second}. Info pratiche su visita, biglietti, orari e prenotazione.`
  :lang==='en'? `${place.name} in ${city}: ${first} and ${second}. Practical info on visiting, tickets, opening hours and booking.`
  :lang==='de'? `${place.name} in ${city}: ${first} und ${second}. Praktische Infos zu Besuch, Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'? `${place.name} à ${city} : ${first} et ${second}. Infos pratiques sur la visite, les billets, les horaires et la réservation.`
  :lang==='es'? `${place.name} en ${city}: ${first} y ${second}. Información práctica sobre visita, entradas, horarios y reserva.`
  : `${place.name}（${city}）：了解${first}和${second}，并查看参观时长、门票、开放时间与预约等实用信息。`;
 if(full.length<=190)return full;
 const compact=lang==='it'? `${place.name} a ${city}: ${first}. Info su biglietti, orari e prenotazione.`
  :lang==='en'? `${place.name} in ${city}: ${first}. Tickets, opening hours and booking info.`
  :lang==='de'? `${place.name} in ${city}: ${first}. Infos zu Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'? `${place.name} à ${city} : ${first}. Infos sur billets, horaires et réservation.`
  :lang==='es'? `${place.name} en ${city}: ${first}. Información sobre entradas, horarios y reserva.`
  : `${place.name}（${city}）：${first}。查看门票、开放时间与预约信息。`;
 if(compact.length<=190)return compact;
 return lang==='it'? `${place.name}, ${city}. Info pratiche su biglietti, orari e prenotazione.`
  :lang==='en'? `${place.name}, ${city}. Tickets, opening hours and booking information.`
  :lang==='de'? `${place.name}, ${city}. Infos zu Tickets, Öffnungszeiten und Reservierung.`
  :lang==='fr'? `${place.name}, ${city}. Infos sur billets, horaires et réservation.`
  :lang==='es'? `${place.name}, ${city}. Información sobre entradas, horarios y reserva.`
  : `${place.name}（${city}）。门票、开放时间与预约信息。`;
}

export function cultureIndexMetadata(scope:CultureScope,lang:CultureLang):Metadata{
 const ui=cultureUi[lang]; const path=cultureIndexPath(scope,lang); const title=scope==='venice'?ui.veniceTitle:ui.venetoTitle; const description=scope==='venice'?ui.veniceSubtitle:ui.venetoSubtitle;
 return {title,description,alternates:{canonical:path,languages:alternates(scope)},openGraph:{type:'website',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}

export function cultureDetailMetadata(scope:CultureScope,lang:CultureLang,place:CulturePlace):Metadata{
 const city=cityLabel(place.city,lang); const kind=seoKindLabel[lang][place.kind]; const path=cultureDetailPath(scope,lang,place.slug);
 const title=`${place.name}: ${kind}, ${city}`;
 const description=detailDescription(place,lang,city);
 return {title,description,alternates:{canonical:path,languages:alternates(scope,place.slug)},openGraph:{type:'article',title,description,url:path,images:['/images/home-rialto-vincenzo-landino.webp'],...(place.lastVerified?{modifiedTime:place.lastVerified}:{})},twitter:{card:'summary_large_image',title,description,images:['/images/home-rialto-vincenzo-landino.webp']}};
}
