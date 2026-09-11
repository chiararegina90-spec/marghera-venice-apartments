import {journalDe} from '@/data/journal-de';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalDe['festa-del-redentore'],...journalAuditLocalized.de['festa-del-redentore']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/journal/festa-del-redentore',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="de" data={data} tipLabel="Tipp von Marghera Venice Apartments" officialLabel="Offizielle Informationen" backLabel="Zurück zum Journal"/>;}
