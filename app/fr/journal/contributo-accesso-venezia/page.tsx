import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=accessFeeContent.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'Informations pratiques pour entrer à Venise'});
export default function Page(){return <AccessFeeArticle lang="fr"/>;}
