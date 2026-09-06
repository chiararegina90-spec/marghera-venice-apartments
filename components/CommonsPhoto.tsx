'use client';
import {useEffect,useState} from 'react';
import type {CultureLang} from '@/data/culturePlaces';
import {cultureUi} from '@/data/cultureTranslations';

type CommonsData={src:string|null;page?:string;artist?:string;license?:string;title?:string};
type StoredCredit={page:string;artist?:string;license?:string;title?:string;query:string};
const STORAGE_KEY='mva-commons-image-credits-v1';

function rememberCredit(data:CommonsData,query:string){
  if(typeof window==='undefined'||!data.page) return;
  try{
    const existing:StoredCredit[]=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
    const next=[...existing.filter(x=>x.page!==data.page),{page:data.page,artist:data.artist,license:data.license,title:data.title,query}].slice(-300);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(next));
  }catch{}
}

export default function CommonsPhoto({query,alt,lang='it',className='',sizes='100vw'}:{query:string;alt:string;lang?:CultureLang;className?:string;sizes?:string}){
  const [data,setData]=useState<CommonsData|undefined>();
  const ui=cultureUi[lang];
  useEffect(()=>{const ctrl=new AbortController();fetch(`/api/commons-image?q=${encodeURIComponent(query)}`,{signal:ctrl.signal}).then(r=>r.json()).then((result:CommonsData)=>{setData(result);rememberCredit(result,query)}).catch(()=>setData({src:null}));return()=>ctrl.abort();},[query]);
  if(!data) return <div className={`flex h-full w-full items-center justify-center bg-[#e9e2d7] px-6 text-center text-sm text-slate-500 ${className}`} aria-label={ui.imageLoading}><span>{ui.imageLoading}</span></div>;
  if(!data.src) return <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e9e2d7] to-[#d8c9ae] px-6 text-center text-sm text-slate-600 ${className}`}><span>{ui.noImage}</span></div>;
  return <img src={data.src} alt={alt} loading="lazy" decoding="async" sizes={sizes} className={`h-full w-full object-cover ${className}`}/>;
}

export {STORAGE_KEY};
