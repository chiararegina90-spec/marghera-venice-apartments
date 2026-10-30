import type {Metadata} from 'next';
import {languageAlternates,localePath,type SiteLang} from '@/lib/i18n';
import {
 KLIMT_MUVEC_SLUG,KLIMT_MUVEC_START,KLIMT_MUVEC_END,KLIMT_MUVEC_PUBLISHED,KLIMT_MUVEC_MODIFIED,
 KLIMT_MUVEC_CARD,KLIMT_MUVEC_COVER,KLIMT_MUVEC_OFFICIAL,KLIMT_MUVEC_INFO,type KlimtMuvecContent
} from './shared';
import {it} from './it';
import {en} from './en';
import {de} from './de';
import {fr} from './fr';
import {es} from './es';
import {zh} from './zh';

export {
 KLIMT_MUVEC_SLUG,KLIMT_MUVEC_START,KLIMT_MUVEC_END,KLIMT_MUVEC_PUBLISHED,KLIMT_MUVEC_MODIFIED,
 KLIMT_MUVEC_CARD,KLIMT_MUVEC_COVER,KLIMT_MUVEC_OFFICIAL,KLIMT_MUVEC_INFO
} from './shared';
export type {KlimtMuvecContent} from './shared';

export const klimtMuvec2026:Record<SiteLang,KlimtMuvecContent>={it,en,de,fr,es,zh};

const muvecHours20261030:Record<SiteLang,{hours:string;last:string;visit:string}>={
 it:{hours:'Fino al 14 febbraio 2027: 10:00–19:00 · sabato dal 31 ottobre fino alle 22:00',last:'18:00 · sabato 21:00',visit:'Nel periodo della mostra il MUVEC è aperto negli altri giorni dalle 10:00 alle 19:00, ultimo ingresso 18:00, e resta chiuso il lunedì. Dal 31 ottobre 2026 il sabato l’apertura è prolungata fino alle 22:00, con ultimo ingresso alle 21:00. Il biglietto museo indicato da MUVE è di 7 € intero e 3,50 € ridotto; sono previste ulteriori gratuità e agevolazioni secondo le condizioni ufficiali.'},
 en:{hours:'Until 14 February 2027: 10:00–19:00 · Saturdays from 31 October until 22:00',last:'18:00 · Saturday 21:00',visit:'During the exhibition, MUVEC is open on other opening days from 10:00 to 19:00, last admission 18:00, and is closed on Mondays. From 31 October 2026, Saturday opening is extended to 22:00, with last admission at 21:00. MUVE lists museum admission at €7 full and €3.50 reduced, with further free and concession categories under the official conditions.'},
 de:{hours:'Bis 14. Februar 2027: 10:00–19:00 · samstags ab 31. Oktober bis 22:00',last:'18:00 · Samstag 21:00',visit:'Während der Ausstellung ist das MUVEC an den übrigen Öffnungstagen von 10:00 bis 19:00 Uhr geöffnet, letzter Einlass 18:00 Uhr; montags ist geschlossen. Ab 31. Oktober 2026 wird die Samstagsöffnung bis 22:00 Uhr verlängert, letzter Einlass 21:00 Uhr. MUVE nennt 7 € regulär und 3,50 € ermäßigt; weitere Freikategorien und Vergünstigungen gelten nach den offiziellen Bedingungen.'},
 fr:{hours:'Jusqu’au 14 février 2027 : 10:00–19:00 · samedis dès le 31 octobre jusqu’à 22:00',last:'18:00 · samedi 21:00',visit:'Pendant l’exposition, le MUVEC ouvre les autres jours de 10:00 à 19:00, dernière entrée 18:00, et ferme le lundi. À partir du 31 octobre 2026, l’ouverture du samedi est prolongée jusqu’à 22:00, dernière entrée 21:00. MUVE indique 7 € plein tarif et 3,50 € réduit ; d’autres gratuités et réductions s’appliquent selon les conditions officielles.'},
 es:{hours:'Hasta el 14 de febrero de 2027: 10:00–19:00 · sábados desde el 31 de octubre hasta 22:00',last:'18:00 · sábado 21:00',visit:'Durante la exposición, MUVEC abre los demás días de 10:00 a 19:00, última entrada 18:00, y cierra los lunes. Desde el 31 de octubre de 2026, los sábados prolonga la apertura hasta las 22:00, última entrada 21:00. MUVE indica 7 € general y 3,50 € reducida; existen otras gratuidades y ventajas según las condiciones oficiales.'},
 zh:{hours:'至2027年2月14日：10:00–19:00 · 10月31日起周六延长至22:00',last:'18:00 · 周六21:00',visit:'展览期间，MUVEC其他开放日为10:00–19:00，最后入场18:00，周一闭馆。自2026年10月31日起，周六延长开放至22:00，最后入场21:00。MUVE公布普通票7欧元、优惠票3.50欧元；其他免费及优惠类别以官方条件为准。'}
};
for(const lang of Object.keys(klimtMuvec2026) as SiteLang[]){
 const item=klimtMuvec2026[lang];
 item.quick.hours=muvecHours20261030[lang].hours;
 item.quick.lastEntry=muvecHours20261030[lang].last;
 item.sections=item.sections.map(([title,text],index)=>index===item.sections.length-1?[title,muvecHours20261030[lang].visit]:[title,text]);
}

export function klimtMuvecCard(lang:SiteLang){
 const c=klimtMuvec2026[lang];
 return {
  title:c.cardTitle,category:c.category,text:c.cardDescription,image:KLIMT_MUVEC_CARD,alt:c.cardImageAlt,
  href:lang==='it'?KLIMT_MUVEC_SLUG:'/'+lang+KLIMT_MUVEC_SLUG,
  eventDate:c.eventDate,startDate:KLIMT_MUVEC_START,endDate:KLIMT_MUVEC_END
 };
}

export function klimtMuvecMetadata(lang:SiteLang):Metadata{
 const c=klimtMuvec2026[lang];
 const url=localePath(KLIMT_MUVEC_SLUG,lang);
 return {
  title:c.metaTitle,
  description:c.description,
  alternates:languageAlternates(url),
  openGraph:{type:'article',title:c.metaTitle,description:c.description,url,images:[{url:KLIMT_MUVEC_COVER,alt:c.imageAlt}],publishedTime:KLIMT_MUVEC_PUBLISHED,modifiedTime:KLIMT_MUVEC_MODIFIED},
  twitter:{card:'summary_large_image',title:c.metaTitle,description:c.description,images:[KLIMT_MUVEC_COVER]}
 };
}
