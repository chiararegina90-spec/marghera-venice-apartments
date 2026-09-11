import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {parkingAudit} from '@/data/parkingAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=parkingAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/dove-parcheggiare-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
