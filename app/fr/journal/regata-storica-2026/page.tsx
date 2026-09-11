import {journalFr} from '@/data/journal-fr';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalFr['regata-storica-2026'],...journalAuditLocalized.fr['regata-storica-2026']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/regata-storica-2026',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="fr" data={data} tipLabel="Conseil de Marghera Venice Apartments" officialLabel="Informations officielles" backLabel="Retour au Journal"/>;}
