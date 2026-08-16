import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['veneto-in-bicicletta'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/veneto-in-bicicletta',languages:{'it-IT':'/guide/veneto-in-bicicletta','en-GB':'/en/guide/veneto-in-bicicletta','de-DE':'/de/guide/veneto-in-bicicletta','fr-FR':'/fr/guide/veneto-in-bicicletta','es-ES':'/es/guide/veneto-in-bicicletta','zh-CN':'/zh/guide/veneto-in-bicicletta','x-default':'/guide/veneto-in-bicicletta'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/veneto-in-bicicletta',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
