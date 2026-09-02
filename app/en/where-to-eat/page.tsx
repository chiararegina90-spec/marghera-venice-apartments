import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Where to eat in Marghera and Venice | Marghera Venice Apartments',description:'Restaurants, pastry shops, cicchetti, aperitivo, pizza and takeaway recommendations in Marghera and Venice.',alternates:languageAlternates('/en/where-to-eat')};
export default function Page(){return <PublicLocalGuide lang="en" kind="food"/>}
