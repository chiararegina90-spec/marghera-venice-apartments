import type {Metadata} from 'next';
import ICampiExperiencePage from '@/components/ICampiExperiencePage';

export const metadata:Metadata={
 title:'Weinverkostung bei I Campi | Valpolicella Wine Experience',
 description:'Entdecken Sie Azienda Agricola I Campi bei Verona mit Kellerbesuch und Verkostungen von Soave, Valpolicella, Ripasso und Amarone.',
 alternates:{canonical:'/de/experiences/i-campi',languages:{'it-IT':'/collaborazioni/i-campi', 'en-GB':'/en/experiences/i-campi', 'de-DE':'/de/experiences/i-campi', 'fr-FR':'/fr/experiences/i-campi', 'es-ES':'/es/experiences/i-campi', 'zh-CN':'/zh/experiences/i-campi', 'x-default':'/collaborazioni/i-campi'}},
 openGraph:{type:'article',images:['/images/experience-i-campi-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-i-campi-cover.webp']}
};

export default function Page(){return <ICampiExperiencePage lang='de'/>;}
