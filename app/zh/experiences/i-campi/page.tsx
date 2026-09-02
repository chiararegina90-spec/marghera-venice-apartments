import type {Metadata} from 'next';
import ICampiExperiencePage from '@/components/ICampiExperiencePage';

export const metadata:Metadata={
 title:'I Campi 酒庄品鉴 | Valpolicella 葡萄酒体验',
 description:'探索维罗纳附近的 Azienda Agricola I Campi：参观酒庄并品鉴 Soave、Valpolicella、Ripasso 和 Amarone。',
 alternates:{canonical:'/zh/experiences/i-campi',languages:{'it-IT':'/collaborazioni/i-campi', 'en-GB':'/en/experiences/i-campi', 'de-DE':'/de/experiences/i-campi', 'fr-FR':'/fr/experiences/i-campi', 'es-ES':'/es/experiences/i-campi', 'zh-CN':'/zh/experiences/i-campi', 'x-default':'/collaborazioni/i-campi'}},
 openGraph:{type:'article',images:['/images/experience-i-campi-cover.webp']},
 twitter:{card:'summary_large_image',images:['/images/experience-i-campi-cover.webp']}
};

export default function Page(){return <ICampiExperiencePage lang='zh'/>;}
