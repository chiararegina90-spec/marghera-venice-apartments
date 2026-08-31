import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalFr} from '@/data/journal-fr';
const data=journalFr['homo-faber-2026'];
export const metadata:Metadata={title:data.title,description:data.description,alternates:languageAlternates('/fr/journal/homo-faber-2026'),openGraph:{type:'article',images:[data.image]},twitter:{card:'summary_large_image',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="fr" data={data} tipLabel='Conseil de Marghera Venice Apartments' officialLabel='Informations officielles' backLabel='Retour au Journal'/>}
