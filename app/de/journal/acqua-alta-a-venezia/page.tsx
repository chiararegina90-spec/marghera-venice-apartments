import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["acqua-alta-a-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/acqua-alta-a-venezia',languages:{'it-IT':'/journal/acqua-alta-a-venezia','en-GB':'/en/journal/acqua-alta-a-venezia','de-DE':'/de/journal/acqua-alta-a-venezia','fr-FR':'/fr/journal/acqua-alta-a-venezia','es-ES':'/es/journal/acqua-alta-a-venezia','zh-CN':'/zh/journal/acqua-alta-a-venezia','x-default':'/journal/acqua-alta-a-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/acqua-alta-a-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
