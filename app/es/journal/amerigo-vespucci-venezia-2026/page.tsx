import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'Amerigo Vespucci Venecia 2026: visitas, horarios y reservas',
  description:'Cómo visitar el Amerigo Vespucci en Venecia del 2 al 8 de octubre de 2026: atraque, visitas a bordo, horarios e información actualizada sobre reservas.',
  alternates:{canonical:'/es/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'Amerigo Vespucci Venecia 2026: visitas, horarios y reservas',description:'Cómo visitar el Amerigo Vespucci en Venecia del 2 al 8 de octubre de 2026: atraque, visitas a bordo, horarios e información actualizada sobre reservas.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'Amerigo Vespucci Venecia 2026: visitas, horarios y reservas',description:'Cómo visitar el Amerigo Vespucci en Venecia del 2 al 8 de octubre de 2026: atraque, visitas a bordo, horarios e información actualizada sobre reservas.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='es'/>;}
