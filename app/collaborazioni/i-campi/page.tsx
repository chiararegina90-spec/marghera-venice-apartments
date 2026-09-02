import type {Metadata} from 'next';
import ICampiExperiencePage from '@/components/ICampiExperiencePage';

export const metadata:Metadata={
 title:'Degustazione in cantina tra Valpolicella e Soave | I Campi',
 description:'Visita Azienda Agricola I Campi di Flavio Prà: degustazioni di Soave, Valpolicella, Ripasso e Amarone nel Veronese.',
 alternates:{canonical:'/collaborazioni/i-campi',languages:{'it-IT':'/collaborazioni/i-campi', 'en-GB':'/en/experiences/i-campi', 'de-DE':'/de/experiences/i-campi', 'fr-FR':'/fr/experiences/i-campi', 'es-ES':'/es/experiences/i-campi', 'zh-CN':'/zh/experiences/i-campi', 'x-default':'/collaborazioni/i-campi'}},
 openGraph:{type:'article',images:['/images/experience-i-campi-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-i-campi-cover.webp']}
};

export default function Page(){return <ICampiExperiencePage lang='it'/>;}
