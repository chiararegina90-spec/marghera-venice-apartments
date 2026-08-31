import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['padova'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide`,
 description:data.description,
 alternates:{canonical:'/en/guide/padova',languages:{'it-IT':'/guide/padova','en-GB':'/en/guide/padova','de-DE':'/de/guide/padova','fr-FR':'/fr/guide/padova','es-ES':'/es/guide/padova','zh-CN':'/zh/guide/padova','x-default':'/guide/padova'}},
 openGraph:{title:`${data.title} Travel Guide`,description:data.description,url:'/en/guide/padova',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
