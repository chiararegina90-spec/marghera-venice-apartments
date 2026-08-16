import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedRichPage} from '@/components/LocalizedRich';
import {richPages} from '@/data/localized-rich';
export const metadata:Metadata={title:'Questions fréquentes',description:richPages.fr['faq'].subtitle,alternates:languageAlternates('/fr/faq'),openGraph:{type:'website',images:[richPages.fr['faq'].hero]},twitter:{card:'summary_large_image',images:[richPages.fr['faq'].hero]}};
export default function Page(){return <LocalizedRichPage lang="fr" data={richPages.fr['faq']}/>}
