import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Rossi Apartment',description:apartmentData.es.rossi.subtitle,alternates:languageAlternates('/es/apartments/rossi-apartment'),openGraph:{type:'website',images:[apartmentData.es.rossi.hero]},twitter:{card:'summary_large_image',images:[apartmentData.es.rossi.hero]}};
export default function Page(){return <LocalizedApartment lang="es" data={apartmentData.es.rossi}/>}
