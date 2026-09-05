import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','it');
export default function Page(){return <CultureIndexPage lang="it" scope="veneto" places={venetoCulturePlaces}/>;}
