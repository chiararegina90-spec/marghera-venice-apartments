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
