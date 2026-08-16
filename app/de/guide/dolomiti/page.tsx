import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['dolomiti'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/dolomiti',languages:{'it-IT':'/guide/dolomiti','en-GB':'/en/guide/dolomiti','de-DE':'/de/guide/dolomiti','fr-FR':'/fr/guide/dolomiti','es-ES':'/es/guide/dolomiti','zh-CN':'/zh/guide/dolomiti','x-default':'/guide/dolomiti'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/dolomiti',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
