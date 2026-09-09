import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.es;
export const metadata=editorialMetadata({lang:'es',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'Vista de Venecia antes de recorrer barrios más tranquilos'});
export default function Page(){return <HiddenVeniceGuide lang="es"/>;}
