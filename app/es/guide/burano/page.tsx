import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['burano'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/burano',languages:{'it-IT':'/guide/burano','en-GB':'/en/guide/burano','de-DE':'/de/guide/burano','fr-FR':'/fr/guide/burano','es-ES':'/es/guide/burano','zh-CN':'/zh/guide/burano','x-default':'/guide/burano'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/burano',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
