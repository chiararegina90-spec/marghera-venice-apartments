import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['jesolo'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/jesolo',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
