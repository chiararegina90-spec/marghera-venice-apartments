import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['pellestrina'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/pellestrina',languages:{'it-IT':'/guide/pellestrina','en-GB':'/en/guide/pellestrina','de-DE':'/de/guide/pellestrina','fr-FR':'/fr/guide/pellestrina','es-ES':'/es/guide/pellestrina','zh-CN':'/zh/guide/pellestrina','x-default':'/guide/pellestrina'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/pellestrina',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
