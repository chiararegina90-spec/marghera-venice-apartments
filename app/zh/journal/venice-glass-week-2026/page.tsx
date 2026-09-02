import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import JournalArticleZh from '@/components/JournalArticleZh';
import {journalZh} from '@/data/journal-zh';
const data=journalZh['venice-glass-week-2026'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/zh/journal/venice-glass-week-2026'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <JournalArticleZh data={data}/>}
