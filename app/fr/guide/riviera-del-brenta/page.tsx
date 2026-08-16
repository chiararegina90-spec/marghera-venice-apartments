import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['riviera-del-brenta'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage | Marghera Venice Apartments`,description:data.description,alternates:{canonical:'/fr/guide/riviera-del-brenta',languages:{'it-IT':'/guide/riviera-del-brenta','en-GB':'/en/guide/riviera-del-brenta','de-DE':'/de/guide/riviera-del-brenta','fr-FR':'/fr/guide/riviera-del-brenta','es-ES':'/es/guide/riviera-del-brenta','zh-CN':'/zh/guide/riviera-del-brenta','x-default':'/guide/riviera-del-brenta'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/riviera-del-brenta',locale:'fr_FR',type:'article',images:[data.image]}};
export default function Page(){return <GuideTemplateFr data={data}/>}
