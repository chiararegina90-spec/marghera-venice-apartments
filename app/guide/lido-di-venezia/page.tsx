import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data=guideData['lido-di-venezia'];
export const metadata:Metadata={
 title:`${data.title} | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/guide/lido-di-venezia',languages:{'it-IT':'/guide/lido-di-venezia','en-GB':'/en/guide/lido-di-venezia','de-DE':'/de/guide/lido-di-venezia','fr-FR':'/fr/guide/lido-di-venezia','es-ES':'/es/guide/lido-di-venezia','zh-CN':'/zh/guide/lido-di-venezia','x-default':'/guide/lido-di-venezia'}},
 openGraph:{title:data.title,description:data.description,type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplate data={data}/>}
