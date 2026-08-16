import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['treviso'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/treviso',languages:{'it-IT':'/guide/treviso','en-GB':'/en/guide/treviso','de-DE':'/de/guide/treviso','fr-FR':'/fr/guide/treviso','es-ES':'/es/guide/treviso','zh-CN':'/zh/guide/treviso','x-default':'/guide/treviso'}}
};

export default function Page(){return <GuideTemplate data={data}/>}
