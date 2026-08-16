import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['jesolo'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/jesolo',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
