import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['chioggia'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide`,
 description:data.description,
 alternates:{canonical:'/en/guide/chioggia',languages:{'it-IT':'/guide/chioggia','en-GB':'/en/guide/chioggia','de-DE':'/de/guide/chioggia','fr-FR':'/fr/guide/chioggia','es-ES':'/es/guide/chioggia','zh-CN':'/zh/guide/chioggia','x-default':'/guide/chioggia'}},
 openGraph:{title:`${data.title} Travel Guide`,description:data.description,url:'/en/guide/chioggia',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
