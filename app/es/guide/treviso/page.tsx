import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['treviso'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/treviso',languages:{'it-IT':'/guide/treviso','en-GB':'/en/guide/treviso','de-DE':'/de/guide/treviso','fr-FR':'/fr/guide/treviso','es-ES':'/es/guide/treviso','zh-CN':'/zh/guide/treviso','x-default':'/guide/treviso'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/treviso',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
