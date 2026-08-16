import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalEs} from '@/data/journal-es';
const data=journalEs['biennale-di-venezia'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/es/journal/biennale-di-venezia'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="es" data={data} tipLabel='Consejo de Marghera Venice Apartments' officialLabel='Información oficial' backLabel='Volver al Journal'/>}
