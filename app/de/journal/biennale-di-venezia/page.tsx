import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import BiennaleArte2026Article from '@/components/BiennaleArte2026Article';
import {biennaleArte2026} from '@/data/biennaleArte2026';

const lang='de' as const;
const data=biennaleArte2026[lang];
const path='/de/journal/biennale-di-venezia';

export const metadata:Metadata={
  title:data.metaTitle,
  description:data.metaDescription,
  alternates:languageAlternates(path),
  openGraph:{type:'article',title:data.metaTitle,description:data.metaDescription,url:path,locale:'de_DE',images:[data.ogImage]},
  twitter:{card:'summary_large_image',title:data.metaTitle,description:data.metaDescription,images:[data.ogImage]}
};

export default function Page(){return <BiennaleArte2026Article lang={lang} data={data}/>;}
