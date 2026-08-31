import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalFr} from '@/data/journal-fr';
const items=Object.values(journalFr).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.cardImage,eventDate:a.eventDate}));
export const metadata:Metadata={title:'Journal de Venise',description:'Événements, traditions, gastronomie et conseils pratiques pour mieux vivre Venise.',alternates:languageAlternates('/fr/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="fr" title='Journal de Venise' subtitle='Événements, traditions, gastronomie et conseils pratiques pour mieux vivre Venise.' items={items} readLabel='Lire l’article' guideLabel='Voir tous les guides'/>}
