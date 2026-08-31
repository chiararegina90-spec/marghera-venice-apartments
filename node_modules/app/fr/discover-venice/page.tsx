import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedDiscoverVeniceFull} from '@/components/LocalizedParityPages';
import {veniceParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Découvrir Venise',description:veniceParity['fr'].heroText,alternates:languageAlternates('/fr/discover-venice'),openGraph:{type:'website',images:['/images/scopri-venezia-michael-heise.webp']},twitter:{card:'summary_large_image',images:['/images/scopri-venezia-michael-heise.webp']}};
export default function Page(){return <LocalizedDiscoverVeniceFull lang="fr" data={veniceParity['fr']}/>}
