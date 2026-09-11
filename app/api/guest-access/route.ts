import {NextRequest,NextResponse} from 'next/server';
import {guestCode,guestCookieName,guestToken,normalizeGuestCode,type GuestApartment} from '@/lib/guest-auth';

const validApartment=(value:string):value is GuestApartment=>value==='rossi'||value==='dimora-castelli';
const guestLanguages=new Set(['it','en','de','fr','es','zh']);

export async function POST(request:NextRequest){
  const data=await request.formData();
  const apartment=String(data.get('apartment')||'');
  const submitted=normalizeGuestCode(String(data.get('code')||''));
  const requestedLang=String(data.get('lang')||'');
  const lang=guestLanguages.has(requestedLang)?requestedLang:'';

  if(!validApartment(apartment)) return NextResponse.redirect(new URL('/guest',request.url),303);
  const expected=guestCode(apartment);
  if(!expected||submitted!==normalizeGuestCode(expected)){
    const invalidUrl=new URL(`/guest/${apartment}`,request.url);
    invalidUrl.searchParams.set('error','invalid');
    if(lang) invalidUrl.searchParams.set('lang',lang);
    return NextResponse.redirect(invalidUrl,303);
  }

  const destination=lang?`/guest/${apartment}/${lang}`:`/guest/${apartment}`;
  const response=NextResponse.redirect(new URL(destination,request.url),303);
  // Remove the legacy /guest-scoped cookie, then issue the session for the whole origin.
  // The broader path is required because protected Welcome Book images live under /guest-content/.
  response.cookies.set(guestCookieName(apartment),'',{
    httpOnly:true,
    secure:true,
    sameSite:'lax',
    path:'/guest',
    maxAge:0,
  });
  response.cookies.set(guestCookieName(apartment),await guestToken(apartment,expected),{
    httpOnly:true,
    secure:true,
    sameSite:'lax',
    path:'/',
    maxAge:60*60*24*30,
  });
  response.headers.set('Cache-Control','private, no-store');
  return response;
}
