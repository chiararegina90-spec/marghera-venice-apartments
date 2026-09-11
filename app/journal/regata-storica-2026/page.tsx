import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {journalAuditPrimary} from '@/data/journalAuditPrimary';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=journalAuditPrimary.it['regata-storica-2026'];
export const metadata=editorialMetadata({lang:'it',logicalPath:'/journal/regata-storica-2026',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="it" data={data}/>;}
