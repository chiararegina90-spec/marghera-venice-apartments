import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Descubrir Véneto',description:richPages.es['discover-veneto'].subtitle,alternates:languageAlternates('/es/discover-veneto'),openGraph:{type:'website',images:[richPages.es['discover-veneto'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['discover-veneto'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['discover-veneto']}/>}
