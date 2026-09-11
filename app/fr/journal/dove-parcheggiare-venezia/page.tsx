import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {parkingAudit} from '@/data/parkingAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=parkingAudit.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/dove-parcheggiare-venezia',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="fr" data={data} tipLabel="Conseil de Marghera Venice Apartments" officialLabel="Informations officielles" backLabel="Retour au Journal"/>;}
