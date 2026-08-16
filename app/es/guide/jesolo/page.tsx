import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['jesolo'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/jesolo',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
