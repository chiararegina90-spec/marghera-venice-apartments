import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['padova'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/padova',languages:{'it-IT':'/guide/padova','en-GB':'/en/guide/padova','de-DE':'/de/guide/padova','fr-FR':'/fr/guide/padova','es-ES':'/es/guide/padova','zh-CN':'/zh/guide/padova','x-default':'/guide/padova'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/padova',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
