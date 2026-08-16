import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Von Marghera nach Venedig',description:richPages.de['getting-to-venice'].subtitle,alternates:languageAlternates('/de/getting-to-venice'),openGraph:{type:'website',images:[richPages.de['getting-to-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.de['getting-to-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="de" data={richPages.de['getting-to-venice']}/>}
