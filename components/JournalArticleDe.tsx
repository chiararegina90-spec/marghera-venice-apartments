import {LocalizedJournalArticle, type JournalArticleData} from '@/components/LocalizedRich';
export type JournalDeData=JournalArticleData;
export default function JournalArticleDe({data}:{data:JournalDeData}){return <LocalizedJournalArticle lang="de" data={data} tipLabel="Tipp von Marghera Venice Apartments" officialLabel="Offizielle Informationen" backLabel="Zurück zum Journal"/>}
