import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['lido-di-venezia'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/lido-di-venezia',languages:{'it-IT':'/guide/lido-di-venezia','en-GB':'/en/guide/lido-di-venezia','de-DE':'/de/guide/lido-di-venezia','fr-FR':'/fr/guide/lido-di-venezia','es-ES':'/es/guide/lido-di-venezia','zh-CN':'/zh/guide/lido-di-venezia','x-default':'/guide/lido-di-venezia'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/lido-di-venezia',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
