import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'Amerigo Vespucci Venice 2026: visits, times & booking',
  description:'How to visit Amerigo Vespucci in Venice from 2 to 8 October 2026: berth, onboard visits, visiting times and the latest booking information.',
  alternates:{canonical:'/en/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'Amerigo Vespucci Venice 2026: visits, times & booking',description:'How to visit Amerigo Vespucci in Venice from 2 to 8 October 2026: berth, onboard visits, visiting times and the latest booking information.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'Amerigo Vespucci Venice 2026: visits, times & booking',description:'How to visit Amerigo Vespucci in Venice from 2 to 8 October 2026: berth, onboard visits, visiting times and the latest booking information.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='en'/>;}
