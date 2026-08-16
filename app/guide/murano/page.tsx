import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data=guideData['murano'];
export const metadata:Metadata={
 title:`${data.title} | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/guide/murano',languages:{'it-IT':'/guide/murano','en-GB':'/en/guide/murano','de-DE':'/de/guide/murano','fr-FR':'/fr/guide/murano','es-ES':'/es/guide/murano','zh-CN':'/zh/guide/murano','x-default':'/guide/murano'}},
 openGraph:{title:data.title,description:data.description,type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplate data={data}/>}
