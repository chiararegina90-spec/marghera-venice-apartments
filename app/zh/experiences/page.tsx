import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedExperiencesPage} from '@/components/LocalizedSecondaryPages';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'精选体验',description:richPages.zh['experiences'].subtitle,alternates:languageAlternates('/zh/experiences'),openGraph:{type:'website',images:[richPages.zh['experiences'].hero]},twitter:{card:'summary_large_image',images:[richPages.zh['experiences'].hero]}};
export default function Page(){return <LocalizedExperiencesPage lang="zh" data={richPages.zh['experiences']}/>}
