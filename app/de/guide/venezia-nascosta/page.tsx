import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.de;
export const metadata=editorialMetadata({lang:'de',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'Blick auf Venedig vor einem Spaziergang durch ruhigere Stadtviertel'});
export default function Page(){return <HiddenVeniceGuide lang="de"/>;}
