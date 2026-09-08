import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {languageAlternates} from '@/lib/i18n';
import EventJournalArticle from '@/components/EventJournalArticle';
import {eventArticle,eventSlugs} from '@/data/journal-events-2026';

const lang='es' as const;
const prefix='/es/journal';
type Params={eventSlug:string};

export function generateStaticParams(){return eventSlugs.map(eventSlug=>({eventSlug}));}

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {eventSlug}=await params;
  const data=eventArticle(lang,eventSlug);
  if(!data)return {};
  const path=`${prefix}/${eventSlug}`;
  const metaTitle=data.metaTitle||data.title;
  return {title:metaTitle,description:data.description,alternates:languageAlternates(path),openGraph:{type:'article',title:metaTitle,description:data.description,images:[data.fallbackImage]},twitter:{card:'summary_large_image',title:metaTitle,description:data.description,images:[data.fallbackImage]}};
}

export default async function Page({params}:{params:Promise<Params>}){
  const {eventSlug}=await params;
  const data=eventArticle(lang,eventSlug);
  if(!data)notFound();
  return <EventJournalArticle lang={lang} data={data}/>;
}
