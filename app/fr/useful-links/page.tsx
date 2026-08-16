import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Liens utiles',description:richPages.fr['useful-links'].subtitle,alternates:languageAlternates('/fr/useful-links'),openGraph:{type:'website',images:[richPages.fr['useful-links'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['useful-links'].hero]}};
export default function Page(){return <LocalizedRichPage lang="fr" data={richPages.fr['useful-links']}/>}
