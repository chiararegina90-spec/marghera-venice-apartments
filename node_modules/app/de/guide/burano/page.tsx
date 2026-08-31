import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['burano'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/burano',languages:{'it-IT':'/guide/burano','en-GB':'/en/guide/burano','de-DE':'/de/guide/burano','fr-FR':'/fr/guide/burano','es-ES':'/es/guide/burano','zh-CN':'/zh/guide/burano','x-default':'/guide/burano'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/burano',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
