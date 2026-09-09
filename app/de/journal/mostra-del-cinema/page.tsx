import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import MostraCinema2026Article from '@/components/MostraCinema2026Article';
import {mostraCinema2026} from '@/data/mostraCinema2026';

const lang='de' as const;
const data=mostraCinema2026[lang];
const path='/de/journal/mostra-del-cinema';

export const metadata:Metadata={
  title:data.metaTitle,
  description:data.metaDescription,
  alternates:languageAlternates(path),
  openGraph:{type:'article',title:data.metaTitle,description:data.metaDescription,url:path,locale:'de_DE',images:['/images/journal-mostra-cinema.webp']},
  twitter:{card:'summary_large_image',title:data.metaTitle,description:data.metaDescription,images:['/images/journal-mostra-cinema.webp']}
};

export default function Page(){return <MostraCinema2026Article lang={lang} data={data}/>;}
