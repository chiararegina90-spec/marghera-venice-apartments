import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'Services in der Nähe | Marghera Venice Apartments',description:'Supermärkte, Wochenmarkt, Apotheke, Sport und nützliche Services nahe den Apartments.',alternates:languageAlternates('/de/services-nearby')};
export default function Page(){return <PublicLocalGuide lang="de" kind="services"/>}
