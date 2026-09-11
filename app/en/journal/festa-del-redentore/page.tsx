import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {journalAuditPrimary} from '@/data/journalAuditPrimary';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=journalAuditPrimary.en['festa-del-redentore'];
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/festa-del-redentore',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
