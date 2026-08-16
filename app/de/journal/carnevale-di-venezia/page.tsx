import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["carnevale-di-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/carnevale-di-venezia',languages:{'it-IT':'/journal/carnevale-di-venezia','en-GB':'/en/journal/carnevale-di-venezia','de-DE':'/de/journal/carnevale-di-venezia','fr-FR':'/fr/journal/carnevale-di-venezia','es-ES':'/es/journal/carnevale-di-venezia','zh-CN':'/zh/journal/carnevale-di-venezia','x-default':'/journal/carnevale-di-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/carnevale-di-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
