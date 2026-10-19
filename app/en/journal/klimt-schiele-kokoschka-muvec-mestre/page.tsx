import KlimtMuvecArticle from '@/components/KlimtMuvecArticle';
import {klimtMuvecMetadata} from '@/data/klimtMuvec2026';
export const metadata=klimtMuvecMetadata('en');
export default function Page(){return <KlimtMuvecArticle lang="en"/>;}
