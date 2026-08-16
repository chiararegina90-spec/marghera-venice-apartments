import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Venedig entdecken',description:richPages.de['discover-venice'].subtitle,alternates:languageAlternates('/de/discover-venice'),openGraph:{type:'website',images:[richPages.de['discover-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['discover-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['discover-venice']}/>}
