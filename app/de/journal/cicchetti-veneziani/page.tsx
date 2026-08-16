import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["cicchetti-veneziani"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/cicchetti-veneziani',languages:{'it-IT':'/journal/cicchetti-veneziani','en-GB':'/en/journal/cicchetti-veneziani','de-DE':'/de/journal/cicchetti-veneziani','fr-FR':'/fr/journal/cicchetti-veneziani','es-ES':'/es/journal/cicchetti-veneziani','zh-CN':'/zh/journal/cicchetti-veneziani','x-default':'/journal/cicchetti-veneziani'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/cicchetti-veneziani',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
