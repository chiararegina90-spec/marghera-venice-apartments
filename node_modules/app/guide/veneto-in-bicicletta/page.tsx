import type {Metadata} from 'next';
import GuideTemplate from '@/components/GuideTemplate';
import {guideData} from '@/data/guides';

const data=guideData['veneto-in-bicicletta'];
export const metadata:Metadata={
 title:`${data.title} | Marghera Venice Apartments`,
 description:data.description,
 alternates:{canonical:'/guide/veneto-in-bicicletta',languages:{'it-IT':'/guide/veneto-in-bicicletta','en-GB':'/en/guide/veneto-in-bicicletta','de-DE':'/de/guide/veneto-in-bicicletta','fr-FR':'/fr/guide/veneto-in-bicicletta','es-ES':'/es/guide/veneto-in-bicicletta','zh-CN':'/zh/guide/veneto-in-bicicletta','x-default':'/guide/veneto-in-bicicletta'}},
 openGraph:{title:data.title,description:data.description,type:'article',images:[data.image]},
 twitter:{card:'summary_large_image',title:data.title,description:data.description,images:[data.image]}
};
export default function Page(){return <GuideTemplate data={data}/>}
