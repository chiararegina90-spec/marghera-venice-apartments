import HiddenVeniceGuide from '@/components/HiddenVeniceGuide';
import {hiddenVeniceContent} from '@/data/hiddenVeniceContent';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const c=hiddenVeniceContent.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/guide/venezia-nascosta',title:c.seoTitle,description:c.metaDescription,image:'/images/scopri-venezia-michael-heise.webp',alt:'Vue de Venise avant de partir vers des quartiers plus calmes'});
export default function Page(){return <HiddenVeniceGuide lang="fr"/>;}
