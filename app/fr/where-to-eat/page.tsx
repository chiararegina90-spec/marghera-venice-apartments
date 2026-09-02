import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Où manger à Marghera et Venise | Marghera Venice Apartments',description:'Restaurants, pâtisseries, cicchetti, apéritifs, pizzas et plats à emporter à Marghera et Venise.',alternates:languageAlternates('/fr/where-to-eat')};
export default function Page(){return <PublicLocalGuide lang="fr" kind="food"/>}
