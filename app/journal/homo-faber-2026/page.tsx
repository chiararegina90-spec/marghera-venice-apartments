import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import HomoFaber2026Article from '@/components/HomoFaber2026Article';
import {homoFaber2026} from '@/data/homoFaber2026';

const data=homoFaber2026['it'];
const image='/images/journal-homo-faber-2026-cover.webp';

export const metadata:Metadata={
  title:data.seoTitle,
  description:data.metaDescription,
  alternates:languageAlternates('/journal/homo-faber-2026'),
  openGraph:{type:'article',title:data.seoTitle,description:data.metaDescription,url:'/journal/homo-faber-2026',locale:'it_IT',images:[{url:image,alt:data.imageAlt}]},
  twitter:{card:'summary_large_image',title:data.seoTitle,description:data.metaDescription,images:[image]}
};

export default function Page(){return <HomoFaber2026Article data={data}/>;}
