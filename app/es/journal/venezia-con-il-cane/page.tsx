import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {dogVeniceAudit} from '@/data/dogVeniceAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=dogVeniceAudit.es;
export const metadata=editorialMetadata({lang:'es',logicalPath:'/journal/venezia-con-il-cane',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="es" data={data} tipLabel="Consejo de Marghera Venice Apartments" officialLabel="Información oficial" backLabel="Volver al Journal"/>;}
