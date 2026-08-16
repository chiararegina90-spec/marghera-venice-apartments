import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Rossi Apartment',description:apartmentData.de.rossi.subtitle,alternates:languageAlternates('/de/apartments/rossi-apartment'),openGraph:{type:'website',images:[apartmentData.de.rossi.hero]},twitter:{card:'summary_large_image',images:[apartmentData.de.rossi.hero]}};
export default function Page(){return <LocalizedApartment lang="de" data={apartmentData.de.rossi}/>}
