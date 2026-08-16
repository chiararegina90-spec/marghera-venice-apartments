import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Preguntas frecuentes',description:richPages.es['faq'].subtitle,alternates:languageAlternates('/es/faq'),openGraph:{type:'website',images:[richPages.es['faq'].hero]},twitter:{card:'summary_large_image',images:[richPages.es['faq'].hero]}};
export default function Page(){return <LocalizedRichPage lang="es" data={richPages.es['faq']}/>}
