import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['verona'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/verona',languages:{'it-IT':'/guide/verona','en-GB':'/en/guide/verona','de-DE':'/de/guide/verona','fr-FR':'/fr/guide/verona','es-ES':'/es/guide/verona','zh-CN':'/zh/guide/verona','x-default':'/guide/verona'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

export default function Page(){return <GuideTemplate data={data}/>}
