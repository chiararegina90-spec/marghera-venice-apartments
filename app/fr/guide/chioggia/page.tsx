import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['chioggia'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/chioggia',languages:{'it-IT':'/guide/chioggia','en-GB':'/en/guide/chioggia','de-DE':'/de/guide/chioggia','fr-FR':'/fr/guide/chioggia','es-ES':'/es/guide/chioggia','zh-CN':'/zh/guide/chioggia','x-default':'/guide/chioggia'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/chioggia',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
