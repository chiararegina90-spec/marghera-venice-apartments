import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedUsefulLinksPage} from '@/components/LocalizedSecondaryPages';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'实用链接',description:richPages.zh['useful-links'].subtitle,alternates:languageAlternates('/zh/useful-links'),openGraph:{type:'website',images:[richPages.zh['useful-links'].hero]},twitter:{card:'summary_large_image',images:[richPages.zh['useful-links'].hero]}};
export default function Page(){return <LocalizedUsefulLinksPage lang="zh" data={richPages.zh['useful-links']}/>}
