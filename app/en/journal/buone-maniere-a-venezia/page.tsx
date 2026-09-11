import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {veniceEtiquetteAudit} from '@/data/veniceEtiquetteAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=veniceEtiquetteAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/buone-maniere-a-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
