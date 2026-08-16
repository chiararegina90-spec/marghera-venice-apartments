import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['colline-del-prosecco'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/es/guide/colline-del-prosecco',languages:{'it-IT':'/guide/colline-del-prosecco','en-GB':'/en/guide/colline-del-prosecco','de-DE':'/de/guide/colline-del-prosecco','fr-FR':'/fr/guide/colline-del-prosecco','es-ES':'/es/guide/colline-del-prosecco','zh-CN':'/zh/guide/colline-del-prosecco','x-default':'/guide/colline-del-prosecco'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/colline-del-prosecco',locale:'es_ES',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateEs data={data}/>}
