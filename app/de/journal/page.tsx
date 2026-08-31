import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalDe} from '@/data/journal-de';
const items=Object.values(journalDe).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.cardImage,eventDate:a.eventDate}));
export const metadata:Metadata={title:'Venedig Journal',description:'Veranstaltungen, Traditionen, Essen und praktische Tipps für Ihren Aufenthalt.',alternates:languageAlternates('/de/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="de" title='Venedig Journal' subtitle='Veranstaltungen, Traditionen, Essen und praktische Tipps für Ihren Aufenthalt.' items={items} readLabel='Artikel lesen' guideLabel='Alle Reiseführer'/>}
