import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['padova'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/padova',languages:{'it-IT':'/guide/padova','en-GB':'/en/guide/padova','de-DE':'/de/guide/padova','fr-FR':'/fr/guide/padova','es-ES':'/es/guide/padova','zh-CN':'/zh/guide/padova','x-default':'/guide/padova'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/padova',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
