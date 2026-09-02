import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Services à proximité | Marghera Venice Apartments',description:'Supermarchés, marché local, pharmacie, sport et services utiles près des appartements.',alternates:languageAlternates('/fr/services-nearby')};
export default function Page(){return <PublicLocalGuide lang="fr" kind="services"/>}
