import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['murano'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje`,description:data.description,alternates:{canonical:'/es/guide/murano',languages:{'it-IT':'/guide/murano','en-GB':'/en/guide/murano','de-DE':'/de/guide/murano','fr-FR':'/fr/guide/murano','es-ES':'/es/guide/murano','zh-CN':'/zh/guide/murano','x-default':'/guide/murano'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/murano',locale:'es_ES',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateEs data={data}/>}
