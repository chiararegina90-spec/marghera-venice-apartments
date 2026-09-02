import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Services nearby | Marghera Venice Apartments',description:'Supermarkets, local market, pharmacy, sport and useful services near Marghera Venice Apartments.',alternates:languageAlternates('/en/services-nearby')};
export default function Page(){return <PublicLocalGuide lang="en" kind="services"/>}
