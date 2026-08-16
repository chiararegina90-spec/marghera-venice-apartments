import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['chioggia'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/chioggia',languages:{'it-IT':'/guide/chioggia','en-GB':'/en/guide/chioggia','de-DE':'/de/guide/chioggia','fr-FR':'/fr/guide/chioggia','es-ES':'/es/guide/chioggia','zh-CN':'/zh/guide/chioggia','x-default':'/guide/chioggia'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/chioggia',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
