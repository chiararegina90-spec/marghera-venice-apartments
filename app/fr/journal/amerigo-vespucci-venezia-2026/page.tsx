import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'Amerigo Vespucci Venise 2026 : visites, horaires et réservation',
  description:'Comment visiter l’Amerigo Vespucci à Venise du 2 au 8 octobre 2026 : amarrage, visites à bord, horaires et informations à jour sur les réservations.',
  alternates:{canonical:'/fr/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'Amerigo Vespucci Venise 2026 : visites, horaires et réservation',description:'Comment visiter l’Amerigo Vespucci à Venise du 2 au 8 octobre 2026 : amarrage, visites à bord, horaires et informations à jour sur les réservations.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'Amerigo Vespucci Venise 2026 : visites, horaires et réservation',description:'Comment visiter l’Amerigo Vespucci à Venise du 2 au 8 octobre 2026 : amarrage, visites à bord, horaires et informations à jour sur les réservations.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='fr'/>;}
