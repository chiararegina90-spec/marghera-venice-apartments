import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data=guideData['burano'];
export const metadata:Metadata={
 title:`${data.title} | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/guide/burano',languages:{'it-IT':'/guide/burano','en-GB':'/en/guide/burano','de-DE':'/de/guide/burano','fr-FR':'/fr/guide/burano','es-ES':'/es/guide/burano','zh-CN':'/zh/guide/burano','x-default':'/guide/burano'}},
 openGraph:{title:data.title,description:data.description,type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplate data={data}/>}
