import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGettingFull} from '@/components/LocalizedParityPages';
import {gettingParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Cómo llegar a Venecia',description:gettingParity['es'].heroText,alternates:languageAlternates('/es/getting-to-venice'),openGraph:{type:'website',images:['/images/home-come-raggiungere-venezia.webp']},twitter:{card:'summary_large_image',images:['/images/home-come-raggiungere-venezia.webp']}};
export default function Page(){return <LocalizedGettingFull lang="es" data={gettingParity['es']}/>}
