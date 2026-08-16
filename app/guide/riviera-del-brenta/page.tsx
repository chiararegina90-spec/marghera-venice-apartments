import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['riviera-del-brenta'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]},
  alternates:{canonical:'/guide/riviera-del-brenta',languages:{'it-IT':'/guide/riviera-del-brenta','en-GB':'/en/guide/riviera-del-brenta','de-DE':'/de/guide/riviera-del-brenta','fr-FR':'/fr/guide/riviera-del-brenta','es-ES':'/es/guide/riviera-del-brenta','zh-CN':'/zh/guide/riviera-del-brenta','x-default':'/guide/riviera-del-brenta'}}
};

export default function Page(){return <GuideTemplate data={data}/>}
