import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {acquaAltaAudit} from '@/data/acquaAltaAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=acquaAltaAudit.de;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/journal/acqua-alta-a-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="de" data={data} tipLabel="Tipp von Marghera Venice Apartments" officialLabel="Offizielle Informationen" backLabel="Zurück zum Journal"/>;}
