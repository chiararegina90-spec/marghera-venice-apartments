import {gunzipSync} from 'node:zlib';
import p0 from './journal-events-payload-0';
import p1 from './journal-events-payload-1';
import p2 from './journal-events-payload-2';
import p3 from './journal-events-payload-3';
import p4 from './journal-events-payload-4';
import {journalEventImagePair} from './journal-event-images';

export type EventLang='it'|'en'|'de'|'fr'|'es'|'zh';
export type EventArticle={slug:string;title:string;category:string;description:string;image:string;fallbackImage:string;imageAlt:string;commonsQuery:string;eventDate:string;lead:string;sections:readonly (readonly [string,string])[];tip:string;official:readonly [string,string];relatedSlugs:readonly string[]};
export const eventSlugs=['venicemarathon-2026','veleziana-2026','venice-cocktail-week-2026','venice-fashion-week-2026','venice-hospitality-challenge-2026','venice-design-week-2026','biennale-musica-2026','salone-alto-artigianato-italiano-2026','venice-noir-2026'] as const;
const decoded=JSON.parse(gunzipSync(Buffer.from(p0+p1+p2+p3+p4,'base64')).toString('utf8')) as Record<EventLang,Record<string,EventArticle>>;
for(const lang of Object.keys(decoded) as EventLang[])for(const slug of eventSlugs){const item=decoded[lang]?.[slug];const local=journalEventImagePair(slug);if(item&&local){item.image=local.card;item.fallbackImage=local.cover;item.commonsQuery='';}}
export const journalEvents2026=decoded;
export function eventArticles(lang:EventLang):EventArticle[]{return eventSlugs.map(slug=>decoded[lang][slug]);}
export function eventArticle(lang:EventLang,slug:string):EventArticle|undefined{return decoded[lang]?.[slug];}
