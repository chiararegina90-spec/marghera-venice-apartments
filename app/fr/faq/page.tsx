import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedFAQFull} from '@/components/LocalizedParityPages';
import {faqParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Questions fréquentes',description:faqParity['fr'].subtitle,alternates:languageAlternates('/fr/faq'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedFAQFull lang="fr" data={faqParity['fr']}/>}
