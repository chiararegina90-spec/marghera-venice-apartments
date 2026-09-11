import GondolaTourGuide from '@/components/GondolaTourGuide';
import {gondolaTourContent} from '@/data/gondolaTourContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=gondolaTourContent.de;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/guide/gondola-tour-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/gondola-tour-venezia-cover.jpg',alt:c.coverAlt});
export default function Page(){return <GondolaTourGuide lang="de"/>;}
