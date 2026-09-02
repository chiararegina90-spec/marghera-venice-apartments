import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Dónde comer en Marghera y Venecia | Marghera Venice Apartments',description:'Restaurantes, pastelerías, cicchetti, aperitivos, pizza y comida para llevar en Marghera y Venecia.',alternates:languageAlternates('/es/where-to-eat')};
export default function Page(){return <PublicLocalGuide lang="es" kind="food"/>}
