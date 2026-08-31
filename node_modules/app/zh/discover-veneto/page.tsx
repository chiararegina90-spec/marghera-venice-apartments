import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedDiscoverVenetoFull} from '@/components/LocalizedParityPages';
import {venetoParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'探索威尼托',description:venetoParity['zh'].heroText,alternates:languageAlternates('/zh/discover-veneto'),openGraph:{type:'website',images:['/images/veneto-hero-prosecco-final.webp']},twitter:{card:'summary_large_image',images:['/images/veneto-hero-prosecco-final.webp']}};
export default function Page(){return <LocalizedDiscoverVenetoFull lang="zh" data={venetoParity['zh']}/>}
