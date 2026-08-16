import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Dimora Castelli',description:apartmentData.de.dimora.subtitle,alternates:languageAlternates('/de/apartments/dimora-castelli'),openGraph:{type:'website',images:[apartmentData.de.dimora.hero]},twitter:{card:'summary_large_image',images:[apartmentData.de.dimora.hero]}};
export default function Page(){return <LocalizedApartment lang="de" data={apartmentData.de.dimora}/>}
