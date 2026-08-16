import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['chioggia'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/chioggia',languages:{'it-IT':'/guide/chioggia','en-GB':'/en/guide/chioggia','de-DE':'/de/guide/chioggia','fr-FR':'/fr/guide/chioggia','es-ES':'/es/guide/chioggia','zh-CN':'/zh/guide/chioggia','x-default':'/guide/chioggia'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

export default function Page(){return <GuideTemplate data={data}/>}
