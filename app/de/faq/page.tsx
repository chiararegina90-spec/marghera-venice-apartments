import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Häufig gestellte Fragen',description:richPages.de['faq'].subtitle,alternates:languageAlternates('/de/faq'),openGraph:{type:'website',images:[richPages.de['faq'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['faq'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['faq']}/>}
