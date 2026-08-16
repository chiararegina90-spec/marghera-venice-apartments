import type {Metadata} from 'next';
import GuideTemplateEn from '@/components/GuideTemplateEn';
import {guideDataEn} from '@/data/guides-en';

const data=guideDataEn['veneto-in-bicicletta'];
export const metadata:Metadata={
 title:`${data.title} Travel Guide | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/en/guide/veneto-in-bicicletta',languages:{'it-IT':'/guide/veneto-in-bicicletta','en-GB':'/en/guide/veneto-in-bicicletta','de-DE':'/de/guide/veneto-in-bicicletta','fr-FR':'/fr/guide/veneto-in-bicicletta','es-ES':'/es/guide/veneto-in-bicicletta','zh-CN':'/zh/guide/veneto-in-bicicletta','x-default':'/guide/veneto-in-bicicletta'}},
 openGraph:{title:`${data.title} Travel Guide | Marghera Venice Apartments`,description:data.description,url:'/en/guide/veneto-in-bicicletta',locale:'en_GB',type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:`${data.title} Travel Guide`,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplateEn data={data}/>}
