import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['colline-del-prosecco'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/colline-del-prosecco',languages:{'it-IT':'/guide/colline-del-prosecco','en-GB':'/en/guide/colline-del-prosecco','de-DE':'/de/guide/colline-del-prosecco','fr-FR':'/fr/guide/colline-del-prosecco','es-ES':'/es/guide/colline-del-prosecco','zh-CN':'/zh/guide/colline-del-prosecco','x-default':'/guide/colline-del-prosecco'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/colline-del-prosecco',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
