import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedFAQFull} from '@/components/LocalizedParityPages';
import {faqParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'Häufig gestellte Fragen',description:faqParity['de'].subtitle,alternates:languageAlternates('/de/faq'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedFAQFull lang="de" data={faqParity['de']}/>}
