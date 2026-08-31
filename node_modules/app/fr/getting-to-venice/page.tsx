import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGettingFull} from '@/components/LocalizedParityPages';
import {gettingParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Rejoindre Venise',description:gettingParity['fr'].heroText,alternates:languageAlternates('/fr/getting-to-venice'),openGraph:{type:'website',images:['/images/come-arrivare-hero-originale.webp']},twitter:{card:'summary_large_image',images:['/images/come-arrivare-hero-originale.webp']}};
export default function Page(){return <LocalizedGettingFull lang="fr" data={gettingParity['fr']}/>}
