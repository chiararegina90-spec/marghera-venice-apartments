import type {MetadataRoute} from 'next';
import {localePath,siteLangs,hreflang,type SiteLang} from '@/lib/i18n';
import {culturePlaces,type CultureLang,type CultureScope} from '@/data/culturePlaces';
import {cultureDetailPath,cultureIndexPath} from '@/data/cultureTranslations';
import {eventSlugs} from '@/data/journal-events-2026';
import {guideData} from '@/data/guides';
import {journalDe} from '@/data/journal-de';
import {seoGuideSlugs,seoJournalSlugs} from '@/data/seoEvergreenContent';

const baseUrl='https://www.margheraveniceapartments.com';
const commonLogicalRoutes=['/','/case/rossi-apartment','/case/dimora-castelli','/come-raggiungere-venezia','/faq','/collaborazioni','/collaborazioni/row-venice','/collaborazioni/i-campi','/link-utili','/privacy-policy','/cookie-policy','/scopri-venezia','/scopri-il-veneto','/guide','/journal','/dove-mangiare','/servizi-in-zona'] as const;
function absolute(path:string){return `${baseUrl}${path==='/'?'':path}`;}
function localizedAlternates(logicalPath:string){const languages=Object.fromEntries(siteLangs.map(lang=>[hreflang[lang],absolute(localePath(logicalPath,lang))]));return {...languages,'x-default':absolute(localePath(logicalPath,'it'))};}
function item(logicalPath:string,lang:SiteLang,priority:number,changeFrequency:'weekly'|'monthly'='monthly'){const path=localePath(logicalPath,lang);return {url:absolute(path),changeFrequency,priority,alternates:{languages:localizedAlternates(logicalPath)}} as const;}
function cultureAlternates(scope:CultureScope,slug?:string){const languages=Object.fromEntries(siteLangs.map(lang=>[hreflang[lang],absolute(slug?cultureDetailPath(scope,lang as CultureLang,slug):cultureIndexPath(scope,lang as CultureLang))]));return {...languages,'x-default':absolute(slug?cultureDetailPath(scope,'it',slug):cultureIndexPath(scope,'it'))};}
function cultureSitemap():MetadataRoute.Sitemap{const scopes:CultureScope[]=['venice','veneto'];const indexes=scopes.flatMap(scope=>siteLangs.map(lang=>({url:absolute(cultureIndexPath(scope,lang as CultureLang)),changeFrequency:'weekly' as const,priority:0.85,alternates:{languages:cultureAlternates(scope)}})));const details=culturePlaces.flatMap(place=>siteLangs.map(lang=>({url:absolute(cultureDetailPath(place.scope,lang as CultureLang,place.slug)),changeFrequency:'monthly' as const,priority:0.72,alternates:{languages:cultureAlternates(place.scope,place.slug)}})));return [...indexes,...details];}
export default function sitemap():MetadataRoute.Sitemap{
 const guideSlugs=Array.from(new Set([...Object.keys(guideData),...seoGuideSlugs]));
 const journalSlugs=Array.from(new Set([...Object.keys(journalDe),...eventSlugs,...seoJournalSlugs]));
 const logicalRoutes=[...commonLogicalRoutes,...guideSlugs.map(slug=>`/guide/${slug}`),...journalSlugs.map(slug=>`/journal/${slug}`)];
 const entries=logicalRoutes.flatMap(logical=>siteLangs.map(lang=>{const priority=logical==='/'?1:logical.startsWith('/case/')?0.9:logical==='/come-raggiungere-venezia'?0.8:logical.startsWith('/journal/')?0.78:logical.startsWith('/guide/')?0.76:0.7;const frequency=logical==='/'||logical==='/journal'||logical.startsWith('/journal/')?'weekly' as const:'monthly' as const;return item(logical,lang,priority,frequency);});
 const deduped=new Map<string,MetadataRoute.Sitemap[number]>();for(const entry of [...entries,...cultureSitemap()])deduped.set(entry.url,entry);return Array.from(deduped.values());
}
