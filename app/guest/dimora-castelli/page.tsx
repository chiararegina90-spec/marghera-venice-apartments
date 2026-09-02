import {cookies} from 'next/headers';
import GuestAccessGate from '@/components/GuestAccessGate';
import GuestLanguageChooser from '@/components/GuestLanguageChooser';
import {guestCode, guestCookieName, hasValidGuestCookie} from '@/lib/guest-auth';

export default async function Page({searchParams}:{searchParams:Promise<{error?:string}>}){
  const jar=await cookies();
  const authenticated=await hasValidGuestCookie('dimora-castelli',jar.get(guestCookieName('dimora-castelli'))?.value);
  if(authenticated) return <GuestLanguageChooser apartment="dimora-castelli"/>;
  const query=await searchParams;
  return <GuestAccessGate apartment="dimora-castelli" error={query.error} configured={Boolean(guestCode('dimora-castelli'))}/>;
}
