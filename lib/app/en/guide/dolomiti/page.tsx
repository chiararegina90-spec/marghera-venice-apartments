import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['dolomiti'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide`,
 description:data.description,
 alternates:{canonical:'/en/guide/dolomiti',languages:{'it-IT':'/guide/dolomiti','en-GB':'/en/guide/dolomiti','de-DE':'/de/guide/dolomiti','fr-FR':'/fr/guide/dolomiti','es-ES':'/es/guide/dolomiti','zh-CN':'/zh/guide/dolomiti','x-default':'/guide/dolomiti'}},
 openGraph:{title:`${data.title} Travel Guide`,description:data.description,url:'/en/guide/dolomiti',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
