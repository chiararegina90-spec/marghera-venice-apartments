import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalDe} from '@/data/journal-de';
const data=journalDe['spritz-veneziano'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/de/journal/spritz-veneziano'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="de" data={data} tipLabel='Tipp von Marghera Venice Apartments' officialLabel='Offizielle Informationen' backLabel='Zurück zum Journal'/>}
