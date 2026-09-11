import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {acquaAltaAudit} from '@/data/acquaAltaAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=acquaAltaAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/acqua-alta-a-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
