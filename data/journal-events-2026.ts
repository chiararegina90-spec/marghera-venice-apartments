import {gunzipSync} from 'node:zlib';
import p0 from './journal-events-payload-0';
import p1 from './journal-events-payload-1';
import p2 from './journal-events-payload-2';
import p3 from './journal-events-payload-3';
import p4 from './journal-events-payload-4';
import {journalEventImagePair} from './journal-event-images';
import {salone2026Overrides} from './salone2026Overrides';
import {biennaleMusica2026Overrides} from './biennaleMusica2026Overrides';

export type EventLang='it'|'en'|'de'|'fr'|'es'|'zh';
export type EventLocation={name:string;streetAddress?:string;addressLocality:string;addressCountry:string};
export type EventArticle={slug:string;title:string;metaTitle?:string;category:string;description:string;image:string;fallbackImage:string;imageAlt:string;commonsQuery:string;eventDate:string;lead:string;sections:readonly (readonly [string,string])[];tip:string;official:readonly [string,string];relatedSlugs:readonly string[];relatedLinks?:readonly (readonly [string,string])[];internalLink?:{text:string;label:string;href:string;tail:string};startDate?:string;endDate?:string;datePublished?:string;dateModified?:string;eventLocation?:EventLocation;eventLocations?:readonly EventLocation[]};
export const eventSlugs=['venicemarathon-2026','veleziana-2026','venice-cocktail-week-2026','venice-fashion-week-2026','venice-hospitality-challenge-2026','venice-design-week-2026','biennale-musica-2026','salone-alto-artigianato-italiano-2026','venice-noir-2026'] as const;
const eventTechnicalData:Record<(typeof eventSlugs)[number],{startDate:string;endDate:string;eventLocation?:EventLocation}>={
'venicemarathon-2026':{startDate:'2026-10-25',endDate:'2026-10-25',eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},'veleziana-2026':{startDate:'2026-10-10',endDate:'2026-10-18',eventLocation:{name:'Bacino di San Marco',addressLocality:'Venezia',addressCountry:'IT'}},'venice-cocktail-week-2026':{startDate:'2026-10-21',endDate:'2026-10-25',eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},'venice-fashion-week-2026':{startDate:'2026-10-19',endDate:'2026-10-24',eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},'venice-hospitality-challenge-2026':{startDate:'2026-10-17',endDate:'2026-10-17',eventLocation:{name:'Bacino di San Marco',addressLocality:'Venezia',addressCountry:'IT'}},'venice-design-week-2026':{startDate:'2026-10-09',endDate:'2026-10-18',eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}},'biennale-musica-2026':{startDate:'2026-10-10',endDate:'2026-10-24'},'salone-alto-artigianato-italiano-2026':{startDate:'2026-10-01',endDate:'2026-10-04'},'venice-noir-2026':{startDate:'2026-11-12',endDate:'2026-11-15',eventLocation:{name:'Venezia',addressLocality:'Venezia',addressCountry:'IT'}}};
const decoded=JSON.parse(gunzipSync(Buffer.from(p0+p1+p2+p3+p4,'base64')).toString('utf8')) as Record<EventLang,Record<string,EventArticle>>;
for(const lang of Object.keys(decoded) as EventLang[])for(const slug of eventSlugs){
  const item=decoded[lang]?.[slug];
  const local=journalEventImagePair(slug);
  if(item)Object.assign(item,eventTechnicalData[slug]);
  if(item&&local){item.image=local.card;item.fallbackImage=local.cover;item.commonsQuery='';}
  if(item&&slug==='salone-alto-artigianato-italiano-2026'){
    Object.assign(item,salone2026Overrides[lang]);
  }
  if(item&&slug==='biennale-musica-2026'){
    Object.assign(item,biennaleMusica2026Overrides[lang]);
  }
}
export const journalEvents2026=decoded;
export function eventArticles(lang:EventLang):EventArticle[]{return eventSlugs.map(slug=>decoded[lang][slug]);}
export function eventArticle(lang:EventLang,slug:string):EventArticle|undefined{return decoded[lang]?.[slug];}
