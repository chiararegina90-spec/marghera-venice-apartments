import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Servizi in zona | Marghera Venice Apartments',description:'Supermercati, mercato, farmacia, sport e altri servizi utili vicino agli appartamenti di Marghera Venice Apartments.',alternates:languageAlternates('/servizi-in-zona')};
export default function Page(){return <PublicLocalGuide kind="services"/>}
