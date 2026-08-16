import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['riviera-del-brenta'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer`,
 description:data.description,
 alternates:{canonical:'/de/guide/riviera-del-brenta',languages:{'it-IT':'/guide/riviera-del-brenta','en-GB':'/en/guide/riviera-del-brenta','de-DE':'/de/guide/riviera-del-brenta','fr-FR':'/fr/guide/riviera-del-brenta','es-ES':'/es/guide/riviera-del-brenta','zh-CN':'/zh/guide/riviera-del-brenta','x-default':'/guide/riviera-del-brenta'}},
 openGraph:{title:`${data.title} Reiseführer`,description:data.description,url:'/de/guide/riviera-del-brenta',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
