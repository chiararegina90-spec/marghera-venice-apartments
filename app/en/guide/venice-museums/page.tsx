import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','en');
export default function Page(){return <CultureIndexPage lang="en" scope="venice" places={veniceCulturePlaces}/>;}
