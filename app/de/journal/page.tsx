import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalDe} from '@/data/journal-de';
import {eventArticle} from '@/data/journal-events-2026';
const recentSlugs=['san-martino-venezia','venezia-a-novembre','biennale-architettura-2027','regata-storica-2027','venicemarathon-2027'] as const;
const recentItems=recentSlugs.flatMap(slug=>{const a=eventArticle('de',slug);return a?[{slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.image,eventDate:a.eventDate}]:[];});
const items=[...Object.values(journalDe).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.cardImage,eventDate:a.eventDate})),...recentItems];
export const metadata:Metadata={title:'Venedig Journal',description:'Veranstaltungen, Traditionen, Essen und praktische Tipps für Ihren Aufenthalt.',alternates:languageAlternates('/de/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="de" title='Venedig Journal' subtitle='Veranstaltungen, Traditionen, Essen und praktische Tipps für Ihren Aufenthalt.' items={items} readLabel='Artikel lesen' guideLabel='Alle Reiseführer'/>}
