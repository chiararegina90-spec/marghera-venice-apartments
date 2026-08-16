import type {Metadata} from 'next';
import GuideTemplateEs from '@/components/GuideTemplateEs';
import {guideDataEs} from '@/data/guides-es';
const data=guideDataEs['sant-erasmo'];
export const metadata:Metadata={title:`${data.title} | Guía de viaje`,description:data.description,alternates:{canonical:'/es/guide/sant-erasmo',languages:{'it-IT':'/guide/sant-erasmo','en-GB':'/en/guide/sant-erasmo','de-DE':'/de/guide/sant-erasmo','fr-FR':'/fr/guide/sant-erasmo','es-ES':'/es/guide/sant-erasmo','zh-CN':'/zh/guide/sant-erasmo','x-default':'/guide/sant-erasmo'}},openGraph:{title:data.title,description:data.description,url:'/es/guide/sant-erasmo',locale:'es_ES',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateEs data={data}/>}
