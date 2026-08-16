import type {Metadata} from 'next';
import GuideTemplateFr from '@/components/GuideTemplateFr';
import {guideDataFr} from '@/data/guides-fr';
const data=guideDataFr['murano'];
export const metadata:Metadata={title:`${data.title} | Guide de voyage`,description:data.description,alternates:{canonical:'/fr/guide/murano',languages:{'it-IT':'/guide/murano','en-GB':'/en/guide/murano','de-DE':'/de/guide/murano','fr-FR':'/fr/guide/murano','es-ES':'/es/guide/murano','zh-CN':'/zh/guide/murano','x-default':'/guide/murano'}},openGraph:{title:data.title,description:data.description,url:'/fr/guide/murano',locale:'fr_FR',type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <GuideTemplateFr data={data}/>}
