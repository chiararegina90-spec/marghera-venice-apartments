import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalEs} from '@/data/journal-es';
import {eventArticle} from '@/data/journal-events-2026';
const recentSlugs=['san-martino-venezia','venezia-a-novembre','biennale-architettura-2027','regata-storica-2027','venicemarathon-2027'] as const;
const recentItems=recentSlugs.flatMap(slug=>{const a=eventArticle('es',slug);return a?[{slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.image,eventDate:a.eventDate}]:[];});
const items=[...Object.values(journalEs).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt,cardImage:a.cardImage,eventDate:a.eventDate})),...recentItems];
export const metadata:Metadata={title:'Journal de Venecia',description:'Eventos, tradiciones, gastronomía y consejos prácticos para disfrutar mejor de Venecia.',alternates:languageAlternates('/es/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="es" title='Journal de Venecia' subtitle='Eventos, tradiciones, gastronomía y consejos prácticos para disfrutar mejor de Venecia.' items={items} readLabel='Leer artículo' guideLabel='Ver todas las guías'/>}
