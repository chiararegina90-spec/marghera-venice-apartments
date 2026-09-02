import type {Metadata} from 'next'; import PublicLocalGuide from '@/components/PublicLocalGuide'; import {languageAlternates} from '@/lib/i18n';
export const metadata:Metadata={title:'马尔盖拉与威尼斯餐饮推荐 | Marghera Venice Apartments',description:'马尔盖拉与威尼斯的餐厅、甜点店、cicchetti、开胃酒、披萨与外带推荐。',alternates:languageAlternates('/zh/where-to-eat')};
export default function Page(){return <PublicLocalGuide lang="zh" kind="food"/>}
