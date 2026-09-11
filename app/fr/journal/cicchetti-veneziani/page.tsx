import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedJournalArticle} from '@/components/LocalizedRich';
import {journalFr} from '@/data/journal-fr';
const data=journalFr['cicchetti-veneziani'];
export const metadata:Metadata={title:'Cicchetti à Venise : que manger et comment les commander',description:'Comprendre les cicchetti vénitiens : spécialités, bacari, commande au comptoir, boissons et conseils pour composer une petite tournée gourmande à Venise.',alternates:languageAlternates('/fr/journal/cicchetti-veneziani'),openGraph:{type:'article',title:'Cicchetti à Venise : que manger et comment les commander',description:'Comprendre les cicchetti vénitiens : spécialités, bacari, commande au comptoir, boissons et conseils pour composer une petite tournée gourmande à Venise.',images:[data.image]},twitter:{card:'summary_large_image',title:'Cicchetti à Venise : que manger et comment les commander',description:'Comprendre les cicchetti vénitiens : spécialités, bacari, commande au comptoir, boissons et conseils pour composer une petite tournée gourmande à Venise.',images:[data.image]}};
export default function Page(){return <LocalizedJournalArticle lang="fr" data={data} tipLabel='Conseil de Marghera Venice Apartments' officialLabel='Informations officielles' backLabel='Retour au Journal'/>}
