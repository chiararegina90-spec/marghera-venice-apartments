import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Enlaces útiles',description:richPages.es['useful-links'].subtitle,alternates:languageAlternates('/es/useful-links'),openGraph:{type:'website',images:[richPages.es['useful-links'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['useful-links'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['useful-links']}/>}
