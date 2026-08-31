'use client';

import {useEffect, useState} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

type Lang='it'|'en'|'de'|'fr'|'es'|'zh';
type Preferences={analytics:boolean;marketing:boolean};

const MEASUREMENT_ID='G-W2HWSG9YG1';
const META_PIXEL_ID='915955927794487';
const STORAGE_KEY='mva-cookie-consent-v3';

const copy={
  it:{title:'La tua privacy conta',text:'Con il tuo consenso usiamo Analytics per migliorare il sito e Meta Pixel per misurare le campagne e proporti comunicazioni più pertinenti. Puoi scegliere per categoria o rifiutare senza limitazioni.',acceptAll:'Accetta tutto',rejectAll:'Rifiuta non necessari',customize:'Personalizza',save:'Salva preferenze',analytics:'Analytics',analyticsText:'Statistiche sull’uso del sito e sui contatti più utilizzati.',marketing:'Marketing',marketingText:'Meta Pixel per misurare le campagne e creare pubblici pubblicitari.',necessary:'Necessari',alwaysActive:'Sempre attivi',back:'Torna indietro',policy:'Cookie Policy'},
  en:{title:'Your privacy matters',text:'With your consent, we use Analytics to improve the site and Meta Pixel to measure campaigns and show more relevant communications. You can choose by category or reject without restrictions.',acceptAll:'Accept all',rejectAll:'Reject non-essential',customize:'Customise',save:'Save preferences',analytics:'Analytics',analyticsText:'Statistics about site use and the most-used contact options.',marketing:'Marketing',marketingText:'Meta Pixel to measure campaigns and build advertising audiences.',necessary:'Necessary',alwaysActive:'Always active',back:'Go back',policy:'Cookie Policy'},
  de:{title:'Ihre Privatsphäre ist uns wichtig',text:'Mit Ihrer Einwilligung nutzen wir Analytics zur Verbesserung der Website und das Meta Pixel zur Messung von Kampagnen und für relevantere Werbung. Sie können nach Kategorie wählen oder ohne Einschränkungen ablehnen.',acceptAll:'Alle akzeptieren',rejectAll:'Nicht notwendige ablehnen',customize:'Anpassen',save:'Einstellungen speichern',analytics:'Analytics',analyticsText:'Statistiken zur Websitenutzung und zu bevorzugten Kontaktwegen.',marketing:'Marketing',marketingText:'Meta Pixel zur Kampagnenmessung und Bildung von Werbezielgruppen.',necessary:'Notwendig',alwaysActive:'Immer aktiv',back:'Zurück',policy:'Cookie-Richtlinie'},
  fr:{title:'Votre vie privée compte',text:'Avec votre consentement, nous utilisons Analytics pour améliorer le site et le pixel Meta pour mesurer les campagnes et proposer des communications plus pertinentes. Vous pouvez choisir par catégorie ou refuser sans restriction.',acceptAll:'Tout accepter',rejectAll:'Refuser les non essentiels',customize:'Personnaliser',save:'Enregistrer les préférences',analytics:'Analytics',analyticsText:'Statistiques sur l’utilisation du site et les moyens de contact utilisés.',marketing:'Marketing',marketingText:'Pixel Meta pour mesurer les campagnes et créer des audiences publicitaires.',necessary:'Nécessaires',alwaysActive:'Toujours actifs',back:'Retour',policy:'Politique relative aux cookies'},
  es:{title:'Tu privacidad importa',text:'Con tu consentimiento usamos Analytics para mejorar el sitio y Meta Pixel para medir campañas y ofrecer comunicaciones más pertinentes. Puedes elegir por categoría o rechazar sin limitaciones.',acceptAll:'Aceptar todo',rejectAll:'Rechazar no esenciales',customize:'Personalizar',save:'Guardar preferencias',analytics:'Analytics',analyticsText:'Estadísticas sobre el uso del sitio y las formas de contacto utilizadas.',marketing:'Marketing',marketingText:'Meta Pixel para medir campañas y crear audiencias publicitarias.',necessary:'Necesarias',alwaysActive:'Siempre activas',back:'Volver',policy:'Política de cookies'},
  zh:{title:'我们重视您的隐私',text:'经您同意后，我们会使用 Analytics 改进网站，并使用 Meta Pixel 衡量广告活动及提供更相关的信息。您可以按类别选择，也可以拒绝且不影响网站使用。',acceptAll:'全部接受',rejectAll:'拒绝非必要项',customize:'自定义',save:'保存偏好',analytics:'分析',analyticsText:'用于统计网站使用情况和常用联系方式。',marketing:'营销',marketingText:'使用 Meta Pixel 衡量广告活动并建立广告受众。',necessary:'必要',alwaysActive:'始终启用',back:'返回',policy:'Cookie 政策'}
} satisfies Record<Lang,Record<string,string>>;

interface MetaFbq {
  (...args:unknown[]):void;
  callMethod?: (...args:unknown[])=>void;
  queue?: unknown[][];
  push?: MetaFbq;
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args:unknown[])=>void;
    fbq?: MetaFbq;
    _fbq?: MetaFbq;
    __mvaGaConfigured?: boolean;
    __mvaMetaConfigured?: boolean;
  }
}

function ensureGtag(){
  window.dataLayer=window.dataLayer||[];
  if(!window.gtag) window.gtag=function(){window.dataLayer!.push(arguments);};
}

function loadScript(id:string,src:string){
  if(document.getElementById(id)) return;
  const script=document.createElement('script');
  script.id=id;
  script.async=true;
  script.src=src;
  document.head.appendChild(script);
}

function enableGoogleAnalytics(){
  ensureGtag();
  window.gtag?.('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  if(!window.__mvaGaConfigured){
    window.gtag?.('js',new Date());
    window.gtag?.('config',MEASUREMENT_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});
    window.__mvaGaConfigured=true;
  }
  loadScript('mva-ga4',`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`);
}

function disableGoogleAnalytics(){
  ensureGtag();
  window.gtag?.('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  clearCookies(name=>name==='_ga'||name.startsWith('_ga_'));
}

function ensureMetaPixel(){
  if(!window.fbq){
    const fbq:MetaFbq=function(...args:unknown[]){
      if(fbq.callMethod) fbq.callMethod(...args);
      else (fbq.queue=fbq.queue||[]).push(args);
    };
    fbq.push=fbq;
    fbq.loaded=true;
    fbq.version='2.0';
    window.fbq=fbq;
    window._fbq=fbq;
  }
  if(!window.__mvaMetaConfigured){
    window.fbq('init',META_PIXEL_ID);
    window.__mvaMetaConfigured=true;
  }
  window.fbq('consent','grant');
  loadScript('mva-meta-pixel','https://connect.facebook.net/en_US/fbevents.js');
}

function disableMetaPixel(){
  window.fbq?.('consent','revoke');
  clearCookies(name=>name==='_fbp'||name==='_fbc'||name.startsWith('fr'));
}

function clearCookies(matches:(name:string)=>boolean){
  const names=document.cookie.split(';').map(part=>part.split('=')[0].trim()).filter(matches);
  const domains=[undefined,window.location.hostname,`.${window.location.hostname.replace(/^www\./,'')}`];
  for(const name of names){
    for(const domain of domains){
      document.cookie=`${name}=; Max-Age=0; path=/; SameSite=Lax${domain?`; domain=${domain}`:''}`;
    }
  }
}

function applyPreferences(preferences:Preferences){
  if(preferences.analytics) enableGoogleAnalytics();
  else disableGoogleAnalytics();
  if(preferences.marketing) ensureMetaPixel();
  else disableMetaPixel();
}

function contentCategory(pathname:string){
  if(pathname.includes('/case/')||pathname.includes('/apartments/')) return 'apartment';
  const parts=pathname.split('/').filter(Boolean);
  const journalIndex=parts.indexOf('journal');
  if(journalIndex>=0&&journalIndex<parts.length-1) return 'journal';
  return null;
}

export default function AnalyticsConsent({lang}:{lang:Lang}){
  const pathname=usePathname();
  const searchParams=useSearchParams();
  const [preferences,setPreferences]=useState<Preferences|null>(null);
  const [draft,setDraft]=useState<Preferences>({analytics:false,marketing:false});
  const [ready,setReady]=useState(false);
  const [customizing,setCustomizing]=useState(false);
  const t=copy[lang];
  const base=lang==='it'?'':`/${lang}`;

  useEffect(()=>{
    ensureGtag();
    const raw=window.localStorage.getItem(STORAGE_KEY);
    if(raw){
      try{
        const saved=JSON.parse(raw) as Preferences;
        if(typeof saved.analytics==='boolean'&&typeof saved.marketing==='boolean'){
          applyPreferences(saved);
          setPreferences(saved);
          setDraft(saved);
        }
      }catch{
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    setReady(true);
  },[]);

  useEffect(()=>{
    const reopen=()=>{
      setDraft(preferences||{analytics:false,marketing:false});
      setCustomizing(true);
      setPreferences(null);
    };
    window.addEventListener('mva-cookie-settings',reopen);
    return()=>window.removeEventListener('mva-cookie-settings',reopen);
  },[preferences]);

  useEffect(()=>{
    if(!preferences) return;
    const query=searchParams.toString();
    const pagePath=query?`${pathname}?${query}`:pathname;
    if(preferences.analytics){
      window.gtag?.('event','page_view',{page_title:document.title,page_location:window.location.href,page_path:pagePath});
    }
    if(preferences.marketing){
      window.fbq?.('track','PageView');
      const category=contentCategory(pathname);
      if(category) window.fbq?.('track','ViewContent',{content_name:document.title,content_category:category,content_ids:[pathname],content_type:'product'});
    }
  },[preferences,pathname,searchParams]);

  useEffect(()=>{
    if(!preferences?.analytics&&!preferences?.marketing) return;
    const handler=(event:MouseEvent)=>{
      const target=(event.target as Element|null)?.closest('a') as HTMLAnchorElement|null;
      if(!target) return;
      const href=target.href||'';
      const isWhatsApp=href.startsWith('https://wa.me/')||href.includes('whatsapp.com/');
      const isEmail=href.startsWith('mailto:');
      const isPhone=href.startsWith('tel:');
      if(!isWhatsApp&&!isEmail&&!isPhone) return;
      const method=isWhatsApp?'whatsapp':isEmail?'email':'phone';
      if(preferences.analytics) window.gtag?.('event',`${method}_click`,{link_url:href,page_path:window.location.pathname});
      if(preferences.marketing) window.fbq?.('track','Contact',{content_name:method,content_category:'direct_contact'});
    };
    document.addEventListener('click',handler);
    return()=>document.removeEventListener('click',handler);
  },[preferences]);

  const save=(next:Preferences)=>{
    applyPreferences(next);
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(next));
    setDraft(next);
    setPreferences(next);
    setCustomizing(false);
  };

  if(!ready||preferences!==null) return null;
  return <div className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-white p-5 text-navy shadow-2xl md:bottom-6 md:p-6" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
    <h2 id="cookie-consent-title" className="font-serif text-xl font-bold">{t.title}</h2>
    {customizing?<div className="mt-4 grid gap-3">
      <div className="flex items-center justify-between rounded-2xl bg-cream p-4"><div><p className="font-bold">{t.necessary}</p><p className="text-sm text-navy/65">{t.alwaysActive}</p></div><span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-bold">ON</span></div>
      <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-navy/10 p-4"><span><span className="block font-bold">{t.analytics}</span><span className="mt-1 block text-sm text-navy/65">{t.analyticsText}</span></span><input type="checkbox" checked={draft.analytics} onChange={event=>setDraft(current=>({...current,analytics:event.target.checked}))} className="h-5 w-5 accent-[#c99b45]"/></label>
      <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-navy/10 p-4"><span><span className="block font-bold">{t.marketing}</span><span className="mt-1 block text-sm text-navy/65">{t.marketingText}</span></span><input type="checkbox" checked={draft.marketing} onChange={event=>setDraft(current=>({...current,marketing:event.target.checked}))} className="h-5 w-5 accent-[#c99b45]"/></label>
      <div className="mt-1 flex flex-wrap gap-2"><button type="button" onClick={()=>save(draft)} className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy">{t.save}</button><button type="button" onClick={()=>setCustomizing(false)} className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy">{t.back}</button></div>
    </div>:<div className="mt-2">
      <p className="text-sm leading-6 text-navy/70">{t.text} <a href={`${base}/cookie-policy`} className="font-semibold underline underline-offset-2 hover:text-gold">{t.policy}</a></p>
      <div className="mt-4 flex flex-wrap gap-2"><button type="button" onClick={()=>save({analytics:true,marketing:true})} className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5">{t.acceptAll}</button><button type="button" onClick={()=>save({analytics:false,marketing:false})} className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white">{t.rejectAll}</button><button type="button" onClick={()=>setCustomizing(true)} className="rounded-full border border-navy/20 px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white">{t.customize}</button></div>
    </div>}
  </div>;
}
