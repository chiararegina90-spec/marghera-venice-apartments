import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['pellestrina'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/pellestrina',languages:{'it-IT':'/guide/pellestrina','en-GB':'/en/guide/pellestrina','de-DE':'/de/guide/pellestrina','fr-FR':'/fr/guide/pellestrina','es-ES':'/es/guide/pellestrina','zh-CN':'/zh/guide/pellestrina','x-default':'/guide/pellestrina'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/pellestrina',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
