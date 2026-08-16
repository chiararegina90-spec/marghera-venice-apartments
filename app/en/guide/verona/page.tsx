import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['verona'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/verona',languages:{'it-IT':'/guide/verona','en-GB':'/en/guide/verona','de-DE':'/de/guide/verona','fr-FR':'/fr/guide/verona','es-ES':'/es/guide/verona','zh-CN':'/zh/guide/verona','x-default':'/guide/verona'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/verona',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
