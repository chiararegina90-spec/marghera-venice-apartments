import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['pellestrina'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/pellestrina',languages:{'it-IT':'/guide/pellestrina','en-GB':'/en/guide/pellestrina','de-DE':'/de/guide/pellestrina','fr-FR':'/fr/guide/pellestrina','es-ES':'/es/guide/pellestrina','zh-CN':'/zh/guide/pellestrina','x-default':'/guide/pellestrina'}}
};

export default function Page(){return <GuideTemplate data={data}/>}
