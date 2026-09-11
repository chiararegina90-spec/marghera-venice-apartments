import AuditedPrimaryJournalArticle from '@/components/AuditedPrimaryJournalArticle';
import {veniceChristmasAudit} from '@/data/veniceChristmasAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data=veniceChristmasAudit.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/natale-capodanno-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedPrimaryJournalArticle lang="en" data={data}/>;}
