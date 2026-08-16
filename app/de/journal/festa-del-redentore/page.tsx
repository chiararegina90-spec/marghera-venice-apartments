import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["festa-del-redentore"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/festa-del-redentore',languages:{'it-IT':'/journal/festa-del-redentore','en-GB':'/en/journal/festa-del-redentore','de-DE':'/de/journal/festa-del-redentore','fr-FR':'/fr/journal/festa-del-redentore','es-ES':'/es/journal/festa-del-redentore','zh-CN':'/zh/journal/festa-del-redentore','x-default':'/journal/festa-del-redentore'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/festa-del-redentore',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
