import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['murano'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide`,
 description:data.description,
 alternates:{canonical:'/en/guide/murano',languages:{'it-IT':'/guide/murano','en-GB':'/en/guide/murano','de-DE':'/de/guide/murano','fr-FR':'/fr/guide/murano','es-ES':'/es/guide/murano','zh-CN':'/zh/guide/murano','x-default':'/guide/murano'}},
 openGraph:{title:`${data.title} Travel Guide`,description:data.description,url:'/en/guide/murano',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
