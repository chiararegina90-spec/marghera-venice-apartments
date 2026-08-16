import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Rejoindre Venise depuis Marghera',description:richPages.fr['getting-to-venice'].subtitle,alternates:languageAlternates('/fr/getting-to-venice'),openGraph:{type:'website',images:[richPages.fr['getting-to-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['getting-to-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="fr" data={richPages.fr['getting-to-venice']}/>}
