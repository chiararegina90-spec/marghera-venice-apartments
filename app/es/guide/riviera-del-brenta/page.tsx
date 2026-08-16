import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['riviera-del-brenta'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/riviera-del-brenta',languages:{'it-IT':'/guide/riviera-del-brenta','en-GB':'/en/guide/riviera-del-brenta','de-DE':'/de/guide/riviera-del-brenta','fr-FR':'/fr/guide/riviera-del-brenta','es-ES':'/es/guide/riviera-del-brenta','zh-CN':'/zh/guide/riviera-del-brenta','x-default':'/guide/riviera-del-brenta'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/riviera-del-brenta',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
