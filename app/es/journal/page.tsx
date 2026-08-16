import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalIndex} from '@/components/LocalizedRich';
import {journalEs} from '@/data/journal-es';
const items=Object.values(journalEs).map(a=>({slug:a.slug,title:a.title,category:a.category,description:a.description,image:a.image,imageAlt:a.imageAlt}));
export const metadata:Metadata={title:'Journal de Venecia',description:'Eventos, tradiciones, gastronomía y consejos prácticos para disfrutar mejor de Venecia.',alternates:languageAlternates('/es/journal'),openGraph:{type:'website',images:['/images/home-rialto-vincenzo-landino.webp']},twitter:{card:'summary_large_image',images:['/images/home-rialto-vincenzo-landino.webp']}};
export default function Page(){return <LocalizedJournalIndex lang="es" title='Journal de Venecia' subtitle='Eventos, tradiciones, gastronomía y consejos prácticos para disfrutar mejor de Venecia.' items={items} readLabel='Leer artículo' guideLabel='Ver todas las guías'/>}
