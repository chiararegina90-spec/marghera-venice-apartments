import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["mostra-del-cinema"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/mostra-del-cinema',languages:{'it-IT':'/journal/mostra-del-cinema','en-GB':'/en/journal/mostra-del-cinema','de-DE':'/de/journal/mostra-del-cinema','fr-FR':'/fr/journal/mostra-del-cinema','es-ES':'/es/journal/mostra-del-cinema','zh-CN':'/zh/journal/mostra-del-cinema','x-default':'/journal/mostra-del-cinema'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/mostra-del-cinema',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
