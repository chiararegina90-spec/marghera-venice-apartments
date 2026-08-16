import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["biennale-di-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/biennale-di-venezia',languages:{'it-IT':'/journal/biennale-di-venezia','en-GB':'/en/journal/biennale-di-venezia','de-DE':'/de/journal/biennale-di-venezia','fr-FR':'/fr/journal/biennale-di-venezia','es-ES':'/es/journal/biennale-di-venezia','zh-CN':'/zh/journal/biennale-di-venezia','x-default':'/journal/biennale-di-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/biennale-di-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
