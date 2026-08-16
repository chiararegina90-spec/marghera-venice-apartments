import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['colline-del-prosecco'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/colline-del-prosecco',languages:{'it-IT':'/guide/colline-del-prosecco','en-GB':'/en/guide/colline-del-prosecco','de-DE':'/de/guide/colline-del-prosecco','fr-FR':'/fr/guide/colline-del-prosecco','es-ES':'/es/guide/colline-del-prosecco','zh-CN':'/zh/guide/colline-del-prosecco','x-default':'/guide/colline-del-prosecco'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/colline-del-prosecco',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
