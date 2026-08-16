import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['padova'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/padova',languages:{'it-IT':'/guide/padova','en-GB':'/en/guide/padova','de-DE':'/de/guide/padova','fr-FR':'/fr/guide/padova','es-ES':'/es/guide/padova','zh-CN':'/zh/guide/padova','x-default':'/guide/padova'}},
twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};

export default function Page(){return <GuideTemplate data={data}/>}
