import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['chioggia'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/chioggia',languages:{'it-IT':'/guide/chioggia','en-GB':'/en/guide/chioggia','de-DE':'/de/guide/chioggia','fr-FR':'/fr/guide/chioggia','es-ES':'/es/guide/chioggia','zh-CN':'/zh/guide/chioggia','x-default':'/guide/chioggia'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/chioggia',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
