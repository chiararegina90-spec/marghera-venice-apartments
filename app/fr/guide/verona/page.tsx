import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['verona'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/verona',languages:{'it-IT':'/guide/verona','en-GB':'/en/guide/verona','de-DE':'/de/guide/verona','fr-FR':'/fr/guide/verona','es-ES':'/es/guide/verona','zh-CN':'/zh/guide/verona','x-default':'/guide/verona'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/verona',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
