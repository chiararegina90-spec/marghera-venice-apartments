import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['pellestrina'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/pellestrina',languages:{'it-IT':'/guide/pellestrina','en-GB':'/en/guide/pellestrina','de-DE':'/de/guide/pellestrina','fr-FR':'/fr/guide/pellestrina','es-ES':'/es/guide/pellestrina','zh-CN':'/zh/guide/pellestrina','x-default':'/guide/pellestrina'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/pellestrina',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
