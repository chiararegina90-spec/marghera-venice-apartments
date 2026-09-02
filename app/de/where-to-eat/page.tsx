import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Essen in Marghera und Venedig | Marghera Venice Apartments',description:'Restaurants, Konditoreien, Cicchetti, Aperitivo, Pizza und Take-away in Marghera und Venedig.',alternates:languageAlternates('/de/where-to-eat')};
export default function Page(){return <PublicLocalGuide lang="de" kind="food"/>}
