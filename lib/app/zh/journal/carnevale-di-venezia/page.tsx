import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalZh} from '@/data/journal-zh';
const data=journalZh['carnevale-di-venezia'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/zh/journal/carnevale-di-venezia'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="zh" data={data} tipLabel='Marghera Venice Apartments 建议' officialLabel='官方信息' backLabel='返回旅行日志'/>}
