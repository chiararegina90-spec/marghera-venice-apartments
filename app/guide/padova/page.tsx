import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data = guideData['padova'];

export const metadata:Metadata={
  title:`${data.title} | Marghera Venice Apartments`,
  description:data.description,
  openGraph:{title:data.title,description:data.description,images:[data.image]}
};

export default function Page(){return <GuideTemplate data={data}/>}
