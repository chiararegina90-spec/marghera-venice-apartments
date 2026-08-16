import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Rossi Apartment',description:apartmentData.fr.rossi.subtitle,alternates:languageAlternates('/fr/apartments/rossi-apartment'),openGraph:{type:'website',images:[apartmentData.fr.rossi.hero]},twitter:{card:'summary_large_image',images:[apartmentData.fr.rossi.hero]}};
export default function Page(){return <LocalizedApartment lang="fr" data={apartmentData.fr.rossi}/>}
