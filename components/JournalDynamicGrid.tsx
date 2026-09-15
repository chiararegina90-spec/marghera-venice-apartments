import JournalFilterGrid,{type JournalFilterItem} from '@/components/JournalFilterGrid';
import {eventArticles,type EventLang} from '@/data/journal-events-2026';
import {journalEventImagePair} from '@/data/journal-event-images';
import {seoJournalItems} from '@/data/seoEvergreenContent';

const film2027:Record<EventLang,{title:string;eventDate:string;text:string}>={
  it:{title:'Mostra del Cinema di Venezia 2027',eventDate:'1–11 SETTEMBRE 2027',text:'Le date della 84ª Mostra sono già state annunciate: guida in aggiornamento su programma, biglietti, red carpet e Lido.'},
  en:{title:'Venice Film Festival 2027',eventDate:'1–11 SEPTEMBER 2027',text:'The dates of the 84th Festival have been announced. Follow our evolving guide to the programme, tickets, red carpet and Lido.'},
  de:{title:'Filmfestspiele Venedig 2027',eventDate:'1.–11. SEPTEMBER 2027',text:'Die Termine der 84. Filmfestspiele wurden angekündigt. Unser Guide wird mit Programm, Tickets, Rotem Teppich und Lido-Infos ergänzt.'},
  fr:{title:'Mostra de Venise 2027',eventDate:'1–11 SEPTEMBRE 2027',text:'Les dates de la 84e Mostra ont été annoncées. Guide mis à jour progressivement avec programme, billets, tapis rouge et Lido.'},
  es:{title:'Festival de Cine de Venecia 2027',eventDate:'1–11 SEPTIEMBRE 2027',text:'Ya se han anunciado las fechas de la 84.ª Mostra. Guía en actualización con programa, entradas, alfombra roja y Lido.'},
  zh:{title:'2027 威尼斯电影节',eventDate:'2027年9月1–11日',text:'第84届威尼斯电影节日期已经公布。本指南将持续更新节目、门票、红毯与丽都岛实用信息。'}
};

const vespucci2026:Record<EventLang,{title:string;eventDate:string}>={
  it:{title:'Amerigo Vespucci a Venezia 2026',eventDate:'2–7 OTTOBRE 2026'},
  en:{title:'Amerigo Vespucci in Venice 2026',eventDate:'2–7 OCTOBER 2026'},
  de:{title:'Amerigo Vespucci in Venedig 2026',eventDate:'2.–7. OKTOBER 2026'},
  fr:{title:'Amerigo Vespucci à Venise 2026',eventDate:'2–7 OCTOBRE 2026'},
  es:{title:'Amerigo Vespucci en Venecia 2026',eventDate:'2–7 OCTUBRE 2026'},
  zh:{title:'2026 Amerigo Vespucci 威尼斯停靠',eventDate:'2026年10月2–7日'}
};

export default function JournalDynamicGrid({items,lang='it',readLabel}:{items:JournalFilterItem[];lang?:EventLang;readLabel?:string}){
  const prefix=lang==='it'?'':`/${lang}`;
  const dynamicEvents:JournalFilterItem[]=eventArticles(lang).map(a=>{
    const local=journalEventImagePair(a.slug);
    return {
      title:a.title,category:a.category,text:a.description,image:local?.card||a.image,alt:a.imageAlt,
      href:`${prefix}/journal/${a.slug}`,eventDate:a.eventDate,commonsQuery:a.commonsQuery||undefined,
      fallbackImage:local?.cover||a.fallbackImage,startDate:a.startDate,endDate:a.endDate
    };
  });
  const sharedEvergreen=seoJournalItems(lang);
  const currentItems=items.map(item=>{
    const href=item.href.replace(/\/$/,'');
    if(href.endsWith('/journal/mostra-del-cinema'))return {...item,...film2027[lang],startDate:'2027-09-01',endDate:'2027-09-11'};
    if(href.endsWith('/journal/amerigo-vespucci-venezia-2026'))return {...item,...vespucci2026[lang],startDate:'2026-10-02',endDate:'2026-10-07'};
    return item;
  });
  return <JournalFilterGrid items={[...currentItems,...sharedEvergreen]} dynamicEvents={dynamicEvents} lang={lang} readLabel={readLabel}/>;
}
