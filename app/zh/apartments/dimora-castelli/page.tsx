import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Dimora Castelli｜最多5人・免费私人停车・近威尼斯',description:apartmentData.zh.dimora.subtitle,alternates:languageAlternates('/zh/apartments/dimora-castelli'),openGraph:{type:'website',images:[apartmentData.zh.dimora.hero]},twitter:{card:'summary_large_image',images:[apartmentData.zh.dimora.hero]}};
export default function Page(){return <LocalizedApartment lang="zh" data={apartmentData.zh.dimora}/>}
