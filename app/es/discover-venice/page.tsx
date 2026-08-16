import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Descubrir Venecia',description:richPages.es['discover-venice'].subtitle,alternates:languageAlternates('/es/discover-venice'),openGraph:{type:'website',images:[richPages.es['discover-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['discover-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['discover-venice']}/>}
