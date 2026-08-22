'use client';

import {useEffect, useState} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
type ConsentChoice='granted'|'denied'|null;

const MEASUREMENT_ID='G-W2HWSG9YG1';
const STORAGE_KEY='mva-analytics-consent-v2';

const copy:Record<Lang,{title:string;text:string;accept:string;reject:string;policy:string}>={
  it:{title:'La tua privacy conta',text:'Usiamo Google Analytics solo con il tuo consenso per capire come viene utilizzato il sito e migliorarlo. I cookie analitici restano disattivati finché non accetti.',accept:'Accetta analytics',reject:'Rifiuta',policy:'Cookie Policy'},
  en:{title:'Your privacy matters',text:'We use Google Analytics only with your consent to understand how the website is used and improve it. Analytics cookies stay disabled until you accept.',accept:'Accept analytics',reject:'Reject',policy:'Cookie Policy'},
  de:{title:'Ihre Privatsphäre ist uns wichtig',text:'Wir verwenden Google Analytics nur mit Ihrer Einwilligung, um die Nutzung der Website zu verstehen und sie zu verbessern. Analyse-Cookies bleiben deaktiviert, bis Sie zustimmen.',accept:'Analytics akzeptieren',reject:'Ablehnen',policy:'Cookie-Richtlinie'},
  fr:{title:'Votre vie privée compte',text:'Nous utilisons Google Analytics uniquement avec votre consentement afin de comprendre l’utilisation du site et de l’améliorer. Les cookies analytiques restent désactivés tant que vous n’acceptez pas.',accept:'Accepter Analytics',reject:'Refuser',policy:'Politique relative aux cookies'},
  es:{title:'Tu privacidad importa',text:'Usamos Google Analytics solo con tu consentimiento para comprender cómo se utiliza el sitio y mejorarlo. Las cookies analíticas permanecen desactivadas hasta que aceptes.',accept:'Aceptar Analytics',reject:'Rechazar',policy:'Política de cookies'},
  zh:{title:'我们重视您的隐私',text:'仅在您同意后，我们才会使用 Google Analytics 来了解网站的使用情况并改进体验。在您接受之前，分析 Cookie 将保持停用。',accept:'接受分析 Cookie',reject:'拒绝',policy:'Cookie 政策'}
};

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[])=>void;
    __mvaGaConfigured?: boolean;
  }
}

function ensureGtag(){
  window.dataLayer=window.dataLayer||[];
  if(!window.gtag){
    // Keep the exact queue format used by Google's official gtag snippet.
    window.gtag=function(){window.dataLayer!.push(arguments);};
  }
}

function updateConsent(value:'granted'|'denied'){
  ensureGtag();
  window.gtag?.('consent','update',{
    analytics_storage:value,
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied'
  });
}

function configureGoogleAnalytics(){
  ensureGtag();
  if(window.__mvaGaConfigured) return;
  window.gtag?.('js',new Date());
  window.gtag?.('config',MEASUREMENT_ID,{
    send_page_view:false,
    allow_google_signals:false,
    allow_ad_personalization_signals:false
  });
  window.__mvaGaConfigured=true;
}

function clearAnalyticsCookies(){
  const names=document.cookie.split(';').map(part=>part.split('=')[0].trim()).filter(name=>name==='_ga'||name.startsWith('_ga_'));
  const domains=[undefined,window.location.hostname,`.${window.location.hostname.replace(/^www\./,'')}`];
  for(const name of names){
    for(const domain of domains){
      document.cookie=`${name}=; Max-Age=0; path=/; SameSite=Lax${domain?`; domain=${domain}`:''}`;
    }
  }
}

export default function AnalyticsConsent({lang}:{lang:Lang}){
  const pathname=usePathname();
  const searchParams=useSearchParams();
  const [choice,setChoice]=useState<ConsentChoice>(null);
  const [ready,setReady]=useState(false);
  const t=copy[lang];
  const base=lang==='it'?'':`/${lang}`;

  useEffect(()=>{
    // The Google script is present in the server-rendered page, but no GA4
    // configuration/event is sent until the visitor grants analytics consent.
    ensureGtag();
    const saved=window.localStorage.getItem(STORAGE_KEY) as ConsentChoice;
    if(saved==='granted'){
      updateConsent('granted');
      configureGoogleAnalytics();
      setChoice('granted');
    }else if(saved==='denied'){
      updateConsent('denied');
      setChoice('denied');
    }
    setReady(true);

    const reopen=()=>{
      window.localStorage.removeItem(STORAGE_KEY);
      setChoice(null);
    };
    window.addEventListener('mva-cookie-settings',reopen);
    return()=>window.removeEventListener('mva-cookie-settings',reopen);
  },[]);

  useEffect(()=>{
    if(choice!=='granted') return;
    configureGoogleAnalytics();
    const query=searchParams.toString();
    const pagePath=query?`${pathname}?${query}`:pathname;
    window.gtag?.('event','page_view',{
      page_title:document.title,
      page_location:window.location.href,
      page_path:pagePath
    });
  },[choice,pathname,searchParams]);

  useEffect(()=>{
    if(choice!=='granted') return;
    const handler=(event:MouseEvent)=>{
      const target=(event.target as Element|null)?.closest('a') as HTMLAnchorElement|null;
      if(!target) return;
      const href=target.href||'';
      if(href.startsWith('https://wa.me/')||href.includes('whatsapp.com/')){
        window.gtag?.('event','whatsapp_click',{link_url:href,link_text:(target.textContent||'').trim().slice(0,100),page_path:window.location.pathname});
      }else if(href.startsWith('mailto:')){
        window.gtag?.('event','email_click',{link_url:href,page_path:window.location.pathname});
      }
    };
    document.addEventListener('click',handler);
    return()=>document.removeEventListener('click',handler);
  },[choice]);

  const accept=()=>{
    updateConsent('granted');
    configureGoogleAnalytics();
    window.localStorage.setItem(STORAGE_KEY,'granted');
    setChoice('granted');
  };

  const reject=()=>{
    updateConsent('denied');
    clearAnalyticsCookies();
    window.localStorage.setItem(STORAGE_KEY,'denied');
    setChoice('denied');
  };

  if(!ready||choice!==null) return null;
  return <div className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-white p-5 text-navy shadow-2xl md:bottom-6 md:p-6" role="dialog" aria-live="polite" aria-label={t.title}>
    <div className="md:flex md:items-center md:gap-6">
      <div className="min-w-0 flex-1">
        <h2 className="font-serif text-xl font-bold">{t.title}</h2>
        <p className="mt-2 text-sm leading-6 text-navy/70">{t.text} <a href={`${base}/cookie-policy`} className="font-semibold underline underline-offset-2 hover:text-gold">{t.policy}</a></p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 md:mt-0 md:shrink-0 md:flex-col">
        <button type="button" onClick={accept} className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5">{t.accept}</button>
        <button type="button" onClick={reject} className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white">{t.reject}</button>
      </div>
    </div>
  </div>;
}
