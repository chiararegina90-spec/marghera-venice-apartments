import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','fr');
export default function Page(){return <CultureIndexPage lang="fr" scope="venice" places={veniceCulturePlaces}/>;}
