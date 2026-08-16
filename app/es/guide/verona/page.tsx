import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['verona'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/verona',languages:{'it-IT':'/guide/verona','en-GB':'/en/guide/verona','de-DE':'/de/guide/verona','fr-FR':'/fr/guide/verona','es-ES':'/es/guide/verona','zh-CN':'/zh/guide/verona','x-default':'/guide/verona'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/verona',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
