import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const c=accessFeeContent.it;
export const metadata=editorialMetadata({lang:'it',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'Accesso a Venezia e informazioni pratiche per i visitatori'});
export default function Page(){return <AccessFeeArticle lang="it"/>;}
