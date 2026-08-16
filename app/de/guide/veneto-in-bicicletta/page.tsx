import type {Metadata} from 'next';
import GuideTemplateDe from '@/components/GuideTemplateDe';
import {guideDataDe} from '@/data/guides-de';

const data=guideDataDe['veneto-in-bicicletta'];
export const metadata:Metadata={
 title:`${data.title} Reiseführer | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/de/guide/veneto-in-bicicletta',languages:{'it-IT':'/guide/veneto-in-bicicletta','en-GB':'/en/guide/veneto-in-bicicletta','de-DE':'/de/guide/veneto-in-bicicletta','fr-FR':'/fr/guide/veneto-in-bicicletta','es-ES':'/es/guide/veneto-in-bicicletta','zh-CN':'/zh/guide/veneto-in-bicicletta','x-default':'/guide/veneto-in-bicicletta'}},
 openGraph:{title:`${data.title} Reiseführer | Marghera Venice Apartments`,description:data.description,url:'/de/guide/veneto-in-bicicletta',locale:'de_DE',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Reiseführer`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateDe data={data}/>}
