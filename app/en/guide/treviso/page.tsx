import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['treviso'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide`,
 description:data.description,
 alternates:{canonical:'/en/guide/treviso',languages:{'it-IT':'/guide/treviso','en-GB':'/en/guide/treviso','de-DE':'/de/guide/treviso','fr-FR':'/fr/guide/treviso','es-ES':'/es/guide/treviso','zh-CN':'/zh/guide/treviso','x-default':'/guide/treviso'}},
 openGraph:{title:`${data.title} Travel Guide`,description:data.description,url:'/en/guide/treviso',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
