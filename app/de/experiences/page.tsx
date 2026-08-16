import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Erlebnisse',description:richPages.de['experiences'].subtitle,alternates:languageAlternates('/de/experiences'),openGraph:{type:'website',images:[richPages.de['experiences'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['experiences'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['experiences']}/>}
