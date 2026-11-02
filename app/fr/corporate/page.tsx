import CorporateLanding from '@/components/CorporateLanding';
import {corporateMetadata} from '@/data/corporateContent';
export const metadata=corporateMetadata('fr');
export default function CorporatePage(){return <CorporateLanding lang="fr"/>;}
