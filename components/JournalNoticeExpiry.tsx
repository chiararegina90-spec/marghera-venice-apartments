'use client';
import {useEffect,useState,type ReactNode} from 'react';
import {romeToday,romeNowMinute} from '@/lib/romeDate';
// Also hide expired notices in a page served from an older ISR cache or left open overnight.
export default function JournalNoticeExpiry({lastDay,lastMinute,children}:{lastDay:string;lastMinute?:string;children:ReactNode}){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{const refresh=()=>setVisible(lastMinute?romeNowMinute()<=lastMinute:romeToday()<=lastDay);refresh();const timer=setInterval(refresh,30000);return()=>clearInterval(timer);},[lastDay,lastMinute]);
 return visible?<>{children}</>:null;
}
