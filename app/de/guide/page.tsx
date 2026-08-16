import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedGuideIndex} from '@/components/LocalizedRich';
import {guideDataDe} from '@/data/guides-de';
const items=Object.values(guideDataDe).map(g=>({title:g.title,subtitle:g.subtitle,text:g.description,image:g.image,alt:g.imageAlt,slug:g.slug}));
export const metadata:Metadata={title:'Reiseführer für Venedig & Venetien',description:'Praktische Reiseideen für Venedig, die Lagune und Ausflüge in Venetien.',alternates:languageAlternates('/de/guide'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedGuideIndex lang="de" title='Reiseführer für Venedig & Venetien' subtitle='Praktische Reiseideen für Venedig, die Lagune und Ausflüge in Venetien.' items={items} openLabel='Guide öffnen'/>}
