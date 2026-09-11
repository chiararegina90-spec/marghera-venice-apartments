import AuditedLocalizedJournalArticle from '@/components/AuditedLocalizedJournalArticle';
import {dogVeniceAudit} from '@/data/dogVeniceAudit';
import {editorialMetadata} from '@/lib/seoContentMetadata';

const data=dogVeniceAudit.zh;
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/journal/venezia-con-il-cane',title:data.title,description:data.description,image:data.image,alt:data.imageAlt});
export default function Page(){return <AuditedLocalizedJournalArticle lang="zh" data={data} tipLabel="Marghera Venice Apartments 建议" officialLabel="官方信息" backLabel="返回旅行日志"/>;}
