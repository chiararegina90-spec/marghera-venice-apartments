import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalDe} from '@/data/journal-de';
const data=journalDe['spritz-veneziano'];
export const metadata:Metadata={title:'Spritz in Venedig: Aperitivo, Sorten & Cicchetti',description:'Was zum venezianischen Spritz gehört: Aperitivo-Kultur, Aperol, Select, Campari und Cynar, passende Cicchetti und Tipps für einen entspannten Drink in Venedig.',alternates:languageAlternates('/de/journal/spritz-veneziano'),openGraph:{type:'article',title:'Spritz in Venedig: Aperitivo, Sorten & Cicchetti',description:'Was zum venezianischen Spritz gehört: Aperitivo-Kultur, Aperol, Select, Campari und Cynar, passende Cicchetti und Tipps für einen entspannten Drink in Venedig.',images:[data.image]},twitter:{card:'summary_large_image',title:'Spritz in Venedig: Aperitivo, Sorten & Cicchetti',description:'Was zum venezianischen Spritz gehört: Aperitivo-Kultur, Aperol, Select, Campari und Cynar, passende Cicchetti und Tipps für einen entspannten Drink in Venedig.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="de" data={data} tipLabel='Tipp von Marghera Venice Apartments' officialLabel='Offizielle Informationen' backLabel='Zurück zum Journal'/>}
