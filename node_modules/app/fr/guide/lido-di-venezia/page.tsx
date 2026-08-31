import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['lido-di-venezia'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/lido-di-venezia',languages:{'it-IT':'/guide/lido-di-venezia','en-GB':'/en/guide/lido-di-venezia','de-DE':'/de/guide/lido-di-venezia','fr-FR':'/fr/guide/lido-di-venezia','es-ES':'/es/guide/lido-di-venezia','zh-CN':'/zh/guide/lido-di-venezia','x-default':'/guide/lido-di-venezia'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/lido-di-venezia',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
