import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'探索威尼斯',description:richPages.zh['discover-venice'].subtitle,alternates:languageAlternates('/zh/discover-venice'),openGraph:{type:'website',images:[richPages.zh['discover-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.zh['discover-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="zh" data={richPages.zh['discover-venice']}/>}
