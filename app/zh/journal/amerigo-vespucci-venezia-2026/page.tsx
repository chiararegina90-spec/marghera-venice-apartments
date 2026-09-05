import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'2026 Amerigo Vespucci 威尼斯：参观、时间与预约',
  description:'2026年10月2日至8日如何在威尼斯参观 Amerigo Vespucci：停靠地点、登船参观、开放时间以及最新预约信息。',
  alternates:{canonical:'/zh/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'2026 Amerigo Vespucci 威尼斯：参观、时间与预约',description:'2026年10月2日至8日如何在威尼斯参观 Amerigo Vespucci：停靠地点、登船参观、开放时间以及最新预约信息。',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'2026 Amerigo Vespucci 威尼斯：参观、时间与预约',description:'2026年10月2日至8日如何在威尼斯参观 Amerigo Vespucci：停靠地点、登船参观、开放时间以及最新预约信息。',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='zh'/>;}
