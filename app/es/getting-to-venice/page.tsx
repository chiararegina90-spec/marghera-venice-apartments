import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Cómo llegar a Venecia desde Marghera',description:richPages.es['getting-to-venice'].subtitle,alternates:languageAlternates('/es/getting-to-venice'),openGraph:{type:'website',images:[richPages.es['getting-to-venice'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['getting-to-venice'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['getting-to-venice']}/>}
