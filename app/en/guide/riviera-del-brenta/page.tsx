import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['riviera-del-brenta'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/riviera-del-brenta',languages:{'it-IT':'/guide/riviera-del-brenta','en-GB':'/en/guide/riviera-del-brenta','de-DE':'/de/guide/riviera-del-brenta','fr-FR':'/fr/guide/riviera-del-brenta','es-ES':'/es/guide/riviera-del-brenta','zh-CN':'/zh/guide/riviera-del-brenta','x-default':'/guide/riviera-del-brenta'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/riviera-del-brenta',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
