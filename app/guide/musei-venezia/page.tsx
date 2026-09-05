import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','it');
export default function Page(){return <CultureIndexPage lang="it" scope="venice" places={veniceCulturePlaces}/>;}
