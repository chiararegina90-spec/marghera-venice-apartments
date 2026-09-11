import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalEs} from '@/data/journal-es';
const data=journalEs['spritz-veneziano'];
export const metadata:Metadata={title:'Spritz en Venecia: aperitivo, variantes y cicchetti',description:'Guía del Spritz veneciano: cultura del aperitivo, Aperol, Select, Campari o Cynar, cicchetti para acompañar y consejos para disfrutarlo en Venecia.',alternates:languageAlternates('/es/journal/spritz-veneziano'),openGraph:{type:'article',title:'Spritz en Venecia: aperitivo, variantes y cicchetti',description:'Guía del Spritz veneciano: cultura del aperitivo, Aperol, Select, Campari o Cynar, cicchetti para acompañar y consejos para disfrutarlo en Venecia.',images:[data.image]},twitter:{card:'summary_large_image',title:'Spritz en Venecia: aperitivo, variantes y cicchetti',description:'Guía del Spritz veneciano: cultura del aperitivo, Aperol, Select, Campari o Cynar, cicchetti para acompañar y consejos para disfrutarlo en Venecia.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="es" data={data} tipLabel='Consejo de Marghera Venice Apartments' officialLabel='Información oficial' backLabel='Volver al Journal'/>}
