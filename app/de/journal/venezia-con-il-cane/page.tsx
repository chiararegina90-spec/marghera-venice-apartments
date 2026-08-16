import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["venezia-con-il-cane"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/venezia-con-il-cane',languages:{'it-IT':'/journal/venezia-con-il-cane','en-GB':'/en/journal/venezia-con-il-cane','de-DE':'/de/journal/venezia-con-il-cane','fr-FR':'/fr/journal/venezia-con-il-cane','es-ES':'/es/journal/venezia-con-il-cane','zh-CN':'/zh/journal/venezia-con-il-cane','x-default':'/journal/venezia-con-il-cane'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/venezia-con-il-cane',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
