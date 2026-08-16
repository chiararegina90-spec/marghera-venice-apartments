import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Nützliche Links',description:richPages.de['useful-links'].subtitle,alternates:languageAlternates('/de/useful-links'),openGraph:{type:'website',images:[richPages.de['useful-links'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['useful-links'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['useful-links']}/>}
