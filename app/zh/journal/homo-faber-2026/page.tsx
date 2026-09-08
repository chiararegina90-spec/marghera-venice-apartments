import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import HomoFaber2026Article from '@/components/HomoFaber2026Article';
import {homoFaber2026} from '@/data/homoFaber2026';

const data=homoFaber2026['zh'];
const image='/images/journal-homo-faber-2026-cover.webp';

export const metadata:Metadata={
  title:data.seoTitle,
  description:data.metaDescription,
  alternates:languageAlternates('/zh/journal/homo-faber-2026'),
  openGraph:{type:'article',title:data.seoTitle,description:data.metaDescription,url:'/zh/journal/homo-faber-2026',locale:'zh_CN',images:[{url:image,alt:data.imageAlt}]},
  twitter:{card:'summary_large_image',title:data.seoTitle,description:data.metaDescription,images:[image]}
};

export default function Page(){return <HomoFaber2026Article data={data}/>;}
