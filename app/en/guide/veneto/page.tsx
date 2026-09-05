import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','en');
export default function Page(){return <CultureIndexPage lang="en" scope="veneto" places={venetoCulturePlaces}/>;}
