import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['sant-erasmo'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/sant-erasmo',languages:{'it-IT':'/guide/sant-erasmo','en-GB':'/en/guide/sant-erasmo','de-DE':'/de/guide/sant-erasmo','fr-FR':'/fr/guide/sant-erasmo','es-ES':'/es/guide/sant-erasmo','zh-CN':'/zh/guide/sant-erasmo','x-default':'/guide/sant-erasmo'}}
};

export default function Page(){return <GuideTemplate data={data}/>}
