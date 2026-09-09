import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.it;
export const metadata=editorialMetadata({lang:'it',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'Venezia vista dal Bacino di San Marco prima di esplorare i quartieri più tranquilli'});
export default function Page(){return <HiddenVeniceGuide lang="it"/>;}
