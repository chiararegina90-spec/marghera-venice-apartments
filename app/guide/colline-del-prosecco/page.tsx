import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['colline-del-prosecco'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/colline-del-prosecco',languages:{'it-IT':'/guide/colline-del-prosecco','en-GB':'/en/guide/colline-del-prosecco','de-DE':'/de/guide/colline-del-prosecco','fr-FR':'/fr/guide/colline-del-prosecco','es-ES':'/es/guide/colline-del-prosecco','zh-CN':'/zh/guide/colline-del-prosecco','x-default':'/guide/colline-del-prosecco'}}
};

export default function Page(){return <GuideTemplate data={data}/>}
