import type {Metadata} from 'next';
import AmerigoVespucciArticle from '@/components/AmerigoVespucciArticle';

export const metadata:Metadata={
  title:'Amerigo Vespucci Venezia 2026: visite, orari e prenotazioni',
  description:'Come visitare l’Amerigo Vespucci a Venezia dal 2 all’8 ottobre 2026: dove sarà ormeggiata, visite a bordo, orari e informazioni aggiornate sulle prenotazioni.',
  alternates:{canonical:'/journal/amerigo-vespucci-venezia-2026',languages:{'it-IT':'/journal/amerigo-vespucci-venezia-2026','en-GB':'/en/journal/amerigo-vespucci-venezia-2026','de-DE':'/de/journal/amerigo-vespucci-venezia-2026','fr-FR':'/fr/journal/amerigo-vespucci-venezia-2026','es-ES':'/es/journal/amerigo-vespucci-venezia-2026','zh-CN':'/zh/journal/amerigo-vespucci-venezia-2026','x-default':'/journal/amerigo-vespucci-venezia-2026'}},
  openGraph:{type:'article',title:'Amerigo Vespucci Venezia 2026: visite, orari e prenotazioni',description:'Come visitare l’Amerigo Vespucci a Venezia dal 2 all’8 ottobre 2026: dove sarà ormeggiata, visite a bordo, orari e informazioni aggiornate sulle prenotazioni.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']},
  twitter:{card:'summary_large_image',title:'Amerigo Vespucci Venezia 2026: visite, orari e prenotazioni',description:'Come visitare l’Amerigo Vespucci a Venezia dal 2 all’8 ottobre 2026: dove sarà ormeggiata, visite a bordo, orari e informazioni aggiornate sulle prenotazioni.',images:['/images/journal-amerigo-vespucci-venezia-2026-cover.webp']}
};

export default function Page(){return <AmerigoVespucciArticle lang='it'/>;}
