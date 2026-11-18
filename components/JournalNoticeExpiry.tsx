'use client';
import {useEffect,useState,type ReactNode} from 'react';
import {romeToday} from '@/lib/romeDate';
// Also hide expired notices in a page served from an older ISR cache or left open overnight.
export default function JournalNoticeExpiry({lastDay,children}:{lastDay:string;children:ReactNode}){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{const refresh=()=>setVisible(romeToday()<=lastDay);refresh();const timer=setInterval(refresh,30000);return()=>clearInterval(timer);},[lastDay]);
 return visible?<>{children}</>:null;
}
