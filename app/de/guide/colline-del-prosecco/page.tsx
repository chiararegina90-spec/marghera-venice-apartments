import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['colline-del-prosecco'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/colline-del-prosecco',languages:{'it-IT':'/guide/colline-del-prosecco','en-GB':'/en/guide/colline-del-prosecco','de-DE':'/de/guide/colline-del-prosecco','fr-FR':'/fr/guide/colline-del-prosecco','es-ES':'/es/guide/colline-del-prosecco','zh-CN':'/zh/guide/colline-del-prosecco','x-default':'/guide/colline-del-prosecco'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/colline-del-prosecco',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
