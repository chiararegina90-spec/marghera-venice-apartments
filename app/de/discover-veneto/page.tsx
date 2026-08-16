import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Venetien entdecken',description:richPages.de['discover-veneto'].subtitle,alternates:languageAlternates('/de/discover-veneto'),openGraph:{type:'website',images:[richPages.de['discover-veneto'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['discover-veneto'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['discover-veneto']}/>}
