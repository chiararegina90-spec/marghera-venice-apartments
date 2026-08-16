import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data=guideData['jesolo'];
export const metadata:Metadata={
 title:`${data.title} | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/guide/jesolo',languages:{'it-IT':'/guide/jesolo','en-GB':'/en/guide/jesolo','de-DE':'/de/guide/jesolo','fr-FR':'/fr/guide/jesolo','es-ES':'/es/guide/jesolo','zh-CN':'/zh/guide/jesolo','x-default':'/guide/jesolo'}},
 openGraph:{title:data.title,description:data.description,type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplate data={data}/>}
