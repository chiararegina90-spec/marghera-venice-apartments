import type {Metadata} from 'next';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe["natale-capodanno-venezia"];
export const metadata:Metadata={title:`${data.title} | Venedig Reisemagazin`,description:data.description,alternates:{canonical:'/de/journal/natale-capodanno-venezia',languages:{'it-IT':'/journal/natale-capodanno-venezia','en-GB':'/en/journal/natale-capodanno-venezia','de-DE':'/de/journal/natale-capodanno-venezia','fr-FR':'/fr/journal/natale-capodanno-venezia','es-ES':'/es/journal/natale-capodanno-venezia','zh-CN':'/zh/journal/natale-capodanno-venezia','x-default':'/journal/natale-capodanno-venezia'}},openGraph:{title:data.title,description:data.description,url:'/de/journal/natale-capodanno-venezia',locale:'de_DE',type:'article',images:[data.image]},twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
