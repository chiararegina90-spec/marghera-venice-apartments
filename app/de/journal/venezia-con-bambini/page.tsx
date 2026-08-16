import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["venezia-con-bambini"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/venezia-con-bambini',languages:{'it-IT':'/journal/venezia-con-bambini','en-GB':'/en/journal/venezia-con-bambini','de-DE':'/de/journal/venezia-con-bambini','fr-FR':'/fr/journal/venezia-con-bambini','es-ES':'/es/journal/venezia-con-bambini','zh-CN':'/zh/journal/venezia-con-bambini','x-default':'/journal/venezia-con-bambini'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/venezia-con-bambini',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
