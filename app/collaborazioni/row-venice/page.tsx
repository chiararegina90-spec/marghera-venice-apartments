import type {Metadata} from 'next';
import RowVeniceExperiencePage from '@/components/RowVeniceExperiencePage';

export const metadata:Metadata={
 title:'Voga alla veneta con Row Venice | Esperienze a Venezia',
 description:'Prova la voga alla veneta con Row Venice: lezione privata sui canali di Cannaregio, tradizione veneziana e informazioni pratiche.',
 alternates:{canonical:'/collaborazioni/row-venice',languages:{'it-IT':'/collaborazioni/row-venice', 'en-GB':'/en/experiences/row-venice', 'de-DE':'/de/experiences/row-venice', 'fr-FR':'/fr/experiences/row-venice', 'es-ES':'/es/experiences/row-venice', 'zh-CN':'/zh/experiences/row-venice', 'x-default':'/collaborazioni/row-venice'}},
 openGraph:{type:'article',images:['/images/experience-row-venice-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-row-venice-cover.webp']}
};

export default function Page(){return <RowVeniceExperiencePage lang='it'/>;}
