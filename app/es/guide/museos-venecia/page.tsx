import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','es');
export default function Page(){return <CultureIndexPage lang="es" scope="venice" places={veniceCulturePlaces}/>;}
