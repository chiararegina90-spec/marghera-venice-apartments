import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=accessFeeContent.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'Practical visitor information for entering Venice'});
export default function Page(){return <AccessFeeArticle lang="en"/>;}
