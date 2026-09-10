import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=accessFeeContent.de;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'Praktische Informationen für den Besuch in Venedig'});
export default function Page(){return <AccessFeeArticle lang="de"/>;}
