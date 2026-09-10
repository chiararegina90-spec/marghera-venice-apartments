import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=accessFeeContent.es;
export const metadata=editorialMetadata({lang:'es',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'Información práctica para entrar en Venecia'});
export default function Page(){return <AccessFeeArticle lang="es"/>;}
