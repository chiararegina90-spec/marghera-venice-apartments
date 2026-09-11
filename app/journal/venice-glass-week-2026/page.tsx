import GlassWeek2026Article from '@/components/GlassWeek2026Article';
import JournalSchemaBundle from '@/components/JournalSchemaBundle';
import {glassWeek2026} from '@/data/glassWeek2026';
import {editorialMetadata} from '@/lib/seoContentMetadata';
const data=glassWeek2026.it; const image='/images/journal-venice-glass-week-2026-cover.webp';
export const metadata=editorialMetadata({lang:'it',logicalPath:'/journal/venice-glass-week-2026',title:data.seoTitle,description:data.metaDescription,image,alt:data.imageAlt});
export default function Page(){return <><JournalSchemaBundle lang="it" logicalPath="/journal/venice-glass-week-2026" title={data.h1} description={data.metaDescription} image={image} dateModified="2026-09-11" event={{startDate:'2026-09-12',endDate:'2026-09-20',locationName:'Venezia, Murano e Mestre'}}/><GlassWeek2026Article data={data}/></>;}
