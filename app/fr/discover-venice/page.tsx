import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Découvrir Venise',description:richPages.fr['discover-venice'].subtitle,alternates:languageAlternates('/fr/discover-venice'),openGraph:{type:'website',images:[richPages.fr['discover-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['discover-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="fr" data={richPages.fr['discover-venice']}/>}
