import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['certosa'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/certosa',languages:{'it-IT':'/guide/certosa','en-GB':'/en/guide/certosa','de-DE':'/de/guide/certosa','fr-FR':'/fr/guide/certosa','es-ES':'/es/guide/certosa','zh-CN':'/zh/guide/certosa','x-default':'/guide/certosa'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

export default function Page(){return <GuideTemplate data={data}/>}
