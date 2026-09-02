import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Servicios cercanos | Marghera Venice Apartments',description:'Supermercados, mercado local, farmacia, deporte y servicios útiles cerca de los apartamentos.',alternates:languageAlternates('/es/services-nearby')};
export default function Page(){return <PublicLocalGuide lang="es" kind="services"/>}
