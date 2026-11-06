import Link from 'next/link';
import type {SiteLang} from '@/lib/i18n';
import {localePath} from '@/lib/i18n';

type RouteKey='a'|'b'|'c'|'d'|'e';
const labels:Record<SiteLang,{eyebrow:string;title:string;description:string;maps:string;more:string}&Record<RouteKey,string>>={
  "it": {
    "eyebrow": "Dal libro · percorsi e mappe",
    "title": "Apri le tappe, non una corsa contro il tempo",
    "description": "I collegamenti aprono percorsi pedonali indicativi su Google Maps; non includono attese dei vaporetti, visite o condizioni di accessibilità. Controlla gli approdi ACTV prima di partire.",
    "a": "Percorso a piedi · Frari, San Polo, Rialto, San Marco",
    "b": "Da Rialto a San Marco · Mercerie",
    "c": "Dorsoduro · Accademia, Zattere, Salute",
    "d": "Cannaregio · Ghetto e Misericordia",
    "e": "Castello · Arsenale, Giardini e Sant'Elena",
    "maps": "Apri il percorso",
    "more": "Tutti gli itinerari"
  },
  "en": {
    "eyebrow": "From the book · routes and maps",
    "title": "Open a route, not a race against time",
    "description": "Links show approximate walking directions in Google Maps; boat waits, sightseeing and step-free access are not included. Check ACTV before travelling.",
    "a": "Walking via Frari, San Polo, Rialto and St Mark's",
    "b": "Rialto to St Mark's through the Mercerie",
    "c": "Dorsoduro: Accademia, Zattere and Salute",
    "d": "Cannaregio: Ghetto and Misericordia",
    "e": "Castello: Arsenale, Giardini and Sant'Elena",
    "maps": "Open walking route",
    "more": "All itineraries"
  },
  "de": {
    "eyebrow": "Aus dem Buch · Karten",
    "title": "Wege öffnen, nicht die Zeit stoppen",
    "description": "Google Maps zeigt ungefähre Fußwege; Fährenwartezeiten, Besichtigungen und Barrierefreiheit sind nicht berücksichtigt. ACTV vorher prüfen.",
    "a": "Frari, San Polo, Rialto und Markusplatz zu Fuß",
    "b": "Rialto zum Markusplatz über Mercerie",
    "c": "Dorsoduro: Accademia, Zattere und Salute",
    "d": "Cannaregio: Ghetto und Misericordia",
    "e": "Castello: Arsenale, Giardini und Sant'Elena",
    "maps": "Fußweg öffnen",
    "more": "Alle Routen"
  },
  "fr": {
    "eyebrow": "Du livre · parcours et cartes",
    "title": "Ouvrir un parcours, pas un chronomètre",
    "description": "Google Maps propose des marches indicatives, sans attente des vaporetti, visite ni garantie d'accessibilité. Vérifiez ACTV.",
    "a": "À pied : Frari, San Polo, Rialto et Saint-Marc",
    "b": "Rialto à Saint-Marc par les Mercerie",
    "c": "Dorsoduro : Accademia, Zattere et Salute",
    "d": "Cannaregio : Ghetto et Misericordia",
    "e": "Castello : Arsenale, Giardini et Sant'Elena",
    "maps": "Ouvrir l'itinéraire",
    "more": "Tous les parcours"
  },
  "es": {
    "eyebrow": "Del libro · rutas y mapas",
    "title": "Abre una ruta, no un cronómetro",
    "description": "Google Maps ofrece rutas a pie orientativas; no incluye espera de barcos, visitas ni garantiza accesibilidad. Consulta ACTV.",
    "a": "A pie por Frari, San Polo, Rialto y San Marcos",
    "b": "Rialto a San Marcos por Mercerie",
    "c": "Dorsoduro: Accademia, Zattere y Salute",
    "d": "Cannaregio: Gueto y Misericordia",
    "e": "Castello: Arsenale, Giardini y Sant'Elena",
    "maps": "Abrir recorrido",
    "more": "Todos los itinerarios"
  },
  "zh": {
    "eyebrow": "书中延伸 · 步行路线图",
    "title": "用地图规划路线，不必一路赶时间",
    "description": "链接打开 Google Maps 建议步行路线，不包含候船、参观和无障碍条件。出发前请查 ACTV。",
    "a": "步行经过 Frari、San Polo、Rialto 与圣马可",
    "b": "Rialto 经 Mercerie 到圣马可",
    "c": "Dorsoduro：Accademia、Zattere 和 Salute",
    "d": "Cannaregio：犹太区与 Misericordia",
    "e": "Castello：Arsenale、Giardini 与 Sant'Elena",
    "maps": "打开步行地图",
    "more": "全部路线"
  }
};
const walkingRoutes:Record<RouteKey,{origin:string;destination:string;waypoints:string[]}>={
 a:{origin:'Piazzale Roma Venezia',destination:'Piazza San Marco Venezia',waypoints:['Basilica dei Frari Venezia','Campo San Polo Venezia','Ponte di Rialto Venezia']},
 b:{origin:'Ponte di Rialto Venezia',destination:'Piazza San Marco Venezia',waypoints:['Mercerie Venezia']},
 c:{origin:'Ponte dell Accademia Venezia',destination:'Punta della Dogana Venezia',waypoints:['Fondamenta Zattere Venezia','Basilica della Salute Venezia']},
 d:{origin:'Campo del Ghetto Nuovo Venezia',destination:'Madonna dell Orto Venezia',waypoints:['Fondamenta della Misericordia Venezia']},
 e:{origin:'Arsenale di Venezia',destination:'Sant Elena Venezia',waypoints:['Via Garibaldi Venezia','Giardini della Biennale Venezia']}
};
const displayed:Record<string,RouteKey[]>={
 'itinerari-venezia-1-7-giorni':['a','c','d','e'],
 'venezia-in-un-giorno':['a','b'],
 'venezia-in-due-o-tre-giorni':['b','c','d'],
 'venezia-in-una-settimana':['c','d','e']
};
function directions(key:RouteKey){
 const r=walkingRoutes[key];
 const params=new URLSearchParams({api:'1',origin:r.origin,destination:r.destination,waypoints:r.waypoints.join('|'),travelmode:'walking'});
 return 'https://www.google.com/maps/dir/?'+params.toString();
}
export default function BookBCItineraryMaps({lang,slug}:{lang:SiteLang;slug:string}){
 const keys=displayed[slug];if(!keys)return null;
 const t=labels[lang];
 return <section className="border-y border-gold/25 bg-[#f8f4eb] py-12 sm:py-14" aria-label={t.eyebrow}>
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
   <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{t.eyebrow}</p>
   <h2 className="mt-3 max-w-4xl font-serif text-3xl text-navy sm:text-4xl">{t.title}</h2>
   <p className="mt-3 max-w-4xl leading-7 text-slate-600">{t.description}</p>
   <div className="mt-7 grid gap-4 md:grid-cols-2">{keys.map(key=><a key={key} href={directions(key)} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-navy/15 bg-white px-6 py-5 shadow-sm transition hover:border-gold">
    <span className="block font-serif text-xl text-navy">{t[key]}</span>
    <span className="mt-3 block text-sm font-bold text-[#8a692f]">{t.maps} ↗</span>
   </a>)}</div>
   {slug!=='itinerari-venezia-1-7-giorni'&&<Link href={localePath('/guide/itinerari-venezia-1-7-giorni',lang)} className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">{t.more} →</Link>}
  </div>
 </section>;
}
