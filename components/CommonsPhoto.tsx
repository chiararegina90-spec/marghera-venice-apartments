'use client';
import {useEffect,useState} from 'react';
import type {CultureLang} from '@/data/culturePlaces';

type CommonsData={src:string|null;page?:string;artist?:string;license?:string;title?:string};
type StoredCredit={page:string;artist?:string;license?:string;title?:string;query:string};
const STORAGE_KEY='mva-commons-image-credits-v1';

const overrides:[RegExp,string][]=[
  [/gallerie dell[’']accademia|accademia.*venez/i,"File:Gallerie dell'Accademia di Venezia (facciata).jpg"],
  [/peggy guggenheim|palazzo venier dei leoni/i,'File:Palazzo Venier dei Leoni (Peggy Guggenheim Collection), Venice (37100733803).jpg'],
  [/querini stampalia/i,'File:Facciataquerinistampalia.jpg'],
  [/palazzo grassi/i,'File:Palazzo grassi facade.JPG'],
  [/torre dell[’']orologio|clocktower.*san marco|st\. mark.*clock/i,"File:St. Mark's Clocktower (Torre dell'orologio), Piazza San Marco, Venice (30847247672).jpg"],
  [/ca[’'] foscari|palazzo foscari/i,"File:(Venice) Ca' Foscari.jpg"],
  [/fondazione giorgio cini/i,'File:San Giorgio Maggiore IMG 9214 Fondazione Giorgio Cini.jpg'],
  [/campanile di san marco|st\. mark.*campanile/i,'File:Campanile di San Marco Venezia.jpg'],
  [/punta della dogana/i,'Punta della Dogana Venice customs house triangular facade exterior'],
  [/abbazia di san giorgio maggiore|san giorgio maggiore.*abbey/i,'File:Venezia - San Giorgio Maggiore at golden hour seen from NE.jpg'],
  [/chiesa di santo stefano|santo stefano.*venice/i,'Santo Stefano Venice church facade entrance exterior'],
  [/chiesa di san polo|san polo.*church/i,'San Polo church Venice facade exterior main church'],
  [/san pietro di castello/i,'File:San Pietro di Castello Facciata.jpg'],
  [/san nicol[oò] dei mendicoli/i,'File:Chiesa di San Nicolò dei Mendicoli - Venezia.jpg'],
  [/gesuati|santa maria del rosario/i,'File:Gesuati facade Venice.jpg'],
  [/chiesa delle zitelle|le zitelle/i,'File:Venice, Giudecca, Le Zitelle, facade.jpg'],
  [/chiesa delle penitenti|penitenti.*venice/i,'Chiesa delle Penitenti Venice church facade Fondamenta Cannaregio exterior'],
  [/museo archeologico nazionale di adria/i,'Museo Archeologico Nazionale di Adria building facade exterior'],
  [/murano.*glass|glass.*murano|vetro.*murano|fornace.*murano/i,'Murano glassblowing furnace glassmaker Venice'],
];
const venetoWords=/verona|padova|vicenza|treviso|rovigo|adria|belluno|asolo|bassano|marostica|montagnana|este|cittadella|valdobbiadene|prosecco|arqu[aà] petrarca|vittorio veneto/i;
function resolvedQuery(query:string){for(const [rx,value] of overrides)if(rx.test(query))return value;return query;}
function inferredFallback(query:string){return venetoWords.test(query)?'/images/veneto-hero-prosecco-final.webp':'/images/scopri-venezia-michael-heise.webp';}
function rememberCredit(data:CommonsData,query:string){
  if(typeof window==='undefined'||!data.page)return;
  try{const existing:StoredCredit[]=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');const next=[...existing.filter(x=>x.page!==data.page),{page:data.page,artist:data.artist,license:data.license,title:data.title,query}].slice(-400);localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}catch{}
}

export default function CommonsPhoto({query,alt,lang='it',className='',sizes='100vw',fallbackSrc,priority=false}:{query:string;alt:string;lang?:CultureLang;className?:string;sizes?:string;fallbackSrc?:string;priority?:boolean}){
  const [data,setData]=useState<CommonsData|undefined>();
  const effectiveQuery=resolvedQuery(query);
  const fallback=fallbackSrc||inferredFallback(query);
  useEffect(()=>{const ctrl=new AbortController();setData(undefined);fetch(`/api/commons-image?q=${encodeURIComponent(effectiveQuery)}`,{signal:ctrl.signal}).then(r=>r.ok?r.json():Promise.reject(new Error(String(r.status)))).then((result:CommonsData)=>{setData(result);rememberCredit(result,effectiveQuery)}).catch(()=>setData({src:null}));return()=>ctrl.abort();},[effectiveQuery]);
  const src=data?.src||fallback;
  return <img src={src} alt={alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" sizes={sizes} className={`h-full w-full object-cover ${className}`}/>;
}

export {STORAGE_KEY};
