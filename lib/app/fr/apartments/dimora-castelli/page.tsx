import type {Metadata} from 'next';
import {languageAlternates} from '@/lib/i18n';
import {LocalizedApartment} from '@/components/LocalizedRich';
import {apartmentData} from '@/data/localized-rich';
export const metadata:Metadata={title:'Dimora Castelli',description:apartmentData.fr.dimora.subtitle,alternates:languageAlternates('/fr/apartments/dimora-castelli'),openGraph:{type:'website',images:[apartmentData.fr.dimora.hero]},twitter:{card:'summary_large_image',images:[apartmentData.fr.dimora.hero]}};
export default function Page(){return <LocalizedApartment lang="fr" data={apartmentData.fr.dimora}/>}
