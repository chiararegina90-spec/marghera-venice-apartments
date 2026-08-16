import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["buone-maniere-a-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/buone-maniere-a-venezia',languages:{'it-IT':'/journal/buone-maniere-a-venezia','en-GB':'/en/journal/buone-maniere-a-venezia','de-DE':'/de/journal/buone-maniere-a-venezia','fr-FR':'/fr/journal/buone-maniere-a-venezia','es-ES':'/es/journal/buone-maniere-a-venezia','zh-CN':'/zh/journal/buone-maniere-a-venezia','x-default':'/journal/buone-maniere-a-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/buone-maniere-a-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
