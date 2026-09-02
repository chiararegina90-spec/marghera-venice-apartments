import type {Metadata} from 'next';
import RowVeniceExperiencePage from '@/components/RowVeniceExperiencePage';

export const metadata:Metadata={
 title:'Voga alla veneta mit Row Venice | Erlebnisse in Venedig',
 description:'Traditionelles venezianisches Rudern mit Row Venice: private Lektion in Cannaregio und praktische Informationen.',
 alternates:{canonical:'/de/experiences/row-venice',languages:{'it-IT':'/collaborazioni/row-venice', 'en-GB':'/en/experiences/row-venice', 'de-DE':'/de/experiences/row-venice', 'fr-FR':'/fr/experiences/row-venice', 'es-ES':'/es/experiences/row-venice', 'zh-CN':'/zh/experiences/row-venice', 'x-default':'/collaborazioni/row-venice'}},
 openGraph:{type:'article',images:['/images/experience-row-venice-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-row-venice-cover.webp']}
};

export default function Page(){return <RowVeniceExperiencePage lang='de'/>;}
