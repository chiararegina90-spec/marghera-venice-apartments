'use client';
export default function CookieSettingsButton({label}:{label:string}){
  return <button type="button" className="hover:text-white" onClick={()=>window.dispatchEvent(new Event('mva-cookie-settings'))}>{label}</button>;
}
