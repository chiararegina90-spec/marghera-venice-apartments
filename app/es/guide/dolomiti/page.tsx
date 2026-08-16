import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['dolomiti'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/dolomiti',languages:{'it-IT':'/guide/dolomiti','en-GB':'/en/guide/dolomiti','de-DE':'/de/guide/dolomiti','fr-FR':'/fr/guide/dolomiti','es-ES':'/es/guide/dolomiti','zh-CN':'/zh/guide/dolomiti','x-default':'/guide/dolomiti'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/dolomiti',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
