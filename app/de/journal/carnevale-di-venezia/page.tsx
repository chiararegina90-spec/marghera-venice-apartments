import {journalDe} from '@/data/journal-de';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalDe['carnevale-di-venezia'],...journalAuditLocalized.de['carnevale-di-venezia']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/journal/carnevale-di-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="de" data={data} tipLabel="Tipp von Marghera Venice Apartments" officialLabel="Offizielle Informationen" backLabel="Zurück zum Journal"/>;}
