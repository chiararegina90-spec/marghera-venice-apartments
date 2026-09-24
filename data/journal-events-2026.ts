import {gunzipSync} from 'node:zlib';
import p0 from './journal-events-payload-0';
import p1 from './journal-events-payload-1';
import p2 from './journal-events-payload-2';
import p3 from './journal-events-payload-3';
import p4 from './journal-events-payload-4';
import {journalEventImagePair} from './journal-event-images';
import {eventCalendarDates} from './event-calendar';
import {salone2026Overrides} from './salone2026Overrides';
import {biennaleMusica2026Overrides} from './biennaleMusica2026Overrides';
import {veniceNoir2026Overrides} from './veniceNoir2026Overrides';
import {madonnaSalute2026} from './madonnaSalute2026';
import {sanMicheleJournal} from './sanMicheleJournal';
import {sanMartinoJournal} from './sanMartinoJournal';
import {veneziaNovembreJournal} from './veneziaNovembreJournal';
import {venicemarathon2026Overrides} from './venicemarathon2026Overrides';
import {journalEvents2027} from './journal2027Events';
import {arteLagunaPrize2026} from './arteLagunaPrize2026';

export type EventLang='it'|'en'|'de'|'fr'|'es'|'zh';
export type EventLocation={name:string;streetAddress?:string;addressLocality:string;addressCountry:string};
export type EventSectionLink={section:number;text:string;label:string;href:string;tail?:string};
export type EventFaq={question:string;answer:string};
export type EventStayCta={eyebrow?:string;title:string;text:string};
export type EventArticle={slug:string;title:string;metaTitle?:string;category:string;description:string;image:string;fallbackImage:string;imageAlt:string;commonsQuery:string;eventDate:string;lead:string;sections:readonly (readonly [string,string])[];tip:string;official:readonly [string,string];relatedSlugs:readonly string[];relatedLinks?:readonly (readonly [string,string])[];internalLink?:{text:string;label:string;href:string;tail:string};sectionLinks?:readonly EventSectionLink[];faq?:readonly EventFaq[];stayCta?:EventStayCta;startDate?:string;endDate?:string;datePublished?:string;dateModified?:string;eventLocation?:EventLocation;eventLocations?:readonly EventLocation[]};
export const eventSlugs=['venicemarathon-2026','veleziana-2026','venice-cocktail-week-2026','venice-fashion-week-2026','venice-hospitality-challenge-2026','venice-design-week-2026','biennale-musica-2026','salone-alto-artigianato-italiano-2026','venice-noir-2026','festa-madonna-salute-venezia','san-martino-venezia','venezia-a-novembre','arte-laguna-prize-2026','cimitero-san-michele-venezia','biennale-architettura-2027','regata-storica-2027','venicemarathon-2027'] as const;
const eventTechnicalData:Record<(typeof eventSlugs)[number],{startDate?:string;endDate?:string;eventLocation?:EventLocation}>={
  'venicemarathon-2026':{...eventCalendarDates['venicemarathon-2026'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'veleziana-2026':{...eventCalendarDates['veleziana-2026'],eventLocation:{name:'Bacino di San Marco',addressLocality:'Venezia',addressCountry:'IT'}},
  'venice-cocktail-week-2026':{...eventCalendarDates['venice-cocktail-week-2026'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'venice-fashion-week-2026':{...eventCalendarDates['venice-fashion-week-2026'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'venice-hospitality-challenge-2026':{...eventCalendarDates['venice-hospitality-challenge-2026'],eventLocation:{name:'Bacino di San Marco',addressLocality:'Venezia',addressCountry:'IT'}},
  'venice-design-week-2026':{...eventCalendarDates['venice-design-week-2026'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'biennale-musica-2026':{...eventCalendarDates['biennale-musica-2026']},
  'salone-alto-artigianato-italiano-2026':{...eventCalendarDates['salone-alto-artigianato-italiano-2026']},
  'venice-noir-2026':{...eventCalendarDates['venice-noir-2026'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'festa-madonna-salute-venezia':{...eventCalendarDates['festa-madonna-salute-venezia'],eventLocation:{name:'Basilica di Santa Maria della Salute',streetAddress:'Dorsoduro 1',addressLocality:'Venezia',addressCountry:'IT'}},
  'san-martino-venezia':{...eventCalendarDates['san-martino-venezia'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},
  'venezia-a-novembre':{},
  'arte-laguna-prize-2026':{...eventCalendarDates['arte-laguna-prize-2026'],eventLocation:{name:'Arsenale Nord – Tese 89-90-91',addressLocality:'Venezia',addressCountry:'IT'}},
  'cimitero-san-michele-venezia':{eventLocation:{name:'Cimitero di San Michele in Isola',addressLocality:'Venezia',addressCountry:'IT'}},
  'biennale-architettura-2027':{...eventCalendarDates['biennale-architettura-2027']},
  'regata-storica-2027':{...eventCalendarDates['regata-storica-2027'],eventLocation:{name:'Canal Grande',addressLocality:'Venezia',addressCountry:'IT'}},
  'venicemarathon-2027':{...eventCalendarDates['venicemarathon-2027'],eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}}
};
const decoded=JSON.parse(gunzipSync(Buffer.from(p0+p1+p2+p3+p4,'base64')).toString('utf8')) as Record<EventLang,Record<string,EventArticle>>;
const early2027Slugs=['biennale-architettura-2027','regata-storica-2027','venicemarathon-2027'] as const;
for(const lang of Object.keys(decoded) as EventLang[]){
  decoded[lang]['festa-madonna-salute-venezia']=madonnaSalute2026[lang] as EventArticle;
  decoded[lang]['san-martino-venezia']=sanMartinoJournal[lang] as EventArticle;
  decoded[lang]['venezia-a-novembre']=veneziaNovembreJournal[lang] as EventArticle;
  decoded[lang]['arte-laguna-prize-2026']=arteLagunaPrize2026[lang] as EventArticle;
  decoded[lang]['cimitero-san-michele-venezia']=sanMicheleJournal[lang] as EventArticle;
  for(const slug of early2027Slugs)decoded[lang][slug]=journalEvents2027[lang][slug];
  for(const slug of eventSlugs){
    const item=decoded[lang]?.[slug];
    const local=journalEventImagePair(slug);
    if(item)Object.assign(item,eventTechnicalData[slug]);
    if(item&&local){item.image=local.card;item.fallbackImage=local.cover;item.commonsQuery='';}
    if(item&&slug==='venicemarathon-2026'){
      Object.assign(item,venicemarathon2026Overrides[lang]);
      item.relatedSlugs=['venicemarathon-2027',...(item.relatedSlugs||[]).filter(x=>x!=='venicemarathon-2027')];
    }
    if(item&&slug==='salone-alto-artigianato-italiano-2026')Object.assign(item,salone2026Overrides[lang]);
    if(item&&slug==='biennale-musica-2026')Object.assign(item,biennaleMusica2026Overrides[lang]);
    if(item&&slug==='venice-noir-2026')Object.assign(item,veniceNoir2026Overrides[lang]);
  }
}
export const journalEvents2026=decoded;
export function eventArticles(lang:EventLang):EventArticle[]{return eventSlugs.map(slug=>decoded[lang][slug]);}
export function eventArticle(lang:EventLang,slug:string):EventArticle|undefined{return decoded[lang]?.[slug];}
