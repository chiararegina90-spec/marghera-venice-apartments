import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.zh;
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'从圣马可湾望向威尼斯，作为探索安静街区路线的起点'});
export default function Page(){return <HiddenVeniceGuide lang="zh"/>;}
