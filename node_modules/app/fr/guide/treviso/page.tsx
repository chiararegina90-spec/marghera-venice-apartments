import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['treviso'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/treviso',languages:{'it-IT':'/guide/treviso','en-GB':'/en/guide/treviso','de-DE':'/de/guide/treviso','fr-FR':'/fr/guide/treviso','es-ES':'/es/guide/treviso','zh-CN':'/zh/guide/treviso','x-default':'/guide/treviso'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/treviso',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
