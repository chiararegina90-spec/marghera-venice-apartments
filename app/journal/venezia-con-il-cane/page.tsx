import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {dogVeniceAudit} from '@/data/dogVeniceAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=dogVeniceAudit.it;
export const metadata=editorialMetadata({lang:'it',logicalPath:'/journal/venezia-con-il-cane',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="it" data={data}/>;}
