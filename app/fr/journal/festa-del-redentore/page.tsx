import {journalFr} from '@/data/journal-fr';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalFr['festa-del-redentore'],...journalAuditLocalized.fr['festa-del-redentore']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/festa-del-redentore',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="fr" data={data} tipLabel="Conseil de Marghera Venice Apartments" officialLabel="Informations officielles" backLabel="Retour au Journal"/>;}
