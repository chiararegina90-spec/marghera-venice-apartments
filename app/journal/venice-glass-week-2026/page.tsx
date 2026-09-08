import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import GlassWeek2026Article from '@/components/GlassWeek2026Article';
import {glassWeek2026} from '@/data/glassWeek2026';

const data=glassWeek2026['it'];
const image='/images/journal-venice-glass-week-2026-cover.webp';

export const metadata:Metadata={
  title:data.seoTitle,
  description:data.metaDescription,
  alternates:languageAlternates('/journal/venice-glass-week-2026'),
  openGraph:{type:'article',title:data.seoTitle,description:data.metaDescription,url:'/journal/venice-glass-week-2026',locale:'it_IT',images:[{url:image,alt:data.imageAlt}]},
  twitter:{card:'summary_large_image',title:data.seoTitle,description:data.metaDescription,images:[image]}
};

export default function Page(){return <GlassWeek2026Article data={data}/>;}
