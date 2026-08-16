import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['certosa'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/certosa',languages:{'it-IT':'/guide/certosa','en-GB':'/en/guide/certosa','de-DE':'/de/guide/certosa','fr-FR':'/fr/guide/certosa','es-ES':'/es/guide/certosa','zh-CN':'/zh/guide/certosa','x-default':'/guide/certosa'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/certosa',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
