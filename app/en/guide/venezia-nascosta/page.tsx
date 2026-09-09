import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.en;
export const metadata=editorialMetadata({lang:'en',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'Venice seen from St Mark’s Basin before exploring quieter neighbourhoods'});
export default function Page(){return <HiddenVeniceGuide lang="en"/>;}
