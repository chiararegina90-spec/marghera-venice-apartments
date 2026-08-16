import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['sant-erasmo'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/sant-erasmo',languages:{'it-IT':'/guide/sant-erasmo','en-GB':'/en/guide/sant-erasmo','de-DE':'/de/guide/sant-erasmo','fr-FR':'/fr/guide/sant-erasmo','es-ES':'/es/guide/sant-erasmo','zh-CN':'/zh/guide/sant-erasmo','x-default':'/guide/sant-erasmo'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/sant-erasmo',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
