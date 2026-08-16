import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'常见问题',description:richPages.zh['faq'].subtitle,alternates:languageAlternates('/zh/faq'),openGraph:{type:'website',images:[richPages.zh['faq'].hero]},twitter:{card:'summary_large_image',images:[richPages.zh['faq'].hero]}};
export default function Page(){return <LocalizedRichPage lang="zh" data={richPages.zh['faq']}/>}
