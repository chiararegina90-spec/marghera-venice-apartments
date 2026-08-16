import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['sant-erasmo'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/sant-erasmo',languages:{'it-IT':'/guide/sant-erasmo','en-GB':'/en/guide/sant-erasmo','de-DE':'/de/guide/sant-erasmo','fr-FR':'/fr/guide/sant-erasmo','es-ES':'/es/guide/sant-erasmo','zh-CN':'/zh/guide/sant-erasmo','x-default':'/guide/sant-erasmo'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/sant-erasmo',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
