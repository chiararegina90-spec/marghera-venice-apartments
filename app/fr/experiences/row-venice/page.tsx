import type {Metadata} from 'next';
import RowVeniceExperiencePage from '@/components/RowVeniceExperiencePage';

export const metadata:Metadata={
 title:'Rame vénitienne avec Row Venice | Expériences à Venise',
 description:'Essayez la voga alla veneta avec Row Venice : leçon privée à Cannaregio, tradition locale et informations pratiques.',
 alternates:{canonical:'/fr/experiences/row-venice',languages:{'it-IT':'/collaborazioni/row-venice', 'en-GB':'/en/experiences/row-venice', 'de-DE':'/de/experiences/row-venice', 'fr-FR':'/fr/experiences/row-venice', 'es-ES':'/es/experiences/row-venice', 'zh-CN':'/zh/experiences/row-venice', 'x-default':'/collaborazioni/row-venice'}},
 openGraph:{type:'article',images:['/images/experience-row-venice-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-row-venice-cover.webp']}
};

export default function Page(){return <RowVeniceExperiencePage lang='fr'/>;}
