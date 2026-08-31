import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedExperiencesPage} from '@/components/LocalizedSecondaryPages';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Expériences',description:richPages.fr['experiences'].subtitle,alternates:languageAlternates('/fr/experiences'),openGraph:{type:'website',images:[richPages.fr['experiences'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['experiences'].hero]}};
export default function Page(){return <LocalizedExperiencesPage lang="fr" data={richPages.fr['experiences']}/>}
