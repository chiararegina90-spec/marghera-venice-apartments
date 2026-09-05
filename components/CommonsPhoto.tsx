'use client';
import {useEffect,useState} from 'react';
import type {CultureLang} from '@/data/culturePlaces';
import {cultureUi} from '@/data/cultureTranslations';

type CommonsData={src:string|null;page?:string;artist?:string;license?:string;title?:string};
export default function CommonsPhoto({query,alt,lang='it',className='',creditClassName='',sizes='100vw'}:{query:string;alt:string;lang?:CultureLang;className?:string;creditClassName?:string;sizes?:string}){
  const [data,setData]=useState<CommonsData|undefined>();
  const ui=cultureUi[lang];
  useEffect(()=>{const ctrl=new AbortController();fetch(`/api/commons-image?q=${encodeURIComponent(query)}`,{signal:ctrl.signal}).then(r=>r.json()).then(setData).catch(()=>setData({src:null}));return()=>ctrl.abort();},[query]);
  if(!data) return <div className={`flex h-full w-full items-center justify-center bg-[#e9e2d7] px-6 text-center text-sm text-slate-500 ${className}`} aria-label={ui.imageLoading}><span>{ui.imageLoading}</span></div>;
  if(!data.src) return <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e9e2d7] to-[#d8c9ae] px-6 text-center text-sm text-slate-600 ${className}`}><span>{ui.noImage}</span></div>;
  return <><img src={data.src} alt={alt} loading="lazy" decoding="async" sizes={sizes} className={`h-full w-full object-cover ${className}`}/>{data.page&&<a href={data.page} target="_blank" rel="noopener noreferrer license" className={`absolute bottom-2 right-2 max-w-[85%] rounded-lg bg-black/65 px-2.5 py-1.5 text-right text-[10px] leading-4 text-white backdrop-blur-sm hover:bg-black/80 ${creditClassName}`} title={`${data.artist||''} · ${data.license||''}`}>{ui.imageCredit}{data.artist?` · ${data.artist.replace(/<[^>]*>/g,'').slice(0,80)}`:''}{data.license?` · ${data.license}`:''} ↗</a>}</>;
}
