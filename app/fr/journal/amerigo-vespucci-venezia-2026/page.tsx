import AuditedAmerigoVespucciArticle from '@/components/AuditedAmerigoVespucciArticle';
import {amerigoVespucci2026Audit} from '@/data/amerigoVespucci2026Audit';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data=amerigoVespucci2026Audit.fr;
export const metadata=editorialMetadata({lang:'fr',logicalPath:'/journal/amerigo-vespucci-venezia-2026',title:data.seoTitle,description:data.description,image:'/images/journal-amerigo-vespucci-venezia-2026-cover.webp',alt:data.title});
export default function Page(){return <AuditedAmerigoVespucciArticle lang="fr"/>;}
