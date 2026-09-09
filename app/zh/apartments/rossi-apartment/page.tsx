import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Rossi Apartment｜最多7人・免费私人停车・近威尼斯',description:apartmentData.zh.rossi.subtitle,alternates:languageAlternates('/zh/apartments/rossi-apartment'),openGraph:{type:'website',images:[apartmentData.zh.rossi.hero]},twitter:{card:'summary_large_image',images:[apartmentData.zh.rossi.hero]}};
export default function Page(){return <LocalizedApartment lang="zh" data={apartmentData.zh.rossi}/>}
