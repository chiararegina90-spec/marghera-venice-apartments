import CorporateLanding from '@/components/CorporateLanding';
import {corporateMetadata} from '@/data/corporateContent';
export const metadata=corporateMetadata('zh');
export default function CorporatePage(){return <CorporateLanding lang="zh"/>;}
