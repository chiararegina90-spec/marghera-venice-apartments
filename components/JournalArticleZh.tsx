import {LocalizedJournalArticle, type JournalArticleData} from '@/components/LocalizedRich';
export type JournalZh=JournalArticleData;
export default function JournalArticleZh({data}:{data:JournalZh}){return <LocalizedJournalArticle lang="zh" data={data} tipLabel="Marghera Venice Apartments 建议" officialLabel="官方信息" backLabel="返回旅行日志"/>}
