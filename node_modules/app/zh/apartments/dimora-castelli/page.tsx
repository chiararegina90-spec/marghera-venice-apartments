import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Dimora Castelli',description:apartmentData.zh.dimora.subtitle,alternates:languageAlternates('/zh/apartments/dimora-castelli'),openGraph:{type:'website',images:[apartmentData.zh.dimora.hero]},twitter:{card:'summary_large_image',images:[apartmentData.zh.dimora.hero]}};
export default function Page(){return <LocalizedApartment lang="zh" data={apartmentData.zh.dimora}/>}
