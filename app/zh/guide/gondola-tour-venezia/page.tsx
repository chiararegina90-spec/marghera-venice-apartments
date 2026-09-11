import GondolaTourGuide from '@/components/GondolaTourGuide';
import {gondolaTourContent} from '@/data/gondolaTourContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=gondolaTourContent.zh;
export const metadata=editorialMetadata({lang:'zh',logicalPath:'/guide/gondola-tour-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/gondola-tour-venezia-cover.jpg',alt:c.coverAlt});
export default function Page(){return <GondolaTourGuide lang="zh"/>;}
