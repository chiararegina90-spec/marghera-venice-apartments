import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalDe} from '@/data/journal-de';
const data=journalDe['cicchetti-veneziani'];
export const metadata:Metadata={title:'Cicchetti in Venedig: Was sie sind & wie man sie bestellt',description:'Venezianische Cicchetti verstehen: typische Sorten, Bacari, Bestellen am Tresen, passende Getränke und Tipps für eine kleine Cicchetti-Tour in Venedig.',alternates:languageAlternates('/de/journal/cicchetti-veneziani'),openGraph:{type:'article',title:'Cicchetti in Venedig: Was sie sind & wie man sie bestellt',description:'Venezianische Cicchetti verstehen: typische Sorten, Bacari, Bestellen am Tresen, passende Getränke und Tipps für eine kleine Cicchetti-Tour in Venedig.',images:[data.image]},twitter:{card:'summary_large_image',title:'Cicchetti in Venedig: Was sie sind & wie man sie bestellt',description:'Venezianische Cicchetti verstehen: typische Sorten, Bacari, Bestellen am Tresen, passende Getränke und Tipps für eine kleine Cicchetti-Tour in Venedig.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="de" data={data} tipLabel='Tipp von Marghera Venice Apartments' officialLabel='Offizielle Informationen' backLabel='Zurück zum Journal'/>}
