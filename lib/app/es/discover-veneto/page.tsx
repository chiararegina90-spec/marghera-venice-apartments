import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedDiscoverVenetoFull} from '@/components/LocalizedParityPages';
import {venetoParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Descubrir Véneto',description:venetoParity['es'].heroText,alternates:languageAlternates('/es/discover-veneto'),openGraph:{type:'website',images:['/images/veneto-hero-prosecco-final.webp']},twitter:{card:'summary_large_image',images:['/images/veneto-hero-prosecco-final.webp']}};
export default function Page(){return <LocalizedDiscoverVenetoFull lang="es" data={venetoParity['es']}/>}
