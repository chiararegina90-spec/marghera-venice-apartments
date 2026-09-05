import CultureIndexPage from '@/components/CultureIndexPage';
import {veniceCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('venice','zh');
export default function Page(){return <CultureIndexPage lang="zh" scope="venice" places={veniceCulturePlaces}/>;}
