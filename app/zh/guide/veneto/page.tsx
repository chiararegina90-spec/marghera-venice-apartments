import CultureIndexPage from '@/components/CultureIndexPage';
import {venetoCulturePlaces} from '@/data/culturePlaces';
import {cultureIndexMetadata} from '@/lib/cultureSeo';
export const metadata=cultureIndexMetadata('veneto','zh');
export default function Page(){return <CultureIndexPage lang="zh" scope="veneto" places={venetoCulturePlaces}/>;}
