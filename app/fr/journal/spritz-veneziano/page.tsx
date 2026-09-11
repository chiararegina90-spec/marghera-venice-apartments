import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalFr} from '@/data/journal-fr';
const data=journalFr['spritz-veneziano'];
export const metadata:Metadata={title:'Spritz à Venise : aperitivo, variantes et cicchetti',description:'Comprendre le Spritz vénitien : culture de l’aperitivo, Aperol, Select, Campari ou Cynar, cicchetti à partager et conseils pour en profiter à Venise.',alternates:languageAlternates('/fr/journal/spritz-veneziano'),openGraph:{type:'article',title:'Spritz à Venise : aperitivo, variantes et cicchetti',description:'Comprendre le Spritz vénitien : culture de l’aperitivo, Aperol, Select, Campari ou Cynar, cicchetti à partager et conseils pour en profiter à Venise.',images:[data.image]},twitter:{card:'summary_large_image',title:'Spritz à Venise : aperitivo, variantes et cicchetti',description:'Comprendre le Spritz vénitien : culture de l’aperitivo, Aperol, Select, Campari ou Cynar, cicchetti à partager et conseils pour en profiter à Venise.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="fr" data={data} tipLabel='Conseil de Marghera Venice Apartments' officialLabel='Informations officielles' backLabel='Retour au Journal'/>}
