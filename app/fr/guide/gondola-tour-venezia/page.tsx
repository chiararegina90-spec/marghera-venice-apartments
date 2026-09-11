import GondolaTourGuide from '@/components/GondolaTourGuide';
import {gondolaTourContent} from '@/data/gondolaTourContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=gondolaTourContent.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/guide/gondola-tour-venezia',title:c.seoTitle,description:c.metaDescription,image:'/images/gondola-tour-venezia-cover.jpg',alt:c.coverAlt});
export default function Page(){return <GondolaTourGuide lang="fr"/>;}
