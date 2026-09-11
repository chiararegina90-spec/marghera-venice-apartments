import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalZh} from '@/data/journal-zh';
const data=journalZh['cicchetti-veneziani'];
export const metadata:Metadata={title:'威尼斯 Cicchetti 小吃指南：是什么、怎么点、怎么吃',description:'了解威尼斯 Cicchetti 小吃与 Bacaro 文化：常见口味、柜台点单方式、适合搭配的饮品，以及在威尼斯安排一场轻松小吃之旅的实用建议。',alternates:languageAlternates('/zh/journal/cicchetti-veneziani'),openGraph:{type:'article',title:'威尼斯 Cicchetti 小吃指南：是什么、怎么点、怎么吃',description:'了解威尼斯 Cicchetti 小吃与 Bacaro 文化：常见口味、柜台点单方式、适合搭配的饮品，以及在威尼斯安排一场轻松小吃之旅的实用建议。',images:[data.image]},twitter:{card:'summary_large_image',title:'威尼斯 Cicchetti 小吃指南：是什么、怎么点、怎么吃',description:'了解威尼斯 Cicchetti 小吃与 Bacaro 文化：常见口味、柜台点单方式、适合搭配的饮品，以及在威尼斯安排一场轻松小吃之旅的实用建议。',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="zh" data={data} tipLabel='Marghera Venice Apartments 建议' officialLabel='官方信息' backLabel='返回旅行日志'/>}
