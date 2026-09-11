import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {veniceKidsAudit} from '@/data/veniceKidsAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=veniceKidsAudit.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/venezia-con-bambini',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="fr" data={data} tipLabel="Conseil de Marghera Venice Apartments" officialLabel="Informations officielles" backLabel="Retour au Journal"/>;}
