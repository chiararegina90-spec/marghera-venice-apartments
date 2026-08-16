import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["dove-parcheggiare-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/dove-parcheggiare-venezia',languages:{'it-IT':'/journal/dove-parcheggiare-venezia','en-GB':'/en/journal/dove-parcheggiare-venezia','de-DE':'/de/journal/dove-parcheggiare-venezia','fr-FR':'/fr/journal/dove-parcheggiare-venezia','es-ES':'/es/journal/dove-parcheggiare-venezia','zh-CN':'/zh/journal/dove-parcheggiare-venezia','x-default':'/journal/dove-parcheggiare-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/dove-parcheggiare-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
