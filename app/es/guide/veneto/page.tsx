import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','es');
export default function Page(){return <CultureIndexPage lang="es" scope="veneto" places={venetoCulturePlaces}/>;}
