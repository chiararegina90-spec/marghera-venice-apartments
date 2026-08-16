import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["spritz-veneziano"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/spritz-veneziano',languages:{'it-IT':'/journal/spritz-veneziano','en-GB':'/en/journal/spritz-veneziano','de-DE':'/de/journal/spritz-veneziano','fr-FR':'/fr/journal/spritz-veneziano','es-ES':'/es/journal/spritz-veneziano','zh-CN':'/zh/journal/spritz-veneziano','x-default':'/journal/spritz-veneziano'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/spritz-veneziano',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
