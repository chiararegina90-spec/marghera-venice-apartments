import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'附近服务 | Marghera Venice Apartments',description:'公寓附近的超市、当地市场、药房、运动设施及其他实用服务。',alternates:languageAlternates('/zh/services-nearby')};
export default function Page(){return <PublicLocalGuide lang="zh" kind="services"/>}
