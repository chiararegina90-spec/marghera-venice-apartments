import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['dolomiti'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/dolomiti',languages:{'it-IT':'/guide/dolomiti','en-GB':'/en/guide/dolomiti','de-DE':'/de/guide/dolomiti','fr-FR':'/fr/guide/dolomiti','es-ES':'/es/guide/dolomiti','zh-CN':'/zh/guide/dolomiti','x-default':'/guide/dolomiti'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

export default function Page(){return <GuideTemplate data={data}/>}
