import CorporateLanding from '@/components/CorporateLanding';
import {corporateMetadata} from '@/data/corporateContent';
export const metadata=corporateMetadata('de');
export default function CorporatePage(){return <CorporateLanding lang="de"/>;}
