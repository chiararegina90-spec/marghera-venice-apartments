import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['jesolo'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/jesolo',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
