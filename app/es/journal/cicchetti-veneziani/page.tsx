import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalEs} from '@/data/journal-es';
const data=journalEs['cicchetti-veneziani'];
export const metadata:Metadata={title:'Cicchetti en Venecia: qué son, qué pedir y cómo comerlos',description:'Guía de cicchetti venecianos: especialidades, bacari, cómo pedir en la barra, bebidas y consejos para hacer una pequeña ruta gastronómica por Venecia.',alternates:languageAlternates('/es/journal/cicchetti-veneziani'),openGraph:{type:'article',title:'Cicchetti en Venecia: qué son, qué pedir y cómo comerlos',description:'Guía de cicchetti venecianos: especialidades, bacari, cómo pedir en la barra, bebidas y consejos para hacer una pequeña ruta gastronómica por Venecia.',images:[data.image]},twitter:{card:'summary_large_image',title:'Cicchetti en Venecia: qué son, qué pedir y cómo comerlos',description:'Guía de cicchetti venecianos: especialidades, bacari, cómo pedir en la barra, bebidas y consejos para hacer una pequeña ruta gastronómica por Venecia.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="es" data={data} tipLabel='Consejo de Marghera Venice Apartments' officialLabel='Información oficial' backLabel='Volver al Journal'/>}
