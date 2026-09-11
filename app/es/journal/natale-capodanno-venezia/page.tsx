import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {veniceChristmasAudit} from '@/data/veniceChristmasAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data=veniceChristmasAudit.es;
export const metadata=editorialMetadata({lang:'es',logicalPath:'/journal/natale-capodanno-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="es" data={data} tipLabel="Consejo de Marghera Venice Apartments" officialLabel="Información oficial" backLabel="Volver al Journal"/>;}
