import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedFAQFull} from '@/components/LocalizedParityPages';
import {faqParity} from '@/data/parity-pages';
export const metadata:Metadata={title:'常见问题',description:faqParity['zh'].subtitle,alternates:languageAlternates('/zh/faq'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedFAQFull lang="zh" data={faqParity['zh']}/>}
