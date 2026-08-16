import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedFAQFull} from '@/components/LocalizedParityPages';
import {faqParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Preguntas frecuentes',description:faqParity['es'].subtitle,alternates:languageAlternates('/es/faq'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedFAQFull lang="es" data={faqParity['es']}/>}
