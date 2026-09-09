import JournalFilterGrid,{type JournalFilterItem} from '@/components/JournalFilterGrid';
import {eventArticles,type EventLang} from '@/data/journal-events-2026';
import {journalEventImagePair} from '@/data/journal-event-images';

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
  return <JournalFilterGrid items={items} dynamicEvents={dynamicEvents} lang={lang} readLabel={readLabel}/>;
}
