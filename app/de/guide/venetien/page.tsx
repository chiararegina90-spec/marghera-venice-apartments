import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','de');
export default function Page(){return <CultureIndexPage lang="de" scope="veneto" places={venetoCulturePlaces}/>;}
