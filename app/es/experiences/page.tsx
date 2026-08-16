import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Experiencias',description:richPages.es['experiences'].subtitle,alternates:languageAlternates('/es/experiences'),openGraph:{type:'website',images:[richPages.es['experiences'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['experiences'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['experiences']}/>}
