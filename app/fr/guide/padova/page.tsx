import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['padova'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/padova',languages:{'it-IT':'/guide/padova','en-GB':'/en/guide/padova','de-DE':'/de/guide/padova','fr-FR':'/fr/guide/padova','es-ES':'/es/guide/padova','zh-CN':'/zh/guide/padova','x-default':'/guide/padova'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/padova',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
