import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','de');
export default function Page(){return <CultureIndexPage lang="de" scope="venice" places={veniceCulturePlaces}/>;}
