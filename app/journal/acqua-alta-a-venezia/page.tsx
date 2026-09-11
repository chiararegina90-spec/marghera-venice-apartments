import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {acquaAltaAudit} from '@/data/acquaAltaAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=acquaAltaAudit.it;
export const metadata=editorialMetadata({lang:'it',logicalPath:'/journal/acqua-alta-a-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="it" data={data}/>;}
