import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['dolomiti'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/dolomiti',languages:{'it-IT':'/guide/dolomiti','en-GB':'/en/guide/dolomiti','de-DE':'/de/guide/dolomiti','fr-FR':'/fr/guide/dolomiti','es-ES':'/es/guide/dolomiti','zh-CN':'/zh/guide/dolomiti','x-default':'/guide/dolomiti'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/dolomiti',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
