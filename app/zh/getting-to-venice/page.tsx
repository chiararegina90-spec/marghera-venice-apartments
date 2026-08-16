import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'从马尔盖拉前往威尼斯',description:richPages.zh['getting-to-venice'].subtitle,alternates:languageAlternates('/zh/getting-to-venice'),openGraph:{type:'website',images:[richPages.zh['getting-to-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.zh['getting-to-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="zh" data={richPages.zh['getting-to-venice']}/>}
