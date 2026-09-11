import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {veniceKidsAudit} from '@/data/veniceKidsAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=veniceKidsAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/venezia-con-bambini',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
