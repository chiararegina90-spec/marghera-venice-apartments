import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGettingFull} from '@/components/LocalizedParityPages';
import {gettingParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'前往威尼斯',description:gettingParity['zh'].heroText,alternates:languageAlternates('/zh/getting-to-venice'),openGraph:{type:'website',images:['/images/home-come-raggiungere-venezia.webp']},twitter:{card:'summary_large_image',images:['/images/home-come-raggiungere-venezia.webp']}};
export default function Page(){return <LocalizedGettingFull lang="zh" data={gettingParity['zh']}/>}
