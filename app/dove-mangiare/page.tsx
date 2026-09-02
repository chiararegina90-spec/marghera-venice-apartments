import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Dove mangiare a Marghera e Venezia | Marghera Venice Apartments',description:'Ristoranti, pasticcerie, cicchetti, aperitivi, pizza e take-away consigliati tra Marghera e Venezia.',alternates:languageAlternates('/dove-mangiare')};
export default function Page(){return <PublicLocalGuide kind="food"/>}
