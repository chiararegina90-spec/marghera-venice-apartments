import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['certosa'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/certosa',languages:{'it-IT':'/guide/certosa','en-GB':'/en/guide/certosa','de-DE':'/de/guide/certosa','fr-FR':'/fr/guide/certosa','es-ES':'/es/guide/certosa','zh-CN':'/zh/guide/certosa','x-default':'/guide/certosa'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/certosa',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
