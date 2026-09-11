import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {dogVeniceAudit} from '@/data/dogVeniceAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=dogVeniceAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/venezia-con-il-cane',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
