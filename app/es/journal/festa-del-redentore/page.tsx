import {journalEs} from '@/data/journal-es';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalEs['festa-del-redentore'],...journalAuditLocalized.es['festa-del-redentore']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'es',logicalPath:'/journal/festa-del-redentore',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="es" data={data} tipLabel="Consejo de Marghera Venice Apartments" officialLabel="Información oficial" backLabel="Volver al Journal"/>;}
