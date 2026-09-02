import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import JournalArticleDe from '@/components/JournalArticleDe';
import {journalDe} from '@/data/journal-de';
const data=journalDe['venice-glass-week-2026'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/de/journal/venice-glass-week-2026'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <JournalArticleDe data={data}/>}
