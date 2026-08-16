import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['certosa'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/certosa',languages:{'it-IT':'/guide/certosa','en-GB':'/en/guide/certosa','de-DE':'/de/guide/certosa','fr-FR':'/fr/guide/certosa','es-ES':'/es/guide/certosa','zh-CN':'/zh/guide/certosa','x-default':'/guide/certosa'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/certosa',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
