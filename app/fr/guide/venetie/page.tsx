import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','fr');
export default function Page(){return <CultureIndexPage lang="fr" scope="veneto" places={venetoCulturePlaces}/>;}
