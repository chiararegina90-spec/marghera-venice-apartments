import KlimtMuvecArticle from '@/components/KlimtMuvecArticle';
import {klimtMuvecMetadata} from '@/data/klimtMuvec2026';
export const metadata=klimtMuvecMetadata('zh');
export default function Page(){return <KlimtMuvecArticle lang="zh"/>;}
