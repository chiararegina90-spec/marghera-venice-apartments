import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Découvrir la Vénétie',description:richPages.fr['discover-veneto'].subtitle,alternates:languageAlternates('/fr/discover-veneto'),openGraph:{type:'website',images:[richPages.fr['discover-veneto'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['discover-veneto'].hero]}};
export default function Page(){return <LocalizedRichPage lang="fr" data={richPages.fr['discover-veneto']}/>}
