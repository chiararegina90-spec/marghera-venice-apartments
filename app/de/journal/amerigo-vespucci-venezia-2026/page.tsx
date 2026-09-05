import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'Amerigo Vespucci Venedig 2026: Besuch, Zeiten & Reservierung',
  description:'Amerigo Vespucci in Venedig vom 2. bis 8. Oktober 2026 besuchen: Liegeplatz, Bordbesichtigung, Zeiten und aktuelle Informationen zur Reservierung.',
  alternates:{canonical:'/de/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'Amerigo Vespucci Venedig 2026: Besuch, Zeiten & Reservierung',description:'Amerigo Vespucci in Venedig vom 2. bis 8. Oktober 2026 besuchen: Liegeplatz, Bordbesichtigung, Zeiten und aktuelle Informationen zur Reservierung.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'Amerigo Vespucci Venedig 2026: Besuch, Zeiten & Reservierung',description:'Amerigo Vespucci in Venedig vom 2. bis 8. Oktober 2026 besuchen: Liegeplatz, Bordbesichtigung, Zeiten und aktuelle Informationen zur Reservierung.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='de'/>;}
