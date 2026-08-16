import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['sant-erasmo'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/sant-erasmo',languages:{'it-IT':'/guide/sant-erasmo','en-GB':'/en/guide/sant-erasmo','de-DE':'/de/guide/sant-erasmo','fr-FR':'/fr/guide/sant-erasmo','es-ES':'/es/guide/sant-erasmo','zh-CN':'/zh/guide/sant-erasmo','x-default':'/guide/sant-erasmo'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/sant-erasmo',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
