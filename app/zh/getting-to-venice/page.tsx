import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGettingFull} from '@/components/LocalizedParityPages';
import {gettingParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'从马尔盖拉到威尼斯：公交、火车、车票与停车',description:gettingParity['zh'].heroText,alternates:languageAlternates('/zh/getting-to-venice'),openGraph:{type:'website',images:['/images/come-arrivare-hero-originale.webp']},twitter:{card:'summary_large_image',images:['/images/come-arrivare-hero-originale.webp']}};
export default function Page(){return <LocalizedGettingFull lang="zh" data={gettingParity['zh']}/>}
