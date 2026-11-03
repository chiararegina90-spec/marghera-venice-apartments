import type {EventArticle,EventLang} from './journal-events-2026';

export function applyJournalCatchup20261103(item:EventArticle,_lang:EventLang,slug:string){
 if(slug==='venezia-a-novembre') item.dateModified='2026-11-03';
}
