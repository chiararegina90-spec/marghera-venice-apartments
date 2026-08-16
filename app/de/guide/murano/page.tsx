import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['murano'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/murano',languages:{'it-IT':'/guide/murano','en-GB':'/en/guide/murano','de-DE':'/de/guide/murano','fr-FR':'/fr/guide/murano','es-ES':'/es/guide/murano','zh-CN':'/zh/guide/murano','x-default':'/guide/murano'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/murano',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
