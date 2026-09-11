import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import GuestAccessGate,{type GuestAccessLang} from '@/components/GuestAccessGate';
import GuestLanguageChooser from '@/components/GuestLanguageChooser';
import {guestCode, guestCookieName, hasValidGuestCookie} from '@/lib/guest-auth';

const validLang=(value?:string):value is GuestAccessLang=>Boolean(value&&['it','en','de','fr','es','zh'].includes(value));

export default async function Page({searchParams}:{searchParams:Promise<{error?:string;lang?:string}>}){
  // Preserve the language selected in the clean Welcome Book URL across the access gate.
  const query=await searchParams;
  const lang=validLang(query.lang)?query.lang:undefined;
  const jar=await cookies();
  const authenticated=await hasValidGuestCookie('dimora-castelli',jar.get(guestCookieName('dimora-castelli'))?.value);
  if(authenticated){
    if(lang) redirect(`/guest/dimora-castelli/${lang}`);
    return <GuestLanguageChooser apartment="dimora-castelli"/>;
  }
  return <GuestAccessGate apartment="dimora-castelli" lang={lang} error={query.error} configured={Boolean(guestCode('dimora-castelli'))}/>;
}
