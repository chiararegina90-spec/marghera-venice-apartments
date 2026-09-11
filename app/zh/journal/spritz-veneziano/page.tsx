import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalZh} from '@/data/journal-zh';
const data=journalZh['spritz-veneziano'];
export const metadata:Metadata={title:'威尼斯 Spritz 指南：开胃酒文化、口味与 Cicchetti',description:'了解威尼斯 Spritz 与 aperitivo 文化：Aperol、Select、Campari、Cynar 等常见口味，适合搭配的 Cicchetti，以及在威尼斯轻松喝一杯的实用建议。',alternates:languageAlternates('/zh/journal/spritz-veneziano'),openGraph:{type:'article',title:'威尼斯 Spritz 指南：开胃酒文化、口味与 Cicchetti',description:'了解威尼斯 Spritz 与 aperitivo 文化：Aperol、Select、Campari、Cynar 等常见口味，适合搭配的 Cicchetti，以及在威尼斯轻松喝一杯的实用建议。',images:[data.image]},twitter:{card:'summary_large_image',title:'威尼斯 Spritz 指南：开胃酒文化、口味与 Cicchetti',description:'了解威尼斯 Spritz 与 aperitivo 文化：Aperol、Select、Campari、Cynar 等常见口味，适合搭配的 Cicchetti，以及在威尼斯轻松喝一杯的实用建议。',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="zh" data={data} tipLabel='Marghera Venice Apartments 建议' officialLabel='官方信息' backLabel='返回旅行日志'/>}
