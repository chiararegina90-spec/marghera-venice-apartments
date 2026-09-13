import {NextResponse} from 'next/server';
import {eventArticles,type EventLang} from '@/data/journal-events-2026';
import {journalEventImagePair} from '@/data/journal-event-images';
import {eventCalendarDates,eventCalendarDate} from '@/data/event-calendar';
import {journalDe} from '@/data/journal-de';
import {journalFr} from '@/data/journal-fr';
import {journalEs} from '@/data/journal-es';
import {journalZh} from '@/data/journal-zh';

export const runtime='nodejs';

type LegacyCard={title:string;description:string;image:string;cardImage?:string;imageAlt?:string};
const legacySlugs=['amerigo-vespucci-venezia-2026','regata-storica-2026','venice-glass-week-2026','carnevale-di-venezia','festa-del-redentore','mostra-del-cinema','homo-faber-2026','biennale-di-venezia'] as const;

const primaryLegacy:Record<'it'|'en',Record<(typeof legacySlugs)[number],LegacyCard>>={
  it:{
    'amerigo-vespucci-venezia-2026':{title:'Amerigo Vespucci torna a Venezia',description:'La nave scuola Amerigo Vespucci torna a Venezia: date confermate e informazioni pratiche per organizzare la visita.',image:'/images/journal-amerigo-vespucci-venezia-2026-cover.webp'},
    'regata-storica-2026':{title:'Regata Storica di Venezia 2026',description:'Corteo storico, voga alla veneta e regate sul Canal Grande in una delle giornate più tradizionali di Venezia.',image:'/images/journal-regata-storica-2026.webp'},
    'venice-glass-week-2026':{title:'The Venice Glass Week 2026',description:'La decima edizione celebra l’arte del vetro con oltre 200 eventi tra Venezia, Mestre e Murano.',image:'/images/journal-venice-glass-week-2026-card.webp'},
    'carnevale-di-venezia':{title:'Carnevale di Venezia',description:'Maschere, cortei, spettacoli e una città che per alcune settimane cambia completamente volto.',image:'/images/journal-carnevale.webp'},
    'festa-del-redentore':{title:'Festa del Redentore',description:'Una delle notti più sentite dai veneziani: memoria, barche e fuochi nel Bacino di San Marco.',image:'/images/journal-redentore.webp'},
    'mostra-del-cinema':{title:'Mostra del Cinema di Venezia',description:'Il Lido diventa il centro internazionale del cinema tra proiezioni, red carpet, premi e grandi anteprime.',image:'/images/journal-mostra-cinema.webp'},
    'homo-faber-2026':{title:'Homo Faber 2026: An Island of Light',description:'L’Isola di San Giorgio celebra l’eccellenza dell’artigianato contemporaneo internazionale.',image:'/images/journal-homo-faber-2026-card.webp'},
    'biennale-di-venezia':{title:'Biennale di Venezia',description:'Giardini, Arsenale e mostre diffuse: arte, architettura e creatività trasformano la città.',image:'/images/journal-biennale.webp'}
  },
  en:{
    'amerigo-vespucci-venezia-2026':{title:'Amerigo Vespucci returns to Venice',description:'The Italian Navy training ship returns to Venice, with confirmed dates and practical information for planning a visit.',image:'/images/journal-amerigo-vespucci-venezia-2026-cover.webp'},
    'regata-storica-2026':{title:'Venice Historical Regatta 2026',description:'Historical water parade, Voga alla Veneta and rowing races on the Grand Canal.',image:'/images/journal-regata-storica-2026.webp'},
    'venice-glass-week-2026':{title:'The Venice Glass Week 2026',description:'The tenth edition celebrates glassmaking with more than 200 events across Venice, Mestre and Murano.',image:'/images/journal-venice-glass-week-2026-card.webp'},
    'carnevale-di-venezia':{title:'Venice Carnival',description:'Masks, parades, performances and a city that changes character for a few extraordinary weeks.',image:'/images/journal-carnevale.webp'},
    'festa-del-redentore':{title:'Festa del Redentore',description:'One of the nights Venetians care about most: tradition, boats and fireworks over the lagoon.',image:'/images/journal-redentore.webp'},
    'mostra-del-cinema':{title:'Venice Film Festival',description:'The Lido becomes an international cinema hub for premieres, screenings, awards and the red carpet.',image:'/images/journal-mostra-cinema.webp'},
    'homo-faber-2026':{title:'Homo Faber 2026: An Island of Light',description:'San Giorgio Maggiore celebrates contemporary craftsmanship from around the world.',image:'/images/journal-homo-faber-2026-card.webp'},
    'biennale-di-venezia':{title:'Venice Biennale',description:'Giardini, Arsenale and exhibitions across the city bring art, architecture and creativity to Venice.',image:'/images/journal-biennale.webp'}
  }
};

const localizedLegacy={de:journalDe,fr:journalFr,es:journalEs,zh:journalZh} as Record<'de'|'fr'|'es'|'zh',Record<string,LegacyCard>>;
function legacyCard(lang:EventLang,slug:(typeof legacySlugs)[number]):LegacyCard|undefined{
  return lang==='it'||lang==='en'?primaryLegacy[lang][slug]:localizedLegacy[lang][slug];
}
function hrefFor(lang:EventLang,slug:string){return `${lang==='it'?'':`/${lang}`}/journal/${slug}`;}

export async function GET(request:Request){
  const {searchParams}=new URL(request.url);
  const raw=searchParams.get('lang')||'it';
  const lang=(['it','en','de','fr','es','zh'] as const).includes(raw as EventLang)?raw as EventLang:'it';
  const dynamic=eventArticles(lang).filter(a=>a.startDate&&a.endDate).map(a=>{
    const local=journalEventImagePair(a.slug);
    return {slug:a.slug,startDate:a.startDate!,endDate:a.endDate!,title:a.title,description:a.description,image:local?.card||a.image,alt:a.imageAlt,href:hrefFor(lang,a.slug)};
  });
  const dynamicSlugs=new Set(dynamic.map(a=>a.slug));
  const legacy=legacySlugs.flatMap(slug=>{
    if(dynamicSlugs.has(slug))return [];
    const dates=eventCalendarDate(slug);const card=legacyCard(lang,slug);
    if(!dates||!card)return [];
    return [{slug,...dates,title:card.title,description:card.description,image:card.cardImage||card.image,alt:card.imageAlt||card.title,href:hrefFor(lang,slug)}];
  });
  const events=[...dynamic,...legacy].filter(e=>eventCalendarDates[e.slug as keyof typeof eventCalendarDates]).sort((a,b)=>a.startDate.localeCompare(b.startDate));
  return NextResponse.json({events},{headers:{'Cache-Control':'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'}});
}
