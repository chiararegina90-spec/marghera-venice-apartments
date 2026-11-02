import CorporateLanding from '@/components/CorporateLanding';
import {corporateMetadata} from '@/data/corporateContent';
export const metadata=corporateMetadata('en');
export default function CorporatePage(){return <CorporateLanding lang="en"/>;}
