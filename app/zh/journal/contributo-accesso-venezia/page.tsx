import AccessFeeArticle from '@/components/AccessFeeArticle';
import {accessFeeContent} from '@/data/accessFeeContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=accessFeeContent.zh;
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/journal/contributo-accesso-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/journal-parcheggi-venezia.webp',alt:'前往威尼斯时需要了解的实用入城信息'});
export default function Page(){return <AccessFeeArticle lang="zh"/>;}
