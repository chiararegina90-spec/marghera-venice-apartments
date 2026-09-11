import {journalZh} from '@/data/journal-zh';
import {journalAuditLocalized} from '@/data/journalAuditLocalized';
import type {JournalArticleData} from '@/components/LocalizedRich';
import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data={...journalZh['regata-storica-2026'],...journalAuditLocalized.zh['regata-storica-2026']} as unknown as JournalArticleData;
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/journal/regata-storica-2026',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="zh" data={data} tipLabel="Marghera Venice Apartments 建议" officialLabel="官方信息" backLabel="返回旅行日志"/>;}
