import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGuideIndex} from '@/components/LocalizedRich';
import {guideDataFr} from '@/data/guides-fr';
const items=Object.values(guideDataFr).map(g=>({title:g.title,subtitle:g.subtitle,text:g.description,image:g.image,alt:g.imageAlt,slug:g.slug}));
export const metadata:Metadata={title:'Guides pour Venise & la Vénétie',description:'Des guides pratiques pour Venise, les îles de la lagune et les excursions en Vénétie.',alternates:languageAlternates('/fr/guide'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedGuideIndex lang="fr" title='Guides pour Venise & la Vénétie' subtitle='Des guides pratiques pour Venise, les îles de la lagune et les excursions en Vénétie.' items={items} openLabel='Ouvrir le guide'/>}
